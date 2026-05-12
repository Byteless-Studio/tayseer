// ─── arabic-101.server.ts ────────────────────────────────────────────────────
// Server-only module — prefixed with `-` so Vinxi never includes it in the
// client bundle. Imported exclusively via dynamic `await import(...)` inside
// createServerFn handlers, which only execute on the server.
//
// S3 bucket structure:
//   book-1-lectures/
//     {lectureDir}/
//       {lectureDir}.json   ← lecture metadata & content
//       {lectureDir}.ogg    ← optional class recording
//   book-2-lectures/
//     ...
//
// CloudFront sits in front of the bucket for audio/image delivery.

import { S3Client, ListObjectsV2Command, GetObjectCommand } from '@aws-sdk/client-s3'
import { courses } from '#/config/site'
import type { Book, Lecture } from './-arabic-101.types'

// Credentials passed explicitly because the SDK default env var name is
// AWS_SECRET_ACCESS_KEY, which matches what we set.
const s3 = new S3Client({
  region: process.env['AWS_REGION'] ?? 'us-east-1',
  credentials: {
    accessKeyId: process.env['AWS_ACCESS_KEY_ID'] ?? '',
    secretAccessKey: process.env['AWS_SECRET_ACCESS_KEY'] ?? '',
  },
})

const BUCKET = 'arabic-with-mufti-saim-789915097776-us-east-1-an'
const course = courses['arabic-101']

// ─── URL helpers ─────────────────────────────────────────────────────────────

// Prefer CloudFront for audio/image delivery. Falls back to the direct S3 URL
// if cloudfrontUrl is not configured (useful for local dev without CF).
function mediaUrl(key: string): string {
  const cf = course.cloudfrontUrl
  if (cf) return `${cf.replace(/\/$/, '')}/${key}`
  return `https://${BUCKET}.s3.${process.env['AWS_REGION'] ?? 'us-east-1'}.amazonaws.com/${key}`
}

// ─── S3 helpers ──────────────────────────────────────────────────────────────

// S3 ListObjects returns at most 1000 keys per request. This loop follows
// continuation tokens until all keys under the prefix are collected.
async function listPrefix(prefix: string): Promise<string[]> {
  const keys: string[] = []
  let continuationToken: string | undefined

  do {
    const res = await s3.send(
      new ListObjectsV2Command({
        Bucket: BUCKET,
        Prefix: prefix,
        ContinuationToken: continuationToken,
      }),
    )
    for (const obj of res.Contents ?? []) {
      if (obj.Key) keys.push(obj.Key)
    }
    continuationToken = res.IsTruncated ? res.NextContinuationToken : undefined
  } while (continuationToken)

  return keys
}

// Fetches and parses a JSON file from S3. Returns null on any error (missing
// key, malformed JSON) so callers can skip gracefully.
async function getJson<T>(key: string): Promise<T | null> {
  try {
    const res = await s3.send(new GetObjectCommand({ Bucket: BUCKET, Key: key }))
    const body = await res.Body?.transformToString('utf-8')
    if (!body) return null
    return JSON.parse(body) as T
  } catch {
    return null
  }
}

// ─── File type detection ──────────────────────────────────────────────────────

const AUDIO_EXTS = ['.ogg', '.mp3', '.m4a', '.wav']

function isAudio(key: string): boolean {
  return AUDIO_EXTS.some((ext) => key.endsWith(ext))
}

function isJson(key: string): boolean {
  return key.endsWith('.json')
}

// ─── Lecture loading ──────────────────────────────────────────────────────────

// Given a flat list of S3 keys under a book prefix, groups them by the first
// path segment (the lecture directory name). Each group contains all files
// belonging to one lecture (its JSON and optional audio).
//
// Example: "book-1-lectures/lesson-01/lesson-01.json" → segment "lesson-01"
function groupByEntry(bookPrefix: string, keys: string[]): Map<string, string[]> {
  const groups = new Map<string, string[]>()

  for (const key of keys) {
    const rel = key.slice(bookPrefix.length)
    const slash = rel.indexOf('/')
    const segment = slash === -1 ? rel : rel.slice(0, slash)
    if (!segment) continue

    const group = groups.get(segment) ?? []
    group.push(key)
    groups.set(segment, group)
  }

  return groups
}

// Builds a Lecture from the files in one lecture directory. The JSON file is
// required; the audio file is optional. The _bookNumber, _lectureDir, and
// _audioUrl fields are injected at runtime — they don't exist in the S3 JSON.
async function loadLectureFromKeys(
  bookNumber: number,
  entryName: string,
  keys: string[],
): Promise<Lecture | null> {
  const jsonKey = keys.find(isJson)
  const audioKey = keys.find(isAudio)

  if (!jsonKey) return null

  const lecture = await getJson<Lecture>(jsonKey)
  if (!lecture) return null

  lecture._bookNumber = bookNumber
  lecture._lectureDir = entryName

  if (audioKey) {
    lecture._audioUrl = mediaUrl(audioKey)
  }

  return lecture
}

// ─── Public API ───────────────────────────────────────────────────────────────

// Loads all books and their lectures in parallel. Books with no lectures are
// still returned (empty array) so the UI can show them as placeholders.
// Lectures within each book are sorted ascending by date.
export async function loadAllBooks(): Promise<Book[]> {
  const bookConfigs = course.books

  const books = await Promise.all(
    bookConfigs.map(async (cfg) => {
      const bookPrefix = `${course.s3Prefix}${cfg.dir}/`
      let lectures: Lecture[] = []

      try {
        const keys = await listPrefix(bookPrefix)
        console.log(`[arabic-101] ${bookPrefix} → ${keys.length} keys`)

        const groups = groupByEntry(bookPrefix, keys)

        const rawLectures = await Promise.all(
          Array.from(groups.entries()).map(([entryName, entryKeys]) =>
            loadLectureFromKeys(cfg.number, entryName, entryKeys),
          ),
        )

        lectures = (rawLectures.filter(Boolean) as Lecture[]).sort((a, b) => {
          if (a.date && b.date) return a.date < b.date ? -1 : a.date > b.date ? 1 : 0
          if (a.date) return -1
          if (b.date) return 1
          return 0
        })
      } catch (err) {
        console.error(`[arabic-101] failed to load ${bookPrefix}:`, err)
      }

      return { number: cfg.number, name: cfg.name, dir: cfg.dir, lectures }
    }),
  )

  return books
}

// Loads a single lecture by book number + directory name. Tries the directory
// format first (lectureDir/ folder with JSON + audio inside), then falls back
// to a flat single-file format (lectureDir.json with no audio). This supports
// both upload styles from the publish pipeline.
export async function loadLecture(
  bookNumber: number,
  lectureDir: string,
): Promise<Lecture | null> {
  const bookCfg = course.books.find((b) => b.number === bookNumber)
  if (!bookCfg) return null

  const prefix = `${course.s3Prefix}${bookCfg.dir}/${lectureDir}`
  const dirKeys = await listPrefix(`${prefix}/`)

  if (dirKeys.length > 0) {
    return loadLectureFromKeys(bookNumber, lectureDir, dirKeys)
  }

  // Fallback: some older lectures were published as a bare .json file
  const jsonKey = `${prefix}.json`
  const lecture = await getJson<Lecture>(jsonKey)
  if (!lecture) return null

  lecture._bookNumber = bookNumber
  lecture._lectureDir = lectureDir
  return lecture
}

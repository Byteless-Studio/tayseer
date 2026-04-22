import { readFileSync, readdirSync, statSync } from 'node:fs'
import { join } from 'node:path'
import { courses } from '#/config/site'

// ─── Types ────────────────────────────────────────────────────────────────────

export interface Lecture {
  id: string
  title?: string
  summary?: string
  key_points?: string[]
  tags?: string[]
  transcript?: string
  questions?: Array<{ q?: string; a?: string } | string>
  platform?: string
  ts?: number
  source?: Record<string, unknown>
  /** Public URL to the original audio recording, e.g. /arabic-101-.../lecture-1.ogg */
  _audioUrl?: string
  /** Injected at load time — not in the JSON file */
  _bookNumber?: number
  /** Lecture directory name under the book dir — used to build URLs */
  _lectureDir?: string
  [key: string]: unknown
}

export interface Book {
  number: number
  name: string
  dir: string
  lectures: Lecture[]
}

// ─── Helpers ─────────────────────────────────────────────────────────────────

function coursePublicDir(): string {
  return join(process.cwd(), 'public', courses['arabic-101'].publicDir)
}

/**
 * Build the URL param used to identify a lecture:
 *   bookNumber=2, lectureDir="lecture1"  →  "2_lecture1"
 */
export function encodeLectureId(bookNumber: number, lectureDir: string): string {
  return `${bookNumber}_${lectureDir}`
}

/**
 * Parse the URL param back to book number and lecture directory name:
 *   "2_lecture1"  →  { bookNumber: 2, lectureDir: "lecture1" }
 */
export function decodeLectureId(lectureId: string): {
  bookNumber: number
  lectureDir: string
} {
  const underscoreIdx = lectureId.indexOf('_')
  const bookNumber = parseInt(lectureId.slice(0, underscoreIdx), 10)
  const lectureDir = lectureId.slice(underscoreIdx + 1)
  return { bookNumber, lectureDir }
}

/**
 * Compute the public-facing URL for a file inside the course public dir.
 * e.g. book-2-lectures/lecture1/lecture-1.ogg → /arabic-101-.../book-2-lectures/lecture1/lecture-1.ogg
 */
function publicUrl(...segments: string[]): string {
  return '/' + [courses['arabic-101'].publicDir, ...segments].join('/')
}

// ─── Loaders ─────────────────────────────────────────────────────────────────

/**
 * Load all books with their lectures.
 * Each lecture lives in its own subdirectory inside the book folder:
 *   book-N-lectures/
 *     lectureDir/
 *       *.json   ← lecture data
 *       *.ogg    ← original recording (optional)
 */
export function loadAllBooks(): Book[] {
  const dir = coursePublicDir()
  const bookConfigs = courses['arabic-101'].books

  return bookConfigs.map((cfg) => {
    const bookDir = join(dir, cfg.dir)
    let lectures: Lecture[] = []

    try {
      const entries = readdirSync(bookDir).sort()

      lectures = entries.flatMap((entry) => {
        const entryPath = join(bookDir, entry)

        try {
          const stat = statSync(entryPath)

          if (stat.isDirectory()) {
            // New layout: each lecture is a subdirectory
            return loadLectureFromDir(cfg.number, cfg.dir, entry, entryPath) ?? []
          } else if (entry.endsWith('.json')) {
            // Legacy flat layout: JSON file directly in book dir
            return loadLectureFromFile(cfg.number, entry, entryPath) ?? []
          }
        } catch {}

        return []
      })
    } catch {
      // Book directory doesn't exist yet — return empty
    }

    return {
      number: cfg.number,
      name: cfg.name,
      dir: cfg.dir,
      lectures,
    }
  })
}

/**
 * Load a single lecture by book number and lecture directory name.
 */
export function loadLecture(bookNumber: number, lectureDir: string): Lecture | null {
  const bookCfg = courses['arabic-101'].books.find((b) => b.number === bookNumber)
  if (!bookCfg) return null

  const bookDirPath = join(coursePublicDir(), bookCfg.dir)
  const lecturePath = join(bookDirPath, lectureDir)

  try {
    const stat = statSync(lecturePath)
    if (stat.isDirectory()) {
      return loadLectureFromDir(bookNumber, bookCfg.dir, lectureDir, lecturePath)
    }
  } catch {}

  // Fallback: treat lectureDir as a filename stem
  return loadLectureFromFile(bookNumber, `${lectureDir}.json`, join(bookDirPath, `${lectureDir}.json`))
}

// ─── Internal helpers ─────────────────────────────────────────────────────────

function loadLectureFromDir(
  bookNumber: number,
  bookDirName: string,
  lectureDir: string,
  lectureDirPath: string,
): Lecture | null {
  try {
    const files = readdirSync(lectureDirPath)

    const jsonFile = files.find((f) => f.endsWith('.json'))
    const oggFile = files.find((f) => f.endsWith('.ogg') || f.endsWith('.mp3') || f.endsWith('.m4a') || f.endsWith('.wav'))

    if (!jsonFile) return null

    const raw = readFileSync(join(lectureDirPath, jsonFile), 'utf-8')
    const lecture = JSON.parse(raw) as Lecture

    lecture._bookNumber = bookNumber
    lecture._lectureDir = lectureDir

    if (oggFile) {
      lecture._audioUrl = publicUrl(bookDirName, lectureDir, oggFile)
    }

    return lecture
  } catch {
    return null
  }
}

function loadLectureFromFile(
  bookNumber: number,
  fileName: string,
  filePath: string,
): Lecture | null {
  try {
    const raw = readFileSync(filePath, 'utf-8')
    const lecture = JSON.parse(raw) as Lecture
    lecture._bookNumber = bookNumber
    lecture._lectureDir = fileName.replace(/\.json$/, '')
    return lecture
  } catch {
    return null
  }
}

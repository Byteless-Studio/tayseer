import { readFileSync, readdirSync, writeFileSync, mkdirSync } from 'node:fs'
import { join } from 'node:path'

export interface Lecture {
  video_id: string
  url?: string
  thumbnail?: string
  published?: string
  title?: string
  summary?: string
  tags?: string[]
  key_points?: string[]
  transcript?: string
  [key: string]: unknown
}

function contentDir(): string {
  return join(process.cwd(), 'content')
}

export function loadAll(): Lecture[] {
  const dir = contentDir()
  try {
    mkdirSync(dir, { recursive: true })
  } catch {}
  const files = readdirSync(dir)
    .filter((f) => f.endsWith('.json'))
    .sort()
  const lectures: Lecture[] = []
  for (const file of files) {
    try {
      const text = readFileSync(join(dir, file), 'utf-8')
      lectures.push(JSON.parse(text) as Lecture)
    } catch {}
  }
  lectures.sort((a, b) => {
    const da = a.published ?? ''
    const db = b.published ?? ''
    return db.localeCompare(da)
  })
  return lectures
}

export function loadOne(videoId: string): Lecture | null {
  const path = join(contentDir(), `${videoId}.json`)
  try {
    return JSON.parse(readFileSync(path, 'utf-8')) as Lecture
  } catch {
    return null
  }
}

export function saveOne(data: Lecture): void {
  const dir = contentDir()
  mkdirSync(dir, { recursive: true })
  writeFileSync(
    join(dir, `${data.video_id}.json`),
    JSON.stringify(data, null, 2),
    'utf-8',
  )
}

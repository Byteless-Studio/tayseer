import { readFileSync, readdirSync, statSync } from 'node:fs'
import { join } from 'node:path'
import { courses } from '#/config/site'
import type { Book, Lecture } from './arabic-101'

function coursePublicDir(): string {
  return join(process.cwd(), 'public', courses['arabic-101'].publicDir)
}

function publicUrl(...segments: string[]): string {
  return '/' + [courses['arabic-101'].publicDir, ...segments].join('/')
}

export function loadAllBooks(): Book[] {
  const dir = coursePublicDir()
  const bookConfigs = courses['arabic-101'].books

  return bookConfigs.map((cfg) => {
    const bookDir = join(dir, cfg.dir)
    let lectures: Lecture[] = []

    try {
      const entries = readdirSync(bookDir).sort()

      const rawLectures = entries.flatMap((entry) => {
        const entryPath = join(bookDir, entry)

        try {
          const stat = statSync(entryPath)

          if (stat.isDirectory()) {
            return loadLectureFromDir(cfg.number, cfg.dir, entry, entryPath) ?? []
          } else if (entry.endsWith('.json')) {
            return loadLectureFromFile(cfg.number, entry, entryPath) ?? []
          }
        } catch {}

        return []
      })

      lectures = rawLectures.sort((a, b) => {
        if (a.date && b.date) return a.date < b.date ? -1 : a.date > b.date ? 1 : 0
        if (a.date) return -1
        if (b.date) return 1
        return 0
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

  return loadLectureFromFile(bookNumber, `${lectureDir}.json`, join(bookDirPath, `${lectureDir}.json`))
}

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

// Client-safe types and pure functions only.
// Anything that uses AWS SDK lives in arabic-101.server.ts

export interface QuizItem {
  q: string
  a: string
  options?: string[]
  correctIndex?: number
}

export interface QuranExample {
  arabic: string
  transliteration?: string
  translation: string
  reference?: string
  note?: string
}

export interface Lecture {
  id: string
  date?: string
  title?: string
  summary?: string
  key_points?: string[]
  tags?: string[]
  transcript?: string
  questions?: Array<{ q?: string; a?: string } | string>
  quiz?: QuizItem[]
  quran_examples?: QuranExample[]
  platform?: string
  ts?: number
  source?: Record<string, unknown>
  _audioUrl?: string
  _bookNumber?: number
  _lectureDir?: string
  [key: string]: unknown
}

export interface Book {
  number: number
  name: string
  dir: string
  lectures: Lecture[]
}

export function encodeLectureId(bookNumber: number, lectureDir: string): string {
  return `${bookNumber}_${lectureDir}`
}

export function decodeLectureId(lectureId: string): {
  bookNumber: number
  lectureDir: string
} {
  const underscoreIdx = lectureId.indexOf('_')
  const bookNumber = parseInt(lectureId.slice(0, underscoreIdx), 10)
  const lectureDir = lectureId.slice(underscoreIdx + 1)
  return { bookNumber, lectureDir }
}

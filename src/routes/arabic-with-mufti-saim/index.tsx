import { createFileRoute, Link } from '@tanstack/react-router'
import { createServerFn } from '@tanstack/react-start'
import { useState } from 'react'
import { encodeLectureId, type Book, type Lecture } from '#/routes/arabic-with-mufti-saim/-arabic-101.types'
import { courses } from '#/config/site'

const course = courses['arabic-101']

// Dynamic import keeps the AWS SDK out of the client bundle. Static imports at
// the top of this file would be analyzed by Vite and included client-side.
const fetchAllBooks = createServerFn({ method: 'GET' }).handler(async () => {
  const { loadAllBooks } = await import('#/routes/arabic-with-mufti-saim/-arabic-101.server')
  return loadAllBooks()
})

export const Route = createFileRoute('/arabic-with-mufti-saim/')({
  loader: () => fetchAllBooks(),
  head: () => ({
    meta: [{ title: 'Arabic With Mufti Saim — Tayseer' }],
  }),
  component: Arabic101Page,
})

type SortOrder = 'newest' | 'oldest'

function sortLectures(lectures: Lecture[], order: SortOrder): Lecture[] {
  return [...lectures].sort((a, b) => {
    if (!a.date && !b.date) return 0
    if (!a.date) return 1
    if (!b.date) return -1
    const diff = new Date(a.date).getTime() - new Date(b.date).getTime()
    return order === 'newest' ? -diff : diff
  })
}

function Arabic101Page() {
  const books = Route.useLoaderData()
  const [sortOrder, setSortOrder] = useState<SortOrder>('newest')
  const totalLectures = books.reduce((sum: number, b: Book) => sum + b.lectures.length, 0)

  const sortedBooks = [...books].sort((a: Book, b: Book) => b.number - a.number)

  return (
    <main className="mx-auto max-w-5xl px-4 sm:px-6 py-8 sm:py-12">
      {/* Hero image */}
      <div className="mb-6 sm:mb-10 rounded-2xl overflow-hidden shadow-md">
        <img
          src={`/arabic-101-with-mufti-saim/medina university books sunlit.png`}
          alt="Medina University books in sunlit setting"
          className="w-full h-52 sm:h-80 lg:h-112 object-cover object-center"
        />
      </div>

      {/* Course header */}
      <div className="mb-8 sm:mb-12 border-b border-border pb-8 sm:pb-10">
        <p className="text-[0.7rem] font-bold tracking-[0.12em] uppercase text-muted-foreground mb-3">
          Course
        </p>
        <h1 className="font-serif tracking-[-0.02em] text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground leading-tight mb-4">
          {course.name}
        </h1>
        <p className="text-muted-foreground text-base max-w-2xl mb-8">{course.description}</p>

        {/* Info grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="rounded-xl bg-beige border border-beige-dark p-5">
            <p className="text-[0.7rem] font-bold tracking-[0.12em] uppercase text-muted-foreground mb-2">
              Schedule
            </p>
            <p className="text-sm font-semibold text-foreground">
              {course.schedule.days.join(' & ')}
            </p>
            <p className="text-sm text-muted-foreground">{course.schedule.time}</p>
          </div>

          <div className="rounded-xl bg-beige border border-beige-dark p-5">
            <p className="text-[0.7rem] font-bold tracking-[0.12em] uppercase text-muted-foreground mb-2">
              Location
            </p>
            <a
              href={course.schedule.locationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-foreground hover:text-brand no-underline"
            >
              {course.schedule.location} ↗
            </a>
            <p className="text-sm text-muted-foreground mt-1">
              <a
                href={course.schedule.registrationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand text-xs font-semibold hover:text-brand-hover"
              >
                Register for classes →
              </a>
            </p>
          </div>

          <div className="rounded-xl bg-beige border border-beige-dark p-5">
            <p className="text-[0.7rem] font-bold tracking-[0.12em] uppercase text-muted-foreground mb-2">
              Textbook
            </p>
            <a
              href={course.resources.textbooks.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-foreground hover:text-brand no-underline"
            >
              {course.resources.textbooks.label} ↗
            </a>
            <p className="text-sm text-muted-foreground mt-1">Medina Series</p>
          </div>
        </div>
      </div>

      {/* Lectures */}
      <div className="mb-4 flex items-center justify-between gap-2">
        <div className="flex items-baseline gap-3">
          <h2 className="text-xl font-bold text-foreground">Lectures</h2>
          <span className="text-sm text-muted-foreground">
            {totalLectures} lecture{totalLectures !== 1 ? 's' : ''}
          </span>
        </div>

        <div className="flex items-center gap-1 rounded-lg border border-border bg-muted/40 p-1">
          <button
            onClick={() => setSortOrder('newest')}
            className={`px-3 py-1 rounded-md text-xs font-semibold transition-colors ${
              sortOrder === 'newest'
                ? 'bg-background text-foreground shadow-sm'
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            Newest first
          </button>
          <button
            onClick={() => setSortOrder('oldest')}
            className={`px-3 py-1 rounded-md text-xs font-semibold transition-colors ${
              sortOrder === 'oldest'
                ? 'bg-background text-foreground shadow-sm'
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            Oldest first
          </button>
        </div>
      </div>

      {totalLectures === 0 ? (
        <p className="py-16 text-center text-sm text-muted-foreground">
          No lectures published yet. Check back soon.
        </p>
      ) : (
        <div className="flex flex-col gap-10">
          {sortedBooks.map((book: Book) =>
            book.lectures.length > 0 ? (
              <BookSection key={book.number} book={book} sortOrder={sortOrder} />
            ) : null,
          )}
        </div>
      )}
    </main>
  )
}

function BookSection({ book, sortOrder }: { book: Book; sortOrder: SortOrder }) {
  const lectures = sortLectures(book.lectures, sortOrder)

  // Permanent chronological number for each lecture (oldest = 1, newest = N),
  // independent of the current display order.
  const chronologicalNumber = new Map(
    sortLectures(book.lectures, 'oldest').map((l, i) => [l._lectureDir, i + 1]),
  )

  return (
    <section>
      <div className="flex items-center gap-3 mb-4">
        <h3 className="text-sm font-bold text-foreground uppercase tracking-wider">
          {book.name}
        </h3>
        <div className="flex-1 h-px bg-border" />
        <span className="text-xs text-muted-foreground">
          {book.lectures.length} lecture{book.lectures.length !== 1 ? 's' : ''}
        </span>
      </div>

      <div className="rounded-xl border border-border overflow-hidden">
        {lectures.map((lecture, i) => {
          const lectureId = encodeLectureId(book.number, lecture._lectureDir!)
          const num = chronologicalNumber.get(lecture._lectureDir) ?? i + 1
          return (
            <Link
              key={lecture.id ?? i}
              to="/arabic-with-mufti-saim/lecture/$lectureId"
              params={{ lectureId }}
              className="flex items-start gap-4 px-5 py-4 no-underline bg-card border-b border-border last:border-b-0 hover:bg-muted/50 transition-colors block"
            >
              <span className="shrink-0 w-7 h-7 rounded-full bg-foreground text-background text-xs font-bold flex items-center justify-center mt-0.5">
                {num}
              </span>

              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5 mb-1">
                  <h4 className="text-sm font-semibold text-foreground leading-snug">
                    {lecture.title ?? lecture._lectureDir}
                  </h4>
                  {lecture.date && (
                    <span className="shrink-0 text-xs text-muted-foreground tabular-nums">
                      {new Date(lecture.date + 'T00:00:00').toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric',
                      })}
                    </span>
                  )}
                </div>
                {lecture.summary && (
                  <p className="text-xs text-muted-foreground line-clamp-2">{lecture.summary}</p>
                )}
                {lecture.tags && lecture.tags.length > 0 && (
                  <div className="mt-2 flex flex-wrap gap-1">
                    {lecture.tags.slice(0, 4).map((tag) => (
                      <span
                        key={tag}
                        className="inline-block bg-brand/10 text-brand-hover text-[0.72rem] font-semibold px-2 py-0.5 rounded-full border border-brand/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              <span className="shrink-0 text-muted-foreground/50 text-sm">→</span>
            </Link>
          )
        })}
      </div>
    </section>
  )
}

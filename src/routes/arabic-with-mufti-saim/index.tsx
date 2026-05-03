import { createFileRoute, Link } from '@tanstack/react-router'
import { createServerFn } from '@tanstack/react-start'
import { encodeLectureId, type Book } from '#/routes/arabic-with-mufti-saim/-arabic-101.types'
import { courses } from '#/config/site'

const cf = courses['arabic-101'].cloudfrontUrl
const course = courses['arabic-101']

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

function Arabic101Page() {
  const books = Route.useLoaderData()
  const totalLectures = books.reduce((sum: number, b: Book) => sum + b.lectures.length, 0)

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
      <div className="mb-3 flex items-center justify-between gap-2">
        <h2 className="text-xl font-bold text-foreground">Lectures</h2>
        <span className="text-sm text-muted-foreground">
          {totalLectures} lecture{totalLectures !== 1 ? 's' : ''}
        </span>
      </div>

      {totalLectures === 0 ? (
        <p className="py-16 text-center text-sm text-muted-foreground">
          No lectures published yet. Check back soon.
        </p>
      ) : (
        <div className="flex flex-col gap-10">
          {books.map((book: Book) =>
            book.lectures.length > 0 ? (
              <BookSection key={book.number} book={book} />
            ) : null,
          )}
        </div>
      )}
    </main>
  )
}

function BookSection({ book }: { book: Book }) {
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
        {book.lectures.map((lecture, i) => {
          const lectureId = encodeLectureId(book.number, lecture._lectureDir!)
          return (
            <Link
              key={lecture.id ?? i}
              to="/arabic-with-mufti-saim/lecture/$lectureId"
              params={{ lectureId }}
              className="flex items-start gap-4 px-5 py-4 no-underline bg-card border-b border-border last:border-b-0 hover:bg-muted/50 transition-colors block"
            >
              <span className="shrink-0 w-7 h-7 rounded-full bg-foreground text-background text-xs font-bold flex items-center justify-center mt-0.5">
                {i + 1}
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

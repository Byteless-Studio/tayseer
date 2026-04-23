import { createFileRoute, Link } from '@tanstack/react-router'
import { loadAllBooks } from '#/lib/arabic-101'
import { encodeLectureId } from '#/lib/arabic-101'
import { courses } from '#/config/site'
import type { Book } from '#/lib/arabic-101'

const course = courses['arabic-101']

export const Route = createFileRoute('/arabic-101/')({
  loader: () => loadAllBooks(),
  head: () => ({
    meta: [{ title: 'Arabic With Mufti Saim — Tayseer' }],
  }),
  component: Arabic101Page,
})

function Arabic101Page() {
  const books = Route.useLoaderData()
  const totalLectures = books.reduce((sum, b) => sum + b.lectures.length, 0)

  return (
    <main className="mx-auto max-w-5xl px-6 py-12">
      {/* Hero image */}
      <div className="mb-10 rounded-2xl overflow-hidden shadow-md">
        <img
          src="/arabic-101-with-mufti-saim/medina university books sunlit.png"
          alt="Medina University books in sunlit setting"
          className="w-full h-112 object-cover object-center"
        />
      </div>

      {/* Course header */}
      <div className="mb-12 border-b border-gray-200 pb-10">
        <div className="mb-3 section-label">Course</div>
        <h1 className="display-title text-4xl font-bold text-black leading-tight mb-4">
          {course.name}
        </h1>
        <p className="text-gray-500 text-base max-w-2xl mb-8">{course.description}</p>

        {/* Info grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {/* Schedule */}
          <div className="rounded-xl bg-[#f5f0e8] border border-[#ede4d3] p-5">
            <div className="section-label mb-2">Schedule</div>
            <p className="text-sm font-semibold text-black">
              {course.schedule.days.join(' & ')}
            </p>
            <p className="text-sm text-gray-600">{course.schedule.time}</p>
          </div>

          {/* Location */}
          <div className="rounded-xl bg-[#f5f0e8] border border-[#ede4d3] p-5">
            <div className="section-label mb-2">Location</div>
            <a
              href={course.schedule.locationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-black hover:text-[#009000] no-underline"
            >
              {course.schedule.location} ↗
            </a>
            <p className="text-sm text-gray-600 mt-1">
              <a
                href={course.schedule.registrationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#009000] text-xs font-semibold hover:text-[#007700]"
              >
                Register for classes →
              </a>
            </p>
          </div>

          {/* Textbook */}
          <div className="rounded-xl bg-[#f5f0e8] border border-[#ede4d3] p-5">
            <div className="section-label mb-2">Textbook</div>
            <a
              href={course.resources.textbooks.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-black hover:text-[#009000] no-underline"
            >
              {course.resources.textbooks.label} ↗
            </a>
            <p className="text-sm text-gray-600 mt-1">Medina Series</p>
          </div>
        </div>
      </div>

      {/* Lectures */}
      <div className="mb-3 flex items-center justify-between">
        <h2 className="text-xl font-bold text-black">Lectures</h2>
        <span className="text-sm text-gray-400">
          {totalLectures} lecture{totalLectures !== 1 ? 's' : ''}
        </span>
      </div>

      {totalLectures === 0 ? (
        <p className="py-16 text-center text-sm text-gray-400">
          No lectures published yet. Check back soon.
        </p>
      ) : (
        <div className="flex flex-col gap-10">
          {books.map((book) =>
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
        <h3 className="text-sm font-bold text-black uppercase tracking-wider">
          {book.name}
        </h3>
        <div className="flex-1 h-px bg-gray-200" />
        <span className="text-xs text-gray-400">
          {book.lectures.length} lecture{book.lectures.length !== 1 ? 's' : ''}
        </span>
      </div>

      <div className="rounded-xl border border-gray-200 overflow-hidden">
        {book.lectures.map((lecture, i) => {
          const lectureId = encodeLectureId(book.number, lecture._lectureDir!)
          return (
            <Link
              key={lecture.id ?? i}
              to="/arabic-101/lecture/$lectureId"
              params={{ lectureId }}
              className="lecture-card flex items-start gap-4 px-5 py-4 no-underline bg-white block"
            >
              {/* Number */}
              <span className="shrink-0 w-7 h-7 rounded-full bg-black text-white text-xs font-bold flex items-center justify-center mt-0.5">
                {i + 1}
              </span>

              <div className="min-w-0 flex-1">
                <h4 className="text-sm font-semibold text-black leading-snug mb-1">
                  {lecture.title ?? lecture._lectureDir}
                </h4>
                {lecture.summary && (
                  <p className="text-xs text-gray-500 line-clamp-2">
                    {lecture.summary}
                  </p>
                )}
                {lecture.tags && lecture.tags.length > 0 && (
                  <div className="mt-2 flex flex-wrap gap-1">
                    {lecture.tags.slice(0, 4).map((tag) => (
                      <span key={tag} className="tag-pill">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              <span className="shrink-0 text-gray-300 text-sm">→</span>
            </Link>
          )
        })}
      </div>
    </section>
  )
}

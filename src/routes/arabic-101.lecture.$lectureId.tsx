import { useState } from 'react'
import { createFileRoute, Link, notFound } from '@tanstack/react-router'
import { loadLecture, decodeLectureId, type QuizItem, type QuranExample } from '#/lib/arabic-101'
import { courses } from '#/config/site'
import { QuizCarousel } from '#/components/QuizCarousel'
import { QuranCarousel } from '#/components/QuranCarousel'

const course = courses['arabic-101']

export const Route = createFileRoute('/arabic-101/lecture/$lectureId')({
  loader: ({ params }) => {
    const { bookNumber, lectureDir } = decodeLectureId(params.lectureId)
    const lecture = loadLecture(bookNumber, lectureDir)
    if (!lecture) throw notFound()
    return { lecture, bookNumber, lectureDir }
  },
  head: ({ loaderData }) => ({
    meta: [
      {
        title: loaderData?.lecture.title
          ? `${loaderData.lecture.title} — Tayseer`
          : 'Lecture — Tayseer',
      },
    ],
  }),
  component: LecturePage,
})

function formatTranscript(text: string): string {
  return text.replace(
    /(\d{2}:\d{2}:\d{2},\d{3} --> \d{2}:\d{2}:\d{2},\d{3})/g,
    '<span class="transcript-ts">$1</span>',
  )
}

function LecturePage() {
  const { lecture, bookNumber } = Route.useLoaderData()
  const bookCfg = course.books.find((b) => b.number === bookNumber)
  const [transcriptOpen, setTranscriptOpen] = useState(false)

  const hasKeyPoints = lecture.key_points && lecture.key_points.length > 0
  const hasQuiz = lecture.quiz && (lecture.quiz as QuizItem[]).length > 0
  const hasQuestions = lecture.questions && lecture.questions.length > 0
  const hasQuranExamples =
    lecture.quran_examples && (lecture.quran_examples as QuranExample[]).length > 0

  return (
    <main className="mx-auto max-w-5xl px-6 py-12">
      {/* Breadcrumb */}
      <nav className="mb-8 flex items-center gap-2 text-sm text-gray-400">
        <Link to="/arabic-101" className="hover:text-black no-underline text-gray-400">
          Arabic With Mufti Saim
        </Link>
        <span>/</span>
        <span className="text-gray-600">{bookCfg?.name ?? `Book ${bookNumber}`}</span>
      </nav>

      {/* Title */}
      <h1 className="text-2xl font-bold text-black leading-tight mb-4">
        {lecture.title ?? lecture._lectureDir}
      </h1>

      {/* Tags */}
      {lecture.tags && lecture.tags.length > 0 && (
        <div className="mb-6 flex flex-wrap gap-1.5">
          {lecture.tags.map((tag) => (
            <span key={tag} className="tag-pill">
              {tag}
            </span>
          ))}
        </div>
      )}

      {/* Summary */}
      {lecture.summary && (
        <p className="mb-8 text-base text-gray-600 border-l-4 border-[#009000] pl-4 leading-relaxed">
          {lecture.summary}
        </p>
      )}

      {/* Original Recording */}
      {lecture._audioUrl && (
        <section className="mb-10">
          <h2 className="section-label mb-3">Original Recording</h2>
          <div className="rounded-xl border border-gray-200 bg-[#f5f0e8] p-4">
            <audio controls className="w-full" preload="metadata">
              <source src={lecture._audioUrl} type="audio/ogg" />
              <source src={lecture._audioUrl} type="audio/mpeg" />
              Your browser does not support audio playback.
            </audio>
            <p className="mt-2 text-xs text-gray-400">Original class recording</p>
          </div>
        </section>
      )}

      {/* Key Points + Quiz (two columns) */}
      {(hasKeyPoints || hasQuiz) && (
        <div className="mb-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {hasKeyPoints && (
            <section>
              <h2 className="section-label mb-4">Key Points</h2>
              <ul className="flex flex-col gap-3">
                {lecture.key_points!.map((point, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-gray-700">
                    <span className="shrink-0 w-5 h-5 rounded-full bg-[#009000]/10 text-[#009000] text-xs font-bold flex items-center justify-center mt-0.5">
                      {i + 1}
                    </span>
                    {point}
                  </li>
                ))}
              </ul>
            </section>
          )}

          {hasQuiz && (
            <section>
              <h2 className="section-label mb-4">Quiz</h2>
              <QuizCarousel items={lecture.quiz as QuizItem[]} />
            </section>
          )}
        </div>
      )}

      {/* Discussion Questions + Quranic Examples (two columns) */}
      {(hasQuestions || hasQuranExamples) && (
        <div className="mb-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {hasQuestions && (
            <section>
              <h2 className="section-label mb-4">Discussion Questions</h2>
              <ul className="flex flex-col gap-2">
                {lecture.questions!.map((q, i) => (
                  <li key={i} className="text-sm text-gray-700 pl-3 border-l-2 border-gray-200">
                    {typeof q === 'string' ? q : `${q.q ?? ''} ${q.a ?? ''}`.trim()}
                  </li>
                ))}
              </ul>
            </section>
          )}

          {hasQuranExamples && (
            <section>
              <h2 className="section-label mb-4">Quranic Examples</h2>
              <QuranCarousel items={lecture.quran_examples as QuranExample[]} />
            </section>
          )}
        </div>
      )}

      {/* Transcript */}
      {lecture.transcript && (
        <section className="mb-10">
          <button
            onClick={() => setTranscriptOpen((o) => !o)}
            className="section-label mb-4 flex items-center gap-2 cursor-pointer bg-transparent border-none p-0"
          >
            Transcript
            <span className="text-xs font-normal normal-case tracking-normal text-gray-400">
              {transcriptOpen ? '▲ hide' : '▼ show'}
            </span>
          </button>
          {transcriptOpen && (
            <div
              className="rounded-xl border border-gray-200 bg-gray-50 p-6 text-sm leading-loose text-gray-700 whitespace-pre-wrap font-mono overflow-x-auto"
              dangerouslySetInnerHTML={{ __html: formatTranscript(lecture.transcript) }}
            />
          )}
        </section>
      )}

      {/* Back */}
      <div className="mt-12 border-t border-gray-200 pt-8">
        <Link to="/arabic-101" className="text-sm text-gray-400 no-underline hover:text-black">
          ← All lectures
        </Link>
      </div>
    </main>
  )
}

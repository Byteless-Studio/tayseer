import { useState } from 'react'
import { createFileRoute, Link, notFound } from '@tanstack/react-router'
import { createServerFn } from '@tanstack/react-start'
import { decodeLectureId, type QuizItem, type QuranExample } from '#/lib/arabic-101'
import { courses } from '#/config/site'

const course = courses['arabic-101']

const fetchLecture = createServerFn({ method: 'GET' })
  .inputValidator((params: { bookNumber: number; lectureDir: string }) => params)
  .handler(async ({ data }) => {
    const { loadLecture } = await import('#/lib/arabic-101.server')
    const lecture = loadLecture(data.bookNumber, data.lectureDir)
    if (!lecture) throw new Error('not_found')
    return { lecture, bookNumber: data.bookNumber, lectureDir: data.lectureDir }
  })

export const Route = createFileRoute('/arabic-101/lecture/$lectureId')({
  loader: async ({ params }) => {
    const { bookNumber, lectureDir } = decodeLectureId(params.lectureId)
    try {
      return await fetchLecture({ data: { bookNumber, lectureDir } })
    } catch {
      throw notFound()
    }
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

// ─── Quiz Carousel ────────────────────────────────────────────────────────────

function QuizCarousel({ items }: { items: QuizItem[] }) {
  const [current, setCurrent] = useState(0)
  const [answers, setAnswers] = useState<Record<number, number>>({})
  const [showScore, setShowScore] = useState(false)

  const item = items[current]
  const correctIdx = typeof item.correctIndex === 'number' ? item.correctIndex : 0
  const selected = answers[current]
  const hasAnswered = selected !== undefined
  const answeredCount = Object.keys(answers).length
  const score = items.filter((it, i) => {
    const ci = typeof it.correctIndex === 'number' ? it.correctIndex : 0
    return answers[i] === ci
  }).length

  function select(optIdx: number) {
    if (hasAnswered) return
    setAnswers((prev) => ({ ...prev, [current]: optIdx }))
  }

  function reset() {
    setCurrent(0)
    setAnswers({})
    setShowScore(false)
  }

  if (showScore) {
    return (
      <div className="rounded-xl border border-gray-200 p-6">
        <div className="text-center mb-6">
          <div className="text-5xl font-bold text-[#009000] mb-2">{score}/{items.length}</div>
          <p className="text-sm text-gray-500">
            {score === items.length
              ? 'Perfect score!'
              : score >= Math.ceil(items.length / 2)
              ? 'Good work — review the ones you missed.'
              : 'Keep practicing — review the answers below.'}
          </p>
        </div>
        <div className="flex flex-col gap-2 mb-6">
          {items.map((it, i) => {
            const ci = typeof it.correctIndex === 'number' ? it.correctIndex : 0
            const ua = answers[i]
            const correct = ua === ci
            return (
              <div
                key={i}
                className={`rounded-lg border p-3 text-xs ${correct ? 'border-[#009000]/30 bg-[#009000]/5' : 'border-red-200 bg-red-50'}`}
              >
                <p className="font-medium text-gray-700 mb-1">{i + 1}. {it.q}</p>
                {!correct && ua !== undefined && (
                  <p className="text-red-500 mb-0.5">Your answer: {it.options?.[ua]}</p>
                )}
                <p className={correct ? 'text-[#009000]' : 'text-gray-600'}>
                  ✓ {it.options?.[ci]}
                </p>
              </div>
            )
          })}
        </div>
        <button
          type="button"
          onClick={reset}
          className="w-full rounded-lg border border-gray-200 py-2 text-sm text-gray-600 hover:border-gray-400 hover:text-gray-900 transition-colors"
        >
          Try Again
        </button>
      </div>
    )
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs text-gray-400">Question {current + 1} of {items.length}</span>
        <span className="text-xs text-gray-400">{answeredCount}/{items.length} answered</span>
      </div>
      <div className="mb-4 h-1 w-full rounded-full bg-gray-100">
        <div
          className="h-1 rounded-full bg-[#009000] transition-all duration-300"
          style={{ width: `${((current + 1) / items.length) * 100}%` }}
        />
      </div>

      <div className="rounded-xl border border-gray-200 p-5">
        <p className="text-sm font-medium text-gray-800 mb-4 leading-snug">{item.q}</p>
        {item.options && item.options.length > 0 && (
          <div className="flex flex-col gap-2">
            {item.options.map((opt, j) => {
              let cls = 'text-left w-full rounded-lg border px-3 py-2 text-xs transition-colors '
              if (!hasAnswered) {
                cls += 'border-gray-200 text-gray-700 hover:border-[#009000] hover:bg-[#009000]/5'
              } else if (j === correctIdx) {
                cls += 'border-[#009000] bg-[#009000]/10 text-[#009000] font-medium'
              } else if (j === selected) {
                cls += 'border-red-300 bg-red-50 text-red-600'
              } else {
                cls += 'border-gray-100 text-gray-300'
              }
              return (
                <button type="button" key={j} className={cls} onClick={() => select(j)}>
                  <span className="font-semibold mr-1">{String.fromCharCode(97 + j)})</span>
                  {opt}
                </button>
              )
            })}
          </div>
        )}
        {hasAnswered && (
          <div className="mt-4 rounded-lg bg-gray-50 border-l-2 border-[#009000] p-3 text-xs text-gray-700 leading-relaxed">
            {item.a}
          </div>
        )}
      </div>

      <div className="flex items-center justify-between mt-3">
        <button
          type="button"
          onClick={() => setCurrent((c) => c - 1)}          
          className="rounded-lg border border-gray-200 px-3 py-1.5 text-xs text-gray-500 hover:border-gray-400 hover:text-gray-700 transition-colors disabled:opacity-30"
        >
          ← Prev
        </button>

        <div className="flex gap-1.5 items-center">
          {items.map((_, i) => (
            <button
              type="button"
              key={i}
              onClick={() => setCurrent(i)}
              className={`rounded-full transition-all ${
                i === current ? 'w-4 h-2 bg-[#009000]' : answers[i] !== undefined ? 'w-2 h-2 bg-gray-300' : 'w-2 h-2 bg-gray-200'
              }`}
            />
          ))}
        </div>

        {current < items.length - 1 ? (
          <button
            type="button"
            onClick={() => setCurrent((c) => c + 1)}
            disabled={!hasAnswered}
            className="rounded-lg border border-[#009000] px-3 py-1.5 text-xs text-[#009000] hover:bg-[#009000] hover:text-white transition-colors disabled:opacity-30"
          >
            Next →
          </button>
        ) : (
          <button
            type="button"
            onClick={() => setShowScore(true)}
            disabled={!hasAnswered}
            className="rounded-lg border border-[#009000] px-3 py-1.5 text-xs text-[#009000] hover:bg-[#009000] hover:text-white transition-colors disabled:opacity-30"
          >
            See Score
          </button>
        )}
      </div>
    </div>
  )
}

// ─── Quran Carousel ───────────────────────────────────────────────────────────

function QuranCarousel({ items }: { items: QuranExample[] }) {
  const [current, setCurrent] = useState(0)
  const item = items[current]
  console.log(current, item)
  return (
    <div>
      <div className="rounded-xl border border-gray-200 bg-[#f5f0e8] p-5 min-h-[200px] flex flex-col">
        <p className="text-right text-xl leading-loose text-gray-900 font-arabic mb-2" dir="rtl">
          {item.arabic}
        </p>
        {item.transliteration && (
          <p className="mb-1 text-sm italic text-gray-500">{item.transliteration}</p>
        )}
        <p className="text-sm text-gray-700">{item.translation}</p>
        {(item.reference || item.note) && (
          <p className="mt-auto pt-3 text-xs text-gray-400">
            {item.reference && <span className="font-medium">{item.reference}</span>}
            {item.reference && item.note && ' — '}
            {item.note}
          </p>
        )}
      </div>

      <div className="flex items-center justify-between mt-3">
        <button
          type="button"
          onClick={() => {setCurrent((c) => c - 1); console.log('prev', current)}}
          className="rounded-lg border border-gray-200 px-3 py-1.5 text-xs text-gray-500 hover:border-gray-400 hover:text-gray-700 transition-colors disabled:opacity-30"
        style={{ position: 'relative', zIndex: 50 }}
        >
          ←
        </button>

        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            {items.map((_, i) => (
              <button
                type="button"
                key={i}
                onClick={() => setCurrent(i)}
                className={`rounded-full transition-all ${i === current ? 'w-4 h-2 bg-[#009000]' : 'w-2 h-2 bg-gray-300'}`}
              />
            ))}
          </div>
          <span className="text-xs text-gray-400">{current + 1}/{items.length}</span>
        </div>

        <button
          type="button"
          onClick={() => setCurrent(current + 1)}
          disabled={current === items.length - 1}
          className="rounded-lg border border-gray-200 px-3 py-1.5 text-xs text-gray-500 hover:border-gray-400 hover:text-gray-700 transition-colors disabled:opacity-30"
        >
          →
        </button>
      </div>
    </div>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────

function LecturePage() {
  const { lecture, bookNumber } = Route.useLoaderData()
  const bookCfg = course.books.find((b) => b.number === bookNumber)
  const [transcriptOpen, setTranscriptOpen] = useState(false)

  const quiz = Array.isArray(lecture.quiz) ? (lecture.quiz as QuizItem[]) : []
  const quranExamples = Array.isArray(lecture.quran_examples)
    ? (lecture.quran_examples as QuranExample[])
    : []

  const hasKeyPoints = Array.isArray(lecture.key_points) && lecture.key_points.length > 0
  const hasQuiz = quiz.length > 0
  const hasQuestions = Array.isArray(lecture.questions) && lecture.questions.length > 0
  const hasQuranExamples = quranExamples.length > 0

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
      {Array.isArray(lecture.tags) && lecture.tags.length > 0 && (
        <div className="mb-6 flex flex-wrap gap-1.5">
          {(lecture.tags as string[]).map((tag) => (
            <span key={tag} className="tag-pill">{tag}</span>
          ))}
        </div>
      )}

      {/* Summary */}
      {lecture.summary && (
        <p className="mb-8 text-base text-gray-600 border-l-4 border-[#009000] pl-4 leading-relaxed">
          {lecture.summary as string}
        </p>
      )}

      {/* Original Recording */}
      {lecture._audioUrl && (
        <section className="mb-10">
          <h2 className="section-label mb-3">Original Recording</h2>
          <div className="rounded-xl border border-gray-200 bg-[#f5f0e8] p-4">
            <audio controls className="w-full" preload="metadata">
              <source src={lecture._audioUrl as string} type="audio/ogg" />
              <source src={lecture._audioUrl as string} type="audio/mpeg" />
              Your browser does not support audio playback.
            </audio>
            <p className="mt-2 text-xs text-gray-400">Original class recording</p>
          </div>
        </section>
      )}

      {/* Key Points + Quiz */}
      {(hasKeyPoints || hasQuiz) && (
        <div className="mb-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {hasKeyPoints && (
            <section>
              <h2 className="section-label mb-4">Key Points</h2>
              <ul className="flex flex-col gap-3">
                {(lecture.key_points as string[]).map((point, i) => (
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
              <QuizCarousel items={quiz} />
            </section>
          )}
        </div>
      )}

      {/* Discussion Questions + Quranic Examples */}
      {(hasQuestions || hasQuranExamples) && (
        <div className="mb-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {hasQuestions && (
            <section>
              <h2 className="section-label mb-4">Discussion Questions</h2>
              <ul className="flex flex-col gap-2">
                {(lecture.questions as Array<{ q?: string; a?: string } | string>).map((q, i) => (
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
              <QuranCarousel items={quranExamples} />
            </section>
          )}
        </div>
      )}

      {/* Transcript */}
      {lecture.transcript && (
        <section className="mb-10">
          <button
            type="button"
            onClick={() => setTranscriptOpen((o) => !o)}
            className="section-label mb-4 flex items-center gap-2 bg-transparent border-none p-0 cursor-pointer"
          >
            Transcript
            <span className="text-xs font-normal normal-case tracking-normal text-gray-400">
              {transcriptOpen ? '▲ hide' : '▼ show'}
            </span>
          </button>
          {transcriptOpen && (
            <div
              className="rounded-xl border border-gray-200 bg-gray-50 p-6 text-sm leading-loose text-gray-700 whitespace-pre-wrap font-mono overflow-x-auto"
              dangerouslySetInnerHTML={{ __html: formatTranscript(lecture.transcript as string) }}
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

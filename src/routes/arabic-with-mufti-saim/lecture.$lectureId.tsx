import { useState } from 'react'
import { createFileRoute, Link, notFound } from '@tanstack/react-router'
import { createServerFn } from '@tanstack/react-start'
import { decodeLectureId, type QuizItem, type QuranExample } from '#/routes/arabic-with-mufti-saim/-arabic-101.types'
import { courses } from '#/config/site'
import { QuizCarousel } from '#/components/QuizCarousel'
import { QuranCarousel } from '#/components/QuranCarousel'

const course = courses['arabic-101']

const fetchLecture = createServerFn({ method: 'GET' })
  .inputValidator((params: { bookNumber: number; lectureDir: string }) => params)
  .handler(async ({ data }) => {
    const { loadLecture } = await import('#/routes/arabic-with-mufti-saim/-arabic-101.server')
    const lecture = await loadLecture(data.bookNumber, data.lectureDir)
    if (!lecture) throw new Error('not_found')
    return { lecture, bookNumber: data.bookNumber, lectureDir: data.lectureDir }
  })

export const Route = createFileRoute('/arabic-with-mufti-saim/lecture/$lectureId')({
  loader: async ({ params }): Promise<Awaited<ReturnType<typeof fetchLecture>>> => {
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

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-[0.7rem] font-bold tracking-[0.12em] uppercase text-muted-foreground mb-4">
      {children}
    </h2>
  )
}

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
    <main className="mx-auto max-w-5xl px-4 sm:px-6 py-8 sm:py-12">
      {/* Breadcrumb */}
      <nav className="mb-6 sm:mb-8 flex items-center gap-2 text-sm text-muted-foreground">
        <Link
          to="/arabic-with-mufti-saim"
          className="hover:text-foreground no-underline text-muted-foreground"
        >
          Arabic With Mufti Saim
        </Link>
        <span>/</span>
        <span className="text-foreground/70">{bookCfg?.name ?? `Book ${bookNumber}`}</span>
      </nav>

      {/* Title */}
      <h1 className="text-2xl font-bold text-foreground leading-tight mb-4">
        {lecture.title ?? lecture._lectureDir}
      </h1>

      {/* Tags */}
      {Array.isArray(lecture.tags) && lecture.tags.length > 0 && (
        <div className="mb-6 flex flex-wrap gap-1.5">
          {(lecture.tags as string[]).map((tag) => (
            <span
              key={tag}
              className="inline-block bg-brand/10 text-brand-hover text-[0.72rem] font-semibold px-2 py-0.5 rounded-full border border-brand/20"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      {/* Summary */}
      {lecture.summary && (
        <p className="mb-8 text-base text-muted-foreground border-l-4 border-brand pl-4 leading-relaxed">
          {lecture.summary as string}
        </p>
      )}

      {/* Original Recording */}
      {lecture._audioUrl && (
        <section className="mb-8 sm:mb-10">
          <SectionLabel>Original Recording</SectionLabel>
          <div className="rounded-xl border border-border bg-beige p-4">
            <audio controls className="w-full" preload="metadata">
              <source src={lecture._audioUrl as string} type="audio/ogg" />
              <source src={lecture._audioUrl as string} type="audio/mpeg" />
              Your browser does not support audio playback.
            </audio>
            <p className="mt-2 text-xs text-muted-foreground">Original class recording</p>
          </div>
        </section>
      )}

      {/* Key Points + Quiz */}
      {(hasKeyPoints || hasQuiz) && (
        <div className="mb-8 sm:mb-10 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-start">
          {hasKeyPoints && (
            <section>
              <SectionLabel>Key Points</SectionLabel>
              <ul className="flex flex-col gap-3">
                {(lecture.key_points as string[]).map((point, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-foreground/80">
                    <span className="shrink-0 w-5 h-5 rounded-full bg-brand/10 text-brand text-xs font-bold flex items-center justify-center mt-0.5">
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
              <SectionLabel>Quiz</SectionLabel>
              <QuizCarousel items={quiz} />
            </section>
          )}
        </div>
      )}

      {/* Discussion Questions + Quranic Examples */}
      {(hasQuestions || hasQuranExamples) && (
        <div className="mb-8 sm:mb-10 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-start">
          {hasQuestions && (
            <section>
              <SectionLabel>Discussion Questions</SectionLabel>
              <ul className="flex flex-col gap-2">
                {(
                  lecture.questions as Array<{ q?: string; a?: string } | string>
                ).map((q, i) => (
                  <li
                    key={i}
                    className="text-sm text-foreground/80 pl-3 border-l-2 border-border"
                  >
                    {typeof q === 'string' ? q : `${q.q ?? ''} ${q.a ?? ''}`.trim()}
                  </li>
                ))}
              </ul>
            </section>
          )}
          {hasQuranExamples && (
            <section>
              <SectionLabel>Quranic Examples</SectionLabel>
              <QuranCarousel items={quranExamples} />
            </section>
          )}
        </div>
      )}

      {/* Transcript */}
      {lecture.transcript && (
        <section className="mb-8 sm:mb-10">
          <button
            type="button"
            onClick={() => setTranscriptOpen((o) => !o)}
            className="flex items-center gap-2 bg-transparent border-none p-0 cursor-pointer text-[0.7rem] font-bold tracking-[0.12em] uppercase text-muted-foreground mb-4"
          >
            Transcript
            <span className="text-xs font-normal normal-case tracking-normal text-muted-foreground/60">
              {transcriptOpen ? '▲ hide' : '▼ show'}
            </span>
          </button>
          {transcriptOpen && (
            <div
              className="rounded-xl border border-border bg-muted/50 p-4 sm:p-6 text-sm leading-loose text-foreground/80 whitespace-pre-wrap font-mono overflow-x-auto"
              dangerouslySetInnerHTML={{
                __html: formatTranscript(lecture.transcript as string),
              }}
            />
          )}
        </section>
      )}

      {/* Back */}
      <div className="mt-8 sm:mt-12 border-t border-border pt-6 sm:pt-8">
        <Link
          to="/arabic-with-mufti-saim"
          className="text-sm text-muted-foreground no-underline hover:text-foreground"
        >
          ← All lectures
        </Link>
      </div>
    </main>
  )
}

import { useState } from 'react'
import { createFileRoute, Link, notFound } from '@tanstack/react-router'

export const Route = createFileRoute('/lecture/$videoId')({
  loader: async ({ params }) => {
    const lecture = await fetch(`/api/lectures/${params.videoId}`).then((res) => {
      if (!res.ok) return null
      return res.json() as Promise<{
        title?: string
        video_id?: string
        published?: string
        url?: string
        summary?: string
        tags?: string[]
        key_points?: string[]
        transcript?: string
      }>
    })
    if (!lecture) throw notFound()
    return lecture
  },
  head: ({ loaderData }) => ({
    meta: [{ title: loaderData?.title ?? 'Lecture' }],
  }),
  component: LecturePage,
})

function formatTranscript(text: string): string {
  return text.replace(
    /\[(\d{2}:\d{2}(?::\d{2})?)\]/g,
    '<span class="transcript-ts">[$1]</span>',
  )
}

function LecturePage() {
  const l = Route.useLoaderData()
  const [transcriptOpen, setTranscriptOpen] = useState(false)

  const publishedDate = l.published
    ? new Date(l.published).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    : null

  return (
    <main className="mx-auto max-w-[680px] px-6 py-12">
      <Link to="/" className="mb-8 inline-block text-sm text-muted-foreground no-underline hover:text-foreground">
        ← All lectures
      </Link>

      <h1 className="mb-2 text-2xl font-semibold leading-tight text-foreground">
        {l.title ?? l.video_id}
      </h1>

      {publishedDate && (
        <p className="mb-5 text-xs text-muted-foreground/60">{publishedDate}</p>
      )}

      {l.url && (
        <a
          href={l.url}
          target="_blank"
          rel="noopener noreferrer"
          className="mb-7 inline-flex items-center gap-1.5 rounded-lg border border-border px-3.5 py-1.5 text-sm text-foreground no-underline hover:border-foreground transition-colors"
        >
          ▶ Watch on YouTube
        </a>
      )}

      {l.summary && (
        <p className="mb-7 border-b border-border pb-7 text-[15px] text-muted-foreground">
          {l.summary}
        </p>
      )}

      {l.tags && l.tags.length > 0 && (
        <div className="mb-8 flex flex-wrap gap-1.5">
          {l.tags.map((tag) => (
            <span
              key={tag}
              className="inline-block bg-brand/10 text-brand-hover text-[0.72rem] font-semibold px-2 py-0.5 rounded-full border border-brand/20"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      {l.key_points && l.key_points.length > 0 && (
        <section className="mb-9">
          <p className="mb-3 text-[0.7rem] font-bold tracking-[0.12em] uppercase text-muted-foreground">
            Key Points
          </p>
          <ul className="flex flex-col gap-2">
            {l.key_points.map((point, i) => (
              <li
                key={i}
                className="relative pl-4 text-sm text-foreground/80 before:absolute before:left-0 before:text-muted-foreground/40 before:content-['—']"
              >
                {point}
              </li>
            ))}
          </ul>
        </section>
      )}

      {l.transcript && (
        <section>
          <button
            type="button"
            onClick={() => setTranscriptOpen((o) => !o)}
            className="mb-3 flex w-full items-center gap-2 text-left bg-transparent border-none p-0 cursor-pointer"
          >
            <span className="text-[0.7rem] font-bold tracking-[0.12em] uppercase text-muted-foreground">
              Transcript
            </span>
            <span className="text-xs text-muted-foreground/50">
              {transcriptOpen ? '▲ hide' : '▼ show'}
            </span>
          </button>
          {transcriptOpen && (
            <div
              className="whitespace-pre-wrap text-sm leading-loose text-foreground/80"
              dangerouslySetInnerHTML={{ __html: formatTranscript(l.transcript) }}
            />
          )}
        </section>
      )}
    </main>
  )
}

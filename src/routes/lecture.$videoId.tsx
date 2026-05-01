import { useState } from 'react'
import { createFileRoute, Link, notFound } from '@tanstack/react-router'
import { loadOne } from '#/lib/lectures'

export const Route = createFileRoute('/lecture/$videoId')({
  loader: ({ params }) => {
    const lecture = loadOne(params.videoId)
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
    '<span style="font-size:11px;color:#9ca3af;font-variant-numeric:tabular-nums;margin-right:6px">[$1]</span>',
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
      <Link to="/" className="mb-8 inline-block text-sm text-gray-400 no-underline hover:text-black">
        ← All lectures
      </Link>

      <h1 className="mb-2 text-2xl font-semibold leading-tight text-black">
        {l.title ?? l.video_id}
      </h1>

      {publishedDate && (
        <p className="mb-5 text-xs text-gray-300">{publishedDate}</p>
      )}

      {l.url && (
        <a
          href={l.url}
          target="_blank"
          rel="noopener noreferrer"
          className="mb-7 inline-flex items-center gap-1.5 rounded-lg border border-gray-200 px-3.5 py-1.5 text-sm text-black no-underline hover:border-black"
        >
          ▶ Watch on YouTube
        </a>
      )}

      {l.summary && (
        <p className="mb-7 border-b border-gray-100 pb-7 text-[15px] text-gray-600">
          {l.summary}
        </p>
      )}

      {l.tags && l.tags.length > 0 && (
        <div className="mb-8 flex flex-wrap gap-1.5">
          {l.tags.map((tag) => (
            <span
              key={tag}
              className="rounded bg-gray-100 px-2 py-0.5 text-xs text-gray-500"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      {l.key_points && l.key_points.length > 0 && (
        <section className="mb-9">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-gray-400">
            Key Points
          </p>
          <ul className="flex flex-col gap-2">
            {l.key_points.map((point, i) => (
              <li
                key={i}
                className="relative pl-4 text-sm text-gray-700 before:absolute before:left-0 before:text-gray-300 before:content-['—']"
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
            onClick={() => setTranscriptOpen((o) => !o)}
            className="mb-3 flex w-full items-center gap-2 text-left"
          >
            <span className="text-xs font-semibold uppercase tracking-widest text-gray-400">
              Transcript
            </span>
            <span className="text-xs text-gray-300">{transcriptOpen ? '▲ hide' : '▼ show'}</span>
          </button>
          {transcriptOpen && (
            <div
              className="whitespace-pre-wrap text-sm leading-loose text-gray-700"
              dangerouslySetInnerHTML={{ __html: formatTranscript(l.transcript) }}
            />
          )}
        </section>
      )}
    </main>
  )
}

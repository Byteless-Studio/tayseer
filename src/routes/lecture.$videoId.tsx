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
    '<span style="font-size:11px;color:#bbb;font-variant-numeric:tabular-nums;margin-right:6px">[$1]</span>',
  )
}

function LecturePage() {
  const l = Route.useLoaderData()

  const publishedDate = l.published
    ? new Date(l.published).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    : null

  return (
    <main className="mx-auto max-w-[680px] px-6 py-12">
      <Link
        to="/"
        className="mb-8 inline-block text-[13px] text-[#999] hover:text-[#000]"
      >
        ← All lectures
      </Link>

      <h1 className="mb-2 text-[22px] font-semibold leading-tight tracking-[-0.4px] text-[#111]">
        {l.title ?? l.video_id}
      </h1>

      {publishedDate && (
        <p className="mb-5 text-[12px] text-[#bbb]">{publishedDate}</p>
      )}

      {l.url && (
        <a
          href={l.url}
          target="_blank"
          rel="noopener noreferrer"
          className="mb-7 inline-flex items-center gap-1.5 rounded-[7px] border border-[#e0e0e0] px-[14px] py-[7px] text-[13px] text-[#111] hover:border-[#000]"
        >
          ▶ Watch on YouTube
        </a>
      )}

      {l.summary && (
        <p className="mb-7 border-b border-[#f0f0f0] pb-7 text-[15px] text-[#444]">
          {l.summary}
        </p>
      )}

      {l.tags && l.tags.length > 0 && (
        <div className="mb-8 flex flex-wrap gap-1.5">
          {l.tags.map((tag) => (
            <span
              key={tag}
              className="rounded px-2 py-[3px] text-[12px] bg-[#f2f2f2] text-[#666]"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      {l.key_points && l.key_points.length > 0 && (
        <section className="mb-9">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.6px] text-[#aaa]">
            Key Points
          </p>
          <ul className="flex flex-col gap-2">
            {l.key_points.map((point, i) => (
              <li
                key={i}
                className="relative pl-4 text-[14px] text-[#333] before:absolute before:left-0 before:text-[#ccc] before:content-['—']"
              >
                {point}
              </li>
            ))}
          </ul>
        </section>
      )}

      {l.transcript && (
        <section>
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.6px] text-[#aaa]">
            Transcript
          </p>
          <div
            className="whitespace-pre-wrap text-[14px] leading-[1.9] text-[#333]"
            dangerouslySetInnerHTML={{ __html: formatTranscript(l.transcript) }}
          />
        </section>
      )}
    </main>
  )
}

import { createFileRoute, Link } from '@tanstack/react-router'
import { loadAll } from '#/lib/lectures'
import type { Lecture } from '#/lib/lectures'

export const Route = createFileRoute('/')({
  loader: () => loadAll(),
  head: () => ({ meta: [{ title: 'Lectures' }] }),
  component: LecturesPage,
})

function LecturesPage() {
  const lectures = Route.useLoaderData()
  return (
    <main className="mx-auto max-w-[680px] px-6 py-12">
      <header className="mb-10">
        <h1 className="text-[20px] font-semibold tracking-[-0.4px] text-[#111]">
          Lectures
        </h1>
        <p className="mt-1 text-[13px] text-[#999]">
          {lectures.length} lecture{lectures.length !== 1 ? 's' : ''}
        </p>
      </header>

      {lectures.length === 0 ? (
        <p className="py-12 text-center text-[14px] text-[#bbb]">
          No lectures yet.
        </p>
      ) : (
        <ul className="flex flex-col overflow-hidden rounded-[10px] border border-[#eee]">
          {lectures.map((l) => (
            <LectureItem key={l.video_id} lecture={l} />
          ))}
        </ul>
      )}
    </main>
  )
}

function LectureItem({ lecture: l }: { lecture: Lecture }) {
  return (
    <li className="border-t border-[#eee] first:border-t-0">
      <Link
        to="/lecture/$videoId"
        params={{ videoId: l.video_id }}
        className="flex cursor-pointer items-start gap-[14px] bg-white px-4 py-[14px] transition-colors hover:bg-[#fafafa]"
      >
        {l.thumbnail ? (
          <img
            src={l.thumbnail}
            alt=""
            className="h-[50px] w-[88px] shrink-0 rounded-[5px] bg-[#f0f0f0] object-cover"
          />
        ) : (
          <div className="h-[50px] w-[88px] shrink-0 rounded-[5px] bg-[#f0f0f0]" />
        )}
        <div className="min-w-0 flex-1">
          <h2 className="truncate text-[13px] font-medium text-[#111]">
            {l.title ?? l.video_id}
          </h2>
          {l.summary && (
            <p className="mt-[3px] truncate text-[12px] text-[#999]">
              {l.summary.slice(0, 100)}
              {l.summary.length > 100 ? '…' : ''}
            </p>
          )}
          {l.tags && l.tags.length > 0 && (
            <div className="mt-1.5 flex flex-wrap gap-1">
              {l.tags.slice(0, 4).map((tag) => (
                <span
                  key={tag}
                  className="rounded px-[7px] py-[2px] text-[11px] bg-[#f2f2f2] text-[#666]"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </Link>
    </li>
  )
}

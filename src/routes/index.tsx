import { createFileRoute, Link } from '@tanstack/react-router'
import { siteConfig, courses } from '#/config/site'

export const Route = createFileRoute('/')({
  head: () => ({ meta: [{ title: 'Tayseer — Learn Arabic' }] }),
  component: HomePage,
})

const arabic101 = courses['arabic-101']

function HomePage() {
  return (
    <div className="rise-in">
      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="bg-black text-white">
        <div className="mx-auto max-w-5xl px-6 py-24 sm:py-32">
          <p className="section-label text-white/40 mb-5">{siteConfig.name}</p>
          <h1 className="display-title text-5xl sm:text-6xl font-bold leading-tight mb-6 max-w-2xl">
            {siteConfig.tagline}
          </h1>
          <p className="text-white/60 text-lg max-w-xl mb-10 leading-relaxed">
            {siteConfig.description}
          </p>
      
        </div>
      </section>

      {/* ── Courses ──────────────────────────────────────────────────── */}
      <section className="mx-auto max-w-5xl px-6 py-20">
        <div className="section-label mb-8">Courses Near You</div>

        {/* Arabic 101 featured card */}
        <div className="rounded-2xl border border-gray-200 overflow-hidden mb-6">
          <div className="bg-[#f5f0e8] px-8 py-8 sm:py-10 border-b border-[#ede4d3]">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6">
              <div className="flex-1">
                <div className="inline-flex items-center gap-2 bg-[#009000]/10 text-[#007700] text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
                  Active Course
                </div>
                <h2 className="text-2xl font-bold text-black mb-2">
                  {arabic101.name}
                </h2>
                <p className="text-gray-600 text-sm max-w-lg leading-relaxed">
                  {arabic101.description}
                </p>
              </div>
              <Link
                to="/arabic-101"
                className="btn-primary shrink-0 self-start"
              >
                View Course →
              </Link>
            </div>
          </div>

          {/* Course details strip */}
          <div className="bg-white divide-y divide-gray-100 sm:divide-y-0 sm:flex sm:divide-x sm:divide-gray-100">
            <DetailCell label="Days">
              {arabic101.schedule.days.join(' & ')}
            </DetailCell>
            <DetailCell label="Time">{arabic101.schedule.time}</DetailCell>
            <DetailCell label="Location">
              <a
                href={arabic101.schedule.locationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#009000] font-semibold hover:text-[#007700]"
              >
                {arabic101.schedule.location} ↗
              </a>
            </DetailCell>
            <DetailCell label="Books">
              <a
                href={arabic101.resources.textbooks.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#009000] font-semibold hover:text-[#007700]"
              >
                Medina Series ↗
              </a>
            </DetailCell>
          </div>
        </div>
      </section>

      {/* ── Tools ────────────────────────────────────────────────────── */}
      <section className="bg-[#f5f0e8] border-y border-[#ede4d3]">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <div className="section-label mb-8">Learning Tools</div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <ToolCard
              to="/cognates"
              title="Cognates"
              description="Discover shared vocabulary between Arabic and other languages. Build a larger mental lexicon faster by leveraging words you already know."
              badge="Coming Soon"
            />
            <ToolCard
              to="/quizzes"
              title="Quizzes"
              description="Reinforce what you've learned with vocabulary drills, grammar exercises, and comprehension challenges drawn from course material."
              badge="Coming Soon"
            />
          </div>
        </div>
      </section>

      {/* ── Why Arabic ───────────────────────────────────────────────── */}
      <section className="mx-auto max-w-5xl px-6 py-20">
        <div className="section-label mb-8">Why Learn Arabic?</div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <Reason
            title="Understand the Quran"
            body="Over 6,000 verses — accessing them directly in Arabic transforms how you connect with the text."
          />
          <Reason
            title="Classical Literature"
            body="Unlock centuries of scholarship in fiqh, tafseer, hadith, and poetry in their original language."
          />
          <Reason
            title="Structured Learning"
            body="The Medina Series is a time-tested, systematic curriculum used around the world."
          />
        </div>
      </section>
    </div>
  )
}

// ── Sub-components ─────────────────────────────────────────────────────────────

function DetailCell({
  label,
  children,
}: {
  label: string
  children: React.ReactNode
}) {
  return (
    <div className="flex-1 px-6 py-4">
      <div className="section-label mb-1">{label}</div>
      <div className="text-sm font-medium text-black">{children}</div>
    </div>
  )
}

function ToolCard({
  to,
  title,
  description,
  badge,
}: {
  to: '/cognates' | '/quizzes'
  title: string
  description: string
  badge?: string
}) {
  return (
    <Link
      to={to}
      className="group rounded-xl border border-[#ede4d3] bg-white p-6 no-underline hover:border-black hover:shadow-sm transition-all"
    >
      <div className="flex items-start justify-between mb-3">
        <h3 className="text-base font-bold text-black">{title}</h3>
        {badge && (
          <span className="text-xs font-semibold text-gray-400 bg-gray-100 px-2 py-0.5 rounded-full">
            {badge}
          </span>
        )}
      </div>
      <p className="text-sm text-gray-500 leading-relaxed">{description}</p>
      <span className="mt-4 inline-block text-xs font-semibold text-gray-300 group-hover:text-[#009000] transition-colors">
        Learn more →
      </span>
    </Link>
  )
}

function Reason({ title, body }: { title: string; body: string }) {
  return (
    <div className="border-t-2 border-[#009000] pt-5">
      <h3 className="text-base font-bold text-black mb-2">{title}</h3>
      <p className="text-sm text-gray-500 leading-relaxed">{body}</p>
    </div>
  )
}

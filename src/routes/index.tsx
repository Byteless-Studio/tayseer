import { createFileRoute, Link } from '@tanstack/react-router'
import { siteConfig, courses } from '#/config/site'
import { Badge } from '#/components/ui/badge'
import { Button } from '#/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '#/components/ui/card'

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
          <p className="text-[0.7rem] font-bold tracking-[0.12em] uppercase text-white/40 mb-5">
            {siteConfig.name}
          </p>
          <h1 className="font-serif tracking-[-0.02em] text-5xl sm:text-6xl font-bold leading-tight mb-6 max-w-2xl">
            {siteConfig.tagline}
          </h1>
          <p className="text-white/60 text-lg max-w-xl mb-10 leading-relaxed">
            {siteConfig.description}
          </p>
        </div>
      </section>

      {/* ── Courses ──────────────────────────────────────────────────── */}
      <section className="mx-auto max-w-5xl px-6 py-20">
        <p className="text-[0.7rem] font-bold tracking-[0.12em] uppercase text-muted-foreground mb-8">
          Courses
        </p>

        <Card className="overflow-hidden mb-6">
          <div className="bg-beige px-8 py-8 sm:py-10 border-b border-beige-dark">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6">
              <div className="flex-1">
                <Badge className="mb-4 bg-brand/10 text-brand-hover border-brand/20 hover:bg-brand/10">
                  Active Course
                </Badge>
                <h2 className="text-2xl font-bold text-black mb-2">{arabic101.name}</h2>
                <p className="text-muted-foreground text-sm max-w-lg leading-relaxed">
                  {arabic101.description}
                </p>
              </div>
              <Button asChild className="shrink-0 self-start bg-brand hover:bg-brand-hover text-white">
                <Link to="/arabic-with-mufti-saim/arabic-101">View Course →</Link>
              </Button>
            </div>
          </div>

          <div className="bg-card divide-y divide-border sm:divide-y-0 sm:flex sm:divide-x sm:divide-border">
            <DetailCell label="Days">{arabic101.schedule.days.join(' & ')}</DetailCell>
            <DetailCell label="Time">{arabic101.schedule.time}</DetailCell>
            <DetailCell label="Location">
              <a
                href={arabic101.schedule.locationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand font-semibold hover:text-brand-hover"
              >
                {arabic101.schedule.location} ↗
              </a>
            </DetailCell>
            <DetailCell label="Books">
              <a
                href={arabic101.resources.textbooks.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand font-semibold hover:text-brand-hover"
              >
                Medina Series ↗
              </a>
            </DetailCell>
          </div>
        </Card>
      </section>

      {/* ── Tools ────────────────────────────────────────────────────── */}
      <section className="bg-beige border-y border-beige-dark">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <p className="text-[0.7rem] font-bold tracking-[0.12em] uppercase text-muted-foreground mb-8">
            Learning Tools
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <ToolCard
              to="/cognates/cognates"
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
        <p className="text-[0.7rem] font-bold tracking-[0.12em] uppercase text-muted-foreground mb-8">
          Why Learn Arabic?
        </p>
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

function DetailCell({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex-1 px-6 py-4">
      <div className="text-[0.7rem] font-bold tracking-[0.12em] uppercase text-muted-foreground mb-1">
        {label}
      </div>
      <div className="text-sm font-medium text-foreground">{children}</div>
    </div>
  )
}

function ToolCard({
  to,
  title,
  description,
  badge,
}: {
  to: '/cognates/cognates' | '/quizzes'
  title: string
  description: string
  badge?: string
}) {
  return (
    <Link to={to} className="group no-underline">
      <Card className="h-full border-beige-dark hover:border-foreground hover:shadow-sm transition-all">
        <CardHeader className="pb-2">
          <div className="flex items-start justify-between">
            <CardTitle className="text-base">{title}</CardTitle>
            {badge && (
              <Badge variant="secondary" className="text-xs">
                {badge}
              </Badge>
            )}
          </div>
        </CardHeader>
        <CardContent>
          <CardDescription className="leading-relaxed">{description}</CardDescription>
          <span className="mt-4 inline-block text-xs font-semibold text-muted-foreground/50 group-hover:text-brand transition-colors">
            Learn more →
          </span>
        </CardContent>
      </Card>
    </Link>
  )
}

function Reason({ title, body }: { title: string; body: string }) {
  return (
    <div className="border-t-2 border-brand pt-5">
      <h3 className="text-base font-bold text-foreground mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed">{body}</p>
    </div>
  )
}

import { createFileRoute, Link } from '@tanstack/react-router'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '#/components/ui/card'

export const Route = createFileRoute('/challenges/')({
  head: () => ({ meta: [{ title: 'Challenges — Tayseer' }] }),
  component: ChallengesPage,
})

function ChallengesPage() {
  return (
    <main className="flex-1">
      <div className="border-b border-border bg-beige">
        <div className="mx-auto w-[min(1080px,calc(100%-2rem))] py-12">
          <p className="text-[0.7rem] font-bold tracking-[0.12em] uppercase text-muted-foreground mb-3">
            Practice
          </p>
          <h1 className="font-serif tracking-[-0.02em] text-4xl font-bold text-foreground leading-tight mb-3">
            Challenges
          </h1>
          <p className="text-muted-foreground text-base max-w-xl">
            Test your Arabic with vocabulary drills on roots and patterns, and grammar
            exercises covering every structure taught in the Medina series.
          </p>
        </div>
      </div>

      <div className="mx-auto w-[min(1080px,calc(100%-2rem))] py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <ChallengeCard
            to="/challenges/vocabulary"
            arabic="الجذور والأوزان"
            title="Vocabulary — Roots & Patterns"
            description="Identify words, roots, and the verb patterns (awzān) that shape Arabic vocabulary. 41 questions."
          />
          <ChallengeCard
            to="/challenges/grammar"
            arabic="القواعد"
            title="Grammar — Arabic Structures"
            description="47 topics in learning order, from demonstratives and idāfah through kāna and her sisters."
          />
        </div>
      </div>
    </main>
  )
}

function ChallengeCard({
  to,
  arabic,
  title,
  description,
}: {
  to: '/challenges/vocabulary' | '/challenges/grammar'
  arabic: string
  title: string
  description: string
}) {
  return (
    <Link to={to} className="group no-underline">
      <Card className="h-full border-beige-dark hover:border-foreground hover:shadow-sm transition-all">
        <CardHeader className="pb-2">
          <div className="flex items-start justify-between gap-3">
            <CardTitle className="text-base">{title}</CardTitle>
            <span
              dir="rtl"
              lang="ar"
              style={{ fontFamily: "'Noto Naskh Arabic', serif" }}
              className="text-base text-brand shrink-0 leading-none"
            >
              {arabic}
            </span>
          </div>
        </CardHeader>
        <CardContent>
          <CardDescription className="leading-relaxed">{description}</CardDescription>
          <span className="mt-4 inline-block text-xs font-semibold text-muted-foreground/50 group-hover:text-brand transition-colors">
            Start →
          </span>
        </CardContent>
      </Card>
    </Link>
  )
}

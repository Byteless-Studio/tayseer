import { Link } from '@tanstack/react-router'
import { QuizCarousel } from '#/components/QuizCarousel'
import type { StrictQuizItem } from '#/routes/challenges/-quiz-types'

type GrammarTopicPageProps = {
  arabic: string
  title: string
  description: string
  items: StrictQuizItem[]
}

export function GrammarTopicPage({ arabic, title, description, items }: GrammarTopicPageProps) {
  return (
    <main className="flex-1">
      <div className="border-b border-border bg-beige">
        <div className="mx-auto w-[min(720px,calc(100%-2rem))] py-10">
          <Link to="/challenges/grammar" className="text-xs text-muted-foreground hover:text-brand mb-4 inline-block no-underline">
            ← Grammar challenges
          </Link>
          <p className="text-[0.7rem] font-bold tracking-[0.12em] uppercase text-muted-foreground mb-3">Grammar</p>
          <h1 className="font-serif tracking-[-0.02em] text-4xl font-bold text-foreground leading-tight mb-3">
            <bdi lang="ar">{arabic}</bdi> — {title}
          </h1>
          <p className="text-muted-foreground text-base max-w-xl">{description}</p>
        </div>
      </div>
      <div className="mx-auto w-[min(720px,calc(100%-2rem))] py-8">
        <QuizCarousel items={items} />
      </div>
    </main>
  )
}

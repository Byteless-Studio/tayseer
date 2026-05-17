import { createFileRoute, Link } from '@tanstack/react-router'
import { Button } from '#/components/ui/button'

export const Route = createFileRoute('/challenges/')({
  head: () => ({ meta: [{ title: 'Quizzes — Tayseer' }] }),
  component: QuizzesPage,
})

function QuizzesPage() {
  return (
    <main className="flex-1 flex flex-col items-center justify-center px-6 py-20 text-center">
      <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-amber-100 border border-amber-300 px-4 py-1.5 dark:bg-amber-950 dark:border-amber-700">
        <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
        <span className="text-sm font-semibold tracking-wide text-amber-700 uppercase dark:text-amber-400">
          Coming Soon
        </span>
      </div>
      <h1 className="font-serif tracking-[-0.02em] text-4xl font-bold text-foreground mb-4">
        Quizzes
      </h1>
      <p className="text-muted-foreground text-lg max-w-md mx-auto mb-10">
        Test your Arabic knowledge with vocabulary drills, grammar exercises, and
        comprehension challenges.
      </p>
      <Button variant="outline" asChild>
        <Link to="/">← Back to Home</Link>
      </Button>
    </main>
  )
}

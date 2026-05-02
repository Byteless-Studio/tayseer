import { createFileRoute, Link } from '@tanstack/react-router'
import { Badge } from '#/components/ui/badge'
import { Button } from '#/components/ui/button'

export const Route = createFileRoute('/quizzes')({
  head: () => ({ meta: [{ title: 'Quizzes — Tayseer' }] }),
  component: QuizzesPage,
})

function QuizzesPage() {
  return (
    <main className="flex-1 flex flex-col items-center justify-center px-6 py-20 text-center">
      <Badge className="mb-6 bg-brand/10 text-brand-hover border-brand/20 hover:bg-brand/10">
        Coming Soon
      </Badge>
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

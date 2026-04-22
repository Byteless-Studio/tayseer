import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/quizzes')({
  head: () => ({ meta: [{ title: 'Quizzes — Tayseer' }] }),
  component: QuizzesPage,
})

function QuizzesPage() {
  return (
    <main className="flex-1 flex flex-col items-center justify-center px-6 py-20 text-center">
      <div className="inline-flex items-center gap-2 bg-[#009000]/10 text-[#007700] text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-6">
        Coming Soon
      </div>
      <h1 className="display-title text-4xl font-bold text-black mb-4">Quizzes</h1>
      <p className="text-gray-500 text-lg max-w-md mx-auto mb-10">
        Test your Arabic knowledge with vocabulary drills, grammar exercises, and
        comprehension challenges.
      </p>
      <Link to="/" className="btn-outline">← Back to Home</Link>
    </main>
  )
}

import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/cognates')({
  head: () => ({ meta: [{ title: 'Cognates — Tayseer' }] }),
  component: CognatesPage,
})

function CognatesPage() {
  return (
    <main className="flex-1 flex flex-col items-center justify-center px-6 py-20 text-center">
      <div className="inline-flex items-center gap-2 bg-[#009000]/10 text-[#007700] text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-6">
        Coming Soon
      </div>
      <h1 className="display-title text-4xl font-bold text-black mb-4">Cognates</h1>
      <p className="text-gray-500 text-lg max-w-md mx-auto mb-10">
        Explore shared vocabulary between Arabic and other languages to accelerate
        your learning.
      </p>
      <Link to="/" className="btn-outline">← Back to Home</Link>
    </main>
  )
}

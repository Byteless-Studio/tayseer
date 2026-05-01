import { useState } from 'react'
import type { QuizItem } from '#/lib/arabic-101'

function getCorrectIndex(item: QuizItem): number {
  if (!item.options || item.options.length === 0) return -1
  return item.options.findIndex((opt) => item.a.startsWith(opt))
}

export function QuizCarousel({ items }: { items: QuizItem[] }) {
  const [current, setCurrent] = useState(0)
  const [answers, setAnswers] = useState<Record<number, number>>({})
  const [showScore, setShowScore] = useState(false)

  const item = items[current]
  const correctIdx = getCorrectIndex(item)
  const selected = answers[current]
  const hasAnswered = selected !== undefined
  const answeredCount = Object.keys(answers).length
  const score = items.filter((it, i) => answers[i] === getCorrectIndex(it)).length

  function select(optIdx: number) {
    if (hasAnswered) return
    setAnswers((prev) => ({ ...prev, [current]: optIdx }))
  }

  function goNext() {
    if (current < items.length - 1) setCurrent((c) => c + 1)
    else setShowScore(true)
  }

  function goPrev() {
    if (current > 0) setCurrent((c) => c - 1)
  }

  function reset() {
    setCurrent(0)
    setAnswers({})
    setShowScore(false)
  }

  if (showScore) {
    return (
      <div className="rounded-xl border border-gray-200 p-6">
        <div className="text-center mb-6">
          <div className="text-5xl font-bold text-[#009000] mb-2">{score}/{items.length}</div>
          <p className="text-sm text-gray-500">
            {score === items.length
              ? 'Perfect score!'
              : score >= Math.ceil(items.length / 2)
              ? 'Good work — review the ones you missed.'
              : 'Keep practicing — review the answers below.'}
          </p>
        </div>

        <div className="flex flex-col gap-2 mb-6">
          {items.map((it, i) => {
            const ci = getCorrectIndex(it)
            const ua = answers[i]
            const correct = ua === ci
            return (
              <div
                key={i}
                className={`rounded-lg border p-3 text-xs ${
                  correct
                    ? 'border-[#009000]/30 bg-[#009000]/5'
                    : 'border-red-200 bg-red-50'
                }`}
              >
                <p className="font-medium text-gray-700 mb-1">{i + 1}. {it.q}</p>
                {!correct && ua !== undefined && (
                  <p className="text-red-500 mb-0.5">Your answer: {it.options?.[ua]}</p>
                )}
                <p className={correct ? 'text-[#009000]' : 'text-gray-600'}>
                  ✓ {it.options?.[ci] ?? it.a}
                </p>
              </div>
            )
          })}
        </div>

        <button
          onClick={reset}
          className="w-full rounded-lg border border-gray-200 py-2 text-sm text-gray-600 hover:border-gray-400 hover:text-gray-900 transition-colors cursor-pointer"
        >
          Try Again
        </button>
      </div>
    )
  }

  return (
    <div>
      {/* Progress bar */}
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs text-gray-400">Question {current + 1} of {items.length}</span>
        <span className="text-xs text-gray-400">{answeredCount} / {items.length} answered</span>
      </div>
      <div className="mb-4 h-1 w-full rounded-full bg-gray-100">
        <div
          className="h-1 rounded-full bg-[#009000] transition-all duration-300"
          style={{ width: `${((current + 1) / items.length) * 100}%` }}
        />
      </div>

      {/* Question card */}
      <div className="rounded-xl border border-gray-200 p-5">
        <p className="text-sm font-medium text-gray-800 mb-4 leading-snug">{item.q}</p>

        {item.options && item.options.length > 0 ? (
          <div className="flex flex-col gap-2">
            {item.options.map((opt, j) => {
              let cls =
                'text-left w-full rounded-lg border px-3 py-2 text-xs transition-colors '
              if (!hasAnswered) {
                cls +=
                  'border-gray-200 text-gray-700 hover:border-[#009000] hover:bg-[#009000]/5 cursor-pointer'
              } else if (j === correctIdx) {
                cls +=
                  'border-[#009000] bg-[#009000]/10 text-[#009000] font-medium cursor-default'
              } else if (j === selected) {
                cls += 'border-red-300 bg-red-50 text-red-600 cursor-default'
              } else {
                cls += 'border-gray-100 text-gray-300 cursor-default'
              }
              return (
                <button key={j} className={cls} onClick={() => select(j)}>
                  <span className="font-semibold mr-1">{String.fromCharCode(97 + j)})</span>
                  {opt}
                </button>
              )
            })}
          </div>
        ) : (
          <button
            className="text-xs text-[#009000] font-medium underline cursor-pointer"
            onClick={() => select(0)}
          >
            {hasAnswered ? 'Hide answer' : 'Reveal answer'}
          </button>
        )}

        {hasAnswered && (
          <div className="mt-4 rounded-lg bg-gray-50 border-l-2 border-[#009000] p-3 text-xs text-gray-700 leading-relaxed">
            {item.a}
          </div>
        )}
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-between mt-3">
        <button
          onClick={goPrev}
          disabled={current === 0}
          className="rounded-lg border border-gray-200 px-3 py-1.5 text-xs text-gray-500 disabled:opacity-30 disabled:pointer-events-none hover:border-gray-400 hover:text-gray-700 transition-colors cursor-pointer"
        >
          ← Prev
        </button>

        <div className="flex gap-1.5 items-center">
          {items.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`rounded-full transition-all cursor-pointer ${
                i === current
                  ? 'w-4 h-2 bg-[#009000]'
                  : answers[i] !== undefined
                  ? 'w-2 h-2 bg-gray-300'
                  : 'w-2 h-2 bg-gray-200 hover:bg-gray-300'
              }`}
            />
          ))}
        </div>

        <button
          onClick={goNext}
          disabled={!hasAnswered}
          className="rounded-lg border px-3 py-1.5 text-xs transition-colors disabled:opacity-30 disabled:pointer-events-none border-[#009000] text-[#009000] hover:bg-[#009000] hover:text-white cursor-pointer"
        >
          {current === items.length - 1 ? 'See Score' : 'Next →'}
        </button>
      </div>
    </div>
  )
}

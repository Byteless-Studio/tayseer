import { useState } from 'react'
import type { QuizItem } from '#/routes/arabic-with-mufti-saim/arabic-101.types'
import { Button } from '#/components/ui/button'

export function QuizCarousel({ items }: { items: QuizItem[] }) {
  const [current, setCurrent] = useState(0)
  const [answers, setAnswers] = useState<Record<number, number>>({})
  const [showScore, setShowScore] = useState(false)

  const item = items[current]
  const correctIdx = item.correctIndex ?? 0
  const selected = answers[current]
  const hasAnswered = selected !== undefined
  const answeredCount = Object.keys(answers).length
  const score = items.filter((it, i) => answers[i] === (it.correctIndex ?? 0)).length

  function select(optIdx: number) {
    if (hasAnswered) return
    setAnswers((prev) => ({ ...prev, [current]: optIdx }))
  }

  function reset() {
    setCurrent(0)
    setAnswers({})
    setShowScore(false)
  }

  if (showScore) {
    return (
      <div className="rounded-xl border border-border p-6">
        <div className="text-center mb-6">
          <div className="text-5xl font-bold text-brand mb-2">
            {score}/{items.length}
          </div>
          <p className="text-sm text-muted-foreground">
            {score === items.length
              ? 'Perfect score!'
              : score >= Math.ceil(items.length / 2)
              ? 'Good work — review the ones you missed.'
              : 'Keep practicing — review the answers below.'}
          </p>
        </div>

        <div className="flex flex-col gap-2 mb-6">
          {items.map((it, i) => {
            const ci = it.correctIndex ?? 0
            const ua = answers[i]
            const correct = ua === ci
            return (
              <div
                key={i}
                className={`rounded-lg border p-3 text-xs ${
                  correct ? 'border-brand/30 bg-brand/5' : 'border-red-200 bg-red-50'
                }`}
              >
                <p className="font-medium text-foreground mb-1">
                  {i + 1}. {it.q}
                </p>
                {!correct && ua !== undefined && (
                  <p className="text-red-500 mb-0.5">Your answer: {it.options?.[ua]}</p>
                )}
                <p className={correct ? 'text-brand' : 'text-muted-foreground'}>
                  ✓ {it.options?.[ci]}
                </p>
              </div>
            )
          })}
        </div>

        <Button variant="outline" className="w-full" onClick={reset}>
          Try Again
        </Button>
      </div>
    )
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs text-muted-foreground">
          Question {current + 1} of {items.length}
        </span>
        <span className="text-xs text-muted-foreground">
          {answeredCount}/{items.length} answered
        </span>
      </div>
      <div className="mb-4 h-1 w-full rounded-full bg-muted">
        <div
          className="h-1 rounded-full bg-brand transition-all duration-300"
          style={{ width: `${((current + 1) / items.length) * 100}%` }}
        />
      </div>

      <div className="rounded-xl border border-border p-5">
        <p className="text-sm font-medium text-foreground mb-4 leading-snug">{item.q}</p>

        {item.options && item.options.length > 0 && (
          <div className="flex flex-col gap-2">
            {item.options.map((opt, j) => {
              let cls = 'text-left w-full rounded-lg border px-3 py-2 text-xs transition-colors cursor-pointer '
              if (!hasAnswered) {
                cls += 'border-border text-foreground hover:border-brand hover:bg-brand/5'
              } else if (j === correctIdx) {
                cls += 'border-brand bg-brand/10 text-brand font-medium cursor-default'
              } else if (j === selected) {
                cls += 'border-red-300 bg-red-50 text-red-600 cursor-default'
              } else {
                cls += 'border-border/50 text-muted-foreground/40 cursor-default'
              }
              return (
                <button type="button" key={j} className={cls} onClick={() => select(j)}>
                  <span className="font-semibold mr-1">{String.fromCharCode(97 + j)})</span>
                  {opt}
                </button>
              )
            })}
          </div>
        )}

        {hasAnswered && (
          <div className="mt-4 rounded-lg bg-muted border-l-2 border-brand p-3 text-xs text-foreground leading-relaxed">
            {item.a}
          </div>
        )}
      </div>

      <div className="flex items-center justify-between mt-3">
        <Button
          variant="outline"
          size="sm"
          onClick={() => setCurrent((c) => c - 1)}
          disabled={current === 0}
          className="text-xs"
        >
          ← Prev
        </Button>

        <div className="flex gap-1.5 items-center">
          {items.map((_, i) => (
            <button
              type="button"
              key={i}
              onClick={() => setCurrent(i)}
              className={`rounded-full transition-all cursor-pointer ${
                i === current
                  ? 'w-4 h-2 bg-brand'
                  : answers[i] !== undefined
                  ? 'w-2 h-2 bg-muted-foreground/40'
                  : 'w-2 h-2 bg-muted hover:bg-muted-foreground/20'
              }`}
            />
          ))}
        </div>

        {current < items.length - 1 ? (
          <Button
            variant="outline"
            size="sm"
            onClick={() => setCurrent((c) => c + 1)}
            disabled={!hasAnswered}
            className="text-xs border-brand text-brand hover:bg-brand hover:text-white"
          >
            Next →
          </Button>
        ) : (
          <Button
            variant="outline"
            size="sm"
            onClick={() => setShowScore(true)}
            disabled={!hasAnswered}
            className="text-xs border-brand text-brand hover:bg-brand hover:text-white"
          >
            See Score
          </Button>
        )}
      </div>
    </div>
  )
}

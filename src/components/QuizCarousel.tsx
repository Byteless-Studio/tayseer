import { useState } from 'react'
import type { QuizItem } from '#/routes/arabic-with-mufti-saim/-arabic-101.types'
import { Button } from '#/components/ui/button'

const NASKH = "'Noto Naskh Arabic', 'Amiri', serif"

// A run of Arabic: starts and ends on an Arabic letter, and may span whitespace
// and Arabic punctuation in between. Latin punctuation is deliberately excluded
// so "مضاف إليه (genitive)" splits at the paren rather than swallowing it.
const ARABIC_RUN =
  /[؀-ۿݐ-ݿࢠ-ࣿﭐ-﷿ﹰ-﻿](?:[؀-ۿݐ-ݿࢠ-ࣿﭐ-﷿ﹰ-﻿\s،؛؟.!:]*[؀-ۿݐ-ݿࢠ-ࣿﭐ-﷿ﹰ-﻿])?/g

// Mixed Arabic/Latin text reorders badly under the Unicode bidi algorithm —
// parentheses, quotes and digits next to a direction change get shuffled. Wrap
// every run in its own <bdi> so each is isolated and the surrounding text keeps
// its own direction. Arabic runs also pick up the Naskh face wherever they sit,
// including inside an English sentence.
function BidiText({ text }: { text: string }) {
  const parts: Array<{ ar: boolean; t: string }> = []
  let last = 0
  for (const m of text.matchAll(ARABIC_RUN)) {
    const i = m.index ?? 0
    if (i > last) parts.push({ ar: false, t: text.slice(last, i) })
    parts.push({ ar: true, t: m[0] })
    last = i + m[0].length
  }
  if (last < text.length) parts.push({ ar: false, t: text.slice(last) })

  return (
    <>
      {parts.map((p, i) =>
        p.ar ? (
          <bdi key={i} dir="rtl" lang="ar" style={{ fontFamily: NASKH }}>
            {p.t}
          </bdi>
        ) : (
          <bdi key={i} dir="ltr">
            {p.t}
          </bdi>
        ),
      )}
    </>
  )
}

// Quiz strings are authored bilingually as "<arabic>\n<english>". Render the
// Arabic line RTL in the Naskh face and the English gloss smaller beneath it,
// using opacity rather than a fixed color so the answer states still tint both.
function Bilingual({
  text,
  arClass = '',
  enClass = '',
}: {
  text: string
  arClass?: string
  enClass?: string
}) {
  const newline = text.indexOf('\n')
  const ar = newline === -1 ? text : text.slice(0, newline)
  const en = newline === -1 ? '' : text.slice(newline + 1).trim()
  return (
    <span className="block">
      <span
        dir="rtl"
        lang="ar"
        style={{ fontFamily: NASKH }}
        className={`block leading-relaxed ${arClass}`}
      >
        <BidiText text={ar} />
      </span>
      {en && (
        <span dir="ltr" className={`block leading-snug opacity-70 mt-1 ${enClass}`}>
          <BidiText text={en} />
        </span>
      )}
    </span>
  )
}

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
            const skipped = ua === undefined
            const correct = ua === ci
            return (
              <div
                key={i}
                className={`rounded-lg border p-3 text-xs ${
                  correct
                    ? 'border-brand/30 bg-brand/5'
                    : skipped
                    ? 'border-border bg-muted/40'
                    : 'border-red-200 bg-red-50'
                }`}
              >
                <div className="font-medium text-foreground mb-2 flex items-start gap-1.5">
                  <span className="shrink-0 opacity-60">{i + 1}.</span>
                  <span className="min-w-0 flex-1">
                    <Bilingual text={it.q} arClass="text-sm" enClass="text-xs" />
                  </span>
                </div>
                {skipped && (
                  <p className="text-muted-foreground mb-1.5 text-[0.65rem] uppercase tracking-wide">
                    Not answered
                  </p>
                )}
                {!correct && !skipped && it.options?.[ua] && (
                  <div className="text-red-500 mb-1.5">
                    <span className="block text-[0.65rem] uppercase tracking-wide opacity-70 mb-0.5">
                      Your answer
                    </span>
                    <Bilingual text={it.options[ua]} arClass="text-sm" enClass="text-xs" />
                  </div>
                )}
                {it.options?.[ci] && (
                  <div className={correct ? 'text-brand' : 'text-muted-foreground'}>
                    <span className="block text-[0.65rem] uppercase tracking-wide opacity-70 mb-0.5">
                      {correct ? 'Correct' : 'Correct answer'}
                    </span>
                    <Bilingual text={it.options[ci]} arClass="text-sm" enClass="text-xs" />
                  </div>
                )}
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
        <div className="mb-5 text-foreground">
          <Bilingual
            text={item.q}
            arClass="text-lg font-medium"
            enClass="text-sm font-medium"
          />
        </div>

        {item.options && item.options.length > 0 && (
          <div className="flex flex-col gap-2">
            {item.options.map((opt, j) => {
              let cls =
                'text-left w-full rounded-lg border px-3 py-2.5 transition-colors flex items-start gap-2.5 '
              if (!hasAnswered) {
                cls += 'cursor-pointer border-border text-foreground hover:border-brand hover:bg-brand/5'
              } else if (j === correctIdx) {
                cls += 'border-brand bg-brand/10 text-brand font-medium cursor-default'
              } else if (j === selected) {
                cls += 'border-red-300 bg-red-50 text-red-600 cursor-default'
              } else {
                cls += 'border-border/50 text-muted-foreground/40 cursor-default'
              }
              return (
                <button type="button" key={j} className={cls} onClick={() => select(j)}>
                  <span className="font-semibold text-xs shrink-0 pt-1 opacity-60">
                    {String.fromCharCode(97 + j)})
                  </span>
                  <span className="min-w-0 flex-1">
                    <Bilingual text={opt} arClass="text-base" enClass="text-xs" />
                  </span>
                </button>
              )
            })}
          </div>
        )}

        {hasAnswered && (
          <div className="mt-4 rounded-lg bg-muted border-l-2 border-brand p-3 text-foreground">
            <Bilingual text={item.a} arClass="text-[0.95rem]" enClass="text-xs" />
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
              aria-label={`Question ${i + 1}`}
              aria-current={i === current}
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

import { useState } from 'react'
import type { QuranExample } from '#/routes/arabic-with-mufti-saim/-arabic-101.types'
import { Button } from '#/components/ui/button'

export function QuranCarousel({ items }: { items: QuranExample[] }) {
  const [current, setCurrent] = useState(0)
  const item = items[current]

  return (
    <div>
      <div className="rounded-xl border border-border bg-beige p-5 min-h-[200px] flex flex-col">
        <p className="text-right text-xl leading-loose text-foreground font-arabic mb-2" dir="rtl">
          {item.arabic}
        </p>
        {item.transliteration && (
          <p className="mb-1 text-sm italic text-muted-foreground">{item.transliteration}</p>
        )}
        <p className="text-sm text-foreground/80">{item.translation}</p>
        {(item.reference || item.note) && (
          <p className="mt-auto pt-3 text-xs text-muted-foreground">
            {item.reference && <span className="font-medium">{item.reference}</span>}
            {item.reference && item.note && ' — '}
            {item.note}
          </p>
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
          ←
        </Button>

        <div className="flex items-center gap-2">
          <div className="flex gap-1.5 items-center">
            {items.map((_, i) => (
              <button
                type="button"
                key={i}
                onClick={() => setCurrent(i)}
                className={`rounded-full transition-all cursor-pointer ${
                  i === current
                    ? 'w-4 h-2 bg-brand'
                    : 'w-2 h-2 bg-muted-foreground/30 hover:bg-muted-foreground/50'
                }`}
              />
            ))}
          </div>
          <span className="text-xs text-muted-foreground">
            {current + 1}/{items.length}
          </span>
        </div>

        <Button
          variant="outline"
          size="sm"
          onClick={() => setCurrent((c) => c + 1)}
          disabled={current === items.length - 1}
          className="text-xs"
        >
          →
        </Button>
      </div>
    </div>
  )
}

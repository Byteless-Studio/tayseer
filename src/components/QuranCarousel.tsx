import { useState } from 'react'
import type { QuranExample } from '#/lib/arabic-101'

export function QuranCarousel({ items }: { items: QuranExample[] }) {
  const [current, setCurrent] = useState(0)
  const item = items[current]

  return (
    <div>
      {/* Slide */}
      <div className="rounded-xl border border-gray-200 bg-[#f5f0e8] p-5 min-h-[180px] flex flex-col">
        <p
          className="text-right text-xl leading-loose text-gray-900 font-arabic mb-2"
          dir="rtl"
        >
          {item.arabic}
        </p>
        {item.transliteration && (
          <p className="mb-1 text-sm italic text-gray-500">{item.transliteration}</p>
        )}
        <p className="text-sm text-gray-700">{item.translation}</p>
        {(item.reference || item.note) && (
          <p className="mt-auto pt-3 text-xs text-gray-400">
            {item.reference && <span className="font-medium">{item.reference}</span>}
            {item.reference && item.note && ' — '}
            {item.note}
          </p>
        )}
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-between mt-3">
        <button
          onClick={() => setCurrent((c) => c - 1)}
          disabled={current === 0}
          className="rounded-lg border border-gray-200 px-3 py-1.5 text-xs text-gray-500 disabled:opacity-30 disabled:pointer-events-none hover:border-gray-400 hover:text-gray-700 transition-colors cursor-pointer"
        >
          ←
        </button>

        <div className="flex gap-1.5 items-center">
          {items.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`rounded-full transition-all cursor-pointer ${
                i === current
                  ? 'w-4 h-2 bg-[#009000]'
                  : 'w-2 h-2 bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>

        <span className="text-xs text-gray-400 min-w-[3rem] text-right">
          {current + 1} / {items.length}
        </span>

        <button
          onClick={() => setCurrent((c) => c + 1)}
          disabled={current === items.length - 1}
          className="rounded-lg border border-gray-200 px-3 py-1.5 text-xs text-gray-500 disabled:opacity-30 disabled:pointer-events-none hover:border-gray-400 hover:text-gray-700 transition-colors cursor-pointer"
        >
          →
        </button>
      </div>
    </div>
  )
}

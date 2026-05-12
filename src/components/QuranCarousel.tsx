import { useState, useEffect } from 'react'
import type { QuranExample } from '#/routes/arabic-with-mufti-saim/-arabic-101.types'
import { Button } from '#/components/ui/button'

interface AyahData {
  arabic: string
  transliteration: string | null
  translation: string
  translatorName: string
}

interface ParsedRef {
  surah: number
  start: number
  end: number
  cacheKey: string
}

// Parses "Al-Aʿraf 7:8-9" or "Al-Baqarah 2:255" into structured ref.
function parseRef(reference: string | undefined): ParsedRef | null {
  if (!reference) return null
  const range = reference.match(/(\d+):(\d+)-(\d+)/)
  if (range) {
    return {
      surah: parseInt(range[1]),
      start: parseInt(range[2]),
      end: parseInt(range[3]),
      cacheKey: `${range[1]}:${range[2]}-${range[3]}`,
    }
  }
  const single = reference.match(/(\d+):(\d+)/)
  if (single) {
    return {
      surah: parseInt(single[1]),
      start: parseInt(single[2]),
      end: parseInt(single[2]),
      cacheKey: `${single[1]}:${single[2]}`,
    }
  }
  return null
}

function QuranLink({ reference }: { reference: string }) {
  // For ranges, link to the first ayah. quran.com doesn't support range URLs.
  const match = reference.match(/(\d+):(\d+)/)
  if (!match) return <span className="font-medium">{reference}</span>
  const [, surah, ayat] = match
  return (
    <a
      href={`https://quran.com/${surah}/${ayat}`}
      target="_blank"
      rel="noopener noreferrer"
      className="font-medium hover:text-brand transition-colors no-underline"
    >
      {reference} ↗
    </a>
  )
}

async function fetchAyah(parsed: ParsedRef): Promise<AyahData> {
  const { surah, start, end } = parsed
  const editions = 'quran-simple,en.transliteration,en.sahih'
  const isRange = end > start

  let data: Array<{ ayahs?: Array<{ text: string }>; text?: string; edition: { englishName: string } }>

  if (isRange) {
    // Surah endpoint supports offset/limit for ranges. Offset is 0-based.
    const count = end - start + 1
    const res = await fetch(
      `https://api.alquran.cloud/v1/surah/${surah}/editions/${editions}?offset=${start - 1}&limit=${count}`,
    )
    const json = await res.json()
    data = json.data
    // Concatenate all ayahs in each edition into a single string.
    return {
      arabic: data[0].ayahs!.map((a) => `${a.text} ۝`).join(' '),
      transliteration: data[1].ayahs!.map((a) => `${a.text} ۝`).join(' ') || null,
      translation: data[2].ayahs!.map((a) => `${a.text} ۝`).join(' '),
      translatorName: data[2].edition.englishName,
    }
  } else {
    const res = await fetch(
      `https://api.alquran.cloud/v1/ayah/${surah}:${start}/editions/${editions}`,
    )
    const json = await res.json()
    data = json.data
    return {
      arabic: `${data[0].text!} ۝`,
      transliteration: data[1].text ? `${data[1].text} ۝` : null,
      translation: `${data[2].text!} ۝`,
      translatorName: data[2].edition.englishName,
    }
  }
}

export function QuranCarousel({ items }: { items: QuranExample[] }) {
  const [current, setCurrent] = useState(0)
  const [cache, setCache] = useState<Record<string, AyahData>>({})
  const [loading, setLoading] = useState(false)

  const item = items[current]
  const parsed = parseRef(item.reference)
  const ayah = parsed ? cache[parsed.cacheKey] : undefined

  useEffect(() => {
    if (!parsed || cache[parsed.cacheKey] !== undefined) return

    setLoading(true)
    fetchAyah(parsed)
      .then((data) => setCache((prev) => ({ ...prev, [parsed.cacheKey]: data })))
      .catch(() => {
        // Fall back to JSON fields on network failure.
      })
      .finally(() => setLoading(false))
  }, [parsed?.cacheKey])

  const arabic = ayah?.arabic ?? item.arabic
  const transliteration = ayah?.transliteration ?? item.transliteration ?? null
  const translation = ayah?.translation ?? item.translation

  return (
    <div>
      <div className="rounded-xl border border-border bg-beige p-5 min-h-[200px] flex flex-col">
        <p className="text-right text-xl leading-loose text-foreground font-arabic mb-2" dir="rtl">
          {arabic}
        </p>

        {loading ? (
          <p className="text-sm text-muted-foreground/50 italic">Loading…</p>
        ) : (
          <>
            {transliteration && (
              <p className="mb-1 text-sm italic text-muted-foreground">{transliteration}</p>
            )}
            <p className="text-sm text-foreground/80">{translation}</p>
            {ayah && (
              <p className="mt-1 text-[0.65rem] text-muted-foreground/50 italic">
                — {ayah.translatorName}
              </p>
            )}
          </>
        )}

        {(item.reference || item.note) && (
          <p className="mt-auto pt-3 text-xs text-muted-foreground">
            {item.reference && <QuranLink reference={item.reference} />}
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

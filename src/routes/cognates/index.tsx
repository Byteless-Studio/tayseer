import { createFileRoute } from '@tanstack/react-router'
import { useState, useMemo } from 'react'
import { arabicUrduCognates } from '#/data/arabic-urdu-cognates'

export const Route = createFileRoute('/cognates/')({
  head: () => ({ meta: [{ title: 'Cognates — Tayseer' }] }),
  component: CognatesPage,
})

const TABS = [{ id: 'arabic-urdu', label: 'Arabic – Urdu' }]

function CognatesPage() {
  const [activeTab, setActiveTab] = useState('arabic-urdu')
  const [search, setSearch] = useState('')

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase()
    if (!q) return arabicUrduCognates
    return arabicUrduCognates.filter(
      (c) =>
        c.urdu.includes(q) ||
        c.arabic.includes(q) ||
        c.english.toLowerCase().includes(q) ||
        c.arabicPron.toLowerCase().includes(q) ||
        c.urduPron.toLowerCase().includes(q) ||
        c.root.includes(q),
    )
  }, [search])

  return (
    <main className="flex-1">
      <div className="border-b border-border bg-beige">
        <div className="mx-auto w-[min(1080px,calc(100%-2rem))] py-12">
          <p className="text-[0.7rem] font-bold tracking-[0.12em] uppercase text-muted-foreground mb-3">
            Reference
          </p>
          <h1 className="font-serif tracking-[-0.02em] text-4xl font-bold text-foreground leading-tight mb-3">
            Cognates
          </h1>
          <p className="text-muted-foreground text-base max-w-xl">
            Words shared between Arabic and other languages — a shortcut to vocabulary for
            speakers who already know them.
          </p>
        </div>
      </div>

      <div className="border-b border-border bg-card sticky top-0 z-10">
        <div className="mx-auto w-[min(1080px,calc(100%-2rem))]">
          <div className="flex gap-1">
            {TABS.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={[
                  'px-5 py-3.5 text-sm font-semibold border-b-2 transition-colors',
                  activeTab === tab.id
                    ? 'border-brand text-brand'
                    : 'border-transparent text-muted-foreground hover:text-foreground',
                ].join(' ')}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto w-[min(1080px,calc(100%-2rem))] py-8">
        {activeTab === 'arabic-urdu' && (
          <ArabicUrduTable filtered={filtered} search={search} setSearch={setSearch} />
        )}
      </div>
    </main>
  )
}

function ArabicHighlight({ text, highlight }: { text: string; highlight?: string }) {
  if (!highlight) return <>{text}</>
  const parts = text.split(highlight)
  return (
    <>
      {parts.map((part, i) => (
        <span key={i}>
          {part}
          {i < parts.length - 1 && (
            <mark className="bg-brand/15 text-inherit rounded-sm px-0.5">
              {highlight}
            </mark>
          )}
        </span>
      ))}
    </>
  )
}

function ArabicUrduTable({
  filtered,
  search,
  setSearch,
}: {
  filtered: typeof arabicUrduCognates
  search: string
  setSearch: (v: string) => void
}) {
  return (
    <div>
      <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-6">
        <div className="relative flex-1 max-w-sm">
          <svg
            className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-4 h-4 pointer-events-none"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.35-4.35" />
          </svg>
          <input
            type="search"
            placeholder="Search words, roots, meanings…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-9 pr-4 py-2 text-sm border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand transition-colors"
          />
        </div>
        <span className="text-sm text-muted-foreground shrink-0">
          {filtered.length} of {arabicUrduCognates.length} words
        </span>
      </div>

      <div className="rounded-xl border border-border overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-beige border-b border-border">
                <th className="text-left px-4 py-3 font-semibold text-muted-foreground whitespace-nowrap">#</th>
                <th className="text-right px-4 py-3 font-semibold text-muted-foreground whitespace-nowrap">
                  <span className="font-[Noto_Naskh_Arabic,serif]">اردو</span>
                  <span className="ml-1 text-muted-foreground/60 font-normal text-xs">Urdu</span>
                </th>
                <th className="text-right px-4 py-3 font-semibold text-muted-foreground whitespace-nowrap">
                  <span className="font-[Noto_Naskh_Arabic,serif]">عربي</span>
                  <span className="ml-1 text-muted-foreground/60 font-normal text-xs">Arabic</span>
                </th>
                <th className="text-right px-4 py-3 font-semibold text-muted-foreground whitespace-nowrap">
                  <span className="font-[Noto_Naskh_Arabic,serif]">جذر</span>
                  <span className="ml-1 text-muted-foreground/60 font-normal text-xs">Root</span>
                </th>
                <th className="text-left px-4 py-3 font-semibold text-muted-foreground whitespace-nowrap">English</th>
                <th className="text-left px-4 py-3 font-semibold text-muted-foreground whitespace-nowrap">Arabic pron.</th>
                <th className="text-left px-4 py-3 font-semibold text-muted-foreground whitespace-nowrap">Urdu pron.</th>
                <th className="text-right px-4 py-3 font-semibold text-muted-foreground whitespace-nowrap">
                  <span className="font-[Noto_Naskh_Arabic,serif]">مثال قرآني</span>
                  <span className="ml-1 text-muted-foreground/60 font-normal text-xs">Quranic example</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {filtered.length === 0 ? (
                <tr>
                  <td colSpan={8} className="text-center py-12 text-muted-foreground">
                    No matches for "{search}"
                  </td>
                </tr>
              ) : (
                filtered.map((c, i) => (
                  <tr
                    key={i}
                    className="border-b border-border last:border-0 hover:bg-muted/50 transition-colors"
                  >
                    <td className="px-4 py-3 text-muted-foreground/40 text-xs tabular-nums">{i + 1}</td>
                    <td className="px-4 py-3 text-right">
                      <span
                        className="text-lg text-foreground font-medium leading-none"
                        dir="rtl"
                        lang="ur"
                        style={{ fontFamily: "'Noto Nastaliq Urdu', 'Noto Naskh Arabic', serif" }}
                      >
                        {c.urdu}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-right">
                      <span
                        className="text-lg text-foreground leading-none"
                        dir="rtl"
                        lang="ar"
                        style={{ fontFamily: "'Noto Naskh Arabic', 'Amiri', serif" }}
                      >
                        {c.arabic}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-right">
                      <span
                        className="text-sm text-brand-hover font-medium bg-brand/8 px-2 py-0.5 rounded"
                        dir="rtl"
                        lang="ar"
                        style={{ fontFamily: "'Noto Naskh Arabic', serif" }}
                      >
                        {c.root}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-foreground/80">{c.english}</td>
                    <td className="px-4 py-3 text-muted-foreground italic">{c.arabicPron}</td>
                    <td className="px-4 py-3 text-muted-foreground italic">{c.urduPron}</td>
                    <td className="px-4 py-3 text-right">
                      {c.quranicExamples && c.quranicExamples.length > 0 ? (
                        <div className="inline-flex flex-col items-end gap-2">
                          {c.quranicExamples.map((ex, ei) => (
                            <a
                              key={ei}
                              href={`https://quran.com/${ex.surah}?startingVerse=${ex.ayah}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex flex-col items-end gap-0.5 group no-underline"
                            >
                              {ex.text && (
                                <span
                                  dir="rtl"
                                  lang="ar"
                                  style={{ fontFamily: "'Noto Naskh Arabic', 'Amiri', serif" }}
                                  className="text-base text-foreground leading-relaxed"
                                >
                                  <ArabicHighlight text={ex.text} highlight={ex.highlight} />
                                </span>
                              )}
                              <span className="text-xs text-brand font-semibold group-hover:text-brand-hover transition-colors">
                                {ex.surah}:{ex.ayah} ↗
                              </span>
                            </a>
                          ))}
                        </div>
                      ) : (
                        <span className="text-muted-foreground/30 text-xs">—</span>
                      )}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {filtered.length > 0 && (
        <p className="text-xs text-muted-foreground mt-4 text-center">
          Transliterations follow standard academic conventions. ā/ī/ū = long vowels · ʿ = ع · ḥ/ṣ/ḍ/ṭ/ẓ = emphatic consonants
        </p>
      )}
    </div>
  )
}

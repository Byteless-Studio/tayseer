import { createFileRoute } from '@tanstack/react-router'
import { useState, useMemo } from 'react'
import { arabicUrduCognates } from '#/data/arabic-urdu-cognates'

export const Route = createFileRoute('/cognates')({
  head: () => ({ meta: [{ title: 'Cognates — Tayseer' }] }),
  component: CognatesPage,
})

const TABS = [
  { id: 'arabic-urdu', label: 'Arabic – Urdu' },
]

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
      {/* Page header */}
      <div className="border-b border-gray-200 bg-[#f5f0e8]">
        <div className="page-wrap py-12">
          <div className="section-label mb-3">Reference</div>
          <h1 className="display-title text-4xl font-bold text-black leading-tight mb-3">
            Cognates
          </h1>
          <p className="text-gray-500 text-base max-w-xl">
            Words shared between Arabic and other languages — a shortcut to vocabulary for speakers who already know them.
          </p>
        </div>
      </div>

      {/* Tab bar */}
      <div className="border-b border-gray-200 bg-white sticky top-0 z-10">
        <div className="page-wrap">
          <div className="flex gap-1">
            {TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={[
                  'px-5 py-3.5 text-sm font-semibold border-b-2 transition-colors',
                  activeTab === tab.id
                    ? 'border-[#009000] text-[#009000]'
                    : 'border-transparent text-gray-500 hover:text-black',
                ].join(' ')}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="page-wrap py-8">
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
            <mark
              style={{ background: 'rgba(0,144,0,0.15)', color: 'inherit', borderRadius: '3px', padding: '0 2px' }}
            >
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
      {/* Controls row */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-6">
        <div className="relative flex-1 max-w-sm">
          <svg
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none"
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
            className="w-full pl-9 pr-4 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#009000]/30 focus:border-[#009000]"
          />
        </div>
        <span className="text-sm text-gray-400 shrink-0">
          {filtered.length} of {arabicUrduCognates.length} words
        </span>
      </div>

      {/* Table */}
      <div className="rounded-xl border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#f5f0e8] border-b border-gray-200">
                <th className="text-left px-4 py-3 font-semibold text-gray-600 whitespace-nowrap">#</th>
                <th className="text-right px-4 py-3 font-semibold text-gray-600 whitespace-nowrap">
                  <span className="font-[Noto Naskh Arabic,serif]">اردو</span>
                  <span className="ml-1 text-gray-400 font-normal text-xs">Urdu</span>
                </th>
                <th className="text-right px-4 py-3 font-semibold text-gray-600 whitespace-nowrap">
                  <span className="font-[Noto Naskh Arabic,serif]">عربي</span>
                  <span className="ml-1 text-gray-400 font-normal text-xs">Arabic</span>
                </th>
                <th className="text-right px-4 py-3 font-semibold text-gray-600 whitespace-nowrap">
                  <span className="font-[Noto Naskh Arabic,serif]">جذر</span>
                  <span className="ml-1 text-gray-400 font-normal text-xs">Root</span>
                </th>
                <th className="text-left px-4 py-3 font-semibold text-gray-600 whitespace-nowrap">English</th>
                <th className="text-left px-4 py-3 font-semibold text-gray-600 whitespace-nowrap">Arabic pron.</th>
                <th className="text-left px-4 py-3 font-semibold text-gray-600 whitespace-nowrap">Urdu pron.</th>
                <th className="text-right px-4 py-3 font-semibold text-gray-600 whitespace-nowrap">
                  <span className="font-[Noto Naskh Arabic,serif]">مثال قرآني</span>
                  <span className="ml-1 text-gray-400 font-normal text-xs">Quranic example</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {filtered.length === 0 ? (
                <tr>
                  <td colSpan={8} className="text-center py-12 text-gray-400">
                    No matches for "{search}"
                  </td>
                </tr>
              ) : (
                filtered.map((c, i) => (
                  <tr
                    key={i}
                    className="border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors"
                  >
                    <td className="px-4 py-3 text-gray-300 text-xs tabular-nums">{i + 1}</td>
                    <td className="px-4 py-3 text-right">
                      <span
                        className="text-lg text-black font-medium leading-none"
                        dir="rtl"
                        lang="ur"
                        style={{ fontFamily: "'Noto Nastaliq Urdu', 'Noto Naskh Arabic', serif" }}
                      >
                        {c.urdu}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-right">
                      <span
                        className="text-lg text-black leading-none"
                        dir="rtl"
                        lang="ar"
                        style={{ fontFamily: "'Noto Naskh Arabic', 'Amiri', serif" }}
                      >
                        {c.arabic}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-right">
                      <span
                        className="text-sm text-[#007700] font-medium bg-[#009000]/8 px-2 py-0.5 rounded"
                        dir="rtl"
                        lang="ar"
                        style={{ fontFamily: "'Noto Naskh Arabic', serif" }}
                      >
                        {c.root}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-gray-700">{c.english}</td>
                    <td className="px-4 py-3 text-gray-600 italic">{c.arabicPron}</td>
                    <td className="px-4 py-3 text-gray-600 italic">{c.urduPron}</td>
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
                                  className="text-base text-black leading-relaxed"
                                >
                                  <ArabicHighlight text={ex.text} highlight={ex.highlight} />
                                </span>
                              )}
                              <span className="text-xs text-[#009000] font-semibold group-hover:text-[#007700] transition-colors">
                                {ex.surah}:{ex.ayah} ↗
                              </span>
                            </a>
                          ))}
                        </div>
                      ) : (
                        <span className="text-gray-300 text-xs">—</span>
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
        <p className="text-xs text-gray-400 mt-4 text-center">
          Transliterations follow standard academic conventions. ā/ī/ū = long vowels · ʿ = ع · ḥ/ṣ/ḍ/ṭ/ẓ = emphatic consonants
        </p>
      )}
    </div>
  )
}

import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/challenges/grammar/')({
  head: () => ({ meta: [{ title: 'Grammar — Challenges — Tayseer' }] }),
  component: GrammarHubPage,
})

const topics = [
  { n: 1, slug: 'definiteness-tanwin', arabic: 'التنوين', title: 'Definiteness & Tanwīn' },
  { n: 2, slug: 'masculine-feminine', arabic: 'التذكير والتأنيث', title: 'Masculine & Feminine Nouns' },
  { n: 3, slug: 'ism-ishaara-near', arabic: 'هذا / هذه', title: 'Ism Ishaara — Near' },
  { n: 4, slug: 'interrogatives-man-maa', arabic: 'من / ما', title: 'Interrogatives' },
  { n: 5, slug: 'mubtada-khabar', arabic: 'مبتدأ وخبر', title: 'The Nominal Sentence' },
  { n: 6, slug: 'ism-ishaara-far', arabic: 'ذلك / تلك', title: 'Ism Ishaara — Far' },
  { n: 7, slug: 'independent-pronouns', arabic: 'الضمائر المنفصلة', title: 'Independent Pronouns' },
  { n: 8, slug: 'yes-no-questions', arabic: 'أ / هل', title: 'Yes/No Questions' },
  { n: 9, slug: 'attached-pronouns', arabic: 'الضمائر المتصلة', title: 'Attached Pronouns' },
  { n: 10, slug: 'idafah', arabic: 'الإضافة', title: 'Idāfah' },
  { n: 11, slug: 'prepositions', arabic: 'حروف الجر', title: 'Prepositions' },
  { n: 12, slug: 'adjectives-agreement', arabic: 'النعت والمنعوت', title: 'Adjective Agreement' },
  { n: 13, slug: 'colors', arabic: 'الألوان', title: 'Colors as Adjectives' },
  { n: 14, slug: 'case-system-overview', arabic: 'الإعراب', title: 'Case System Overview' },
  { n: 15, slug: 'dual', arabic: 'المثنى', title: 'The Dual' },
  { n: 16, slug: 'sound-masculine-plural', arabic: 'جمع المذكر السالم', title: 'Sound Masculine Plural' },
  { n: 17, slug: 'sound-feminine-plural', arabic: 'جمع المؤنث السالم', title: 'Sound Feminine Plural' },
  { n: 18, slug: 'broken-plural', arabic: 'جمع التكسير', title: 'Broken Plural' },
  { n: 19, slug: 'numbers-1-10', arabic: 'الأعداد ١–١٠', title: 'Numbers 1–10' },
  { n: 20, slug: 'days-months', arabic: 'الأيام والشهور', title: 'Days & Months' },
  { n: 21, slug: 'adverbs-of-place', arabic: 'ظرف المكان', title: 'Adverbs of Place' },
  { n: 22, slug: 'taajjub', arabic: 'التعجب', title: "Ta'ajjub" },
  { n: 23, slug: 'relative-pronouns', arabic: 'الأسماء الموصولة', title: 'Relative Pronouns & Clauses' },
  { n: 24, slug: 'five-nouns', arabic: 'الأسماء الخمسة', title: 'The Five Nouns' },
  { n: 25, slug: 'dhu-dhaat', arabic: 'ذو / ذات', title: 'Dhū / Dhāt' },
  { n: 26, slug: 'defective-diptotes', arabic: 'المنقوص والممنوع من الصرف', title: 'Defective Nouns & Diptotes' },
  { n: 27, slug: 'aakhar-ukhraa', arabic: 'آخر / أخرى', title: 'Another / Other' },
  { n: 28, slug: 'badal-vocative', arabic: 'البدل والنداء', title: 'Apposition & Vocative' },
  { n: 29, slug: 'verb-basics-faail-mafool', arabic: 'الفاعل والمفعول به', title: 'Verb Sentence Basics' },
  { n: 30, slug: 'past-tense-conjugation', arabic: 'تصريف الفعل الماضي', title: 'Past Tense — Full Conjugation' },
  { n: 31, slug: 'negation-of-past', arabic: 'نفي الماضي', title: 'Negation of the Past' },
  { n: 32, slug: 'present-tense-conjugation', arabic: 'تصريف الفعل المضارع', title: 'Present Tense — Full Conjugation' },
  { n: 33, slug: 'weak-verbs', arabic: 'الأفعال المعتلة', title: 'Weak Verbs in Practice' },
  { n: 34, slug: 'imperative', arabic: 'فعل الأمر', title: 'The Imperative' },
  { n: 35, slug: 'prohibitive', arabic: 'لا الناهية', title: 'The Prohibitive' },
  { n: 36, slug: 'naaqisah-verbs', arabic: 'كان وأخواتها', title: 'Kāna and Her Sisters' },
  { n: 37, slug: 'conjunctions', arabic: 'حروف العطف', title: 'Conjunctions' },
  { n: 38, slug: 'inna-wa-akhawatuha', arabic: 'إن وأخواتها', title: 'Inna and Her Sisters' },
  { n: 39, slug: 'kaana-wa-akhawatuha', arabic: 'كان وأخواتها (تابع)', title: 'Kāna and Her Sisters, Continued' },
] as const

function GrammarHubPage() {
  return (
    <main className="flex-1">
      <div className="border-b border-border bg-beige">
        <div className="mx-auto w-[min(1080px,calc(100%-2rem))] py-12">
          <Link
            to="/challenges"
            className="text-xs text-muted-foreground hover:text-brand mb-3 inline-block no-underline"
          >
            ← All challenges
          </Link>
          <p className="text-[0.7rem] font-bold tracking-[0.12em] uppercase text-muted-foreground mb-3">
            Grammar
          </p>
          <h1 className="font-serif tracking-[-0.02em] text-4xl font-bold text-foreground leading-tight mb-3">
            Arabic Structures
          </h1>
          <p className="text-muted-foreground text-base max-w-xl">
            Structures from the Medina series, in learning order — each one assumes only what
            came before it. Start from the beginning if you're new, or jump to any topic to
            review.
          </p>
        </div>
      </div>

      <div className="mx-auto w-[min(1080px,calc(100%-2rem))] py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {topics.map((topic) => (
            <Link
              key={topic.slug}
              to={`/challenges/grammar/${topic.slug}`}
              className="group no-underline rounded-xl border border-border p-4 hover:border-brand hover:bg-brand/5 transition-colors flex items-start gap-3"
            >
              <span className="text-xs font-semibold text-muted-foreground/40 tabular-nums pt-0.5 shrink-0">
                {String(topic.n).padStart(2, '0')}
              </span>
              <span className="min-w-0">
                <span
                  dir="rtl"
                  lang="ar"
                  style={{ fontFamily: "'Noto Naskh Arabic', serif" }}
                  className="block text-base text-foreground leading-snug mb-0.5"
                >
                  {topic.arabic}
                </span>
                <span className="block text-xs text-muted-foreground group-hover:text-brand transition-colors">
                  {topic.title}
                </span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}

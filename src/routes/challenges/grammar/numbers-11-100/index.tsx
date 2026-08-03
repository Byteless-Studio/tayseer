import { createFileRoute, Link } from '@tanstack/react-router'
import { QuizCarousel } from '#/components/QuizCarousel'
import type { StrictQuizItem } from '#/routes/challenges/-quiz-types'

export const Route = createFileRoute('/challenges/grammar/numbers-11-100/')({
  head: () => ({ meta: [{ title: 'Numbers 11–100 — Grammar — Tayseer' }] }),
  component: TopicPage,
})

const quizItems: StrictQuizItem[] = [
  {
    q: 'أيّ الجمل التالية بها خطأ في إعراب العدد ١٢؟',
    options: [
      'جاء اثنا عشرَ رجلاً',
      'رأيتُ اثني عشرَ رجلاً',
      'مررتُ باثني عشرَ رجلاً',
      'جاء اثني عشرَ رجلاً',
    ],
    correctIndex: 3,
    a: 'الجملة الرابعة خطأ لأن "اثنا عشر" فاعل مرفوع هنا، والجزء الأول من العدد ١٢ يُعرب إعراب المثنى: رفعاً بالألف، فالصواب "جاء اثنا عشرَ رجلاً" لا "اثني عشر".',
  },
  {
    q: 'عندي ___ كتاباً (١١، مع معدود مذكر)',
    options: ['أحدَ عشرَ', 'إحدى عشرةَ', 'اثنا عشرَ', 'ثلاثةَ عشرَ'],
    correctIndex: 0,
    a: 'العدد ١١ مع المعدود المذكر "كتاباً" هو "أحدَ عشرَ" (مبني على فتح الجزأين)، والمعدود بعده مفرد منصوب على التمييز: "أحدَ عشرَ كتاباً".',
  },
  {
    q: 'عندي ___ طالبةً (١١، مع معدود مؤنث)',
    options: ['إحدى عشرةَ', 'أحدَ عشرَ', 'اثنتا عشرةَ', 'إحدى عشرَ'],
    correctIndex: 0,
    a: 'مع المعدود المؤنث "طالبةً"، يُستخدم "إحدى عشرةَ" (تأنيث الجزأين معاً)، والمعدود مفرد منصوب على التمييز: "إحدى عشرةَ طالبةً".',
  },
  {
    q: 'في العدد المركب "ثلاثةَ عشرَ" (مع معدود مذكر) و"ثلاثَ عشرةَ" (مع معدود مؤنث)، ما القاعدة؟',
    options: [
      'جزء الآحاد يخالف المعدود في الجنس كالمعتاد في ٣-٩، بينما "عشر" يوافق المعدود في جنسه؛ فمع المذكر: ثلاثةَ عشرَ، ومع المؤنث: ثلاثَ عشرةَ',
      'كلا الجزأين يوافقان المعدود دائماً في الجنس',
      'كلا الجزأين يخالفان المعدود دائماً في الجنس',
      'لا علاقة بين جنس العدد والمعدود في هذه الحالة',
    ],
    correctIndex: 0,
    a: 'يخالف جزء الآحاد المعدودَ في الجنس (كقاعدة ٣-٩)، بينما يوافقه جزء "عشر" في جنسه: فمع المذكر "كتاباً" يُقال "ثلاثةَ عشرَ كتاباً"، ومع المؤنث "طالبةً" يُقال "ثلاثَ عشرةَ طالبةً".',
  },
  {
    q: 'حضر ___ طالباً (٢٠، فاعل مرفوع؛ العقود تُعرب إعراب جمع المذكر السالم)',
    options: ['عشرونَ', 'عشرينَ', 'عشرةٌ', 'عشرونٌ'],
    correctIndex: 0,
    a: 'العقود (عشرون، ثلاثون...) تُعرب إعراب جمع المذكر السالم: رفعاً بالواو، ونصباً وجراً بالياء؛ وبما أن "عشرون" هنا فاعل مرفوع فتُرفع بالواو: "حضر عشرونَ طالباً" — والمعدود بعدها مفرد منصوب على التمييز.',
  },
  {
    q: 'رأيتُ ___ طالباً (٣٠، مفعول به منصوب؛ العقود تُنصب بالياء)',
    options: ['ثلاثينَ', 'ثلاثونَ', 'ثلاثةً', 'ثلاثمائةَ'],
    correctIndex: 0,
    a: '"ثلاثون" في موضع نصب (مفعول به) تُعرب بالياء نيابة عن الواو: "رأيتُ ثلاثينَ طالباً"، والمعدود بعدها مفرد منصوب على التمييز.',
  },
  {
    q: 'ما إعراب المعدود بعد "مائة" و"ألف"؟',
    options: [
      'مفرد مجرور على أنه مضاف إليه، لأن "مائة" و"ألف" اسمان مفردان يُضافان إلى معدودهما: "مائةُ كتابٍ"، "ألفُ طالبٍ"',
      'جمع منصوب على التمييز دائماً',
      'مثنى مرفوع',
      'لا إعراب له',
    ],
    correctIndex: 0,
    a: '"مائة" و"ألف" اسمان مفردان (ليسا عدداً مركباً)، ويُضافان إلى المعدود المفرد الذي يُجر بالإضافة: "مائةُ كتابٍ" (كتابٍ مضاف إليه مجرور)، "ألفُ طالبٍ".',
  },
  {
    q: 'أيّ الجمل التالية بها خطأ في صياغة العدد المركب؟',
    options: [
      'عندي أحدَ عشرَ كتاباً',
      'في الفصل عشرونَ طالبةً',
      'اشتريتُ مائةَ كتابٍ',
      'عندي ثلاثةَ عشرةَ طالبةً',
    ],
    correctIndex: 3,
    a: 'الجملة الرابعة خطأ لأن المعدود "طالبةً" مؤنث، فيجب أن يخالفه جزء الآحاد في الجنس (فيصبح "ثلاثَ" بلا تاء) بينما يوافقه "عشرة" بالتأنيث: الصواب "ثلاثَ عشرةَ طالبةً" لا "ثلاثةَ عشرةَ".',
  },
]

function TopicPage() {
  return (
    <main className="flex-1">
      <div className="border-b border-border bg-beige">
        <div className="mx-auto w-[min(720px,calc(100%-2rem))] py-12">
          <Link
            to="/challenges/grammar"
            className="text-xs text-muted-foreground hover:text-brand mb-3 inline-block"
          >
            ← All grammar topics
          </Link>
          <p className="text-[0.7rem] font-bold tracking-[0.12em] uppercase text-muted-foreground mb-3">
            Topic 44 of 47
          </p>
          <h1 className="font-serif tracking-[-0.02em] text-3xl font-bold text-foreground leading-tight mb-3">
            <span
              dir="rtl"
              lang="ar"
              style={{ fontFamily: "'Noto Naskh Arabic', serif" }}
              className="mr-2"
            >
              الأعداد ١١-١٠٠
            </span>
            — Numbers 11–100
          </h1>
          <p className="text-muted-foreground text-base max-w-xl">
            11–19 are compound numbers mostly مبني on فتح — the counted noun is singular منصوب
            (تمييز): أحدَ عشرَ كتاباً. 12 is the exception: its first part declines like the dual
            (اثنا عشرَ / اثني عشرَ). The tens (عشرون، ثلاثون...) decline like a sound masculine
            plural — رفعاً بالواو, نصباً وجراً بالياء — with the same singular منصوب counted noun.
            مائة and ألف are ordinary singular nouns that take their counted noun as a مضاف إليه:
            مائةُ كتابٍ.
          </p>
        </div>
      </div>
      <div className="mx-auto w-[min(720px,calc(100%-2rem))] py-8">
        <QuizCarousel items={quizItems} />
      </div>
    </main>
  )
}

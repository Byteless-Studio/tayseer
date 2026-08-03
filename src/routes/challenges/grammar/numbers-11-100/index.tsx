import { createFileRoute, Link } from '@tanstack/react-router'
import { QuizCarousel } from '#/components/QuizCarousel'
import type { StrictQuizItem } from '#/routes/challenges/-quiz-types'

export const Route = createFileRoute('/challenges/grammar/numbers-11-100/')({
  head: () => ({ meta: [{ title: 'Numbers 11–100 — Grammar — Tayseer' }] }),
  component: TopicPage,
})

const quizItems: StrictQuizItem[] = [
  {
    q: 'أيّ الجمل التالية بها خطأ في إعراب العدد ١٢؟\nWhich of the following sentences has an error in the case of the number 12?',
    options: [
      'جاء اثنا عشرَ رجلاً\nTwelve men came (اثنا — nominative dual form)',
      'رأيتُ اثني عشرَ رجلاً\nI saw twelve men (اثني — accusative dual form)',
      'مررتُ باثني عشرَ رجلاً\nI passed by twelve men (اثني — genitive dual form)',
      'جاء اثني عشرَ رجلاً\njā\'a ithnay ʿashara rajulan — "twelve men came" (اثني — accusative dual form)',
    ],
    correctIndex: 3,
    a: 'الجملة الرابعة خطأ لأن "اثنا عشر" فاعل مرفوع هنا، والجزء الأول من العدد ١٢ يُعرب إعراب المثنى: رفعاً بالألف، فالصواب "جاء اثنا عشرَ رجلاً" لا "اثني عشر".\nThe fourth sentence is wrong because اثنا عشر is the فاعل (subject, مرفوع) here, and the first part of the number 12 is declined like the dual: nominative with ا. The correct form is "جاء اثنا عشرَ رجلاً", not "اثني عشر".',
  },
  {
    q: 'عندي ___ كتاباً (١١، مع معدود مذكر)\nعندي ___ كتاباً (11, with a masculine counted noun)',
    options: [
      'أحدَ عشرَ\naḥada ʿashara — 11, masculine form (correct here)',
      'إحدى عشرةَ\niḥdā ʿashrata — 11, feminine form (wrong gender here)',
      'اثنا عشرَ\nithnā ʿashara — 12, masculine nominative-style form',
      'ثلاثةَ عشرَ\nthalāthata ʿashara — 13, masculine form',
    ],
    correctIndex: 0,
    a: 'العدد ١١ مع المعدود المذكر "كتاباً" هو "أحدَ عشرَ" (مبني على فتح الجزأين)، والمعدود بعده مفرد منصوب على التمييز: "أحدَ عشرَ كتاباً".\nThe number 11 with the masculine counted noun كتاباً is أحدَ عشرَ (مبني — indeclinable, both parts fixed on فتحة), and the counted noun after it is singular, accusative as تمييز: "أحدَ عشرَ كتاباً" — "eleven books."',
  },
  {
    q: 'عندي ___ طالبةً (١١، مع معدود مؤنث)\nعندي ___ طالبةً (11, with a feminine counted noun)',
    options: [
      'إحدى عشرةَ\niḥdā ʿashrata — 11, feminine form (correct here)',
      'أحدَ عشرَ\naḥada ʿashara — 11, masculine form (wrong gender here)',
      'اثنتا عشرةَ\nithnatā ʿashrata — 12, feminine nominative-style form',
      'إحدى عشرَ\niḥdā ʿashara — mismatched: feminine إحدى but masculine عشر (wrong)',
    ],
    correctIndex: 0,
    a: 'مع المعدود المؤنث "طالبةً"، يُستخدم "إحدى عشرةَ" (تأنيث الجزأين معاً)، والمعدود مفرد منصوب على التمييز: "إحدى عشرةَ طالبةً".\nWith the feminine counted noun طالبةً, إحدى عشرةَ is used (both parts made feminine together), and the counted noun is singular, accusative as تمييز: "إحدى عشرةَ طالبةً" — "eleven female students."',
  },
  {
    q: 'في العدد المركب "ثلاثةَ عشرَ" (مع معدود مذكر) و"ثلاثَ عشرةَ" (مع معدود مؤنث)، ما القاعدة؟\nIn the compound numbers ثلاثةَ عشرَ (with a masculine counted noun) and ثلاثَ عشرةَ (with a feminine counted noun), what is the rule?',
    options: [
      'جزء الآحاد يخالف المعدود في الجنس كالمعتاد في ٣-٩، بينما "عشر" يوافق المعدود في جنسه؛ فمع المذكر: ثلاثةَ عشرَ، ومع المؤنث: ثلاثَ عشرةَ\nThe units part disagrees with the counted noun in gender, as usual for 3–9, while عشر agrees with the counted noun in gender: so with masculine, ثلاثةَ عشرَ; with feminine, ثلاثَ عشرةَ.',
      'كلا الجزأين يوافقان المعدود دائماً في الجنس\nBoth parts always agree with the counted noun in gender',
      'كلا الجزأين يخالفان المعدود دائماً في الجنس\nBoth parts always disagree with the counted noun in gender',
      'لا علاقة بين جنس العدد والمعدود في هذه الحالة\nThere is no relationship between the gender of the number and the counted noun in this case',
    ],
    correctIndex: 0,
    a: 'يخالف جزء الآحاد المعدودَ في الجنس (كقاعدة ٣-٩)، بينما يوافقه جزء "عشر" في جنسه: فمع المذكر "كتاباً" يُقال "ثلاثةَ عشرَ كتاباً"، ومع المؤنث "طالبةً" يُقال "ثلاثَ عشرةَ طالبةً".\nThe units part disagrees with the counted noun in gender (following the 3–9 rule), while the عشر part agrees with it in gender: with the masculine كتاباً you say "ثلاثةَ عشرَ كتاباً" ("thirteen books"), and with the feminine طالبةً you say "ثلاثَ عشرةَ طالبةً" ("thirteen female students").',
  },
  {
    q: 'حضر ___ طالباً (٢٠، فاعل مرفوع؛ العقود تُعرب إعراب جمع المذكر السالم)\nحضر ___ طالباً (20, فاعل/nominative; the tens decline like the sound masculine plural)',
    options: [
      'عشرونَ\nʿishrūna — 20, nominative form (correct here, with و)',
      'عشرينَ\nʿishrīna — 20, accusative/genitive form (with ي, wrong case here)',
      'عشرةٌ\nʿasharatun — 10, indefinite nominative (wrong number)',
      'عشرونٌ\nʿishrūnun — invalid: تنوين is never added to the sound masculine plural ending',
    ],
    correctIndex: 0,
    a: 'العقود (عشرون، ثلاثون...) تُعرب إعراب جمع المذكر السالم: رفعاً بالواو، ونصباً وجراً بالياء؛ وبما أن "عشرون" هنا فاعل مرفوع فتُرفع بالواو: "حضر عشرونَ طالباً" — والمعدود بعدها مفرد منصوب على التمييز.\nThe tens (عشرون، ثلاثون...) decline like the sound masculine plural: nominative with و, accusative and genitive with ي. Since عشرون here is the فاعل (nominative), it takes و: "حضر عشرونَ طالباً" — "twenty students came" — and the counted noun after it is singular, accusative as تمييز.',
  },
  {
    q: 'رأيتُ ___ طالباً (٣٠، مفعول به منصوب؛ العقود تُنصب بالياء)\nرأيتُ ___ طالباً (30, direct object/accusative; the tens take ي in the accusative)',
    options: [
      'ثلاثينَ\nthalāthīna — 30, accusative/genitive form (correct here, with ي)',
      'ثلاثونَ\nthalāthūna — 30, nominative form (with و, wrong case here)',
      'ثلاثةً\nthalāthatan — 3, indefinite accusative (wrong number)',
      'ثلاثمائةَ\nthalāthumiʾata — 300 (wrong number)',
    ],
    correctIndex: 0,
    a: '"ثلاثون" في موضع نصب (مفعول به) تُعرب بالياء نيابة عن الواو: "رأيتُ ثلاثينَ طالباً"، والمعدود بعدها مفرد منصوب على التمييز.\nثلاثون in the accusative position (direct object) is marked with ي instead of و: "رأيتُ ثلاثينَ طالباً" — "I saw thirty students" — and the counted noun after it is singular, accusative as تمييز.',
  },
  {
    q: 'ما إعراب المعدود بعد "مائة" و"ألف"؟\nWhat case does the counted noun take after مائة ("hundred") and ألف ("thousand")?',
    options: [
      'مفرد مجرور على أنه مضاف إليه، لأن "مائة" و"ألف" اسمان مفردان يُضافان إلى معدودهما: "مائةُ كتابٍ"، "ألفُ طالبٍ"\nSingular, مجرور as مضاف إليه, because مائة and ألف are singular nouns that go into idāfah with their counted noun: "مائةُ كتابٍ" ("a hundred books"), "ألفُ طالبٍ" ("a thousand students").',
      'جمع منصوب على التمييز دائماً\nAlways plural, accusative as تمييز',
      'مثنى مرفوع\nDual, nominative',
      'لا إعراب له\nIt has no case ending at all',
    ],
    correctIndex: 0,
    a: '"مائة" و"ألف" اسمان مفردان (ليسا عدداً مركباً)، ويُضافان إلى المعدود المفرد الذي يُجر بالإضافة: "مائةُ كتابٍ" (كتابٍ مضاف إليه مجرور)، "ألفُ طالبٍ".\nمائة and ألف are singular nouns (not compound numbers), and they form an idāfah with the singular counted noun, which is مجرور as مضاف إليه: "مائةُ كتابٍ" (كتابٍ is مضاف إليه, مجرور), "ألفُ طالبٍ."',
  },
  {
    q: 'أيّ الجمل التالية بها خطأ في صياغة العدد المركب؟\nWhich of the following sentences has an error in forming a compound number?',
    options: [
      'عندي أحدَ عشرَ كتاباً\nI have eleven books',
      'في الفصل عشرونَ طالبةً\nThere are twenty female students in the class',
      'اشتريتُ مائةَ كتابٍ\nI bought a hundred books',
      'عندي ثلاثةَ عشرةَ طالبةً\nIncorrect: with a feminine noun, the units part should be ثلاثَ, not ثلاثةَ',
    ],
    correctIndex: 3,
    a: 'الجملة الرابعة خطأ لأن المعدود "طالبةً" مؤنث، فيجب أن يخالفه جزء الآحاد في الجنس (فيصبح "ثلاثَ" بلا تاء) بينما يوافقه "عشرة" بالتأنيث: الصواب "ثلاثَ عشرةَ طالبةً" لا "ثلاثةَ عشرةَ".\nThe fourth sentence is wrong because the counted noun طالبةً is feminine, so the units part must disagree with it in gender (becoming ثلاثَ, without ة), while عشرة agrees with it as feminine: the correct form is "ثلاثَ عشرةَ طالبةً", not "ثلاثةَ عشرةَ".',
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

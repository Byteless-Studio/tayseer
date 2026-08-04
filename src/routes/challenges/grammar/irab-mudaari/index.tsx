import { createFileRoute, Link } from '@tanstack/react-router'
import { QuizCarousel } from '#/components/QuizCarousel'
import type { StrictQuizItem } from '#/routes/challenges/-quiz-types'

export const Route = createFileRoute('/challenges/grammar/irab-mudaari/')({
  head: () => ({ meta: [{ title: "I'rāb of the Present Tense — Grammar — Tayseer" }] }),
  component: TopicPage,
})

const quizItems: StrictQuizItem[] = [
  {
    q: 'ما الحالة الإعرابية الأصلية (الافتراضية) للفعل المضارع إذا لم يسبقه ناصب أو جازم؟\nWhat is the default grammatical case of the present-tense verb (المضارع) when no accusative-marking or jussive-marking particle precedes it?',
    options: [
      'مرفوع، بالضمة الظاهرة أو المقدرة، أو بثبوت النون إن كان من الأفعال الخمسة\nNominative (مرفوع) — with a visible or understood ضمة, or by keeping the نون if it is one of the Five Verbs (الأفعال الخمسة)',
      'منصوب دائماً\nAlways accusative (منصوب)',
      'مجزوم دائماً\nAlways jussive (مجزوم)',
      'مبني دائماً\nAlways built (مبني)',
    ],
    correctIndex: 0,
    a: 'الأصل في الفعل المضارع أن يكون مرفوعاً ما لم يدخل عليه ناصب أو جازم؛ فيُرفع بالضمة الظاهرة أو المقدرة، أو بثبوت النون إن كان من الأفعال الخمسة.\nBy default, the present-tense verb is nominative (مرفوع) unless an accusative- or jussive-marking particle enters upon it; it is marked nominative with a visible or understood ضمة, or by keeping the نون if it is one of the Five Verbs.',
  },
  {
    q: 'أختاه ___ (تكتب) الدرسَ الآن (لا يوجد ناصب ولا جازم قبل الفعل)\nukhtāh ___ ad-darsa l-āna — "My sister is writing the lesson now" (fill in تكتب — no accusative- or jussive-marker precedes the verb)',
    options: [
      'تكتبُ\ntaktubu — nominative (مرفوع)',
      'تكتبَ\ntaktuba — accusative (منصوب)',
      'تكتبْ\ntaktub — jussive (مجزوم)',
      'تكتبِ\ntaktubi',
    ],
    correctIndex: 0,
    a: 'لا يوجد ناصب ولا جازم قبل الفعل، فيبقى على أصله مرفوعاً بالضمة الظاهرة: "تكتبُ".\nNo accusative- or jussive-marker precedes the verb, so it stays in its default nominative state, marked with a visible ضمة: تكتبُ.',
  },
  {
    q: 'الطلابُ ___ في الامتحانِ بلا اجتهادٍ (لن + ينجحون، من الأفعال الخمسة)\naṭ-ṭullābu ___ fī l-imtiḥāni bilā ijtihādin — "The students will not succeed in the exam without effort" (fill in لن + ينجحون, one of the Five Verbs)',
    options: [
      'لن ينجحوا\nlan yanjaḥū — accusative, نون dropped',
      'لن ينجحون\nlan yanjaḥūna — nominative form, نون kept',
      'لن ينجحوهم\nlan yanjaḥūhum',
      'لم ينجحوا\nlam yanjaḥū — jussive with لم, not لن',
    ],
    correctIndex: 0,
    a: '"لن" أداة نصب، والفعل "ينجحون" من الأفعال الخمسة التي تُنصب بحذف النون: "لن ينجحوا".\nلن is an accusative-marking particle, and ينجحون is one of the Five Verbs, which mark نصب by dropping the نون: لن ينجحوا.',
  },
  {
    q: 'أيّ الجمل التالية بها خطأ في علامة جزم الفعل المضارع؟\nWhich of the following sentences has an error in the jussive-marking of the present-tense verb?',
    options: [
      'لم يلعبْ الولدُ أمس\nlam yalʿab al-waladu amsi — "The boy did not play yesterday"',
      'لمّا يصلْ القطارُ بعد\nlammā yaṣil al-qiṭāru baʿdu — "The train has not arrived yet"',
      'لتذهبْ إلى المدرسةِ باكراً\nli-tadhhab ilā l-madrasati bākiran — "Go to school early" (imperative لام)',
      'لم يكتبُ الطالبُ الدرسَ\nlam yaktubu ṭ-ṭālibu d-darsa',
    ],
    correctIndex: 3,
    a: 'الجملة الرابعة خطأ لأن "لم" أداة جزم تجزم المضارع، والصواب "لم يكتبْ الطالبُ الدرسَ" بالسكون لا "يكتبُ" بالضمة.\nThe fourth sentence is wrong because لم is a jussive-marking particle, so the correct form is لم يكتبْ الطالبُ الدرسَ with سكون, not يكتبُ with ضمة.',
  },
  {
    q: 'لا ___ (تهمل) واجبَك (لا الناهية تجزم المضارع)\nlā ___ wājibaka — "Do not neglect your homework" (fill in تهمل — لا الناهية marks the verb jussive)',
    options: [
      'تهملْ\ntuhmil — jussive (مجزوم)',
      'تهملُ\ntuhmilu — nominative',
      'تهملَ\ntuhmila — accusative',
      'أهملْ\nahmil',
    ],
    correctIndex: 0,
    a: '"لا" الناهية تجزم الفعل المضارع، فتظهر علامة الجزم سكوناً على آخره: "لا تهملْ".\nلا الناهية ("the لا of prohibition") marks the present-tense verb jussive, so the jussive marker appears as a سكون on its ending: لا تهملْ.',
  },
  {
    q: 'أيّ الأدوات التالية تنصب الفعل المضارع لا تجزمه؟\nWhich of the following particles makes the present-tense verb accusative rather than jussive?',
    options: [
      'كي\nkay — "in order to," accusative-marking',
      'لم\nlam — jussive-marking, negates the past',
      'لا الناهية\nlā an-nāhiyah — jussive-marking, prohibition',
      'لام الأمر\nlām al-amr — jussive-marking, command',
    ],
    correctIndex: 0,
    a: '"كي" من أدوات النصب (تفيد التعليل، بمعنى "لكي")، بينما "لم" و"لا الناهية" و"لام الأمر" من أدوات الجزم.\nكي is an accusative-marking particle (it conveys purpose, meaning "in order to"), while لم, لا الناهية, and لام الأمر are all jussive-marking particles.',
  },
  {
    q: 'أيّ الجمل التالية بها خطأ في نصب الفعل المضارع؟\nWhich of the following sentences has an error in making the present-tense verb accusative?',
    options: [
      'لن أذهبَ غداً\nlan adhhaba ghadan — "I will not go tomorrow"',
      'يجب أن تذهبُ الآن\nyajibu an tadhhabu l-āna',
      'هو يذهبُ إلى العمل\nhuwa yadhhabu ilā l-ʿamali — "He goes to work"',
      'أريدُ أن أنجحَ في الامتحانِ\nurīdu an anjaḥa fī l-imtiḥāni — "I want to succeed in the exam"',
    ],
    correctIndex: 1,
    a: 'الجملة الثانية خطأ لأن "أن" المصدرية أداة نصب، فيجب أن يكون الفعل بعدها منصوباً بالفتحة: الصواب "يجب أن تذهبَ الآن" لا "تذهبُ".\nThe second sentence is wrong because أن المصدرية is an accusative-marking particle, so the verb after it must be accusative with a فتحة: the correct form is يجب أن تذهبَ الآن, not تذهبُ.',
  },
  {
    q: 'إن ___ (تجتهد) تنجحْ (أداة الشرط "إن" جازمة تجزم فعلين: فعل الشرط وجوابه)\nin ___ tanjaḥ — "If you work hard, you will succeed" (fill in تجتهد — the conditional particle إن marks two verbs jussive: the شرط verb and its جواب)',
    options: [
      'تجتهدْ\ntajtahid — jussive (مجزوم)',
      'تجتهدُ\ntajtahidu — nominative',
      'تجتهدَ\ntajtahida — accusative',
      'اجتهدْ\nijtahid — imperative',
    ],
    correctIndex: 0,
    a: '"إن" أداة شرط جازمة تجزم فعلين، فعل الشرط وجوابه: "إن تجتهدْ تنجحْ" — كلاهما مجزوم بالسكون.\nإن is a jussive-marking conditional particle that puts two verbs into the jussive: the شرط verb and its جواب: إن تجتهدْ تنجحْ — "If you work hard, you will succeed" — both jussive with سكون.',
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
            Topic 41 of 47
          </p>
          <h1 className="font-serif tracking-[-0.02em] text-3xl font-bold text-foreground leading-tight mb-3">
            <span
              dir="rtl"
              lang="ar"
              style={{ fontFamily: "'Noto Naskh Arabic', serif" }}
              className="mr-2"
            >
              إعراب الفعل المضارع
            </span>
            — I'rāb of the Present Tense
          </h1>
          <p className="text-muted-foreground text-base max-w-xl">
            مضارع مرفوع is the default state — ends in ـُ, or keeps its نون for the five-verb
            forms. النواصب (أن، لن، كي، لام التعليل، إذن) trigger مضارع منصوب — ends in ـَ, or
            drops the نون. الجوازم (لم، لمّا، لا الناهية، لام الأمر, and the شرط إن) trigger
            مضارع مجزوم — ends in سكون, drops a weak letter, or drops the نون.
          </p>
        </div>
      </div>
      <div className="mx-auto w-[min(720px,calc(100%-2rem))] py-8">
        <QuizCarousel items={quizItems} />
      </div>
    </main>
  )
}

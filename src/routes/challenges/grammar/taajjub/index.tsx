import { createFileRoute, Link } from '@tanstack/react-router'
import { QuizCarousel } from '#/components/QuizCarousel'
import type { StrictQuizItem } from '#/routes/challenges/-quiz-types'

export const Route = createFileRoute('/challenges/grammar/taajjub/')({
  head: () => ({ meta: [{ title: "Ta'ajjub — Grammar — Tayseer" }] }),
  component: TopicPage,
})

const quizItems: StrictQuizItem[] = [
  {
    q: 'في جملة "ما أجملَ السماءَ!" ما إعراب "ما"؟',
    options: [
      'اسم استفهام مبني في محل نصب مفعول به',
      'اسم نكرة تام بمعنى "شيء عظيم"، مبني في محل رفع مبتدأ',
      'حرف نفي لا محل له من الإعراب',
      'اسم موصول مبني في محل رفع فاعل',
    ],
    correctIndex: 1,
    a: '"ما" في صيغة التعجب "ما أفعلَه" اسم نكرة تام بمعنى "شيء عظيم"، مبني على السكون في محل رفع مبتدأ، وجملة "أجملَ السماءَ" بعده في محل رفع خبر.',
  },
  {
    q: 'ما نوع الفعل "أجملَ" في هذا التركيب، وهل يتصرف؟',
    options: [
      'فعل ماضٍ متصرف عادي',
      'فعل ماضٍ جامد على وزن "أفعل" ثابت الصيغة لا يتصرف، خاص بصيغة التعجب',
      'فعل أمر',
      'اسم فعل',
    ],
    correctIndex: 1,
    a: '"أجملَ" في صيغة التعجب فعل ماضٍ جامد لا يتصرف (لا يأتي منه مضارع ولا أمر بهذا المعنى)، وهو ثابت على وزن "أفعل" دائماً بصرف النظر عن الفاعل.',
  },
  {
    q: 'ما إعراب "السماءَ" في "ما أجملَ السماءَ!"؟',
    options: ['فاعل مرفوع', 'مفعول به منصوب', 'مضاف إليه مجرور', 'خبر مرفوع'],
    correctIndex: 1,
    a: '"السماءَ" مفعول به منصوب لفعل التعجب "أجملَ"، والفاعل ضمير مستتر تقديره "هو" يعود على "ما".',
  },
  {
    q: '___ أحسنَ الطالبَ! (صيغة التعجب القياسية)',
    options: ['ما', 'من', 'كيف', 'أين'],
    correctIndex: 0,
    a: 'صيغة التعجب القياسية تبدأ بـ"ما" التعجبية: "ما أحسنَ الطالبَ!".',
  },
  {
    q: 'أكرِمْ ___ محمدٍ! (الصيغة الثانية للتعجب)',
    options: ['بـ', 'لـ', 'من', 'إلى'],
    correctIndex: 0,
    a: 'الصيغة الثانية للتعجب هي "أَفْعِلْ بِه" وتُبنى بفعل أمر جامد متصل بباء زائدة تجرّ الفاعل لفظاً: "أكرِمْ بمحمدٍ!" وأصل المعنى "ما أكرمَ محمداً!".',
  },
  {
    q: 'في "أكرِمْ بمحمدٍ!" ما إعراب "محمدٍ" رغم أنه مجرور لفظاً بالباء؟',
    options: [
      'مجرور لفظاً، لكنه فاعل مرفوع محلاً',
      'مفعول به منصوب',
      'مبتدأ مرفوع',
      'بدل مجرور',
    ],
    correctIndex: 0,
    a: '"محمدٍ" في هذه الصيغة فاعل لفعل "أكرِمْ" مرفوع محلاً، لكنه مجرور لفظاً بالباء الزائدة التي دخلت على الفاعل لتوكيد معنى التعجب.',
  },
  {
    q: 'أيّ من هذه الجمل بها خطأ نحوي في صيغة التعجب؟',
    options: ['ما أجملَ الحديقةَ!', 'ما أجملُ الحديقةَ!', 'ما أروعَ المنظرَ!', 'أحسِنْ بأخلاقِه!'],
    correctIndex: 1,
    a: '"أفعل" في صيغة التعجب فعل ماضٍ جامد مبني على الفتح دائماً، فلا يجوز ضمه: الصواب "ما أجملَ الحديقةَ!" لا "أجملُ".',
  },
  {
    q: 'كيف نفرّق بين "أفعل" التعجب و"أفعل" التفضيل شكلاً ووظيفةً؟',
    options: [
      'لا فرق بينهما مطلقاً في الإعراب والوظيفة',
      '"أفعل" التعجب فعل ماضٍ جامد يقع بعد "ما" ويتبعه مفعول به منصوب، بينما "أفعل" التفضيل اسم يقارن بين شيئين وقد يُضاف أو يُسبق بـ"من"',
      'كلاهما اسم دائماً',
      'كلاهما فعل دائماً',
    ],
    correctIndex: 1,
    a: 'كلا التركيبين يشتقان من وزن "أفعل" لكن التعجب فعل ماضٍ جامد يأتي بعد "ما" ويليه مفعول به منصوب ("ما أجملَ السماءَ")، بينما أفعل التفضيل اسم/صفة تفيد المقارنة وتُضاف لاسم بعدها أو تُسبق بـ"من" ("محمدٌ أجملُ من أخيه").',
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
            Topic 22 of 47
          </p>
          <h1 className="font-serif tracking-[-0.02em] text-3xl font-bold text-foreground leading-tight mb-3">
            <span
              dir="rtl"
              lang="ar"
              style={{ fontFamily: "'Noto Naskh Arabic', serif" }}
              className="mr-2"
            >
              التعجب
            </span>
            — Ta'ajjub
          </h1>
          <p className="text-muted-foreground text-base max-w-xl">
            The main pattern of wonder/exclamation is{' '}
            <span className="font-medium text-foreground">ما أَفْعَلَه!</span> ("how ...!"), as in
            ما أجملَ السماءَ! ("How beautiful the sky is!"). ما is a مبتدأ (مبني), أفعل is a fixed
            verb, and the following noun is مفعول به منصوب. A secondary pattern is أَفْعِلْ بِه!.
          </p>
        </div>
      </div>
      <div className="mx-auto w-[min(720px,calc(100%-2rem))] py-8">
        <QuizCarousel items={quizItems} />
      </div>
    </main>
  )
}

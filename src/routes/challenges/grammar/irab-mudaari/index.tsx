import { createFileRoute, Link } from '@tanstack/react-router'
import { QuizCarousel } from '#/components/QuizCarousel'
import type { StrictQuizItem } from '#/routes/challenges/-quiz-types'

export const Route = createFileRoute('/challenges/grammar/irab-mudaari/')({
  head: () => ({ meta: [{ title: "I'rāb of the Present Tense — Grammar — Tayseer" }] }),
  component: TopicPage,
})

const quizItems: StrictQuizItem[] = [
  {
    q: 'ما الحالة الإعرابية الأصلية (الافتراضية) للفعل المضارع إذا لم يسبقه ناصب أو جازم؟',
    options: [
      'مرفوع، بالضمة الظاهرة أو المقدرة، أو بثبوت النون إن كان من الأفعال الخمسة',
      'منصوب دائماً',
      'مجزوم دائماً',
      'مبني دائماً',
    ],
    correctIndex: 0,
    a: 'الأصل في الفعل المضارع أن يكون مرفوعاً ما لم يدخل عليه ناصب أو جازم؛ فيُرفع بالضمة الظاهرة أو المقدرة، أو بثبوت النون إن كان من الأفعال الخمسة.',
  },
  {
    q: 'أختاه ___ (تكتب) الدرسَ الآن (لا يوجد ناصب ولا جازم قبل الفعل)',
    options: ['تكتبُ', 'تكتبَ', 'تكتبْ', 'تكتبِ'],
    correctIndex: 0,
    a: 'لا يوجد ناصب ولا جازم قبل الفعل، فيبقى على أصله مرفوعاً بالضمة الظاهرة: "تكتبُ".',
  },
  {
    q: 'الطلابُ ___ في الامتحانِ بلا اجتهادٍ (لن + ينجحون، من الأفعال الخمسة)',
    options: ['لن ينجحوا', 'لن ينجحون', 'لن ينجحوهم', 'لم ينجحوا'],
    correctIndex: 0,
    a: '"لن" أداة نصب، والفعل "ينجحون" من الأفعال الخمسة التي تُنصب بحذف النون: "لن ينجحوا".',
  },
  {
    q: 'أيّ الجمل التالية بها خطأ في علامة جزم الفعل المضارع؟',
    options: [
      'لم يلعبْ الولدُ أمس',
      'لمّا يصلْ القطارُ بعد',
      'لتذهبْ إلى المدرسةِ باكراً',
      'لم يكتبُ الطالبُ الدرسَ',
    ],
    correctIndex: 3,
    a: 'الجملة الرابعة خطأ لأن "لم" أداة جزم تجزم المضارع، والصواب "لم يكتبْ الطالبُ الدرسَ" بالسكون لا "يكتبُ" بالضمة.',
  },
  {
    q: 'لا ___ (تهمل) واجبَك (لا الناهية تجزم المضارع)',
    options: ['تهملْ', 'تهملُ', 'تهملَ', 'أهملْ'],
    correctIndex: 0,
    a: '"لا" الناهية تجزم الفعل المضارع، فتظهر علامة الجزم سكوناً على آخره: "لا تهملْ".',
  },
  {
    q: 'أيّ الأدوات التالية تنصب الفعل المضارع لا تجزمه؟',
    options: ['كي', 'لم', 'لا الناهية', 'لام الأمر'],
    correctIndex: 0,
    a: '"كي" من أدوات النصب (تفيد التعليل، بمعنى "لكي")، بينما "لم" و"لا الناهية" و"لام الأمر" من أدوات الجزم.',
  },
  {
    q: 'أيّ الجمل التالية بها خطأ في نصب الفعل المضارع؟',
    options: [
      'لن أذهبَ غداً',
      'يجب أن تذهبُ الآن',
      'هو يذهبُ إلى العمل',
      'أريدُ أن أنجحَ في الامتحانِ',
    ],
    correctIndex: 1,
    a: 'الجملة الثانية خطأ لأن "أن" المصدرية أداة نصب، فيجب أن يكون الفعل بعدها منصوباً بالفتحة: الصواب "يجب أن تذهبَ الآن" لا "تذهبُ".',
  },
  {
    q: 'إن ___ (تجتهد) تنجحْ (أداة الشرط "إن" جازمة تجزم فعلين: فعل الشرط وجوابه)',
    options: ['تجتهدْ', 'تجتهدُ', 'تجتهدَ', 'اجتهدْ'],
    correctIndex: 0,
    a: '"إن" أداة شرط جازمة تجزم فعلين، فعل الشرط وجوابه: "إن تجتهدْ تنجحْ" — كلاهما مجزوم بالسكون.',
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

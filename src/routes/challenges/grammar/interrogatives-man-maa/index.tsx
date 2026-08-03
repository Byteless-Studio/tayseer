import { createFileRoute, Link } from '@tanstack/react-router'
import { QuizCarousel } from '#/components/QuizCarousel'
import type { StrictQuizItem } from '#/routes/challenges/-quiz-types'

export const Route = createFileRoute('/challenges/grammar/interrogatives-man-maa/')({
  head: () => ({ meta: [{ title: 'Interrogatives — Grammar — Tayseer' }] }),
  component: TopicPage,
})

const quizItems: StrictQuizItem[] = [
  {
    q: 'ما الفرق بين اسمي الاستفهام من وما؟',
    options: [
      'من يُسأل بها عن العاقل (الأشخاص)، وما يُسأل بها عن غير العاقل (الأشياء)',
      'من للمذكر فقط، وما للمؤنث فقط',
      'من للماضي، وما للمضارع',
      'لا فرق، يستخدمان بالتبادل في كل السياقات',
    ],
    correctIndex: 0,
    a: 'من أداة استفهام يُسأل بها عمن يعقل (الأشخاص)، بينما ما أداة استفهام يُسأل بها عما لا يعقل (الأشياء والحيوانات وغيرها).',
  },
  {
    q: 'رأيتَ شخصاً ولا تعرف اسمه، فسألتَه معرِّفاً بنفسه. أيّ سؤال هو الأنسب؟',
    options: ['ما هذا؟', 'مَن هذا؟', 'أين هذا؟', 'كيف هذا؟'],
    correctIndex: 1,
    a: 'بما أن السؤال عن شخص (عاقل), فالأداة المناسبة هي مَن: "مَن هذا؟" = "Who is this?" وليس ما التي تُستخدم لغير العاقل.',
  },
  {
    q: 'رأيتَ جهازاً غريباً على الطاولة ولا تعرف ماهيته. أيّ سؤال هو الأنسب؟',
    options: ['مَن هذا؟', 'ما هذا؟', 'من ذلك؟', 'أيّ هذا؟'],
    correctIndex: 1,
    a: 'بما أن السؤال عن شيء غير عاقل, فالأداة المناسبة هي ما: "ما هذا؟" = "What is this?" — لا تُستخدم مَن هنا لأنها مختصة بالعقلاء.',
  },
  {
    q: 'أيّ من هذه الأسئلة به خطأ في اختيار أداة الاستفهام المناسبة؟',
    options: ['مَن هذا الرجلُ؟', 'ما هذا الكتابُ؟', 'مَن هذا الكتابُ؟', 'ما هذه السيارةُ؟'],
    correctIndex: 2,
    a: '"مَن هذا الكتابُ؟" خطأ لأن الكتاب غير عاقل، فيجب استخدام ما لا مَن؛ الصواب "ما هذا الكتابُ؟".',
  },
  {
    q: 'مَن أستاذُك؟ — لماذا استُخدمت مَن هنا لا ما؟',
    options: [
      'لأن السؤال عن شيء غير عاقل',
      'لأن السؤال عن شخص عاقل (الأستاذ)',
      'لأن أستاذ اسم مؤنث',
      'صدفة، يمكن استخدام ما أيضاً هنا دون فرق في المعنى',
    ],
    correctIndex: 1,
    a: 'أستاذ اسم يدل على شخص عاقل، والقاعدة أن السؤال عن العاقل يكون بـ مَن، فتصبح الجملة "مَن أستاذُك؟" = "Who is your teacher?".',
  },
  {
    q: 'من وما من الأسماء المبنية. ماذا يعني ذلك؟',
    options: [
      'أن حركة آخرهما تتغير حسب موقعهما الإعرابي في الجملة',
      'أن شكلهما ثابت ولا يتغير آخرهما بتغير موقعهما الإعرابي، بخلاف الأسماء المعربة',
      'أنهما لا يمكن أن يأتيا في أول الجملة',
      'أنهما يُعربان دائماً بحركات مقدرة على الألف',
    ],
    correctIndex: 1,
    a: 'من وما اسمان مبنيان على السكون، فحركة آخرهما لا تتغير مهما اختلف موقعهما الإعرابي في الجملة (مبتدأ، مفعول به، اسم استفهام مجرور...)، خلافاً للأسماء المعربة.',
  },
  {
    q: 'ما اسمُك؟ — ما هو الإعراب المتوقع لـ ما هنا؟',
    options: [
      'اسم استفهام مبني في محل رفع مبتدأ',
      'حرف جر',
      'فعل ماضٍ',
      'اسم موصول في محل نصب',
    ],
    correctIndex: 0,
    a: 'ما هنا اسم استفهام يقع في محل رفع مبتدأ، واسمُك خبره — رغم أنه مبني (لا يظهر عليه إعراب لفظي), إلا أن له محلاً إعرابياً كما لو كان معرباً.',
  },
  {
    q: 'أيّ زوج من الجمل يوضح الاستخدام الصحيح لـ من وما حسب قاعدة العاقل/غير العاقل؟',
    options: [
      'ما هذا الطفلُ؟ / مَن هذا القلمُ؟',
      'مَن هذا الطفلُ؟ / ما هذا القلمُ؟',
      'مَن هذا الطفلُ؟ / مَن هذا القلمُ؟',
      'ما هذا الطفلُ؟ / ما هذا القلمُ؟',
    ],
    correctIndex: 1,
    a: 'الطفل عاقل فيُسأل عنه بـ مَن (مَن هذا الطفلُ؟)، والقلم غير عاقل فيُسأل عنه بـ ما (ما هذا القلمُ؟) — تطبيق مباشر لقاعدة العاقل مقابل غير العاقل.',
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
            Topic 4 of 47
          </p>
          <h1 className="font-serif tracking-[-0.02em] text-3xl font-bold text-foreground leading-tight mb-3">
            <span
              dir="rtl"
              lang="ar"
              style={{ fontFamily: "'Noto Naskh Arabic', serif" }}
              className="mr-2"
            >
              من / ما
            </span>
            — Interrogatives
          </h1>
          <p className="text-muted-foreground text-base max-w-xl">
            Two of the most basic question words split Arabic nouns along one line: whether they're{' '}
            <span className="font-medium text-foreground">عاقل</span> (rational/human) or not.{' '}
            من asks "who" about a person (مَن هذا؟), while ما asks "what" about a thing (ما هذا؟).
            Both are <span className="font-medium text-foreground">مبني</span> — indeclinable words
            whose ending never changes, even though they still hold a grammatical position (like
            مبتدأ) in the sentence.
          </p>
        </div>
      </div>
      <div className="mx-auto w-[min(720px,calc(100%-2rem))] py-8">
        <QuizCarousel items={quizItems} />
      </div>
    </main>
  )
}

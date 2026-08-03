import { createFileRoute, Link } from '@tanstack/react-router'
import { QuizCarousel } from '#/components/QuizCarousel'
import type { StrictQuizItem } from '#/routes/challenges/-quiz-types'

export const Route = createFileRoute('/challenges/grammar/relative-pronouns/')({
  head: () => ({ meta: [{ title: 'Relative Pronouns & Clauses — Grammar — Tayseer' }] }),
  component: TopicPage,
})

const quizItems: StrictQuizItem[] = [
  {
    q: 'ما الاسم الموصول المناسب للمفرد المذكر؟',
    options: ['الذي', 'التي', 'الذين', 'اللاتي'],
    correctIndex: 0,
    a: '"الذي" اسم موصول للمفرد المذكر، مثل "جاء الطالبُ الذي نجحَ".',
  },
  {
    q: 'ما الاسم الموصول المناسب للمفردة المؤنثة؟',
    options: ['التي', 'الذي', 'اللتان', 'اللاتي'],
    correctIndex: 0,
    a: '"التي" اسم موصول للمفردة المؤنثة، مثل "نجحتِ الطالبةُ التي اجتهدتْ".',
  },
  {
    q: 'ما الاسمان الموصولان الخاصان بالمثنى (مذكراً ومؤنثاً)؟',
    options: [
      'اللذان (مذكر) واللتان (مؤنث)',
      'الذين (مذكر) واللاتي (مؤنث)',
      'الذي والتي',
      'اللذان للمؤنث واللتان للمذكر',
    ],
    correctIndex: 0,
    a: 'للمثنى اسمان موصولان: "اللذان" للمثنى المذكر و"اللتان" للمثنى المؤنث، مثل "الطالبانِ اللذانِ نجحا" و"الطالبتانِ اللتانِ نجحتا".',
  },
  {
    q: 'ما الاسم الموصول لجمع المذكر العاقل؟',
    options: ['الذين', 'اللاتي', 'الذي', 'اللتان'],
    correctIndex: 0,
    a: '"الذين" اسم موصول لجمع المذكر العاقل، مثل "نجحَ الطلابُ الذين اجتهدوا".',
  },
  {
    q: 'ما هو "العائد" الذي تستلزمه جملة الصلة بعد الاسم الموصول؟',
    options: [
      'حرف جر يربط الجملتين',
      'ضمير يعود على الاسم الموصول ويربط جملة الصلة به، مثل الهاء في "الكتابُ الذي قرأتُه"',
      'فعل أمر إلزامي',
      'لا يوجد عائد إلزامي في أي حال',
    ],
    correctIndex: 1,
    a: 'تستلزم جملة الصلة بعد الاسم الموصول ضميراً يعود عليه يُسمى "العائد"، مثل الهاء في "الكتابُ الذي قرأتُه" حيث تعود الهاء على "الذي" (أي على الكتاب).',
  },
  {
    q: 'أيّ من هذه الجمل بها خطأ نحوي (خلوّها من العائد)؟',
    options: [
      'الطالبُ الذي نجحَ سعيدٌ',
      'الكتابُ الذي قرأتُ ممتعٌ',
      'الرجلُ الذي سلّمتُ عليه كريمٌ',
      'المدينةُ التي زرتُها جميلةٌ',
    ],
    correctIndex: 1,
    a: 'جملة الصلة "قرأتُ" تفتقر إلى ضمير عائد يربطها بالاسم الموصول "الذي"، والصواب "الكتابُ الذي قرأتُه ممتعٌ" بإضافة الهاء العائدة على الكتاب.',
  },
  {
    q: 'هل يجوز استعمال "الذي" أو "التي" بعد اسم نكرة، مثل "*رجلٌ الذي جاء"؟',
    options: [
      'نعم، لا فرق بين النكرة والمعرفة',
      'لا، فالأسماء الموصولة لا تُستعمل إلا بعد اسم معرفة، والنكرة تُنعت بجملة بلا اسم موصول (رجلٌ جاء)',
      'نعم بشرط أن يكون الفعل ماضياً',
      'لا، ولا يجوز نعت النكرة بجملة إطلاقاً',
    ],
    correctIndex: 1,
    a: 'الأسماء الموصولة تُستعمل حصراً بعد اسم معرفة، أما النكرة فتُنعت بجملة فعلية أو اسمية مباشرة دون اسم موصول: يُقال "رجلٌ جاء" لا "*رجلٌ الذي جاء".',
  },
  {
    q: 'ما الاسم الموصول لجمع المؤنث؟',
    options: ['اللاتي', 'الذين', 'اللتان', 'الذي'],
    correctIndex: 0,
    a: '"اللاتي" (وتُقال أيضاً "اللائي") اسم موصول لجمع المؤنث، مثل "نجحتِ الطالباتُ اللاتي اجتهدنَ".',
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
            Topic 23 of 47
          </p>
          <h1 className="font-serif tracking-[-0.02em] text-3xl font-bold text-foreground leading-tight mb-3">
            <span
              dir="rtl"
              lang="ar"
              style={{ fontFamily: "'Noto Naskh Arabic', serif" }}
              className="mr-2"
            >
              الأسماء الموصولة
            </span>
            — Relative Pronouns & Clauses
          </h1>
          <p className="text-muted-foreground text-base max-w-xl">
            الذي (masc. sg.), التي (fem. sg.), اللذان/اللتان (dual), الذين (masc. pl.), اللاتي
            (fem. pl.) introduce a relative clause. The clause must contain a referring pronoun
            (عائد) pointing back to the antecedent, and relative pronouns are only used after a
            DEFINITE antecedent.
          </p>
        </div>
      </div>
      <div className="mx-auto w-[min(720px,calc(100%-2rem))] py-8">
        <QuizCarousel items={quizItems} />
      </div>
    </main>
  )
}

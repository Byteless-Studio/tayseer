import { createFileRoute, Link } from '@tanstack/react-router'
import { QuizCarousel } from '#/components/QuizCarousel'
import type { StrictQuizItem } from '#/routes/challenges/-quiz-types'

export const Route = createFileRoute('/challenges/grammar/ism-ishaara-near/')({
  head: () => ({ meta: [{ title: 'Ism Ishaara (Near) — Grammar — Tayseer' }] }),
  component: TopicPage,
})

const quizItems: StrictQuizItem[] = [
  {
    q: 'ما الفرق بين هذا وهذه؟',
    options: [
      'هذا للمثنى، هذه للجمع',
      'هذا للإشارة إلى القريب المذكر المفرد، هذه للإشارة إلى القريب المؤنث المفرد',
      'هذا للمؤنث، هذه للمذكر',
      'لا فرق بينهما، يستخدمان بالتبادل',
    ],
    correctIndex: 1,
    a: 'هذا اسم إشارة للمفرد المذكر القريب، وهذه اسم إشارة للمفرد المؤنث القريب — يجب أن يطابق اسم الإشارة جنس المشار إليه.',
  },
  {
    q: 'هذا + مسجدٌ → ___ ("this is a mosque")',
    options: ['هذا مسجدٌ', 'هذه مسجدٌ', 'هذا المسجدُ', 'هذا مسجدُ'],
    correctIndex: 0,
    a: 'في هذا التركيب هذا مبتدأ ومسجدٌ خبر مرفوع نكرة — وهذا هو النمط القياسي للجملة الاسمية بعد اسم الإشارة: اسم إشارة (مبتدأ) + اسم نكرة (خبر).',
  },
  {
    q: 'سيارةٌ (car) مؤنثة. أيّ جملة صحيحة للإشارة إليها من قريب؟',
    options: ['هذا سيارةٌ', 'هذه سيارةٌ', 'ذلك سيارةٌ', 'هؤلاء سيارةٌ'],
    correctIndex: 1,
    a: 'سيارة اسم مؤنث، فيجب استخدام هذه (اسم الإشارة المؤنث القريب) لا هذا (المذكر) — قاعدة مطابقة اسم الإشارة لجنس المشار إليه.',
  },
  {
    q: 'قارن بين هذا الكتابُ وهذا كتابٌ — ما الفرق النحوي بين التركيبين؟',
    options: [
      'لا فرق، كلاهما بنفس المعنى والوظيفة',
      'الأول: هذا نعت/صفة إشارية قبل اسم معرفة (this [particular] book); الثاني: هذا مبتدأ وكتابٌ خبر نكرة (this is a book)',
      'الأول خطأ نحوي والثاني صحيح',
      'الأول للمثنى والثاني للمفرد',
    ],
    correctIndex: 1,
    a: 'إذا تلا اسمَ الإشارة اسمٌ معرفة بأل مباشرة (هذا الكتابُ), فاسم الإشارة صفة إشارية تخصص ذلك الاسم؛ أما إذا تلاه اسم نكرة منفصل (هذا كتابٌ), فاسم الإشارة مبتدأ والاسم النكرة خبره.',
  },
  {
    q: 'أيّ من هذه الجمل بها خطأ في مطابقة اسم الإشارة لجنس المشار إليه؟',
    options: ['هذا رجلٌ', 'هذه امرأةٌ', 'هذا سيارةٌ', 'هذه مدرسةٌ'],
    correctIndex: 2,
    a: '"هذا سيارةٌ" خطأ لأن سيارة اسم مؤنث ويجب أن يسبقها اسم الإشارة المؤنث هذه، فالصواب "هذه سيارةٌ".',
  },
  {
    q: 'اسم الإشارة هذا مبني (indeclinable). What does مبني mean in this context?',
    options: [
      'أن آخره يتغير حسب موقعه الإعرابي في الجملة (رفع/نصب/جر)',
      'أن شكله وحركة آخره ثابتان لا تتغيران أبداً بتغير موقعه في الجملة',
      'أنه لا يمكن استخدامه في بداية الجملة',
      'أنه يُعرب دائماً بحركات مقدرة',
    ],
    correctIndex: 1,
    a: 'المبني اسم لا تتغير حركة آخره بتغير موقعه في الجملة، بخلاف المُعرَب. اسم الإشارة هذا مبني على السكون في كل المواضع، سواء كان مبتدأ أو مفعولاً به أو غير ذلك.',
  },
  {
    q: 'هذه الطالبةُ مجتهدةٌ — What role does هذه play here?',
    options: [
      'خبر مقدم',
      'صفة إشارية تخصص الاسم المعرفة "الطالبة" (this [particular] student)',
      'حرف جر',
      'مفعول به',
    ],
    correctIndex: 1,
    a: 'لأن الطالبة اسم معرفة بأل يلي اسم الإشارة مباشرة، فهذه هنا صفة إشارية للطالبة (وليست مبتدأ مستقلاً), وبعدها يأتي الخبر الحقيقي للجملة: مجتهدةٌ.',
  },
  {
    q: 'لماذا لا يتأثر اسم الإشارة هذا بموقعه الإعرابي (مبتدأ، مفعول به، مضاف إليه...) من حيث الحركة؟',
    options: [
      'لأنه اسم نكرة لا يقبل التعريف',
      'لأنه اسم مبني، والأسماء المبنية لا تتغير حركة آخرها بتغير العامل',
      'لأنه دائماً في محل رفع فقط',
      'لأنه ممنوع من الصرف',
    ],
    correctIndex: 1,
    a: 'أسماء الإشارة من الأسماء المبنية في العربية، فحركة آخرها ثابتة (هنا السكون) بصرف النظر عن موقعها الإعرابي في الجملة، على عكس الأسماء المعربة التي تتغير حركتها حسب العامل.',
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
            Topic 3 of 47
          </p>
          <h1 className="font-serif tracking-[-0.02em] text-3xl font-bold text-foreground leading-tight mb-3">
            <span
              dir="rtl"
              lang="ar"
              style={{ fontFamily: "'Noto Naskh Arabic', serif" }}
              className="mr-2"
            >
              هذا / هذه
            </span>
            — Ism Ishaara (Near)
          </h1>
          <p className="text-muted-foreground text-base max-w-xl">
            هذا (masculine) and هذه (feminine) point to something near, and must agree in gender
            with what they refer to. They work two ways: as the{' '}
            <span className="font-medium text-foreground">مبتدأ</span> of a nominal sentence
            followed by an indefinite خبر (هذا كتابٌ — "this is a book"), or as a demonstrative
            adjective placed directly before a definite noun (هذا الكتابُ — "this book"). Either
            way, both words are <span className="font-medium text-foreground">مبني</span> — their
            ending never changes regardless of case.
          </p>
        </div>
      </div>
      <div className="mx-auto w-[min(720px,calc(100%-2rem))] py-8">
        <QuizCarousel items={quizItems} />
      </div>
    </main>
  )
}

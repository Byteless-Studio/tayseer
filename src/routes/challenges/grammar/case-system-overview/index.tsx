import { createFileRoute, Link } from '@tanstack/react-router'
import { QuizCarousel } from '#/components/QuizCarousel'
import type { StrictQuizItem } from '#/routes/challenges/-quiz-types'

export const Route = createFileRoute('/challenges/grammar/case-system-overview/')({
  head: () => ({ meta: [{ title: 'Case System Overview — Grammar — Tayseer' }] }),
  component: TopicPage,
})

const quizItems: StrictQuizItem[] = [
  {
    q: 'ما هي الحالات الإعرابية الثلاث الأساسية في العربية، وما علامة كل منها في الأصل؟',
    options: [
      'الرفع (ـُ)، النصب (ـَ)، الجر (ـِ)',
      'الماضي، المضارع، الأمر',
      'المفرد، المثنى، الجمع',
      'المذكر، المؤنث، المحايد',
    ],
    correctIndex: 0,
    a: 'الحالات الإعرابية الثلاث للاسم هي: الرفع وعلامته الأصلية الضمة (ـُ)، النصب وعلامته الأصلية الفتحة (ـَ)، والجر وعلامته الأصلية الكسرة (ـِ).',
  },
  {
    q: 'جاء الطالبُ — ما الذي يجعل "الطالبُ" مرفوعاً هنا؟',
    options: [
      'لأنه مفعول به',
      'لأنه فاعل — والفاعل من أشهر الأسباب الموجبة للرفع',
      'لأنه مضاف إليه',
      'لأنه اسم بعد حرف جر',
    ],
    correctIndex: 1,
    a: 'الفاعل مرفوع دائماً، وهو أحد أبرز مواضع الرفع في الجملة الفعلية، تماماً كما يُرفع المبتدأ والخبر في الجملة الاسمية.',
  },
  {
    q: 'رأيتُ الطالبَ — لماذا "الطالبَ" هنا منصوب؟',
    options: [
      'لأنه مبتدأ',
      'لأنه مفعول به — والمفعول به من أشهر الأسباب الموجبة للنصب',
      'لأنه مضاف إليه',
      'لأنه اسم بعد حرف جر',
    ],
    correctIndex: 1,
    a: 'المفعول به منصوب دائماً، فهو أحد أشهر المواضع الموجبة لحالة النصب، مثل مفعول به الفعل رأى في هذا المثال.',
  },
  {
    q: 'مررتُ بالطالبِ / كتابُ الطالبِ — ما القاسم المشترك الذي يجعل "الطالبِ" مجروراً في كلا المثالين؟',
    options: [
      'الوقوع بعد حرف جر في الأول، والوقوع مضافاً إليه في الثاني — وكلاهما من أسباب الجر',
      'كون الطالب فاعلاً في الحالتين',
      'كون الطالب خبراً في الحالتين',
      'الصدفة، لا رابط بينهما',
    ],
    correctIndex: 0,
    a: 'الجر له سببان رئيسيان: الوقوع بعد حرف جر (مررتُ بالطالبِ) أو الوقوع مضافاً إليه (كتابُ الطالبِ) — وكلاهما يوجب الجر رغم اختلاف السياق.',
  },
  {
    q: 'جاء الفتى — لماذا لا تظهر حركة إعرابية واضحة على آخر "الفتى" رغم أنه فاعل مرفوع؟',
    options: [
      'لأنه اسم مبني لا معرب',
      'لأنه اسم منقوص من نوع خاص لا يُعرب أصلاً',
      'لأن الاسم المقصور (المنتهي بألف لينة) تُقدَّر عليه حركات الإعراب لتعذر نطقها على الألف',
      'لأنه جمع تكسير',
    ],
    correctIndex: 2,
    a: 'الاسم المقصور المنتهي بألف لينة (كالفتى) تُقدَّر عليه حركات الإعراب الثلاث جميعاً لتعذر النطق بها على الألف الساكنة، فيُقال "جاء الفتى" و"رأيتُ الفتى" و"مررتُ بالفتى" دون تغير ظاهر في اللفظ رغم اختلاف الإعراب.',
  },
  {
    q: 'هذا الطالبُ مجتهدٌ — لماذا لا تتغير حركة "هذا" أبداً رغم أنه في محل رفع مبتدأ؟',
    options: [
      'لأنه اسم مبني (اسم إشارة)، والمبني لا تتغير حركة آخره بتغير موقعه الإعرابي، بخلاف المعرب',
      'لأنه ليس له موقع إعرابي أصلاً',
      'لأنه حرف لا اسم',
      'لأنه ممنوع من الصرف',
    ],
    correctIndex: 0,
    a: 'أسماء الإشارة والضمائر من الأسماء المبنية، فحركة آخرها ثابتة مهما تغير موقعها الإعرابي في الجملة، على خلاف الأسماء المعربة التي تتغير حركتها بتغير العامل (رفع/نصب/جر).',
  },
  {
    q: 'أيّ من هذه الجمل بها خطأ في اختيار الحالة الإعرابية المناسبة للسبب النحوي المذكور؟',
    options: [
      'الطالبُ (فاعل) → رفع',
      'الكتابَ (مفعول به) → نصب',
      'الطالبِ (مضاف إليه) → رفع',
      'المسجدِ (بعد حرف جر) → جر',
    ],
    correctIndex: 2,
    a: 'المضاف إليه يكون مجروراً دائماً لا مرفوعاً؛ فالخيار "الطالبِ (مضاف إليه) → رفع" خطأ، والصواب أن يكون مجروراً كما في "كتابُ الطالبِ".',
  },
  {
    q: 'باختصار، ما الفرق الجوهري بين اسم معرب واسم مبني من حيث الإعراب؟',
    options: [
      'المعرب تتغير حركة آخره (ظاهرة أو مقدّرة) حسب موقعه في الجملة؛ المبني حركة آخره ثابتة لا تتغير رغم اختلاف موقعه الإعرابي',
      'المعرب دائماً مرفوع، والمبني دائماً منصوب',
      'المعرب للأفعال فقط، والمبني للأسماء فقط',
      'لا فرق بينهما، كلاهما بنفس القاعدة',
    ],
    correctIndex: 0,
    a: 'الاسم المعرب (كالطالب، الفتى) تتغير حركة آخره — ظاهرة كانت أو مقدّرة — بحسب موقعه الإعرابي (فاعل، مفعول به، مضاف إليه...)، بينما الاسم المبني (كأسماء الإشارة والضمائر) تبقى حركة آخره ثابتة دائماً بصرف النظر عن موقعه.',
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
            Topic 14 of 47
          </p>
          <h1 className="font-serif tracking-[-0.02em] text-3xl font-bold text-foreground leading-tight mb-3">
            <span
              dir="rtl"
              lang="ar"
              style={{ fontFamily: "'Noto Naskh Arabic', serif" }}
              className="mr-2"
            >
              الإعراب
            </span>
            — Case System Overview
          </h1>
          <p className="text-muted-foreground text-base max-w-xl">
            Every noun in Arabic carries one of three cases: رفع (ـُ, typically the subject or
            مبتدأ), نصب (ـَ, typically the object), or جر (ـِ, after a preposition or as a مضاف
            إليه). Words ending in ا or ى (like الفتى) can't physically carry these vowels, so the
            case is <span className="font-medium text-foreground">مقدّرة</span> — estimated, not
            pronounced. And مبني words like demonstratives and pronouns sit outside the system
            entirely: their ending never changes no matter what role they play.
          </p>
        </div>
      </div>
      <div className="mx-auto w-[min(720px,calc(100%-2rem))] py-8">
        <QuizCarousel items={quizItems} />
      </div>
    </main>
  )
}

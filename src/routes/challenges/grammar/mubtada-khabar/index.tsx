import { createFileRoute, Link } from '@tanstack/react-router'
import { QuizCarousel } from '#/components/QuizCarousel'
import type { StrictQuizItem } from '#/routes/challenges/-quiz-types'

export const Route = createFileRoute('/challenges/grammar/mubtada-khabar/')({
  head: () => ({ meta: [{ title: 'The Nominal Sentence — Grammar — Tayseer' }] }),
  component: TopicPage,
})

const quizItems: StrictQuizItem[] = [
  {
    q: 'ما هي الجملة الاسمية وما ركناها الأساسيان؟',
    options: [
      'جملة تبدأ بفعل، وركناها الفاعل والمفعول به',
      'جملة تبدأ باسم، وركناها المبتدأ والخبر',
      'جملة تبدأ بحرف جر، وركناها الجار والمجرور',
      'جملة تبدأ بأداة استفهام، وركناها السؤال والجواب',
    ],
    correctIndex: 1,
    a: 'الجملة الاسمية هي الجملة التي تبدأ باسم، وتتكون في أبسط صورها من ركنين: المبتدأ (الاسم الذي يُبتدأ به الكلام) والخبر (ما يخبر عنه ويكمل معناه).',
  },
  {
    q: 'المحمدٌ في الفصلِ — ما إعراب "محمد" هنا، ولماذا؟',
    options: [
      'مبتدأ مرفوع لأنه ابتدئ به الكلام والحديث عنه',
      'مفعول به منصوب',
      'مضاف إليه مجرور',
      'حال منصوب',
    ],
    correctIndex: 0,
    a: 'محمد هنا هو الاسم الذي ابتدئ به الكلام، فهو مبتدأ، وحكمه الرفع. الجار والمجرور "في الفصلِ" يقع في محل رفع خبر.',
  },
  {
    q: 'ما حكم إعراب كل من المبتدأ والخبر في الجملة الاسمية البسيطة (كالطالبُ مجتهدٌ)؟',
    options: [
      'المبتدأ مرفوع والخبر منصوب',
      'المبتدأ منصوب والخبر مرفوع',
      'كلاهما مرفوع',
      'كلاهما مجرور',
    ],
    correctIndex: 2,
    a: 'الأصل في الجملة الاسمية البسيطة أن يكون كل من المبتدأ والخبر مرفوعاً — الطالبُ (مبتدأ مرفوع) مجتهدٌ (خبر مرفوع).',
  },
  {
    q: 'الطالبُ مجتهدٌ — لماذا المبتدأ هنا معرفة (الطالبُ بأل) بينما الخبر نكرة (مجتهدٌ)؟',
    options: [
      'صدفة لا قاعدة عامة لها',
      'لأن هذا هو النمط الأشيع: مبتدأ معرفة (شيء محدد نتحدث عنه) + خبر نكرة (صفة أو معلومة عنه)',
      'لأن كل مبتدأ يجب أن يكون معرفة وكل خبر يجب أن يكون نكرة بلا استثناء',
      'لأن الخبر لا يمكن أن يكون معرفة أبداً في أي جملة',
    ],
    correctIndex: 1,
    a: 'الأنماط الأشيع للجملة الاسمية هي مبتدأ معرفة (شيء معروف نتكلم عنه) يتبعه خبر نكرة (يعطي معلومة عنه) — وإن كان هذا ليس قيداً مطلقاً في كل تراكيب اللغة.',
  },
  {
    q: 'أيّ من هذه الجمل بها خطأ في مطابقة الخبر للمبتدأ في العدد والجنس؟',
    options: ['الطالبةُ مجتهدةٌ', 'الطالبانِ مجتهدانِ', 'الطالباتُ مجتهدةٌ', 'الطلابُ مجتهدونَ'],
    correctIndex: 2,
    a: '"الطالباتُ مجتهدةٌ" خطأ لأن المبتدأ جمع مؤنث (الطالباتُ) ويحتاج خبراً يطابقه في الجمع لا في المفرد؛ الصواب "الطالباتُ مجتهداتٌ".',
  },
  {
    q: 'البيتُ كبيرٌ — What kind of word is the خبر "كبيرٌ" here, and what does it tell us about المبتدأ؟',
    options: [
      'فعل يخبر عن حدوث الكبر',
      'اسم مفرد (صفة) يصف حال المبتدأ ويكمل معناه',
      'حرف جر يربط بين المبتدأ وما بعده',
      'مضاف إليه يخصص المبتدأ',
    ],
    correctIndex: 1,
    a: 'كبيرٌ هنا خبر مفرد (اسم وليس فعلاً ولا جملة)، وهو صفة تصف حال المبتدأ "البيت" وتُتمم معنى الجملة، ويطابقه في الرفع والإفراد والتذكير.',
  },
  {
    q: 'أكمل الجملة بخبر مرفوع يطابق المبتدأ في التذكير: البابُ ___',
    options: ['مفتوحةٌ', 'مفتوحٌ', 'مفتوحاً', 'مفتوحِ'],
    correctIndex: 1,
    a: 'الباب اسم مذكر، فيجب أن يطابقه الخبر في التذكير والرفع: "البابُ مفتوحٌ" — لا "مفتوحةٌ" (مؤنث) ولا "مفتوحاً" (منصوب).',
  },
  {
    q: 'هل يمكن أن يتقدم الخبر على المبتدأ في العربية؟ اختر التوضيح الأدق.',
    options: [
      'لا، أبداً؛ ترتيب مبتدأ ثم خبر ثابت لا يتغير في كل الحالات',
      'نعم، يجوز تقديم الخبر شبه الجملة (كالجار والمجرور أو الظرف) على المبتدأ في مواضع معينة، كقولنا "في البيتِ رجلٌ"',
      'نعم، لكن فقط إذا كان المبتدأ فعلاً',
      'لا فرق؛ لا يوجد ترتيب محدد أصلاً في الجملة الاسمية',
    ],
    correctIndex: 1,
    a: 'الأصل تقديم المبتدأ على الخبر، لكن يجوز تقديم الخبر إذا كان شبه جملة (جار ومجرور أو ظرف) خصوصاً إذا كان المبتدأ نكرة، كقولنا "في البيتِ رجلٌ" حيث تقدّم شبه الجملة "في البيتِ" على المبتدأ النكرة "رجلٌ".',
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
            Topic 5 of 47
          </p>
          <h1 className="font-serif tracking-[-0.02em] text-3xl font-bold text-foreground leading-tight mb-3">
            <span
              dir="rtl"
              lang="ar"
              style={{ fontFamily: "'Noto Naskh Arabic', serif" }}
              className="mr-2"
            >
              مبتدأ وخبر
            </span>
            — The Nominal Sentence
          </h1>
          <p className="text-muted-foreground text-base max-w-xl">
            An Arabic sentence that starts with a noun is a{' '}
            <span className="font-medium text-foreground">جملة اسمية</span>, built from a{' '}
            <span className="font-medium text-foreground">مبتدأ</span> (topic, مرفوع) and a{' '}
            <span className="font-medium text-foreground">خبر</span> (predicate, مرفوع). The most
            common shape is a definite مبتدأ followed by an indefinite خبر (الطالبُ مجتهدٌ — "the
            student is diligent"), and the خبر must always agree with the مبتدأ in gender and
            number.
          </p>
        </div>
      </div>
      <div className="mx-auto w-[min(720px,calc(100%-2rem))] py-8">
        <QuizCarousel items={quizItems} />
      </div>
    </main>
  )
}

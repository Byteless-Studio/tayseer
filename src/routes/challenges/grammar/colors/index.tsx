import { createFileRoute, Link } from '@tanstack/react-router'
import { QuizCarousel } from '#/components/QuizCarousel'
import type { StrictQuizItem } from '#/routes/challenges/-quiz-types'

export const Route = createFileRoute('/challenges/grammar/colors/')({
  head: () => ({ meta: [{ title: 'Colors as Adjectives — Grammar — Tayseer' }] }),
  component: TopicPage,
})

const quizItems: StrictQuizItem[] = [
  {
    q: 'ما هو الوزن الذي تُبنى عليه أغلب أسماء الألوان الأساسية للمذكر؟',
    options: ['فَعِيل', 'أَفْعَل', 'مَفْعُول', 'فَعَّال'],
    correctIndex: 1,
    a: 'أغلب ألوان الأساس (أحمر، أزرق، أصفر، أخضر، أسود، أبيض) تُبنى للمذكر على وزن أَفْعَل — وهو وزن خاص بالألوان والعيوب الخَلقية، مختلف عن أوزان الصفات العادية كفَعِيل.',
  },
  {
    q: 'ما هو الوزن المقابل لـ أَفْعَل حين يوصف اسم مؤنث بلون؟',
    options: ['فَعْلاء', 'فَعِيلة', 'مَفْعُولة', 'فُعْلى'],
    correctIndex: 0,
    a: 'الصيغة المؤنثة لوزن أَفْعَل في الألوان هي فَعْلاء: أحمر (مذكر) ↔ حمراء (مؤنث)، أزرق ↔ زرقاء، وهكذا.',
  },
  {
    q: 'قميصٌ أحمرُ مقابل سيارةٌ حمراءُ — لماذا اختلفت صيغة كلمة "أحمر" بين الجملتين؟',
    options: [
      'خطأ إملائي، الصيغتان صحيحتان لكل الأسماء بلا فرق',
      'لأن النعت يجب أن يطابق منعوته في التذكير والتأنيث؛ قميص مذكر فيأخذ وزن أَفْعَل، وسيارة مؤنثة فتأخذ وزن فَعْلاء',
      'لأن أحمر تعني شيئاً مختلفاً عن حمراء',
      'لأن حمراء اسم علم لا صفة',
    ],
    correctIndex: 1,
    a: 'قاعدة مطابقة النعت للمنعوت في التذكير والتأنيث تنطبق على الألوان كذلك: أحمر لموصوف مذكر (قميص)، وحمراء لموصوف مؤنث (سيارة).',
  },
  {
    q: 'أكمل: هذه وردةٌ ___ (a yellow rose, fem.)',
    options: ['أصفرُ', 'صفراءُ', 'صفراً', 'أصفرٍ'],
    correctIndex: 1,
    a: 'وردة اسم مؤنث، فيجب أن يطابقها النعت في التأنيث، فتُستخدم الصيغة المؤنثة صفراءُ لا الصيغة المذكرة أصفرُ.',
  },
  {
    q: 'رأيتُ سيارةً حمراءَ — ما إعراب "حمراءَ" هنا من حيث التنوين، ولماذا؟',
    options: [
      'منصوبة وتحمل تنويناً كسائر النكرات المنصوبة',
      'منصوبة بلا تنوين لأنها اسم ممنوع من الصرف',
      'مرفوعة بتنوين',
      'مجرورة بتنوين',
    ],
    correctIndex: 1,
    a: 'وزن الألوان أَفْعَل/فَعْلاء ممنوع من الصرف، فلا يقبل التنوين حتى في حالة التنكير: "سيارةً حمراءَ" — الفتحة وحدها علامة النصب هنا بلا تنوين، خلافاً للنكرات العادية.',
  },
  {
    q: 'أيّ من هذه الجمل بها خطأ نحوي في التنوين على صفة اللون؟',
    options: ['رأيتُ رجلاً طويلاً', 'رأيتُ قميصاً أحمرَ', 'رأيتُ قميصاً أحمراً', 'اشتريتُ سيارةً زرقاءَ'],
    correctIndex: 2,
    a: '"أحمراً" بتنوين خطأ لأن أفعل (اللون) اسم ممنوع من الصرف ولا يُنوَّن أبداً حتى في حالة النصب والتنكير؛ الصواب "أحمرَ" بفتحة واحدة بلا تنوين.',
  },
  {
    q: 'بم يختلف وزن الألوان أَفْعَل عن الصفات العادية من نوع فَعِيل (كطويل، جميل) من الناحية الصرفية؟',
    options: [
      'لا فرق بينهما إطلاقاً في كل شيء',
      'أَفْعَل ممنوع من الصرف (لا تنوين، وفي الجر يأخذ فتحة بدل الكسرة)، بينما فَعِيل صفة عادية مصروفة تأخذ التنوين والكسرة في الجر بشكل طبيعي',
      'فَعِيل خاص بالمذكر فقط، وأَفْعَل خاص بالمؤنث فقط',
      'أَفْعَل لا يمكن أن يكون نعتاً أبداً',
    ],
    correctIndex: 1,
    a: 'صفات الألوان على وزن أَفْعَل من الأسماء الممنوعة من الصرف، فتُجر بالفتحة لا الكسرة ولا تُنوَّن، بخلاف الصفات العادية على وزن فَعِيل ونحوه التي تُصرف بشكل طبيعي وتقبل التنوين والكسرة في الجر.',
  },
  {
    q: 'مررتُ برجلٍ أسودَ الشعرِ — ما علامة الجر التي ستظهر على "أسودَ" هنا، ولماذا؟',
    options: [
      'الكسرة الظاهرة، لأنه اسم عادي مصروف',
      'الفتحة نيابة عن الكسرة، لأنه ممنوع من الصرف',
      'الضمة، لأنه مرفوع',
      'لا تظهر عليه أي علامة لأنه مبني',
    ],
    correctIndex: 1,
    a: 'بما أن أسود على وزن الألوان أَفْعَل الممنوع من الصرف، فعلامة جره الفتحة نيابة عن الكسرة الأصلية، وهذا من أبرز آثار كونه ممنوعاً من الصرف.',
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
            Topic 13 of 47
          </p>
          <h1 className="font-serif tracking-[-0.02em] text-3xl font-bold text-foreground leading-tight mb-3">
            <span
              dir="rtl"
              lang="ar"
              style={{ fontFamily: "'Noto Naskh Arabic', serif" }}
              className="mr-2"
            >
              الألوان
            </span>
            — Colors as Adjectives
          </h1>
          <p className="text-muted-foreground text-base max-w-xl">
            Basic colors don't follow the regular adjective patterns — they're built on{' '}
            <span className="font-medium text-foreground">أَفْعَل</span> for masculine and{' '}
            <span className="font-medium text-foreground">فَعْلاء</span> for feminine (أحمر/حمراء,
            أزرق/زرقاء). This pattern is <span className="font-medium text-foreground">
              ممنوع من الصرف
            </span>{' '}
            (diptote) — it never takes تنوين, even when indefinite, and takes a fatḥah instead of a
            kasrah in the جر case.
          </p>
        </div>
      </div>
      <div className="mx-auto w-[min(720px,calc(100%-2rem))] py-8">
        <QuizCarousel items={quizItems} />
      </div>
    </main>
  )
}

import { createFileRoute, Link } from '@tanstack/react-router'
import { QuizCarousel } from '#/components/QuizCarousel'
import type { StrictQuizItem } from '#/routes/challenges/-quiz-types'

export const Route = createFileRoute('/challenges/grammar/adverbs-of-time-tamyiz/')({
  head: () => ({ meta: [{ title: 'Adverbs of Time & Deeper Tamyīz — Grammar — Tayseer' }] }),
  component: TopicPage,
})

const quizItems: StrictQuizItem[] = [
  {
    q: 'ما إعراب الاسم الذي يدل على وقت وقوع الفعل (كاليوم، غدًا، صباحًا) في مثل: سافرتُ صباحاً؟',
    options: [
      'منصوب على الظرفية الزمانية (المفعول فيه)',
      'مرفوع على الفاعلية',
      'مجرور بحرف جر محذوف وجوباً',
      'مبني في كل الأحوال بلا استثناء',
    ],
    correctIndex: 0,
    a: 'أسماء الزمان التي تدل على وقت وقوع الفعل تُعرب منصوبة على الظرفية الزمانية (المفعول فيه): "سافرتُ صباحاً" — صباحاً ظرف زمان منصوب.',
  },
  {
    q: 'أيّ الجمل التالية بها خطأ في إعراب ظرف الزمان؟',
    options: [
      'سافرتُ صباحاً باكراً',
      'سأزورُك غداً إن شاء الله',
      'سافرتُ أمسِ إلى المدينةِ',
      'سأقابلُك اليومُ في المكتبةِ',
    ],
    correctIndex: 3,
    a: 'الجملة الرابعة خطأ لأن "اليوم" هنا ظرف زمان يجب أن يُنصب: الصواب "سأقابلُك اليومَ في المكتبةِ" لا "اليومُ" بالرفع.',
  },
  {
    q: 'ما الحالة الإعرابية الخاصة لكلمة "أمس" حين يُراد بها اليوم السابق ليومك بعينه، كما في "سافرتُ أمسِ"؟',
    options: [
      'اسم مبني على الكسر في محل نصب على الظرفية الزمانية، بخلاف أخواتها المعربة كـ"اليوم" و"غدًا"',
      'معرب منصوب بفتحة ظاهرة كبقية ظروف الزمان',
      'معرب مرفوع دائماً',
      'حرف جر مبني',
    ],
    correctIndex: 0,
    a: '"أمس" استثناء بين ظروف الزمان؛ فهي مبنية على الكسر (أمسِ) في محل نصب على الظرفية إذا دلت على اليوم السابق بعينه، بخلاف "اليوم" و"غدًا" و"صباحًا" التي تُعرب منصوبة بفتحة ظاهرة.',
  },
  {
    q: 'طابَ زيدٌ ___ (أكمل بتمييز الجملة الذي يزيل إبهام "طاب زيدٌ": من أي جهة طاب؟)',
    options: ['نفساً', 'نفسٌ', 'نفسٍ', 'النفسَ'],
    correctIndex: 0,
    a: '"نفساً" تمييز منصوب يُزيل إبهام الجملة "طاب زيدٌ" (طاب من أي جهة؟) فيوضح أن الطيب من جهة النفس؛ وهذا النوع يُسمى تمييز الجملة (أو النسبة)، وهو دائماً منصوب.',
  },
  {
    q: 'في تركيب "عندي كيلو تمرٍ"، ما إعراب كلمة "تمرٍ"؟',
    options: [
      'مجرور بالإضافة؛ لأن أسماء المقادير (كيل، وزن، مساحة) مثل كيلو ورطل ومتر تُضاف إلى تمييزها فيكون مجروراً، ويجوز أيضاً نصبه إن لم تُقصد الإضافة: "اشتريتُ كيلو تمراً"',
      'منصوب دائماً على التمييز ولا يجوز فيه غير ذلك',
      'مرفوع على أنه بدل من "كيلو"',
      'لا محل له من الإعراب',
    ],
    correctIndex: 0,
    a: 'بعد أسماء المقادير كالكيل والوزن والمساحة (كيلو، رطل، متر...)، يجوز إضافتها إلى تمييزها فيكون مجروراً بالإضافة كما في "كيلو تمرٍ"، ويجوز أيضاً الفصل بينهما ونصب التمييز: "اشتريتُ كيلو تمراً" — بخلاف تمييز العدد الذي يلزم النصب.',
  },
  {
    q: 'عندي رطلُ ___ (أكمل بتمييز الذات المجرور بالإضافة إلى اسم المقدار "رطل")',
    options: ['عسلٍ', 'عسلاً', 'عسلٌ', 'العسلِ'],
    correctIndex: 0,
    a: 'بما أن "رطل" جاءت مضافة (بلا تنوين)، فإن تمييزها بعدها يكون مضافاً إليه مجروراً: "رطلُ عسلٍ" — وهذا تمييز الذات المجرور بالإضافة بعد أسماء المقادير.',
  },
  {
    q: 'أيّ الجمل التالية بها خطأ في نصب تمييز الجملة (النسبة)؟',
    options: [
      'طابَ الجوُّ نسيماً',
      'امتلأ الإناءُ ماءً',
      'تصبّبَ زيدٌ عرقاً',
      'طابَ زيدٌ نفسٌ',
    ],
    correctIndex: 3,
    a: 'الجملة الرابعة خطأ لأن تمييز الجملة (تمييز النسبة) يجب أن يكون منصوباً دائماً لإزالة إبهام الجملة: الصواب "طابَ زيدٌ نفساً" لا "نفسٌ" بالرفع.',
  },
  {
    q: 'في الجملة "اشتريتُ اليومَ كيلو سكرٍ"، ما نوع كل من "اليومَ" و"سكرٍ"؟',
    options: [
      '"اليومَ" ظرف زمان منصوب، و"سكرٍ" تمييز ذات مجرور بالإضافة',
      'كلاهما ظرف زمان',
      'كلاهما تمييز منصوب',
      '"اليومَ" تمييز و"سكرٍ" ظرف زمان',
    ],
    correctIndex: 0,
    a: '"اليومَ" ظرف زمان منصوب يبيّن وقت الشراء، و"سكرٍ" تمييز ذات مجرور بالإضافة إلى "كيلو" اسم المقدار — كل منهما يزيل إبهاماً لكن من نوع مختلف.',
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
            Topic 46 of 47
          </p>
          <h1 className="font-serif tracking-[-0.02em] text-3xl font-bold text-foreground leading-tight mb-3">
            <span
              dir="rtl"
              lang="ar"
              style={{ fontFamily: "'Noto Naskh Arabic', serif" }}
              className="mr-2"
            >
              ظرف الزمان والتمييز
            </span>
            — Adverbs of Time & Deeper Tamyīz
          </h1>
          <p className="text-muted-foreground text-base max-w-xl">
            ظرف زمان (اليوم، الآن، أمس، غدًا، صباحًا) marks the time a verb happened and is
            منصوب — سافرتُ صباحاً — except أمس, which stays مبني على الكسر. Beyond numbers,
            تمييز also resolves ambiguity two other ways: تمييز الجملة is an indefinite singular
            منصوب noun clarifying an otherwise-vague sentence (طاب زيدٌ نفساً), while تمييز الذات
            after a unit of measure (كيلو، رطل، متر) is normally مجرور بالإضافة (كيلو تمرٍ),
            though نصب is also valid when it isn't phrased as an إضافة.
          </p>
        </div>
      </div>
      <div className="mx-auto w-[min(720px,calc(100%-2rem))] py-8">
        <QuizCarousel items={quizItems} />
      </div>
    </main>
  )
}

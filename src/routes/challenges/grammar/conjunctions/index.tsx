import { createFileRoute, Link } from '@tanstack/react-router'
import { QuizCarousel } from '#/components/QuizCarousel'
import type { StrictQuizItem } from '#/routes/challenges/-quiz-types'

export const Route = createFileRoute('/challenges/grammar/conjunctions/')({
  head: () => ({ meta: [{ title: 'Conjunctions — Grammar — Tayseer' }] }),
  component: TopicPage,
})

const quizItems: StrictQuizItem[] = [
  {
    q: 'ما الأثر الإعرابي لحرف العطف "الواو" على الاسم الذي يليه؟',
    options: [
      'تجعله مرفوعاً دائماً بصرف النظر عمّا قبله',
      'لا تضيف معنى زمنياً أو ترتيبياً، بل تجعل المعطوف يشارك المعطوف عليه في إعرابه فقط (رفعاً أو نصباً أو جراً)',
      'تجزم الفعل الذي يليها',
      'تقلب معنى الجملة إلى نفي',
    ],
    correctIndex: 1,
    a: '"الواو" حرف عطف مجرد يفيد مطلق الجمع بلا ترتيب زمني، وأثرها الإعرابي الوحيد أن المعطوف بها يأخذ نفس إعراب المعطوف عليه.',
  },
  {
    q: 'أكمل: رأيتُ محمداً ___ علياً في الملعبِ (اختر حرف العطف الذي يفيد مطلق الجمع دون ترتيب أو تعقيب)',
    options: ['ثم', 'أم', 'و', 'أو'],
    correctIndex: 2,
    a: '"الواو" هي حرف العطف الذي يفيد مطلق الجمع بين المعطوفين دون أي دلالة على الترتيب الزمني، بخلاف الفاء وثم.',
  },
  {
    q: 'ما الفرق الأساسي بين حرفي العطف "الفاء" و"ثم"؟',
    options: [
      'الفاء تفيد الترتيب والتعقيب بلا فاصل زمني، بينما ثم تفيد الترتيب مع التراخي (وجود فجوة زمنية)',
      'لا فرق بينهما إطلاقاً',
      'الفاء تفيد التخيير، وثم تفيد الجمع المطلق',
      'ثم تفيد السببية فقط ولا علاقة لها بالترتيب',
    ],
    correctIndex: 0,
    a: 'الفاء تفيد الترتيب مع التعقيب المباشر (بلا فاصل)، بينما "ثم" تفيد الترتيب مع التراخي، أي وجود فترة أو فجوة بين الحدثين.',
  },
  {
    q: 'أكمل: دخلَ الطالبُ الفصلَ ___ جلسَ مباشرةً (اختر الحرف الذي يفيد التعقيب الفوري بلا فاصل زمني)',
    options: ['ثم', 'أو', 'ف', 'أم'],
    correctIndex: 2,
    a: '"الفاء" هي حرف العطف الذي يفيد الترتيب مع التعقيب الفوري، أي أن الفعل الثاني وقع مباشرة بعد الأول دون فاصل.',
  },
  {
    q: 'ما الفرق الجوهري بين "أو" و"أم" في العطف؟',
    options: [
      '"أو" للتخيير العام أو الشك بين أمرين أو أكثر، أما "أم" فتُستخدم تحديداً بعد همزة الاستفهام "أ" حين يُطلب من المخاطب تحديد أحد أمرين بعينهما ذُكرا في السؤال (المعادلة)',
      'لا فرق أبداً بينهما ويمكن استبدال إحداهما بالأخرى دائماً',
      '"أم" تفيد النفي التام',
      '"أو" تُستخدم فقط مع الأفعال، و"أم" فقط مع الأسماء',
    ],
    correctIndex: 0,
    a: '"أو" حرف عطف عام للتخيير أو الشك، بينما "أم" (أم المتصلة) ترتبط بهمزة الاستفهام "أ" في سؤال يطلب تحديد أحد أمرين بعينهما، مثل: "أمحمدٌ عندك أم عليٌّ؟" — وهذا هو محك التفريق الأساسي بينهما.',
  },
  {
    q: 'أيّ من الجمل التالية بها خطأ في استخدام حرف العطف؟',
    options: [
      'أذهبتَ إلى المدرسةِ أو الجامعةِ؟ (والمقصود سؤال يطلب تحديد أحد المكانين بعينه)',
      'اشتريتُ قلماً ودفتراً',
      'درسَ الطالبُ ثم نجح بعد فترة',
      'دخلَ المعلمُ فبدأ الدرسَ فوراً',
    ],
    correctIndex: 0,
    a: '"أذهبتَ إلى المدرسةِ أو الجامعةِ؟" خطأ لأن السؤال بهمزة الاستفهام "أ" يطلب تحديد أحد أمرين بعينهما، فالصواب استخدام "أم": "أذهبتَ إلى المدرسةِ أم الجامعةِ؟".',
  },
  {
    q: 'إذا كان المعطوف عليه مجروراً، فما إعراب المعطوف بعد أي حرف من حروف العطف (و، ف، ثم، أو، أم)؟',
    options: [
      'يكون مجروراً هو الآخر تبعاً للمعطوف عليه',
      'يكون مرفوعاً دائماً بصرف النظر عن حالة المعطوف عليه',
      'يكون منصوباً دائماً',
      'لا إعراب له لأنه غير أصلي في الجملة',
    ],
    correctIndex: 0,
    a: 'المعطوف تابع للمعطوف عليه في إعرابه دائماً — رفعاً ونصباً وجراً — بصرف النظر عن أي حرف عطف استُخدم بينهما.',
  },
  {
    q: 'أيّ سياق يستوجب استخدام "أم" بدلاً من "أو"؟',
    options: [
      'بعد همزة الاستفهام "أ" حين يكون السؤال طالباً تحديد أحد أمرين مذكورين بأعيانهما',
      'في كل جملة استفهامية دون أي قيد',
      'بعد "هل" فقط دائماً',
      'في الجمل الخبرية فقط دون استفهام',
    ],
    correctIndex: 0,
    a: '"أم" المتصلة تأتي بعد همزة الاستفهام "أ" في سؤال يطلب من المخاطب تحديد أحد أمرين بعينهما ذُكرا في السؤال نفسه، وهذا هو السياق الحصري لاستخدامها بدلاً من "أو".',
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
            Topic 37 of 47
          </p>
          <h1 className="font-serif tracking-[-0.02em] text-3xl font-bold text-foreground leading-tight mb-3">
            <span
              dir="rtl"
              lang="ar"
              style={{ fontFamily: "'Noto Naskh Arabic', serif" }}
              className="mr-2"
            >
              حروف العطف
            </span>
            — Conjunctions
          </h1>
          <p className="text-muted-foreground text-base max-w-xl">
            و joins two words with no added meaning — the معطوف simply shares the case of the
            معطوف عليه. ف means "then/so" with immediate succession; ثم means "then" with a gap or
            delay. أو is a general "or"; أم is the special "or" used after همزة الاستفهام أ when
            asking someone to pick between two named options (أمحمدٌ عندك أم عليٌّ؟) — that
            أو-vs-أم distinction is the key test point in this topic.
          </p>
        </div>
      </div>
      <div className="mx-auto w-[min(720px,calc(100%-2rem))] py-8">
        <QuizCarousel items={quizItems} />
      </div>
    </main>
  )
}

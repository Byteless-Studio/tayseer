import { createFileRoute, Link } from '@tanstack/react-router'
import { QuizCarousel } from '#/components/QuizCarousel'
import type { StrictQuizItem } from '#/routes/challenges/-quiz-types'

export const Route = createFileRoute('/challenges/grammar/yes-no-questions/')({
  head: () => ({ meta: [{ title: 'Yes/No Questions — Grammar — Tayseer' }] }),
  component: TopicPage,
})

const quizItems: StrictQuizItem[] = [
  {
    q: 'ما هما أداتا الاستفهام المستخدمتان لطرح سؤال يُجاب عنه بنعم أو لا؟',
    options: ['من وما', 'أ وهل', 'كيف وأين', 'متى وكم'],
    correctIndex: 1,
    a: 'أ وهل هما أداتا الاستفهام المخصصتان لطرح سؤال إثبات/نفي يكون جوابه نعم أو لا، على خلاف أدوات كمن وما وأين وكيف التي تطلب معلومة محددة.',
  },
  {
    q: 'أين تُوضع همزة الاستفهام أ في الجملة؟',
    options: [
      'تُتصل مباشرة بأول كلمة في الجملة',
      'تقف منفصلة في أول الجملة كهل تماماً',
      'توضع في آخر الجملة',
      'توضع بعد الفعل مباشرة بصرف النظر عن موقعه',
    ],
    correctIndex: 0,
    a: 'همزة الاستفهام أ تتصل اتصالاً مباشراً بأول كلمة في الجملة (أطالبٌ أنتَ؟)، بخلاف هل التي تقف كلمة منفصلة بذاتها في مستهل الجملة (هل أنتَ طالبٌ؟).',
  },
  {
    q: 'أيّ من هاتين الجملتين مكتوبة بالشكل الصحيح لأداة الاستفهام؟',
    options: ['هل أنتَ مدرّسٌ؟', 'أ نتَ مدرّسٌ؟', 'أنتَ هل مدرّسٌ؟', 'مدرّسٌ هل أنتَ؟'],
    correctIndex: 0,
    a: 'هل تقف منفصلة قبل الجملة مباشرة في أولها: "هل أنتَ مدرّسٌ؟" — أما "أ نتَ" ففيها انفصال خاطئ لهمزة الاستفهام التي يجب أن تتصل بالكلمة (أأنتَ).',
  },
  {
    q: 'حوّل الجملة "هذا كتابٌ" إلى سؤال باستخدام همزة الاستفهام أ.',
    options: ['هل هذا كتابٌ؟', 'أهذا كتابٌ؟', 'أ هذا كتابٌ ؟ (منفصلة)', 'كتابٌ أهذا؟'],
    correctIndex: 1,
    a: 'تتصل همزة الاستفهام مباشرة بأول كلمة في الجملة، فتصبح "هذا" ← "أهذا": "أهذا كتابٌ؟" = "Is this a book?"',
  },
  {
    q: 'أيّ من هذه الجمل بها خطأ في استخدام أداة الاستفهام؟',
    options: ['هل ذهبتَ إلى المدرسةِ؟', 'أذهبتَ إلى المدرسةِ؟', 'هلذهبتَ إلى المدرسةِ؟', 'أطالبٌ أنتَ؟'],
    correctIndex: 2,
    a: '"هلذهبتَ" خطأ لأن هل يجب أن تُكتب منفصلة عن الكلمة التي تليها دائماً (هل + ذهبتَ)، بخلاف أ التي تتصل اتصالاً مباشراً بالكلمة.',
  },
  {
    q: 'بأي كلمتين تُجاب أسئلة نعم/لا في العربية عادة؟',
    options: ['أي ولا', 'نعم ولا', 'بلى وكلا', 'صحيح وخطأ'],
    correctIndex: 1,
    a: 'يُجاب عن سؤال أ/هل المثبت عادة بـ نعم (للإثبات) أو لا (للنفي) — مثل: "هل أنتَ طالبٌ؟" فيُجاب "نعم" أو "لا".',
  },
  {
    q: 'هل أنتَ مريضٌ؟ فأجاب المخاطب: نعم. What does this answer confirm?',
    options: [
      'أنه ليس مريضاً',
      'أنه مريضٌ فعلاً، مؤكداً مضمون السؤال المُثبت',
      'أنه لا يعرف الجواب',
      'أنه سيصبح مريضاً لاحقاً',
    ],
    correctIndex: 1,
    a: 'بما أن السؤال هنا مُثبت (هل أنتَ مريضٌ؟), فإن الجواب "نعم" يؤكد مضمون السؤال كما هو: أي أنه مريضٌ بالفعل.',
  },
  {
    q: 'أهذه سيارتُك؟ — أعرب الجملة إعراباً وظيفياً: ما وظيفة الهمزة أ هنا؟',
    options: [
      'حرف عطف يربط جملتين',
      'حرف استفهام يفيد طلب الإثبات أو النفي (yes/no) ولا محل له من الإعراب',
      'اسم موصول',
      'فعل أمر',
    ],
    correctIndex: 1,
    a: 'الهمزة هنا حرف استفهام يفيد طلب جواب بنعم أو لا، وهي حرف مبني لا محل له من الإعراب، متصل مباشرة بأول الجملة (هذه ← أهذه).',
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
            Topic 8 of 47
          </p>
          <h1 className="font-serif tracking-[-0.02em] text-3xl font-bold text-foreground leading-tight mb-3">
            <span
              dir="rtl"
              lang="ar"
              style={{ fontFamily: "'Noto Naskh Arabic', serif" }}
              className="mr-2"
            >
              أ / هل
            </span>
            — Yes/No Questions
          </h1>
          <p className="text-muted-foreground text-base max-w-xl">
            Two particles turn a plain statement into a yes/no question. أ attaches directly to the
            first word of the sentence (هذا كتابٌ → أهذا كتابٌ؟), while هل stands on its own at the
            very start of the sentence (هل هذا كتابٌ؟). Either way, the answer is a simple{' '}
            <span className="font-medium text-foreground">نعم</span> (yes) or{' '}
            <span className="font-medium text-foreground">لا</span> (no).
          </p>
        </div>
      </div>
      <div className="mx-auto w-[min(720px,calc(100%-2rem))] py-8">
        <QuizCarousel items={quizItems} />
      </div>
    </main>
  )
}

import { createFileRoute, Link } from '@tanstack/react-router'
import { QuizCarousel } from '#/components/QuizCarousel'
import type { StrictQuizItem } from '#/routes/challenges/-quiz-types'

export const Route = createFileRoute('/challenges/grammar/negative-questions/')({
  head: () => ({ meta: [{ title: 'Negative Questions & How to Answer Them — Grammar — Tayseer' }] }),
  component: TopicPage,
})

const quizItems: StrictQuizItem[] = [
  {
    q: 'كيف تُصاغ الأسئلة المنفية في العربية؟',
    options: [
      'بإدخال همزة الاستفهام "أ" على أداة نفي مثل "لا" أو على الفعل الناقص "ليس": "ألا تحبُّ القراءةَ؟"، "ألستَ مسافراً؟"',
      'بحذف الفعل من الجملة تماماً',
      'باستخدام "هل" فقط دون أي أداة نفي',
      'بتكرار الفعل مرتين',
    ],
    correctIndex: 0,
    a: 'تُصاغ الأسئلة المنفية بإدخال همزة الاستفهام "أ" على أداة نفي مثل "لا" أو على الفعل الناقص "ليس": "ألا تحبُّ القراءةَ؟"، "ألستَ مسافراً؟".',
  },
  {
    q: 'إذا سُئلتَ: "ألستَ مسافراً؟" وكنتَ بالفعل مسافراً (أي أن الحقيقة تخالف النفي الوارد في السؤال)، فبأيّ كلمة تُجيب؟',
    options: [
      'بلى (لأنها تُستخدم لتكذيب النفي الوارد في السؤال وإثبات عكسه: بلى أنا مسافرٌ)',
      'نعم (لأنها تؤكد النفي فتعني أنك لست مسافراً)',
      'كلتاهما بمعنى واحد ولا فرق بينهما',
      'لا يصح الجواب إلا بجملة كاملة منفية',
    ],
    correctIndex: 0,
    a: '"بلى" هي الأداة الخاصة بالرد على سؤال منفٍ لتكذيب النفي وإثبات عكسه: فإذا قيل "ألستَ مسافراً؟" وكنتَ مسافراً فعلاً، تقول "بلى" (بمعنى: بل أنا مسافرٌ).',
  },
  {
    q: 'أَلَمْ تُخبِرْني بالحقيقةِ؟ / والجواب يثبت أنه أخبرك فعلاً (تكذيب للنفي): ___، أخبرتُك',
    options: ['بلى', 'نعم', 'لا', 'كلا'],
    correctIndex: 0,
    a: 'السؤال منفيّ بـ"لم"، والجواب يثبت عكس النفي (أي أنه أخبره فعلاً)، فتجب استخدام "بلى" لتكذيب النفي الوارد في السؤال.',
  },
  {
    q: 'أيّ الحوارات التالية بها خطأ في استخدام أداة الجواب مع سؤال مثبت (غير منفي)؟',
    options: [
      'هل حضرتَ الاجتماعَ؟ — نعم، حضرتُ',
      'هل أنتَ طالبٌ؟ — نعم أنا طالبٌ',
      'أتحبُّ القراءةَ؟ — نعم أحبها',
      'هل سافرتَ أمس؟ — بلى، سافرتُ',
    ],
    correctIndex: 3,
    a: 'الحوار الرابع خاطئ لأن "بلى" لا تُستخدم إلا رداً على سؤال منفٍ لتكذيب نفيه، أما هذا السؤال ("هل سافرتَ أمس؟") فمثبت غير منفيّ، فيجب الرد بـ"نعم": "نعم، سافرتُ".',
  },
  {
    q: 'إذا سُئلتَ: "ألم تَنَمْ جيداً؟" وأجبتَ بـ"نعم"، فما الذي تُقرّه؟',
    options: [
      'تُقرّ بمضمون السؤال كما وَرَد بنفيه، أي أنك لم تنمْ جيداً',
      'تنفي النفي وتُثبت أنك نمتَ جيداً',
      'لا معنى محدداً لهذا الجواب',
      'تطلب إعادة السؤال',
    ],
    correctIndex: 0,
    a: '"نعم" تُصدّق مضمون السؤال كما وَرَد، فإن كان السؤال منفياً ("ألم تنمْ؟") فإن "نعم" تعني تصديق ذلك النفي (أي: نعم، لم أنمْ جيداً)؛ ولإثبات عكس النفي وجب استخدام "بلى" بدلاً منها.',
  },
  {
    q: 'أيّ الحوارات التالية بها خطأ في استخدام أداة الجواب مع سؤال منفٍ؟',
    options: [
      'أَلستَ طالباً؟ — بلى أنا طالبٌ',
      'هل أنتَ طالبٌ؟ — نعم أنا طالبٌ',
      'أَلَمْ تحضرْ الدرسَ؟ — بلى، حضرتُه',
      'أَلستَ مخطئاً؟ — نعم، أنا مخطئٌ',
    ],
    correctIndex: 3,
    a: 'الحوار الرابع خاطئ؛ فالمتحدث يثبت أنه مخطئ، أي يكذّب النفي الوارد في السؤال ("ألستَ مخطئاً؟")، فيجب أن يستخدم "بلى" لا "نعم": الصواب "بلى، أنا مخطئٌ".',
  },
  {
    q: 'أَلا تعرفُ الجوابَ؟ (وأنت في الحقيقة تعرفه) — الجواب الصحيح: ___، أعرفه',
    options: ['بلى', 'نعم', 'لا', 'ربما'],
    correctIndex: 0,
    a: 'السؤال منفيّ بـ"لا" الاستفهامية ("ألا تعرفُ؟")، والجواب يثبت عكس النفي (أنك تعرف الجواب فعلاً)، فتُستخدم "بلى" لتكذيب النفي.',
  },
  {
    q: 'ما القاعدة العامة في التفريق بين "بلى" و"نعم" في الرد على الأسئلة؟',
    options: [
      '"بلى" تُستخدم خاصة لتكذيب سؤال منفٍ وإثبات عكسه، أما "نعم" فتُستخدم لتصديق مضمون السؤال كما وَرَد سواء كان مثبتاً أو منفياً',
      '"بلى" و"نعم" مترادفتان تماماً في كل السياقات',
      '"نعم" لا تُستخدم إلا مع الأسئلة المنفية فقط',
      '"بلى" تُستخدم فقط مع الأسئلة المثبتة',
    ],
    correctIndex: 0,
    a: 'القاعدة أن "بلى" مختصة بتكذيب مضمون السؤال المنفي وإثبات عكسه، بينما "نعم" تُصدّق مضمون السؤال كما وَرَد لفظاً، سواء كان السؤال مثبتاً أم منفياً.',
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
            Topic 47 of 47
          </p>
          <h1 className="font-serif tracking-[-0.02em] text-3xl font-bold text-foreground leading-tight mb-3">
            <span
              dir="rtl"
              lang="ar"
              style={{ fontFamily: "'Noto Naskh Arabic', serif" }}
              className="mr-2"
            >
              الأسئلة المنفية
            </span>
            — Negative Questions & How to Answer Them
          </h1>
          <p className="text-muted-foreground text-base max-w-xl">
            Adding همزة الاستفهام أ to لا or ليس forms a negative question: أَلَسْتَ...؟ The
            answering rules are the core test point: بلى contradicts the negative — it asserts
            the opposite of what the question implied ("yes, contrary to that"); نعم confirms
            the question exactly as it was worded, whether that wording was positive or negative.
          </p>
        </div>
      </div>
      <div className="mx-auto w-[min(720px,calc(100%-2rem))] py-8">
        <QuizCarousel items={quizItems} />
      </div>
    </main>
  )
}

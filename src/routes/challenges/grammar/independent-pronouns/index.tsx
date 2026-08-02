import { createFileRoute, Link } from '@tanstack/react-router'
import { QuizCarousel } from '#/components/QuizCarousel'
import type { StrictQuizItem } from '#/routes/challenges/-quiz-types'

export const Route = createFileRoute('/challenges/grammar/independent-pronouns/')({
  head: () => ({ meta: [{ title: 'Independent Pronouns — Grammar — Tayseer' }] }),
  component: TopicPage,
})

const quizItems: StrictQuizItem[] = [
  {
    q: 'ما هو الضمير المنفصل المناسب للمتكلم المفرد (I)؟',
    options: ['أنتَ', 'أنا', 'هو', 'نحن'],
    correctIndex: 1,
    a: 'أنا هو ضمير المتكلم المفرد (سواء مذكراً أو مؤنثاً)، يُستخدم للإشارة إلى المتكلم نفسه.',
  },
  {
    q: 'ما هو الضمير المنفصل المناسب للمخاطب المؤنث المفرد (you, fem. sg.)؟',
    options: ['أنتَ', 'أنتِ', 'أنتما', 'أنتنّ'],
    correctIndex: 1,
    a: 'أنتِ (بكسر التاء) ضمير المخاطبة المفردة المؤنثة، بينما أنتَ (بفتح التاء) للمخاطب المفرد المذكر.',
  },
  {
    q: 'هما ذاهبانِ إلى المسجدِ — لأيّ عدد وجنس يُستخدم الضمير هما؟',
    options: ['الجمع المذكر', 'المثنى (مذكراً كان أو مؤنثاً)', 'المفرد المؤنث', 'الجمع المؤنث'],
    correctIndex: 1,
    a: 'هما ضمير الغائب للمثنى، ويُستخدم للمثنى المذكر والمؤنث معاً (على خلاف أنتما التي تخص المخاطَبين تحديداً بنفس الصيغة أيضاً لكليهما).',
  },
  {
    q: 'أكمل: ___ مجتهدونَ (نحن نتحدث عن جماعة رجال غائبين — "they are diligent")',
    options: ['هم', 'هنّ', 'هما', 'أنتم'],
    correctIndex: 0,
    a: 'هم ضمير الغائب لجمع الذكور، ويطابقه الخبر بصيغة جمع المذكر السالم "مجتهدونَ".',
  },
  {
    q: 'أنتَ طالبٌ ("You are a student") — What role does the pronoun أنتَ play, and what case does that put it in?',
    options: [
      'مفعول به، منصوب',
      'مبتدأ، في محل رفع',
      'مضاف إليه، في محل جر',
      'حال، في محل نصب',
    ],
    correctIndex: 1,
    a: 'أنتَ هنا مبتدأ في محل رفع، وطالبٌ خبره المرفوع — الضمائر المنفصلة تعمل مبتدأ في الجملة الاسمية تماماً كالأسماء الظاهرة.',
  },
  {
    q: 'أيّ من هذه الجمل بها خطأ في مطابقة الخبر لضمير المبتدأ؟',
    options: ['هي مجتهدةٌ', 'هم مجتهدونَ', 'هنّ مجتهدٌ', 'أنتِ مجتهدةٌ'],
    correctIndex: 2,
    a: '"هنّ مجتهدٌ" خطأ لأن هنّ ضمير لجمع الإناث الغائبات، ويحتاج خبراً بصيغة جمع المؤنث السالم؛ الصواب "هنّ مجتهداتٌ".',
  },
  {
    q: 'الضمائر المنفصلة مثل أنا وهو مبنية دائماً. What does that mean about their form?',
    options: [
      'تتغير حركة آخرها حسب موقعها الإعرابي في الجملة',
      'شكلها وحركة آخرها ثابتان دائماً، بصرف النظر عن موقعها من الإعراب',
      'لا يمكن أن تكون مبتدأ أبداً',
      'تُعرب فقط في حالة النصب',
    ],
    correctIndex: 1,
    a: 'الضمائر المنفصلة كلها مبنية، فشكلها لا يتغير بتغير موقعها الإعرابي (مبتدأ أو غيره)، خلافاً للأسماء المعربة التي تتغير حركة آخرها حسب العامل.',
  },
  {
    q: 'رتّب هذه الضمائر حسب المخاطَب الصحيح: نحن جالسونَ في الحديقةِ. لماذا استُخدم "نحن" هنا وليس "أنا"؟',
    options: [
      'لأن المتكلم يتحدث عن نفسه وحده',
      'لأن المتكلم يتحدث نيابة عن مجموعة تضمه (نحن = "we"), لا عن نفسه منفرداً (أنا = "I")',
      'لأن نحن للمخاطب لا للمتكلم',
      'لا فرق بين أنا ونحن في المعنى',
    ],
    correctIndex: 1,
    a: 'نحن ضمير المتكلمين (جمع)، يُستخدم حين يتحدث المتكلم عن نفسه مع آخرين، بخلاف أنا التي تخص المتكلم المفرد وحده.',
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
            Topic 7 of 47
          </p>
          <h1 className="font-serif tracking-[-0.02em] text-3xl font-bold text-foreground leading-tight mb-3">
            <span
              dir="rtl"
              lang="ar"
              style={{ fontFamily: "'Noto Naskh Arabic', serif" }}
              className="mr-2"
            >
              الضمائر المنفصلة
            </span>
            — Independent Pronouns
          </h1>
          <p className="text-muted-foreground text-base max-w-xl">
            أنا نحن أنتَ أنتِ أنتما أنتم أنتنّ هو هي هما هم هنّ — the full set of independent
            pronouns stands on its own as a complete word (unlike attached pronouns), most commonly
            working as the <span className="font-medium text-foreground">مبتدأ</span> of a nominal
            sentence. Whatever خبر follows must agree with the pronoun's person, gender, and number,
            and like all pronouns, these words are{' '}
            <span className="font-medium text-foreground">مبني</span> — their form never changes
            with case.
          </p>
        </div>
      </div>
      <div className="mx-auto w-[min(720px,calc(100%-2rem))] py-8">
        <QuizCarousel items={quizItems} />
      </div>
    </main>
  )
}

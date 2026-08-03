import { createFileRoute, Link } from '@tanstack/react-router'
import { QuizCarousel } from '#/components/QuizCarousel'
import type { StrictQuizItem } from '#/routes/challenges/-quiz-types'

export const Route = createFileRoute('/challenges/grammar/weak-verbs/')({
  head: () => ({ meta: [{ title: 'Weak Verbs in Practice — Grammar — Tayseer' }] }),
  component: TopicPage,
})

const quizItems: StrictQuizItem[] = [
  {
    q: 'ما هو الفعل الأجوف (المعتل الأوسط)؟',
    options: [
      'فعل حرفه الأوسط (عين الفعل) حرف علة، و أو ي، مثل "قال" (أصلها ق-و-ل)',
      'فعل أوله همزة',
      'فعل آخره حرف علة',
      'فعل مضعف الحروف',
    ],
    correctIndex: 0,
    a: 'الفعل الأجوف هو ما كان حرفه الأوسط (عين الفعل) حرف علة، واواً أو ياءً، مثل "قالَ" (أصلها ق-و-ل) و"باعَ" (أصلها ب-ي-ع)، وتتحول عينه إلى ألف في الماضي.',
  },
  {
    q: 'أكمل: أنا ___ الحقيقةَ (تصريف "قال" مع ضمير المتكلم، حيث يُحذف حرف العلة)',
    options: ['قَالْتُ', 'قُلْتُ', 'قَوَلْتُ', 'أَقُولُ'],
    correctIndex: 1,
    a: 'عند اتصال الفعل الأجوف "قال" بضمير رفع متحرك مثل "تُ"، يُحذف حرف العلة (أصله واو) وتُنقل حركته إلى ما قبله: "قُلْتُ" لا "قَالْتُ".',
  },
  {
    q: 'ما هو الفعل المهموز الفاء (مثل أخذ وأكل) وماذا يحدث لهمزته في فعل الأمر؟',
    options: [
      'تبقى الهمزة كما هي دائماً',
      'تُحذف الهمزة الأولى كلياً في صيغة الأمر سماعاً، مثل "خُذْ" و"كُلْ"',
      'تتحول الهمزة إلى ياء في الأمر',
      'تتحول الهمزة إلى واو في الأمر',
    ],
    correctIndex: 1,
    a: 'الفعل المهموز الفاء مثل "أخذ" و"أكل" تُحذف همزته الأولى كلياً في صيغة الأمر سماعاً: "خُذْ" (من أخذ) و"كُلْ" (من أكل)، لا "اُوخُذْ" أو "اُوكُلْ".',
  },
  {
    q: 'ما فعل الأمر الصحيح من "أخذ" مخاطباً مفرداً؟',
    options: ['اؤخُذْ', 'أُخُذْ', 'خُذْ', 'آخُذْ'],
    correctIndex: 2,
    a: 'فعل الأمر من "أخذ" هو "خُذْ" بحذف الهمزة الأصلية كلياً، وهذا حذف سماعي خاص بهذا النوع من الأفعال المهموزة الفاء.',
  },
  {
    q: '"أرادَ" — إلى أي وزن صرفي تنتمي، وما نوعها من حيث العلة؟',
    options: [
      'فعل صحيح سالم من وزن "فَعَلَ"',
      'فعل أجوف من وزن "أَفْعَلَ" (أصلها ر-و-د)، مضارعها "يُريدُ"',
      'فعل مهموز اللام',
      'فعل ناقص من وزن "فاعَلَ"',
    ],
    correctIndex: 1,
    a: '"أرادَ" فعل أجوف على وزن "أَفْعَلَ"، أصله الثلاثي ر-و-د، وحرف العلة (الواو) يتحول إلى ياء في المضارع: "يُريدُ" — من الأفعال الأجوفة الشائعة في التعبير عن الرغبة.',
  },
  {
    q: 'ما هو الفعل المضعف (كـ"ظنّ")، ولماذا كُتب بحرف واحد مشدد؟',
    options: [
      'فعل عينه ولامه من جنس واحد (ن-ن) فأُدغمتا في حرف واحد مشدد: أصله ظ-ن-ن',
      'فعل أوله وآخره حرفا علة',
      'فعل حُذف أحد أحرفه الثلاثة',
      'فعل زيد عليه حرف من حروف الزيادة العشرة',
    ],
    correctIndex: 0,
    a: 'الفعل المضعف عينه ولامه من جنس واحد، فيُدغم الحرفان المتماثلان في حرف واحد مشدد: "ظَنَّ" أصلها ظ-ن-ن، أُدغمت النونان في نون واحدة مشددة.',
  },
  {
    q: 'ماذا يفعل الفعل "ظنّ" (من أخوات ظنّ) بالجملة الاسمية التي يدخل عليها؟',
    options: [
      'يرفع المبتدأ والخبر معاً كما هما',
      'ينصب المبتدأ والخبر معاً فيصبحان مفعولين به، أولاً وثانياً',
      'يجر المبتدأ ويرفع الخبر',
      'لا تأثير له على إعراب الجملة الاسمية',
    ],
    correctIndex: 1,
    a: '"ظنّ" وأخواتها (من أفعال القلوب) تدخل على الجملة الاسمية فتنصب طرفيها معاً: المبتدأ يصبح مفعولاً به أول، والخبر يصبح مفعولاً به ثانياً، مثل "ظننتُ الجوَّ جميلاً" (الأصل: الجوُّ جميلٌ).',
  },
  {
    q: 'أكمل: ظننتُ الامتحانَ ___ (سهلاً، مفعول به ثانٍ منصوب)',
    options: ['سهلٌ', 'سهلاً', 'سهلٍ', 'سهلُ'],
    correctIndex: 1,
    a: 'المفعول به الثاني لـ"ظنّ" (وهو خبر الجملة الاسمية أصلاً) يكون منصوباً: "ظننتُ الامتحانَ سهلاً" — كلا المفعولين (الامتحانَ وسهلاً) منصوبان.',
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
            Topic 33 of 47
          </p>
          <h1 className="font-serif tracking-[-0.02em] text-3xl font-bold text-foreground leading-tight mb-3">
            <span
              dir="rtl"
              lang="ar"
              style={{ fontFamily: "'Noto Naskh Arabic', serif" }}
              className="mr-2"
            >
              الأفعال المعتلة
            </span>
            — Weak Verbs in Practice
          </h1>
          <p className="text-muted-foreground text-base max-w-xl">
            Weak verbs bend the rules. Hollow verbs (أجوف) like قَالَ/كَادَ turn a middle و/ي into
            ا in الماضي and drop it in some conjugations (قُلْتُ). Hamzated verbs like
            أَخَذَ/أَكَلَ drop their first radical ء entirely in the imperative (خُذْ، كُلْ).
            أَرَادَ is a hollow أفعل-form verb, while ظَنَّ is a doubled-root verb from the أخوات
            ظنّ family that enters a nominal sentence and makes both مبتدأ and خبر منصوب.
          </p>
        </div>
      </div>
      <div className="mx-auto w-[min(720px,calc(100%-2rem))] py-8">
        <QuizCarousel items={quizItems} />
      </div>
    </main>
  )
}

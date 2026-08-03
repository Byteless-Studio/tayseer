import { createFileRoute, Link } from '@tanstack/react-router'
import { QuizCarousel } from '#/components/QuizCarousel'
import type { StrictQuizItem } from '#/routes/challenges/-quiz-types'

export const Route = createFileRoute('/challenges/grammar/numbers-1-10/')({
  head: () => ({ meta: [{ title: 'Numbers 1–10 — Grammar — Tayseer' }] }),
  component: TopicPage,
})

const quizItems: StrictQuizItem[] = [
  {
    q: 'ما المقصود بـ"مخالفة الجنس" (polarity) بين العدد والمعدود من ٣ إلى ١٠؟',
    options: [
      'العدد يوافق المعدود في الجنس دائماً',
      'العدد يخالف المعدود في الجنس: فيؤنَّث مع المذكر ويُذكَّر مع المؤنث',
      'العدد لا علاقة له بجنس المعدود',
      'العدد يوافق المعدود في العدد فقط لا في الجنس',
    ],
    correctIndex: 1,
    a: 'من ٣ إلى ١٠ يخالف العدد المعدود في الجنس (قاعدة مخالفة الجنس): فيُقال "ثلاثةُ رجالٍ" بتاء التأنيث مع المعدود المذكر، و"ثلاثُ نساءٍ" بلا تاء مع المعدود المؤنث.',
  },
  {
    q: 'ثلاثـ___ طلابٍ (ثلاثة، معدود مذكر جمع)',
    options: ['ثلاثةُ', 'ثلاثُ', 'ثلاثتانِ', 'ثلاثمائةُ'],
    correctIndex: 0,
    a: 'المعدود "طلاب" جمع مذكر، فيجب تأنيث العدد بالتاء طبقاً لقاعدة مخالفة الجنس: "ثلاثةُ طلابٍ" — والمعدود مجرور بالإضافة.',
  },
  {
    q: 'ثلاثـ___ نساءٍ (ثلاثة، معدود مؤنث)',
    options: ['ثلاثُ', 'ثلاثةُ', 'ثلاثانِ', 'ثلاثمائةٌ'],
    correctIndex: 0,
    a: 'المعدود "نساء" مؤنث، فيُجرَّد العدد من تاء التأنيث طبقاً لقاعدة مخالفة الجنس: "ثلاثُ نساءٍ".',
  },
  {
    q: 'كيف يوافق العددان (١) و(٢) المعدود؟',
    options: [
      'يخالفانه في الجنس كبقية الأعداد',
      'يوافقانه في الجنس ويأتيان غالباً بعده لا قبله (كصفة)، مثل "رجلٌ واحدٌ" و"امرأتانِ اثنتانِ"',
      'يبقيان مذكرَين دائماً بصرف النظر عن المعدود',
      'لا يُستعملان مع الأسماء المؤنثة إطلاقاً',
    ],
    correctIndex: 1,
    a: 'العددان ١ و٢ يخالفان قاعدة مخالفة الجنس ويوافقان المعدود في التذكير والتأنيث، ويأتيان عادة بعد المعدود كالصفة لا قبله كإضافة: "رجلٌ واحدٌ"، "امرأتانِ اثنتانِ".',
  },
  {
    q: 'ما إعراب المعدود بعد الأعداد من ٣ إلى ١٠؟',
    options: [
      'مرفوع دائماً',
      'جمع ومجرور على أنه مضاف إليه',
      'مفرد ومنصوب على التمييز',
      'مثنى ومجرور',
    ],
    correctIndex: 1,
    a: 'المعدود بعد أعداد ٣-١٠ يأتي جمعاً مجروراً على أنه مضاف إليه للعدد، مثل "ثلاثةُ رجالٍ" حيث "رجالٍ" مضاف إليه مجرور.',
  },
  {
    q: 'أيّ من هذه الجمل بها خطأ نحوي؟',
    options: [
      'عندي خمسةُ كتبٍ',
      'عندي خمسُ كتبٍ',
      'عندي خمسُ سياراتٍ',
      'اشتريتُ سبعةَ أقلامٍ',
    ],
    correctIndex: 1,
    a: '"كتب" جمع مذكر، فيجب تأنيث العدد بالتاء طبقاً لمخالفة الجنس: الصواب "عندي خمسةُ كتبٍ" لا "خمسُ كتبٍ".',
  },
  {
    q: 'عندي طالبتانِ ___ (اثنان، مؤنث، توكيد بعد المعدود)',
    options: ['اثنتانِ', 'اثنانِ', 'ثنتا', 'اثنينِ'],
    correctIndex: 0,
    a: 'العدد (٢) يوافق المعدود المؤنث "طالبتانِ" في التأنيث ويأتي بعده توكيداً: "طالبتانِ اثنتانِ".',
  },
  {
    q: 'أيّ العبارتين صحيحة نحوياً: "أربعةُ بناتٍ" أم "أربعُ بناتٍ"؟',
    options: [
      '"أربعةُ بناتٍ" لأن المعدود مؤنث فيوافقه العدد',
      '"أربعُ بناتٍ" لأن المعدود "بنات" مؤنث فيُجرَّد العدد من تاء التأنيث طبقاً لمخالفة الجنس',
      'كلاهما خطأ',
      'كلاهما صحيح بلا فرق في المعنى',
    ],
    correctIndex: 1,
    a: '"بنات" معدود مؤنث، فتُخالفه صيغة العدد بتجريده من تاء التأنيث طبقاً لقاعدة مخالفة الجنس من ٣ إلى ١٠: الصحيح "أربعُ بناتٍ" لا "أربعةُ بناتٍ".',
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
            Topic 19 of 47
          </p>
          <h1 className="font-serif tracking-[-0.02em] text-3xl font-bold text-foreground leading-tight mb-3">
            <span
              dir="rtl"
              lang="ar"
              style={{ fontFamily: "'Noto Naskh Arabic', serif" }}
              className="mr-2"
            >
              الأعداد ١-١٠
            </span>
            — Numbers 1–10
          </h1>
          <p className="text-muted-foreground text-base max-w-xl">
            Numbers 3–10 take the OPPOSITE gender of the noun they count (gender polarity) —
            ثلاثةُ رجالٍ but ثلاثُ نساءٍ. Numbers 1 and 2 agree in gender normally and usually
            follow the noun. The counted noun (معدود) after 3–10 is plural and مجرور as مضاف
            إليه.
          </p>
        </div>
      </div>
      <div className="mx-auto w-[min(720px,calc(100%-2rem))] py-8">
        <QuizCarousel items={quizItems} />
      </div>
    </main>
  )
}

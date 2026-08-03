import { createFileRoute, Link } from '@tanstack/react-router'
import { QuizCarousel } from '#/components/QuizCarousel'
import type { StrictQuizItem } from '#/routes/challenges/-quiz-types'

export const Route = createFileRoute('/challenges/grammar/badal-vocative/')({
  head: () => ({ meta: [{ title: 'Apposition & Vocative — Grammar — Tayseer' }] }),
  component: TopicPage,
})

const quizItems: StrictQuizItem[] = [
  {
    q: 'ما حكم إعراب البدل (التابع) بالنسبة إلى المبدل منه (متبوعه)؟',
    options: [
      'يأخذ إعراباً ثابتاً هو الرفع دائماً',
      'يأخذ نفس إعراب المبدل منه أياً كان (رفعاً أو نصباً أو جراً)، لأنه في نية إحلاله محله',
      'يُبنى دائماً بصرف النظر عن موقعه',
      'يخالف المبدل منه في الإعراب دائماً',
    ],
    correctIndex: 1,
    a: 'البدل تابع يشارك متبوعه (المبدل منه) في إعرابه نفسه أياً كان — رفعاً أو نصباً أو جراً — لأن البدل في نية إحلاله محل المبدل منه، مثل "جاء أخوك خالدٌ" (خالدٌ بدل مرفوع من أخوك).',
  },
  {
    q: 'قابلتُ المعلمَ ___ (خالد، بدل منصوب)',
    options: ['خالداً', 'خالدٌ', 'خالدٍ', 'خالدَ'],
    correctIndex: 0,
    a: '"خالداً" بدل منصوب من "المعلمَ" لأنه يتبعه في إعرابه، والمعلم منصوب مفعول به: "قابلتُ المعلمَ خالداً".',
  },
  {
    q: 'كيف يُعرب المنادى العلم المفرد، مثل "محمد" في "يا محمدُ"؟',
    options: [
      'مبني على الضم في محل نصب',
      'منصوب دائماً بالفتحة الظاهرة',
      'مجرور بحرف النداء',
      'مرفوع بالضمة الظاهرة إعراباً لا بناءً',
    ],
    correctIndex: 0,
    a: 'العلم المفرد (غير المضاف) إذا نُودي يُبنى على الضم في محل نصب على النداء، مثل "يا محمدُ" — والضمة هنا علامة بناء لا إعراب.',
  },
  {
    q: 'إذا ناديتَ رجلاً معيناً أمامك لا تعرف اسمه بقولك "يا رجلُ"، فما إعراب "رجل"؟',
    options: [
      'نكرة مقصودة، مبنية على الضم في محل نصب كالعلم المفرد تماماً',
      'نكرة غير مقصودة، منصوبة بالفتحة',
      'مضاف، منصوب',
      'لا يجوز نداء النكرة إطلاقاً',
    ],
    correctIndex: 0,
    a: '"رجل" هنا نكرة مقصودة (تقصد شخصاً بعينه حاضراً وإن لم تعرف اسمه)، وحكمها كحكم العلم المفرد: البناء على الضم في محل نصب: "يا رجلُ".',
  },
  {
    q: 'كيف يُعرب المنادى إذا كان مضافاً، مثل "طالبَ" في "يا طالبَ العلمِ"؟',
    options: [
      'مبني على الضم كالعلم المفرد',
      'منصوب بالفتحة الظاهرة لأنه مضاف',
      'مجرور لأنه تلا حرف النداء',
      'مرفوع دائماً',
    ],
    correctIndex: 1,
    a: 'المنادى المضاف يُنصب بالفتحة الظاهرة لأنه لم يستوفِ شروط البناء (كونه مفرداً غير مضاف)، مثل "يا طالبَ العلمِ" حيث "طالبَ" منصوب وهو مضاف إلى "العلمِ" المجرور.',
  },
  {
    q: 'إذا نادى المتكلم منادىً غير معيّن (أيّ فرد من الجنس دون تخصيص)، فما إعرابه؟',
    options: [
      'نكرة غير مقصودة، منصوبة بالفتحة',
      'نكرة مقصودة، مبنية على الضم',
      'علم مفرد، مبني على الضم',
      'مضاف، منصوب',
    ],
    correctIndex: 0,
    a: 'النداء العام لأي فرد من الجنس دون تعيين شخص بذاته يُسمى نكرة غير مقصودة، وحكمها النصب بالفتحة، بخلاف النكرة المقصودة التي تُبنى على الضم.',
  },
  {
    q: 'أيّ من هذه الجمل بها خطأ نحوي؟',
    options: [
      'يا محمدُ أقبِلْ',
      'يا طالبَ العلمِ اجتهدْ',
      'يا عبدَ اللهِ استعِنْ بربك',
      'يا محمداً أقبِلْ',
    ],
    correctIndex: 3,
    a: '"محمد" علم مفرد غير مضاف، فيُبنى على الضم في محل نصب عند النداء: الصواب "يا محمدُ أقبِلْ" لا "يا محمداً" بالنصب.',
  },
  {
    q: 'هذا أخوك ___ (خالد، بدل مرفوع)',
    options: ['خالدٌ', 'خالداً', 'خالدٍ', 'خالدَ'],
    correctIndex: 0,
    a: '"خالدٌ" بدل مرفوع تابع لـ"أخوك" المرفوع، لأن البدل يطابق المبدل منه في إعرابه: "هذا أخوك خالدٌ".',
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
            Topic 28 of 47
          </p>
          <h1 className="font-serif tracking-[-0.02em] text-3xl font-bold text-foreground leading-tight mb-3">
            <span
              dir="rtl"
              lang="ar"
              style={{ fontFamily: "'Noto Naskh Arabic', serif" }}
              className="mr-2"
            >
              البدل والنداء
            </span>
            — Apposition & Vocative
          </h1>
          <p className="text-muted-foreground text-base max-w-xl">
            بدل renames or restates the preceding noun and takes the SAME case as it — not a
            fixed case. يا + vocative noun: the noun is مبني على الضم if it's a definite single
            name (يا محمدُ) or a specific-but-unnamed addressee (نكرة مقصودة), and منصوب if it's
            an idāfah (يا طالبَ العلمِ) or a non-specific indefinite call.
          </p>
        </div>
      </div>
      <div className="mx-auto w-[min(720px,calc(100%-2rem))] py-8">
        <QuizCarousel items={quizItems} />
      </div>
    </main>
  )
}

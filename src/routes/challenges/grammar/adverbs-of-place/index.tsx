import { createFileRoute, Link } from '@tanstack/react-router'
import { QuizCarousel } from '#/components/QuizCarousel'
import type { StrictQuizItem } from '#/routes/challenges/-quiz-types'

export const Route = createFileRoute('/challenges/grammar/adverbs-of-place/')({
  head: () => ({ meta: [{ title: 'Adverbs of Place — Grammar — Tayseer' }] }),
  component: TopicPage,
})

const quizItems: StrictQuizItem[] = [
  {
    q: 'أيّ من هذه الكلمات ليست من ظروف المكان؟',
    options: ['فوق', 'أمس', 'تحت', 'بين'],
    correctIndex: 1,
    a: '"أمس" ظرف زمان (يدل على وقت) لا ظرف مكان، بخلاف "فوق" و"تحت" و"بين" و"أمام" و"وراء" و"عند" و"يمين" و"يسار" التي تدل جميعها على مكان.',
  },
  {
    q: 'ما إعراب ظرف المكان مثل "فوقَ" عندما يلي الفعل؟',
    options: [
      'منصوب على الظرفية المكانية',
      'مرفوع على الفاعلية',
      'مجرور بحرف جر مقدر',
      'مبني على الفتح دائماً',
    ],
    correctIndex: 0,
    a: 'ظرف المكان يُعرب منصوباً على الظرفية المكانية (نائباً عن "في")، مثل "الكتابُ فوقَ الطاولةِ" — "فوقَ" ظرف منصوب.',
  },
  {
    q: 'الكتابُ ___ الطاولةِ (فوق)',
    options: ['فوقَ', 'فوقُ', 'فوقٍ', 'فوقاً'],
    correctIndex: 0,
    a: '"فوقَ" ظرف مكان منصوب وهو مضاف، و"الطاولةِ" مضاف إليه مجرور: "فوقَ الطاولةِ".',
  },
  {
    q: 'ما إعراب الاسم الذي يلي ظرف المكان، مثل "الطاولة" في "فوق الطاولة"؟',
    options: ['مضاف إليه مجرور', 'مفعول به منصوب', 'فاعل مرفوع', 'نعت مرفوع'],
    correctIndex: 0,
    a: 'ظرف المكان يعمل عمل المضاف، فالاسم الذي يليه مضاف إليه مجرور دائماً، مثل "الطاولةِ" في "فوقَ الطاولةِ".',
  },
  {
    q: 'القطُّ ___ السريرِ (تحت)',
    options: ['تحتَ', 'تحتُ', 'تحتٍ', 'تحتاً'],
    correctIndex: 0,
    a: '"تحتَ" ظرف مكان منصوب مضاف، و"السريرِ" مضاف إليه مجرور: "تحتَ السريرِ".',
  },
  {
    q: 'أيّ من هذه الجمل بها خطأ نحوي؟',
    options: [
      'جلستُ أمامَ المعلمِ',
      'وقفَ وراءُ البابِ',
      'المسجدُ بينَ البيتينِ',
      'جلسَ عن يمينِ الإمامِ',
    ],
    correctIndex: 1,
    a: '"وراء" ظرف مكان يجب أن يُنصب دائماً عند الدلالة على الظرفية: الصواب "وقفَ وراءَ البابِ" لا "وراءُ" بالرفع.',
  },
  {
    q: 'المسجدُ ___ البيتِ والمدرسةِ (بين)',
    options: ['بينَ', 'بينُ', 'بينٍ', 'بيناً'],
    correctIndex: 0,
    a: '"بينَ" ظرف مكان منصوب يفيد الوقوع وسط شيئين، وما بعده مضاف إليه مجرور: "بينَ البيتِ والمدرسةِ".',
  },
  {
    q: 'كيف تتغير حركة "عند" عند إضافتها إلى ياء المتكلم كما في "عندي"؟',
    options: [
      'تبقى منصوبة اسمياً لكنها تتصل بضمير متصل "ي" فتصبح "عندي" بمعنى "I have / at my place"',
      'تتحول إلى فعل',
      'تصبح حرف جر مستقل',
      'لا يجوز إضافتها إلى الضمائر إطلاقاً',
    ],
    correctIndex: 0,
    a: '"عند" ظرف مكان يُضاف إلى الأسماء والضمائر كسائر ظروف المكان، فتتصل به ياء المتكلم (ضمير مبني في محل جر مضاف إليه) لتكوّن "عندي" وتفيد الملكية أو المصاحبة، مع بقاء "عند" نفسها منصوبة على الظرفية.',
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
            Topic 21 of 47
          </p>
          <h1 className="font-serif tracking-[-0.02em] text-3xl font-bold text-foreground leading-tight mb-3">
            <span
              dir="rtl"
              lang="ar"
              style={{ fontFamily: "'Noto Naskh Arabic', serif" }}
              className="mr-2"
            >
              ظرف المكان
            </span>
            — Adverbs of Place
          </h1>
          <p className="text-muted-foreground text-base max-w-xl">
            Place adverbs like فوق، تحت، أمام، وراء، بين، عند، يمين، يسار function as ظرف —
            منصوب — when followed by a مضاف إليه: فوقَ الطاولةِ (فوق منصوب, الطاولة مجرور مضاف
            إليه).
          </p>
        </div>
      </div>
      <div className="mx-auto w-[min(720px,calc(100%-2rem))] py-8">
        <QuizCarousel items={quizItems} />
      </div>
    </main>
  )
}

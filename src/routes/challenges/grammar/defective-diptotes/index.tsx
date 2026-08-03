import { createFileRoute, Link } from '@tanstack/react-router'
import { QuizCarousel } from '#/components/QuizCarousel'
import type { StrictQuizItem } from '#/routes/challenges/-quiz-types'

export const Route = createFileRoute('/challenges/grammar/defective-diptotes/')({
  head: () => ({ meta: [{ title: 'Defective Nouns & Diptotes — Grammar — Tayseer' }] }),
  component: TopicPage,
})

const quizItems: StrictQuizItem[] = [
  {
    q: 'ما هو الاسم المنقوص؟',
    options: [
      'اسم ينتهي بياء لازمة مكسور ما قبلها، مثل "القاضي"',
      'اسم ينتهي بألف، مثل "الفتى"',
      'اسم ينتهي بواو، مثل "الدلو"',
      'اسم لا ينصرف',
    ],
    correctIndex: 0,
    a: 'الاسم المنقوص اسم معرب ينتهي بياء لازمة مكسور ما قبلها، مثل "القاضي" و"الداعي" و"الساعي".',
  },
  {
    q: 'ماذا يحدث لياء الاسم المنقوص النكرة في حالتي الرفع والجر؟',
    options: [
      'تبقى ثابتة وتُنوَّن',
      'تُحذف وتبقى الكسرة دالة عليها مع تنوين العوض، مثل "قاضٍ"',
      'تتحول إلى ألف',
      'تتحول إلى واو',
    ],
    correctIndex: 1,
    a: 'في حالتي الرفع والجر، إذا كان الاسم المنقوص نكرة، تُحذف ياؤه لفظاً وتبقى الكسرة (مع تنوين العوض) دالة عليها: "قاضٍ" لا "قاضيٌ" ولا "قاضيٍ".',
  },
  {
    q: 'ماذا يحدث لياء الاسم المنقوص النكرة في حالة النصب؟',
    options: [
      'تُحذف كما في الرفع والجر',
      'تثبت الياء وتُنوَّن بالفتح، مثل "رأيتُ قاضياً"',
      'تتحول إلى واو',
      'لا يجوز نصب الاسم المنقوص',
    ],
    correctIndex: 1,
    a: 'في حالة النصب تثبت ياء الاسم المنقوص النكرة ويظهر عليها التنوين بالفتح: "رأيتُ قاضياً" — بخلاف الرفع والجر حيث تُحذف الياء.',
  },
  {
    q: 'ماذا يحدث لياء الاسم المنقوص إذا كان معرفاً، مثل "القاضي"؟',
    options: [
      'تبقى ثابتة في جميع الحالات وتُقدَّر عليها الحركات',
      'تُحذف دائماً',
      'تتحول إلى ألف دائماً',
      'يصبح الاسم ممنوعاً من الصرف',
    ],
    correctIndex: 0,
    a: 'إذا كان الاسم المنقوص معرفاً (كـ"القاضي")، تثبت ياؤه في جميع حالات الإعراب وتُقدَّر عليها الضمة والكسرة للثقل، بينما تظهر الفتحة في النصب: "جاء القاضي"، "رأيتُ القاضيَ"، "سلّمتُ على القاضي".',
  },
  {
    q: 'ما علامة الاسم الممنوع من الصرف في حالتي الرفع والنصب؟',
    options: [
      'نفس علامات الاسم المصروف تماماً بما فيها التنوين',
      'يُرفع بالضمة ويُنصب بالفتحة كالمصروف، لكن بلا تنوين',
      'يُجر بالفتحة في الرفع والنصب معاً',
      'يُبنى في جميع حالاته',
    ],
    correctIndex: 1,
    a: 'الممنوع من الصرف يُرفع بالضمة ويُنصب بالفتحة كالاسم العادي، لكنه لا يقبل التنوين أبداً؛ والفارق الأبرز يظهر في الجر حيث يُجر بالفتحة نيابة عن الكسرة إذا كان نكرة.',
  },
  {
    q: 'كيف يُجر الاسم الممنوع من الصرف إذا كان نكرة (غير معرف بأل ولا مضاف)؟',
    options: ['بالكسرة كالمعتاد', 'بالفتحة نيابة عن الكسرة، وبلا تنوين', 'بالضمة', 'لا يجوز جره إطلاقاً'],
    correctIndex: 1,
    a: 'الاسم الممنوع من الصرف (إذا لم يكن معرفاً بأل ولا مضافاً) يُجر بالفتحة نيابة عن الكسرة وبلا تنوين، مثل "صلّيتُ في مساجدَ كثيرةٍ" — بخلاف الاسم المصروف الذي يُجر بالكسرة المنوَّنة.',
  },
  {
    q: 'أيّ الأسماء التالية ممنوع من الصرف؟',
    options: [
      '"أحمر" (وزن أفعل للألوان) و"مساجد" (وزن مفاعل جمعاً)',
      '"كتاب" و"قلم"',
      '"رجل" و"بيت"',
      '"طالب" و"معلم"',
    ],
    correctIndex: 0,
    a: 'من أبرز أسباب المنع من الصرف: وزن "أفعل" في الألوان وأفعل التفضيل (أحمر، أفضل)، وصيغ منتهى الجموع على وزن مفاعل/مفاعيل (مساجد، مصابيح)، وبعض الأعلام (كأحمد وإبراهيم ومعظم الأسماء الأعجمية).',
  },
  {
    q: 'أيّ من هذه الجمل بها خطأ نحوي؟',
    options: [
      'صلّيتُ في مساجدَ جميلةٍ',
      'صلّيتُ في مساجدٍ جميلةٍ',
      'قابلتُ رجلاً أفضلَ مني',
      'مررتُ بمصابيحَ مضيئةٍ',
    ],
    correctIndex: 1,
    a: '"مساجد" اسم ممنوع من الصرف (على وزن منتهى الجموع مفاعل)، فلا يقبل التنوين ويُجر بالفتحة: الصواب "صلّيتُ في مساجدَ جميلةٍ" لا "مساجدٍ" بالتنوين والكسر.',
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
            Topic 26 of 47
          </p>
          <h1 className="font-serif tracking-[-0.02em] text-3xl font-bold text-foreground leading-tight mb-3">
            <span
              dir="rtl"
              lang="ar"
              style={{ fontFamily: "'Noto Naskh Arabic', serif" }}
              className="mr-2"
            >
              المنقوص والممنوع من الصرف
            </span>
            — Defective Nouns & Diptotes
          </h1>
          <p className="text-muted-foreground text-base max-w-xl">
            الاسم المنقوص ends in ي preceded by kasra (القاضي) — it drops the ي in indefinite
            رفع/جر (قاضٍ) but keeps it in نصب (قاضياً) and always when definite. الممنوع من الصرف
            takes no تنوين and fatha instead of kasra in indefinite جر — categories: أفعل-pattern
            colors/elatives, certain proper names, and plurals on مفاعل/مفاعيل.
          </p>
        </div>
      </div>
      <div className="mx-auto w-[min(720px,calc(100%-2rem))] py-8">
        <QuizCarousel items={quizItems} />
      </div>
    </main>
  )
}

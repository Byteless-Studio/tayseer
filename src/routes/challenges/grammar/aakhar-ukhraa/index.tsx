import { createFileRoute, Link } from '@tanstack/react-router'
import { QuizCarousel } from '#/components/QuizCarousel'
import type { StrictQuizItem } from '#/routes/challenges/-quiz-types'

export const Route = createFileRoute('/challenges/grammar/aakhar-ukhraa/')({
  head: () => ({ meta: [{ title: 'Aakhar / Ukhraa — Grammar — Tayseer' }] }),
  component: TopicPage,
})

const quizItems: StrictQuizItem[] = [
  {
    q: 'ما صيغ "آخر" (another/other) بحسب الجنس والعدد؟',
    options: [
      'آخر (مذكر مفرد)، أخرى (مؤنث مفرد)، آخرون (مذكر جمع)، أخريات (مؤنث جمع)',
      'آخر للجميع دون تغيير',
      'أخرى للمذكر وآخر للمؤنث',
      'آخرون للمفرد وآخر للجمع',
    ],
    correctIndex: 0,
    a: '"آخر" للمفرد المذكر، و"أخرى" للمفردة المؤنثة، و"آخرون" لجمع المذكر، و"أخريات" لجمع المؤنث — وتتبع في ذلك قواعد النعت العادية.',
  },
  {
    q: 'لماذا تُعد "آخر" (بصيغة المفرد المذكر النكرة) اسماً ممنوعاً من الصرف؟',
    options: [
      'لأنها على وزن "أفعل" وهو من أوزان الممنوع من الصرف',
      'لأنها معرفة دائماً',
      'لأنها جمع تكسير',
      'لأنها اسم أعجمي',
    ],
    correctIndex: 0,
    a: '"آخر" على وزن "أفعل"، وهذا الوزن من أوزان الممنوع من الصرف في حالة التنكير، فلا تقبل التنوين وتُجر بالفتحة نيابة عن الكسرة.',
  },
  {
    q: 'قرأتُ كتاباً ___ (آخر، نصب)',
    options: ['آخرَ', 'آخرٌ', 'آخرٍ', 'آخراً'],
    correctIndex: 0,
    a: '"آخرَ" هنا نعت منصوب تابع لـ"كتاباً"، ويُنصب بالفتحة كالمعتاد (تشابه المصروف في النصب رغم كونه ممنوعاً من الصرف).',
  },
  {
    q: 'مررتُ بكتابٍ ___ (آخر، جر)',
    options: ['آخرَ', 'آخرٍ', 'آخرُ', 'آخراً'],
    correctIndex: 0,
    a: '"آخرَ" هنا نعت مجرور تابع لـ"كتابٍ"، لكنه يُجر بالفتحة نيابة عن الكسرة وبلا تنوين لأنه ممنوع من الصرف في حالة التنكير.',
  },
  {
    q: 'بم يُرفع "آخر" النكرة، وهل يُنوَّن؟',
    options: [
      'بالضمة، ولا يُنوَّن لأنه ممنوع من الصرف',
      'بالضمة، ويُنوَّن كالمعتاد',
      'بالفتحة نيابة عن الضمة',
      'لا يجوز رفعه إطلاقاً',
    ],
    correctIndex: 0,
    a: 'يُرفع "آخر" النكرة بالضمة الظاهرة (كسائر الأسماء الممنوعة من الصرف في الرفع) لكن دون تنوين: "هذا كتابٌ آخرُ".',
  },
  {
    q: 'هل "أخرى" (المؤنث) ممنوعة من الصرف أيضاً؟',
    options: [
      'نعم، فهي على وزن "فُعلى" الممنوع من الصرف، وتُعرب بحركات مقدرة على الألف المقصورة',
      'لا، فهي مصروفة تماماً وتُنوَّن',
      'لا فرق بين آخر وأخرى في هذا الحكم',
      'أخرى تُبنى دائماً على الفتح',
    ],
    correctIndex: 0,
    a: '"أخرى" على وزن "فُعلى" وهو أيضاً من أوزان الممنوع من الصرف، لكنها تنتهي بألف مقصورة فتُعرب بحركات مقدرة على الألف في جميع الحالات لتعذر ظهورها، لا بحركات ظاهرة كـ"آخر".',
  },
  {
    q: 'أيّ من هذه الجمل بها خطأ نحوي؟',
    options: [
      'عندي سيارةٌ أخرى',
      'اشتريتُ قلماً آخراً',
      'جاء طالبٌ آخرُ',
      'قابلتُ طالباتٍ أخرياتٍ',
    ],
    correctIndex: 1,
    a: '"آخر" ممنوعة من الصرف في حالة التنكير فلا تقبل التنوين: الصواب "اشتريتُ قلماً آخرَ" لا "آخراً" بالتنوين.',
  },
  {
    q: 'هل "الآخر" (معرفة بأل) ممنوعة من الصرف أيضاً؟',
    options: [
      'لا، فمنع الصرف خاص بحالة التنكير فقط؛ إذا عُرِّف الاسم عاد إلى الإعراب بالحركات الظاهرة الكاملة بما فيها الكسرة',
      'نعم، يبقى ممنوعاً من الصرف حتى بعد التعريف',
      'يصبح مبنياً',
      'لا يجوز تعريفه بأل إطلاقاً',
    ],
    correctIndex: 0,
    a: 'منع الصرف يزول إذا عُرِّف الاسم بأل التعريف أو أُضيف، فيعود الاسم إلى الإعراب الكامل بالحركات الظاهرة: "مررتُ بالكتابِ الآخرِ" بالكسرة الكاملة، لا بالفتحة كما في حالة التنكير.',
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
            Topic 27 of 47
          </p>
          <h1 className="font-serif tracking-[-0.02em] text-3xl font-bold text-foreground leading-tight mb-3">
            <span
              dir="rtl"
              lang="ar"
              style={{ fontFamily: "'Noto Naskh Arabic', serif" }}
              className="mr-2"
            >
              آخر / أخرى
            </span>
            — Another/Other
          </h1>
          <p className="text-muted-foreground text-base max-w-xl">
            آخر (masc.), أخرى (fem.), آخرون/أخريات (plural) mean "another/other". This adjective
            agrees like a normal adjective in gender and number, but the indefinite masculine
            singular form آخر is itself a diptote (ممنوع من الصرف).
          </p>
        </div>
      </div>
      <div className="mx-auto w-[min(720px,calc(100%-2rem))] py-8">
        <QuizCarousel items={quizItems} />
      </div>
    </main>
  )
}

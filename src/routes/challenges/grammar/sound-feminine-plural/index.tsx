import { createFileRoute, Link } from '@tanstack/react-router'
import { QuizCarousel } from '#/components/QuizCarousel'
import type { StrictQuizItem } from '#/routes/challenges/-quiz-types'

export const Route = createFileRoute('/challenges/grammar/sound-feminine-plural/')({
  head: () => ({ meta: [{ title: 'Sound Feminine Plural — Grammar — Tayseer' }] }),
  component: TopicPage,
})

const quizItems: StrictQuizItem[] = [
  {
    q: 'كيف يُصاغ جمع المؤنث السالم من "معلّمة"؟',
    options: ['معلّمونَ', 'معلّماتٌ', 'معلّمينَ', 'معلّمانِ'],
    correctIndex: 1,
    a: 'يُصاغ جمع المؤنث السالم بحذف التاء المربوطة وزيادة "ات": معلّمة ← معلّماتٌ.',
  },
  {
    q: 'بم يُنصب جمع المؤنث السالم؟',
    options: ['بالفتحة كسائر الأسماء', 'بالكسرة نيابة عن الفتحة', 'بالياء', 'بحذف النون'],
    correctIndex: 1,
    a: 'يُخالف جمع المؤنث السالم القاعدة العامة، فيُنصب بالكسرة نيابة عن الفتحة، بينما يُرفع بالضمة كالمعتاد ويُجر بالكسرة أيضاً.',
  },
  {
    q: 'نجحتِ الطالبـ___ في الامتحانِ (جمع، رفع)',
    options: ['الطالباتُ', 'الطالباتِ', 'الطالبونَ', 'الطالبتانِ'],
    correctIndex: 0,
    a: 'الفاعل هنا جمع مؤنث سالم مرفوع، وعلامة رفعه الضمة: "الطالباتُ".',
  },
  {
    q: 'شاهدتُ الطالبـ___ في الحفلِ (جمع، نصب)',
    options: ['الطالباتِ', 'الطالباتُ', 'الطالباتَ', 'الطالبونَ'],
    correctIndex: 0,
    a: 'المفعول به هنا جمع مؤنث سالم منصوب، وينوب عن الفتحة الكسرة: "الطالباتِ" لا "الطالباتَ".',
  },
  {
    q: 'أيّ من هذه الجمل بها خطأ نحوي؟',
    options: [
      'قابلتُ المعلماتِ في المدرسةِ',
      'إنّ المعلماتَ مجتهداتٌ',
      'جاءت المعلماتُ باكراً',
      'مررتُ بالمعلماتِ المجتهداتِ',
    ],
    correctIndex: 1,
    a: '"المعلماتِ" اسم إنّ منصوب، وجمع المؤنث السالم يُنصب بالكسرة لا بالفتحة: الصواب "إنّ المعلماتِ مجتهداتٌ".',
  },
  {
    q: 'هل يقتصر جمع المؤنث السالم على الأسماء المؤنثة العاقلة فقط؟',
    options: [
      'نعم، يقتصر على المؤنث العاقل فقط',
      'لا، فقد يُجمع به بعض الأسماء غير العاقلة أيضاً مثل "سيارة ← سيارات"',
      'نعم، ويقتصر أيضاً على الصفات دون الأسماء',
      'لا يوجد جمع مؤنث سالم لغير العاقل مطلقاً',
    ],
    correctIndex: 1,
    a: 'رغم أن جمع المؤنث السالم شائع في المؤنث العاقل (معلّمة ← معلّمات)، فإنه يُستعمل أيضاً لبعض الأسماء غير العاقلة، مثل "سيارة ← سيارات" و"حمّام ← حمّامات".',
  },
  {
    q: 'سلّمتُ على المعلمـ___ الجديداتِ (جمع، جر)',
    options: ['المعلماتِ', 'المعلماتُ', 'المعلماتَ', 'المعلمينَ'],
    correctIndex: 0,
    a: 'الاسم هنا مجرور بحرف الجر "على"، وعلامة جر جمع المؤنث السالم الكسرة: "المعلماتِ".',
  },
  {
    q: 'ما الفرق الجوهري بين علامة إعراب جمع المؤنث السالم وعلامة إعراب المثنى وجمع المذكر السالم؟',
    options: [
      'لا فرق، فكلها تُعرب بالحروف',
      'جمع المؤنث السالم يُعرب بالحركات (الضمة والكسرة) بينما المثنى وجمع المذكر السالم يُعربان بالحروف',
      'جمع المؤنث السالم يُعرب بالحروف أيضاً',
      'كلها تُبنى ولا تُعرب',
    ],
    correctIndex: 1,
    a: 'جمع المؤنث السالم يُعرب بالحركات الظاهرة على آخره (الضمة رفعاً والكسرة نصباً وجراً)، بخلاف المثنى وجمع المذكر السالم اللذين يُعربان بالحروف (الألف أو الياء في المثنى، والواو أو الياء في جمع المذكر السالم).',
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
            Topic 17 of 47
          </p>
          <h1 className="font-serif tracking-[-0.02em] text-3xl font-bold text-foreground leading-tight mb-3">
            <span
              dir="rtl"
              lang="ar"
              style={{ fontFamily: "'Noto Naskh Arabic', serif" }}
              className="mr-2"
            >
              جمع المؤنث السالم
            </span>
            — Sound Feminine Plural
          </h1>
          <p className="text-muted-foreground text-base max-w-xl">
            Sound feminine plural (<span className="font-medium text-foreground">جمع المؤنث السالم</span>)
            replaces a final تاء مربوطة with ت and adds ات. Unlike most nouns, its case is marked
            with damma in رفع but kasra — not fatha — in both نصب and جر.
          </p>
        </div>
      </div>
      <div className="mx-auto w-[min(720px,calc(100%-2rem))] py-8">
        <QuizCarousel items={quizItems} />
      </div>
    </main>
  )
}

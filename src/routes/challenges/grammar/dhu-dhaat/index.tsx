import { createFileRoute, Link } from '@tanstack/react-router'
import { QuizCarousel } from '#/components/QuizCarousel'
import type { StrictQuizItem } from '#/routes/challenges/-quiz-types'

export const Route = createFileRoute('/challenges/grammar/dhu-dhaat/')({
  head: () => ({ meta: [{ title: 'Dhū / Dhāt — Grammar — Tayseer' }] }),
  component: TopicPage,
})

const quizItems: StrictQuizItem[] = [
  {
    q: 'ما المعنى المشترك لـ"ذو" و"ذات" و"ذوو" و"ذوات"؟',
    options: ['"هذا/هذه" الإشارية', '"صاحب/صاحبة" أي possessor of', 'اسم موصول', 'حرف عطف'],
    correctIndex: 1,
    a: 'هذه الألفاظ الأربعة كلها بمعنى "صاحب" أو "صاحبة" (possessor/owner of)، وتختلف بحسب المذكر والمؤنث والمفرد والجمع.',
  },
  {
    q: 'أيّ الترتيب صحيح: (مفرد مذكر، مفرد مؤنث، جمع مذكر، جمع مؤنث)؟',
    options: [
      'ذو، ذات، ذوو، ذوات',
      'ذو، ذوات، ذات، ذوو',
      'ذات، ذو، ذوات، ذوو',
      'ذو، ذات، ذوات، ذوو',
    ],
    correctIndex: 0,
    a: '"ذو" للمفرد المذكر، و"ذات" للمفردة المؤنثة، و"ذوو" لجمع المذكر، و"ذوات" لجمع المؤنث — جميعها بمعنى صاحب/صاحبة.',
  },
  {
    q: 'هل يجوز أن تقف "ذو" وحدها دون مضاف إليه بعدها؟',
    options: [
      'نعم، تُستعمل مستقلة كأي اسم',
      'لا، فهي ملازمة للإضافة دائماً إلى اسم جنس ظاهر يدل على الصفة المملوكة',
      'نعم إذا سبقتها أل التعريف',
      'لا يوجد فرق بينها وبين "هذا"',
    ],
    correctIndex: 1,
    a: '"ذو" وأخواتها لا تقع إلا مضافة إلى اسم جنس ظاهر بعدها يبيّن الصفة أو الشيء المملوك، فلا يجوز أن تقف مستقلة بذاتها دون مضاف إليه.',
  },
  {
    q: 'هذا رجلٌ ___ مالٍ (صاحب، رفع)',
    options: ['ذو', 'ذا', 'ذي', 'ذات'],
    correctIndex: 0,
    a: '"ذو" هنا نعت مرفوع تابع لـ"رجلٌ"، ويُرفع بالواو كأحد الأسماء الخمسة: "رجلٌ ذو مالٍ".',
  },
  {
    q: 'رأيتُ رجلاً ___ مالٍ (صاحب، نصب)',
    options: ['ذا', 'ذو', 'ذي', 'ذات'],
    correctIndex: 0,
    a: '"ذا" هنا نعت منصوب تابع لـ"رجلاً"، ويُنصب بالألف كأحد الأسماء الخمسة: "رأيتُ رجلاً ذا مالٍ".',
  },
  {
    q: 'هذه امرأةٌ ___ علمٍ (صاحبة)',
    options: ['ذاتُ', 'ذو', 'ذا', 'ذي'],
    correctIndex: 0,
    a: '"ذات" صيغة المؤنث المفرد بمعنى "صاحبة"، وتُعرب بالحركات الظاهرة لا بالحروف: "امرأةٌ ذاتُ علمٍ" (ذاتُ نعت مرفوع بالضمة).',
  },
  {
    q: 'أيّ من هذه الجمل بها خطأ نحوي؟',
    options: [
      'جاء رجلٌ ذو خُلقٍ',
      'هذا ذو',
      'هؤلاء رجالٌ ذوو مالٍ',
      'هؤلاء نساءٌ ذواتُ علمٍ',
    ],
    correctIndex: 1,
    a: '"ذو" لا تقع إلا مضافة إلى اسم بعدها؛ استعمالها وحدها كما في "هذا ذو" خطأ لأنها بلا مضاف إليه، والصواب أن تُتبع دائماً باسم يبيّن الصفة المملوكة، مثل "هذا ذو مالٍ".',
  },
  {
    q: 'متى نستعمل "ذوو" ومتى نستعمل "ذوات"؟',
    options: [
      'ذوو لجمع المذكر العاقل، وذوات لجمع المؤنث، وكلاهما ملازم للإضافة',
      'ذوو للمفرد، وذوات للجمع فقط',
      'لا فرق بينهما ويُستعملان تبادلياً',
      'ذوو للمؤنث وذوات للمذكر',
    ],
    correctIndex: 0,
    a: '"ذوو" لجمع المذكر (رفعاً؛ وتصير "ذوي" نصباً وجراً كجمع المذكر السالم)، و"ذوات" لجمع المؤنث (تُعرب بالحركات كجمع المؤنث السالم)، وكلاهما ملازم للإضافة.',
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
            Topic 25 of 47
          </p>
          <h1 className="font-serif tracking-[-0.02em] text-3xl font-bold text-foreground leading-tight mb-3">
            <span
              dir="rtl"
              lang="ar"
              style={{ fontFamily: "'Noto Naskh Arabic', serif" }}
              className="mr-2"
            >
              ذو / ذات / ذوو / ذوات
            </span>
            — Possessor Of
          </h1>
          <p className="text-muted-foreground text-base max-w-xl">
            ذو (masc. sg. "possessor of"), ذات (fem. sg.), ذوو (masc. pl.), ذوات (fem. pl.) always
            take a مضاف إليه and never stand alone, meaning "possessor/owner of [quality]".
          </p>
        </div>
      </div>
      <div className="mx-auto w-[min(720px,calc(100%-2rem))] py-8">
        <QuizCarousel items={quizItems} />
      </div>
    </main>
  )
}

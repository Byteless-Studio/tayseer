import { createFileRoute, Link } from '@tanstack/react-router'
import { QuizCarousel } from '#/components/QuizCarousel'
import type { StrictQuizItem } from '#/routes/challenges/-quiz-types'

export const Route = createFileRoute('/challenges/grammar/past-tense-conjugation/')({
  head: () => ({ meta: [{ title: 'Past Tense Full Conjugation — Grammar — Tayseer' }] }),
  component: TopicPage,
})

const quizItems: StrictQuizItem[] = [
  {
    q: 'كيف يُصرَّف الفعل الماضي عبر الضمائر المختلفة؟',
    options: [
      'بالتصدير بحرف مضارعة في أوله',
      'بإضافة لواحق (ضمائر متصلة) في آخره، بينما يبقى جذره ثابتاً',
      'بتغيير الحرف الأول من الجذر نفسه',
      'لا يتغير شكل الفعل الماضي أبداً بين الضمائر',
    ],
    correctIndex: 1,
    a: 'الفعل الماضي يُصرَّف عبر الضمائر المختلفة بإضافة لواحق (ضمائر متصلة) في آخره، مثل التاء والألف والواو والنون، بينما يبقى جذر الفعل نفسه ثابتاً، كما في: كَتَبَ ← كَتَبْتُ ← كَتَبُوا.',
  },
  {
    q: 'ما هي صيغة الفعل الماضي مع ضمير "هو" (الغائب المفرد المذكر)؟',
    options: [
      'الصيغة المجردة بلا لاحقة، مثل "كَتَبَ"',
      'الصيغة مع لاحقة التاء "كَتَبَتْ"',
      'الصيغة مع لاحقة الألف "كَتَبَا"',
      'الصيغة مع لاحقة النون "كَتَبْنَ"',
    ],
    correctIndex: 0,
    a: 'صيغة "هو" هي الأصل المجرد للفعل الماضي بلا أي لاحقة ضمير متصل، مثل "كَتَبَ"، وهي القاعدة التي تُشتق منها بقية الصيغ بإضافة اللواحق المناسبة.',
  },
  {
    q: 'أكمل: أنتِ ___ الرسالةَ (الصيغة الصحيحة لـ"كتب" مع المخاطبة المفردة)',
    options: ['كَتَبْتَ', 'كَتَبْتِ', 'كَتَبَتْ', 'كَتَبْتُنَّ'],
    correctIndex: 1,
    a: 'مع ضمير "أنتِ" (المخاطبة المفردة) تُضاف لاحقة "تِ" بكسر التاء: "أنتِ كَتَبْتِ الرسالةَ"، بخلاف "كَتَبْتَ" الخاصة بالمخاطب المذكر.',
  },
  {
    q: 'ما هي صيغة الفعل الماضي "كتب" مع ضمير "هنّ" (جمع الغائبات)؟',
    options: ['كَتَبْنَ', 'كَتَبُوا', 'كَتَبَتَا', 'كَتَبَتْ'],
    correctIndex: 0,
    a: 'مع "هنّ" تُضاف لاحقة "نَ" الساكنة النون: "الطالباتُ كَتَبْنَ الدرسَ"، وهي لاحقة خاصة بجمع الإناث الغائبات.',
  },
  {
    q: 'أي من هذه الصيغ خطأ في تصريف الفعل الماضي "كتب" مع الضمير المذكور؟',
    options: ['أنتم كَتَبْتُم', 'نحن كَتَبْنَا', 'أنتما كَتَبَا', 'هم كَتَبُوا'],
    correctIndex: 2,
    a: '"أنتما" (المخاطبان) تأخذ لاحقة "تُما": الصواب "كَتَبْتُما"؛ أما "كَتَبَا" (بلا تاء) فهي صيغة "هما" للغائبَين المثنى، لا للمخاطبَين.',
  },
  {
    q: 'ماذا تدل لاحقة "تُ" (بضم التاء) في تصريف الماضي، كما في "كَتَبْتُ"؟',
    options: [
      'تدل على ضمير المتكلم المفرد "أنا"',
      'تدل على ضمير الغائب "هو"',
      'تدل على جمع المخاطبين',
      'تدل على المثنى',
    ],
    correctIndex: 0,
    a: 'لاحقة "تُ" المضمومة التاء تدل على المتكلم المفرد "أنا": "أنا كَتَبْتُ الدرسَ" (I wrote the lesson).',
  },
  {
    q: 'ما صيغة الفعل الماضي "كتب" مع "هما" حين تدل على مثنى مؤنث غائب؟',
    options: ['كَتَبَا', 'كَتَبَتَا', 'كَتَبْتُما', 'كَتَبْنَ'],
    correctIndex: 1,
    a: '"هما" للمثنى المؤنث الغائب تأخذ لاحقة "تَا": "الطالبتان كَتَبَتَا الدرسَ"، بخلاف "كَتَبَا" الخاصة بالمثنى المذكر الغائب.',
  },
  {
    q: 'أكمل: نحن ___ الدرسَ (الصيغة الصحيحة لـ"كتب" مع "نحن")',
    options: ['كَتَبْنَا', 'كَتَبْتُم', 'كَتَبُوا', 'كَتَبْنَ'],
    correctIndex: 0,
    a: 'مع "نحن" تُضاف لاحقة "نَا": "نحن كَتَبْنَا الدرسَ" (We wrote the lesson) — لا تُخلط بلاحقة "نَ" الساكنة الخاصة بـ"هنّ" فقط.',
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
            Topic 30 of 47
          </p>
          <h1 className="font-serif tracking-[-0.02em] text-3xl font-bold text-foreground leading-tight mb-3">
            <span
              dir="rtl"
              lang="ar"
              style={{ fontFamily: "'Noto Naskh Arabic', serif" }}
              className="mr-2"
            >
              تصريف الفعل الماضي
            </span>
            — Past Tense Full Conjugation
          </h1>
          <p className="text-muted-foreground text-base max-w-xl">
            The past tense conjugates entirely by SUFFIX — the root and pattern never move. The
            هو (3rd person masc. sg.) form is the unsuffixed base (كَتَبَ), and every other person
            adds a suffix onto it: ت, تِ, تما, تم, تنّ, ا, وا, تا, نَ, نا across{' '}
            <span className="font-medium text-foreground">
              هو / هي / هما / هم / هنّ / أنتَ / أنتِ / أنتما / أنتم / أنتنّ / أنا / نحن
            </span>
            .
          </p>
        </div>
      </div>
      <div className="mx-auto w-[min(720px,calc(100%-2rem))] py-8">
        <QuizCarousel items={quizItems} />
      </div>
    </main>
  )
}

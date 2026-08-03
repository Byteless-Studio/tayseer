import { createFileRoute, Link } from '@tanstack/react-router'
import { QuizCarousel } from '#/components/QuizCarousel'
import type { StrictQuizItem } from '#/routes/challenges/-quiz-types'

export const Route = createFileRoute('/challenges/grammar/prepositions/')({
  head: () => ({ meta: [{ title: 'Prepositions — Grammar — Tayseer' }] }),
  component: TopicPage,
})

const quizItems: StrictQuizItem[] = [
  {
    q: 'ما حكم إعراب الاسم الواقع بعد حرف الجر دائماً؟',
    options: ['مرفوع دائماً', 'منصوب دائماً', 'مجرور دائماً', 'يتبع حركة الفعل قبله'],
    correctIndex: 2,
    a: 'من أهم قواعد النحو العربي: كل اسم يقع مباشرة بعد حرف جر يكون مجروراً وجوباً، ويسمى التركيب بأكمله "جار ومجرور".',
  },
  {
    q: 'ذهبتُ ___ المدرسةِ (to the school) — أكمل بحرف الجر المناسب للدلالة على الاتجاه/الوجهة.',
    options: ['مِن', 'إلى', 'عن', 'مع'],
    correctIndex: 1,
    a: 'إلى حرف جر يفيد الانتهاء أو الوجهة (الاتجاه نحو شيء): "ذهبتُ إلى المدرسةِ" = "I went to the school".',
  },
  {
    q: 'خرجَ الطالبُ ___ الفصلِ (from the classroom) — أكمل بحرف الجر المناسب للدلالة على بداية الحركة/الابتداء.',
    options: ['إلى', 'على', 'مِن', 'في'],
    correctIndex: 2,
    a: 'مِن حرف جر يفيد ابتداء الغاية (بداية الحركة أو المصدر): "خرجَ الطالبُ مِن الفصلِ" = "The student left [from] the classroom".',
  },
  {
    q: 'أيّ من هذه الجمل بها خطأ نحوي في حالة الاسم بعد حرف الجر؟',
    options: ['ذهبتُ إلى المسجدِ', 'ذهبتُ إلى المسجدُ', 'صلّيتُ في المسجدِ', 'خرجتُ من المسجدِ'],
    correctIndex: 1,
    a: '"إلى المسجدُ" خطأ لأن الاسم بعد حرف الجر يجب أن يكون مجروراً؛ الصواب "إلى المسجدِ" بالكسرة.',
  },
  {
    q: 'الكتابُ ___ الطاولةِ (on the table) — أكمل بحرف الجر المناسب للدلالة على الاستعلاء.',
    options: ['على', 'عن', 'بـ', 'لـ'],
    correctIndex: 0,
    a: 'على حرف جر يفيد الاستعلاء (فوقية): "الكتابُ على الطاولةِ" = "The book is on the table".',
  },
  {
    q: 'كتبتُ ___ القلمِ (with the pen) — أكمل بحرف الجر المناسب للدلالة على الاستعانة/الآلة.',
    options: ['لـ', 'بـ', 'عن', 'إلى'],
    correctIndex: 1,
    a: 'بـ حرف جر يفيد الاستعانة أو الآلة التي تُستخدم لأداء الفعل: "كتبتُ بالقلمِ" = "I wrote with the pen".',
  },
  {
    q: 'هذا الكتابُ ___ محمدٍ (belongs to/is for Muhammad) — أكمل بحرف الجر المناسب للدلالة على الملكية/الاختصاص.',
    options: ['عن', 'مع', 'لـ', 'على'],
    correctIndex: 2,
    a: 'لـ حرف جر يفيد الملكية أو الاختصاص: "هذا الكتابُ لمحمدٍ" = "This book belongs to Muhammad".',
  },
  {
    q: 'أخذتُ الكتابَ منه — لا تظهر حركة الجر على الضمير "ـه" كما تظهر على الاسم الظاهر. Why?',
    options: [
      'لأن الضمير في هذه الحالة ليس مجروراً أصلاً',
      'لأن الضمائر المتصلة مبنية، فإعرابها (هنا الجر بحرف الجر مِن) يكون في محل جر مقدّراً لا ظاهراً في الحركة',
      'لأن حرف الجر مِن لا يجر الضمائر إطلاقاً',
      'لأن الضمير هنا فاعل لا مجرور',
    ],
    correctIndex: 1,
    a: 'الضمائر المتصلة مبنية لا تظهر عليها حركات الإعراب، فحين يتصل الضمير بحرف جر (كمنه) يكون في محل جر بحرف الجر، أي أن حالة الجر ثابتة معنىً (محلاً) لا لفظاً (حركة ظاهرة) كما يحدث مع الأسماء الظاهرة مثل "من الرجلِ".',
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
            Topic 11 of 47
          </p>
          <h1 className="font-serif tracking-[-0.02em] text-3xl font-bold text-foreground leading-tight mb-3">
            <span
              dir="rtl"
              lang="ar"
              style={{ fontFamily: "'Noto Naskh Arabic', serif" }}
              className="mr-2"
            >
              حروف الجر
            </span>
            — Prepositions
          </h1>
          <p className="text-muted-foreground text-base max-w-xl">
            من إلى في على بـ لـ عن مع — Arabic's core prepositions each carry their own shade of
            meaning (from, to, in, on, with, for, about, with-together), but they share one iron
            rule: whatever noun follows a preposition is always{' '}
            <span className="font-medium text-foreground">مجرور</span>, forming a{' '}
            <span className="font-medium text-foreground">جار ومجرور</span>. When a pronoun takes
            the noun's place (منه، له، به), that same جر case is still there — just hidden, since
            attached pronouns show no visible case ending.
          </p>
        </div>
      </div>
      <div className="mx-auto w-[min(720px,calc(100%-2rem))] py-8">
        <QuizCarousel items={quizItems} />
      </div>
    </main>
  )
}

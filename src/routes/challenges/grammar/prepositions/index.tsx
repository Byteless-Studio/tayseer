import { createFileRoute, Link } from '@tanstack/react-router'
import { QuizCarousel } from '#/components/QuizCarousel'
import type { StrictQuizItem } from '#/routes/challenges/-quiz-types'

export const Route = createFileRoute('/challenges/grammar/prepositions/')({
  head: () => ({ meta: [{ title: 'Prepositions — Grammar — Tayseer' }] }),
  component: TopicPage,
})

const quizItems: StrictQuizItem[] = [
  {
    q: 'ما حكم إعراب الاسم الواقع بعد حرف الجر دائماً؟\nWhat case is the noun that follows a preposition (حرف جر) always in?',
    options: [
      'مرفوع دائماً\nAlways مرفوع (nominative)',
      'منصوب دائماً\nAlways منصوب (accusative)',
      'مجرور دائماً\nAlways مجرور (genitive)',
      'يتبع حركة الفعل قبله\nIt copies whatever case ending the verb before it has',
    ],
    correctIndex: 2,
    a: 'من أهم قواعد النحو العربي: كل اسم يقع مباشرة بعد حرف جر يكون مجروراً وجوباً، ويسمى التركيب بأكمله "جار ومجرور".\nOne of the core rules of Arabic grammar: any noun sitting directly after a preposition is obligatorily مجرور, and the whole construction is called a جار ومجرور ("preposition-and-genitive").',
  },
  {
    q: 'ذهبتُ ___ المدرسةِ (to the school) — أكمل بحرف الجر المناسب للدلالة على الاتجاه/الوجهة.\ndhahabtu ___ l-madrasati ("I went ___ the school") — fill in the preposition that shows direction/destination.',
    options: [
      'مِن\nmin — "from"',
      'إلى\nilā — "to"',
      'عن\nʿan — "about/away from"',
      'مع\nmaʿa — "with"',
    ],
    correctIndex: 1,
    a: 'إلى حرف جر يفيد الانتهاء أو الوجهة (الاتجاه نحو شيء): "ذهبتُ إلى المدرسةِ" = "I went to the school".\nإلى is the preposition for an endpoint or destination: "ذهبتُ إلى المدرسةِ" = "I went to the school."',
  },
  {
    q: 'خرجَ الطالبُ ___ الفصلِ (from the classroom) — أكمل بحرف الجر المناسب للدلالة على بداية الحركة/الابتداء.\nkharaja ṭ-ṭālibu ___ l-faṣli ("The student left ___ the classroom") — fill in the preposition that shows the starting point of a motion.',
    options: [
      'إلى\nilā — "to"',
      'على\nʿalā — "on"',
      'مِن\nmin — "from"',
      'في\nfī — "in"',
    ],
    correctIndex: 2,
    a: 'مِن حرف جر يفيد ابتداء الغاية (بداية الحركة أو المصدر): "خرجَ الطالبُ مِن الفصلِ" = "The student left [from] the classroom".\nمِن is the preposition for the starting point (the origin of a motion or source): "خرجَ الطالبُ مِن الفصلِ" = "The student left [from] the classroom."',
  },
  {
    q: 'أيّ من هذه الجمل بها خطأ نحوي في حالة الاسم بعد حرف الجر؟\nWhich of these sentences has a grammar error in the case of the noun after the preposition?',
    options: [
      'ذهبتُ إلى المسجدِ\ndhahabtu ilā l-masjidi — "I went to the mosque"',
      'ذهبتُ إلى المسجدُ\ndhahabtu ilā l-masjidu — wrong: noun after إلى shown as مرفوع',
      'صلّيتُ في المسجدِ\nṣallaytu fī l-masjidi — "I prayed in the mosque"',
      'خرجتُ من المسجدِ\nkharajtu min al-masjidi — "I left the mosque"',
    ],
    correctIndex: 1,
    a: '"إلى المسجدُ" خطأ لأن الاسم بعد حرف الجر يجب أن يكون مجروراً؛ الصواب "إلى المسجدِ" بالكسرة.\n"إلى المسجدُ" is wrong because the noun after a preposition must be مجرور; the correct form is "إلى المسجدِ" with a kasrah.',
  },
  {
    q: 'الكتابُ ___ الطاولةِ (on the table) — أكمل بحرف الجر المناسب للدلالة على الاستعلاء.\nal-kitābu ___ ṭ-ṭāwilati ("The book is ___ the table") — fill in the preposition that shows being on top of something.',
    options: [
      'على\nʿalā — "on"',
      'عن\nʿan — "about/away from"',
      'بـ\nbi- — "with/by"',
      'لـ\nli- — "for/belonging to"',
    ],
    correctIndex: 0,
    a: 'على حرف جر يفيد الاستعلاء (فوقية): "الكتابُ على الطاولةِ" = "The book is on the table".\nعلى is the preposition for being on top of / above something: "الكتابُ على الطاولةِ" = "The book is on the table."',
  },
  {
    q: 'كتبتُ ___ القلمِ (with the pen) — أكمل بحرف الجر المناسب للدلالة على الاستعانة/الآلة.\nkatabtu ___ l-qalami ("I wrote ___ the pen") — fill in the preposition that shows the instrument/tool used.',
    options: [
      'لـ\nli- — "for/belonging to"',
      'بـ\nbi- — "with/by"',
      'عن\nʿan — "about/away from"',
      'إلى\nilā — "to"',
    ],
    correctIndex: 1,
    a: 'بـ حرف جر يفيد الاستعانة أو الآلة التي تُستخدم لأداء الفعل: "كتبتُ بالقلمِ" = "I wrote with the pen".\nبـ is the preposition for the means or instrument used to carry out the action: "كتبتُ بالقلمِ" = "I wrote with the pen."',
  },
  {
    q: 'هذا الكتابُ ___ محمدٍ (belongs to/is for Muhammad) — أكمل بحرف الجر المناسب للدلالة على الملكية/الاختصاص.\nhādhā l-kitābu ___ muḥammadin ("This book ___ Muhammad") — fill in the preposition that shows ownership/belonging.',
    options: [
      'عن\nʿan — "about/away from"',
      'مع\nmaʿa — "with"',
      'لـ\nli- — "for/belonging to"',
      'على\nʿalā — "on"',
    ],
    correctIndex: 2,
    a: 'لـ حرف جر يفيد الملكية أو الاختصاص: "هذا الكتابُ لمحمدٍ" = "This book belongs to Muhammad".\nلـ is the preposition for possession or belonging: "هذا الكتابُ لمحمدٍ" = "This book belongs to Muhammad."',
  },
  {
    q: 'أخذتُ الكتابَ منه — لماذا لا تظهر حركة الجر على الضمير "ـه" كما تظهر على الاسم الظاهر؟\nakhadhtu l-kitāba minhu ("I took the book from him") — why doesn\'t a visible case vowel for جر appear on the pronoun ـه the way it does on a regular noun?',
    options: [
      'لأن الضمير في هذه الحالة ليس مجروراً أصلاً\nBecause the pronoun is not actually مجرور in this case',
      'لأن الضمائر المتصلة مبنية، فإعرابها (هنا الجر بحرف الجر مِن) يكون في محل جر مقدّراً لا ظاهراً في الحركة\nBecause attached pronouns are مبني (indeclinable) — their case here (جر by the preposition مِن) is a position (محل), not a visible vowel',
      'لأن حرف الجر مِن لا يجر الضمائر إطلاقاً\nBecause the preposition مِن never governs pronouns at all',
      'لأن الضمير هنا فاعل لا مجرور\nBecause the pronoun here is a subject (فاعل), not مجرور',
    ],
    correctIndex: 1,
    a: 'الضمائر المتصلة مبنية لا تظهر عليها حركات الإعراب، فحين يتصل الضمير بحرف جر (كمنه) يكون في محل جر بحرف الجر، أي أن حالة الجر ثابتة معنىً (محلاً) لا لفظاً (حركة ظاهرة) كما يحدث مع الأسماء الظاهرة مثل "من الرجلِ".\nAttached pronouns are مبني, so case vowels never show on them. When a pronoun attaches to a preposition (like منه), it is in the جر position by virtue of that preposition, but this جر is understood positionally (محلاً), not pronounced as a visible vowel — unlike a regular noun such as "من الرجلِ", where the kasrah is right there to hear.',
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

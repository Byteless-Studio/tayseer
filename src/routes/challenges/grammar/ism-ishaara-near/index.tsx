import { createFileRoute, Link } from '@tanstack/react-router'
import { QuizCarousel } from '#/components/QuizCarousel'
import type { StrictQuizItem } from '#/routes/challenges/-quiz-types'

export const Route = createFileRoute('/challenges/grammar/ism-ishaara-near/')({
  head: () => ({ meta: [{ title: 'Ism Ishaara (Near) — Grammar — Tayseer' }] }),
  component: TopicPage,
})

const quizItems: StrictQuizItem[] = [
  {
    q: 'ما الفرق بين هذا وهذه؟\nWhat is the difference between هذا and هذه?',
    options: [
      'هذا للمثنى، هذه للجمع\nهذا is for the dual, هذه is for the plural',
      'هذا للإشارة إلى القريب المذكر المفرد، هذه للإشارة إلى القريب المؤنث المفرد\nهذا points to something near and masculine singular, هذه points to something near and feminine singular',
      'هذا للمؤنث، هذه للمذكر\nهذا is for feminine, هذه is for masculine',
      'لا فرق بينهما، يستخدمان بالتبادل\nThere is no difference; they are used interchangeably',
    ],
    correctIndex: 1,
    a: 'هذا اسم إشارة للمفرد المذكر القريب، وهذه اسم إشارة للمفرد المؤنث القريب — يجب أن يطابق اسم الإشارة جنس المشار إليه.\nهذا is the demonstrative for something near and masculine singular, and هذه is the demonstrative for something near and feminine singular — the demonstrative must match the gender of what it refers to.',
  },
  {
    q: 'هذا + مسجدٌ → ___ ("this is a mosque")\nهذا + مسجدٌ → ___ ("this is a mosque")',
    options: [
      'هذا مسجدٌ\nhādhā masjidun — "This is a mosque"',
      'هذه مسجدٌ\nhādhihi masjidun (incorrect — feminine هذه with masculine مسجد)',
      'هذا المسجدُ\nhādhā al-masjidu — "this [particular] mosque" (a different structure, not "this is a mosque")',
      'هذا مسجدُ\nhādhā masjidu (incorrect — missing the تنوين on the indefinite خبر)',
    ],
    correctIndex: 0,
    a: 'في هذا التركيب هذا مبتدأ ومسجدٌ خبر مرفوع نكرة — وهذا هو النمط القياسي للجملة الاسمية بعد اسم الإشارة: اسم إشارة (مبتدأ) + اسم نكرة (خبر).\nHere هذا is the مبتدأ and مسجدٌ is an indefinite مرفوع خبر — the standard pattern for a nominal sentence after a demonstrative: demonstrative (مبتدأ) + indefinite noun (خبر).',
  },
  {
    q: 'سيارةٌ (car) مؤنثة. أيّ جملة صحيحة للإشارة إليها من قريب؟\nسيارةٌ ("car") is feminine. Which sentence correctly points to it up close?',
    options: [
      'هذا سيارةٌ\nhādhā sayyāratun (incorrect — masculine هذا with feminine سيارة)',
      'هذه سيارةٌ\nhādhihi sayyāratun — "This is a car"',
      'ذلك سيارةٌ\ndhālika sayyāratun (incorrect — masculine and distant, not near)',
      'هؤلاء سيارةٌ\nhā\'ulā\'i sayyāratun (incorrect — plural هؤلاء with a singular noun)',
    ],
    correctIndex: 1,
    a: 'سيارة اسم مؤنث، فيجب استخدام هذه (اسم الإشارة المؤنث القريب) لا هذا (المذكر) — قاعدة مطابقة اسم الإشارة لجنس المشار إليه.\nسيارة is feminine, so the demonstrative must be هذه (feminine, near), not هذا (masculine) — the rule that the demonstrative agrees in gender with what it refers to.',
  },
  {
    q: 'قارن بين هذا الكتابُ وهذا كتابٌ — ما الفرق النحوي بين التركيبين؟\nCompare هذا الكتابُ and هذا كتابٌ — what is the grammatical difference between the two structures?',
    options: [
      'لا فرق، كلاهما بنفس المعنى والوظيفة\nNo difference; both have the same meaning and function',
      'الأول: هذا نعت/صفة إشارية قبل اسم معرفة (this [particular] book); الثاني: هذا مبتدأ وكتابٌ خبر نكرة (this is a book)\nFirst: هذا is a demonstrative adjective before a definite noun ("this [particular] book"); second: هذا is the مبتدأ and كتابٌ an indefinite خبر ("this is a book")',
      'الأول خطأ نحوي والثاني صحيح\nThe first is grammatically wrong and the second is correct',
      'الأول للمثنى والثاني للمفرد\nThe first is for the dual, the second for the singular',
    ],
    correctIndex: 1,
    a: 'إذا تلا اسمَ الإشارة اسمٌ معرفة بأل مباشرة (هذا الكتابُ), فاسم الإشارة صفة إشارية تخصص ذلك الاسم؛ أما إذا تلاه اسم نكرة منفصل (هذا كتابٌ), فاسم الإشارة مبتدأ والاسم النكرة خبره.\nIf a definite noun with أل follows the demonstrative directly (هذا الكتابُ), the demonstrative functions as an adjective specifying that noun; but if an indefinite noun follows as a separate word (هذا كتابٌ), the demonstrative is the مبتدأ and the indefinite noun is its خبر.',
  },
  {
    q: 'أيّ من هذه الجمل بها خطأ في مطابقة اسم الإشارة لجنس المشار إليه؟\nWhich of these sentences has an error in matching the demonstrative to the gender of what it refers to?',
    options: [
      'هذا رجلٌ\nhādhā rajulun — "This is a man" (correct)',
      'هذه امرأةٌ\nhādhihi imra\'atun — "This is a woman" (correct)',
      'هذا سيارةٌ\nhādhā sayyāratun (incorrect — masculine هذا with feminine سيارة)',
      'هذه مدرسةٌ\nhādhihi madrasatun — "This is a school" (correct)',
    ],
    correctIndex: 2,
    a: '"هذا سيارةٌ" خطأ لأن سيارة اسم مؤنث ويجب أن يسبقها اسم الإشارة المؤنث هذه، فالصواب "هذه سيارةٌ".\n"هذا سيارةٌ" is wrong because سيارة is feminine and needs the feminine demonstrative هذه before it; the correct form is "هذه سيارةٌ".',
  },
  {
    q: 'اسم الإشارة هذا مبني (indeclinable). What does مبني mean in this context?\nاسم الإشارة هذا مبني (indeclinable). What does مبني mean in this context?',
    options: [
      'أن آخره يتغير حسب موقعه الإعرابي في الجملة (رفع/نصب/جر)\nThat its ending changes according to its grammatical position in the sentence (nominative/accusative/genitive)',
      'أن شكله وحركة آخره ثابتان لا تتغيران أبداً بتغير موقعه في الجملة\nThat its form and final vowel are fixed and never change, regardless of its position in the sentence',
      'أنه لا يمكن استخدامه في بداية الجملة\nThat it can never be used at the start of a sentence',
      'أنه يُعرب دائماً بحركات مقدرة\nThat it always takes estimated (مقدرة) case markers',
    ],
    correctIndex: 1,
    a: 'المبني اسم لا تتغير حركة آخره بتغير موقعه في الجملة، بخلاف المُعرَب. اسم الإشارة هذا مبني على السكون في كل المواضع، سواء كان مبتدأ أو مفعولاً به أو غير ذلك.\nA مبني word\'s final vowel never changes with its position in the sentence, unlike a مُعرَب word. The demonstrative هذا is مبني على السكون in every position — whether it is a مبتدأ, a مفعول به, or anything else.',
  },
  {
    q: 'هذه الطالبةُ مجتهدةٌ — What role does هذه play here?\nهذه الطالبةُ مجتهدةٌ — what role does هذه play here?',
    options: [
      'خبر مقدم\nA fronted predicate (خبر مقدم)',
      'صفة إشارية تخصص الاسم المعرفة "الطالبة" (this [particular] student)\nA demonstrative adjective specifying the definite noun "الطالبة" ("this [particular] student")',
      'حرف جر\nA preposition (حرف جر)',
      'مفعول به\nA direct object (مفعول به)',
    ],
    correctIndex: 1,
    a: 'لأن الطالبة اسم معرفة بأل يلي اسم الإشارة مباشرة، فهذه هنا صفة إشارية للطالبة (وليست مبتدأ مستقلاً), وبعدها يأتي الخبر الحقيقي للجملة: مجتهدةٌ.\nBecause الطالبة is a definite noun with أل directly following the demonstrative, هذه here is a demonstrative adjective for الطالبة (not an independent مبتدأ) — the real خبر of the sentence comes after it: مجتهدةٌ.',
  },
  {
    q: 'لماذا لا يتأثر اسم الإشارة هذا بموقعه الإعرابي (مبتدأ، مفعول به، مضاف إليه...) من حيث الحركة؟\nWhy is the demonstrative هذا unaffected — in terms of its ending — by its grammatical position (مبتدأ, مفعول به, مضاف إليه...)?',
    options: [
      'لأنه اسم نكرة لا يقبل التعريف\nBecause it is an indefinite noun that cannot become definite',
      'لأنه اسم مبني، والأسماء المبنية لا تتغير حركة آخرها بتغير العامل\nBecause it is مبني, and مبني words never change their ending with the governing factor (العامل)',
      'لأنه دائماً في محل رفع فقط\nBecause it is always in the nominative position only',
      'لأنه ممنوع من الصرف\nBecause it is a diptote (ممنوع من الصرف)',
    ],
    correctIndex: 1,
    a: 'أسماء الإشارة من الأسماء المبنية في العربية، فحركة آخرها ثابتة (هنا السكون) بصرف النظر عن موقعها الإعرابي في الجملة، على عكس الأسماء المعربة التي تتغير حركتها حسب العامل.\nDemonstratives are among the مبني nouns in Arabic, so their final vowel is fixed (سكون here) regardless of their grammatical position, unlike مُعرَب nouns whose ending changes with the governing factor.',
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
            Topic 3 of 47
          </p>
          <h1 className="font-serif tracking-[-0.02em] text-3xl font-bold text-foreground leading-tight mb-3">
            <span
              dir="rtl"
              lang="ar"
              style={{ fontFamily: "'Noto Naskh Arabic', serif" }}
              className="mr-2"
            >
              هذا / هذه
            </span>
            — Ism Ishaara (Near)
          </h1>
          <p className="text-muted-foreground text-base max-w-xl">
            هذا (masculine) and هذه (feminine) point to something near, and must agree in gender
            with what they refer to. They work two ways: as the{' '}
            <span className="font-medium text-foreground">مبتدأ</span> of a nominal sentence
            followed by an indefinite خبر (هذا كتابٌ — "this is a book"), or as a demonstrative
            adjective placed directly before a definite noun (هذا الكتابُ — "this book"). Either
            way, both words are <span className="font-medium text-foreground">مبني</span> — their
            ending never changes regardless of case.
          </p>
        </div>
      </div>
      <div className="mx-auto w-[min(720px,calc(100%-2rem))] py-8">
        <QuizCarousel items={quizItems} />
      </div>
    </main>
  )
}

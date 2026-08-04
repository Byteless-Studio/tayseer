import { createFileRoute, Link } from '@tanstack/react-router'
import { QuizCarousel } from '#/components/QuizCarousel'
import type { StrictQuizItem } from '#/routes/challenges/-quiz-types'

export const Route = createFileRoute('/challenges/grammar/five-nouns/')({
  head: () => ({ meta: [{ title: 'The Five Nouns — Grammar — Tayseer' }] }),
  component: TopicPage,
})

const quizItems: StrictQuizItem[] = [
  {
    q: 'ما الأسماء الخمسة؟\nWhat are the Five Nouns (الأسماء الخمسة)?',
    options: [
      'أب، أخ، حم، فو، ذو\nab, akh, ḥam, fū, dhū — father, brother, father-in-law, mouth, possessor-of',
      'أب، أخت، ابن، بنت، حم\nab, ukht, ibn, bint, ḥam — father, sister, son, daughter, father-in-law',
      'أنا، أنت، هو، هي، نحن\nanā, anta, huwa, hiya, naḥnu — I, you, he, she, we (personal pronouns)',
      'كتاب، قلم، باب، بيت، شمس\nkitāb, qalam, bāb, bayt, shams — book, pen, door, house, sun',
    ],
    correctIndex: 0,
    a: 'الأسماء الخمسة هي: أب، أخ، حم (بمعنى قريب الزوج أو الزوجة)، فو (بمعنى الفم)، ذو (بمعنى صاحب).\nThe Five Nouns are: أب (father), أخ (brother), حم (a relative by marriage), فو (mouth), and ذو (possessor of).',
  },
  {
    q: 'جاء ___ محمدٍ (أبو، رفع)\njāʾa ___ Muḥammadin — fill in أبو (nominative case): the father of Muhammad came',
    options: [
      'أبو\nabū — nominative (رفع) form of "father"',
      'أبا\nabā — accusative (نصب) form of "father"',
      'أبي\nabī — genitive (جر) form of "father"',
      'أب\nab — the bare form, with no case ending shown',
    ],
    correctIndex: 0,
    a: '"أب" هنا مضاف إلى اسم ظاهر ("محمد") لا إلى ياء المتكلم، فيُرفع بالواو نيابة عن الضمة: "أبو محمدٍ".\nHere أب is مضاف to an explicit noun ("محمد"), not to ياء المتكلم ("my"), so it takes رفع with و in place of the usual ضمة: "أبو محمدٍ" — "the father of Muhammad."',
  },
  {
    q: 'رأيتُ ___ محمدٍ (أبا، نصب)\nraʾaytu ___ Muḥammadin — fill in أبا (accusative case): I saw the father of Muhammad',
    options: [
      'أبا\nabā — accusative (نصب) form of "father"',
      'أبو\nabū — nominative (رفع) form of "father"',
      'أبي\nabī — genitive (جر) form of "father"',
      'أب\nab — the bare form, with no case ending shown',
    ],
    correctIndex: 0,
    a: 'يُنصب من الأسماء الخمسة بالألف نيابة عن الفتحة عندما يكون مضافاً لغير ياء المتكلم: "رأيتُ أبا محمدٍ".\nThe Five Nouns take ا for نصب, in place of the usual فتحة, when مضاف to something other than ياء المتكلم: "رأيتُ أبا محمدٍ" — "I saw the father of Muhammad."',
  },
  {
    q: 'سلّمتُ على ___ محمدٍ (أبي، جر)\nsallamtu ʿalā ___ Muḥammadin — fill in أبي (genitive case): I greeted the father of Muhammad',
    options: [
      'أبي\nabī — genitive (جر) form of "father"',
      'أبو\nabū — nominative (رفع) form of "father"',
      'أبا\nabā — accusative (نصب) form of "father"',
      'أب\nab — the bare form, with no case ending shown',
    ],
    correctIndex: 0,
    a: 'يُجر من الأسماء الخمسة بالياء نيابة عن الكسرة عندما يكون مضافاً لغير ياء المتكلم: "سلّمتُ على أبي محمدٍ".\nThe Five Nouns take ي for جر, in place of the usual كسرة, when مضاف to something other than ياء المتكلم: "سلّمتُ على أبي محمدٍ" — "I greeted the father of Muhammad."',
  },
  {
    q: 'ماذا يحدث لإعراب "أب" عندما يُضاف إلى ياء المتكلم كما في "أبي"؟\nWhat happens to the case-marking of أب when it is مضاف to ياء المتكلم ("my"), as in أبي?',
    options: [
      'يبقى معرباً بالحروف (و/ا/ي) كالمعتاد\nIt keeps marking case with the letters و/ا/ي as usual',
      'يخرج عن قاعدة الأسماء الخمسة وتلزم صورة واحدة بالياء ويُقدَّر إعرابه\nIt leaves the Five Nouns pattern: the word fixes into one form ending in ي, and its case is only understood (مقدَّر), not shown',
      'يُصبح مبنياً على الضم دائماً\nIt becomes permanently built (مبني) on ضم',
      'لا يجوز إضافته إلى ياء المتكلم إطلاقاً\nIt can never be مضاف to ياء المتكلم at all',
    ],
    correctIndex: 1,
    a: 'إذا أُضيف أحد الأسماء الخمسة إلى ياء المتكلم (مثل "أبي") لزمت الكلمة صورة واحدة بالياء، وخرجت عن إعرابها بالحروف، فيُقدَّر إعرابها (رفعاً ونصباً وجراً) على ما قبل ياء المتكلم منع من ظهوره اشتغال المحل بحركة الياء المناسبة.\nIf one of the Five Nouns is مضاف to ياء المتكلم (as in أبي), the word fixes into a single form ending in ي, leaving behind its و/ا/ي case-marking. Its case (رفع, نصب, or جر) is then only understood (مقدَّر) on the letter before the ياء, blocked from appearing because that spot is already taken by the vowel the ياء requires.',
  },
  {
    q: 'أيّ من هذه الجمل بها خطأ نحوي؟\nWhich of these sentences contains a grammatical error?',
    options: [
      'جاء أخو خالدٍ\njāʾa akhū Khālidin — the brother of Khalid came',
      'رأيتُ أخو خالدٍ\nraʾaytu akhū Khālidin',
      'سلّمتُ على أخي خالدٍ\nsallamtu ʿalā akhī Khālidin — I greeted the brother of Khalid',
      'هذا ذو مالٍ\nhādhā dhū mālin — this is a man of wealth',
    ],
    correctIndex: 1,
    a: '"أخو" هنا مفعول به منصوب، ويُنصب من الأسماء الخمسة بالألف: الصواب "رأيتُ أخا خالدٍ" لا "أخو".\nHere أخو is the direct object (مفعول به), so it must be منصوب — and the Five Nouns mark نصب with ا. The correct form is رأيتُ أخا خالدٍ, not أخو.',
  },
  {
    q: 'ما معنى "ذو" من الأسماء الخمسة؟\nWhat does ذو mean among the Five Nouns?',
    options: [
      'بمعنى "صاحب"، ولا يُستعمل إلا مضافاً إلى اسم بعده\nIt means "possessor of," and is only ever used مضاف to a noun that follows it',
      'بمعنى "هذا"\nIt means "this" (a demonstrative)',
      'حرف جر\nIt is a preposition (حرف جر)',
      'بمعنى "الذي" الاسم الموصول\nIt means "who/which" — a relative pronoun (اسم موصول)',
    ],
    correctIndex: 0,
    a: '"ذو" من الأسماء الخمسة بمعنى "صاحب"، ولا يقع إلا مضافاً إلى اسم جنس ظاهر بعده يدل على ما يُملَك أو يُتصف به، مثل "رجلٌ ذو مالٍ" (رجل صاحب مال).\nذو among the Five Nouns means "possessor of." It only occurs مضاف to an explicit generic noun that follows it, naming what is owned or the quality held — رجلٌ ذو مالٍ, "a man of wealth."',
  },
  {
    q: 'هذا ___ الأسدِ (فو، رفع، بمعنى فم الأسد)\nhādhā ___ al-asadi — fill in فو (nominative case): this is the mouth of the lion',
    options: [
      'فو\nfū — nominative (رفع) form of "mouth"',
      'فا\nfā — accusative (نصب) form of "mouth"',
      'في\nfī — genitive (جر) form of "mouth" (identical in spelling to the preposition "in")',
      'فم\nfam — the ordinary word for "mouth," not one of the Five Nouns',
    ],
    correctIndex: 0,
    a: '"فو" (بمعنى الفم) من الأسماء الخمسة، ويُرفع بالواو إذا أُضيف لغير ياء المتكلم: "هذا فو الأسدِ" — واللفظ الشائع "فم" ليس من الأسماء الخمسة، ويُعرب بالحركات العادية.\nفو ("mouth") is one of the Five Nouns and takes و for رفع when مضاف to something other than ياء المتكلم: هذا فو الأسدِ — "this is the mouth of the lion." The common word فم is not one of the Five Nouns, and is case-marked with ordinary vowels.',
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
            Topic 24 of 47
          </p>
          <h1 className="font-serif tracking-[-0.02em] text-3xl font-bold text-foreground leading-tight mb-3">
            <span
              dir="rtl"
              lang="ar"
              style={{ fontFamily: "'Noto Naskh Arabic', serif" }}
              className="mr-2"
            >
              الأسماء الخمسة
            </span>
            — The Five Nouns
          </h1>
          <p className="text-muted-foreground text-base max-w-xl">
            <bdi lang="ar">أب، أخ، حم، فو، ذو</bdi> ("possessor of") take <bdi lang="ar">و</bdi> in <bdi lang="ar">رفع</bdi>, <bdi lang="ar">ا</bdi> in <bdi lang="ar">نصب</bdi>, <bdi lang="ar">ي</bdi> in <bdi lang="ar">جر</bdi> — but ONLY when
            <bdi lang="ar">مضاف</bdi> to something other than <bdi lang="ar">ياء المتكلم</bdi> ("my").
          </p>
        </div>
      </div>
      <div className="mx-auto w-[min(720px,calc(100%-2rem))] py-8">
        <QuizCarousel items={quizItems} />
      </div>
    </main>
  )
}

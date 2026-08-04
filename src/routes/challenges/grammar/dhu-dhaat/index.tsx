import { createFileRoute, Link } from '@tanstack/react-router'
import { QuizCarousel } from '#/components/QuizCarousel'
import type { StrictQuizItem } from '#/routes/challenges/-quiz-types'

export const Route = createFileRoute('/challenges/grammar/dhu-dhaat/')({
  head: () => ({ meta: [{ title: 'Dhū / Dhāt — Grammar — Tayseer' }] }),
  component: TopicPage,
})

const quizItems: StrictQuizItem[] = [
  {
    q: 'ما المعنى المشترك لـ"ذو" و"ذات" و"ذوو" و"ذوات"؟\nWhat meaning do "ذو", "ذات", "ذوو", and "ذوات" all share?',
    options: [
      '"هذا/هذه" الإشارية\nThe demonstrative "this" (هذا/هذه)',
      '"صاحب/صاحبة" أي possessor of\n"صاحب/صاحبة" — i.e., "possessor of"',
      'اسم موصول\nA relative pronoun',
      'حرف عطف\nA conjunction',
    ],
    correctIndex: 1,
    a: 'هذه الألفاظ الأربعة كلها بمعنى "صاحب" أو "صاحبة" (possessor/owner of)، وتختلف بحسب المذكر والمؤنث والمفرد والجمع.\nAll four of these words mean "صاحب" or "صاحبة" ("possessor/owner of"), and they differ according to gender (masculine/feminine) and number (singular/plural).',
  },
  {
    q: 'أيّ الترتيب صحيح: (مفرد مذكر، مفرد مؤنث، جمع مذكر، جمع مؤنث)؟\nWhich order is correct for (masc. sg., fem. sg., masc. pl., fem. pl.)?',
    options: [
      'ذو، ذات، ذوو، ذوات\nذو, ذات, ذوو, ذوات — the correct order',
      'ذو، ذوات، ذات، ذوو\nswaps the two plural forms',
      'ذات، ذو، ذوات، ذوو\nswaps masculine and feminine throughout',
      'ذو، ذات، ذوات، ذوو\nswaps the two plural forms',
    ],
    correctIndex: 0,
    a: '"ذو" للمفرد المذكر، و"ذات" للمفردة المؤنثة، و"ذوو" لجمع المذكر، و"ذوات" لجمع المؤنث — جميعها بمعنى صاحب/صاحبة.\n"ذو" is masculine singular, "ذات" is feminine singular, "ذوو" is masculine plural, and "ذوات" is feminine plural — all meaning "possessor/owner of".',
  },
  {
    q: 'هل يجوز أن تقف "ذو" وحدها دون مضاف إليه بعدها؟\nCan "ذو" stand alone without a مضاف إليه after it?',
    options: [
      'نعم، تُستعمل مستقلة كأي اسم\nYes, it is used independently like any noun',
      'لا، فهي ملازمة للإضافة دائماً إلى اسم جنس ظاهر يدل على الصفة المملوكة\nNo — it must always be in idāfah with a following noun that names the quality possessed',
      'نعم إذا سبقتها أل التعريف\nYes, if preceded by the definite article أل',
      'لا يوجد فرق بينها وبين "هذا"\nThere is no difference between it and "هذا"',
    ],
    correctIndex: 1,
    a: '"ذو" وأخواتها لا تقع إلا مضافة إلى اسم جنس ظاهر بعدها يبيّن الصفة أو الشيء المملوك، فلا يجوز أن تقف مستقلة بذاتها دون مضاف إليه.\n"ذو" and its sister forms only ever occur in idāfah with a following noun that names the quality or thing possessed — they can never stand alone without a مضاف إليه.',
  },
  {
    q: 'هذا رجلٌ ___ مالٍ (صاحب، رفع)\nhādhā rajulun ___ mālin (صاحب, nominative) — "This is a man of wealth"',
    options: [
      'ذو\ndhū — nominative',
      'ذا\ndhā — accusative',
      'ذي\ndhī — genitive',
      'ذات\ndhāt — feminine singular',
    ],
    correctIndex: 0,
    a: '"ذو" هنا نعت مرفوع تابع لـ"رجلٌ"، ويُرفع بالواو كأحد الأسماء الخمسة: "رجلٌ ذو مالٍ".\n"ذو" here is an adjective (نعت) in the nominative, agreeing with "رجلٌ", and it is marked nominative with و as one of the "five nouns" (الأسماء الخمسة): "رجلٌ ذو مالٍ".',
  },
  {
    q: 'رأيتُ رجلاً ___ مالٍ (صاحب، نصب)\nra\'aytu rajulan ___ mālin (صاحب, accusative) — "I saw a man of wealth"',
    options: [
      'ذا\ndhā — accusative',
      'ذو\ndhū — nominative',
      'ذي\ndhī — genitive',
      'ذات\ndhāt — feminine singular',
    ],
    correctIndex: 0,
    a: '"ذا" هنا نعت منصوب تابع لـ"رجلاً"، ويُنصب بالألف كأحد الأسماء الخمسة: "رأيتُ رجلاً ذا مالٍ".\n"ذا" here is an adjective (نعت) in the accusative, agreeing with "رجلاً", and it is marked accusative with ا as one of the "five nouns": "رأيتُ رجلاً ذا مالٍ".',
  },
  {
    q: 'هذه امرأةٌ ___ علمٍ (صاحبة)\nhādhihi imra\'atun ___ ʿilmin (صاحبة) — "This is a woman of knowledge"',
    options: [
      'ذاتُ\ndhātu — nominative, marked with a regular vowel',
      'ذو\ndhū — masculine',
      'ذا\ndhā — masculine accusative',
      'ذي\ndhī — masculine genitive',
    ],
    correctIndex: 0,
    a: '"ذات" صيغة المؤنث المفرد بمعنى "صاحبة"، وتُعرب بالحركات الظاهرة لا بالحروف: "امرأةٌ ذاتُ علمٍ" (ذاتُ نعت مرفوع بالضمة).\n"ذات" is the feminine singular form, meaning "صاحبة" ("possessor", fem.), and — unlike ذو/ذا/ذي — it is inflected with regular vowels, not letters: "امرأةٌ ذاتُ علمٍ" ("a woman of knowledge"), where ذاتُ is an adjective in the nominative, marked with ḍamma.',
  },
  {
    q: 'أيّ من هذه الجمل بها خطأ نحوي؟\nWhich of these sentences contains a grammatical error?',
    options: [
      'جاء رجلٌ ذو خُلقٍ\n"A man of good character came"',
      'هذا ذو\n"This is ذو" — with no مضاف إليه, the error',
      'هؤلاء رجالٌ ذوو مالٍ\n"These are men of wealth"',
      'هؤلاء نساءٌ ذواتُ علمٍ\n"These are women of knowledge"',
    ],
    correctIndex: 1,
    a: '"ذو" لا تقع إلا مضافة إلى اسم بعدها؛ استعمالها وحدها كما في "هذا ذو" خطأ لأنها بلا مضاف إليه، والصواب أن تُتبع دائماً باسم يبيّن الصفة المملوكة، مثل "هذا ذو مالٍ".\n"ذو" only ever occurs in idāfah with a following noun; using it alone, as in "هذا ذو", is wrong because it has no مضاف إليه — it must always be followed by a noun naming the quality possessed, like "هذا ذو مالٍ" ("This is a man of wealth").',
  },
  {
    q: 'متى نستعمل "ذوو" ومتى نستعمل "ذوات"؟\nWhen do we use "ذوو" and when do we use "ذوات"?',
    options: [
      'ذوو لجمع المذكر العاقل، وذوات لجمع المؤنث، وكلاهما ملازم للإضافة\nذوو for a rational masculine plural, and ذوات for a feminine plural — both always require idāfah',
      'ذوو للمفرد، وذوات للجمع فقط\nذوو for singular, and ذوات for plural only',
      'لا فرق بينهما ويُستعملان تبادلياً\nThere is no difference, and they are used interchangeably',
      'ذوو للمؤنث وذوات للمذكر\nذوو for feminine and ذوات for masculine',
    ],
    correctIndex: 0,
    a: '"ذوو" لجمع المذكر (رفعاً؛ وتصير "ذوي" نصباً وجراً كجمع المذكر السالم)، و"ذوات" لجمع المؤنث (تُعرب بالحركات كجمع المؤنث السالم)، وكلاهما ملازم للإضافة.\n"ذوو" is for the masculine plural (in the nominative; it becomes "ذوي" in the accusative and genitive, like a sound masculine plural), and "ذوات" is for the feminine plural (inflected with regular vowels, like a sound feminine plural) — both always require idāfah.',
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

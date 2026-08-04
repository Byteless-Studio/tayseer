import { createFileRoute, Link } from '@tanstack/react-router'
import { QuizCarousel } from '#/components/QuizCarousel'
import type { StrictQuizItem } from '#/routes/challenges/-quiz-types'

export const Route = createFileRoute('/challenges/grammar/definiteness-tanwin/')({
  head: () => ({ meta: [{ title: 'Definiteness & Tanwīn — Grammar — Tayseer' }] }),
  component: TopicPage,
})

const quizItems: StrictQuizItem[] = [
  {
    q: 'ما الفرق الأساسي بين الاسم النكرة (nakirah) والاسم المعرفة (maʿrifah)؟\nWhat is the basic difference between an indefinite noun (نكرة) and a definite noun (معرفة)?',
    options: [
      'النكرة تدل على شيء غير محدد ("a/an ..."), والمعرفة تدل على شيء محدد معروف ("the ...")\nنكرة marks something unspecified ("a/an..."), while معرفة marks something specific and known ("the...")',
      'النكرة مرفوعة دائماً، والمعرفة منصوبة دائماً\nنكرة is always مرفوع (nominative), and معرفة is always منصوب (accusative)',
      'النكرة للمذكر فقط، والمعرفة للمؤنث فقط\nنكرة is only for masculine nouns, and معرفة is only for feminine nouns',
      'لا فرق بينهما؛ هما مترادفان في الاستعمال\nThere is no difference; the two terms are used interchangeably',
    ],
    correctIndex: 0,
    a: 'النكرة اسم عام غير محدد (كتابٌ = "a book"), بينما المعرفة اسم محدد معروف بعينه للمخاطب (الكتابُ = "the book"). هذا التمييز هو أساس معظم قواعد النحو المتعلقة بالتعريف.\nنكرة is a general, unspecified noun (كتابٌ = "a book"), while معرفة is a specific noun known to the listener (الكتابُ = "the book"). This distinction underlies most of the grammar rules about definiteness.',
  },
  {
    q: 'تنوين مثل ـٌ ـً ـٍ يظهر في النطق على آخر الاسم النكرة. بماذا ينطق تحديداً؟\nTanwīn — endings like ـٌ ـً ـٍ — shows up in speech at the end of an indefinite noun. What exactly is it pronounced as?',
    options: [
      'بنون ساكنة منطوقة غير مكتوبة تدل على أن الاسم نكرة\nAn unwritten spoken "n" sound (a silent nūn) that marks the noun as indefinite',
      'بحرف الألف المكتوب فقط\nAs the written letter alif alone',
      'بشدّة على أول الكلمة\nAs a shaddah on the first letter of the word',
      'بحذف آخر حرف من الكلمة\nBy dropping the last letter of the word',
    ],
    correctIndex: 0,
    a: 'التنوين هو نون ساكنة زائدة تُنطق آخر الاسم ولا تُكتب حرفاً، وهي العلامة الصوتية القياسية التي تدل على أن الاسم نكرة (غير محدد).\nTanwīn is an extra "n" sound pronounced at the end of the noun but never written as a letter — it is the standard spoken marker that a noun is نكرة (indefinite).',
  },
  {
    q: 'كتابٌ (نكرة، بمعنى "a book") تصبح الكتابُ ("the book") بعد إضافة أل. ماذا يحدث للتنوين؟\nكتابٌ (indefinite, "a book") becomes الكتابُ ("the book") once أل is added. What happens to the تنوين?',
    options: [
      'يبقى كما هو تماماً\nIt stays exactly as it was',
      'يسقط تماماً — أل والتنوين لا يجتمعان أبداً على كلمة واحدة\nIt is dropped entirely — أل and تنوين never co-occur on the same word',
      'يتحول إلى شدّة\nIt changes into a shaddah',
      'ينتقل إلى أول حرف من الكلمة\nIt moves to the first letter of the word',
    ],
    correctIndex: 1,
    a: 'أل التعريف وتنوين النكرة يتنافيان: الاسم إما نكرة (يحمل تنويناً) أو معرفة بأل (بلا تنوين), فلا يمكن أن يجتمع الاثنان على اسم واحد.\nأل and تنوين are mutually exclusive: a noun is either نكرة (indefinite, carrying تنوين) or معرفة with أل (definite, with no تنوين) — the two can never appear together on one word.',
  },
  {
    q: 'كتابٌ + ياء المتكلم (my) → ___ (fill in the blank)\nكتابٌ + the 1st-person possessive ياء ("my") → ___ (fill in the blank)',
    options: [
      'كتابٌي\nkitābun-ī',
      'كتابي\nkitābī — "my book"',
      'كتابٍي\nkitābin-ī',
      'كِتاباً ي\nkitāban-ī',
    ],
    correctIndex: 1,
    a: 'إضافة ضمير متصل مثل ياء المتكلم تجعل الاسم معرفة بالإضافة إلى الضمير، فيسقط التنوين تماماً: كتابي = "my book" بلا تنوين، تماماً كما يسقط عند دخول أل.\nAttaching a pronoun like ياء المتكلم makes the noun definite through idāfah to the pronoun, so the تنوين drops completely: كتابي = "my book," with no تنوين — exactly as it drops when أل is added.',
  },
  {
    q: 'أيّ من هذه الجمل بها خطأ نحوي متعلق بالتنوين والتعريف؟\nWhich of these sentences contains a grammar mistake related to تنوين and definiteness?',
    options: [
      'رأيتُ كتاباً جديداً\nra\'aytu kitāban jadīdan — "I saw a new book"',
      'رأيتُ الكتابٌ الجديدُ\nra\'aytu al-kitābun al-jadīdu',
      'هذا كتابُ محمدٍ\nhādhā kitābu Muḥammadin — "This is Muhammad\'s book"',
      'رأيتُ الكتابَ الجديدَ\nra\'aytu al-kitāba al-jadīda — "I saw the new book"',
    ],
    correctIndex: 1,
    a: 'الجملة "رأيتُ الكتابٌ الجديدُ" خاطئة لأنها جمعت بين أل التعريف والتنوين على كلمة واحدة (الكتابٌ), وهذا غير جائز؛ الصواب "الكتابَ" بلا تنوين لأن أل موجودة.\nThe sentence "رأيتُ الكتابٌ الجديدُ" is wrong because it combines أل with تنوين on the same word (الكتابٌ), which is never allowed; the correct form is "الكتابَ" with no تنوين, since أل is already present.',
  },
  {
    q: 'أيّ من هذه الأسماء معرفة بذاتها من غير حاجة إلى أل أو إضافة؟\nWhich of these nouns is inherently definite, needing neither أل nor idāfah to become so?',
    options: [
      'بيتٌ\nbaytun — "a house" (indefinite)',
      'إبراهيمُ\nIbrāhīmu — "Ibrahim" (a proper noun)',
      'رجلٌ\nrajulun — "a man" (indefinite)',
      'طالبةٌ\nṭālibatun — "a [female] student" (indefinite)',
    ],
    correctIndex: 1,
    a: 'اسم العَلَم مثل إبراهيمُ معرفة بذاته لأنه يشير إلى شخص بعينه دون حاجة لأل، وهو أيضاً ممنوع من الصرف فلا يُنوَّن أصلاً — على عكس الأسماء النكرة الثلاثة الأخرى التي تحمل تنويناً ظاهراً.\nA proper noun (علم) like إبراهيمُ is inherently definite because it names one specific person, with no need for أل. It is also ممنوع من الصرف (diptote), so it never takes تنوين at all — unlike the other three indefinite nouns here, which all carry visible تنوين.',
  },
  {
    q: 'هذا (this) وهو (he) كلاهما معرفة بذاتهما دون أل أو إضافة. Why?\nهذا (this) and هو (he) are both inherently definite without أل or idāfah. Why?',
    options: [
      'لأنهما اسم إشارة وضمير، وكلاهما نوع مستقل من أنواع المعرفة السبعة\nBecause one is a demonstrative and the other a pronoun — each is its own independent category among the types of معرفة',
      'لأنهما مبنيان على الفتح دائماً في كل موضع\nBecause both are always مبني on fatḥah in every position',
      'لأنهما لا يُعربان أبداً في أي موضع من الكلام\nBecause neither ever takes a grammatical case (إعراب) in any position',
      'لأنهما جمعا تكسير لكلمتين أخريين\nBecause both are broken plurals (جمع تكسير) of other words',
    ],
    correctIndex: 0,
    a: 'اسم الإشارة (هذا) والضمير (هو) نوعان من أنواع المعرفة الأساسية في العربية، فهما معرفة بذاتهما بصرف النظر عن دخول أل أو الإضافة عليهما.\nThe demonstrative (اسم إشارة, هذا) and the pronoun (ضمير, هو) are two of the basic categories of معرفة in Arabic — each is definite in itself, regardless of whether أل or idāfah is ever applied to it.',
  },
  {
    q: 'كتابُ الطالبِ ("the student\'s book") — لماذا كلمة "كتاب" هنا معرفة رغم خلوها من أل؟\nكتابُ الطالبِ ("the student\'s book") — why is the word كتاب definite here even though it has no أل?',
    options: [
      'لأنها اسم علم بذاتها\nBecause it is itself a proper noun',
      'لأنها مضاف، وقد اكتسبت تعريفها من المضاف إليه المعرَّف (الطالبِ)\nBecause it is a مضاف, and it inherits its definiteness from the definite مضاف إليه that follows (الطالبِ)',
      'لأنها منصوبة في هذه الجملة\nBecause it is منصوب (accusative) in this sentence',
      'لأنها جمع مؤنث سالم\nBecause it is a sound feminine plural (جمع مؤنث سالم)',
    ],
    correctIndex: 1,
    a: 'في تركيب الإضافة، يكتسب المضاف (كتاب) تعريفه من المضاف إليه (الطالب) متى كان هذا الأخير معرفة، فتصبح عبارة "كتاب الطالب" كلها معرفة رغم أن "كتاب" نفسها بلا أل ولا تنوين.\nIn an idāfah construction, the مضاف (كتاب) inherits its definiteness from the مضاف إليه (الطالب) whenever the latter is definite, so the whole phrase "كتاب الطالب" becomes definite even though "كتاب" itself carries neither أل nor تنوين.',
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
            Topic 1 of 47
          </p>
          <h1 className="font-serif tracking-[-0.02em] text-3xl font-bold text-foreground leading-tight mb-3">
            <span
              dir="rtl"
              lang="ar"
              style={{ fontFamily: "'Noto Naskh Arabic', serif" }}
              className="mr-2"
            >
              التنوين
            </span>
            — Definiteness &amp; Tanwīn
          </h1>
          <p className="text-muted-foreground text-base max-w-xl">
            Every Arabic noun is either <span className="font-medium text-foreground">نكرة</span>{' '}
            (indefinite, "a/an ...") or <span className="font-medium text-foreground">معرفة</span>{' '}
            (definite, "the ..."). Tanwīn — the trailing ـٌ ـً ـٍ sound — is the spoken marker of an
            indefinite noun, and it disappears the moment the noun becomes definite, whether by
            adding أل, attaching a possessive pronoun, or being a proper noun, demonstrative,
            pronoun, or the first term of an idāfah whose second term is definite.
          </p>
        </div>
      </div>
      <div className="mx-auto w-[min(720px,calc(100%-2rem))] py-8">
        <QuizCarousel items={quizItems} />
      </div>
    </main>
  )
}

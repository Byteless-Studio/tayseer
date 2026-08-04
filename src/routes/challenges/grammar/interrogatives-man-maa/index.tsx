import { createFileRoute, Link } from '@tanstack/react-router'
import { QuizCarousel } from '#/components/QuizCarousel'
import type { StrictQuizItem } from '#/routes/challenges/-quiz-types'

export const Route = createFileRoute('/challenges/grammar/interrogatives-man-maa/')({
  head: () => ({ meta: [{ title: 'Interrogatives — Grammar — Tayseer' }] }),
  component: TopicPage,
})

const quizItems: StrictQuizItem[] = [
  {
    q: 'ما الفرق بين اسمي الاستفهام من وما؟\nWhat is the difference between the two question words مَن and ما?',
    options: [
      'من يُسأل بها عن العاقل (الأشخاص)، وما يُسأل بها عن غير العاقل (الأشياء)\nمَن asks about rational beings (عاقل, i.e. people), and ما asks about non-rational things (غير عاقل, i.e. objects)',
      'من للمذكر فقط، وما للمؤنث فقط\nمَن is only for masculine, and ما is only for feminine',
      'من للماضي، وما للمضارع\nمَن is for the past tense, and ما is for the present tense',
      'لا فرق، يستخدمان بالتبادل في كل السياقات\nThere is no difference; they are used interchangeably in every context',
    ],
    correctIndex: 0,
    a: 'من أداة استفهام يُسأل بها عمن يعقل (الأشخاص)، بينما ما أداة استفهام يُسأل بها عما لا يعقل (الأشياء والحيوانات وغيرها).\nمَن is a question word used to ask about rational beings (people), while ما is used to ask about non-rational things (objects, animals, and so on).',
  },
  {
    q: 'رأيتَ شخصاً ولا تعرف اسمه، فسألتَه معرِّفاً بنفسه. أيّ سؤال هو الأنسب؟\nYou see a person whose name you don\'t know, and you ask them to introduce themselves. Which question is most appropriate?',
    options: [
      'ما هذا؟\nmā hādhā? — "What is this?"',
      'مَن هذا؟\nman hādhā? — "Who is this?"',
      'أين هذا؟\nayna hādhā? — "Where is this?"',
      'كيف هذا؟\nkayfa hādhā? — "How is this?"',
    ],
    correctIndex: 1,
    a: 'بما أن السؤال عن شخص (عاقل), فالأداة المناسبة هي مَن: "مَن هذا؟" = "Who is this?" وليس ما التي تُستخدم لغير العاقل.\nSince the question is about a person (عاقل), the correct word is مَن: "مَن هذا؟" = "Who is this?" — not ما, which is used for non-rational things.',
  },
  {
    q: 'رأيتَ جهازاً غريباً على الطاولة ولا تعرف ماهيته. أيّ سؤال هو الأنسب؟\nYou see a strange device on the table and don\'t know what it is. Which question is most appropriate?',
    options: [
      'مَن هذا؟\nman hādhā? — "Who is this?"',
      'ما هذا؟\nmā hādhā? — "What is this?"',
      'من ذلك؟\nman dhālika? — "Who is that?"',
      'أيّ هذا؟\nayyu hādhā? — "Which is this?"',
    ],
    correctIndex: 1,
    a: 'بما أن السؤال عن شيء غير عاقل, فالأداة المناسبة هي ما: "ما هذا؟" = "What is this?" — لا تُستخدم مَن هنا لأنها مختصة بالعقلاء.\nSince the question is about a non-rational thing, the correct word is ما: "ما هذا؟" = "What is this?" — مَن cannot be used here, since it is reserved for rational beings.',
  },
  {
    q: 'أيّ من هذه الأسئلة به خطأ في اختيار أداة الاستفهام المناسبة؟\nWhich of these questions uses the wrong interrogative word?',
    options: [
      'مَن هذا الرجلُ؟\nman hādhā ar-rajulu? — "Who is this man?"',
      'ما هذا الكتابُ؟\nmā hādhā al-kitābu? — "What is this book?"',
      'مَن هذا الكتابُ؟\nman hādhā al-kitābu?',
      'ما هذه السيارةُ؟\nmā hādhihi as-sayyāratu? — "What is this car?"',
    ],
    correctIndex: 2,
    a: '"مَن هذا الكتابُ؟" خطأ لأن الكتاب غير عاقل، فيجب استخدام ما لا مَن؛ الصواب "ما هذا الكتابُ؟".\n"مَن هذا الكتابُ؟" is wrong because a book is non-rational, so ما must be used instead of مَن; the correct form is "ما هذا الكتابُ؟".',
  },
  {
    q: 'مَن أستاذُك؟ — لماذا استُخدمت مَن هنا لا ما؟\nمَن أستاذُك؟ ("Who is your teacher?") — why is مَن used here rather than ما?',
    options: [
      'لأن السؤال عن شيء غير عاقل\nBecause the question is about a non-rational thing',
      'لأن السؤال عن شخص عاقل (الأستاذ)\nBecause the question is about a rational person (the teacher)',
      'لأن أستاذ اسم مؤنث\nBecause أستاذ is a feminine noun',
      'صدفة، يمكن استخدام ما أيضاً هنا دون فرق في المعنى\nCoincidence — ما could also be used here with no difference in meaning',
    ],
    correctIndex: 1,
    a: 'أستاذ اسم يدل على شخص عاقل، والقاعدة أن السؤال عن العاقل يكون بـ مَن، فتصبح الجملة "مَن أستاذُك؟" = "Who is your teacher?".\nأستاذ names a rational person, and the rule is that questions about rational beings use مَن, giving "مَن أستاذُك؟" = "Who is your teacher?"',
  },
  {
    q: 'من وما من الأسماء المبنية. ماذا يعني ذلك؟\nمَن and ما are among the مبني (indeclinable) nouns. What does that mean?',
    options: [
      'أن حركة آخرهما تتغير حسب موقعهما الإعرابي في الجملة\nThat their final vowel changes according to their grammatical position in the sentence',
      'أن شكلهما ثابت ولا يتغير آخرهما بتغير موقعهما الإعرابي، بخلاف الأسماء المعربة\nThat their form is fixed and their ending never changes with their grammatical position, unlike مُعرَب nouns',
      'أنهما لا يمكن أن يأتيا في أول الجملة\nThat neither can ever appear at the start of a sentence',
      'أنهما يُعربان دائماً بحركات مقدرة على الألف\nThat they always take estimated case markers on an alif',
    ],
    correctIndex: 1,
    a: 'من وما اسمان مبنيان على السكون، فحركة آخرهما لا تتغير مهما اختلف موقعهما الإعرابي في الجملة (مبتدأ، مفعول به، اسم استفهام مجرور...)، خلافاً للأسماء المعربة.\nمَن and ما are both مبني على السكون, so their ending never changes no matter their grammatical position in the sentence (مبتدأ, مفعول به, an interrogative governed by a preposition...), unlike مُعرَب nouns.',
  },
  {
    q: 'ما اسمُك؟ — ما هو الإعراب المتوقع لـ ما هنا؟\nما اسمُك؟ ("What is your name?") — what is the expected grammatical analysis of ما here?',
    options: [
      'اسم استفهام مبني في محل رفع مبتدأ\nAn interrogative noun, مبني, in the position of مرفوع مبتدأ',
      'حرف جر\nA preposition (حرف جر)',
      'فعل ماضٍ\nA past-tense verb (فعل ماضٍ)',
      'اسم موصول في محل نصب\nA relative pronoun (اسم موصول) in the accusative position',
    ],
    correctIndex: 0,
    a: 'ما هنا اسم استفهام يقع في محل رفع مبتدأ، واسمُك خبره — رغم أنه مبني (لا يظهر عليه إعراب لفظي), إلا أن له محلاً إعرابياً كما لو كان معرباً.\nHere ما is an interrogative noun in the position of مرفوع مبتدأ, with اسمُك as its خبر — even though it is مبني (showing no visible case ending), it still holds a grammatical position (محل إعرابي) as if it were مُعرَب.',
  },
  {
    q: 'أيّ زوج من الجمل يوضح الاستخدام الصحيح لـ من وما حسب قاعدة العاقل/غير العاقل؟\nWhich pair of sentences shows the correct use of مَن and ما according to the rational/non-rational rule?',
    options: [
      'ما هذا الطفلُ؟ / مَن هذا القلمُ؟\nmā hādhā aṭ-ṭiflu? / man hādhā al-qalamu?',
      'مَن هذا الطفلُ؟ / ما هذا القلمُ؟\nman hādhā aṭ-ṭiflu? / mā hādhā al-qalamu?',
      'مَن هذا الطفلُ؟ / مَن هذا القلمُ؟\nman hādhā aṭ-ṭiflu? / man hādhā al-qalamu?',
      'ما هذا الطفلُ؟ / ما هذا القلمُ؟\nmā hādhā aṭ-ṭiflu? / mā hādhā al-qalamu?',
    ],
    correctIndex: 1,
    a: 'الطفل عاقل فيُسأل عنه بـ مَن (مَن هذا الطفلُ؟)، والقلم غير عاقل فيُسأل عنه بـ ما (ما هذا القلمُ؟) — تطبيق مباشر لقاعدة العاقل مقابل غير العاقل.\nA child (الطفل) is rational, so مَن is used (مَن هذا الطفلُ؟); a pen (القلم) is non-rational, so ما is used (ما هذا القلمُ؟) — a direct application of the rational vs. non-rational rule.',
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
            Topic 4 of 62
          </p>
          <h1 className="font-serif tracking-[-0.02em] text-3xl font-bold text-foreground leading-tight mb-3">
            <span
              dir="rtl"
              lang="ar"
              style={{ fontFamily: "'Noto Naskh Arabic', serif" }}
              className="mr-2"
            >
              من / ما
            </span>
            — Interrogatives
          </h1>
          <p className="text-muted-foreground text-base max-w-xl">
            Two of the most basic question words split Arabic nouns along one line: whether they're{' '}
            <span className="font-medium text-foreground"><bdi lang="ar">عاقل</bdi></span> (rational/human) or not.{' '}
            <bdi lang="ar">من</bdi> asks "who" about a person (<bdi lang="ar">مَن هذا؟</bdi>), while <bdi lang="ar">ما</bdi> asks "what" about a thing (<bdi lang="ar">ما هذا؟</bdi>).
            Both are <span className="font-medium text-foreground"><bdi lang="ar">مبني</bdi></span> — indeclinable words
            whose ending never changes, even though they still hold a grammatical position (like
            <bdi lang="ar">مبتدأ</bdi>) in the sentence.
          </p>
        </div>
      </div>
      <div className="mx-auto w-[min(720px,calc(100%-2rem))] py-8">
        <QuizCarousel items={quizItems} />
      </div>
    </main>
  )
}

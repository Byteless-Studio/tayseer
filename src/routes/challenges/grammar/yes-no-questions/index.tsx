import { createFileRoute, Link } from '@tanstack/react-router'
import { QuizCarousel } from '#/components/QuizCarousel'
import type { StrictQuizItem } from '#/routes/challenges/-quiz-types'

export const Route = createFileRoute('/challenges/grammar/yes-no-questions/')({
  head: () => ({ meta: [{ title: 'Yes/No Questions — Grammar — Tayseer' }] }),
  component: TopicPage,
})

const quizItems: StrictQuizItem[] = [
  {
    q: 'ما هما أداتا الاستفهام المستخدمتان لطرح سؤال يُجاب عنه بنعم أو لا؟\nWhat are the two particles used to ask a yes/no question?',
    options: [
      'من وما\nman and mā — "who" and "what"',
      'أ وهل\nʾa and hal',
      'كيف وأين\nkayfa and ayna — "how" and "where"',
      'متى وكم\nmatā and kam — "when" and "how much/many"',
    ],
    correctIndex: 1,
    a: 'أ وهل هما أداتا الاستفهام المخصصتان لطرح سؤال إثبات/نفي يكون جوابه نعم أو لا، على خلاف أدوات كمن وما وأين وكيف التي تطلب معلومة محددة.\nأ and هل are the two particles reserved for yes/no questions, unlike من، ما، أين, and كيف, which ask for a specific piece of information.',
  },
  {
    q: 'أين تُوضع همزة الاستفهام أ في الجملة؟\nWhere does the question particle أ (hamzat al-istifhām) attach in the sentence?',
    options: [
      'تُتصل مباشرة بأول كلمة في الجملة\nIt attaches directly onto the first word of the sentence',
      'تقف منفصلة في أول الجملة كهل تماماً\nIt stands alone at the start of the sentence, just like هل',
      'توضع في آخر الجملة\nIt goes at the end of the sentence',
      'توضع بعد الفعل مباشرة بصرف النظر عن موقعه\nIt goes right after the verb, no matter where the verb sits',
    ],
    correctIndex: 0,
    a: 'همزة الاستفهام أ تتصل اتصالاً مباشراً بأول كلمة في الجملة (أطالبٌ أنتَ؟)، بخلاف هل التي تقف كلمة منفصلة بذاتها في مستهل الجملة (هل أنتَ طالبٌ؟).\nThe particle أ attaches directly onto the first word of the sentence (أطالبٌ أنتَ؟ — "Are you a student?"), while هل stands as its own separate word at the very start (هل أنتَ طالبٌ؟).',
  },
  {
    q: 'أيّ من هذه الجمل مكتوبة بالشكل الصحيح لأداة الاستفهام؟\nWhich of these sentences uses the question particle correctly?',
    options: [
      'هل أنتَ مدرّسٌ؟\nhal anta mudarrisun? — "Are you a teacher?"',
      'أ نتَ مدرّسٌ؟\nʾa nta mudarrisun? — أ written separately from the following word',
      'أنتَ هل مدرّسٌ؟\nʾanta hal mudarrisun? — هل misplaced mid-sentence',
      'مدرّسٌ هل أنتَ؟\nmudarrisun hal anta? — word order scrambled',
    ],
    correctIndex: 0,
    a: 'هل تقف منفصلة قبل الجملة مباشرة في أولها: "هل أنتَ مدرّسٌ؟" — أما "أ نتَ" ففيها انفصال خاطئ لهمزة الاستفهام التي يجب أن تتصل بالكلمة (أأنتَ).\nهل stands as a separate word right at the start of the sentence: "هل أنتَ مدرّسٌ؟" By contrast, "أ نتَ" wrongly separates أ from the word it must attach to — it should be أأنتَ.',
  },
  {
    q: 'حوّل الجملة "هذا كتابٌ" إلى سؤال باستخدام همزة الاستفهام أ.\nTurn the statement "هذا كتابٌ" ("This is a book") into a question using the particle أ.',
    options: [
      'هل هذا كتابٌ؟\nhal hādhā kitābun? — uses هل instead of أ',
      'أهذا كتابٌ؟\nʾa-hādhā kitābun? — "Is this a book?"',
      'أ هذا كتابٌ ؟ (منفصلة)\nʾa hādhā kitābun? — أ written as a separate word',
      'كتابٌ أهذا؟\nkitābun ʾa-hādhā? — word order scrambled',
    ],
    correctIndex: 1,
    a: 'تتصل همزة الاستفهام مباشرة بأول كلمة في الجملة، فتصبح "هذا" ← "أهذا".\nThe particle أ attaches directly onto the first word: هذا becomes أهذا, so "أهذا كتابٌ؟" = "Is this a book?"',
  },
  {
    q: 'أيّ من هذه الجمل بها خطأ في استخدام أداة الاستفهام؟\nWhich of these sentences has an error in how it uses the question particle?',
    options: [
      'هل ذهبتَ إلى المدرسةِ؟\nhal dhahabta ilā l-madrasati? — "Did you go to school?"',
      'أذهبتَ إلى المدرسةِ؟\nʾa-dhahabta ilā l-madrasati? — same meaning, using أ instead',
      'هلذهبتَ إلى المدرسةِ؟\nhal-dhahabta... — هل joined onto ذهبتَ',
      'أطالبٌ أنتَ؟\nʾa-ṭālibun anta? — "Are you a student?"',
    ],
    correctIndex: 2,
    a: '"هلذهبتَ" خطأ لأن هل يجب أن تُكتب منفصلة عن الكلمة التي تليها دائماً (هل + ذهبتَ)، بخلاف أ التي تتصل اتصالاً مباشراً بالكلمة.\n"هلذهبتَ" is wrong because هل must always be written separately from the word that follows it (هل + ذهبتَ), unlike أ, which attaches directly.',
  },
  {
    q: 'بأي كلمتين تُجاب أسئلة نعم/لا في العربية عادة؟\nWhat two words normally answer a yes/no question in Arabic?',
    options: [
      'أي ولا\nʾayy and lā — "which" and "no"',
      'نعم ولا\nnaʿam and lā — "yes" and "no"',
      'بلى وكلا\nbalā and kallā — used for negative questions and emphatic refusal',
      'صحيح وخطأ\nṣaḥīḥ and khaṭaʾ — "true" and "false"',
    ],
    correctIndex: 1,
    a: 'يُجاب عن سؤال أ/هل المثبت عادة بـ نعم (للإثبات) أو لا (للنفي) — مثل: "هل أنتَ طالبٌ؟" فيُجاب "نعم" أو "لا".\nA positive أ/هل question is normally answered with نعم (yes) or لا (no) — e.g. "هل أنتَ طالبٌ؟" is answered "نعم" or "لا".',
  },
  {
    q: 'هل أنتَ مريضٌ؟ فأجاب المخاطب: نعم — ماذا يؤكد هذا الجواب؟\nhal anta marīḍun? The listener answers naʿam ("yes"). What does this answer confirm?',
    options: [
      'أنه ليس مريضاً\nThat he is not sick',
      'أنه مريضٌ فعلاً، مؤكداً مضمون السؤال المُثبت\nThat he really is sick, confirming the positive question exactly as asked',
      'أنه لا يعرف الجواب\nThat he does not know the answer',
      'أنه سيصبح مريضاً لاحقاً\nThat he will become sick later',
    ],
    correctIndex: 1,
    a: 'بما أن السؤال هنا مُثبت (هل أنتَ مريضٌ؟), فإن الجواب "نعم" يؤكد مضمون السؤال كما هو: أي أنه مريضٌ بالفعل.\nSince the question is positive (هل أنتَ مريضٌ؟), the answer "نعم" confirms the content of the question as stated: he really is sick.',
  },
  {
    q: 'أهذه سيارتُك؟ — أعرب الجملة إعراباً وظيفياً: ما وظيفة الهمزة أ هنا؟\nأهذه سيارتُك؟ ("Is this your car?") — functionally, what role does أ play here?',
    options: [
      'حرف عطف يربط جملتين\nA conjunction (حرف عطف) linking two clauses',
      'حرف استفهام يفيد طلب الإثبات أو النفي (yes/no) ولا محل له من الإعراب\nA question particle (حرف استفهام) asking for confirmation or denial (yes/no); it has no case position of its own',
      'اسم موصول\nA relative pronoun (اسم موصول)',
      'فعل أمر\nAn imperative verb (فعل أمر)',
    ],
    correctIndex: 1,
    a: 'الهمزة هنا حرف استفهام يفيد طلب جواب بنعم أو لا، وهي حرف مبني لا محل له من الإعراب، متصل مباشرة بأول الجملة (هذه ← أهذه).\nHere أ is a question particle asking for a yes/no answer. It is an indeclinable particle (مبني) with no case position, attached directly to the first word of the sentence: هذه becomes أهذه.',
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
            Topic 8 of 47
          </p>
          <h1 className="font-serif tracking-[-0.02em] text-3xl font-bold text-foreground leading-tight mb-3">
            <span
              dir="rtl"
              lang="ar"
              style={{ fontFamily: "'Noto Naskh Arabic', serif" }}
              className="mr-2"
            >
              أ / هل
            </span>
            — Yes/No Questions
          </h1>
          <p className="text-muted-foreground text-base max-w-xl">
            Two particles turn a plain statement into a yes/no question. <bdi lang="ar">أ</bdi> attaches directly to the
            first word of the sentence (<bdi lang="ar">هذا كتابٌ</bdi> → <bdi lang="ar">أهذا كتابٌ؟</bdi>), while <bdi lang="ar">هل</bdi> stands on its own at the
            very start of the sentence (<bdi lang="ar">هل هذا كتابٌ؟</bdi>). Either way, the answer is a simple{' '}
            <span className="font-medium text-foreground"><bdi lang="ar">نعم</bdi></span> (yes) or{' '}
            <span className="font-medium text-foreground"><bdi lang="ar">لا</bdi></span> (no).
          </p>
        </div>
      </div>
      <div className="mx-auto w-[min(720px,calc(100%-2rem))] py-8">
        <QuizCarousel items={quizItems} />
      </div>
    </main>
  )
}

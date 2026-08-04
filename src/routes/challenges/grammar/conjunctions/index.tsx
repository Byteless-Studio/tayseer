import { createFileRoute, Link } from '@tanstack/react-router'
import { QuizCarousel } from '#/components/QuizCarousel'
import type { StrictQuizItem } from '#/routes/challenges/-quiz-types'

export const Route = createFileRoute('/challenges/grammar/conjunctions/')({
  head: () => ({ meta: [{ title: 'Conjunctions — Grammar — Tayseer' }] }),
  component: TopicPage,
})

const quizItems: StrictQuizItem[] = [
  {
    q: 'ما الأثر الإعرابي لحرف العطف "الواو" على الاسم الذي يليه؟\nWhat grammatical effect does the conjunction "الواو" (wāw) have on the noun that follows it?',
    options: [
      'تجعله مرفوعاً دائماً بصرف النظر عمّا قبله\nIt always makes it مرفوع (nominative), regardless of what precedes it',
      'لا تضيف معنى زمنياً أو ترتيبياً، بل تجعل المعطوف يشارك المعطوف عليه في إعرابه فقط (رفعاً أو نصباً أو جراً)\nIt adds no meaning of time or sequence — it simply makes the معطوف share the same case (رفع، نصب، or جر) as the معطوف عليه',
      'تجزم الفعل الذي يليها\nIt puts the following verb in the جزم (jussive) mood',
      'تقلب معنى الجملة إلى نفي\nIt flips the meaning of the sentence into a negation',
    ],
    correctIndex: 1,
    a: '"الواو" حرف عطف مجرد يفيد مطلق الجمع بلا ترتيب زمني، وأثرها الإعرابي الوحيد أن المعطوف بها يأخذ نفس إعراب المعطوف عليه.\n"الواو" (wāw) is a plain conjunction meaning simple combination with no implication of time or order — its only grammatical effect is that the word it joins takes the same case as the word before it.',
  },
  {
    q: 'أكمل: رأيتُ محمداً ___ علياً في الملعبِ (اختر حرف العطف الذي يفيد مطلق الجمع دون ترتيب أو تعقيب)\nComplete: رأيتُ محمداً ___ علياً في الملعبِ — "I saw Muhammad ___ Ali at the field" (choose the conjunction meaning plain combination, with no order or succession implied)',
    options: [
      'ثم\nthumma — "then" (with a gap in time)',
      'أم\nam — "or" (in an either/or question)',
      'و\nwa — "and"',
      'أو\naw — "or"',
    ],
    correctIndex: 2,
    a: '"الواو" هي حرف العطف الذي يفيد مطلق الجمع بين المعطوفين دون أي دلالة على الترتيب الزمني، بخلاف الفاء وثم.\n"الواو" (wāw) is the conjunction that means plain combination between the two joined words, with no implication of time order at all — unlike الفاء and ثم.',
  },
  {
    q: 'ما الفرق الأساسي بين حرفي العطف "الفاء" و"ثم"؟\nWhat is the essential difference between the two conjunctions "الفاء" (fa) and "ثم" (thumma)?',
    options: [
      'الفاء تفيد الترتيب والتعقيب بلا فاصل زمني، بينما ثم تفيد الترتيب مع التراخي (وجود فجوة زمنية)\nالفاء indicates sequence with immediate succession (no time gap), while ثم indicates sequence with delay (a gap in time)',
      'لا فرق بينهما إطلاقاً\nThere is no difference between them at all',
      'الفاء تفيد التخيير، وثم تفيد الجمع المطلق\nالفاء indicates choice, and ثم indicates plain combination',
      'ثم تفيد السببية فقط ولا علاقة لها بالترتيب\nثم only indicates causation and has nothing to do with sequence',
    ],
    correctIndex: 0,
    a: 'الفاء تفيد الترتيب مع التعقيب المباشر (بلا فاصل)، بينما "ثم" تفيد الترتيب مع التراخي، أي وجود فترة أو فجوة بين الحدثين.\nالفاء indicates sequence with immediate succession (no gap), while "ثم" indicates sequence with delay — meaning a stretch or gap of time between the two events.',
  },
  {
    q: 'أكمل: دخلَ الطالبُ الفصلَ ___ جلسَ مباشرةً (اختر الحرف الذي يفيد التعقيب الفوري بلا فاصل زمني)\nComplete: دخلَ الطالبُ الفصلَ ___ جلسَ مباشرةً — "The student entered the classroom ___ sat down immediately" (choose the conjunction meaning immediate succession with no time gap)',
    options: [
      'ثم\nthumma — "then" (with a gap in time)',
      'أو\naw — "or"',
      'ف\nfa — "then/so" (immediate succession)',
      'أم\nam — "or" (in an either/or question)',
    ],
    correctIndex: 2,
    a: '"الفاء" هي حرف العطف الذي يفيد الترتيب مع التعقيب الفوري، أي أن الفعل الثاني وقع مباشرة بعد الأول دون فاصل.\n"الفاء" (fa) is the conjunction that indicates sequence with immediate succession — meaning the second action happened directly after the first, with no gap.',
  },
  {
    q: 'ما الفرق الجوهري بين "أو" و"أم" في العطف؟\nWhat is the fundamental difference between "أو" (aw) and "أم" (am) as conjunctions?',
    options: [
      '"أو" للتخيير العام أو الشك بين أمرين أو أكثر، أما "أم" فتُستخدم تحديداً بعد همزة الاستفهام "أ" حين يُطلب من المخاطب تحديد أحد أمرين بعينهما ذُكرا في السؤال (المعادلة)\n"أو" is for general choice or uncertainty between two or more things, while "أم" is used specifically after the interrogative همزة "أ" when the listener is asked to pick out one of two specific things named in the question',
      'لا فرق أبداً بينهما ويمكن استبدال إحداهما بالأخرى دائماً\nThere is no difference at all, and either can always replace the other',
      '"أم" تفيد النفي التام\n"أم" indicates total negation',
      '"أو" تُستخدم فقط مع الأفعال، و"أم" فقط مع الأسماء\n"أو" is used only with verbs, and "أم" only with nouns',
    ],
    correctIndex: 0,
    a: '"أو" حرف عطف عام للتخيير أو الشك، بينما "أم" (أم المتصلة) ترتبط بهمزة الاستفهام "أ" في سؤال يطلب تحديد أحد أمرين بعينهما، مثل: "أمحمدٌ عندك أم عليٌّ؟" — وهذا هو محك التفريق الأساسي بينهما.\n"أو" is a general conjunction for choice or uncertainty, while "أم" (the connective أم) pairs with the interrogative همزة "أ" in a question that asks the listener to pick one of two specific things, as in "أمحمدٌ عندك أم عليٌّ؟" — "Is it Muhammad you have, or Ali?" — and that is the key test for telling the two apart.',
  },
  {
    q: 'أيّ من الجمل التالية بها خطأ في استخدام حرف العطف؟\nWhich of the following sentences has an error in its use of a conjunction?',
    options: [
      'أذهبتَ إلى المدرسةِ أو الجامعةِ؟ (والمقصود سؤال يطلب تحديد أحد المكانين بعينه)\nأذهبتَ إلى المدرسةِ أو الجامعةِ؟ — intended as a question asking which of the two specific places you went to',
      'اشتريتُ قلماً ودفتراً\nishtaraytu qalaman wa-daftaran — "I bought a pen and a notebook"',
      'درسَ الطالبُ ثم نجح بعد فترة\ndarasa ṭ-ṭālibu thumma najaḥa ba\'da fatratin — "The student studied, then succeeded some time later"',
      'دخلَ المعلمُ فبدأ الدرسَ فوراً\ndakhala l-mu\'allimu fa-bada\'a d-darsa fawran — "The teacher entered, and immediately began the lesson"',
    ],
    correctIndex: 0,
    a: '"أذهبتَ إلى المدرسةِ أو الجامعةِ؟" خطأ لأن السؤال بهمزة الاستفهام "أ" يطلب تحديد أحد أمرين بعينهما، فالصواب استخدام "أم": "أذهبتَ إلى المدرسةِ أم الجامعةِ؟".\n"أذهبتَ إلى المدرسةِ أو الجامعةِ؟" is wrong because a question with the interrogative همزة "أ" asks the listener to pick out one of two specific things — the correct conjunction is "أم": "أذهبتَ إلى المدرسةِ أم الجامعةِ؟" ("Did you go to the school or the university?").',
  },
  {
    q: 'إذا كان المعطوف عليه مجروراً، فما إعراب المعطوف بعد أي حرف من حروف العطف (و، ف، ثم، أو، أم)؟\nIf the معطوف عليه (the word being joined to) is مجرور, what case does the معطوف take after any conjunction (و، ف، ثم، أو، أم)?',
    options: [
      'يكون مجروراً هو الآخر تبعاً للمعطوف عليه\nIt is also مجرور, matching the معطوف عليه',
      'يكون مرفوعاً دائماً بصرف النظر عن حالة المعطوف عليه\nIt is always مرفوع, regardless of the case of the معطوف عليه',
      'يكون منصوباً دائماً\nIt is always منصوب',
      'لا إعراب له لأنه غير أصلي في الجملة\nIt has no case at all, since it is not an original part of the sentence',
    ],
    correctIndex: 0,
    a: 'المعطوف تابع للمعطوف عليه في إعرابه دائماً — رفعاً ونصباً وجراً — بصرف النظر عن أي حرف عطف استُخدم بينهما.\nThe معطوف always follows the case of the معطوف عليه — whether رفع, نصب, or جر — no matter which conjunction links them.',
  },
  {
    q: 'أيّ سياق يستوجب استخدام "أم" بدلاً من "أو"؟\nWhich context requires using "أم" instead of "أو"?',
    options: [
      'بعد همزة الاستفهام "أ" حين يكون السؤال طالباً تحديد أحد أمرين مذكورين بأعيانهما\nAfter the interrogative همزة "أ", when the question asks the listener to pick out one of two specific things it names',
      'في كل جملة استفهامية دون أي قيد\nIn every interrogative sentence, without any restriction',
      'بعد "هل" فقط دائماً\nOnly ever after "هل"',
      'في الجمل الخبرية فقط دون استفهام\nOnly in declarative sentences, never in questions',
    ],
    correctIndex: 0,
    a: '"أم" المتصلة تأتي بعد همزة الاستفهام "أ" في سؤال يطلب من المخاطب تحديد أحد أمرين بعينهما ذُكرا في السؤال نفسه، وهذا هو السياق الحصري لاستخدامها بدلاً من "أو".\nThe connective "أم" comes after the interrogative همزة "أ" in a question that asks the listener to pick out one of two specific things named in the question itself — and that is the one context where it replaces "أو".',
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
            Topic 37 of 47
          </p>
          <h1 className="font-serif tracking-[-0.02em] text-3xl font-bold text-foreground leading-tight mb-3">
            <span
              dir="rtl"
              lang="ar"
              style={{ fontFamily: "'Noto Naskh Arabic', serif" }}
              className="mr-2"
            >
              حروف العطف
            </span>
            — Conjunctions
          </h1>
          <p className="text-muted-foreground text-base max-w-xl">
            <bdi lang="ar">و</bdi> joins two words with no added meaning — the <bdi lang="ar">معطوف</bdi> simply shares the case of the
            <bdi lang="ar">معطوف عليه. ف</bdi> means "then/so" with immediate succession; <bdi lang="ar">ثم</bdi> means "then" with a gap or
            delay. <bdi lang="ar">أو</bdi> is a general "or"; <bdi lang="ar">أم</bdi> is the special "or" used after <bdi lang="ar">همزة الاستفهام أ</bdi> when
            asking someone to pick between two named options (<bdi lang="ar">أمحمدٌ عندك أم عليٌّ؟</bdi>) — that
            <bdi lang="ar">أو</bdi>-vs-<bdi lang="ar">أم</bdi> distinction is the key test point in this topic.
          </p>
        </div>
      </div>
      <div className="mx-auto w-[min(720px,calc(100%-2rem))] py-8">
        <QuizCarousel items={quizItems} />
      </div>
    </main>
  )
}

import { createFileRoute, Link } from '@tanstack/react-router'
import { QuizCarousel } from '#/components/QuizCarousel'
import type { StrictQuizItem } from '#/routes/challenges/-quiz-types'

export const Route = createFileRoute('/challenges/grammar/attached-pronouns/')({
  head: () => ({ meta: [{ title: 'Attached Pronouns — Grammar — Tayseer' }] }),
  component: TopicPage,
})

const quizItems: StrictQuizItem[] = [
  {
    q: 'ما الفرق بين الضمير المتصل والضمير المنفصل؟\nWhat is the difference between an attached pronoun (ضمير متصل) and a detached pronoun (ضمير منفصل)?',
    options: [
      'المتصل كلمة مستقلة قائمة بذاتها، والمنفصل يُكتب ملتصقاً بآخر اسم أو فعل أو حرف\nThe attached one stands alone as an independent word, and the detached one is written stuck onto a noun, verb, or particle',
      'المتصل يُكتب ملتصقاً بآخر اسم أو فعل أو حرف، والمنفصل كلمة مستقلة قائمة بذاتها\nThe attached one is written stuck onto a noun, verb, or particle, and the detached one stands alone as an independent word',
      'لا فرق بينهما، مصطلحان لنفس الشيء\nThere is no difference — they are two terms for the same thing',
      'المتصل للمفرد فقط، والمنفصل للجمع فقط\nAttached pronouns are only for the singular, detached ones only for the plural',
    ],
    correctIndex: 1,
    a: 'الضمير المتصل لا يُنطق ولا يُكتب مستقلاً، بل يتصل بآخر الكلمة التي يلحق بها (اسم، فعل، أو حرف)، بخلاف الضمير المنفصل (كأنا وهو) الذي يقف كلمة قائمة بذاتها.\nAn attached pronoun is never spoken or written on its own — it fuses onto the end of the word it attaches to (a noun, verb, or particle), unlike a detached pronoun (like أنا "I" or هو "he"), which stands as its own independent word.',
  },
  {
    q: 'كتابٌ + ـي (my) → ___\nكتابٌ ("a book") + ـي ("my") → ___',
    options: [
      'كتابي\nkitābī — "my book"',
      'كتابُي\nkitābuy',
      'كتابٌي\nkitābuny',
      'كتاباي\nkitābāy',
    ],
    correctIndex: 0,
    a: 'حين يتصل الضمير ـي باسم، يفيد الملكية: كتابي = "my book". لاحظ سقوط التنوين من "كتاب" لأن اتصال الضمير جعله معرفة.\nWhen the pronoun ـي attaches to a noun it shows possession: كتابي = "my book." Notice تنوين drops from كتاب, because attaching the pronoun makes the noun definite.',
  },
  {
    q: 'إذا اتصل الضمير ـهُ (his) بحرف جر مثل مِن، فما وظيفته؟\nIf the pronoun ـهُ ("his/him") attaches to a preposition like مِن, what role does it play?',
    options: [
      'يفيد الملكية كما مع الأسماء\nIt shows possession, just as it does with nouns',
      'يكون في محل جر اسماً مجروراً، أي مفعولاً لحرف الجر (مِنه = "from him")\nIt sits in the جر (genitive) position as the object of the preposition (مِنه = "from him")',
      'يتحول حرف الجر إلى فعل\nThe preposition turns into a verb',
      'لا يجوز اتصال الضمائر بحروف الجر إطلاقاً\nPronouns can never attach to prepositions at all',
    ],
    correctIndex: 1,
    a: 'حين يتصل الضمير باسم فهو يفيد الملكية (كتابُهُ = his book)، أما حين يتصل بحرف جر فهو في محل جر اسماً مجروراً هو مفعول حرف الجر: مِنه = "from him".\nWhen the pronoun attaches to a noun it shows possession (كتابُهُ = "his book"); when it attaches to a preposition instead, it sits in the جر position as the preposition\'s object: مِنه = "from him".',
  },
  {
    q: 'قلمٌ + ـكِ (your, fem.) → ___\nقلمٌ ("a pen") + ـكِ ("your," fem.) → ___',
    options: [
      'قلمُكِ\nqalamuki — "your (fem.) pen"',
      'قلمُكَ\nqalamuka — "your (masc.) pen"',
      'قلمُهُ\nqalamuhu — "his pen"',
      'قلمُها\nqalamuhā — "her pen"',
    ],
    correctIndex: 0,
    a: 'ـكِ (بكسر الكاف) ضمير المخاطبة المفردة المؤنثة، فتصبح "قلمُكِ" = "your (fem.) pen". لاحظ الفرق بين ـكَ (بفتح الكاف، للمخاطب المذكر) وـكِ (بكسرها، للمخاطبة المؤنثة).\nـكِ (with kasrah on the kāf) is the pronoun for a single female addressee, giving "قلمُكِ" = "your (fem.) pen." Note the contrast with ـكَ (fatḥah, masculine addressee) versus ـكِ (kasrah, feminine addressee).',
  },
  {
    q: 'أيّ من هذه الجمل بها خطأ نحوي متعلق بالتنوين مع الضمير المتصل؟\nWhich of these sentences has a grammar error involving تنوين with an attached pronoun?',
    options: [
      'هذا كتابي\nhādhā kitābī — "This is my book"',
      'هذا كتابٌي\nhādhā kitābuny — with تنوين before the pronoun',
      'هذا بيتُنا\nhādhā baytunā — "This is our house"',
      'هذه سيارتُها\nhādhihi sayyāratuhā — "This is her car"',
    ],
    correctIndex: 1,
    a: '"كتابٌي" خطأ لأن اتصال الضمير بالاسم يجعله معرفة بالإضافة، فيسقط التنوين وجوباً؛ الصواب "كتابي" بلا تنوين.\n"كتابٌي" is wrong because attaching the pronoun to the noun makes it definite through idāfah, which forces تنوين to drop; the correct form is "كتابي" with no تنوين at all.',
  },
  {
    q: 'بيتُنا كبيرٌ — ماذا يفيد الضمير المتصل "ـنا" على "بيت" هنا؟\nbaytunā kabīrun ("Our house is big") — what does the attached pronoun ـنا on بيت indicate here?',
    options: [
      'أن البيت مفعول به لضمير الجماعة\nThat the house is the direct object of a group pronoun',
      'ملكية جماعية — "our house" — نحن نملك هذا البيت\nCollective possession — "our house" — we together own this house',
      'أن البيت في محل جر بحرف جر مقدر\nThat the house sits in the جر position because of an implied preposition',
      'صيغة المبالغة\nAn intensive (مبالغة) form',
    ],
    correctIndex: 1,
    a: 'ـنا (نحن) حين تتصل باسم تفيد الملكية الجماعية: بيتُنا = "our house" — البيت مملوك للمتكلمين معاً.\nـنا (from نحن, "we") shows collective possession when it attaches to a noun: بيتُنا = "our house" — the house belongs to the speakers together.',
  },
  {
    q: 'سلَّمتُ عليهم — أيّ كلمة تحمل الضمير المتصل "هم" هنا، وما وظيفته؟\nsallamtu ʿalayhim ("I greeted them") — which word carries the attached pronoun هم here, and what role does it play?',
    options: [
      'الفعل سلَّمتُ يحمل ـهم كمفعول به مباشر\nThe verb سلَّمتُ carries ـهم as its direct object',
      'حرف الجر على يتصل به ـهم فيكون في محل جر اسماً مجروراً (عليهم = "upon/to them")\nThe preposition على carries ـهم, putting it in the جر position as the preposition\'s object (عليهم = "upon/to them")',
      'ـهم هنا اسم إشارة\nHere ـهم is a demonstrative pronoun',
      'ـهم في هذه الجملة أداة استفهام\nIn this sentence ـهم is a question particle',
    ],
    correctIndex: 1,
    a: 'ـهم اتصل بحرف الجر على، فأصبح في محل جر اسماً مجروراً هو مفعول حرف الجر: عليهم = "upon/to them" — وليس مفعولاً به للفعل مباشرة لأن سلَّمَ يتعدى بحرف الجر على لا بنفسه.\nـهم attaches to the preposition على, so it sits in the جر position as the preposition\'s object: عليهم = "upon/to them" — not as the verb\'s direct object, since سلَّمَ takes its object through the preposition على rather than directly.',
  },
  {
    q: 'لماذا يُقال إن اتصال الضمير بالاسم "يُعرِّف" ذلك الاسم؟\nWhy is attaching a pronoun to a noun said to make that noun definite (يُعرِّف)?',
    options: [
      'لأن الاسم يصبح ممنوعاً من الصرف\nBecause the noun becomes a diptote (ممنوع من الصرف)',
      'لأن الاسم يصبح مضافاً إلى معرفة (الضمير معرفة دائماً), فيكتسب تعريفه ويسقط تنوينه/أله\nBecause the noun becomes a مضاف attached to something definite (a pronoun is always definite), so it takes on that definiteness and loses its تنوين/أل',
      'لأن الاسم يتحول إلى فعل\nBecause the noun turns into a verb',
      'لا علاقة للأمر بالتعريف إطلاقاً\nThis has nothing to do with definiteness at all',
    ],
    correctIndex: 1,
    a: 'الضمائر كلها معارف بذاتها، فإذا أُضيف اسم إلى ضمير (كقلمي، بيتنا) صار الاسم مضافاً إلى معرفة، فاكتسب التعريف منه، ولذلك يسقط تنوينه ولا يجتمع معه أل التعريف.\nAll pronouns are inherently definite. So when a noun is put into idāfah with a pronoun (like قلمي or بيتنا), the noun becomes a مضاف attached to something definite and takes on that definiteness — which is why its تنوين drops and it can never also take أل.',
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
            Topic 9 of 62
          </p>
          <h1 className="font-serif tracking-[-0.02em] text-3xl font-bold text-foreground leading-tight mb-3">
            <span
              dir="rtl"
              lang="ar"
              style={{ fontFamily: "'Noto Naskh Arabic', serif" }}
              className="mr-2"
            >
              الضمائر المتصلة
            </span>
            — Attached Pronouns
          </h1>
          <p className="text-muted-foreground text-base max-w-xl">
            <bdi lang="ar">ـي ـكَ ـكِ ـهُ ـها ـنا ـكم ـهم</bdi> never stand alone — they attach directly onto the word
            before them. Attached to a noun, they show possession (<bdi lang="ar">كتابي</bdi> — "my book"); attached to
            a preposition, they become its object (<bdi lang="ar">منه</bdi> — "from him"). Either way, attaching a
            pronoun makes the noun definite, so any <bdi lang="ar">تنوين</bdi> or <bdi lang="ar">أل</bdi> it carried is dropped.
          </p>
        </div>
      </div>
      <div className="mx-auto w-[min(720px,calc(100%-2rem))] py-8">
        <QuizCarousel items={quizItems} />
      </div>
    </main>
  )
}

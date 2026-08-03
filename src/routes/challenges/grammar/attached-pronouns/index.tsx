import { createFileRoute, Link } from '@tanstack/react-router'
import { QuizCarousel } from '#/components/QuizCarousel'
import type { StrictQuizItem } from '#/routes/challenges/-quiz-types'

export const Route = createFileRoute('/challenges/grammar/attached-pronouns/')({
  head: () => ({ meta: [{ title: 'Attached Pronouns — Grammar — Tayseer' }] }),
  component: TopicPage,
})

const quizItems: StrictQuizItem[] = [
  {
    q: 'ما الفرق بين الضمير المتصل والضمير المنفصل؟',
    options: [
      'المتصل كلمة مستقلة قائمة بذاتها، والمنفصل يُكتب ملتصقاً بآخر اسم أو فعل أو حرف',
      'المتصل يُكتب ملتصقاً بآخر اسم أو فعل أو حرف، والمنفصل كلمة مستقلة قائمة بذاتها',
      'لا فرق بينهما، مصطلحان لنفس الشيء',
      'المتصل للمفرد فقط، والمنفصل للجمع فقط',
    ],
    correctIndex: 1,
    a: 'الضمير المتصل لا يُنطق ولا يُكتب مستقلاً، بل يتصل بآخر الكلمة التي يلحق بها (اسم، فعل، أو حرف)، بخلاف الضمير المنفصل (كأنا وهو) الذي يقف كلمة قائمة بذاتها.',
  },
  {
    q: 'كتابٌ + ـي (my) → ___',
    options: ['كتابي', 'كتابُي', 'كتابٌي', 'كتاباي'],
    correctIndex: 0,
    a: 'حين يتصل الضمير ـي باسم، يفيد الملكية: كتابي = "my book". لاحظ سقوط التنوين من "كتاب" لأن اتصال الضمير جعله معرفة.',
  },
  {
    q: 'إذا اتصل الضمير ـهُ (his) بحرف جر مثل مِن، فما وظيفته؟',
    options: [
      'يفيد الملكية كما مع الأسماء',
      'يكون في محل جر اسماً مجروراً، أي مفعولاً لحرف الجر (مِنه = "from him")',
      'يتحول حرف الجر إلى فعل',
      'لا يجوز اتصال الضمائر بحروف الجر إطلاقاً',
    ],
    correctIndex: 1,
    a: 'حين يتصل الضمير باسم فهو يفيد الملكية (كتابُهُ = his book)، أما حين يتصل بحرف جر فهو في محل جر اسماً مجروراً هو مفعول حرف الجر: مِنه = "from him".',
  },
  {
    q: 'قلمٌ + ـكِ (your, fem.) → ___',
    options: ['قلمُكِ', 'قلمُكَ', 'قلمُهُ', 'قلمُها'],
    correctIndex: 0,
    a: 'ـكِ (بكسر الكاف) ضمير المخاطبة المفردة المؤنثة، فتصبح "قلمُكِ" = "your (fem.) pen". لاحظ الفرق بين ـكَ (بفتح الكاف، للمخاطب المذكر) وـكِ (بكسرها، للمخاطبة المؤنثة).',
  },
  {
    q: 'أيّ من هذه الجمل بها خطأ نحوي متعلق بالتنوين مع الضمير المتصل؟',
    options: ['هذا كتابي', 'هذا كتابٌي', 'هذا بيتُنا', 'هذه سيارتُها'],
    correctIndex: 1,
    a: '"كتابٌي" خطأ لأن اتصال الضمير بالاسم يجعله معرفة بالإضافة، فيسقط التنوين وجوباً؛ الصواب "كتابي" بلا تنوين.',
  },
  {
    q: 'بيتُنا كبيرٌ — What does the attached pronoun ـنا on بيت indicate here?',
    options: [
      'أن البيت مفعول به لضمير الجماعة',
      'ملكية جماعية — "our house" — نحن نملك هذا البيت',
      'أن البيت في محل جر بحرف جر مقدر',
      'صيغة المبالغة',
    ],
    correctIndex: 1,
    a: 'ـنا (نحن) حين تتصل باسم تفيد الملكية الجماعية: بيتُنا = "our house" — البيت مملوك للمتكلمين معاً.',
  },
  {
    q: 'سلَّمتُ عليهم — Which word carries the attached pronoun هم here, and what role does it play?',
    options: [
      'الفعل سلَّمتُ يحمل ـهم كمفعول به مباشر',
      'حرف الجر على يتصل به ـهم فيكون في محل جر اسماً مجروراً (عليهم = "upon/to them")',
      'ـهم هنا اسم إشارة',
      'ـهم في هذه الجملة أداة استفهام',
    ],
    correctIndex: 1,
    a: 'ـهم اتصل بحرف الجر على، فأصبح في محل جر اسماً مجروراً هو مفعول حرف الجر: عليهم = "upon/to them" — وليس مفعولاً به للفعل مباشرة لأن سلَّمَ يتعدى بحرف الجر على لا بنفسه.',
  },
  {
    q: 'لماذا يُقال إن اتصال الضمير بالاسم "يُعرِّف" ذلك الاسم؟',
    options: [
      'لأن الاسم يصبح ممنوعاً من الصرف',
      'لأن الاسم يصبح مضافاً إلى معرفة (الضمير معرفة دائماً), فيكتسب تعريفه ويسقط تنوينه/أله',
      'لأن الاسم يتحول إلى فعل',
      'لا علاقة للأمر بالتعريف إطلاقاً',
    ],
    correctIndex: 1,
    a: 'الضمائر كلها معارف بذاتها، فإذا أُضيف اسم إلى ضمير (كقلمي، بيتنا) صار الاسم مضافاً إلى معرفة، فاكتسب التعريف منه، ولذلك يسقط تنوينه ولا يجتمع معه أل التعريف.',
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
            Topic 9 of 47
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
            ـي ـكَ ـكِ ـهُ ـها ـنا ـكم ـهم never stand alone — they attach directly onto the word
            before them. Attached to a noun, they show possession (كتابي — "my book"); attached to
            a preposition, they become its object (منه — "from him"). Either way, attaching a
            pronoun makes the noun definite, so any تنوين or أل it carried is dropped.
          </p>
        </div>
      </div>
      <div className="mx-auto w-[min(720px,calc(100%-2rem))] py-8">
        <QuizCarousel items={quizItems} />
      </div>
    </main>
  )
}

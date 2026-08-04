import { createFileRoute, Link } from '@tanstack/react-router'
import { QuizCarousel } from '#/components/QuizCarousel'
import type { StrictQuizItem } from '#/routes/challenges/-quiz-types'

export const Route = createFileRoute('/challenges/grammar/badal-vocative/')({
  head: () => ({ meta: [{ title: 'Apposition & Vocative — Grammar — Tayseer' }] }),
  component: TopicPage,
})

const quizItems: StrictQuizItem[] = [
  {
    q: 'ما حكم إعراب البدل (التابع) بالنسبة إلى المبدل منه (متبوعه)؟\nWhat rule governs the case of the بدل (the "substitute" noun) relative to the مبدل منه (the noun it follows)?',
    options: [
      'يأخذ إعراباً ثابتاً هو الرفع دائماً\nIt always takes a fixed case: nominative',
      'يأخذ نفس إعراب المبدل منه أياً كان (رفعاً أو نصباً أو جراً)، لأنه في نية إحلاله محله\nIt takes the SAME case as the مبدل منه, whatever that case is (nominative, accusative, or genitive), because it is meant to stand in its place',
      'يُبنى دائماً بصرف النظر عن موقعه\nIt is always built (مبني), regardless of its position',
      'يخالف المبدل منه في الإعراب دائماً\nIt always takes a DIFFERENT case from the مبدل منه',
    ],
    correctIndex: 1,
    a: 'البدل تابع يشارك متبوعه (المبدل منه) في إعرابه نفسه أياً كان — رفعاً أو نصباً أو جراً — لأن البدل في نية إحلاله محل المبدل منه، مثل "جاء أخوك خالدٌ" (خالدٌ بدل مرفوع من أخوك).\nThe بدل is a dependent noun that shares the exact case of the متبوع (the مبدل منه) — nominative, accusative, or genitive — because the بدل is meant to stand in place of the noun it follows, as in "جاء أخوك خالدٌ" ("Your brother, Khālid, came"), where خالدٌ is a بدل in the nominative, agreeing with أخوك.',
  },
  {
    q: 'قابلتُ المعلمَ ___ (خالد، بدل منصوب)\nqābaltu al-muʿallima ___ (خالد, بدل in the accusative) — "I met the teacher, Khālid"',
    options: [
      'خالداً\nKhālidan — accusative',
      'خالدٌ\nKhālidun — nominative',
      'خالدٍ\nKhālidin — genitive',
      'خالدَ\nKhālida — accusative without تنوين',
    ],
    correctIndex: 0,
    a: '"خالداً" بدل منصوب من "المعلمَ" لأنه يتبعه في إعرابه، والمعلم منصوب مفعول به: "قابلتُ المعلمَ خالداً".\n"خالداً" is a بدل in the accusative for "المعلمَ", agreeing with its case — المعلم is accusative as the direct object: "قابلتُ المعلمَ خالداً" ("I met the teacher, Khālid").',
  },
  {
    q: 'كيف يُعرب المنادى العلم المفرد، مثل "محمد" في "يا محمدُ"؟\nHow is a vocative that is a single proper name, like "محمد" in "يا محمدُ", inflected?',
    options: [
      'مبني على الضم في محل نصب\nBuilt (مبني) on ḍamma, in the position of accusative',
      'منصوب دائماً بالفتحة الظاهرة\nAlways accusative, with a visible fatḥa',
      'مجرور بحرف النداء\nGenitive, governed by the vocative particle',
      'مرفوع بالضمة الظاهرة إعراباً لا بناءً\nNominative with a visible ḍamma — as a true case ending, not as بناء',
    ],
    correctIndex: 0,
    a: 'العلم المفرد (غير المضاف) إذا نُودي يُبنى على الضم في محل نصب على النداء، مثل "يا محمدُ" — والضمة هنا علامة بناء لا إعراب.\nA single proper name (not in idāfah), when addressed in the vocative, is built (مبني) on ḍamma in the position of an accusative of address — like "يا محمدُ" — where the ḍamma is a mark of بناء (a fixed form), not a case ending.',
  },
  {
    q: 'إذا ناديتَ رجلاً معيناً أمامك لا تعرف اسمه بقولك "يا رجلُ"، فما إعراب "رجل"؟\nIf you address a specific man in front of you whose name you do not know, saying "يا رجلُ", what is the grammatical status of "رجل"?',
    options: [
      'نكرة مقصودة، مبنية على الضم في محل نصب كالعلم المفرد تماماً\nA نكرة مقصودة ("intended indefinite" — a specific but unnamed addressee), built on ḍamma in the position of accusative, exactly like a single proper name',
      'نكرة غير مقصودة، منصوبة بالفتحة\nA نكرة غير مقصودة ("non-specific indefinite"), accusative with fatḥa',
      'مضاف، منصوب\nA مضاف, in the accusative',
      'لا يجوز نداء النكرة إطلاقاً\nAn indefinite noun can never be addressed in the vocative',
    ],
    correctIndex: 0,
    a: '"رجل" هنا نكرة مقصودة (تقصد شخصاً بعينه حاضراً وإن لم تعرف اسمه)، وحكمها كحكم العلم المفرد: البناء على الضم في محل نصب: "يا رجلُ".\n"رجل" here is a نكرة مقصودة — you mean one specific person present before you, even though you don\'t know his name — and it follows the same rule as a single proper name: built on ḍamma in the position of accusative: "يا رجلُ".',
  },
  {
    q: 'كيف يُعرب المنادى إذا كان مضافاً، مثل "طالبَ" في "يا طالبَ العلمِ"؟\nHow is the vocative inflected when it is a مضاف, like "طالبَ" in "يا طالبَ العلمِ"?',
    options: [
      'مبني على الضم كالعلم المفرد\nBuilt on ḍamma, like a single proper name',
      'منصوب بالفتحة الظاهرة لأنه مضاف\nAccusative with a visible fatḥa, because it is a مضاف',
      'مجرور لأنه تلا حرف النداء\nGenitive, because it follows the vocative particle',
      'مرفوع دائماً\nAlways nominative',
    ],
    correctIndex: 1,
    a: 'المنادى المضاف يُنصب بالفتحة الظاهرة لأنه لم يستوفِ شروط البناء (كونه مفرداً غير مضاف)، مثل "يا طالبَ العلمِ" حيث "طالبَ" منصوب وهو مضاف إلى "العلمِ" المجرور.\nA vocative that is a مضاف is put in the accusative with a visible fatḥa, because it does not meet the conditions for بناء (being a single word not in idāfah) — as in "يا طالبَ العلمِ" ("O seeker of knowledge"), where "طالبَ" is accusative and is itself a مضاف to "العلمِ" in the genitive.',
  },
  {
    q: 'إذا نادى المتكلم منادىً غير معيّن (أيّ فرد من الجنس دون تخصيص)، فما إعرابه؟\nIf the speaker addresses a non-specific vocative (any member of a class, with no particular person meant), what case does it take?',
    options: [
      'نكرة غير مقصودة، منصوبة بالفتحة\nA نكرة غير مقصودة ("non-specific indefinite"), accusative with fatḥa',
      'نكرة مقصودة، مبنية على الضم\nA نكرة مقصودة ("specific indefinite"), built on ḍamma',
      'علم مفرد، مبني على الضم\nA single proper name, built on ḍamma',
      'مضاف، منصوب\nA مضاف, in the accusative',
    ],
    correctIndex: 0,
    a: 'النداء العام لأي فرد من الجنس دون تعيين شخص بذاته يُسمى نكرة غير مقصودة، وحكمها النصب بالفتحة، بخلاف النكرة المقصودة التي تُبنى على الضم.\nAddressing any member of a class in general, without meaning one specific person, is called a نكرة غير مقصودة, and its rule is the accusative with fatḥa — unlike a نكرة مقصودة, which is built on ḍamma.',
  },
  {
    q: 'أيّ من هذه الجمل بها خطأ نحوي؟\nWhich of these sentences contains a grammatical error?',
    options: [
      'يا محمدُ أقبِلْ\n"O Muhammad, come here"',
      'يا طالبَ العلمِ اجتهدْ\n"O seeker of knowledge, strive hard"',
      'يا عبدَ اللهِ استعِنْ بربك\n"O ʿAbdullāh, seek help from your Lord"',
      'يا محمداً أقبِلْ\n"O Muhammad, come here" — with the name in the accusative',
    ],
    correctIndex: 3,
    a: '"محمد" علم مفرد غير مضاف، فيُبنى على الضم في محل نصب عند النداء: الصواب "يا محمدُ أقبِلْ" لا "يا محمداً" بالنصب.\n"محمد" is a single proper name, not in idāfah, so it is built on ḍamma in the position of accusative when addressed: the correct form is "يا محمدُ أقبِلْ", not "يا محمداً" in the (visible) accusative.',
  },
  {
    q: 'هذا أخوك ___ (خالد، بدل مرفوع)\nhādhā akhūka ___ (خالد, بدل in the nominative) — "This is your brother, Khālid"',
    options: [
      'خالدٌ\nKhālidun — nominative',
      'خالداً\nKhālidan — accusative',
      'خالدٍ\nKhālidin — genitive',
      'خالدَ\nKhālida — accusative without تنوين',
    ],
    correctIndex: 0,
    a: '"خالدٌ" بدل مرفوع تابع لـ"أخوك" المرفوع، لأن البدل يطابق المبدل منه في إعرابه: "هذا أخوك خالدٌ".\n"خالدٌ" is a بدل in the nominative for "أخوك", which is itself nominative — because the بدل matches the case of the مبدل منه: "هذا أخوك خالدٌ" ("This is your brother, Khālid").',
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
            Topic 28 of 47
          </p>
          <h1 className="font-serif tracking-[-0.02em] text-3xl font-bold text-foreground leading-tight mb-3">
            <span
              dir="rtl"
              lang="ar"
              style={{ fontFamily: "'Noto Naskh Arabic', serif" }}
              className="mr-2"
            >
              البدل والنداء
            </span>
            — Apposition & Vocative
          </h1>
          <p className="text-muted-foreground text-base max-w-xl">
            بدل renames or restates the preceding noun and takes the SAME case as it — not a
            fixed case. يا + vocative noun: the noun is مبني على الضم if it's a definite single
            name (يا محمدُ) or a specific-but-unnamed addressee (نكرة مقصودة), and منصوب if it's
            an idāfah (يا طالبَ العلمِ) or a non-specific indefinite call.
          </p>
        </div>
      </div>
      <div className="mx-auto w-[min(720px,calc(100%-2rem))] py-8">
        <QuizCarousel items={quizItems} />
      </div>
    </main>
  )
}

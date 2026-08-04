import { createFileRoute, Link } from '@tanstack/react-router'
import { QuizCarousel } from '#/components/QuizCarousel'
import type { StrictQuizItem } from '#/routes/challenges/-quiz-types'

export const Route = createFileRoute('/challenges/grammar/adjectives-agreement/')({
  head: () => ({ meta: [{ title: 'Adjective Agreement — Grammar — Tayseer' }] }),
  component: TopicPage,
})

const quizItems: StrictQuizItem[] = [
  {
    q: 'ما هو النعت (الصفة) وما هو المنعوت (الموصوف)؟\nWhat is the نعت (adjective) and what is the منعوت (the noun it describes)?',
    options: [
      'النعت هو الاسم الأصلي، والمنعوت هو الصفة التي تصفه\nThe نعت is the original noun, and the منعوت is the adjective that describes it',
      'النعت هو الصفة التي تصف اسماً، والمنعوت هو الاسم الموصوف بتلك الصفة\nThe نعت is the adjective describing a noun, and the منعوت is the noun described by it',
      'النعت فعل، والمنعوت فاعله\nThe نعت is a verb, and the منعوت is its subject',
      'لا فرق بينهما، مصطلحان مترادفان\nThere is no difference — they are synonyms',
    ],
    correctIndex: 1,
    a: 'النعت هو الكلمة التي تصف اسماً وتوضح صفة من صفاته، والمنعوت هو الاسم الأصلي الذي تصفه، مثل "طالبٌ مجتهدٌ": طالبٌ منعوت، مجتهدٌ نعت.\nThe نعت is the word that describes a noun and picks out one of its qualities; the منعوت is the original noun being described. In "طالبٌ مجتهدٌ" ("a diligent student"): طالبٌ is the منعوت, مجتهدٌ is the نعت.',
  },
  {
    q: 'في كم وجه يجب أن يطابق النعت المنعوت؟\nIn how many respects must the نعت agree with the منعوت?',
    options: [
      'في التذكير والتأنيث فقط\nIn masculine/feminine only',
      'في العدد فقط\nIn number only',
      'في أربعة أوجه: التذكير/التأنيث، الإفراد/التثنية/الجمع، التعريف/التنكير، والإعراب (الحالة)\nIn four respects: masculine/feminine, singular/dual/plural, definite/indefinite, and case (رفع/نصب/جر)',
      'لا يلزم أي تطابق بينهما\nNo agreement is required between them',
    ],
    correctIndex: 2,
    a: 'يجب أن يطابق النعت منعوته في أربعة أوجه معاً: الجنس (تذكير/تأنيث)، العدد (إفراد/تثنية/جمع)، التعريف (معرفة/نكرة)، والحالة الإعرابية (رفع/نصب/جر).\nThe نعت must agree with its منعوت on all four fronts at once: gender (masculine/feminine), number (singular/dual/plural), definiteness (definite/indefinite), and case (رفع/نصب/جر).',
  },
  {
    q: 'ما هو الترتيب الصحيح للنعت والمنعوت في الجملة العربية؟\nWhat is the correct word order for the نعت and منعوت in an Arabic sentence?',
    options: [
      'النعت يسبق المنعوت دائماً\nThe نعت always comes before the منعوت',
      'المنعوت يسبق النعت دائماً\nThe منعوت always comes before the نعت',
      'لا ترتيب ثابت بينهما\nThere is no fixed order between them',
      'يتبادلان الترتيب حسب الجنس\nThe order swaps depending on gender',
    ],
    correctIndex: 1,
    a: 'الترتيب الثابت في العربية هو أن يأتي الموصوف (المنعوت) أولاً ثم تتبعه صفته (النعت): "طالبٌ مجتهدٌ" لا "مجتهدٌ طالبٌ".\nThe fixed order in Arabic is: the described noun (منعوت) comes first, followed by its adjective (نعت) — "طالبٌ مجتهدٌ" ("a diligent student"), never "مجتهدٌ طالبٌ."',
  },
  {
    q: 'أكمل: رأيتُ الطالبَ ___ (the diligent student, as a definite object)\nComplete: raʾaytu ṭ-ṭāliba ___ ("I saw the diligent student," as a definite object)',
    options: [
      'مجتهدٌ\nmujtahidun',
      'مجتهداً\nmujtahidan',
      'المجتهدَ\nal-mujtahida — "the diligent"',
      'مجتهدةً\nmujtahidatan',
    ],
    correctIndex: 2,
    a: 'الطالبَ هنا مفعول به معرفة منصوب، فيجب أن يطابقه النعت في التعريف (بأل) والنصب معاً: "المجتهدَ" — لا "مجتهداً" (نكرة) ولا "مجتهدٌ" (مرفوع).\nالطالبَ here is a definite direct object in منصوب, so the نعت must match it in both definiteness (with أل) and case: "المجتهدَ" — not "مجتهداً" (indefinite) and not "مجتهدٌ" (مرفوع).',
  },
  {
    q: 'أيّ من هذه الجمل بها خطأ في مطابقة النعت للمنعوت؟\nWhich of these sentences has an error in نعت-منعوت agreement?',
    options: [
      'رأيتُ طالباً مجتهداً\nraʾaytu ṭāliban mujtahidan — "I saw a diligent student"',
      'رأيتُ الطالبَ المجتهدَ\nraʾaytu ṭ-ṭāliba l-mujtahida — "I saw the diligent student"',
      'رأيتُ طالباً المجتهدَ\nraʾaytu ṭāliban al-mujtahida — mismatched definiteness',
      'رأيتُ الطالبةَ المجتهدةَ\nraʾaytu ṭ-ṭālibata l-mujtahidata — "I saw the diligent (female) student"',
    ],
    correctIndex: 2,
    a: '"طالباً المجتهدَ" خطأ لأنه يجمع بين منعوت نكرة (طالباً) ونعت معرفة (المجتهدَ) — يجب أن يتطابقا في التعريف؛ الصواب إما "طالباً مجتهداً" (كلاهما نكرة) أو "الطالبَ المجتهدَ" (كلاهما معرفة).\n"طالباً المجتهدَ" is wrong because it pairs an indefinite منعوت (طالباً) with a definite نعت (المجتهدَ) — they must match in definiteness. The correct forms are either "طالباً مجتهداً" (both indefinite) or "الطالبَ المجتهدَ" (both definite).',
  },
  {
    q: 'الطالباتُ المجتهداتُ ناجحاتٌ — لماذا جاء النعت "المجتهداتُ" بصيغة جمع المؤنث السالم؟\naṭ-ṭālibātu l-mujtahidātu nājiḥātun ("The diligent [female] students are successful") — why is the نعت "المجتهداتُ" in the sound feminine plural form?',
    options: [
      'لأن كل النعوت تأتي بهذه الصيغة دائماً\nBecause every نعت always takes this form',
      'لأن المنعوت "الطالباتُ" جمع مؤنث سالم، والنعت يجب أن يطابقه في العدد والجنس\nBecause the منعوت "الطالباتُ" is a sound feminine plural, and the نعت must match it in number and gender',
      'صدفة لا قاعدة لها\nIt is a coincidence with no rule behind it',
      'لأن الجملة في حالة نصب\nBecause the sentence is in the منصوب case',
    ],
    correctIndex: 1,
    a: 'يجب أن يطابق النعت منعوته في العدد والجنس، وبما أن "الطالباتُ" جمع مؤنث سالم، وجب أن يأتي نعتها "المجتهداتُ" بنفس الصيغة.\nThe نعت must match its منعوت in number and gender. Since "الطالباتُ" is a sound feminine plural, its نعت "المجتهداتُ" must take that same form.',
  },
  {
    q: 'هذا كتابٌ مفيدٌ — أعرب "مفيدٌ" إعراباً كاملاً.\nhādhā kitābun mufīdun ("This is a useful book") — give the full case analysis of "مفيدٌ."',
    options: [
      'نعت مرفوع وعلامة رفعه الضمة، تابع لمنعوته "كتابٌ" في الرفع والتنكير والتذكير والإفراد\nA نعت, مرفوع with a ḍammah, following its منعوت "كتابٌ" in case, indefiniteness, gender, and number',
      'خبر مرفوع لمبتدأ محذوف\nA مرفوع predicate (خبر) for an omitted subject (مبتدأ)',
      'مفعول به منصوب\nA منصوب direct object (مفعول به)',
      'مضاف إليه مجرور\nA مضاف إليه (genitive)',
    ],
    correctIndex: 0,
    a: 'مفيدٌ نعت لـ"كتابٌ"، وهو مرفوع تبعاً له لأن كتابٌ خبر مرفوع، ويطابقه أيضاً في التنكير والتذكير والإفراد — أربعة أوجه من المطابقة مجتمعة.\nمفيدٌ is the نعت of "كتابٌ." It is مرفوع because it follows كتابٌ, which is the مرفوع خبر, and it also matches it in indefiniteness, gender, and number — all four agreements at once.',
  },
  {
    q: 'لماذا يُعتبر النعت من "التوابع" في النحو العربي؟\nWhy is the نعت classed among the "توابع" (followers) in Arabic grammar?',
    options: [
      'لأنه يسبق الفعل دائماً في الجملة\nBecause it always precedes the verb in the sentence',
      'لأنه يتبع منعوته في إعرابه (حركته) بدلاً من أن يكون له إعراب مستقل عن العامل\nBecause it takes its case ending from its منعوت instead of having an independent case governed by its own عامل',
      'لأنه لا يمكن حذفه من الجملة أبداً\nBecause it can never be omitted from the sentence',
      'لأنه دائماً في محل رفع\nBecause it is always in the مرفوع position',
    ],
    correctIndex: 1,
    a: 'يُسمى النعت من "التوابع" لأنه لا يأخذ حركته من عامل مستقل، بل "يتبع" حركة المنعوت نفسها في الرفع أو النصب أو الجر، إضافة إلى تطابقه معه في الجنس والعدد والتعريف.\nThe نعت is called one of the "توابع" because it doesn\'t get its case ending from an independent governor — it simply "follows" (يتبع) whatever case the منعوت itself has, whether رفع, نصب, or جر, in addition to matching it in gender, number, and definiteness.',
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
            Topic 12 of 62
          </p>
          <h1 className="font-serif tracking-[-0.02em] text-3xl font-bold text-foreground leading-tight mb-3">
            <span
              dir="rtl"
              lang="ar"
              style={{ fontFamily: "'Noto Naskh Arabic', serif" }}
              className="mr-2"
            >
              النعت والمنعوت
            </span>
            — Adjective Agreement
          </h1>
          <p className="text-muted-foreground text-base max-w-xl">
            An Arabic adjective (<bdi lang="ar">نعت</bdi>) must agree with the noun it describes (<bdi lang="ar">منعوت</bdi>) on all four
            fronts at once — gender, number, definiteness, <span className="italic">and</span>{' '}
            case — which is why it's classed as a <bdi lang="ar">تابع</bdi> ("follower") rather than something with its
            own independent case. Word order is fixed too: the noun always comes first, the
            adjective right after (<bdi lang="ar">طالبٌ مجتهدٌ</bdi> — "a diligent student", never the reverse).
          </p>
        </div>
      </div>
      <div className="mx-auto w-[min(720px,calc(100%-2rem))] py-8">
        <QuizCarousel items={quizItems} />
      </div>
    </main>
  )
}

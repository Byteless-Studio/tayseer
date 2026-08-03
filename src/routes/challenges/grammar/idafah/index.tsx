import { createFileRoute, Link } from '@tanstack/react-router'
import { QuizCarousel } from '#/components/QuizCarousel'
import type { StrictQuizItem } from '#/routes/challenges/-quiz-types'

export const Route = createFileRoute('/challenges/grammar/idafah/')({
  head: () => ({ meta: [{ title: 'Idāfah — Grammar — Tayseer' }] }),
  component: TopicPage,
})

const quizItems: StrictQuizItem[] = [
  {
    q: 'ما هي الإضافة وما ركناها؟\nWhat is idāfah, and what are its two parts?',
    options: [
      'تركيب من فعل وفاعل\nA construction of a verb and its subject',
      'تركيب من اسمين متتاليين، الأول مضاف والثاني مضاف إليه\nTwo nouns placed back to back — the first is the مضاف, the second the مضاف إليه',
      'تركيب من حرف جر واسم مجرور فقط\nOnly a preposition plus the noun it governs',
      'تركيب من مبتدأ وخبر\nA subject (مبتدأ) and a predicate (خبر)',
    ],
    correctIndex: 1,
    a: 'الإضافة تركيب من اسمين: المضاف (الأول) والمضاف إليه (الثاني)، ويفيد الملكية أو الاختصاص.\nIdāfah joins two nouns: the مضاف (first) and the مضاف إليه (second). It expresses possession or belonging — كتابُ الطالبِ = "the student\'s book".',
  },
  {
    q: 'كتابُ الطالبِ — ما حكم المضاف "كتابُ" هنا؟\nIn كتابُ الطالبِ, what are the rules for the first term (المضاف) "كتابُ"?',
    options: [
      'يأخذ تنويناً وأل التعريف معاً\nIt takes both تنوين and the article أل',
      'لا يأخذ تنويناً ولا أل التعريف أبداً\nIt never takes تنوين and never takes أل',
      'يُجزم دائماً\nIt is always jussive (مجزوم)',
      'يكون منصوباً دائماً\nIt is always accusative (منصوب), whatever its role',
    ],
    correctIndex: 1,
    a: 'المضاف لا يأخذ تنويناً ولا أل، لأنه يكتسب تعريفه من المضاف إليه.\nThe مضاف (first term) never carries تنوين and never takes أل — it draws its definiteness from the مضاف إليه that follows it. So it is كتابُ الطالبِ, never الكتابُ الطالبِ or كتابٌ الطالبِ.',
  },
  {
    q: 'ما إعراب المضاف إليه دائماً؟\nWhat case is the مضاف إليه (the second noun) always in?',
    options: [
      'مرفوع دائماً\nAlways مرفوع (nominative)',
      'منصوب دائماً\nAlways منصوب (accusative)',
      'مجرور دائماً\nAlways مجرور (genitive)',
      'يتبع حركة المضاف\nIt copies whatever case the مضاف has',
    ],
    correctIndex: 2,
    a: 'المضاف إليه مجرور دائماً مهما كان إعراب المضاف.\nThe مضاف إليه is always مجرور (genitive), regardless of the مضاف\'s own case. In فتحتُ بابَ البيتِ the مضاف بابَ is منصوب as the object, yet البيتِ stays مجرور.',
  },
  {
    q: 'أيّ جملة فيها خطأ في تركيب الإضافة؟\nWhich sentence contains an error in its idāfah construction?',
    options: [
      'هذا قلمُ الطالبِ\nhādhā qalamu ṭ-ṭālibi — "This is the student\'s pen"',
      'هذا قلمٌ الطالبِ\nhādhā qalamun aṭ-ṭālibi',
      'رأيتُ قلمَ الطالبِ\nra\'aytu qalama ṭ-ṭālibi — "I saw the student\'s pen"',
      'كتبتُ بقلمِ الطالبِ\nkatabtu bi-qalami ṭ-ṭālibi — "I wrote with the student\'s pen"',
    ],
    correctIndex: 1,
    a: '"قلمٌ الطالبِ" خطأ لأن المضاف لا يحمل تنويناً أبداً.\n"قلمٌ الطالبِ" is wrong: the مضاف can never carry تنوين. Drop it — قلمُ الطالبِ. The other three are correct; note the مضاف changes case with its role (قلمُ nominative, قلمَ accusative, قلمِ genitive after بـ) while الطالبِ stays مجرور throughout.',
  },
  {
    q: 'بابُ بيتِ محمدٍ — سلسلة إضافات. لماذا "محمدٍ" مجرور؟\nبابُ بيتِ محمدٍ is a chained idāfah. What makes the final term محمدٍ genitive?',
    options: [
      'لأنه مضاف إليه لكلمة "بيتِ" التي قبله\nIt is the مضاف إليه of بيتِ, the word immediately before it',
      'لأنه في أول الجملة معنوياً\nBecause it is the logical subject of the phrase',
      'لأنه مفعول به\nBecause it is a direct object',
      'لا علاقة له بالإضافة\nIt has nothing to do with the idāfah',
    ],
    correctIndex: 0,
    a: 'في السلسلة كل اسم مضاف إليه لما قبله مباشرة ومجرور به.\nIn a chain, each noun is the مضاف إليه of the one directly before it: بيتِ is مضاف إليه of بابُ, and محمدٍ is مضاف إليه of بيتِ. Every link is its own idāfah — "the door of the house of Muhammad."',
  },
  {
    q: 'كتابُ الطالبِ مقابل كتابُ طالبٍ — ما الذي يحدد تعريف العبارة كلها؟\nكتابُ الطالبِ vs كتابُ طالبٍ — what decides whether the whole phrase is definite or indefinite?',
    options: [
      'شكل المضاف نفسه\nThe form of the مضاف itself',
      'تعريف أو تنكير المضاف إليه\nWhether the مضاف إليه is definite or indefinite',
      'موقع الجملة في النص\nWhere the phrase sits in the sentence',
      'عدد الكلمات في الإضافة\nHow many words the idāfah contains',
    ],
    correctIndex: 1,
    a: 'تعريف العبارة كلها يتبع المضاف إليه.\nThe definiteness of the whole phrase follows the مضاف إليه. الطالبِ is definite, so كتابُ الطالبِ = "the student\'s book"; طالبٍ is indefinite, so كتابُ طالبٍ = "a student\'s book" — even though كتاب itself looks identical in both.',
  },
  {
    q: 'أعرب "بابَ" في: فتحتُ بابَ البيتِ.\nParse بابَ in the sentence فتحتُ بابَ البيتِ ("I opened the door of the house").',
    options: [
      'مفعول به منصوب، وهو مضاف\nDirect object (منصوب), and simultaneously a مضاف',
      'فاعل مرفوع\nSubject of the verb (مرفوع)',
      'مضاف إليه مجرور\nمضاف إليه (مجرور)',
      'خبر مرفوع\nPredicate (مرفوع)',
    ],
    correctIndex: 0,
    a: 'بابَ مفعول به منصوب، وهو في الوقت نفسه مضاف.\nبابَ is the direct object of فتحتُ, hence منصوب — and at the same time it is a مضاف, because البيتِ follows it. A مضاف takes whatever case its own role demands; only the مضاف إليه is locked to مجرور.',
  },
  {
    q: 'ما المعنى الأساسي الذي تفيده الإضافة؟\nWhat core meaning does the idāfah construction convey?',
    options: [
      'وقوع الفعل على المفعول به\nA verb falling upon its object',
      'الملكية أو الاختصاص\nPossession or belonging — بيتُ محمدٍ = "Muhammad\'s house"',
      'وصف المضاف إليه\nThe first noun describing the second, like an adjective',
      'لا علاقة في المعنى بين الاسمين\nNo meaningful relationship between the two nouns',
    ],
    correctIndex: 1,
    a: 'الإضافة تفيد الملكية أو الاختصاص.\nIdāfah expresses possession or belonging: the مضاف إليه owns or specifies the مضاف. بيتُ محمدٍ = "Muhammad\'s house." Compare this with نعت/صفة, where the second word describes the first rather than owning it.',
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
            Topic 10 of 47
          </p>
          <h1 className="font-serif tracking-[-0.02em] text-3xl font-bold text-foreground leading-tight mb-3">
            <span
              dir="rtl"
              lang="ar"
              style={{ fontFamily: "'Noto Naskh Arabic', serif" }}
              className="mr-2"
            >
              الإضافة
            </span>
            — Idāfah
          </h1>
          <p className="text-muted-foreground text-base max-w-xl">
            Idāfah glues two nouns together to mean "of/belonging to": the{' '}
            <span className="font-medium text-foreground">مضاف</span> (first term) takes no تنوين
            and no أل, while the <span className="font-medium text-foreground">مضاف إليه</span>{' '}
            (second term) is always مجرور. Idāfahs can chain (بابُ بيتِ محمدٍ — "the door of
            Muhammad's house"), and the whole phrase's definiteness follows the last term in the
            chain.
          </p>
        </div>
      </div>
      <div className="mx-auto w-[min(720px,calc(100%-2rem))] py-8">
        <QuizCarousel items={quizItems} />
      </div>
    </main>
  )
}

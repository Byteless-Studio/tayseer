import { createFileRoute, Link } from '@tanstack/react-router'
import { QuizCarousel } from '#/components/QuizCarousel'
import type { StrictQuizItem } from '#/routes/challenges/-quiz-types'

export const Route = createFileRoute('/challenges/grammar/idafah/')({
  head: () => ({ meta: [{ title: 'Idāfah — Grammar — Tayseer' }] }),
  component: TopicPage,
})

const quizItems: StrictQuizItem[] = [
  {
    q: 'ما هي الإضافة وما ركناها؟',
    options: [
      'تركيب من فعل وفاعل',
      'تركيب من اسمين متتاليين يدل ثانيهما على ملكية أو اختصاص للأول: المضاف (الأول) والمضاف إليه (الثاني)',
      'تركيب من حرف جر واسم مجرور فقط',
      'تركيب من مبتدأ وخبر منفصلين بفاصلة',
    ],
    correctIndex: 1,
    a: 'الإضافة تركيب من اسمين: المضاف (الأول, وهو المضاف إلى غيره) والمضاف إليه (الثاني), ويفيد هذا التركيب معنى الملكية أو الاختصاص، مثل "كتابُ الطالبِ" = "the student\'s book".',
  },
  {
    q: 'كتابُ الطالبِ — What are the grammatical rules for the first term (المضاف) "كتابُ" here?',
    options: [
      'يأخذ تنويناً وأل التعريف معاً',
      'لا يأخذ تنويناً ولا أل التعريف أبداً',
      'يُجزم دائماً',
      'يكون منصوباً دائماً بصرف النظر عن موقعه',
    ],
    correctIndex: 1,
    a: 'المضاف (الكلمة الأولى في الإضافة) لا يأخذ تنويناً ولا أل التعريف مطلقاً، لأنه يكتسب تعريفه أو تخصيصه من المضاف إليه الذي يليه مباشرة.',
  },
  {
    q: 'ما حكم إعراب المضاف إليه (الاسم الثاني في الإضافة) دائماً؟',
    options: ['مرفوع دائماً', 'منصوب دائماً', 'مجرور دائماً', 'يتبع حركة المضاف نفسها'],
    correctIndex: 2,
    a: 'المضاف إليه مجرور دائماً بصرف النظر عن موقع المضاف الإعرابي، سواء كان المضاف مرفوعاً أو منصوباً أو مجروراً هو نفسه.',
  },
  {
    q: 'أيّ من هذه الجمل بها خطأ نحوي في تركيب الإضافة؟',
    options: ['هذا قلمُ الطالبِ', 'هذا قلمٌ الطالبِ', 'رأيتُ قلمَ الطالبِ', 'كتبتُ بقلمِ الطالبِ'],
    correctIndex: 1,
    a: '"قلمٌ الطالبِ" خطأ لأن المضاف (قلم) لا يجوز أن يحمل تنويناً أبداً؛ الصواب حذف التنوين: "قلمُ الطالبِ".',
  },
  {
    q: 'بابُ بيتِ محمدٍ — هذه سلسلة إضافات مترابطة (chained idāfah). What determines the case of محمدٍ, the final term?',
    options: [
      'محمدٍ مجرور لأنه مضاف إليه لكلمة "بيتِ" التي قبله مباشرة',
      'محمدٍ مرفوع لأنه في أول الجملة معنوياً',
      'محمدٍ منصوب لأنه مفعول به',
      'لا علاقة له بالإضافة إطلاقاً',
    ],
    correctIndex: 0,
    a: 'في سلسلة الإضافات المتتالية، كل اسم مضاف إليه لما قبله مباشرة ومجرور به: بيتِ مضاف إليه لبابُ (مجرور), ومحمدٍ مضاف إليه لبيتِ (مجرور أيضاً) — كل حلقة في السلسلة إضافة قائمة بذاتها.',
  },
  {
    q: 'كتابُ الطالبِ ("the student\'s book", definite) مقابل كتابُ طالبٍ ("a student\'s book", indefinite) — What determines whether the whole idāfah phrase is definite or indefinite?',
    options: [
      'شكل المضاف نفسه فقط',
      'تعريف أو تنكير المضاف إليه — إن كان معرفة فالعبارة كلها معرفة، وإن كان نكرة فالعبارة كلها نكرة',
      'موقع الجملة في النص',
      'عدد الكلمات في الإضافة',
    ],
    correctIndex: 1,
    a: 'تعريف عبارة الإضافة بأكملها يتبع تعريف المضاف إليه تحديداً: "الطالبِ" معرفة بأل فتصبح "كتابُ الطالبِ" معرفة، بينما "طالبٍ" نكرة فتصبح "كتابُ طالبٍ" نكرة — رغم أن "كتاب" نفسها لم تتغير شكلاً.',
  },
  {
    q: 'أعرب "بابَ" في الجملة: فتحتُ بابَ البيتِ.',
    options: [
      'مفعول به منصوب، وهو مضاف',
      'فاعل مرفوع',
      'مضاف إليه مجرور',
      'خبر مرفوع',
    ],
    correctIndex: 0,
    a: 'بابَ هنا مفعول به لفعل "فتحتُ" فهو منصوب، وهو في الوقت ذاته مضاف (لأن بعده مضاف إليه هو "البيتِ") — إعراب المضاف يتحدد بموقعه في الجملة تماماً كأي اسم آخر، بينما المضاف إليه يبقى مجروراً ثابتاً.',
  },
  {
    q: 'ما معنى الإضافة "معنى" (الفكرة الأساسية التي يفيدها هذا التركيب)؟',
    options: [
      "الفعل يقع على المفعول به مباشرة",
      "أن المضاف إليه يخصص أو يملك المضاف، أي 'ملكية أو اختصاص' — بيتُ محمدٍ = the house belonging to Muhammad",
      "المضاف يصف المضاف إليه كصفة",
      "المضاف والمضاف إليه لا علاقة بينهما في المعنى",
    ],
    correctIndex: 1,
    a: 'المعنى الأساسي للإضافة هو "الملكية أو الاختصاص" — المضاف إليه يخصص المضاف أو يملكه: بيتُ محمدٍ = "Muhammad\'s house/the house belonging to Muhammad".',
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

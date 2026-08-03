import { createFileRoute, Link } from '@tanstack/react-router'
import { QuizCarousel } from '#/components/QuizCarousel'
import type { StrictQuizItem } from '#/routes/challenges/-quiz-types'

export const Route = createFileRoute('/challenges/grammar/adjectives-agreement/')({
  head: () => ({ meta: [{ title: 'Adjective Agreement — Grammar — Tayseer' }] }),
  component: TopicPage,
})

const quizItems: StrictQuizItem[] = [
  {
    q: 'ما هو النعت (الصفة) وما هو المنعوت (الموصوف)؟',
    options: [
      'النعت هو الاسم الأصلي، والمنعوت هو الصفة التي تصفه',
      'النعت هو الصفة التي تصف اسماً، والمنعوت هو الاسم الموصوف بتلك الصفة',
      'النعت فعل، والمنعوت فاعله',
      'لا فرق بينهما، مصطلحان مترادفان',
    ],
    correctIndex: 1,
    a: 'النعت هو الكلمة التي تصف اسماً وتوضح صفة من صفاته، والمنعوت هو الاسم الأصلي الذي تصفه، مثل "طالبٌ مجتهدٌ": طالبٌ منعوت، مجتهدٌ نعت.',
  },
  {
    q: 'في كم وجه يجب أن يطابق النعت المنعوت؟',
    options: [
      'في التذكير والتأنيث فقط',
      'في العدد فقط',
      'في أربعة أوجه: التذكير/التأنيث، الإفراد/التثنية/الجمع، التعريف/التنكير، والإعراب (الحالة)',
      'لا يلزم أي تطابق بينهما',
    ],
    correctIndex: 2,
    a: 'يجب أن يطابق النعت منعوته في أربعة أوجه معاً: الجنس (تذكير/تأنيث)، العدد (إفراد/تثنية/جمع)، التعريف (معرفة/نكرة)، والحالة الإعرابية (رفع/نصب/جر).',
  },
  {
    q: 'ما هو الترتيب الصحيح للنعت والمنعوت في الجملة العربية؟',
    options: [
      'النعت يسبق المنعوت دائماً',
      'المنعوت يسبق النعت دائماً',
      'لا ترتيب ثابت بينهما',
      'يتبادلان الترتيب حسب الجنس',
    ],
    correctIndex: 1,
    a: 'الترتيب الثابت في العربية هو أن يأتي الموصوف (المنعوت) أولاً ثم تتبعه صفته (النعت): "طالبٌ مجتهدٌ" لا "مجتهدٌ طالبٌ".',
  },
  {
    q: 'أكمل: رأيتُ الطالبَ ___ (the diligent student, as a definite object)',
    options: ['مجتهدٌ', 'مجتهداً', 'المجتهدَ', 'مجتهدةً'],
    correctIndex: 2,
    a: 'الطالبَ هنا مفعول به معرفة منصوب، فيجب أن يطابقه النعت في التعريف (بأل) والنصب معاً: "المجتهدَ" — لا "مجتهداً" (نكرة) ولا "مجتهدٌ" (مرفوع).',
  },
  {
    q: 'أيّ من هذه الجمل بها خطأ في مطابقة النعت للمنعوت؟',
    options: ['رأيتُ طالباً مجتهداً', 'رأيتُ الطالبَ المجتهدَ', 'رأيتُ طالباً المجتهدَ', 'رأيتُ الطالبةَ المجتهدةَ'],
    correctIndex: 2,
    a: '"طالباً المجتهدَ" خطأ لأنه يجمع بين منعوت نكرة (طالباً) ونعت معرفة (المجتهدَ) — يجب أن يتطابقا في التعريف؛ الصواب إما "طالباً مجتهداً" (كلاهما نكرة) أو "الطالبَ المجتهدَ" (كلاهما معرفة).',
  },
  {
    q: 'الطالباتُ المجتهداتُ ناجحاتٌ — لماذا جاء النعت "المجتهداتُ" بصيغة جمع المؤنث السالم؟',
    options: [
      'لأن كل النعوت تأتي بهذه الصيغة دائماً',
      'لأن المنعوت "الطالباتُ" جمع مؤنث سالم، والنعت يجب أن يطابقه في العدد والجنس',
      'صدفة لا قاعدة لها',
      'لأن الجملة في حالة نصب',
    ],
    correctIndex: 1,
    a: 'يجب أن يطابق النعت منعوته في العدد والجنس، وبما أن "الطالباتُ" جمع مؤنث سالم، وجب أن يأتي نعتها "المجتهداتُ" بنفس الصيغة.',
  },
  {
    q: 'هذا كتابٌ مفيدٌ — أعرب "مفيدٌ" إعراباً كاملاً.',
    options: [
      'نعت مرفوع وعلامة رفعه الضمة، تابع لمنعوته "كتابٌ" في الرفع والتنكير والتذكير والإفراد',
      'خبر مرفوع لمبتدأ محذوف',
      'مفعول به منصوب',
      'مضاف إليه مجرور',
    ],
    correctIndex: 0,
    a: 'مفيدٌ نعت لـ"كتابٌ"، وهو مرفوع تبعاً له لأن كتابٌ خبر مرفوع، ويطابقه أيضاً في التنكير والتذكير والإفراد — أربعة أوجه من المطابقة مجتمعة.',
  },
  {
    q: 'لماذا يُعتبر النعت من "التوابع" في النحو العربي؟',
    options: [
      'لأنه يسبق الفعل دائماً في الجملة',
      'لأنه يتبع منعوته في إعرابه (حركته) بدلاً من أن يكون له إعراب مستقل عن العامل',
      'لأنه لا يمكن حذفه من الجملة أبداً',
      'لأنه دائماً في محل رفع',
    ],
    correctIndex: 1,
    a: 'يُسمى النعت من "التوابع" لأنه لا يأخذ حركته من عامل مستقل، بل "يتبع" حركة المنعوت نفسها في الرفع أو النصب أو الجر، إضافة إلى تطابقه معه في الجنس والعدد والتعريف.',
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
            Topic 12 of 47
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
            An Arabic adjective (نعت) must agree with the noun it describes (منعوت) on all four
            fronts at once — gender, number, definiteness, <span className="italic">and</span>{' '}
            case — which is why it's classed as a تابع ("follower") rather than something with its
            own independent case. Word order is fixed too: the noun always comes first, the
            adjective right after (طالبٌ مجتهدٌ — "a diligent student", never the reverse).
          </p>
        </div>
      </div>
      <div className="mx-auto w-[min(720px,calc(100%-2rem))] py-8">
        <QuizCarousel items={quizItems} />
      </div>
    </main>
  )
}

import { createFileRoute, Link } from '@tanstack/react-router'
import { QuizCarousel } from '#/components/QuizCarousel'
import type { StrictQuizItem } from '#/routes/challenges/-quiz-types'

export const Route = createFileRoute('/challenges/grammar/masculine-feminine/')({
  head: () => ({ meta: [{ title: 'Masculine & Feminine Nouns — Grammar — Tayseer' }] }),
  component: TopicPage,
})

const quizItems: StrictQuizItem[] = [
  {
    q: 'إذا كان الاسم خالياً من تاء التأنيث وليس من كلمات المؤنث السماعي المعروفة، فما جنسه الافتراضي؟',
    options: ['مؤنث', 'مذكر', 'مثنى', 'لا شيء مما سبق'],
    correctIndex: 1,
    a: 'الأصل في الأسماء العربية أنها مذكرة ما لم تظهر عليها علامة تأنيث كالتاء المربوطة، أو تكن من الأسماء المؤنثة سماعاً.',
  },
  {
    q: 'طالب (student, masc.) + ة → ___, meaning "female student"',
    options: ['طالبة', 'طالبٌ', 'طالبين', 'طالبون'],
    correctIndex: 0,
    a: 'التاء المربوطة (ة) هي العلامة القياسية الأشهر للتأنيث في العربية، تُضاف لتحويل الاسم من صيغته المذكرة إلى المؤنثة.',
  },
  {
    q: 'الكلمة "أرض" (earth/land) مؤنثة رغم خلوها من تاء التأنيث. ماذا يسمى هذا النوع من التأنيث؟',
    options: [
      'مؤنث لفظي',
      'مؤنث سماعي/مجازي — لا تحمل علامة ظاهرة وتُحفظ سماعاً عن العرب',
      'مؤنث قياسي',
      'ليست مؤنثة أصلاً',
    ],
    correctIndex: 1,
    a: 'بعض الأسماء مؤنثة سماعاً بلا علامة ظاهرة، تُعرف بالمؤنث السماعي أو المجازي، ومنها أرض وشمس وريح — يجب حفظها لأن اللفظ نفسه لا يدل عليها.',
  },
  {
    q: 'أيّ من هذه الكلمات مؤنث رغم خلوها من تاء التأنيث؟',
    options: ['كتابٌ', 'قلمٌ', 'شمسٌ', 'بابٌ'],
    correctIndex: 2,
    a: 'شمس (sun) من الأسماء المؤنثة سماعاً بلا علامة تأنيث ظاهرة، ولذلك يُقال "الشمسُ مشرقةٌ" لا "مشرقٌ".',
  },
  {
    q: 'Body parts that come in natural pairs (يد hand, عين eye, أذن ear, رِجل foot) are typically treated as ___ in gender, even without ة.',
    options: ['مذكرة', 'مؤنثة', 'لا شيء يحدد جنسها', 'مثناة دائماً بحكم كونها زوجية'],
    correctIndex: 1,
    a: 'الأعضاء المزدوجة في جسم الإنسان (اليد، العين، الأذن، الرِّجل) مؤنثة سماعاً رغم خلوها من التاء، فيقال "يدٌ طويلةٌ" لا "طويلٌ".',
  },
  {
    q: 'أيّ جملة فيها خطأ في مطابقة الصفة للموصوف من حيث التذكير والتأنيث؟',
    options: ['الشمسُ حارّةٌ اليوم', 'الشمسُ حارٌّ اليوم', 'العينُ جميلةٌ', 'الأرضُ واسعةٌ'],
    correctIndex: 1,
    a: '"الشمسُ حارٌّ" خطأ لأن شمس اسم مؤنث سماعاً، فيجب أن تطابقه الصفة في التأنيث: الصواب "الشمسُ حارّةٌ".',
  },
  {
    q: 'بنتٌ ذكيةٌ ("a smart girl") — Why does the adjective ذكية carry a ة even though بنت already ends with one?',
    options: [
      'صدفة لا قاعدة لها',
      'لأن الصفة (النعت) يجب أن تطابق الموصوف في التذكير والتأنيث',
      'لأن كل الصفات تنتهي بتاء مربوطة دائماً بغض النظر عن الموصوف',
      'لأن بنت اسم مذكر ويحتاج تصحيحاً',
    ],
    correctIndex: 1,
    a: 'النعت يجب أن يطابق المنعوت في النوع (تذكير/تأنيث)، وبما أن بنت مؤنثة، وجب أن تكون صفتها "ذكية" لا "ذكياً".',
  },
  {
    q: 'رجلٌ طويلٌ مقابل اِمرأةٌ طويلةٌ — ما القاعدة النحوية التي يوضحها هذان المثالان معاً؟',
    options: [
      'أن النعت يتبع المنعوت في العدد فقط',
      'أن النعت يتبع المنعوت في التذكير والتأنيث',
      'أن الصفة تسبق الموصوف دائماً في الترتيب',
      'أن كل الصفات مؤنثة أصلاً بصرف النظر عن الموصوف',
    ],
    correctIndex: 1,
    a: 'في كلا المثالين تتبع الصفة موصوفها في الجنس: "طويل" لرجل المذكر، و"طويلة" لامرأة المؤنثة — وهذه قاعدة مطابقة النعت للمنعوت في التذكير والتأنيث.',
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
            Topic 2 of 47
          </p>
          <h1 className="font-serif tracking-[-0.02em] text-3xl font-bold text-foreground leading-tight mb-3">
            <span
              dir="rtl"
              lang="ar"
              style={{ fontFamily: "'Noto Naskh Arabic', serif" }}
              className="mr-2"
            >
              التذكير والتأنيث
            </span>
            — Masculine &amp; Feminine Nouns
          </h1>
          <p className="text-muted-foreground text-base max-w-xl">
            Arabic nouns default to <span className="font-medium text-foreground">مذكر</span>{' '}
            (masculine) unless marked otherwise. The typical feminine marker is a trailing{' '}
            <span className="font-medium text-foreground">تاء مربوطة</span> (ة), but a handful of
            "hidden feminine" nouns — أرض، شمس، ريح, and body parts that come in natural pairs — are
            feminine with no visible marker at all. Whichever kind, an adjective describing the noun
            must always match its gender.
          </p>
        </div>
      </div>
      <div className="mx-auto w-[min(720px,calc(100%-2rem))] py-8">
        <QuizCarousel items={quizItems} />
      </div>
    </main>
  )
}

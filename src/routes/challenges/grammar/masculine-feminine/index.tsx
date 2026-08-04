import { createFileRoute, Link } from '@tanstack/react-router'
import { QuizCarousel } from '#/components/QuizCarousel'
import type { StrictQuizItem } from '#/routes/challenges/-quiz-types'

export const Route = createFileRoute('/challenges/grammar/masculine-feminine/')({
  head: () => ({ meta: [{ title: 'Masculine & Feminine Nouns — Grammar — Tayseer' }] }),
  component: TopicPage,
})

const quizItems: StrictQuizItem[] = [
  {
    q: 'إذا كان الاسم خالياً من تاء التأنيث وليس من كلمات المؤنث السماعي المعروفة، فما جنسه الافتراضي؟\nIf a noun has no تاء التأنيث (feminine ة) and is not one of the known "hidden feminine" words, what is its default gender?',
    options: [
      'مؤنث\nFeminine',
      'مذكر\nMasculine',
      'مثنى\nDual',
      'لا شيء مما سبق\nNone of the above',
    ],
    correctIndex: 1,
    a: 'الأصل في الأسماء العربية أنها مذكرة ما لم تظهر عليها علامة تأنيث كالتاء المربوطة، أو تكن من الأسماء المؤنثة سماعاً.\nArabic nouns are masculine by default unless they carry a feminine marker like the تاء مربوطة, or belong to the "hidden feminine" (مؤنث سماعي) nouns learned by usage.',
  },
  {
    q: 'طالب (student, masc.) + ة → ___, meaning "female student"\nطالب (student, masc.) + ة → ___, meaning "female student"',
    options: [
      'طالبة\nṭālibah — "female student"',
      'طالبٌ\nṭālibun — "student" (masculine, unchanged)',
      'طالبين\nṭālibayn — "two students" (dual)',
      'طالبون\nṭālibūn — "students" (masculine plural)',
    ],
    correctIndex: 0,
    a: 'التاء المربوطة (ة) هي العلامة القياسية الأشهر للتأنيث في العربية، تُضاف لتحويل الاسم من صيغته المذكرة إلى المؤنثة.\nThe تاء مربوطة (ة) is the most common standard feminine marker in Arabic — added to turn a noun from its masculine form into its feminine one.',
  },
  {
    q: 'الكلمة "أرض" (earth/land) مؤنثة رغم خلوها من تاء التأنيث. ماذا يسمى هذا النوع من التأنيث؟\nThe word أرض ("earth/land") is feminine despite having no تاء التأنيث. What is this type of feminine called?',
    options: [
      'مؤنث لفظي\n"Verbal" feminine (مؤنث لفظي) — a noun that only looks feminine in form',
      'مؤنث سماعي/مجازي — لا تحمل علامة ظاهرة وتُحفظ سماعاً عن العرب\n"Hidden" feminine (مؤنث سماعي/مجازي) — no visible marker; memorized from native usage',
      'مؤنث قياسي\n"Standard" feminine (مؤنث قياسي) — feminine by a regular, predictable rule',
      'ليست مؤنثة أصلاً\nIt is not feminine at all',
    ],
    correctIndex: 1,
    a: 'بعض الأسماء مؤنثة سماعاً بلا علامة ظاهرة، تُعرف بالمؤنث السماعي أو المجازي، ومنها أرض وشمس وريح — يجب حفظها لأن اللفظ نفسه لا يدل عليها.\nSome nouns are feminine by usage alone, with no visible marker — known as مؤنث سماعي or مجازي. أرض, شمس, and ريح are examples; they must be memorized, since the word\'s form gives no clue.',
  },
  {
    q: 'أيّ من هذه الكلمات مؤنث رغم خلوها من تاء التأنيث؟\nWhich of these words is feminine despite having no تاء التأنيث?',
    options: [
      'كتابٌ\nkitābun — "a book" (masculine)',
      'قلمٌ\nqalamun — "a pen" (masculine)',
      'شمسٌ\nshamsun — "a sun" (feminine, hidden marker)',
      'بابٌ\nbābun — "a door" (masculine)',
    ],
    correctIndex: 2,
    a: 'شمس (sun) من الأسماء المؤنثة سماعاً بلا علامة تأنيث ظاهرة، ولذلك يُقال "الشمسُ مشرقةٌ" لا "مشرقٌ".\nشمس ("sun") is one of the nouns that is feminine by usage with no visible marker, which is why we say "الشمسُ مشرقةٌ" ("the sun is shining," feminine), never "مشرقٌ" (masculine).',
  },
  {
    q: 'أعضاء الجسم المزدوجة بطبيعتها (يد hand، عين eye، أذن ear، رِجل foot) تُعامل عادة على أنها ___ في الجنس، حتى بلا تاء.\nBody parts that come in natural pairs (يد hand, عين eye, أذن ear, رِجل foot) are typically treated as ___ in gender, even without ة.',
    options: [
      'مذكرة\nMasculine',
      'مؤنثة\nFeminine',
      'لا شيء يحدد جنسها\nNothing determines their gender',
      'مثناة دائماً بحكم كونها زوجية\nAlways dual, simply because they come in pairs',
    ],
    correctIndex: 1,
    a: 'الأعضاء المزدوجة في جسم الإنسان (اليد، العين، الأذن، الرِّجل) مؤنثة سماعاً رغم خلوها من التاء، فيقال "يدٌ طويلةٌ" لا "طويلٌ".\nPaired body parts (اليد, العين, الأذن, الرِّجل) are feminine by usage even without the ة marker, so we say "يدٌ طويلةٌ" ("a long hand," feminine), not "طويلٌ" (masculine).',
  },
  {
    q: 'أيّ جملة فيها خطأ في مطابقة الصفة للموصوف من حيث التذكير والتأنيث؟\nWhich sentence has an error in matching the adjective to the noun\'s gender?',
    options: [
      'الشمسُ حارّةٌ اليوم\nash-shamsu ḥārratun al-yawm — "The sun is hot today"',
      'الشمسُ حارٌّ اليوم\nash-shamsu ḥārrun al-yawm',
      'العينُ جميلةٌ\nal-ʿaynu jamīlatun — "The eye is beautiful"',
      'الأرضُ واسعةٌ\nal-arḍu wāsiʿatun — "The earth is vast"',
    ],
    correctIndex: 1,
    a: '"الشمسُ حارٌّ" خطأ لأن شمس اسم مؤنث سماعاً، فيجب أن تطابقه الصفة في التأنيث: الصواب "الشمسُ حارّةٌ".\n"الشمسُ حارٌّ" is wrong because شمس is feminine by usage, so its adjective must also be feminine: the correct form is "الشمسُ حارّةٌ".',
  },
  {
    q: 'بنتٌ ذكيةٌ ("a smart girl") — Why does the adjective ذكية carry a ة even though بنت already ends with one?\nبنتٌ ذكيةٌ ("a smart girl") — why does the adjective ذكية carry a ة even though بنت already ends with one?',
    options: [
      'صدفة لا قاعدة لها\nCoincidence, with no rule behind it',
      'لأن الصفة (النعت) يجب أن تطابق الموصوف في التذكير والتأنيث\nBecause the adjective (نعت) must agree with the noun it describes in gender',
      'لأن كل الصفات تنتهي بتاء مربوطة دائماً بغض النظر عن الموصوف\nBecause every adjective always ends in a تاء مربوطة, regardless of the noun it describes',
      'لأن بنت اسم مذكر ويحتاج تصحيحاً\nBecause بنت is actually a masculine noun and needs correcting',
    ],
    correctIndex: 1,
    a: 'النعت يجب أن يطابق المنعوت في النوع (تذكير/تأنيث)، وبما أن بنت مؤنثة، وجب أن تكون صفتها "ذكية" لا "ذكياً".\nThe adjective (نعت) must agree with the noun it describes (منعوت) in gender, and since بنت is feminine, its adjective must be "ذكية," not "ذكياً" (masculine).',
  },
  {
    q: 'رجلٌ طويلٌ مقابل اِمرأةٌ طويلةٌ — ما القاعدة النحوية التي يوضحها هذان المثالان معاً؟\nرجلٌ طويلٌ vs اِمرأةٌ طويلةٌ — what grammar rule do these two examples together illustrate?',
    options: [
      'أن النعت يتبع المنعوت في العدد فقط\nThat the adjective agrees with the noun only in number',
      'أن النعت يتبع المنعوت في التذكير والتأنيث\nThat the adjective agrees with the noun in gender',
      'أن الصفة تسبق الموصوف دائماً في الترتيب\nThat the adjective always comes before the noun it describes',
      'أن كل الصفات مؤنثة أصلاً بصرف النظر عن الموصوف\nThat every adjective is inherently feminine, regardless of the noun',
    ],
    correctIndex: 1,
    a: 'في كلا المثالين تتبع الصفة موصوفها في الجنس: "طويل" لرجل المذكر، و"طويلة" لامرأة المؤنثة — وهذه قاعدة مطابقة النعت للمنعوت في التذكير والتأنيث.\nIn both examples the adjective follows its noun in gender: "طويل" for the masculine رجل, and "طويلة" for the feminine امرأة — this is the rule that a نعت must match its منعوت in gender.',
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
            Arabic nouns default to <span className="font-medium text-foreground"><bdi lang="ar">مذكر</bdi></span>{' '}
            (masculine) unless marked otherwise. The typical feminine marker is a trailing{' '}
            <span className="font-medium text-foreground"><bdi lang="ar">تاء مربوطة</bdi></span> (<bdi lang="ar">ة</bdi>), but a handful of
            "hidden feminine" nouns — <bdi lang="ar">أرض، شمس، ريح</bdi>, and body parts that come in natural pairs — are
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

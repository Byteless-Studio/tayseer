import { createFileRoute, Link } from '@tanstack/react-router'
import { QuizCarousel } from '#/components/QuizCarousel'
import type { StrictQuizItem } from '#/routes/challenges/-quiz-types'

export const Route = createFileRoute('/challenges/grammar/numbers-1-10/')({
  head: () => ({ meta: [{ title: 'Numbers 1–10 — Grammar — Tayseer' }] }),
  component: TopicPage,
})

const quizItems: StrictQuizItem[] = [
  {
    q: 'ما المقصود بـ"مخالفة الجنس" (polarity) بين العدد والمعدود من ٣ إلى ١٠؟\nWhat does "gender polarity" (مخالفة الجنس) mean between the number and the counted noun from 3 to 10?',
    options: [
      'العدد يوافق المعدود في الجنس دائماً\nThe number always matches the counted noun in gender',
      'العدد يخالف المعدود في الجنس: فيؤنَّث مع المذكر ويُذكَّر مع المؤنث\nThe number takes the opposite gender of the counted noun: feminine form with a masculine noun, and masculine form with a feminine noun',
      'العدد لا علاقة له بجنس المعدود\nThe number has nothing to do with the counted noun\'s gender',
      'العدد يوافق المعدود في العدد فقط لا في الجنس\nThe number matches the counted noun in number only, not gender',
    ],
    correctIndex: 1,
    a: 'من ٣ إلى ١٠ يخالف العدد المعدود في الجنس (قاعدة مخالفة الجنس): فيُقال "ثلاثةُ رجالٍ" بتاء التأنيث مع المعدود المذكر، و"ثلاثُ نساءٍ" بلا تاء مع المعدود المؤنث.\nFrom 3 to 10, the number takes the opposite gender of the counted noun (the "polarity" rule): you say "ثلاثةُ رجالٍ" with a feminine ة for a masculine counted noun, and "ثلاثُ نساءٍ" without the ة for a feminine counted noun.',
  },
  {
    q: 'ثلاثـ___ طلابٍ (ثلاثة، معدود مذكر جمع)\nثلاثـ___ طلابٍ — "three students" (masculine counted noun)',
    options: [
      'ثلاثةُ\nthalāthatu — feminine form of "three," used with a masculine noun',
      'ثلاثُ\nthalāthu — masculine form',
      'ثلاثتانِ\nthalāthatāni',
      'ثلاثمائةُ\nthalāthumiʾatu — "three hundred"',
    ],
    correctIndex: 0,
    a: 'المعدود "طلاب" جمع مذكر، فيجب تأنيث العدد بالتاء طبقاً لقاعدة مخالفة الجنس: "ثلاثةُ طلابٍ" — والمعدود مجرور بالإضافة.\nThe counted noun "طلاب" is masculine, so the number must take the feminine ة under the polarity rule: "ثلاثةُ طلابٍ" — and the counted noun is مجرور as a مضاف إليه.',
  },
  {
    q: 'ثلاثـ___ نساءٍ (ثلاثة، معدود مؤنث)\nثلاثـ___ نساءٍ — "three women" (feminine counted noun)',
    options: [
      'ثلاثُ\nthalāthu — masculine form, used with a feminine noun',
      'ثلاثةُ\nthalāthatu — feminine form',
      'ثلاثانِ\nthalāthāni',
      'ثلاثمائةٌ\nthalāthumiʾatun — "three hundred"',
    ],
    correctIndex: 0,
    a: 'المعدود "نساء" مؤنث، فيُجرَّد العدد من تاء التأنيث طبقاً لقاعدة مخالفة الجنس: "ثلاثُ نساءٍ".\nThe counted noun "نساء" is feminine, so the number drops its ة under the polarity rule: "ثلاثُ نساءٍ."',
  },
  {
    q: 'كيف يوافق العددان (١) و(٢) المعدود؟\nHow do the numbers 1 and 2 agree with the counted noun?',
    options: [
      'يخالفانه في الجنس كبقية الأعداد\nThey take the opposite gender, like the other numbers',
      'يوافقانه في الجنس ويأتيان غالباً بعده لا قبله (كصفة)، مثل "رجلٌ واحدٌ" و"امرأتانِ اثنتانِ"\nThey match it in gender and usually come after it, not before it, like an adjective — as in "رجلٌ واحدٌ" and "امرأتانِ اثنتانِ"',
      'يبقيان مذكرَين دائماً بصرف النظر عن المعدود\nThey stay masculine always, regardless of the counted noun',
      'لا يُستعملان مع الأسماء المؤنثة إطلاقاً\nThey are never used with feminine nouns at all',
    ],
    correctIndex: 1,
    a: 'العددان ١ و٢ يخالفان قاعدة مخالفة الجنس ويوافقان المعدود في التذكير والتأنيث، ويأتيان عادة بعد المعدود كالصفة لا قبله كإضافة: "رجلٌ واحدٌ"، "امرأتانِ اثنتانِ".\n1 and 2 break the polarity rule — they agree with the counted noun in gender, and normally follow it as an adjective would, rather than preceding it as a مضاف: "رجلٌ واحدٌ" ("one man"), "امرأتانِ اثنتانِ" ("two women").',
  },
  {
    q: 'ما إعراب المعدود بعد الأعداد من ٣ إلى ١٠؟\nWhat is the grammatical case of the counted noun after numbers 3 to 10?',
    options: [
      'مرفوع دائماً\nAlways مرفوع',
      'جمع ومجرور على أنه مضاف إليه\nPlural and مجرور, as a مضاف إليه',
      'مفرد ومنصوب على التمييز\nSingular and منصوب, as a تمييز',
      'مثنى ومجرور\nDual and مجرور',
    ],
    correctIndex: 1,
    a: 'المعدود بعد أعداد ٣-١٠ يأتي جمعاً مجروراً على أنه مضاف إليه للعدد، مثل "ثلاثةُ رجالٍ" حيث "رجالٍ" مضاف إليه مجرور.\nThe counted noun after numbers 3–10 is plural and مجرور, as the مضاف إليه of the number — e.g. "ثلاثةُ رجالٍ," where "رجالٍ" is the مضاف إليه, مجرور.',
  },
  {
    q: 'أيّ من هذه الجمل بها خطأ نحوي؟\nWhich of these sentences contains a grammatical error?',
    options: [
      'عندي خمسةُ كتبٍ\nʿindī khamsatu kutubin — "I have five books"',
      'عندي خمسُ كتبٍ\nʿindī khamsu kutubin',
      'عندي خمسُ سياراتٍ\nʿindī khamsu sayyārātin — "I have five cars"',
      'اشتريتُ سبعةَ أقلامٍ\nishtaraytu sabʿata aqlāmin — "I bought seven pens"',
    ],
    correctIndex: 1,
    a: '"كتب" جمع مذكر، فيجب تأنيث العدد بالتاء طبقاً لمخالفة الجنس: الصواب "عندي خمسةُ كتبٍ" لا "خمسُ كتبٍ".\n"كتب" is masculine, so the number must take the feminine ة under the polarity rule: the correct form is "عندي خمسةُ كتبٍ," not "خمسُ كتبٍ."',
  },
  {
    q: 'عندي طالبتانِ ___ (اثنان، مؤنث، توكيد بعد المعدود)\nعندي طالبتانِ ___ — "I have two [female] students" (feminine "two," as emphasis after the noun)',
    options: [
      'اثنتانِ\nithnatāni — feminine dual "two"',
      'اثنانِ\nithnāni — masculine dual "two,"',
      'ثنتا\nthintā',
      'اثنينِ\nithnayni — نصب/جر form',
    ],
    correctIndex: 0,
    a: 'العدد (٢) يوافق المعدود المؤنث "طالبتانِ" في التأنيث ويأتي بعده توكيداً: "طالبتانِ اثنتانِ".\nThe number 2 agrees with the feminine counted noun "طالبتانِ" in gender and follows it as emphasis: "طالبتانِ اثنتانِ" — "two [female] students."',
  },
  {
    q: 'أيّ العبارتين صحيحة نحوياً: "أربعةُ بناتٍ" أم "أربعُ بناتٍ"؟\nWhich phrase is grammatically correct: "أربعةُ بناتٍ" or "أربعُ بناتٍ"?',
    options: [
      '"أربعةُ بناتٍ" لأن المعدود مؤنث فيوافقه العدد\n"أربعةُ بناتٍ" — because the counted noun is feminine, so the number matches it',
      '"أربعُ بناتٍ" لأن المعدود "بنات" مؤنث فيُجرَّد العدد من تاء التأنيث طبقاً لمخالفة الجنس\n"أربعُ بناتٍ" — because the counted noun "بنات" is feminine, so the number drops its ة under the polarity rule',
      'كلاهما خطأ\nBoth are wrong',
      'كلاهما صحيح بلا فرق في المعنى\nBoth are correct, with no difference in meaning',
    ],
    correctIndex: 1,
    a: '"بنات" معدود مؤنث، فتُخالفه صيغة العدد بتجريده من تاء التأنيث طبقاً لقاعدة مخالفة الجنس من ٣ إلى ١٠: الصحيح "أربعُ بناتٍ" لا "أربعةُ بناتٍ".\n"بنات" is a feminine counted noun, so the number takes the opposite form by dropping its ة, under the polarity rule for 3–10: the correct form is "أربعُ بناتٍ," not "أربعةُ بناتٍ."',
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
            Topic 19 of 47
          </p>
          <h1 className="font-serif tracking-[-0.02em] text-3xl font-bold text-foreground leading-tight mb-3">
            <span
              dir="rtl"
              lang="ar"
              style={{ fontFamily: "'Noto Naskh Arabic', serif" }}
              className="mr-2"
            >
              الأعداد ١-١٠
            </span>
            — Numbers 1–10
          </h1>
          <p className="text-muted-foreground text-base max-w-xl">
            Numbers 3–10 take the OPPOSITE gender of the noun they count (gender polarity) —
            <bdi lang="ar">ثلاثةُ رجالٍ</bdi> but <bdi lang="ar">ثلاثُ نساءٍ</bdi>. Numbers 1 and 2 agree in gender normally and usually
            follow the noun. The counted noun (<bdi lang="ar">معدود</bdi>) after 3–10 is plural and <bdi lang="ar">مجرور</bdi> as <bdi lang="ar">مضاف
            إليه</bdi>.
          </p>
        </div>
      </div>
      <div className="mx-auto w-[min(720px,calc(100%-2rem))] py-8">
        <QuizCarousel items={quizItems} />
      </div>
    </main>
  )
}

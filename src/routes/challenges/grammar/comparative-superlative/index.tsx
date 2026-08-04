import { createFileRoute, Link } from '@tanstack/react-router'
import { QuizCarousel } from '#/components/QuizCarousel'
import type { StrictQuizItem } from '#/routes/challenges/-quiz-types'

export const Route = createFileRoute('/challenges/grammar/comparative-superlative/')({
  head: () => ({ meta: [{ title: 'Comparative & Superlative — Grammar — Tayseer' }] }),
  component: TopicPage,
})

const quizItems: StrictQuizItem[] = [
  {
    q: 'من أيّ الأوزان يُصاغ "أفعل التفضيل" غالباً؟\nFrom which pattern is "أفعل التفضيل" (the comparative/superlative) usually formed?',
    options: [
      'من الفعل الثلاثي المجرد القابل للتفاضل، على وزن "أفعل": كبُر → أكبر، جمُل → أجمل\nFrom a plain triliteral verb that admits comparison, on the pattern أفعل: كبُر (be big) → أكبر, جمُل (be beautiful) → أجمل',
      'من كل فعل رباعي فقط\nFrom any quadriliteral verb only',
      'من الأسماء الجامدة فقط\nFrom non-derived (frozen) nouns only',
      'لا وزن ثابت له\nIt has no fixed pattern',
    ],
    correctIndex: 0,
    a: 'يُصاغ أفعل التفضيل قياساً من الفعل الثلاثي المجرد القابل للتفاضل، على وزن "أفعل": كبُر → أكبر، جمُل → أجمل، حسُن → أحسن.\nأفعل التفضيل is regularly formed from a plain triliteral verb that admits comparison, on the pattern أفعل: كبُر (be big) → أكبر (bigger), جمُل (be beautiful) → أجمل (more beautiful), حسُن (be good) → أحسن (better).',
  },
  {
    q: 'هذا الكتابُ ___ من ذلك الكتابِ (صيغة المقارنة المجردة من أل والإضافة، متبوعة بـ"من")\nهذا الكتابُ ___ من ذلك الكتابِ (the bare comparative form, without أل or إضافة, followed by من)',
    options: [
      'أكبرُ\nakbaru — bare comparative, مرفوع (nominative)',
      'الأكبرُ\nal-akbaru — superlative with أل, مرفوع',
      'أكبرَ\nakbara — bare comparative, منصوب (accusative)',
      'كبيرٌ\nkabīrun — plain adjective "big," not comparative',
    ],
    correctIndex: 0,
    a: 'في صيغة المقارنة المجردة (أفعل + من)، يلزم أفعل التفضيل الإفراد والتذكير، ويُرفع هنا لأنه خبر: "هذا الكتابُ أكبرُ من ذلك الكتابِ".\nIn the bare comparative form (أفعل + من), the comparative must stay singular and masculine, and here it is مرفوع because it is the predicate (خبر): "هذا الكتابُ أكبرُ من ذلك الكتابِ" — "This book is bigger than that book."',
  },
  {
    q: 'إذا أُضيف أفعل التفضيل إلى اسم جمع معرّف بأل (مثل "الطلاب")، فماذا يحدث؟\nIf أفعل التفضيل is placed in idāfah with a plural noun made definite by أل (like الطلاب), what happens?',
    options: [
      'يجوز أن يطابق الموصوف في العدد والجنس، ويفيد التفضيل المطلق بين مجموعة: "هو أفضلُ الطلابِ"\nIt may agree with the described noun in number and gender, and expresses the absolute best within a group: "هو أفضلُ الطلابِ" — "He is the best of the students."',
      'يبقى مفرداً مذكراً وجوباً في كل الأحوال\nIt must always stay singular and masculine, without exception',
      'يصبح فعلاً ماضياً\nIt turns into a past-tense verb',
      'يُمنع من الإضافة إلى المعرفة إطلاقاً\nIt is forbidden from ever forming an idāfah with a definite noun',
    ],
    correctIndex: 0,
    a: 'إذا أُضيف أفعل التفضيل إلى معرفة (كجمع معرّف بأل)، جاز أن يطابق الموصوف في الإفراد والتثنية والجمع والتذكير والتأنيث: "هو أفضلُ الطلابِ"، "هي فُضلى الطالباتِ" أو "هي أفضلُ الطالباتِ".\nIf أفعل التفضيل is in idāfah with a definite noun (such as a plural made definite by أل), it may agree with the described noun in singular, dual, plural, masculine, and feminine: "هو أفضلُ الطلابِ" ("he is the best of the students"), "هي فُضلى الطالباتِ" or "هي أفضلُ الطالباتِ" ("she is the best of the female students").',
  },
  {
    q: 'مررتُ برجلٍ ___ من أخيه سناً (اسم مجرور، ممنوع من الصرف فلا يُنوَّن ويُجر بالفتحة)\nمررتُ برجلٍ ___ من أخيه سناً (a genitive noun, diptote, so it takes no تنوين and is مجرور with فتحة)',
    options: [
      'أكبرَ\nakbara — diptote, مجرور with فتحة',
      'أكبرٍ\nakbarin — with تنوين kasra',
      'أكبرُ\nakbaru — مرفوع (nominative)',
      'أكبراً\nakbaran — with تنوين fatḥa, منصوب form',
    ],
    correctIndex: 0,
    a: '"أكبر" هنا نكرة مجردة من أل والإضافة (صيغة مقارنة)، وهي ممنوعة من الصرف فلا تُنوَّن، وتُجر بالفتحة نيابة عن الكسرة: "مررتُ برجلٍ أكبرَ من أخيه سناً".\nأكبر here is indefinite, free of أل and not in idāfah (the bare comparative form). It is diptote (ممنوع من الصرف), so it takes no تنوين and is مجرور with فتحة instead of كسرة: "مررتُ برجلٍ أكبرَ من أخيه سناً" — "I passed by a man older than his brother."',
  },
  {
    q: 'كيف تتم صياغة أفعل التفضيل من صفة لا تأتي من فعل ثلاثي مجرد (مثل "متفوّق")؟\nHow is أفعل التفضيل formed from an adjective that does not come from a plain triliteral verb (like متفوّق, "outstanding")?',
    options: [
      'بالإتيان بـ"أكثر" أو "أشدّ" ثم مصدر الصفة منصوباً على التمييز: "أكثر تفوقاً"\nBy using أكثر ("more") or أشدّ ("more intensely") followed by the adjective\'s مصدر (verbal noun) in the accusative as تمييز: "أكثر تفوقاً" — "more outstanding."',
      'تبقى الصفة كما هي بلا أي تغيير\nThe adjective stays exactly as it is, with no change',
      'تُصاغ مباشرة على وزن أفعل دون أي قيد\nIt is formed directly on the pattern أفعل with no restriction',
      'تُحذف الصفة كلياً من الجملة\nThe adjective is dropped from the sentence entirely',
    ],
    correctIndex: 0,
    a: 'الصفات التي لا تأتي من فعل ثلاثي مجرد قابل للتفاضل تُصاغ صيغة التفضيل منها بمساعدة "أكثر" أو "أشدّ" متبوعة بمصدرها منصوباً على التمييز: "هو أكثر تفوقاً من زميله".\nAdjectives that don\'t derive from a plain triliteral verb admitting comparison form their comparative with the help of أكثر or أشدّ, followed by their مصدر in the accusative as تمييز: "هو أكثر تفوقاً من زميله" — "He is more outstanding than his colleague."',
  },
  {
    q: 'أيّ الجمل التالية بها خطأ في مطابقة أفعل التفضيل عند الإضافة إلى نكرة مفردة؟\nWhich of the following sentences has an error in agreement of أفعل التفضيل when in idāfah with an indefinite singular noun?',
    options: [
      'هو أفضلُ رجلٍ في الفريقِ\nHe is the best man on the team',
      'هي أجملُ امرأةٍ رأيتُها\nShe is the most beautiful woman I have ever seen',
      'هي أجملةُ امرأةٍ رأيتُها\nwith a feminine تاء added to أفعل التفضيل',
      'هو أذكى رجلٍ عرفتُه\nHe is the smartest man I have known',
    ],
    correctIndex: 2,
    a: 'الجملة الثالثة خطأ لأن أفعل التفضيل المضاف إلى نكرة مفردة يلزم صيغة الإفراد والتذكير ولا تلحقه تاء التأنيث حتى مع الموصوف المؤنث: الصواب "هي أجملُ امرأةٍ رأيتُها" لا "أجملةُ".\nThe third sentence is wrong because أفعل التفضيل in idāfah with an indefinite singular noun must stay singular and masculine — it never takes the feminine تاء, even when the described noun is feminine: the correct form is "هي أجملُ امرأةٍ رأيتُها", not "أجملةُ".',
  },
  {
    q: 'أيّ الجمل التالية بها خطأ في إعراب المضاف إليه بعد أفعل التفضيل؟\nWhich of the following sentences has an error in the case of the مضاف إليه after أفعل التفضيل?',
    options: [
      'هو أفضلُ رجلٍ في القريةِ\nHe is the best man in the village',
      'هي أجملُ امرأةٍ في المدينةِ\nShe is the most beautiful woman in the city',
      'هم أنشطُ الطلابِ في الفصلِ\nThey are the most active students in the class',
      'هو أفضلُ رجلٌ في القريةِ\nرجلٌ should be مجرور (رجلٍ), not مرفوع',
    ],
    correctIndex: 3,
    a: 'الجملة الرابعة خطأ لأن "رجل" مضاف إليه بعد أفعل التفضيل "أفضل"، والمضاف إليه يجب أن يكون مجروراً: الصواب "أفضلُ رجلٍ" لا "أفضلُ رجلٌ".\nThe fourth sentence is wrong because رجل is the مضاف إليه after أفعل التفضيل أفضل, and the مضاف إليه must be مجرور: the correct form is "أفضلُ رجلٍ", not "أفضلُ رجلٌ".',
  },
  {
    q: 'إذا اقترن أفعل التفضيل بـ"أل" (مثل: الأكبر، الكبرى)، فما الحكم؟\nIf أفعل التفضيل is combined with أل (like الأكبر, الكبرى), what is the rule?',
    options: [
      'يجب أن يطابق الموصوف في الإفراد والتثنية والجمع والتذكير والتأنيث: "الطالبُ الأكبرُ"، "الطالبةُ الكبرى"، "الطلابُ الأكبرونَ"\nIt must fully agree with the described noun in singular, dual, plural, masculine, and feminine: "الطالبُ الأكبرُ" ("the older student, m."), "الطالبةُ الكبرى" ("the older student, f."), "الطلابُ الأكبرونَ" ("the older students").',
      'يبقى دائماً على صيغة المذكر المفرد\nIt always stays in the masculine singular form',
      'يظل ممنوعاً من الصرف كما في حالة التنكير\nIt remains diptote (ممنوع من الصرف), just as in the indefinite case',
      'لا يجوز اقتران أفعل بأل إطلاقاً\nأفعل can never be combined with أل at all',
    ],
    correctIndex: 0,
    a: 'أفعل التفضيل المقترن بـ"أل" يجب أن يطابق موصوفه في الإفراد والتثنية والجمع والتذكير والتأنيث: "الطالبُ الأكبرُ"، "الطالبةُ الكبرى"، "الطلابُ الأكبرونَ" — وهو حينئذٍ معرفة فلا يكون ممنوعاً من الصرف.\nأفعل التفضيل combined with أل must agree with the noun it describes in singular, dual, plural, masculine, and feminine: "الطالبُ الأكبرُ", "الطالبةُ الكبرى", "الطلابُ الأكبرونَ." In this form it is definite, so it is no longer diptote.',
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
            Topic 43 of 47
          </p>
          <h1 className="font-serif tracking-[-0.02em] text-3xl font-bold text-foreground leading-tight mb-3">
            <span
              dir="rtl"
              lang="ar"
              style={{ fontFamily: "'Noto Naskh Arabic', serif" }}
              className="mr-2"
            >
              أفعل التفضيل
            </span>
            — Comparative & Superlative
          </h1>
          <p className="text-muted-foreground text-base max-w-xl">
            أفعل التفضيل (أكبر، أجمل) is built from most triliteral adjectives. Comparative use:
            أفعل + من (أكبرُ من). Superlative use: أفعل in إضافة to a definite plural (أفضلُ
            الطلابِ) or an indefinite singular (أفضلُ رجلٍ), or with أل, matching the noun fully
            (الأكبر، الكبرى، الأكبرون). In its bare comparative form (no أل, no إضافة), أفعل
            التفضيل is diptote — no تنوين, and فتحة instead of كسرة in الجر.
          </p>
        </div>
      </div>
      <div className="mx-auto w-[min(720px,calc(100%-2rem))] py-8">
        <QuizCarousel items={quizItems} />
      </div>
    </main>
  )
}

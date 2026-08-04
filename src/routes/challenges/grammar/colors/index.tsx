import { createFileRoute, Link } from '@tanstack/react-router'
import { QuizCarousel } from '#/components/QuizCarousel'
import type { StrictQuizItem } from '#/routes/challenges/-quiz-types'

export const Route = createFileRoute('/challenges/grammar/colors/')({
  head: () => ({ meta: [{ title: 'Colors as Adjectives — Grammar — Tayseer' }] }),
  component: TopicPage,
})

const quizItems: StrictQuizItem[] = [
  {
    q: 'ما هو الوزن الذي تُبنى عليه أغلب أسماء الألوان الأساسية للمذكر؟\nWhat pattern (وزن) are most basic color words built on for the masculine?',
    options: [
      'فَعِيل\nfaʿīl',
      'أَفْعَل\nʾafʿal',
      'مَفْعُول\nmafʿūl',
      'فَعَّال\nfaʿʿāl',
    ],
    correctIndex: 1,
    a: 'أغلب ألوان الأساس (أحمر، أزرق، أصفر، أخضر، أسود، أبيض) تُبنى للمذكر على وزن أَفْعَل — وهو وزن خاص بالألوان والعيوب الخَلقية، مختلف عن أوزان الصفات العادية كفَعِيل.\nMost basic colors (أحمر "red", أزرق "blue", أصفر "yellow", أخضر "green", أسود "black", أبيض "white") take the masculine pattern أَفْعَل — a pattern reserved for colors and inborn physical traits, distinct from ordinary adjective patterns like فَعِيل.',
  },
  {
    q: 'ما هو الوزن المقابل لـ أَفْعَل حين يوصف اسم مؤنث بلون؟\nWhat is the feminine counterpart of أَفْعَل when a feminine noun is described by a color?',
    options: [
      'فَعْلاء\nfaʿlāʾ',
      'فَعِيلة\nfaʿīlah',
      'مَفْعُولة\nmafʿūlah',
      'فُعْلى\nfuʿlā',
    ],
    correctIndex: 0,
    a: 'الصيغة المؤنثة لوزن أَفْعَل في الألوان هي فَعْلاء: أحمر (مذكر) ↔ حمراء (مؤنث)، أزرق ↔ زرقاء، وهكذا.\nThe feminine form of the color pattern أَفْعَل is فَعْلاء: أحمر (masc. "red") ↔ حمراء (fem.), أزرق ↔ زرقاء, and so on.',
  },
  {
    q: 'قميصٌ أحمرُ مقابل سيارةٌ حمراءُ — لماذا اختلفت صيغة كلمة "أحمر" بين الجملتين؟\nقميصٌ أحمرُ ("a red shirt") vs. سيارةٌ حمراءُ ("a red car") — why does the word for "red" change form between the two?',
    options: [
      'خطأ إملائي، الصيغتان صحيحتان لكل الأسماء بلا فرق\nA spelling mistake — both forms work for any noun with no difference',
      'لأن النعت يجب أن يطابق منعوته في التذكير والتأنيث؛ قميص مذكر فيأخذ وزن أَفْعَل، وسيارة مؤنثة فتأخذ وزن فَعْلاء\nBecause the adjective must agree with its noun in gender; قميص is masculine and takes أَفْعَل, while سيارة is feminine and takes فَعْلاء',
      'لأن أحمر تعني شيئاً مختلفاً عن حمراء\nBecause أحمر means something different from حمراء',
      'لأن حمراء اسم علم لا صفة\nBecause حمراء is a proper name, not an adjective',
    ],
    correctIndex: 1,
    a: 'قاعدة مطابقة النعت للمنعوت في التذكير والتأنيث تنطبق على الألوان كذلك: أحمر لموصوف مذكر (قميص)، وحمراء لموصوف مؤنث (سيارة).\nThe rule that a نعت must agree with its noun in gender applies to colors too: أحمر for a masculine noun (قميص), حمراء for a feminine noun (سيارة).',
  },
  {
    q: 'أكمل: هذه وردةٌ ___ (a yellow rose, fem.)\nComplete: hādhihi wardatun ___ ("This is a yellow rose")',
    options: [
      'أصفرُ\naṣfaru — masculine form',
      'صفراءُ\nṣafrāʾu — "yellow" (fem.)',
      'صفراً\nṣafran',
      'أصفرٍ\naṣfarin',
    ],
    correctIndex: 1,
    a: 'وردة اسم مؤنث، فيجب أن يطابقها النعت في التأنيث، فتُستخدم الصيغة المؤنثة صفراءُ لا الصيغة المذكرة أصفرُ.\nوردة is feminine, so the adjective must agree with it in gender — the feminine form صفراءُ is used, not the masculine أصفرُ.',
  },
  {
    q: 'رأيتُ سيارةً حمراءَ — ما إعراب "حمراءَ" هنا من حيث التنوين، ولماذا؟\nraʾaytu sayyāratan ḥamrāʾa ("I saw a red car") — what is the case status of "حمراءَ" here regarding تنوين, and why?',
    options: [
      'منصوبة وتحمل تنويناً كسائر النكرات المنصوبة\nمنصوب and carries تنوين like any indefinite noun in that case',
      'منصوبة بلا تنوين لأنها اسم ممنوع من الصرف\nمنصوب but without تنوين, because it is a diptote (ممنوع من الصرف)',
      'مرفوعة بتنوين\nمرفوع with تنوين',
      'مجرورة بتنوين\nمجرور with تنوين',
    ],
    correctIndex: 1,
    a: 'وزن الألوان أَفْعَل/فَعْلاء ممنوع من الصرف، فلا يقبل التنوين حتى في حالة التنكير: "سيارةً حمراءَ" — الفتحة وحدها علامة النصب هنا بلا تنوين، خلافاً للنكرات العادية.\nThe color pattern أَفْعَل/فَعْلاء is a diptote (ممنوع من الصرف), so it never takes تنوين, even when indefinite: "سيارةً حمراءَ" — the fatḥah alone marks منصوب here, with no تنوين, unlike ordinary indefinite nouns.',
  },
  {
    q: 'أيّ من هذه الجمل بها خطأ نحوي في التنوين على صفة اللون؟\nWhich of these sentences has a grammar error in the تنوين on a color adjective?',
    options: [
      'رأيتُ رجلاً طويلاً\nraʾaytu rajulan ṭawīlan — "I saw a tall man"',
      'رأيتُ قميصاً أحمرَ\nraʾaytu qamīṣan aḥmara — "I saw a red shirt"',
      'رأيتُ قميصاً أحمراً\nraʾaytu qamīṣan aḥmaran',
      'اشتريتُ سيارةً زرقاءَ\nishtaraytu sayyāratan zarqāʾa — "I bought a blue car"',
    ],
    correctIndex: 2,
    a: '"أحمراً" بتنوين خطأ لأن أفعل (اللون) اسم ممنوع من الصرف ولا يُنوَّن أبداً حتى في حالة النصب والتنكير؛ الصواب "أحمرَ" بفتحة واحدة بلا تنوين.\n"أحمراً" with تنوين is wrong because the color pattern أفعل is a diptote and never takes تنوين, even when indefinite and منصوب; the correct form is "أحمرَ" with a single fatḥah and no تنوين.',
  },
  {
    q: 'بم يختلف وزن الألوان أَفْعَل عن الصفات العادية من نوع فَعِيل (كطويل، جميل) من الناحية الصرفية؟\nHow does the color pattern أَفْعَل differ morphologically from ordinary adjectives on the pattern فَعِيل (like طويل "tall", جميل "beautiful")?',
    options: [
      'لا فرق بينهما إطلاقاً في كل شيء\nThere is no difference between them whatsoever',
      'أَفْعَل ممنوع من الصرف (لا تنوين، وفي الجر يأخذ فتحة بدل الكسرة)، بينما فَعِيل صفة عادية مصروفة تأخذ التنوين والكسرة في الجر بشكل طبيعي\nأَفْعَل is a diptote (no تنوين, and it takes a fatḥah instead of a kasrah in جر), while فَعِيل is an ordinary triptote adjective that takes تنوين and a normal kasrah in جر',
      'فَعِيل خاص بالمذكر فقط، وأَفْعَل خاص بالمؤنث فقط\nفَعِيل is only for masculine, and أَفْعَل is only for feminine',
      'أَفْعَل لا يمكن أن يكون نعتاً أبداً\nأَفْعَل can never function as a نعت',
    ],
    correctIndex: 1,
    a: 'صفات الألوان على وزن أَفْعَل من الأسماء الممنوعة من الصرف، فتُجر بالفتحة لا الكسرة ولا تُنوَّن، بخلاف الصفات العادية على وزن فَعِيل ونحوه التي تُصرف بشكل طبيعي وتقبل التنوين والكسرة في الجر.\nColor adjectives on the pattern أَفْعَل are diptotes (ممنوع من الصرف): they take a fatḥah rather than a kasrah in جر, and never take تنوين — unlike ordinary adjectives on patterns like فَعِيل, which decline normally and take both تنوين and a regular kasrah in جر.',
  },
  {
    q: 'مررتُ برجلٍ أسودَ الشعرِ — ما علامة الجر التي ستظهر على "أسودَ" هنا، ولماذا؟\nmarartu bi-rajulin aswada sh-shaʿri ("I passed by a black-haired man") — what case ending appears on "أسودَ" here, and why?',
    options: [
      'الكسرة الظاهرة، لأنه اسم عادي مصروف\nA visible kasrah, because it is an ordinary triptote noun',
      'الفتحة نيابة عن الكسرة، لأنه ممنوع من الصرف\nA fatḥah standing in for the kasrah, because it is a diptote',
      'الضمة، لأنه مرفوع\nA ḍammah, because it is مرفوع',
      'لا تظهر عليه أي علامة لأنه مبني\nNo case ending at all, because it is مبني',
    ],
    correctIndex: 1,
    a: 'بما أن أسود على وزن الألوان أَفْعَل الممنوع من الصرف، فعلامة جره الفتحة نيابة عن الكسرة الأصلية، وهذا من أبرز آثار كونه ممنوعاً من الصرف.\nSince أسود is on the diptote color pattern أَفْعَل, its جر marker is a fatḥah standing in for the original kasrah — one of the clearest effects of being ممنوع من الصرف.',
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
            Topic 13 of 47
          </p>
          <h1 className="font-serif tracking-[-0.02em] text-3xl font-bold text-foreground leading-tight mb-3">
            <span
              dir="rtl"
              lang="ar"
              style={{ fontFamily: "'Noto Naskh Arabic', serif" }}
              className="mr-2"
            >
              الألوان
            </span>
            — Colors as Adjectives
          </h1>
          <p className="text-muted-foreground text-base max-w-xl">
            Basic colors don't follow the regular adjective patterns — they're built on{' '}
            <span className="font-medium text-foreground">أَفْعَل</span> for masculine and{' '}
            <span className="font-medium text-foreground">فَعْلاء</span> for feminine (أحمر/حمراء,
            أزرق/زرقاء). This pattern is <span className="font-medium text-foreground">
              ممنوع من الصرف
            </span>{' '}
            (diptote) — it never takes تنوين, even when indefinite, and takes a fatḥah instead of a
            kasrah in the جر case.
          </p>
        </div>
      </div>
      <div className="mx-auto w-[min(720px,calc(100%-2rem))] py-8">
        <QuizCarousel items={quizItems} />
      </div>
    </main>
  )
}

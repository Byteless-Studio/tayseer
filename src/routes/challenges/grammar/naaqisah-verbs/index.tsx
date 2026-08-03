import { createFileRoute, Link } from '@tanstack/react-router'
import { QuizCarousel } from '#/components/QuizCarousel'
import type { StrictQuizItem } from '#/routes/challenges/-quiz-types'

export const Route = createFileRoute('/challenges/grammar/naaqisah-verbs/')({
  head: () => ({ meta: [{ title: 'Introducing Kāna and Her Sisters — Grammar — Tayseer' }] }),
  component: TopicPage,
})

const quizItems: StrictQuizItem[] = [
  {
    q: 'ماذا تفعل "كان وأخواتها" بالجملة الاسمية التي تدخل عليها؟',
    options: [
      'ترفع المبتدأ والخبر معاً كما هما',
      'ترفع اسمها (المبتدأ سابقاً) وتنصب خبرها، عكس النمط المعتاد الذي يبقي الخبر مرفوعاً',
      'تجر الاسمين معاً',
      'تنصب الاسمين معاً',
    ],
    correctIndex: 1,
    a: '"كان وأخواتها" أفعال ناقصة تدخل على الجملة الاسمية فترفع الاسم (وهو المبتدأ سابقاً، ويسمى اسمها) وتنصب الخبر (ويسمى خبرها)، وهذا عكس الجملة الاسمية العادية التي يبقى خبرها مرفوعاً.',
  },
  {
    q: 'أكمل: كانَ الجوُّ ___ (جميلاً، خبر كان منصوب)',
    options: ['جميلٌ', 'جميلاً', 'جميلٍ', 'جميلُ'],
    correctIndex: 1,
    a: 'خبر "كان" منصوب دائماً: "كانَ الجوُّ جميلاً" — "الجوُّ" اسم كان مرفوع، و"جميلاً" خبرها منصوب.',
  },
  {
    q: 'أي مما يلي وصف صحيح لبعض أخوات "كان" (أصبح، أمسى، ظلّ، بات، صار، ليس)؟',
    options: [
      'كلها تعمل عمل "كان" في رفع الاسم ونصب الخبر، مع إضافة دلالة زمنية أو معنوية خاصة بكل فعل',
      'أفعال عادية لا ناسخة، لا تأثير لها على إعراب الجملة الاسمية',
      'أفعال حركة فقط لا علاقة لها بالجملة الاسمية',
      'أفعال لا يجوز أن تسبق مبتدأ وخبراً',
    ],
    correctIndex: 0,
    a: 'من أخوات "كان": أصبح (صار في الصباح)، أمسى (صار في المساء)، ظلّ (استمر)، بات (صار ليلاً)، صار (تحول إلى)، وليس (النافية)؛ وكلها تعمل عمل "كان" في رفع الاسم ونصب الخبر مع إضافة دلالة زمنية أو معنوية خاصة بكل فعل.',
  },
  {
    q: 'أي من هذه الجمل بها خطأ في تطبيق عمل "كان" وأخواتها؟',
    options: ['أصبحَ الجوُّ بارداً', 'ظلَّ الطالبُ مجتهداً', 'صارَ الماءُ جليدٌ', 'باتَ الطفلُ نائماً'],
    correctIndex: 2,
    a: '"صارَ الماءُ جليدٌ" خطأ لأن خبر "صار" (من أخوات كان) يجب أن يكون منصوباً: الصواب "صارَ الماءُ جليداً".',
  },
  {
    q: 'ما المعنى الخاص الذي يفيده الفعل الناسخ "ليس" رغم أن صيغته الصرفية صيغة ماضٍ؟',
    options: [
      'يفيد معنى المستقبل',
      'يفيد نفي الخبر عن الاسم في الحاضر ("is not")، رغم أن شكله الصرفي شكل الماضي',
      'يفيد الأمر',
      'يفيد الاستمرار في الماضي فقط',
    ],
    correctIndex: 1,
    a: '"ليس" فعل ماضٍ في صيغته لكنه لا يتصرف ويفيد معنى النفي في الحاضر ("is not")، مثل "ليس الجوُّ بارداً" = "the weather is not cold" — فهو استثناء صرفي دلالي بين إخوة كان.',
  },
  {
    q: 'أكمل: ليس الطعامُ ___ (لذيذاً، خبر ليس منصوب)',
    options: ['لذيذٌ', 'لذيذاً', 'لذيذٍ', 'لذيذُ'],
    correctIndex: 1,
    a: '"ليس" تعمل عمل "كان" فتنصب خبرها: "ليس الطعامُ لذيذاً" (the food is not delicious) — "الطعامُ" اسمها مرفوع و"لذيذاً" خبرها منصوب.',
  },
  {
    q: 'الفعل "كاد" (بمعنى "كاد يفعل") ينتمي إلى أي أسرة نحوية، وهل هي نفسها "كان وأخواتها"؟',
    options: [
      'نعم، هي نفسها كان وأخواتها تماماً بلا فرق',
      'أسرة قريبة تسمى "كاد وأخواتها" أو "أفعال المقاربة" — ناسخة كذلك، لكن خبرها يجب أن يكون جملة فعلية مضارعة لا اسماً مفرداً',
      'لا علاقة لها بكان وأخواتها إطلاقاً ولا تدخل على الجملة الاسمية',
      'هي أفعال تامة لا ناقصة',
    ],
    correctIndex: 1,
    a: '"كاد" ينتمي إلى فئة منفصلة تسمى "كاد وأخواتها" أو "أفعال المقاربة"، قريبة من "كان وأخواتها" في كونها ناسخة تدخل على الجملة الاسمية، لكنها تختلف بأن خبرها يجب أن يكون جملة فعلية مضارعة تدل على قرب وقوع الفعل، لا اسماً مفرداً كخبر كان.',
  },
  {
    q: 'ما معنى "كادَ" في جملة مثل "كادَ الطفلُ يسقطُ"، وهل يحتاج خبرها المضارع إلى "أن" غالباً؟',
    options: [
      'بمعنى "سقط فعلاً"، وتحتاج "أن" وجوباً',
      'بمعنى "قارب على الفعل ولم يقع" (يكاد يفعل)، وغالباً لا تقترن بـ"أن" في خبرها المضارع',
      'بمعنى الأمر بالفعل',
      'بمعنى النفي التام لوقوع الفعل',
    ],
    correctIndex: 1,
    a: '"كادَ" تفيد "قارب على الفعل دون أن يقع فعلاً" (almost/nearly did): "كادَ الطفلُ يسقطُ" = "the child almost fell (but didn\'t)"، وخبرها المضارع يأتي غالباً دون "أن"، بخلاف بعض أخواتها مثل "عسى" التي تُفضّل الاقتران بـ"أن".',
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
            Topic 36 of 47
          </p>
          <h1 className="font-serif tracking-[-0.02em] text-3xl font-bold text-foreground leading-tight mb-3">
            <span
              dir="rtl"
              lang="ar"
              style={{ fontFamily: "'Noto Naskh Arabic', serif" }}
              className="mr-2"
            >
              كان وأخواتها (مقدمة)
            </span>
            — Introducing Kāna and Her Sisters
          </h1>
          <p className="text-muted-foreground text-base max-w-xl">
            كان وأخواتها (كان، أصبح، أمسى، ظلّ، بات، صار، ليس، ما زال...) enter a nominal sentence
            and make the خبر منصوب while اسم كان stays مرفوع — the opposite pattern from a normal
            nominal sentence. ليس means "is not" despite its ماضي shape. A related but distinct
            family, كاد وأخواتها (أفعال المقاربة), expects a مضارع خبر clause instead of a single
            noun — كاد itself means "almost/nearly did" and usually skips أن before that clause.
          </p>
        </div>
      </div>
      <div className="mx-auto w-[min(720px,calc(100%-2rem))] py-8">
        <QuizCarousel items={quizItems} />
      </div>
    </main>
  )
}

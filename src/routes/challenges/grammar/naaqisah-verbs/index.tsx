import { createFileRoute, Link } from '@tanstack/react-router'
import { QuizCarousel } from '#/components/QuizCarousel'
import type { StrictQuizItem } from '#/routes/challenges/-quiz-types'

export const Route = createFileRoute('/challenges/grammar/naaqisah-verbs/')({
  head: () => ({ meta: [{ title: 'Introducing Kāna and Her Sisters — Grammar — Tayseer' }] }),
  component: TopicPage,
})

const quizItems: StrictQuizItem[] = [
  {
    q: 'ماذا تفعل "كان وأخواتها" بالجملة الاسمية التي تدخل عليها؟\nWhat do كان and her sisters do to the nominal sentence they enter?',
    options: [
      'ترفع المبتدأ والخبر معاً كما هما\nThey keep both المبتدأ and الخبر مرفوع, unchanged',
      'ترفع اسمها (المبتدأ سابقاً) وتنصب خبرها، عكس النمط المعتاد الذي يبقي الخبر مرفوعاً\nThey keep اسمها (the former المبتدأ) مرفوع and make خبرها منصوب — the reverse of the usual pattern, which keeps the خبر مرفوع',
      'تجر الاسمين معاً\nThey make both nouns مجرور',
      'تنصب الاسمين معاً\nThey make both nouns منصوب',
    ],
    correctIndex: 1,
    a: '"كان وأخواتها" أفعال ناقصة تدخل على الجملة الاسمية فترفع الاسم (وهو المبتدأ سابقاً، ويسمى اسمها) وتنصب الخبر (ويسمى خبرها)، وهذا عكس الجملة الاسمية العادية التي يبقى خبرها مرفوعاً.\nكان and her sisters are defective (ناقصة) verbs that enter a nominal sentence, keeping the noun (formerly المبتدأ, now called اسمها) مرفوع and making the خبر (now called خبرها) منصوب — the reverse of an ordinary nominal sentence, whose خبر stays مرفوع.',
  },
  {
    q: 'أكمل: كانَ الجوُّ ___ (جميلاً، خبر كان منصوب)\nComplete: كانَ الجوُّ ___ (جميلاً, the accusative خبر of كان)',
    options: [
      'جميلٌ\njamīlun (nominative — wrong)',
      'جميلاً\njamīlan (accusative — correct)',
      'جميلٍ\njamīlin (genitive — wrong)',
      'جميلُ\njamīlu (no tanwīn — wrong)',
    ],
    correctIndex: 1,
    a: 'خبر "كان" منصوب دائماً: "كانَ الجوُّ جميلاً" — "الجوُّ" اسم كان مرفوع، و"جميلاً" خبرها منصوب.\nThe خبر of كان is always منصوب: كانَ الجوُّ جميلاً ("The weather was beautiful") — الجوُّ is اسم كان, مرفوع, and جميلاً is خبرها, منصوب.',
  },
  {
    q: 'أي مما يلي وصف صحيح لبعض أخوات "كان" (أصبح، أمسى، ظلّ، بات، صار، ليس)؟\nWhich of the following correctly describes some of أخوات كان (أصبح، أمسى، ظلّ، بات، صار، ليس)?',
    options: [
      'كلها تعمل عمل "كان" في رفع الاسم ونصب الخبر، مع إضافة دلالة زمنية أو معنوية خاصة بكل فعل\nThey all function like كان, keeping the noun مرفوع and the خبر منصوب, while each adds its own time-related or semantic nuance',
      'أفعال عادية لا ناسخة، لا تأثير لها على إعراب الجملة الاسمية\nOrdinary, non-defective verbs with no effect on the case of the nominal sentence',
      'أفعال حركة فقط لا علاقة لها بالجملة الاسمية\nVerbs of motion only, unrelated to the nominal sentence',
      'أفعال لا يجوز أن تسبق مبتدأ وخبراً\nVerbs that may never precede a مبتدأ and خبر',
    ],
    correctIndex: 0,
    a: 'من أخوات "كان": أصبح (صار في الصباح)، أمسى (صار في المساء)، ظلّ (استمر)، بات (صار ليلاً)، صار (تحول إلى)، وليس (النافية)؛ وكلها تعمل عمل "كان" في رفع الاسم ونصب الخبر مع إضافة دلالة زمنية أو معنوية خاصة بكل فعل.\nAmong أخوات كان: أصبح ("became," in the morning), أمسى ("became," in the evening), ظلّ ("remained/continued"), بات ("became," at night), صار ("turned into"), and ليس (negating "is not"); all of them function like كان — keeping the noun مرفوع and the خبر منصوب — while each adds its own time-related or semantic nuance.',
  },
  {
    q: 'أي من هذه الجمل بها خطأ في تطبيق عمل "كان" وأخواتها؟\nWhich of these sentences has an error in applying the grammatical effect of كان and her sisters?',
    options: [
      'أصبحَ الجوُّ بارداً\naṣbaḥa al-jawwu bāridan — the weather became cold (correct)',
      'ظلَّ الطالبُ مجتهداً\nẓalla ṭ-ṭālibu mujtahidan — the student remained diligent (correct)',
      'صارَ الماءُ جليدٌ\nṣāra al-māʾu jalīdun (as written — wrong)',
      'باتَ الطفلُ نائماً\nbāta aṭ-ṭiflu nāʾiman — the child ended up asleep (correct)',
    ],
    correctIndex: 2,
    a: '"صارَ الماءُ جليدٌ" خطأ لأن خبر "صار" (من أخوات كان) يجب أن يكون منصوباً: الصواب "صارَ الماءُ جليداً".\nصارَ الماءُ جليدٌ is wrong because the خبر of صار (one of أخوات كان) must be منصوب: the correct form is صارَ الماءُ جليداً ("The water turned into ice").',
  },
  {
    q: 'ما المعنى الخاص الذي يفيده الفعل الناسخ "ليس" رغم أن صيغته الصرفية صيغة ماضٍ؟\nWhat special meaning does the defective verb ليس convey, despite its morphological form being past tense?',
    options: [
      'يفيد معنى المستقبل\nIt conveys future meaning',
      'يفيد نفي الخبر عن الاسم في الحاضر ("is not")، رغم أن شكله الصرفي شكل الماضي\nIt conveys negating the خبر of the noun in the present ("is not"), despite its morphological shape being the past form',
      'يفيد الأمر\nIt conveys a command',
      'يفيد الاستمرار في الماضي فقط\nIt conveys continuity only in the past',
    ],
    correctIndex: 1,
    a: '"ليس" فعل ماضٍ في صيغته لكنه لا يتصرف ويفيد معنى النفي في الحاضر ("is not")، مثل "ليس الجوُّ بارداً" = "the weather is not cold" — فهو استثناء صرفي دلالي بين إخوة كان.\nليس is past tense in form but does not conjugate through other tenses, and it conveys negation in the present ("is not"), as in ليس الجوُّ بارداً = "the weather is not cold" — a morphological-and-semantic exception among the sisters of كان.',
  },
  {
    q: 'أكمل: ليس الطعامُ ___ (لذيذاً، خبر ليس منصوب)\nComplete: ليس الطعامُ ___ (لذيذاً, the accusative خبر of ليس)',
    options: [
      'لذيذٌ\nladhīdhun (nominative — wrong)',
      'لذيذاً\nladhīdhan (accusative — correct)',
      'لذيذٍ\nladhīdhin (genitive — wrong)',
      'لذيذُ\nladhīdhu (no tanwīn — wrong)',
    ],
    correctIndex: 1,
    a: '"ليس" تعمل عمل "كان" فتنصب خبرها: "ليس الطعامُ لذيذاً" (the food is not delicious) — "الطعامُ" اسمها مرفوع و"لذيذاً" خبرها منصوب.\nليس functions like كان, making its خبر منصوب: ليس الطعامُ لذيذاً ("the food is not delicious") — الطعامُ is اسمها, مرفوع, and لذيذاً is خبرها, منصوب.',
  },
  {
    q: 'الفعل "كاد" (بمعنى "كاد يفعل") ينتمي إلى أي أسرة نحوية، وهل هي نفسها "كان وأخواتها"؟\nThe verb كاد (meaning "he almost did") belongs to which grammatical family, and is it the same as كان وأخواتها?',
    options: [
      'نعم، هي نفسها كان وأخواتها تماماً بلا فرق\nYes, exactly the same as كان وأخواتها, with no difference',
      'أسرة قريبة تسمى "كاد وأخواتها" أو "أفعال المقاربة" — ناسخة كذلك، لكن خبرها يجب أن يكون جملة فعلية مضارعة لا اسماً مفرداً\nA related family called كاد وأخواتها or أفعال المقاربة — also case-affecting, but its خبر must be a present-tense verbal clause, not a single noun',
      'لا علاقة لها بكان وأخواتها إطلاقاً ولا تدخل على الجملة الاسمية\nIt has no relation to كان وأخواتها at all, and does not enter a nominal sentence',
      'هي أفعال تامة لا ناقصة\nThey are complete (تامة) verbs, not defective (ناقصة)',
    ],
    correctIndex: 1,
    a: '"كاد" ينتمي إلى فئة منفصلة تسمى "كاد وأخواتها" أو "أفعال المقاربة"، قريبة من "كان وأخواتها" في كونها ناسخة تدخل على الجملة الاسمية، لكنها تختلف بأن خبرها يجب أن يكون جملة فعلية مضارعة تدل على قرب وقوع الفعل، لا اسماً مفرداً كخبر كان.\nكاد belongs to a separate class called كاد وأخواتها or أفعال المقاربة, related to كان وأخواتها in that both are case-affecting verbs entering a nominal sentence, but different in that its خبر must be a present-tense verbal clause indicating that the action is close to happening, not a single noun like the خبر of كان.',
  },
  {
    q: 'ما معنى "كادَ" في جملة مثل "كادَ الطفلُ يسقطُ"، وهل يحتاج خبرها المضارع إلى "أن" غالباً؟\nWhat does كادَ mean in a sentence like كادَ الطفلُ يسقطُ, and does its present-tense خبر usually need أن?',
    options: [
      'بمعنى "سقط فعلاً"، وتحتاج "أن" وجوباً\nIt means "actually fell," and it obligatorily needs أن',
      'بمعنى "قارب على الفعل ولم يقع" (يكاد يفعل)، وغالباً لا تقترن بـ"أن" في خبرها المضارع\nIt means "came close to the action without it happening" (almost did), and it usually does NOT pair with أن in its present-tense خبر',
      'بمعنى الأمر بالفعل\nIt means commanding the action',
      'بمعنى النفي التام لوقوع الفعل\nIt means a complete denial that the action happened',
    ],
    correctIndex: 1,
    a: '"كادَ" تفيد "قارب على الفعل دون أن يقع فعلاً" (almost/nearly did): "كادَ الطفلُ يسقطُ" = "the child almost fell (but didn\'t)"، وخبرها المضارع يأتي غالباً دون "أن"، بخلاف بعض أخواتها مثل "عسى" التي تُفضّل الاقتران بـ"أن".\nكادَ conveys "came close to the action without it actually happening" (almost/nearly did): كادَ الطفلُ يسقطُ = "the child almost fell (but didn\'t)"; its present-tense خبر usually comes without أن, unlike some of its sisters, such as عسى, which prefers to pair with أن.',
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

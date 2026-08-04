import { createFileRoute, Link } from '@tanstack/react-router'
import { QuizCarousel } from '#/components/QuizCarousel'
import type { StrictQuizItem } from '#/routes/challenges/-quiz-types'

export const Route = createFileRoute('/challenges/grammar/kaana-wa-akhawatuha/')({
  head: () => ({ meta: [{ title: 'Kāna and Her Sisters, Continued — Grammar — Tayseer' }] }),
  component: TopicPage,
})

const quizItems: StrictQuizItem[] = [
  {
    q: 'أكمل تصريف "كان" مع ضمير المتكلم: أنا ___ مشغولاً أمسِ.\nComplete the conjugation of "كان" with the first-person pronoun: أنا ___ مشغولاً أمسِ — "I ___ busy yesterday."',
    options: [
      'كنتُ\nkuntu — "I was"',
      'كانَ\nkāna — "he was"',
      'كنتَ\nkunta — "you (m.) were"',
      'كنّا\nkunnā — "we were"',
    ],
    correctIndex: 0,
    a: '"كنتُ" هي صيغة "كان" مع ضمير المتكلم المفرد (أنا)، بإسناد الفعل إلى تاء الفاعل: كنتُ مشغولاً.\n"كنتُ" is the form of "كان" for the first-person singular pronoun (أنا), formed by attaching تاء الفاعل to the verb: كنتُ مشغولاً — "I was busy."',
  },
  {
    q: 'كيف تُنفى "كان" في المضارع (لم تكن قد وقعت الحالة/الصفة)؟\nHow is "كان" negated in the present tense (to say the state/quality did not occur)?',
    options: [
      'بإدخال "لم" على المضارع "يكون" فتصبح "لم يكن" (وهي مجزومة، تفيد نفي الماضي)\nBy putting "لم" before the present-tense "يكون", giving "لم يكن" (جزم mood, negating the past)',
      'بإضافة "لا" فقط أمام كان الماضي\nBy simply adding "لا" before the past-tense كان',
      'لا يمكن نفي كان إطلاقاً\nكان cannot be negated at all',
      'باستخدام "ليس" فقط دون أي أداة أخرى\nBy using only "ليس", with no other particle',
    ],
    correctIndex: 0,
    a: 'تُنفى "كان" بجزم مضارعها "يكون" بـ"لم": "لم يكن الجوُّ بارداً" (the weather was not cold) — لم تجزم الفعل المضارع فحذفت النون الأصلية من "يكون" وصار "يكن".\n"كان" is negated by putting its present-tense form "يكون" into the جزم mood with "لم": "لم يكن الجوُّ بارداً" — "The weather was not cold." لم puts the present verb in جزم, dropping the original ن from "يكون" to give "يكن".',
  },
  {
    q: 'ما الفرق الدقيق بين "أصبح" و"أضحى" و"بات" من أخوات كان؟\nWhat is the precise difference between "أصبح", "أضحى", and "بات", sisters of كان?',
    options: [
      'أصبح: صار الشيء في الصباح أو مطلق الصيرورة، أضحى: صار وقت الضحى (أول النهار)، بات: صار أو بقي ليلاً — لكل منها دلالة زمنية خاصة رغم أنها كلها ترفع الاسم وتنصب الخبر\nأصبح: the thing became so in the morning, or general "becoming"; أضحى: became so at mid-morning (الضحى); بات: became or stayed so overnight — each carries its own time nuance, though all three make the noun مرفوع and the predicate منصوب',
      'الثلاثة بمعنى واحد تماماً ولا فرق بينها\nAll three mean exactly the same thing, with no difference',
      'أضحى تفيد النفي، وبات تفيد الأمر\nأضحى indicates negation, and بات indicates a command',
      'أصبح فعل تام لا ناقص\nأصبح is a complete (تام) verb, not a defective (ناقص) one',
    ],
    correctIndex: 0,
    a: 'أصبح، أضحى، بات كلها من أخوات كان الناقصة (ترفع الاسم وتنصب الخبر)، لكن كل واحدة تحمل دلالة زمنية خاصة: أصبح (بداية النهار/صار عموماً)، أضحى (وقت الضحى)، بات (بات ليلاً/قضى الليل على حال).\nأصبح، أضحى، بات are all defective sisters of كان (they make the noun مرفوع and the predicate منصوب), but each carries its own time nuance: أصبح (start of the day / becoming in general), أضحى (mid-morning), بات (overnight / spending the night in a state).',
  },
  {
    q: 'ما الفرق بين "ظلّ" و"صار" من أخوات كان؟\nWhat is the difference between "ظلّ" and "صار", sisters of كان?',
    options: [
      'ظلّ تفيد الاستمرار على حال طوال النهار (بقي على حاله)، بينما صار تفيد التحول من حال إلى حال آخر\nظلّ indicates continuing in a state all day (remained as it was), while صار indicates transforming from one state into another',
      'كلاهما يفيد التحول الكامل فقط\nBoth indicate only complete transformation',
      'ظلّ فعل تام لا يدخل على الجملة الاسمية\nظلّ is a complete (تام) verb that never enters a nominal sentence',
      'صار تفيد النفي المطلق\nصار indicates absolute negation',
    ],
    correctIndex: 0,
    a: '"ظلّ" تفيد استمرار الفاعل على حالته طوال النهار ("ظلّ الجوُّ حاراً")، بينما "صار" تفيد التحول من حال إلى حال مغاير ("صار الماءُ جليداً").\n"ظلّ" indicates the subject continuing in its state all day ("ظلّ الجوُّ حاراً" — "The weather stayed hot"), while "صار" indicates transforming from one state into a different one ("صار الماءُ جليداً" — "The water turned to ice").',
  },
  {
    q: 'أيّ من الجمل التالية بها خطأ في تصريف "كان" مع الضمير؟\nWhich of the following sentences has an error in conjugating "كان" with its pronoun?',
    options: [
      'هم كانوا مسافرين\nhum kānū musāfirīn — "They (m.) were traveling"',
      'أنتم كنتم مجتهدين\nantum kuntum mujtahidīn — "You (m. pl.) were diligent"',
      'نحن كنتُ سعداء\nnaḥnu kuntu su\'adā\' — the mismatched pronoun/verb pairing is the error here',
      'هي كانت نائمةً\nhiya kānat nā\'imatan — "She was sleeping"',
    ],
    correctIndex: 2,
    a: '"نحن كنتُ سعداء" خطأ لأن ضمير الجماعة المتكلمة (نحن) يستوجب صيغة "كنّا"، لا "كنتُ" (وهي خاصة بالمتكلم المفرد "أنا"): الصواب "نحن كنّا سعداء".\n"نحن كنتُ سعداء" is wrong because the first-person plural pronoun (نحن) requires the form "كنّا", not "كنتُ" (which belongs to the first-person singular "أنا"): the correct sentence is "نحن كنّا سعداء" — "We were happy."',
  },
  {
    q: 'ما معنى "ما زال" و"ما دام" تحديداً، وهل تعملان عمل كان؟\nWhat exactly do "ما زال" and "ما دام" mean, and do they function like كان?',
    options: [
      'نعم تعملان عمل كان (ترفعان الاسم وتنصبان الخبر): "ما زال" تفيد استمرار الحال إلى الآن ("لا يزال/still")، و"ما دام" تفيد الاستمرار المرتبط بمدة أو شرط ("طالما/as long as")\nYes, they function like كان (they make the noun مرفوع and the predicate منصوب): "ما زال" indicates a state continuing up to now ("still"), and "ما دام" indicates continuation tied to a duration or condition ("as long as")',
      'لا تعملان عمل كان إطلاقاً، فهما فعلان تامان\nThey do not function like كان at all — they are complete (تام) verbs',
      'كلاهما بمعنى النفي التام لوقوع الفعل\nBoth mean the total negation of the action occurring',
      '"ما دام" تفيد الأمر و"ما زال" تفيد النهي\n"ما دام" indicates a command, and "ما زال" indicates a prohibition',
    ],
    correctIndex: 0,
    a: '"ما زال" و"ما دام" من أخوات كان الناقصة، ترفعان الاسم وتنصبان الخبر: "ما زال الجوُّ بارداً" (the weather is still cold)، و"ما دمتَ هنا فلن أذهب" (as long as you are here, I will not go) — "ما" هنا جزء من الأداة الثابتة لا نافية مستقلة في هذا السياق.\n"ما زال" and "ما دام" are defective sisters of كان — they make the noun مرفوع and the predicate منصوب: "ما زال الجوُّ بارداً" — "The weather is still cold" — and "ما دمتَ هنا فلن أذهب" — "As long as you are here, I will not go." Here "ما" is a fixed part of the particle itself, not an independent negator.',
  },
  {
    q: 'أكمل: ما زال الطالبُ ___ (خبر ما زال منصوب، بمعنى "لا يزال يذاكر")\nComplete: ما زال الطالبُ ___ — "The student is still..." (خبر ما زال, منصوب, meaning "still studying")',
    options: [
      'مجتهدٌ\nmujtahidun — "diligent" (مرفوع)',
      'مجتهداً\nmujtahidan — "diligent" (منصوب)',
      'مجتهدٍ\nmujtahidin — "diligent" (مجرور)',
      'مجتهدُ\nmujtahidu — "diligent" (definite مرفوع form, no tanwīn)',
    ],
    correctIndex: 1,
    a: '"ما زال" تعمل عمل كان فتنصب خبرها: "ما زال الطالبُ مجتهداً" — الطالبُ اسمها مرفوع، ومجتهداً خبرها منصوب.\n"ما زال" functions like كان, so it makes its خبر منصوب: "ما زال الطالبُ مجتهداً" — "The student is still diligent" — الطالبُ is its اسم, مرفوع, and مجتهداً is its خبر, منصوب.',
  },
  {
    q: 'أعرب "بارداً" في الجملة: ظلَّ الجوُّ بارداً طوال اليوم.\nParse "بارداً" in the sentence: ظلَّ الجوُّ بارداً طوال اليوم — "The weather stayed cold all day."',
    options: [
      'خبر ظلّ منصوب\nThe خبر of ظلّ, منصوب (accusative)',
      'اسم ظلّ مرفوع\nThe اسم of ظلّ, مرفوع (nominative)',
      'مفعول به لفعل محذوف\nDirect object (مفعول به) of an omitted verb',
      'حال منصوبة لا علاقة لها بظلّ\nAn منصوب حال unrelated to ظلّ',
    ],
    correctIndex: 0,
    a: '"بارداً" خبر الفعل الناقص "ظلّ" منصوب، والجوُّ اسمها مرفوع؛ "ظلّ" هنا تفيد استمرار الجو على حالة البرودة طوال اليوم.\n"بارداً" is the خبر of the defective verb "ظلّ", منصوب, while الجوُّ is its اسم, مرفوع; "ظلّ" here indicates the weather continuing in its cold state all day.',
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
            Topic 39 of 62
          </p>
          <h1 className="font-serif tracking-[-0.02em] text-3xl font-bold text-foreground leading-tight mb-3">
            <span
              dir="rtl"
              lang="ar"
              style={{ fontFamily: "'Noto Naskh Arabic', serif" }}
              className="mr-2"
            >
              كان وأخواتها (تابع)
            </span>
            — Kāna and Her Sisters, Continued
          </h1>
          <p className="text-muted-foreground text-base max-w-xl">
            <bdi lang="ar">كان</bdi> conjugates fully across persons (<bdi lang="ar">كنتُ، كنتَ، كنتِ، كان، كانت، كنّا، كنتم، كنّ،
            كانوا</bdi>) and is negated in the present with <bdi lang="ar">لم يكن</bdi>. Beyond the basics, her sisters carry
            distinct nuances: <bdi lang="ar">أصبح/أضحى/بات</bdi> mark becoming at a time of day, <bdi lang="ar">ظلّ</bdi> marks continuing
            all day, <bdi lang="ar">صار</bdi> marks transformation, and <bdi lang="ar">ما زال/ما دام</bdi> mark ongoing continuation
            ("still" / "as long as") — all still raising the <bdi lang="ar">اسم</bdi> and putting the <bdi lang="ar">خبر</bdi> in <bdi lang="ar">النصب</bdi>.
          </p>
        </div>
      </div>
      <div className="mx-auto w-[min(720px,calc(100%-2rem))] py-8">
        <QuizCarousel items={quizItems} />
      </div>
    </main>
  )
}

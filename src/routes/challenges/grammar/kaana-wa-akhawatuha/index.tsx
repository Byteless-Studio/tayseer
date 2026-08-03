import { createFileRoute, Link } from '@tanstack/react-router'
import { QuizCarousel } from '#/components/QuizCarousel'
import type { StrictQuizItem } from '#/routes/challenges/-quiz-types'

export const Route = createFileRoute('/challenges/grammar/kaana-wa-akhawatuha/')({
  head: () => ({ meta: [{ title: 'Kāna and Her Sisters, Continued — Grammar — Tayseer' }] }),
  component: TopicPage,
})

const quizItems: StrictQuizItem[] = [
  {
    q: 'أكمل تصريف "كان" مع ضمير المتكلم: أنا ___ مشغولاً أمسِ.',
    options: ['كنتُ', 'كانَ', 'كنتَ', 'كنّا'],
    correctIndex: 0,
    a: '"كنتُ" هي صيغة "كان" مع ضمير المتكلم المفرد (أنا)، بإسناد الفعل إلى تاء الفاعل: كنتُ مشغولاً.',
  },
  {
    q: 'كيف تُنفى "كان" في المضارع (لم تكن قد وقعت الحالة/الصفة)؟',
    options: [
      'بإدخال "لم" على المضارع "يكون" فتصبح "لم يكن" (وهي مجزومة، تفيد نفي الماضي)',
      'بإضافة "لا" فقط أمام كان الماضي',
      'لا يمكن نفي كان إطلاقاً',
      'باستخدام "ليس" فقط دون أي أداة أخرى',
    ],
    correctIndex: 0,
    a: 'تُنفى "كان" بجزم مضارعها "يكون" بـ"لم": "لم يكن الجوُّ بارداً" (the weather was not cold) — لم تجزم الفعل المضارع فحذفت النون الأصلية من "يكون" وصار "يكن".',
  },
  {
    q: 'ما الفرق الدقيق بين "أصبح" و"أضحى" و"بات" من أخوات كان؟',
    options: [
      'أصبح: صار الشيء في الصباح أو مطلق الصيرورة، أضحى: صار وقت الضحى (أول النهار)، بات: صار أو بقي ليلاً — لكل منها دلالة زمنية خاصة رغم أنها كلها ترفع الاسم وتنصب الخبر',
      'الثلاثة بمعنى واحد تماماً ولا فرق بينها',
      'أضحى تفيد النفي، وبات تفيد الأمر',
      'أصبح فعل تام لا ناقص',
    ],
    correctIndex: 0,
    a: 'أصبح، أضحى، بات كلها من أخوات كان الناقصة (ترفع الاسم وتنصب الخبر)، لكن كل واحدة تحمل دلالة زمنية خاصة: أصبح (بداية النهار/صار عموماً)، أضحى (وقت الضحى)، بات (بات ليلاً/قضى الليل على حال).',
  },
  {
    q: 'ما الفرق بين "ظلّ" و"صار" من أخوات كان؟',
    options: [
      'ظلّ تفيد الاستمرار على حال طوال النهار (بقي على حاله)، بينما صار تفيد التحول من حال إلى حال آخر',
      'كلاهما يفيد التحول الكامل فقط',
      'ظلّ فعل تام لا يدخل على الجملة الاسمية',
      'صار تفيد النفي المطلق',
    ],
    correctIndex: 0,
    a: '"ظلّ" تفيد استمرار الفاعل على حالته طوال النهار ("ظلّ الجوُّ حاراً")، بينما "صار" تفيد التحول من حال إلى حال مغاير ("صار الماءُ جليداً").',
  },
  {
    q: 'أيّ من الجمل التالية بها خطأ في تصريف "كان" مع الضمير؟',
    options: ['هم كانوا مسافرين', 'أنتم كنتم مجتهدين', 'نحن كنتُ سعداء', 'هي كانت نائمةً'],
    correctIndex: 2,
    a: '"نحن كنتُ سعداء" خطأ لأن ضمير الجماعة المتكلمة (نحن) يستوجب صيغة "كنّا"، لا "كنتُ" (وهي خاصة بالمتكلم المفرد "أنا"): الصواب "نحن كنّا سعداء".',
  },
  {
    q: 'ما معنى "ما زال" و"ما دام" تحديداً، وهل تعملان عمل كان؟',
    options: [
      'نعم تعملان عمل كان (ترفعان الاسم وتنصبان الخبر): "ما زال" تفيد استمرار الحال إلى الآن ("لا يزال/still")، و"ما دام" تفيد الاستمرار المرتبط بمدة أو شرط ("طالما/as long as")',
      'لا تعملان عمل كان إطلاقاً، فهما فعلان تامان',
      'كلاهما بمعنى النفي التام لوقوع الفعل',
      '"ما دام" تفيد الأمر و"ما زال" تفيد النهي',
    ],
    correctIndex: 0,
    a: '"ما زال" و"ما دام" من أخوات كان الناقصة، ترفعان الاسم وتنصبان الخبر: "ما زال الجوُّ بارداً" (the weather is still cold)، و"ما دمتَ هنا فلن أذهب" (as long as you are here, I will not go) — "ما" هنا جزء من الأداة الثابتة لا نافية مستقلة في هذا السياق.',
  },
  {
    q: 'أكمل: ما زال الطالبُ ___ (خبر ما زال منصوب، بمعنى "لا يزال يذاكر")',
    options: ['مجتهدٌ', 'مجتهداً', 'مجتهدٍ', 'مجتهدُ'],
    correctIndex: 1,
    a: '"ما زال" تعمل عمل كان فتنصب خبرها: "ما زال الطالبُ مجتهداً" — الطالبُ اسمها مرفوع، ومجتهداً خبرها منصوب.',
  },
  {
    q: 'أعرب "بارداً" في الجملة: ظلَّ الجوُّ بارداً طوال اليوم.',
    options: [
      'خبر ظلّ منصوب',
      'اسم ظلّ مرفوع',
      'مفعول به لفعل محذوف',
      'حال منصوبة لا علاقة لها بظلّ',
    ],
    correctIndex: 0,
    a: '"بارداً" خبر الفعل الناقص "ظلّ" منصوب، والجوُّ اسمها مرفوع؛ "ظلّ" هنا تفيد استمرار الجو على حالة البرودة طوال اليوم.',
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
            Topic 39 of 47
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
            كان conjugates fully across persons (كنتُ، كنتَ، كنتِ، كان، كانت، كنّا، كنتم، كنّ،
            كانوا) and is negated in the present with لم يكن. Beyond the basics, her sisters carry
            distinct nuances: أصبح/أضحى/بات mark becoming at a time of day, ظلّ marks continuing
            all day, صار marks transformation, and ما زال/ما دام mark ongoing continuation
            ("still" / "as long as") — all still raising the اسم and putting the خبر in النصب.
          </p>
        </div>
      </div>
      <div className="mx-auto w-[min(720px,calc(100%-2rem))] py-8">
        <QuizCarousel items={quizItems} />
      </div>
    </main>
  )
}

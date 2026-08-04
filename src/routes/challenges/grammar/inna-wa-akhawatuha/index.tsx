import { createFileRoute, Link } from '@tanstack/react-router'
import { QuizCarousel } from '#/components/QuizCarousel'
import type { StrictQuizItem } from '#/routes/challenges/-quiz-types'

export const Route = createFileRoute('/challenges/grammar/inna-wa-akhawatuha/')({
  head: () => ({ meta: [{ title: 'Inna and Her Sisters — Grammar — Tayseer' }] }),
  component: TopicPage,
})

const quizItems: StrictQuizItem[] = [
  {
    q: 'ماذا تفعل "إنّ وأخواتها" (الحروف المشبهة بالفعل) بالجملة الاسمية التي تدخل عليها؟\nWhat do "إنّ and her sisters" (particles resembling the verb) do to the nominal sentence they enter?',
    options: [
      'ترفع الاسم (المبتدأ سابقاً) وتنصب الخبر\nThey make the noun (formerly المبتدأ) مرفوع and the predicate (الخبر) منصوب',
      'تنصب الاسم (وكان مبتدأ سابقاً) وترفع الخبر — عكس عمل "كان وأخواتها" التي ترفع اسمها وتنصب خبرها\nThey make the noun (formerly المبتدأ) منصوب and the predicate مرفوع — the opposite of "كان and her sisters", which make their noun مرفوع and their predicate منصوب',
      'تجر الاسمين معاً\nThey put both nouns in the مجرور (genitive) case',
      'لا تأثير لها على الإعراب إطلاقاً\nThey have no effect on the case endings at all',
    ],
    correctIndex: 1,
    a: '"إنّ وأخواتها" تدخل على الجملة الاسمية فتنصب المبتدأ (ويسمى اسمها) وترفع الخبر (ويسمى خبرها) — وهذا عكس عمل "كان وأخواتها" التي ترفع اسمها وتنصب خبرها.\n"إنّ and her sisters" enter the nominal sentence and make المبتدأ منصوب (now called اسمها) while الخبر stays مرفوع (now called خبرها) — the exact opposite of "كان and her sisters", which make their اسم مرفوع and their خبر منصوب.',
  },
  {
    q: 'أكمل: إنّ الطالبَ ___ (خبر إنّ مرفوع)\nComplete: إنّ الطالبَ ___ — "Indeed the student is..." (خبر إنّ, مرفوع)',
    options: [
      'مجتهدٌ\nmujtahidun — "diligent" (مرفوع)',
      'مجتهداً\nmujtahidan — "diligent" (منصوب)',
      'مجتهدٍ\nmujtahidin — "diligent" (مجرور)',
      'مجتهد\nmujtahid — "diligent" (no case ending)',
    ],
    correctIndex: 0,
    a: 'خبر "إنّ" يبقى مرفوعاً كما كان قبل دخولها: "إنّ الطالبَ مجتهدٌ" — "الطالبَ" اسم إنّ منصوب، و"مجتهدٌ" خبرها مرفوع بالضمة المنونة.\nThe خبر of "إنّ" stays مرفوع, exactly as it was before إنّ entered: "إنّ الطالبَ مجتهدٌ" — "Indeed the student is diligent." "الطالبَ" is اسم إنّ, منصوب, and "مجتهدٌ" is its خبر, مرفوع with tanwīn ḍamma.',
  },
  {
    q: 'ما الفرق بين "ليت" و"لعلّ" من حيث المعنى؟\nWhat is the difference in meaning between "ليت" (layta) and "لعلّ" (la\'alla)?',
    options: [
      'ليت للتمني بأمر بعيد الحدوث أو مستحيل (I wish)، بينما لعلّ للترجي بأمر ممكن ومتوقع الحدوث (perhaps/hopefully)\nليت expresses wishing for something unlikely or impossible ("I wish"), while لعلّ expresses hoping for something possible and expected ("perhaps/hopefully")',
      'كلاهما بمعنى واحد تماماً ويمكن تبادلهما بحرية\nBoth mean exactly the same thing and can be freely swapped',
      'ليت للتشبيه، ولعلّ للتوكيد\nليت expresses comparison, and لعلّ expresses emphasis',
      'لعلّ تُستخدم للماضي فقط، وليت للمستقبل فقط\nلعلّ is used only for the past, and ليت only for the future',
    ],
    correctIndex: 0,
    a: '"ليت" تفيد التمني بأمر يصعب أو يستحيل حدوثه ("ليت الشبابَ يعودُ")، بينما "لعلّ" تفيد الترجي، أي توقع أمر ممكن الحدوث وقريب منه ("لعلّ الامتحانَ سهلٌ").\n"ليت" expresses wishing for something difficult or impossible to happen ("ليت الشبابَ يعودُ" — "I wish youth would return"), while "لعلّ" expresses hoping for something possible and within reach ("لعلّ الامتحانَ سهلٌ" — "Perhaps the exam is easy").',
  },
  {
    q: 'أيّ من الجمل التالية بها خطأ نحوي في تطبيق عمل "إنّ وأخواتها"؟\nWhich of the following sentences has a grammatical error in applying the effect of "إنّ and her sisters"?',
    options: [
      'إنّ الجوَّ جميلٌ\ninna l-jawwa jamīlun — "Indeed the weather is beautiful"',
      'لعلّ الامتحانَ سهلٌ\nla\'alla l-imtiḥāna sahlun — "Perhaps the exam is easy"',
      'كأنّ القمرُ جميلٌ\nka\'anna l-qamaru jamīlun — اسم كأنّ left مرفوع here, which is the error',
      'ليتَ الشبابَ يعودُ\nlayta sh-shabāba ya\'ūdu — "I wish youth would return"',
    ],
    correctIndex: 2,
    a: '"كأنّ القمرُ جميلٌ" خطأ لأن اسم "كأنّ" يجب أن يكون منصوباً؛ الصواب "كأنّ القمرَ جميلٌ" — القمرَ اسم كأنّ منصوب، وجميلٌ خبرها مرفوع.\n"كأنّ القمرُ جميلٌ" is wrong because اسم "كأنّ" must be منصوب; the correct form is "كأنّ القمرَ جميلٌ" — "As if the moon is beautiful" — where القمرَ is اسم كأنّ, منصوب, and جميلٌ is its خبر, مرفوع.',
  },
  {
    q: 'متى نستخدم "أنّ" (بفتح الهمزة) بدلاً من "إنّ" (بكسرها)؟\nWhen do we use "أنّ" (with fatḥa on the hamza) instead of "إنّ" (with kasra)?',
    options: [
      'عند الابتداء بجملة توكيدية مستقلة في أول الكلام أو بعد فعل القول، مثل "قال إنّ الحقَّ منتصرٌ"\nWhen opening an independent, emphatic sentence at the start of speech, or after a verb of saying, as in "قال إنّ الحقَّ منتصرٌ"',
      'عندما تقع الجملة بعدها في تأويل مصدر يشغل موقعاً إعرابياً آخر في الجملة (فاعلاً أو مفعولاً به أو مجروراً)، مثل "علمتُ أنّ الحقَّ منتصرٌ"\nWhen the clause after it is interpreted as a مصدر filling another grammatical role in the sentence (subject, object, or مجرور), as in "علمتُ أنّ الحقَّ منتصرٌ"',
      'لا فرق بينهما إطلاقاً ويمكن استخدام أيهما في كل موضع\nThere is no difference between them at all, and either can be used anywhere',
      '"أنّ" تفيد النفي دائماً\n"أنّ" always indicates negation',
    ],
    correctIndex: 1,
    a: '"أنّ" المفتوحة تُستخدم حين تكون الجملة بعدها في تأويل مصدر يشغل موقعاً إعرابياً (فاعلاً أو مفعولاً به أو مجروراً) في جملة أخرى، مثل "علمتُ أنّ الحقَّ منتصرٌ" (أنّ الحقَّ منتصرٌ في تأويل مصدر: "انتصارَ الحقِّ"). أما "إنّ" المكسورة فتُستخدم لبدء جملة توكيدية مستقلة، وبعد القول كما في "قال إنّ...".\n"أنّ" (with fatḥa) is used when the clause after it is interpreted as a مصدر filling a grammatical role (subject, object, or مجرور) in another sentence, as in "علمتُ أنّ الحقَّ منتصرٌ" — "I knew that the truth prevails" (أنّ الحقَّ منتصرٌ resolves to the مصدر "انتصارَ الحقِّ", "the truth\'s prevailing"). "إنّ" (with kasra), by contrast, opens an independent, emphatic sentence, and follows verbs of saying, as in "قال إنّ...".',
  },
  {
    q: 'أكمل: العملُ متعبٌ لكنّ النتيجةَ ___ (خبر لكنّ مرفوع)\nComplete: العملُ متعبٌ لكنّ النتيجةَ ___ — "The work is tiring, but the result is..." (خبر لكنّ, مرفوع)',
    options: [
      'مُرضيةٌ\nmurḍiyatun — "satisfying" (مرفوع)',
      'مُرضيةً\nmurḍiyatan — "satisfying" (منصوب)',
      'مُرضيةٍ\nmurḍiyatin — "satisfying" (مجرور)',
      'مُرضيةُ\nmurḍiyatu — "satisfying" (definite مرفوع form, no tanwīn)',
    ],
    correctIndex: 0,
    a: '"لكنّ" من أخوات إنّ، فتنصب اسمها ("النتيجةَ") وترفع خبرها؛ فخبرها هنا "مُرضيةٌ" يبقى مرفوعاً بالضمة المنونة كما لو لم تدخل لكنّ على الجملة.\n"لكنّ" is one of the sisters of إنّ, so it makes its اسم ("النتيجةَ") منصوب and its خبر مرفوع; here its خبر "مُرضيةٌ" stays مرفوع with tanwīn ḍamma, just as it would be if لكنّ had never entered the sentence.',
  },
  {
    q: 'أي مجموعة من الحروف التالية تمثّل "إنّ وأخواتها" بالكامل؟\nWhich group of particles below fully represents "إنّ and her sisters"?',
    options: [
      'إنّ، أنّ، لكنّ، كأنّ، لعلّ، ليت\ninna, anna, lakinna, ka\'anna, la\'alla, layta — all six sisters of إنّ',
      'كان، أصبح، ظلّ، بات\nkāna, aṣbaḥa, ẓalla, bāta — these are sisters of كان, not إنّ',
      'لم، لن، لام الأمر\nlam, lan, lām al-amr — these are verb-negating/jussive particles',
      'و، ف، ثم، أو، أم\nwa, fa, thumma, aw, am — these are conjunctions (حروف العطف)',
    ],
    correctIndex: 0,
    a: '"إنّ وأخواتها" ست حروف: إنّ (التوكيد)، أنّ (توكيد بمعنى "أنّ" الرابطة)، لكنّ (الاستدراك)، كأنّ (التشبيه)، لعلّ (الترجي)، ليت (التمني).\n"إنّ and her sisters" are six particles: إنّ (emphasis), أنّ (emphasis, functioning as the connective "that"), لكنّ (contrast, "but"), كأنّ (comparison, "as if"), لعلّ (hope, "perhaps"), and ليت (wishing, "I wish").',
  },
  {
    q: 'ما المعنى الذي يفيده الحرف "إنّ" تحديداً عند دخوله على الجملة الاسمية؟\nWhat specific meaning does the particle "إنّ" add when it enters a nominal sentence?',
    options: [
      'توكيد مضمون الجملة، بمعنى "بالتأكيد/فعلاً" — "إنّ الحقَّ منتصرٌ" (indeed, the truth prevails)\nEmphasis on the content of the sentence, meaning "certainly/indeed" — "إنّ الحقَّ منتصرٌ" ("Indeed, the truth prevails")',
      'التمني بأمر مستحيل\nWishing for something impossible',
      'التشبيه بأداة كأنّ\nComparison, like the particle كأنّ',
      'الاستدراك بعد نفي أو إثبات سابق\nContrast after a preceding negation or affirmation',
    ],
    correctIndex: 0,
    a: '"إنّ" تفيد التوكيد، أي تأكيد مضمون الجملة الاسمية التي تدخل عليها، وهي أشهر أخوات هذا الباب وأكثرها استعمالاً.\n"إنّ" indicates emphasis — confirming the content of the nominal sentence it enters — and it is the most well-known and most commonly used of this group of sisters.',
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
            Topic 38 of 62
          </p>
          <h1 className="font-serif tracking-[-0.02em] text-3xl font-bold text-foreground leading-tight mb-3">
            <span
              dir="rtl"
              lang="ar"
              style={{ fontFamily: "'Noto Naskh Arabic', serif" }}
              className="mr-2"
            >
              إن وأخواتها
            </span>
            — Inna and Her Sisters
          </h1>
          <p className="text-muted-foreground text-base max-w-xl">
            <bdi lang="ar">إنّ أنّ لكنّ كأنّ لعلّ ليت</bdi> enter a nominal sentence and make <bdi lang="ar">اسمها منصوب</bdi> while <bdi lang="ar">خبرها</bdi>
            stays <bdi lang="ar">مرفوع</bdi> — the exact opposite of <bdi lang="ar">كان</bdi>'s family. <bdi lang="ar">إنّ</bdi> means "indeed" (emphasis), <bdi lang="ar">أنّ</bdi>
            subordinates a clause into "that", <bdi lang="ar">لكنّ</bdi> means "but", <bdi lang="ar">كأنّ</bdi> means "as if", <bdi lang="ar">لعلّ</bdi> means
            "perhaps", and <bdi lang="ar">ليت</bdi> means "I wish" (for something unlikely or impossible).
          </p>
        </div>
      </div>
      <div className="mx-auto w-[min(720px,calc(100%-2rem))] py-8">
        <QuizCarousel items={quizItems} />
      </div>
    </main>
  )
}

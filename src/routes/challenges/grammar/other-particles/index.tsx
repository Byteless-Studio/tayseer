import { createFileRoute, Link } from '@tanstack/react-router'
import { QuizCarousel } from '#/components/QuizCarousel'
import type { StrictQuizItem } from '#/routes/challenges/-quiz-types'

export const Route = createFileRoute('/challenges/grammar/other-particles/')({
  head: () => ({ meta: [{ title: 'Other Particles — Grammar — Tayseer' }] }),
  component: TopicPage,
})

const quizItems: StrictQuizItem[] = [
  {
    q: '"لأنّ" من أخوات "إنّ" التي تدخل على الجملة الاسمية. ما تأثيرها الإعرابي؟\nلأنّ is a sister of إنّ that governs a nominal sentence. What is its grammatical effect?',
    options: [
      'تنصب المبتدأ (فيصير اسمها) وترفع الخبر، وتفيد السببية بمعنى "because"\nIt makes the subject (مبتدأ) accusative, turning it into its اسم, and keeps the predicate (خبر) nominative — and it conveys causation, meaning "because"',
      'ترفع المبتدأ وتنصب الخبر\nIt keeps the subject nominative and makes the predicate accusative',
      'تجزم الفعل المضارع الذي يليها\nIt puts the following present-tense verb into the jussive (تجزم)',
      'لا تأثير إعرابي لها إطلاقاً\nIt has no grammatical effect at all',
    ],
    correctIndex: 0,
    a: '"لأنّ" كإنّ وأخواتها تنصب المبتدأ فيصبح اسمها، وتُبقي الخبر مرفوعاً؛ وهي تفيد السببية: "تغيّبتُ لأنّ الطقسَ باردٌ".\nLike إنّ and its sisters, لأنّ makes the subject accusative, turning it into its اسم, and keeps the predicate (خبر) nominative; it conveys causation: تغيّبتُ لأنّ الطقسَ باردٌ — "I was absent because the weather is cold."',
  },
  {
    q: 'تغيّبتُ عن المدرسةِ لأنّ الطقسَ ___ (أكمل بالخبر المرفوع بمعنى "بارد")\ntaghayyabtu ʿan al-madrasati li-anna ṭ-ṭaqsa ___ — "I was absent from school because the weather is cold" (complete with the nominative خبر meaning "cold")',
    options: [
      'باردٌ\nbāridun — nominative (مرفوع)',
      'باردَ\nbārada — accusative form, not valid here',
      'باردًا\nbāridan — accusative with تنوين, not valid here',
      'باردٍ\nbāridin — genitive (مجرور), not valid here',
    ],
    correctIndex: 0,
    a: '"لأنّ" تنصب اسمها ("الطقسَ") وترفع خبرها، فتكون صيغة الخبر مرفوعة بالضمة المنونة: "باردٌ".\nلأنّ makes its اسم (الطقسَ) accusative and keeps its خبر nominative, so the predicate takes the nominative تنوين ending: باردٌ.',
  },
  {
    q: 'ما وظيفة "فإنّ" (الفاء + إنّ) في جملة مثل: من يجتهدْ فإنّه ناجحٌ؟\nWhat is the function of فإنّ (ف + إنّ) in a sentence like من يجتهدْ فإنّه ناجحٌ ("Whoever works hard will surely succeed")?',
    options: [
      'مركّبة من الفاء الرابطة لجواب الشرط + إنّ التوكيدية الناصبة، فتربط الجواب بالشرط مع التوكيد وتنصب ما بعدها كإنّ\nIt is made of the linking ف of the جواب الشرط plus the emphatic, accusative-marking إنّ — it links the جواب to the شرط with emphasis, and makes what follows accusative like إنّ',
      'تجزم فعل الشرط\nIt puts the conditional verb into the jussive (تجزم)',
      'تفيد النفي المطلق للجملة\nIt conveys the absolute negation of the sentence',
      'تدخل فقط على الأفعال الماضية ولا علاقة لها بالجمل الاسمية\nIt only governs past-tense verbs and has nothing to do with nominal sentences',
    ],
    correctIndex: 0,
    a: '"فإنّ" مركّبة من الفاء الرابطة لجواب الشرط (خاصة حين يكون الجواب جملة اسمية) + "إنّ" التوكيدية، فتربط الجواب بالشرط مع توكيد المعنى، وتنصب اسمها وترفع خبرها كإنّ العادية.\nفإنّ is made of the linking ف of the جواب الشرط (especially when the جواب is a nominal sentence) plus emphatic إنّ — it links the جواب to the شرط while emphasizing the meaning, and, like ordinary إنّ, makes its اسم accusative and keeps its خبر nominative.',
  },
  {
    q: 'من يجتهدْ ___ ناجحٌ (اختر الأنسب لربط جواب الشرط الاسمي بالشرط مع التوكيد)\nman yajtahid ___ nājiḥun — choose the best fit to link the nominal جواب الشرط to the شرط, with emphasis',
    options: [
      'فإنّه\nfa-innahu — the correct combination',
      'لأنّه\nli-annahu — "because he" (causal, not a linker for جواب الشرط)',
      'إنما\ninnamā — "only/just" (restrictive)',
      'أنّه\nannahu — "that he," without the linking ف',
    ],
    correctIndex: 0,
    a: '"فإنّه" هي الأنسب: الفاء رابطة لجواب الشرط، وإنّ توكيدية ناصبة، والهاء ضمير اسمها: "من يجتهدْ فإنّه ناجحٌ".\nفإنّه is the best fit: the ف links the جواب الشرط, إنّ is the emphatic accusative-marking particle, and the ه is the pronoun serving as its اسم: من يجتهدْ فإنّه ناجحٌ — "Whoever works hard will surely succeed."',
  },
  {
    q: 'أعرب "الصادقُ" في الجملة: إنما الصادقُ محبوبٌ.\nParse الصادقُ in the sentence: إنما الصادقُ محبوبٌ ("Only the honest person is loved").',
    options: [
      'مبتدأ مرفوع؛ لأن "ما" في "إنما" هي "ما الكافة" التي منعت "إنّ" من العمل (النصب)\nSubject (مبتدأ), nominative (مرفوع); because the ما in إنما is ما الكافة, which blocked إنّ from its normal effect (making things accusative)',
      'اسم إنّ منصوب\nThe اسم of إنّ, accusative (منصوب)',
      'خبر إنّ مرفوع\nThe خبر of إنّ, nominative (مرفوع)',
      'مفعول به منصوب\nDirect object (مفعول به), accusative (منصوب)',
    ],
    correctIndex: 0,
    a: '"ما" في "إنما" هي "ما الكافة" التي تكفّ "إنّ" عن عملها النحوي، فتبقى الجملة اسمية عادية: "الصادقُ" مبتدأ مرفوع و"محبوبٌ" خبره؛ وتفيد "إنما" معنى الحصر (only/just).\nThe ما in إنما is ما الكافة, which blocks إنّ from its usual grammatical effect, so the sentence stays an ordinary nominal one: الصادقُ is the subject (مبتدأ), nominative, and محبوبٌ is its predicate (خبر); إنما conveys restriction — "only/just."',
  },
  {
    q: 'أيّ الجمل التالية بها خطأ في استخدام "إنما"؟\nWhich of the following sentences has an error in its use of إنما?',
    options: [
      'إنما العلمُ نورٌ\ninnamā l-ʿilmu nūrun — "Knowledge is only light"',
      'إنما الصدقُ منجاةٌ\ninnamā ṣ-ṣidqu manjātun — "Honesty is only a means of salvation"',
      'إنما العلمَ نورٌ\ninnamā l-ʿilma nūrun',
      'إنما الكذبُ رذيلةٌ\ninnamā l-kadhibu radhīlatun — "Lying is only a vice"',
    ],
    correctIndex: 2,
    a: 'الجملة الثالثة خطأ لأن "ما" الكافة في "إنما" تمنع "إنّ" من العمل، فيجب أن يبقى الاسم بعدها مرفوعاً كمبتدإ: الصواب "إنما العلمُ نورٌ" لا "إنما العلمَ نورٌ".\nThe third sentence is wrong because the ما الكافة in إنما blocks إنّ from its effect, so the noun after it must stay nominative as a subject (مبتدأ): the correct form is إنما العلمُ نورٌ, not إنما العلمَ نورٌ.',
  },
  {
    q: 'ذهبتُ إلى المكتبةِ ___ دراسةً جادةً (أدرس، بلام التعليل الناصبة للمضارع، بمعنى "لكي أدرس")\ndhahabtu ilā l-maktabati ___ dirāsatan jāddatan — "I went to the library in order to study seriously" (fill in أدرس with the accusative-marking لام التعليل)',
    options: [
      'لأدرسَ\nli-adrusa — accusative (منصوب), correct with لام التعليل',
      'لأدرسُ\nli-adrusu — nominative form, incorrect here',
      'لأدرسْ\nli-adrus — jussive form, incorrect here',
      'أدرسُ\nadrusu — nominative, with no لام at all',
    ],
    correctIndex: 0,
    a: 'لام التعليل تدخل على المضارع فتنصبه بفتحة ظاهرة (فعل سالم): "لأدرسَ" — بخلاف الرفع "لأدرسُ" أو الجزم "لأدرسْ" وكلاهما خطأ هنا.\nلام التعليل ("the لام of purpose") governs the present-tense verb and makes it accusative with a visible فتحة (a sound verb): لأدرسَ — unlike the nominative لأدرسُ or jussive لأدرسْ, both wrong here.',
  },
  {
    q: 'أيّ الجمل التالية بها خطأ في استخدام لام التعليل؟\nWhich of the following sentences has an error in its use of لام التعليل?',
    options: [
      'سافرتُ إلى الرياضِ لأتعلّمَ العربيةَ\nsāfartu ilā r-Riyāḍi li-ataʿallama l-ʿArabiyyata — "I traveled to Riyadh to learn Arabic"',
      'اجتهدَ الطالبُ ليحصلَ على الجائزةِ\nijtahada ṭ-ṭālibu li-yaḥṣula ʿalā l-jāʾizati — "The student worked hard to win the prize"',
      'قرأتُ الكتابَ لأفهمُ محتواه\nqaraʾtu l-kitāba li-afhamu muḥtawāhu',
      'ذهبَ إلى الطبيبِ ليطمئنَّ على صحته\ndhahaba ilā ṭ-ṭabībi li-yaṭmaʾinna ʿalā ṣiḥḥatihi — "He went to the doctor to reassure himself about his health"',
    ],
    correctIndex: 2,
    a: 'الجملة الثالثة خطأ لأن لام التعليل تنصب المضارع، فالصواب "لأفهمَ" لا "لأفهمُ" (وهي صيغة الرفع، وهذا يخالف عمل لام التعليل الناصبة).\nThe third sentence is wrong because لام التعليل makes the present-tense verb accusative; the correct form is لأفهمَ, not لأفهمُ (a nominative form, which contradicts the accusative-marking effect of لام التعليل).',
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
            Topic 40 of 47
          </p>
          <h1 className="font-serif tracking-[-0.02em] text-3xl font-bold text-foreground leading-tight mb-3">
            <span
              dir="rtl"
              lang="ar"
              style={{ fontFamily: "'Noto Naskh Arabic', serif" }}
              className="mr-2"
            >
              حروف أخرى
            </span>
            — Other Particles
          </h1>
          <p className="text-muted-foreground text-base max-w-xl">
            لأنّ ("because") is a sister of إنّ — it nasbs its اسم and rafas its خبر: لأنّ الطقسَ
            باردٌ. فإنّ combines the ف of a conditional's جواب with إنّ for emphasis: من يجتهدْ
            فإنّه ناجحٌ. إنما is restrictive ("only/just") — its ما is ما الكافة, which cancels
            إنّ's grammatical effect, so what follows stays مرفوع as a normal مبتدأ: إنما العلمُ
            نورٌ. لام التعليل (لِ + مضارع) nasbs the verb and means "in order to": ذهبتُ لأدرسَ.
          </p>
        </div>
      </div>
      <div className="mx-auto w-[min(720px,calc(100%-2rem))] py-8">
        <QuizCarousel items={quizItems} />
      </div>
    </main>
  )
}

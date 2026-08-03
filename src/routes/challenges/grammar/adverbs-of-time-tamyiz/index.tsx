import { createFileRoute, Link } from '@tanstack/react-router'
import { QuizCarousel } from '#/components/QuizCarousel'
import type { StrictQuizItem } from '#/routes/challenges/-quiz-types'

export const Route = createFileRoute('/challenges/grammar/adverbs-of-time-tamyiz/')({
  head: () => ({ meta: [{ title: 'Adverbs of Time & Deeper Tamyīz — Grammar — Tayseer' }] }),
  component: TopicPage,
})

const quizItems: StrictQuizItem[] = [
  {
    q: 'ما إعراب الاسم الذي يدل على وقت وقوع الفعل (كاليوم، غدًا، صباحًا) في مثل: سافرتُ صباحاً؟\nWhat case does a noun denoting the time a verb occurred (like اليوم, غدًا, صباحًا) take, as in سافرتُ صباحاً?',
    options: [
      'منصوب على الظرفية الزمانية (المفعول فيه)\nAccusative, as an adverb of time (ظرف زمان / المفعول فيه)',
      'مرفوع على الفاعلية\nNominative, as the subject (فاعل)',
      'مجرور بحرف جر محذوف وجوباً\nGenitive, governed by an obligatorily omitted preposition',
      'مبني في كل الأحوال بلا استثناء\nIndeclinable (مبني) in every case, without exception',
    ],
    correctIndex: 0,
    a: 'أسماء الزمان التي تدل على وقت وقوع الفعل تُعرب منصوبة على الظرفية الزمانية (المفعول فيه): "سافرتُ صباحاً" — صباحاً ظرف زمان منصوب.\nNouns of time that denote when a verb occurred are accusative, as an adverb of time (ظرف زمان / المفعول فيه): "سافرتُ صباحاً" — "I traveled in the morning" — صباحاً is a ظرف زمان, accusative.',
  },
  {
    q: 'أيّ الجمل التالية بها خطأ في إعراب ظرف الزمان؟\nWhich of the following sentences has an error in the case of the adverb of time?',
    options: [
      'سافرتُ صباحاً باكراً\nI traveled early in the morning',
      'سأزورُك غداً إن شاء الله\nI will visit you tomorrow, God willing',
      'سافرتُ أمسِ إلى المدينةِ\nI traveled to the city yesterday',
      'سأقابلُك اليومُ في المكتبةِ\nIncorrect: اليومُ should be accusative (اليومَ), not nominative',
    ],
    correctIndex: 3,
    a: 'الجملة الرابعة خطأ لأن "اليوم" هنا ظرف زمان يجب أن يُنصب: الصواب "سأقابلُك اليومَ في المكتبةِ" لا "اليومُ" بالرفع.\nThe fourth sentence is wrong because اليوم here is an adverb of time and must be accusative: the correct form is "سأقابلُك اليومَ في المكتبةِ", not "اليومُ" in the nominative.',
  },
  {
    q: 'ما الحالة الإعرابية الخاصة لكلمة "أمس" حين يُراد بها اليوم السابق ليومك بعينه، كما في "سافرتُ أمسِ"؟\nWhat is the special case of the word أمس ("yesterday") when it refers to the specific day right before today, as in سافرتُ أمسِ?',
    options: [
      'اسم مبني على الكسر في محل نصب على الظرفية الزمانية، بخلاف أخواتها المعربة كـ"اليوم" و"غدًا"\nIt is indeclinable (مبني), fixed on kasra, in the position of accusative as an adverb of time — unlike its declinable counterparts such as اليوم and غدًا.',
      'معرب منصوب بفتحة ظاهرة كبقية ظروف الزمان\nDeclinable, accusative with a visible فتحة, like other adverbs of time',
      'معرب مرفوع دائماً\nDeclinable, always nominative',
      'حرف جر مبني\nAn indeclinable preposition',
    ],
    correctIndex: 0,
    a: '"أمس" استثناء بين ظروف الزمان؛ فهي مبنية على الكسر (أمسِ) في محل نصب على الظرفية إذا دلت على اليوم السابق بعينه، بخلاف "اليوم" و"غدًا" و"صباحًا" التي تُعرب منصوبة بفتحة ظاهرة.\nأمس is an exception among adverbs of time: it is indeclinable, fixed on kasra (أمسِ), in the position of accusative as an adverb, when it refers to that specific preceding day — unlike اليوم, غدًا, and صباحًا, which are declinable and accusative with a visible فتحة.',
  },
  {
    q: 'طابَ زيدٌ ___ (أكمل بتمييز الجملة الذي يزيل إبهام "طاب زيدٌ": من أي جهة طاب؟)\nطابَ زيدٌ ___ (complete with the تمييز الجملة that removes the ambiguity of "طاب زيدٌ": good in what respect?)',
    options: [
      'نفساً\nnafsan — accusative تمييز (correct here)',
      'نفسٌ\nnafsun — nominative (wrong: تمييز الجملة must be accusative)',
      'نفسٍ\nnafsin — genitive (wrong case here)',
      'النفسَ\nan-nafsa — definite with أل (wrong: تمييز must be indefinite)',
    ],
    correctIndex: 0,
    a: '"نفساً" تمييز منصوب يُزيل إبهام الجملة "طاب زيدٌ" (طاب من أي جهة؟) فيوضح أن الطيب من جهة النفس؛ وهذا النوع يُسمى تمييز الجملة (أو النسبة)، وهو دائماً منصوب.\nنفساً is an accusative تمييز that removes the ambiguity of the sentence طاب زيدٌ ("good in what respect?"), clarifying that the goodness is in respect to the نفس ("character"). This type is called تمييز الجملة (or النسبة), and it is always accusative.',
  },
  {
    q: 'في تركيب "عندي كيلو تمرٍ"، ما إعراب كلمة "تمرٍ"؟\nIn the phrase عندي كيلو تمرٍ, what case does تمرٍ take?',
    options: [
      'مجرور بالإضافة؛ لأن أسماء المقادير (كيل، وزن، مساحة) مثل كيلو ورطل ومتر تُضاف إلى تمييزها فيكون مجروراً، ويجوز أيضاً نصبه إن لم تُقصد الإضافة: "اشتريتُ كيلو تمراً"\nGenitive, as مضاف إليه; nouns of measure (weight, mass, area) like كيلو, رطل, and متر form an idāfah with their تمييز, which is then مجرور. It\'s also valid to make it accusative if idāfah isn\'t intended: "اشتريتُ كيلو تمراً" — "I bought a kilo of dates."',
      'منصوب دائماً على التمييز ولا يجوز فيه غير ذلك\nAlways accusative as تمييز, with no other option allowed',
      'مرفوع على أنه بدل من "كيلو"\nNominative, as a substitute (بدل) for كيلو',
      'لا محل له من الإعراب\nIt has no grammatical position at all',
    ],
    correctIndex: 0,
    a: 'بعد أسماء المقادير كالكيل والوزن والمساحة (كيلو، رطل، متر...)، يجوز إضافتها إلى تمييزها فيكون مجروراً بالإضافة كما في "كيلو تمرٍ"، ويجوز أيضاً الفصل بينهما ونصب التمييز: "اشتريتُ كيلو تمراً" — بخلاف تمييز العدد الذي يلزم النصب.\nAfter nouns of measure like weight, mass, or area (كيلو, رطل, متر...), it is valid to form an idāfah with their تمييز, which is then مجرور, as in "كيلو تمرٍ". It is also valid to separate them and make the تمييز accusative: "اشتريتُ كيلو تمراً" — unlike the تمييز of numbers, which must always be accusative.',
  },
  {
    q: 'عندي رطلُ ___ (أكمل بتمييز الذات المجرور بالإضافة إلى اسم المقدار "رطل")\nعندي رطلُ ___ (complete with the تمييز الذات, مجرور as مضاف إليه to the measure noun رطل)',
    options: [
      'عسلٍ\nʿasalin — indefinite genitive (correct here, as مضاف إليه)',
      'عسلاً\nʿasalan — accusative (wrong here: رطل is مضاف, so its تمييز should be مجرور)',
      'عسلٌ\nʿasalun — nominative (wrong case here)',
      'العسلِ\nal-ʿasali — definite with أل (wrong: تمييز must be indefinite)',
    ],
    correctIndex: 0,
    a: 'بما أن "رطل" جاءت مضافة (بلا تنوين)، فإن تمييزها بعدها يكون مضافاً إليه مجروراً: "رطلُ عسلٍ" — وهذا تمييز الذات المجرور بالإضافة بعد أسماء المقادير.\nSince رطل appears as a مضاف (without تنوين), the تمييز after it is a مضاف إليه and مجرور: "رطلُ عسلٍ" — "a pound of honey." This is تمييز الذات, مجرور via idāfah after a noun of measure.',
  },
  {
    q: 'أيّ الجمل التالية بها خطأ في نصب تمييز الجملة (النسبة)؟\nWhich of the following sentences has an error in making تمييز الجملة (النسبة) accusative?',
    options: [
      'طابَ الجوُّ نسيماً\nThe weather turned pleasant, breeze-wise',
      'امتلأ الإناءُ ماءً\nThe vessel filled up with water',
      'تصبّبَ زيدٌ عرقاً\nZayd was dripping with sweat',
      'طابَ زيدٌ نفسٌ\nIncorrect: نفسٌ should be accusative (نفساً), not nominative',
    ],
    correctIndex: 3,
    a: 'الجملة الرابعة خطأ لأن تمييز الجملة (تمييز النسبة) يجب أن يكون منصوباً دائماً لإزالة إبهام الجملة: الصواب "طابَ زيدٌ نفساً" لا "نفسٌ" بالرفع.\nThe fourth sentence is wrong because تمييز الجملة (تمييز النسبة) must always be accusative to remove the sentence\'s ambiguity: the correct form is "طابَ زيدٌ نفساً", not "نفسٌ" in the nominative.',
  },
  {
    q: 'في الجملة "اشتريتُ اليومَ كيلو سكرٍ"، ما نوع كل من "اليومَ" و"سكرٍ"؟\nIn the sentence اشتريتُ اليومَ كيلو سكرٍ, what is the grammatical role of each of اليومَ and سكرٍ?',
    options: [
      '"اليومَ" ظرف زمان منصوب، و"سكرٍ" تمييز ذات مجرور بالإضافة\nاليومَ is a ظرف زمان, accusative; and سكرٍ is a تمييز ذات, مجرور as مضاف إليه.',
      'كلاهما ظرف زمان\nBoth are adverbs of time',
      'كلاهما تمييز منصوب\nBoth are accusative تمييز',
      '"اليومَ" تمييز و"سكرٍ" ظرف زمان\nاليومَ is تمييز and سكرٍ is a ظرف زمان',
    ],
    correctIndex: 0,
    a: '"اليومَ" ظرف زمان منصوب يبيّن وقت الشراء، و"سكرٍ" تمييز ذات مجرور بالإضافة إلى "كيلو" اسم المقدار — كل منهما يزيل إبهاماً لكن من نوع مختلف.\nاليومَ is a ظرف زمان, accusative, indicating when the purchase happened, and سكرٍ is a تمييز ذات, مجرور as مضاف إليه to the measure noun كيلو — each removes a different kind of ambiguity.',
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
            Topic 46 of 47
          </p>
          <h1 className="font-serif tracking-[-0.02em] text-3xl font-bold text-foreground leading-tight mb-3">
            <span
              dir="rtl"
              lang="ar"
              style={{ fontFamily: "'Noto Naskh Arabic', serif" }}
              className="mr-2"
            >
              ظرف الزمان والتمييز
            </span>
            — Adverbs of Time & Deeper Tamyīz
          </h1>
          <p className="text-muted-foreground text-base max-w-xl">
            ظرف زمان (اليوم، الآن، أمس، غدًا، صباحًا) marks the time a verb happened and is
            منصوب — سافرتُ صباحاً — except أمس, which stays مبني على الكسر. Beyond numbers,
            تمييز also resolves ambiguity two other ways: تمييز الجملة is an indefinite singular
            منصوب noun clarifying an otherwise-vague sentence (طاب زيدٌ نفساً), while تمييز الذات
            after a unit of measure (كيلو، رطل، متر) is normally مجرور بالإضافة (كيلو تمرٍ),
            though نصب is also valid when it isn't phrased as an إضافة.
          </p>
        </div>
      </div>
      <div className="mx-auto w-[min(720px,calc(100%-2rem))] py-8">
        <QuizCarousel items={quizItems} />
      </div>
    </main>
  )
}

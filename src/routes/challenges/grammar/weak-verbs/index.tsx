import { createFileRoute, Link } from '@tanstack/react-router'
import { QuizCarousel } from '#/components/QuizCarousel'
import type { StrictQuizItem } from '#/routes/challenges/-quiz-types'

export const Route = createFileRoute('/challenges/grammar/weak-verbs/')({
  head: () => ({ meta: [{ title: 'Weak Verbs in Practice — Grammar — Tayseer' }] }),
  component: TopicPage,
})

const quizItems: StrictQuizItem[] = [
  {
    q: 'ما هو الفعل الأجوف (المعتل الأوسط)؟\nWhat is a hollow verb (فعل أجوف, weak in the middle)?',
    options: [
      'فعل حرفه الأوسط (عين الفعل) حرف علة، و أو ي، مثل "قال" (أصلها ق-و-ل)\nA verb whose middle letter (عين الفعل) is a weak letter, و or ي, like قال (root ق-و-ل)',
      'فعل أوله همزة\nA verb that begins with a hamza',
      'فعل آخره حرف علة\nA verb whose final letter is a weak letter',
      'فعل مضعف الحروف\nA verb with a doubled root letter',
    ],
    correctIndex: 0,
    a: 'الفعل الأجوف هو ما كان حرفه الأوسط (عين الفعل) حرف علة، واواً أو ياءً، مثل "قالَ" (أصلها ق-و-ل) و"باعَ" (أصلها ب-ي-ع)، وتتحول عينه إلى ألف في الماضي.\nA hollow verb (أجوف) has a weak letter — و or ي — as its middle radical, like قالَ (root ق-و-ل) and باعَ (root ب-ي-ع); that middle radical turns into ا in the past tense.',
  },
  {
    q: 'أكمل: أنا ___ الحقيقةَ (تصريف "قال" مع ضمير المتكلم، حيث يُحذف حرف العلة)\nComplete: أنا ___ الحقيقةَ (conjugating قال with the 1st person pronoun, where the weak letter is dropped)',
    options: [
      'قَالْتُ\nqāltu (as written',
      'قُلْتُ\nqultu — I said',
      'قَوَلْتُ\nqawaltu (as written',
      'أَقُولُ\naqūlu — I say (present tense, not past)',
    ],
    correctIndex: 1,
    a: 'عند اتصال الفعل الأجوف "قال" بضمير رفع متحرك مثل "تُ"، يُحذف حرف العلة (أصله واو) وتُنقل حركته إلى ما قبله: "قُلْتُ" لا "قَالْتُ".\nWhen the hollow verb قال is attached to a vocalic subject suffix like تُ, the weak letter (originally و) is dropped and its vowel shifts onto the letter before it: قُلْتُ, not قَالْتُ.',
  },
  {
    q: 'ما هو الفعل المهموز الفاء (مثل أخذ وأكل) وماذا يحدث لهمزته في فعل الأمر؟\nWhat is a hamza-initial verb (فاء الفعل مهموزة, like أخذ and أكل), and what happens to its hamza in the imperative?',
    options: [
      'تبقى الهمزة كما هي دائماً\nThe hamza always stays as it is',
      'تُحذف الهمزة الأولى كلياً في صيغة الأمر سماعاً، مثل "خُذْ" و"كُلْ"\nThe initial hamza is dropped entirely in the imperative, by convention, as in خُذْ and كُلْ',
      'تتحول الهمزة إلى ياء في الأمر\nThe hamza turns into a ياء in the imperative',
      'تتحول الهمزة إلى واو في الأمر\nThe hamza turns into a واو in the imperative',
    ],
    correctIndex: 1,
    a: 'الفعل المهموز الفاء مثل "أخذ" و"أكل" تُحذف همزته الأولى كلياً في صيغة الأمر سماعاً: "خُذْ" (من أخذ) و"كُلْ" (من أكل)، لا "اُوخُذْ" أو "اُوكُلْ".\nHamza-initial verbs like أخذ and أكل drop their initial hamza entirely in the imperative, by convention: خُذْ (from أخذ) and كُلْ (from أكل) — not اُوخُذْ or اُوكُلْ.',
  },
  {
    q: 'ما فعل الأمر الصحيح من "أخذ" مخاطباً مفرداً؟\nWhat is the correct imperative of أخذ, addressing a single person?',
    options: [
      'اؤخُذْ\nu\'khudh (as written',
      'أُخُذْ\nukhudh (as written',
      'خُذْ\nkhudh — take!',
      'آخُذْ\nākhudh (as written',
    ],
    correctIndex: 2,
    a: 'فعل الأمر من "أخذ" هو "خُذْ" بحذف الهمزة الأصلية كلياً، وهذا حذف سماعي خاص بهذا النوع من الأفعال المهموزة الفاء.\nThe imperative of أخذ is خُذْ, with the original hamza dropped entirely — an irregular, convention-based deletion specific to this class of hamza-initial verbs.',
  },
  {
    q: '"أرادَ" — إلى أي وزن صرفي تنتمي، وما نوعها من حيث العلة؟\nأرادَ — which morphological pattern does it belong to, and what kind of weak verb is it?',
    options: [
      'فعل صحيح سالم من وزن "فَعَلَ"\nA sound verb of the pattern فَعَلَ',
      'فعل أجوف من وزن "أَفْعَلَ" (أصلها ر-و-د)، مضارعها "يُريدُ"\nA hollow verb of the pattern أَفْعَلَ (root ر-و-د), whose present tense is يُريدُ',
      'فعل مهموز اللام\nA verb with a hamza as its final radical',
      'فعل ناقص من وزن "فاعَلَ"\nA defective (ناقص) verb of the pattern فاعَلَ',
    ],
    correctIndex: 1,
    a: '"أرادَ" فعل أجوف على وزن "أَفْعَلَ"، أصله الثلاثي ر-و-د، وحرف العلة (الواو) يتحول إلى ياء في المضارع: "يُريدُ" — من الأفعال الأجوفة الشائعة في التعبير عن الرغبة.\nأرادَ is a hollow verb on the pattern أَفْعَلَ, from the three-letter root ر-و-د; its weak letter (و) shifts to ي in the present tense: يُريدُ — one of the common hollow verbs used to express wanting.',
  },
  {
    q: 'ما هو الفعل المضعف (كـ"ظنّ")، ولماذا كُتب بحرف واحد مشدد؟\nWhat is a doubled verb (المضعف, like ظنّ), and why is it written with a single geminated letter?',
    options: [
      'فعل عينه ولامه من جنس واحد (ن-ن) فأُدغمتا في حرف واحد مشدد: أصله ظ-ن-ن\nA verb whose 2nd and 3rd radicals are identical (ن-ن), merged into one geminated letter: its root is ظ-ن-ن',
      'فعل أوله وآخره حرفا علة\nA verb whose first and last letters are both weak letters',
      'فعل حُذف أحد أحرفه الثلاثة\nA verb that has lost one of its three root letters',
      'فعل زيد عليه حرف من حروف الزيادة العشرة\nA verb that has had one of the ten augment letters added to it',
    ],
    correctIndex: 0,
    a: 'الفعل المضعف عينه ولامه من جنس واحد، فيُدغم الحرفان المتماثلان في حرف واحد مشدد: "ظَنَّ" أصلها ظ-ن-ن، أُدغمت النونان في نون واحدة مشددة.\nIn a doubled verb the 2nd and 3rd radicals are identical, so the two matching letters merge into one geminated letter: ظَنَّ has the root ظ-ن-ن, with the two نs merging into a single doubled نّ.',
  },
  {
    q: 'ماذا يفعل الفعل "ظنّ" (من أخوات ظنّ) بالجملة الاسمية التي يدخل عليها؟\nWhat does the verb ظنّ (one of أخوات ظنّ) do to the nominal sentence it enters?',
    options: [
      'يرفع المبتدأ والخبر معاً كما هما\nIt keeps both المبتدأ and الخبر مرفوع, unchanged',
      'ينصب المبتدأ والخبر معاً فيصبحان مفعولين به، أولاً وثانياً\nIt makes both المبتدأ and الخبر منصوب, turning them into a first and second object',
      'يجر المبتدأ ويرفع الخبر\nIt makes المبتدأ مجرور and keeps الخبر مرفوع',
      'لا تأثير له على إعراب الجملة الاسمية\nIt has no effect on the case of the nominal sentence',
    ],
    correctIndex: 1,
    a: '"ظنّ" وأخواتها (من أفعال القلوب) تدخل على الجملة الاسمية فتنصب طرفيها معاً: المبتدأ يصبح مفعولاً به أول، والخبر يصبح مفعولاً به ثانياً، مثل "ظننتُ الجوَّ جميلاً" (الأصل: الجوُّ جميلٌ).\nظنّ and its sisters (from أفعال القلوب, "verbs of the heart") enter a nominal sentence and make منصوب both of its parts: المبتدأ becomes the first object and الخبر becomes the second object, as in ظننتُ الجوَّ جميلاً ("I thought the weather [was] beautiful," originally الجوُّ جميلٌ).',
  },
  {
    q: 'أكمل: ظننتُ الامتحانَ ___ (سهلاً، مفعول به ثانٍ منصوب)\nComplete: ظننتُ الامتحانَ ___ (سهلاً, the accusative second object)',
    options: [
      'سهلٌ\nsahlun (nominative',
      'سهلاً\nsahlan (accusative',
      'سهلٍ\nsahlin (genitive',
      'سهلُ\nsahlu (no tanwīn',
    ],
    correctIndex: 1,
    a: 'المفعول به الثاني لـ"ظنّ" (وهو خبر الجملة الاسمية أصلاً) يكون منصوباً: "ظننتُ الامتحانَ سهلاً" — كلا المفعولين (الامتحانَ وسهلاً) منصوبان.\nThe second object of ظنّ (originally the خبر of the nominal sentence) is منصوب: ظننتُ الامتحانَ سهلاً ("I thought the exam [was] easy") — both objects, الامتحانَ and سهلاً, are منصوب.',
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
            Topic 33 of 62
          </p>
          <h1 className="font-serif tracking-[-0.02em] text-3xl font-bold text-foreground leading-tight mb-3">
            <span
              dir="rtl"
              lang="ar"
              style={{ fontFamily: "'Noto Naskh Arabic', serif" }}
              className="mr-2"
            >
              الأفعال المعتلة
            </span>
            — Weak Verbs in Practice
          </h1>
          <p className="text-muted-foreground text-base max-w-xl">
            Weak verbs bend the rules. Hollow verbs (<bdi lang="ar">أجوف</bdi>) like <bdi lang="ar">قَالَ/كَادَ</bdi> turn a middle <bdi lang="ar">و/ي</bdi> into
            <bdi lang="ar">ا</bdi> in <bdi lang="ar">الماضي</bdi> and drop it in some conjugations (<bdi lang="ar">قُلْتُ</bdi>). Hamzated verbs like
            <bdi lang="ar">أَخَذَ/أَكَلَ</bdi> drop their first radical <bdi lang="ar">ء</bdi> entirely in the imperative (<bdi lang="ar">خُذْ، كُلْ</bdi>).
            <bdi lang="ar">أَرَادَ</bdi> is a hollow <bdi lang="ar">أفعل</bdi>-form verb, while <bdi lang="ar">ظَنَّ</bdi> is a doubled-root verb from the <bdi lang="ar">أخوات
            ظنّ</bdi> family that enters a nominal sentence and makes both <bdi lang="ar">مبتدأ</bdi> and <bdi lang="ar">خبر منصوب</bdi>.
          </p>
        </div>
      </div>
      <div className="mx-auto w-[min(720px,calc(100%-2rem))] py-8">
        <QuizCarousel items={quizItems} />
      </div>
    </main>
  )
}

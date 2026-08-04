import { createFileRoute, Link } from '@tanstack/react-router'
import { QuizCarousel } from '#/components/QuizCarousel'
import type { StrictQuizItem } from '#/routes/challenges/-quiz-types'

export const Route = createFileRoute('/challenges/grammar/assimilated-verbs/')({
  head: () => ({ meta: [{ title: 'Assimilated Verbs — Grammar — Tayseer' }] }),
  component: TopicPage,
})

const quizItems: StrictQuizItem[] = [
  {
    q: 'ما هو الفعل المثال؟\nWhat is a الفعل المثال (assimilated verb)?',
    options: [
      'فعل حرفه الأول حرف علة (و أو ي)\nA verb whose first root letter is a weak letter (و or ي)',
      'فعل حرفه الأوسط حرف علة\nA verb whose middle root letter is weak',
      'فعل حرفه الأخير حرف علة\nA verb whose final root letter is weak',
      'فعل عينه ولامه من جنس واحد\nA verb whose 2nd and 3rd radicals are identical',
    ],
    correctIndex: 0,
    a: 'الفعل المثال هو ما كان حرفه الأول (فاء الفعل) حرف علة، و أو ي، مثل "وَجَدَ" و"وَصَلَ" و"وَقَفَ".\nA الفعل المثال has a weak letter — و or ي — as its FIRST root letter (فاء الفعل), like وَجَدَ, وَصَلَ, and وَقَفَ. This distinguishes it from hollow verbs (weak middle letter) and defective verbs (weak final letter).',
  },
  {
    q: 'حوّل الفعل "وَجَدَ" (ماضٍ) إلى المضارع.\nTransform the verb وَجَدَ (past tense) into the present tense.',
    options: [
      'يَوْجِدُ\nyawjidu (as written)',
      'يَجِدُ\nyajidu — he finds',
      'يُوجَدُ\nyūjadu (as written)',
      'وَاجِدٌ\nwājidun (as written)',
    ],
    correctIndex: 1,
    a: 'الفعل المثال الواوي يحذف واوه في المضارع إذا كانت عين الفعل مكسورة: وَجَدَ ← يَجِدُ، لا يَوْجِدُ.\nA و-initial assimilated verb drops its و in the present tense when the middle radical takes kasra: وَجَدَ becomes يَجِدُ, never يَوْجِدُ. The و disappears because it falls between the مضارعة ي and a kasra — a position it cannot survive in.',
  },
  {
    q: 'كوّن فعل الأمر (للمخاطب المفرد) من "وَجَدَ".\nForm the imperative (2nd person masculine singular) of وَجَدَ.',
    options: [
      'اِوْجِدْ\ni-w-jid (as written)',
      'وَجِدْ\nwajid (as written)',
      'جِدْ\njid — find!',
      'يَجِدْ\nyajid (as written)',
    ],
    correctIndex: 2,
    a: 'فعل الأمر من المثال الواوي يُبنى من المضارع المجزوم بحذف حرف المضارعة، فإذا كانت الواو ساقطة أصلاً من "يَجِدْ"، بقي حرف واحد ساكن يكفي وحده: جِدْ.\nThe imperative of a و-assimilated verb is formed by dropping the مضارعة prefix from the jussive مضارع. Since the و is already gone from يَجِدْ, only جِدْ remains — a single consonant is enough to stand as its own imperative, with no helping hamza needed.',
  },
  {
    q: 'أكمل: هو ___ الحلَّ بسرعة. (فعل مضارع من "وجد")\nComplete: هو ___ الحلَّ بسرعة — "He finds the solution quickly" (present tense of وجد)',
    options: [
      'يَجِدُ\nyajidu — he finds',
      'يَوْجِدُ\nyawjidu (as written)',
      'وَجَدَ\nwajada — he found (past tense)',
      'يُوجَدُ\nyūjadu — it is found (passive)',
    ],
    correctIndex: 0,
    a: 'المضارع الصحيح من "وجد" هو "يَجِدُ" بحذف الواو، وهو المطلوب هنا لأن الجملة تصف عادة حاضرة لا فعلاً ماضياً ولا مبنياً للمجهول.\nThe correct present tense of وجد is يَجِدُ, with the و dropped — needed here since the sentence describes a present habit, not a past action or a passive event.',
  },
  {
    q: 'أيّ جملة فيها خطأ في تصريف الفعل المثال؟\nWhich sentence contains an error in conjugating an assimilated verb?',
    options: [
      'الطالبُ يَجِدُ الكتابَ\naṭ-ṭālibu yajidu l-kitāba — "The student finds the book"',
      'الطالبُ يَوجِدُ الكتابَ\naṭ-ṭālibu yawjidu l-kitāba (as written)',
      'وَجَدَ الطالبُ الكتابَ\nwajada ṭ-ṭālibu l-kitāba — "The student found the book"',
      'جِدِ الكتابَ يا طالبُ!\njidi l-kitāba yā ṭālibu — "Find the book, student!"',
    ],
    correctIndex: 1,
    a: '"يَوجِدُ" خطأ لأن الفعل المثال الواوي يحذف واوه في المضارع: الصواب "يَجِدُ" لا "يَوجِدُ".\nيَوجِدُ is wrong because a و-initial assimilated verb drops its و in the present tense: the correct form is يَجِدُ, never يَوجِدُ. The other three sentences are correctly conjugated.',
  },
  {
    q: 'ما هو تصريف الفعل "وجد" في المضارع مع ضمير الجماعة "هم"؟\nWhat is the present-tense conjugation of وجد with the pronoun هم (they, masculine)?',
    options: [
      'يَجِدُونَ\nyajidūna — they find',
      'يَوْجِدُونَ\nyawjidūna (as written)',
      'وَجَدُوا\nwajadū — they found (past tense)',
      'يَجِدَانِ\nyajidāni — they two find (dual)',
    ],
    correctIndex: 0,
    a: 'مع واو الجماعة يبقى الحذف نفسه: يَجِدُ + ونَ = يَجِدُونَ، فالواو الأصلية للفعل تبقى محذوفة في كل صيغ المضارع.\nWith the واو الجماعة suffix, the same deletion holds: يَجِدُ + ونَ gives يَجِدُونَ. The verb\'s original root و stays dropped throughout every present-tense form, singular or plural.',
  },
  {
    q: 'حوّل الفعل "وَصَلَ" (ماضٍ) إلى المضارع.\nTransform the verb وَصَلَ (past tense) into the present tense.',
    options: [
      'يَوْصِلُ\nyawṣilu (as written)',
      'يَصِلُ\nyaṣilu — he arrives',
      'وَاصِلٌ\nwāṣilun (as written)',
      'يُوصَلُ\nyūṣalu (as written, passive)',
    ],
    correctIndex: 1,
    a: 'مثل "وجد"، يحذف "وصل" واوه في المضارع: وَصَلَ ← يَصِلُ، لا يَوْصِلُ.\nLike وجد, وصل drops its و in the present tense: وَصَلَ becomes يَصِلُ, not يَوْصِلُ — the same assimilated-verb rule applies across every و-initial Form I verb with a kasra middle radical.',
  },
  {
    q: 'كوّن فعل الأمر من "وَصَلَ".\nForm the imperative of وَصَلَ.',
    options: [
      'صِلْ\nṣil — arrive! / connect!',
      'اِوْصِلْ\ni-w-ṣil (as written)',
      'وَصِلْ\nwaṣil (as written)',
      'يَصِلْ\nyaṣil (as written)',
    ],
    correctIndex: 0,
    a: 'فعل الأمر يُبنى من المضارع المجزوم "يَصِلْ" بحذف حرف المضارعة، فيبقى "صِلْ" فقط — حرف واحد ساكن كافٍ.\nThe imperative is formed from the jussive مضارع يَصِلْ by dropping the مضارعة prefix, leaving just صِلْ — a single consonant is a complete imperative for this verb class, just as with جِدْ.',
  },
  {
    q: 'أعرب "يَجِدُ" في: الطالبُ يَجِدُ الحلَّ.\nParse يَجِدُ in the sentence الطالبُ يَجِدُ الحلَّ ("The student finds the solution").',
    options: [
      'فعل مضارع مرفوع وعلامة رفعه الضمة الظاهرة\nPresent-tense verb, مرفوع, marked by an overt ḍamma',
      'فعل ماضٍ مبني على الفتح\nPast-tense verb, مبني on fatḥa',
      'فعل أمر مبني على السكون\nImperative verb, مبني on sukūn',
      'اسم فاعل مرفوع\nActive participle, مرفوع',
    ],
    correctIndex: 0,
    a: 'يَجِدُ فعل مضارع، وهو هنا مرفوع لتجرده من الناصب والجازم، وعلامة رفعه الضمة الظاهرة على آخره؛ حذف الواو من أوله لا يغير كونه فعلاً مضارعاً معرباً.\nيَجِدُ is a present-tense verb. Since nothing here makes it منصوب or مجزوم, it stays مرفوع, marked by an overt ḍamma on its final letter. The missing initial و is just the assimilated-verb pattern — it does not affect the verb\'s إعراب as a fully inflected مضارع.',
  },
  {
    q: 'حوّل الفعل "وَقَفَ" (ماضٍ) إلى المضارع.\nTransform the verb وَقَفَ (past tense) into the present tense.',
    options: [
      'يَقِفُ\nyaqifu — he stands',
      'يَوْقِفُ\nyawqifu (as written)',
      'وَاقِفٌ\nwāqifun (as written)',
      'أَوْقَفَ\nawqafa (as written)',
    ],
    correctIndex: 0,
    a: 'وَقَفَ فعل مثال واوي، فتُحذف واوه في المضارع كذلك: وَقَفَ ← يَقِفُ.\nوَقَفَ is also a و-initial assimilated verb, so its و drops in the present tense the same way: وَقَفَ becomes يَقِفُ.',
  },
  {
    q: 'كوّن فعل الأمر من "وَقَفَ".\nForm the imperative of وَقَفَ.',
    options: [
      'قِفْ\nqif — stand!',
      'اِوْقِفْ\ni-w-qif (as written)',
      'وَقِفْ\nwaqif (as written)',
      'يَقِفْ\nyaqif (as written)',
    ],
    correctIndex: 0,
    a: 'من المضارع المجزوم "يَقِفْ" تُحذف ياء المضارعة فيبقى "قِفْ" فعل أمر من حرف واحد ساكن، كما في جِدْ وصِلْ.\nFrom the jussive مضارع يَقِفْ, dropping the مضارعة prefix leaves قِفْ — a one-consonant imperative, exactly the pattern seen in جِدْ and صِلْ.',
  },
  {
    q: 'أكمل الأمر: ___ هنا يا أحمد! (فعل أمر من "وقف")\nComplete the command: ___ هنا يا أحمد — "Stand here, Ahmad!" (imperative of وقف)',
    options: [
      'قِفْ\nqif — stand!',
      'اِوْقِفْ\ni-w-qif (as written)',
      'يَقِفُ\nyaqifu — he stands (present tense)',
      'وَقَفَ\nwaqafa — he stood (past tense)',
    ],
    correctIndex: 0,
    a: 'فعل الأمر من "وقف" هو "قِفْ" فقط، بلا واو في أوله وبلا همزة وصل، لأن الواو سقطت أصلاً من المضارع قبل تكوين الأمر منه.\nThe imperative of وقف is simply قِفْ — no initial و, and no همزة وصل, because the و was already gone from the مضارع before the imperative was formed from it.',
  },
  {
    q: 'أيّ فعل أمر مكتوب خطأً من الأفعال المثالة؟\nWhich imperative form of an assimilated verb below is written incorrectly?',
    options: [
      'جِدْ\njid — find! (from وجد)',
      'صِلْ\nṣil — arrive! (from وصل)',
      'اِوجِدْ\ni-w-jid (as written, from وجد)',
      'قِفْ\nqif — stand! (from وقف)',
    ],
    correctIndex: 2,
    a: '"اِوجِدْ" خطأ؛ الأمر الصحيح من "وجد" هو "جِدْ" بلا همزة وصل وبلا واو، لأن حرف العلة سقط أصلاً في المضارع قبل صياغة الأمر منه.\nاِوجِدْ is wrong. The correct imperative of وجد is جِدْ, with no همزة وصل and no و — the weak letter was already gone from the مضارع before the imperative was derived from it, so it never needed a helping hamza to begin with a consonant cluster.',
  },
  {
    q: 'ما تصريف "وصل" في المضارع مع ضمير المخاطبة "أنتِ"؟\nWhat is the present-tense conjugation of وصل with the pronoun أنتِ (you, feminine singular)?',
    options: [
      'تَصِلِينَ\ntaṣilīna — you (f.) arrive',
      'تَوْصِلِينَ\ntawṣilīna (as written)',
      'يَصِلُ\nyaṣilu — he arrives',
      'وَصَلْتِ\nwaṣalti — you (f.) arrived (past tense)',
    ],
    correctIndex: 0,
    a: 'مع ياء المخاطبة يبقى حذف الواو كما هو: تَصِلُ + ينَ = تَصِلِينَ، فالحذف ثابت في كل صيغ المضارع لا في صيغة واحدة فقط.\nWith the ياء المخاطبة suffix, the و stays dropped just as before: تَصِلُ + ينَ gives تَصِلِينَ. The deletion is constant across every present-tense form, not limited to a single conjugation cell.',
  },
  {
    q: 'حوّل الفعل "وَعَدَ" (ماضٍ) إلى المضارع.\nTransform the verb وَعَدَ (past tense, "promised") into the present tense.',
    options: [
      'يَعِدُ\nyaʿidu — he promises',
      'يَوْعِدُ\nyawʿidu (as written)',
      'وَاعِدٌ\nwāʿidun (as written)',
      'وَعَدَ\nwaʿada — he promised (past tense, unchanged)',
    ],
    correctIndex: 0,
    a: 'وَعَدَ فعل مثال واوي آخر يتبع القاعدة نفسها: تُحذف الواو في المضارع، فيكون "يَعِدُ" لا "يَوْعِدُ".\nوَعَدَ is another و-initial assimilated verb following the same rule: the و drops in the present tense, giving يَعِدُ, never يَوْعِدُ.',
  },
  {
    q: 'كوّن فعل الأمر من "وَعَدَ".\nForm the imperative of وَعَدَ.',
    options: [
      'عِدْ\nʿid — promise!',
      'اِوْعِدْ\ni-w-ʿid (as written)',
      'وَعِدْ\nwaʿid (as written)',
      'يَعِدْ\nyaʿid (as written)',
    ],
    correctIndex: 0,
    a: 'مثل جِدْ وصِلْ وقِفْ، يُبنى الأمر من "يَعِدْ" بحذف حرف المضارعة، فيبقى "عِدْ" وحده.\nJust like جِدْ, صِلْ, and قِفْ, the imperative is built from يَعِدْ by dropping the مضارعة prefix, leaving عِدْ on its own.',
  },
  {
    q: 'أعرب "جِدْ" في: جِدِ الحلَّ يا طالبُ!\nParse جِدْ in the sentence جِدِ الحلَّ يا طالبُ ("Find the solution, student!").',
    options: [
      'فعل أمر مبني على السكون\nImperative verb, مبني on sukūn',
      'فعل مضارع مرفوع\nPresent-tense verb, مرفوع',
      'فعل ماضٍ مبني على الفتح\nPast-tense verb, مبني on fatḥa',
      'اسم فعل أمر\nA noun standing in for an imperative verb (اسم فعل)',
    ],
    correctIndex: 0,
    a: 'أفعال الأمر كلها مبنية، والأمر الصحيح الآخر مثل جِدْ يُبنى على السكون؛ فاعله ضمير مستتر تقديره أنتَ.\nImperative verbs are always مبني. For an imperative with a plain consonant ending, like جِدْ, the بناء is on sukūn. Its فاعل is a hidden pronoun أنتَ ("you").',
  },
  {
    q: 'حوّل الفعل "وَضَعَ" (ماضٍ) إلى المضارع.\nTransform the verb وَضَعَ (past tense, "put/placed") into the present tense.',
    options: [
      'يَضَعُ\nyaḍaʿu — he puts',
      'يَوْضَعُ\nyawḍaʿu (as written)',
      'وَاضِعٌ\nwāḍiʿun (as written)',
      'يُوضَعُ\nyūḍaʿu — it is put (passive)',
    ],
    correctIndex: 0,
    a: 'وَضَعَ مثال واوي أيضاً: تُحذف واوه في المضارع فيكون "يَضَعُ" (بفتحة على عين الفعل لأنها حرف حلقي)، لا "يَوْضَعُ".\nوَضَعَ is also و-initial: its و drops in the present, giving يَضَعُ (with a fatḥa on the middle radical because ع is a guttural letter) — never يَوْضَعُ.',
  },
  {
    q: 'أكمل: نحن ___ الحقيقةَ دائماً. (مضارع من "وجد")\nComplete: نحن ___ الحقيقةَ دائماً — "We always find the truth" (present tense of وجد)',
    options: [
      'نَجِدُ\nnajidu — we find',
      'نَوْجِدُ\nnawjidu (as written)',
      'وَجَدْنَا\nwajadnā — we found (past tense)',
      'يَجِدُ\nyajidu — he finds',
    ],
    correctIndex: 0,
    a: 'مع ضمير المتكلمين "نحن" يبقى حذف الواو: نَجِدُ لا نَوْجِدُ، والحذف يشمل جميع ضمائر المضارع لا ضميراً بعينه.\nWith the "we" subject, the و still drops: نَجِدُ, not نَوْجِدُ. The deletion applies across every subject pronoun in the present tense, not to one pronoun alone.',
  },
  {
    q: 'أيّ فعل مما يلي ليس فعلاً مثالاً؟\nWhich of the following verbs is NOT an assimilated verb (فعل مثال)?',
    options: [
      'وَجَدَ\nwajada — he found',
      'وَصَلَ\nwaṣala — he arrived',
      'كَتَبَ\nkataba — he wrote',
      'وَقَفَ\nwaqafa — he stood',
    ],
    correctIndex: 2,
    a: '"كَتَبَ" فعل صحيح سالم؛ أحرفه الثلاثة (ك-ت-ب) كلها صحيحة لا حرف علة فيها. أما وَجَدَ ووَصَلَ ووَقَفَ فحرفها الأول واو، فهي أفعال مثالة.\nكَتَبَ is a sound verb (صحيح سالم) — all three of its root letters (ك-ت-ب) are strong consonants, with no weak letter anywhere. وَجَدَ, وَصَلَ, and وَقَفَ, by contrast, each begin with و as their first radical, making them assimilated verbs.',
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
            Topic 48 of 62
          </p>
          <h1 className="font-serif tracking-[-0.02em] text-3xl font-bold text-foreground leading-tight mb-3">
            <span
              dir="rtl"
              lang="ar"
              style={{ fontFamily: "'Noto Naskh Arabic', serif" }}
              className="mr-2"
            >
              الفعل المثال
            </span>
            — Assimilated Verbs
          </h1>
          <p className="text-muted-foreground text-base max-w-xl">
            A <bdi lang="ar">الفعل المثال</bdi> has <bdi lang="ar">و</bdi> or <bdi lang="ar">ي</bdi> as its first root letter. When that
            letter is <bdi lang="ar">و</bdi>, it vanishes in the <bdi lang="ar">مضارع</bdi>: <bdi lang="ar">وَجَدَ</bdi> becomes{' '}
            <span className="font-medium text-foreground"><bdi lang="ar">يَجِدُ</bdi></span>, never <bdi lang="ar">يَوجِد</bdi>, and the
            imperative collapses to a single consonant, <bdi lang="ar">جِدْ</bdi>. The same pattern governs{' '}
            <bdi lang="ar">وَصَلَ</bdi> (<bdi lang="ar">يَصِلُ، صِلْ</bdi>) and <bdi lang="ar">وَقَفَ</bdi> (<bdi lang="ar">يَقِفُ، قِفْ</bdi>).
          </p>
        </div>
      </div>
      <div className="mx-auto w-[min(720px,calc(100%-2rem))] py-8">
        <QuizCarousel items={quizItems} />
      </div>
    </main>
  )
}

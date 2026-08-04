import { createFileRoute, Link } from '@tanstack/react-router'
import { QuizCarousel } from '#/components/QuizCarousel'
import type { StrictQuizItem } from '#/routes/challenges/-quiz-types'

export const Route = createFileRoute('/challenges/grammar/defective-verbs/')({
  head: () => ({ meta: [{ title: 'Defective Verbs — Grammar — Tayseer' }] }),
  component: TopicPage,
})

const quizItems: StrictQuizItem[] = [
  {
    q: 'ما هو الفعل الناقص؟\nWhat is a الفعل الناقص (defective verb)?',
    options: [
      'فعل حرفه الأخير حرف علة (و أو ي)\nA verb whose final root letter is a weak letter (و or ي)',
      'فعل حرفه الأول حرف علة\nA verb whose first root letter is weak',
      'فعل حرفه الأوسط حرف علة\nA verb whose middle root letter is weak',
      'فعل عينه ولامه من جنس واحد\nA verb whose 2nd and 3rd radicals are identical',
    ],
    correctIndex: 0,
    a: 'الفعل الناقص هو ما كان حرفه الأخير (لام الفعل) حرف علة، و أو ي، مثل "دَعَا" و"مَشَى" و"نَسِيَ". يفقد هذا الحرف في بعض التصريفات، وخاصة في الأمر.\nA الفعل الناقص has its final root letter (لام الفعل) as a weak letter — و or ي — like دَعَا, مَشَى, and نَسِيَ. This weak final letter disappears in several conjugations, most dramatically in the imperative.',
  },
  {
    q: 'حوّل الفعل "دَعَا" (ماضٍ) إلى المضارع.\nTransform the verb دَعَا (past tense, "called/invoked") into the present tense.',
    options: [
      'يَدْعُو\nyadʿū — he calls',
      'يَدْعَا\nyadʿā (as written)',
      'يَدْعِي\nyadʿī (as written)',
      'دَاعٍ\ndāʿin — caller (active participle)',
    ],
    correctIndex: 0,
    a: 'دَعَا فعل ناقص واوي، أصله د-ع-و، فيظهر حرف العلة واواً تاماً في المضارع: يَدْعُو.\nدَعَا is a و-type defective verb, from the root د-ع-و; its weak letter surfaces as a full و in the present tense: يَدْعُو.',
  },
  {
    q: 'كوّن فعل الأمر من "دَعَا".\nForm the imperative of دَعَا.',
    options: [
      'اُدْعُ\nudʿu — call!/invoke!',
      'اُدْعُو\nudʿū (as written)',
      'اِدْعَ\nidʿa (as written)',
      'دْعُ\ndʿu (as written, no hamza)',
    ],
    correctIndex: 0,
    a: 'في فعل الأمر من الناقص، يسقط حرف العلة الأخير كلياً، وتبقى ضمة تدل عليه لأن أصله واو: اُدْعُ، لا اُدْعُو.\nIn the imperative of a defective verb, the final weak letter drops entirely; only the vowel that used to lead into it survives, here a ḍamma pointing to the lost و: اُدْعُ, not اُدْعُو.',
  },
  {
    q: 'أكمل: هو ___ إلى الخير دائماً. (مضارع من "دعا")\nComplete: هو ___ إلى الخير دائماً — "He always calls to good" (present tense of دعا)',
    options: [
      'يَدْعُو\nyadʿū — he calls',
      'يُدْعَى\nyudʿā — he is called (passive)',
      'دَعَا\ndaʿā — he called (past tense)',
      'اُدْعُ\nudʿu — call! (imperative)',
    ],
    correctIndex: 0,
    a: 'المضارع الصحيح من "دعا" هو "يَدْعُو" بواو تامة في آخره، وهو المطلوب هنا لوصف فعل مستمر لا ماضٍ ولا أمر ولا مبني للمجهول.\nThe correct present tense of دعا is يَدْعُو, with a full و at the end — needed here to describe an ongoing action, not a past event, a command, or a passive.',
  },
  {
    q: 'أيّ جملة فيها خطأ في تصريف الفعل الناقص؟\nWhich sentence contains an error in conjugating a defective verb?',
    options: [
      'الداعيةُ يَدْعُو إلى الخير\nad-dāʿiyatu yadʿū ilā l-khayr — "The preacher calls to good"',
      'اُدْعُ ربَّك!\nudʿu rabbaka — "Call upon your Lord!"',
      'اُدْعُو ربَّك!\nudʿū rabbaka (as written)',
      'دَعَا الرجلُ صديقَه\ndaʿā r-rajulu ṣadīqahu — "The man called his friend"',
    ],
    correctIndex: 2,
    a: '"اُدْعُو" خطأ في الأمر؛ فعل الأمر من الناقص يسقط حرف العلة الأخير كلياً، فالصواب "اُدْعُ" لا "اُدْعُو".\nاُدْعُو is wrong for the imperative; the imperative of a defective verb drops its final weak letter entirely, so the correct form is اُدْعُ, not اُدْعُو.',
  },
  {
    q: 'ما تصريف "دعا" في المضارع مع ضمير الجماعة المخاطبة "أنتم"؟\nWhat is the present-tense conjugation of دعا with the pronoun أنتم (you, masculine plural)?',
    options: [
      'تَدْعُونَ\ntadʿūna — you (pl.) call',
      'تَدْعُوونَ\ntadʿūūna (as written, double و)',
      'دَعَوْتُمْ\ndaʿawtum — you (pl.) called (past tense)',
      'يَدْعُونَ\nyadʿūna — they call',
    ],
    correctIndex: 0,
    a: 'تَدْعُو + ونَ تلتقي فيها الواوان فتُدغم إحداهما، فتصير "تَدْعُونَ" لا "تَدْعُوونَ" — من قواعد التقاء الساكنين في الأفعال الناقصة الواوية.\nتَدْعُو + ونَ brings two وs together, and they merge into one, giving تَدْعُونَ, not تَدْعُوونَ — one of the contraction rules that apply when a و-final defective verb takes a vowel-initial suffix.',
  },
  {
    q: 'حوّل الفعل "مَشَى" (ماضٍ) إلى المضارع.\nTransform the verb مَشَى (past tense, "walked") into the present tense.',
    options: [
      'يَمْشِي\nyamshī — he walks',
      'يَمْشَى\nyamshā (as written)',
      'يَمْشُو\nyamshū (as written)',
      'مَاشٍ\nmāshin — walker (active participle)',
    ],
    correctIndex: 0,
    a: 'مَشَى فعل ناقص يائي من نوع "يَفْعِلُ"، أصله م-ش-ي، فيظهر حرف العلة ياءً في المضارع: يَمْشِي.\nمَشَى is a ي-type defective verb of the يَفْعِلُ pattern, from the root م-ش-ي; its weak letter surfaces as ي in the present tense: يَمْشِي.',
  },
  {
    q: 'كوّن فعل الأمر من "مَشَى".\nForm the imperative of مَشَى.',
    options: [
      'اِمْشِ\nimshi — walk!',
      'اِمْشِي\nimshī (as written)',
      'اِمْشَ\nimsha (as written)',
      'مْشِ\nmshi (as written, no hamza)',
    ],
    correctIndex: 0,
    a: 'يسقط حرف العلة الأخير كلياً في الأمر من الناقص اليائي أيضاً، وتبقى كسرة تدل عليه: اِمْشِ، لا اِمْشِي.\nThe final weak letter drops entirely in the imperative of this ي-type defective verb too; only a kasra pointing to the lost ي remains: اِمْشِ, not اِمْشِي.',
  },
  {
    q: 'أعرب "اِمْشِ" في: اِمْشِ إلى المسجدِ بسكينةٍ.\nParse اِمْشِ in the sentence اِمْشِ إلى المسجدِ بسكينةٍ ("Walk to the mosque calmly").',
    options: [
      'فعل أمر مبني على حذف حرف العلة\nImperative verb, مبني by the deletion of its weak final letter',
      'فعل مضارع مجزوم بحذف حرف العلة\nPresent-tense verb, مجزوم by the deletion of its weak final letter',
      'فعل ماضٍ مبني على الفتح\nPast-tense verb, مبني on fatḥa',
      'اسم منقوص مرفوع\nA منقوص noun, مرفوع',
    ],
    correctIndex: 0,
    a: 'أفعال الأمر من الناقص تُبنى على حذف حرف العلة، فـ"اِمْشِ" فعل أمر مبني على حذف حرف العلة (الياء)، وفاعله ضمير مستتر تقديره أنتَ.\nThe imperative of a defective verb is مبني by the deletion of its weak letter, so اِمْشِ is مبني على حذف حرف العلة (the dropped ي), with a hidden فاعل, أنتَ.',
  },
  {
    q: 'حوّل الفعل "نَسِيَ" (ماضٍ) إلى المضارع.\nTransform the verb نَسِيَ (past tense, "forgot") into the present tense.',
    options: [
      'يَنْسَى\nyansā — he forgets',
      'يَنْسِي\nyansī (as written)',
      'يَنْسُو\nyansū (as written)',
      'نَاسٍ\nnāsin — forgetter (active participle)',
    ],
    correctIndex: 0,
    a: 'نَسِيَ فعل ناقص يائي من نوع "يَفْعَلُ"، فيظهر حرف العلة ألفاً مقصورة في المضارع: يَنْسَى — بخلاف "يَمْشِي" الذي عينه مكسورة.\nنَسِيَ is a ي-type defective verb of the يَفْعَلُ pattern; its weak letter surfaces as ى (alif maqṣūra) in the present tense: يَنْسَى — unlike يَمْشِي, whose middle radical carries kasra instead.',
  },
  {
    q: 'كوّن فعل الأمر من "نَسِيَ".\nForm the imperative of نَسِيَ.',
    options: [
      'اِنْسَ\ninsa — forget!',
      'اِنْسَى\ninsā (as written)',
      'اِنْسِ\ninsi (as written)',
      'نْسَ\nnsa (as written, no hamza)',
    ],
    correctIndex: 0,
    a: 'يسقط حرف العلة الأخير كلياً هنا أيضاً، وتبقى فتحة تدل عليه: اِنْسَ، لا اِنْسَى.\nThe final weak letter again drops entirely, leaving only a fatḥa pointing to where it used to be: اِنْسَ, not اِنْسَى.',
  },
  {
    q: 'أكمل الأمر: ___ هذا الخطأَ ولا تُعِدْه! (فعل أمر من "نسي")\nComplete the command: ___ هذا الخطأَ ولا تُعِدْه — "Forget this mistake and don\'t repeat it!" (imperative of نسي)',
    options: [
      'اِنْسَ\ninsa — forget!',
      'اِنْسَى\ninsā (as written)',
      'يَنْسَى\nyansā — he forgets (present tense)',
      'نَسِيَ\nnasiya — he forgot (past tense)',
    ],
    correctIndex: 0,
    a: 'فعل الأمر من "نسي" هو "اِنْسَ" بلا ألف مقصورة في آخره، لأن حرف العلة يسقط كلياً في صيغة الأمر من كل فعل ناقص.\nThe imperative of نسي is اِنْسَ, with no alif maqṣūra at the end — the weak final letter drops entirely in the imperative of every defective verb.',
  },
  {
    q: 'أيّ فعل أمر مكتوب خطأً من الأفعال الناقصة؟\nWhich imperative form of a defective verb below is written incorrectly?',
    options: [
      'اُدْعُ\nudʿu — call! (from دعا)',
      'اِمْشِ\nimshi — walk! (from مشى)',
      'اِنْسَى\ninsā (as written, from نسي)',
      'اِنْسَ\ninsa — forget! (from نسي)',
    ],
    correctIndex: 2,
    a: '"اِنْسَى" خطأ؛ فعل الأمر من "نسي" هو "اِنْسَ" بحذف الألف المقصورة كلياً، لأن حرف العلة الأخير يسقط دوماً في أمر الفعل الناقص.\nاِنْسَى is wrong. The imperative of نسي is اِنْسَ, with the alif maqṣūra dropped entirely — a defective verb\'s final weak letter always disappears in the imperative.',
  },
  {
    q: 'ما تصريف "مشى" في المضارع مع ضمير المخاطبة "أنتِ"؟\nWhat is the present-tense conjugation of مشى with the pronoun أنتِ (you, feminine singular)?',
    options: [
      'تَمْشِينَ\ntamshīna — you (f.) walk',
      'تَمْشِيينَ\ntamshiyīna (as written, extra ي)',
      'تَمْشَيْنَ\ntamshayna (as written)',
      'مَشَيْتِ\nmashayti — you (f.) walked (past tense)',
    ],
    correctIndex: 0,
    a: 'تَمْشِي + ينَ تلتقي فيها الياءان فتُدغم إحداهما، فتصير "تَمْشِينَ" لا "تَمْشِيينَ" — تماماً كما تدغم الواوان في "تَدْعُونَ".\nتَمْشِي + ينَ brings two ي\'s together and they merge into one, giving تَمْشِينَ, not تَمْشِيينَ — the same kind of contraction seen when the واوان merge in تَدْعُونَ.',
  },
  {
    q: 'ما الذي يحدث لحرف العلة الأخير في فعل الأمر من كل فعل ناقص؟\nWhat happens to the final weak letter in the imperative of every defective verb?',
    options: [
      'يسقط كلياً، ولا يبقى منه إلا الحركة التي كانت تسبقه\nIt drops entirely — only the vowel that used to precede it survives',
      'يتحول دائماً إلى همزة\nIt always turns into a hamza',
      'يبقى كما هو بلا أي تغيير\nIt stays exactly as it is, unchanged',
      'يتحول إلى شدة\nIt turns into a shaddah',
    ],
    correctIndex: 0,
    a: 'في كل فعل ناقص، يسقط حرف العلة الأخير كلياً في صيغة الأمر: اُدْعُ (لا اُدْعُو)، اِمْشِ (لا اِمْشِي)، اِنْسَ (لا اِنْسَى) — ولا يبقى إلا الحركة الدالة على أصله.\nIn every defective verb, the final weak letter drops entirely in the imperative: اُدْعُ (not اُدْعُو), اِمْشِ (not اِمْشِي), اِنْسَ (not اِنْسَى) — only the vowel pointing back to the missing letter remains.',
  },
  {
    q: 'حوّل الفعل "بَكَى" (ماضٍ) إلى المضارع.\nTransform the verb بَكَى (past tense, "cried") into the present tense.',
    options: [
      'يَبْكِي\nyabkī — he cries',
      'يَبْكَى\nyabkā (as written)',
      'يَبْكُو\nyabkū (as written)',
      'بَاكٍ\nbākin — crier (active participle)',
    ],
    correctIndex: 0,
    a: 'بَكَى فعل ناقص من نوع "يَفْعِلُ" مثل "مشى"، فيظهر حرف العلة ياءً في المضارع: يَبْكِي.\nبَكَى is a defective verb of the same يَفْعِلُ pattern as مشى, so its weak letter surfaces as ي in the present tense: يَبْكِي.',
  },
  {
    q: 'كوّن فعل الأمر من "بَكَى".\nForm the imperative of بَكَى.',
    options: [
      'اِبْكِ\nibki — cry!',
      'اِبْكِي\nibkī (as written)',
      'اِبْكَ\nibka (as written)',
      'بْكِ\nbki (as written, no hamza)',
    ],
    correctIndex: 0,
    a: 'مثل اِمْشِ، يسقط حرف العلة الأخير في أمر "بكى" ويكفي وزن اِفْعِ مع كسرة دالة عليه: اِبْكِ.\nLike اِمْشِ, the final weak letter of بكى drops in the imperative, leaving the اِفْعِ pattern with a kasra pointing to it: اِبْكِ.',
  },
  {
    q: 'أعرب "دَعَا" في: دَعَا الرجلُ ربَّه.\nParse دَعَا in the sentence دَعَا الرجلُ ربَّه ("The man called upon his Lord").',
    options: [
      'فعل ماضٍ مبني على فتح مقدر على الألف\nPast-tense verb, مبني on a fatḥa implied on the final ا',
      'فعل مضارع مرفوع بضمة مقدرة\nPresent-tense verb, مرفوع, marked by an implied ḍamma',
      'فعل أمر مبني على حذف حرف العلة\nImperative verb, مبني by the deletion of its weak final letter',
      'اسم مقصور منصوب\nA مقصور noun, منصوب',
    ],
    correctIndex: 0,
    a: 'دَعَا فعل ماضٍ، وهو مبني دائماً، وعلامة بنائه هنا الفتح المقدر على الألف لتعذر ظهور الحركة عليها.\nدَعَا is a past-tense verb, always مبني; here its بناء marker is a fatḥa that is merely implied (مقدرة) on the final ا, since a fatḥa cannot physically appear on an alif.',
  },
  {
    q: 'أكمل: هي ___ موعدَها أحياناً. (مضارع من "نسي")\nComplete: هي ___ موعدَها أحياناً — "She sometimes forgets her appointment" (present tense of نسي)',
    options: [
      'تَنْسَى\ntansā — she forgets',
      'تَنْسِي\ntansī (as written)',
      'نَسِيَتْ\nnasiyat — she forgot (past tense)',
      'اِنْسَ\ninsa — forget! (imperative)',
    ],
    correctIndex: 0,
    a: 'المضارع الصحيح من "نسي" مع "هي" هو "تَنْسَى" بألف مقصورة، وهو المطلوب هنا لوصف فعل متكرر لا ماضياً ولا أمراً.\nThe correct present tense of نسي with "she" is تَنْسَى, ending in alif maqṣūra — needed here to describe a recurring action, not a past event or a command.',
  },
  {
    q: 'أيّ فعل مما يلي ليس فعلاً ناقصاً؟\nWhich of the following verbs is NOT a defective verb (فعل ناقص)?',
    options: [
      'دَعَا\ndaʿā — he called',
      'قَالَ\nqāla — he said',
      'مَشَى\nmashā — he walked',
      'نَسِيَ\nnasiya — he forgot',
    ],
    correctIndex: 1,
    a: '"قَالَ" فعل أجوف؛ حرف علته في الوسط (أصله ق-و-ل). أما دَعَا ومَشَى ونَسِيَ فحرف العلة فيها في آخر الفعل، فهي أفعال ناقصة.\nقَالَ is a hollow verb (أجوف) — its weak letter is in the MIDDLE (its root is ق-و-ل). دَعَا, مَشَى, and نَسِيَ, by contrast, each have their weak letter at the END of the verb, making them defective (ناقص) verbs.',
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
            Topic 49 of 62
          </p>
          <h1 className="font-serif tracking-[-0.02em] text-3xl font-bold text-foreground leading-tight mb-3">
            <span
              dir="rtl"
              lang="ar"
              style={{ fontFamily: "'Noto Naskh Arabic', serif" }}
              className="mr-2"
            >
              الفعل الناقص
            </span>
            — Defective Verbs
          </h1>
          <p className="text-muted-foreground text-base max-w-xl">
            A <bdi lang="ar">الفعل الناقص</bdi> has a weak final root letter, and it comes in three patterns:{' '}
            <bdi lang="ar">دَعَا</bdi> / <bdi lang="ar">يَدْعُو</bdi>, <bdi lang="ar">مَشَى</bdi> / <bdi lang="ar">يَمْشِي</bdi>, and{' '}
            <bdi lang="ar">نَسِيَ</bdi> / <bdi lang="ar">يَنْسَى</bdi>. In every case the imperative drops that final weak letter
            entirely, leaving only the vowel that pointed to it:{' '}
            <span className="font-medium text-foreground"><bdi lang="ar">اُدْعُ</bdi>، <bdi lang="ar">اِمْشِ</bdi>، <bdi lang="ar">اِنْسَ</bdi></span>.
          </p>
        </div>
      </div>
      <div className="mx-auto w-[min(720px,calc(100%-2rem))] py-8">
        <QuizCarousel items={quizItems} />
      </div>
    </main>
  )
}

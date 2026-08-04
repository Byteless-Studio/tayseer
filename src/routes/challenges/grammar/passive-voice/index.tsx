import { createFileRoute, Link } from '@tanstack/react-router'
import { QuizCarousel } from '#/components/QuizCarousel'
import type { StrictQuizItem } from '#/routes/challenges/-quiz-types'

export const Route = createFileRoute('/challenges/grammar/passive-voice/')({
  head: () => ({ meta: [{ title: 'The Passive Voice — Grammar — Tayseer' }] }),
  component: TopicPage,
})

const quizItems: StrictQuizItem[] = [
  {
    q: 'ما هو الفعل المبني للمجهول؟\nWhat is المبني للمجهول (the passive voice)?',
    options: [
      'صيغة فعلية يُحذف فيها الفاعل ويقوم المفعول به مقامه\nA verbal form in which the فاعل is omitted and the direct object takes its place',
      'صيغة يُضاعف فيها حرف من حروف الفعل\nA form in which one of the verb\'s letters is doubled',
      'صيغة تحول الفعل الماضي إلى فعل أمر\nA form that turns a past-tense verb into an imperative',
      'صيغة خاصة بالأفعال الناقصة فقط\nA form specific only to defective verbs',
    ],
    correctIndex: 0,
    a: 'المبني للمجهول صيغة فعلية يُحذف فيها الفاعل (لأنه مجهول أو غير مهم ذكره) ويحل المفعول به محله، فيسمى حينئذ نائب الفاعل ويأخذ حكمه في الرفع.\nThe passive voice is a verbal form where the فاعل is dropped (because it is unknown, or simply not worth mentioning) and the direct object takes its place, becoming what is called نائب الفاعل ("stand-in for the subject") — and taking on the subject\'s nominative case.',
  },
  {
    q: 'حوّل "كَتَبَ" من المبني للمعلوم إلى المبني للمجهول (الماضي).\nTransform كَتَبَ from active to passive voice (past tense).',
    options: [
      'كُتِبَ\nkutiba — it was written',
      'كَاتَبَ\nkātaba — he corresponded with (Form III)',
      'كَتَّبَ\nkattaba — he made [someone] write (Form II)',
      'كَتَبَ\nkataba — he wrote (unchanged, active)',
    ],
    correctIndex: 0,
    a: 'صيغة الماضي المبني للمجهول: ضمة على أول الفعل وكسرة على ما قبل آخره: كَتَبَ ← كُتِبَ.\nThe past-tense passive pattern places a ḍamma on the first letter and a kasra on the second-to-last: كَتَبَ becomes كُتِبَ.',
  },
  {
    q: 'حوّل "يَكْتُبُ" من المبني للمعلوم إلى المبني للمجهول (المضارع).\nTransform يَكْتُبُ from active to passive voice (present tense).',
    options: [
      'يُكْتَبُ\nyuktabu — it is written',
      'يَكْتُبُ\nyaktubu — he writes (unchanged, active)',
      'كُتِبَ\nkutiba — it was written (past tense)',
      'مَكْتُوبٌ\nmaktūbun — written (passive participle)',
    ],
    correctIndex: 0,
    a: 'صيغة المضارع المبني للمجهول: ضمة على أول الفعل وفتحة على ما قبل آخره: يَكْتُبُ ← يُكْتَبُ.\nThe present-tense passive pattern places a ḍamma on the first letter and a fatḥa on the second-to-last: يَكْتُبُ becomes يُكْتَبُ.',
  },
  {
    q: 'ما الحركتان اللتان تميزان صيغة الماضي المبني للمجهول؟\nWhat are the two vowels that mark the passive-voice pattern in the past tense?',
    options: [
      'ضمة على الحرف الأول وكسرة على ما قبل الآخر\nA ḍamma on the first letter and a kasra on the second-to-last letter',
      'فتحة على الحرف الأول وضمة على ما قبل الآخر\nA fatḥa on the first letter and a ḍamma on the second-to-last letter',
      'كسرة على الحرف الأول وفتحة على ما قبل الآخر\nA kasra on the first letter and a fatḥa on the second-to-last letter',
      'ضمة على الحرف الأول وفتحة على ما قبل الآخر\nA ḍamma on the first letter and a fatḥa on the second-to-last letter',
    ],
    correctIndex: 0,
    a: 'الماضي المبني للمجهول علامته ضمة على أول الفعل وكسرة على الحرف الذي قبل الأخير: كُتِبَ، فُهِمَ، ضُرِبَ. (أما المضارع فعلامته ضمة أولاً وفتحة ثانياً، لا كسرة).\nThe past-tense passive is marked by a ḍamma on the first letter and a kasra on the second-to-last letter: كُتِبَ, فُهِمَ, ضُرِبَ. (The present-tense passive instead pairs a ḍamma with a fatḥa, not a kasra.)',
  },
  {
    q: 'أكمل: الرسالةُ ___ بخطٍّ جميلٍ. (ماضٍ مبني للمجهول من "كتب")\nComplete: الرسالةُ ___ بخطٍّ جميلٍ — "The letter was written in beautiful handwriting" (passive past tense of كتب)',
    options: [
      'كُتِبَتْ\nkutibat — it (f.) was written',
      'كَتَبَتْ\nkatabat — she wrote (active)',
      'تُكْتَبُ\ntuktabu — it is being written (present passive)',
      'كَاتِبَةٌ\nkātibatun — a female writer',
    ],
    correctIndex: 0,
    a: 'بما أن "الرسالةُ" هي التي وقع عليها الفعل ولم يُذكر من كتبها، فالمطلوب صيغة الماضي المبني للمجهول المؤنثة: كُتِبَتْ.\nSince الرسالةُ is what the action fell upon, and no one is named as having written it, the passive past tense (feminine) is needed: كُتِبَتْ.',
  },
  {
    q: 'أيّ جملة فيها خطأ في صياغة المبني للمجهول؟\nWhich sentence contains an error in forming the passive voice?',
    options: [
      'كُتِبَتِ الرسالةُ\nkutibati r-risālatu — "The letter was written"',
      'كَتَبَتِ الرسالةُ\nkatabati r-risālatu (as written)',
      'يُكْتَبُ الدرسُ الآنَ\nyuktabu d-darsu l-āna — "The lesson is being written now"',
      'فُتِحَ البابُ\nfutiḥa l-bābu — "The door was opened"',
    ],
    correctIndex: 1,
    a: '"كَتَبَتِ الرسالةُ" بصيغة المعلوم يعني أن الرسالةَ هي التي كتبت، وهذا غير معقول؛ الصواب للمعنى المقصود هو المبني للمجهول: "كُتِبَتِ الرسالةُ".\nكَتَبَتِ الرسالةُ, in the active voice, would mean the letter itself did the writing — which makes no sense. The intended meaning needs the passive: كُتِبَتِ الرسالةُ.',
  },
  {
    q: 'ما تصريف الفعل "نصر" في الماضي المبني للمجهول مع ضمير المتكلم "أنا"؟\nWhat is the passive past-tense conjugation of نصر with the pronoun أنا (I)?',
    options: [
      'نُصِرْتُ\nnuṣirtu — I was helped/supported',
      'نَصَرْتُ\nnaṣartu — I helped (active)',
      'أُنْصَرُ\nunṣaru — I am helped (present passive)',
      'نَاصِرٌ\nnāṣirun — helper (active participle)',
    ],
    correctIndex: 0,
    a: 'تلحق تاء الفاعل بصيغة المجهول كما تلحق بالمعلوم دون أن تغير حركتي الفعل الدالتين على المجهول: نُصِرْ + تُ = نُصِرْتُ.\nThe subject suffix تُ attaches to the passive stem exactly as it does to the active one, without disturbing the two vowels that mark the passive: نُصِرْ + تُ gives نُصِرْتُ.',
  },
  {
    q: 'كُتِبَتِ الرسالةُ — ما إعراب "الرسالةُ"؟\nIn كُتِبَتِ الرسالةُ, what is the case (إعراب) of الرسالةُ?',
    options: [
      'نائب فاعل مرفوع\nنائب فاعل ("stand-in subject"), مرفوع (nominative)',
      'مفعول به منصوب\nDirect object (مفعول به), منصوب (accusative)',
      'مبتدأ مرفوع\nSubject of a nominal sentence (مبتدأ), مرفوع',
      'فاعل منصوب\nSubject (فاعل), منصوب — an impossible combination',
    ],
    correctIndex: 0,
    a: 'حين يُحذف الفاعل في المبني للمجهول، يحل المفعول به محله ويأخذ حكمه في الإعراب، فيصبح نائب فاعل مرفوعاً؛ "الرسالةُ" هنا نائب فاعل مرفوع، لا مفعول به منصوب كما كانت قبل حذف الفاعل.\nWhen the فاعل is dropped in the passive voice, the direct object steps into its place and takes on its case: it becomes نائب الفاعل, nominative. Here الرسالةُ is نائب فاعل, مرفوع — no longer the accusative مفعول به it would have been before the فاعل was dropped.',
  },
  {
    q: 'حوّل "فَتَحَ" (ماضٍ، معلوم) إلى المبني للمجهول.\nTransform فَتَحَ (active past tense, "opened") into the passive voice.',
    options: [
      'فُتِحَ\nfutiḥa — it was opened',
      'فَتَّحَ\nfattaḥa — he opened up repeatedly (Form II)',
      'اِنْفَتَحَ\ninfataḥa — it opened (by itself, Form VII)',
      'فَتَحَ\nfataḥa — he opened (unchanged, active)',
    ],
    correctIndex: 0,
    a: 'مثل كَتَبَ ← كُتِبَ، يتبع "فتح" النمط نفسه: ضمة على الأول وكسرة على ما قبل الآخر: فَتَحَ ← فُتِحَ.\nJust like كَتَبَ becomes كُتِبَ, فتح follows the same pattern: ḍamma on the first letter, kasra on the second-to-last: فَتَحَ becomes فُتِحَ.',
  },
  {
    q: 'حوّل "يَفْتَحُ" (مضارع، معلوم) إلى المبني للمجهول.\nTransform يَفْتَحُ (active present tense, "opens") into the passive voice.',
    options: [
      'يُفْتَحُ\nyuftaḥu — it is opened',
      'يَفْتَحُ\nyaftaḥu — he opens (unchanged, active)',
      'فُتِحَ\nfutiḥa — it was opened (past tense)',
      'مَفْتُوحٌ\nmaftūḥun — opened (passive participle)',
    ],
    correctIndex: 0,
    a: 'ضمة على الأول وفتحة على ما قبل الآخر هي علامة المضارع المبني للمجهول: يَفْتَحُ ← يُفْتَحُ.\nA ḍamma on the first letter paired with a fatḥa on the second-to-last marks the present-tense passive: يَفْتَحُ becomes يُفْتَحُ.',
  },
  {
    q: 'أكمل: البابُ ___ كلَّ صباحٍ. (مضارع مبني للمجهول من "فتح")\nComplete: البابُ ___ كلَّ صباحٍ — "The door is opened every morning" (present passive of فتح)',
    options: [
      'يُفْتَحُ\nyuftaḥu — it is opened',
      'يَفْتَحُ\nyaftaḥu — he opens (active)',
      'فُتِحَ\nfutiḥa — it was opened (past tense)',
      'فَاتِحٌ\nfātiḥun — opener (active participle)',
    ],
    correctIndex: 0,
    a: 'الجملة تصف حدثاً متكرراً في الحاضر يقع على البابِ دون ذكر الفاعل، فالمطلوب المضارع المبني للمجهول: يُفْتَحُ.\nThe sentence describes a recurring present-tense event happening to the door, with no agent named — that calls for the present-tense passive: يُفْتَحُ.',
  },
  {
    q: 'أيّ صياغة للمبني للمجهول من "ضرب" مكتوبة خطأً؟\nWhich passive-voice form of ضرب below is written incorrectly?',
    options: [
      'ضُرِبَ\nḍuriba — he was hit (past tense)',
      'يُضْرَبُ\nyuḍrabu — he is hit (present tense)',
      'ضَرِبَ\nḍariba (as written)',
      'ضُرِبَتْ\nḍuribat — she was hit (past tense)',
    ],
    correctIndex: 2,
    a: '"ضَرِبَ" خطأ؛ الماضي المبني للمجهول يجب أن يبدأ بضمة لا فتحة: الصواب "ضُرِبَ" (ضمة على الضاد، كسرة على الراء).\nضَرِبَ is wrong; the passive past tense must begin with a ḍamma, not a fatḥa: the correct form is ضُرِبَ (ḍamma on ض, kasra on ر).',
  },
  {
    q: 'ماذا يحدث للمفعول به عند بناء الفعل للمجهول؟\nWhat happens to the direct object (مفعول به) when a verb is put into the passive voice?',
    options: [
      'يحل محل الفاعل المحذوف ويُسمى نائب الفاعل ويصبح مرفوعاً\nIt takes the place of the omitted فاعل, is renamed نائب الفاعل, and becomes nominative (مرفوع)',
      'يبقى منصوباً كما كان بلا أي تغيير\nIt stays accusative (منصوب), exactly as before, with no change',
      'يُحذف من الجملة كلياً\nIt is dropped from the sentence entirely',
      'يتحول إلى حرف جر\nIt turns into a preposition',
    ],
    correctIndex: 0,
    a: 'حين يُحذف الفاعل، يرتقي المفعول به إلى مكانه فيصبح نائب فاعل مرفوعاً بدل أن يكون منصوباً، مثل: كتبَ الطالبُ الرسالةَ (معلوم) ← كُتِبَتِ الرسالةُ (مجهول، والرسالةُ أصبحت مرفوعة).\nWhen the فاعل is dropped, the direct object is promoted into its place, becoming نائب الفاعل and turning nominative instead of accusative — as in كتبَ الطالبُ الرسالةَ (active) becoming كُتِبَتِ الرسالةُ (passive, with الرسالةُ now nominative).',
  },
  {
    q: 'حوّل الجملة "كَتَبَ الطالبُ الرسالةَ" إلى المبني للمجهول.\nTransform the sentence كَتَبَ الطالبُ الرسالةَ ("The student wrote the letter") into the passive voice.',
    options: [
      'كُتِبَتِ الرسالةُ\nkutibati r-risālatu — "The letter was written"',
      'كَتَبَتِ الرسالةُ الطالبَ\nkatabati r-risālatu ṭ-ṭāliba (as written)',
      'الطالبُ كُتِبَ الرسالةَ\naṭ-ṭālibu kutiba r-risālata (as written)',
      'كُتِبَ الطالبُ الرسالةَ\nkutiba ṭ-ṭālibu r-risālata (as written)',
    ],
    correctIndex: 0,
    a: 'في التحويل إلى المجهول، يُحذف الفاعل ("الطالبُ") تماماً، ويصبح المفعول به ("الرسالةَ") نائب فاعل مرفوعاً: "كُتِبَتِ الرسالةُ" — بلا ذكر للطالب إطلاقاً.\nWhen converting to the passive, the فاعل (الطالبُ) is dropped completely, and the direct object (الرسالةَ) becomes نائب الفاعل, nominative: كُتِبَتِ الرسالةُ — with no mention of the student at all.',
  },
  {
    q: 'ما تصريف "ضرب" في المضارع المبني للمجهول مع ضمير الجماعة "هم"؟\nWhat is the present-passive conjugation of ضرب with the pronoun هم (they, masculine)?',
    options: [
      'يُضْرَبُونَ\nyuḍrabūna — they are hit',
      'يَضْرِبُونَ\nyaḍribūna — they hit (active)',
      'ضُرِبُوا\nḍuribū — they were hit (past tense)',
      'يُضْرَبَانِ\nyuḍrabāni — they two are hit (dual)',
    ],
    correctIndex: 0,
    a: 'يبقى نمط الضمة والفتحة في المضارع المجهول عند اتصاله بواو الجماعة: يُضْرَبُ + ونَ = يُضْرَبُونَ.\nThe ḍamma-fatḥa passive pattern stays intact when واو الجماعة attaches: يُضْرَبُ + ونَ gives يُضْرَبُونَ.',
  },
  {
    q: 'أعرب "كُتِبَتِ" في: كُتِبَتِ الرسالةُ.\nParse كُتِبَتِ in the sentence كُتِبَتِ الرسالةُ ("The letter was written").',
    options: [
      'فعل ماضٍ مبني للمجهول، مبني على الفتح\nA past-tense verb in the passive voice, مبني on fatḥa',
      'فعل مضارع مبني للمجهول، مرفوع\nA present-tense verb in the passive voice, مرفوع',
      'فعل أمر مبني على السكون\nAn imperative verb, مبني on sukūn',
      'اسم مفعول مرفوع\nA passive participle, مرفوع',
    ],
    correctIndex: 0,
    a: 'كُتِبَتِ فعل ماضٍ، وكل فعل ماضٍ مبني بصرف النظر عن كونه معلوماً أو مجهولاً، وعلامة بنائه هنا الفتح؛ حركة الكسر على التاء إنما هي لالتقاء الساكنين مع "ال" التالية، لا علامة إعراب.\nكُتِبَتِ is a past-tense verb; every past-tense verb is مبني regardless of active or passive voice, and here its بناء marker is fatḥa. The extra kasra sound on the ت is simply there to avoid two sukūns colliding with the following ال — not an إعراب marker.',
  },
  {
    q: 'أكمل: الدرسُ ___ من جميع الطلاب. (ماضٍ مبني للمجهول من "فهم")\nComplete: الدرسُ ___ من جميع الطلاب — "The lesson was understood by all the students" (passive past tense of فهم)',
    options: [
      'فُهِمَ\nfuhima — it was understood',
      'فَهِمَ\nfahima — he understood (active)',
      'يُفْهَمُ\nyufhamu — it is understood (present passive)',
      'فَاهِمٌ\nfāhimun — one who understands',
    ],
    correctIndex: 0,
    a: 'الدرسُ هو ما وقع عليه الفهم، ولم يُذكر الفاعل باسمه، بل بـ"من جميع الطلاب" وصفاً عاماً، فيناسب المبني للمجهول الماضي: فُهِمَ.\nThe lesson is what the understanding fell upon, and no single agent is named (من جميع الطلاب is a general description, not a فاعل) — this calls for the passive past tense: فُهِمَ.',
  },
  {
    q: 'حوّل "ضَرَبَ" (ماضٍ، معلوم) إلى المبني للمجهول.\nTransform ضَرَبَ (active past tense, "hit") into the passive voice.',
    options: [
      'ضُرِبَ\nḍuriba — he was hit',
      'ضَارَبَ\nḍāraba — he fought with [someone] (Form III)',
      'ضَرَّبَ\nḍarraba — he made [someone] hit repeatedly (Form II)',
      'ضَرَبَ\nḍaraba — he hit (unchanged, active)',
    ],
    correctIndex: 0,
    a: 'يتبع "ضرب" نمط المبني للمجهول نفسه: ضمة على الأول وكسرة على ما قبل الآخر: ضَرَبَ ← ضُرِبَ.\nضرب follows the same passive pattern: ḍamma on the first letter, kasra on the second-to-last: ضَرَبَ becomes ضُرِبَ.',
  },
  {
    q: 'أيّ جملة فيها خطأ في إعراب نائب الفاعل؟\nWhich sentence contains an error in the case-marking of نائب الفاعل?',
    options: [
      'كُتِبَتِ الرسالةُ\nkutibati r-risālatu — "The letter was written"',
      'كُتِبَتِ الرسالةَ\nkutibati r-risālata (as written)',
      'فُتِحَ البابُ\nfutiḥa l-bābu — "The door was opened"',
      'ضُرِبَ اللاعبُ\nḍuriba l-lāʿibu — "The player was hit"',
    ],
    correctIndex: 1,
    a: '"كُتِبَتِ الرسالةَ" خطأ لأن نائب الفاعل يجب أن يكون مرفوعاً دائماً، لا منصوباً: الصواب "كُتِبَتِ الرسالةُ".\nكُتِبَتِ الرسالةَ is wrong because نائب الفاعل must always be nominative (مرفوع), never accusative: the correct form is كُتِبَتِ الرسالةُ.',
  },
  {
    q: 'أيّ الأفعال التالية مبني للمجهول؟\nWhich of the following verbs is in the passive voice?',
    options: [
      'كَتَبَ\nkataba — he wrote (active)',
      'كُتِبَ\nkutiba — it was written (passive)',
      'يَكْتُبُ\nyaktubu — he writes (active)',
      'اُكْتُبْ\nuktub — write! (imperative, active)',
    ],
    correctIndex: 1,
    a: '"كُتِبَ" وحده يحمل حركتي المجهول: ضمة على الأول وكسرة على ما قبل الآخر؛ الثلاثة الباقية أفعال معلومة بحركاتها الأصلية العادية.\nOnly كُتِبَ carries the two passive vowels: ḍamma on the first letter, kasra on the second-to-last. The other three are active-voice forms with their ordinary vowel patterns.',
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
            Topic 51 of 62
          </p>
          <h1 className="font-serif tracking-[-0.02em] text-3xl font-bold text-foreground leading-tight mb-3">
            <span
              dir="rtl"
              lang="ar"
              style={{ fontFamily: "'Noto Naskh Arabic', serif" }}
              className="mr-2"
            >
              المبني للمجهول
            </span>
            — The Passive Voice
          </h1>
          <p className="text-muted-foreground text-base max-w-xl">
            The passive voice drops the <bdi lang="ar">فاعل</bdi> and promotes the object into its place, called{' '}
            <span className="font-medium text-foreground"><bdi lang="ar">نائب الفاعل</bdi></span>, always <bdi lang="ar">مرفوع</bdi>. The past
            tense takes ḍamma-then-kasra (<bdi lang="ar">كَتَبَ</bdi> → <bdi lang="ar">كُتِبَ</bdi>), and the present tense takes
            ḍamma-then-fatḥa (<bdi lang="ar">يَكْتُبُ</bdi> → <bdi lang="ar">يُكْتَبُ</bdi>). "The student wrote the letter"
            (<bdi lang="ar">كَتَبَ الطالبُ الرسالةَ</bdi>) becomes simply <bdi lang="ar">كُتِبَتِ الرسالةُ</bdi> — "The letter was written."
          </p>
        </div>
      </div>
      <div className="mx-auto w-[min(720px,calc(100%-2rem))] py-8">
        <QuizCarousel items={quizItems} />
      </div>
    </main>
  )
}

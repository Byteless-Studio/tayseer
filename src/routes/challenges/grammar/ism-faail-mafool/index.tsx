import { createFileRoute, Link } from '@tanstack/react-router'
import { QuizCarousel } from '#/components/QuizCarousel'
import type { StrictQuizItem } from '#/routes/challenges/-quiz-types'

export const Route = createFileRoute('/challenges/grammar/ism-faail-mafool/')({
  head: () => ({ meta: [{ title: 'Active & Passive Participles — Grammar — Tayseer' }] }),
  component: TopicPage,
})

const quizItems: StrictQuizItem[] = [
  {
    q: 'ما هو اسم الفاعل؟\nWhat is اسم الفاعل (the active participle)?',
    options: [
      'اسم مشتق يدل على من قام بالفعل أو اتصف به\nA derived noun denoting the one who performs the action or holds its quality',
      'اسم مشتق يدل على من وقع عليه الفعل\nA derived noun denoting the one the action fell upon',
      'مصدر الفعل نفسه\nThe verbal noun (مصدر) of the verb itself',
      'اسم يدل على مكان وقوع الفعل\nA noun denoting the place where the action occurs',
    ],
    correctIndex: 0,
    a: 'اسم الفاعل اسم مشتق من الفعل يدل على من قام بالحدث أو اتصف به، مثل "كَاتِبٌ" (من كتب) بمعنى "الذي يكتب/كتب".\nاسم الفاعل is a noun derived from a verb, denoting whoever performs the action or bears its quality — like كَاتِبٌ (from كتب), meaning "the one who writes/wrote."',
  },
  {
    q: 'ما هو اسم المفعول؟\nWhat is اسم المفعول (the passive participle)?',
    options: [
      'اسم مشتق يدل على من وقع عليه الفعل\nA derived noun denoting the one/thing the action fell upon',
      'اسم مشتق يدل على من قام بالفعل\nA derived noun denoting the one who performs the action',
      'اسم يدل على أداة يُفعل بها الفعل\nA noun denoting the instrument used to perform the action',
      'اسم يدل على زمن وقوع الفعل\nA noun denoting the time when the action occurs',
    ],
    correctIndex: 0,
    a: 'اسم المفعول اسم مشتق من الفعل يدل على من أو ما وقع عليه الفعل، مثل "مَكْتُوبٌ" (من كتب) بمعنى "الذي كُتب".\nاسم المفعول is a noun derived from a verb, denoting whoever or whatever the action fell upon — like مَكْتُوبٌ (from كتب), meaning "that which was written."',
  },
  {
    q: 'كوّن اسم الفاعل من الفعل "كَتَبَ" (على وزن فَاعِلٌ).\nForm the اسم الفاعل of كَتَبَ, on the Form I pattern فَاعِلٌ.',
    options: [
      'كَاتِبٌ\nkātibun — writer/one who writes',
      'مَكْتُوبٌ\nmaktūbun — written',
      'كِتَابٌ\nkitābun — book',
      'مُكَاتِبٌ\nmukātibun (Form III pattern, as written)',
    ],
    correctIndex: 0,
    a: 'اسم الفاعل من الفعل الثلاثي المجرد يُصاغ على وزن فَاعِلٌ: كَتَبَ ← كَاتِبٌ.\nThe اسم الفاعل of a bare Form I triliteral verb is built on the pattern فَاعِلٌ: كَتَبَ becomes كَاتِبٌ.',
  },
  {
    q: 'كوّن اسم المفعول من الفعل "كَتَبَ" (على وزن مَفْعُولٌ).\nForm the اسم المفعول of كَتَبَ, on the Form I pattern مَفْعُولٌ.',
    options: [
      'مَكْتُوبٌ\nmaktūbun — written',
      'كَاتِبٌ\nkātibun — writer (active participle)',
      'كِتَابَةٌ\nkitābatun — writing (verbal noun)',
      'مَكْتَبٌ\nmaktabun — desk/office (ism makan)',
    ],
    correctIndex: 0,
    a: 'اسم المفعول من الفعل الثلاثي المجرد يُصاغ على وزن مَفْعُولٌ: كَتَبَ ← مَكْتُوبٌ.\nThe اسم المفعول of a bare Form I triliteral verb is built on the pattern مَفْعُولٌ: كَتَبَ becomes مَكْتُوبٌ.',
  },
  {
    q: 'ما جمع المذكر السالم لاسم الفاعل "طَالِبٌ"؟\nWhat is the sound masculine plural of the اسم الفاعل طَالِبٌ?',
    options: [
      'طَالِبُونَ\nṭālibūna — students (nominative plural)',
      'طَالِبَاتٌ\nṭālibātun — female students (feminine plural)',
      'مَطْلُوبُونَ\nmaṭlūbūna — sought ones (اسم مفعول plural)',
      'طُلاَّبٌ\nṭullābun — students (broken plural)',
    ],
    correctIndex: 0,
    a: 'اسم الفاعل من الثلاثي على وزن فَاعِلٌ يُجمع جمعَ مذكرٍ سالماً بزيادة واو ونون في الرفع: طَالِبٌ ← طَالِبُونَ (وله أيضاً جمع تكسير شائع: طُلاَّبٌ، لكن السؤال هنا عن الجمع السالم).\nAn اسم الفاعل on the فَاعِلٌ pattern takes the sound masculine plural by adding و and ن in the nominative: طَالِبٌ becomes طَالِبُونَ. (It also has a common broken plural, طُلاَّبٌ, but this question asks specifically for the sound plural.)',
  },
  {
    q: 'كوّن اسم المفعول من الفعل "فَتَحَ" (على وزن مَفْعُولٌ).\nForm the اسم المفعول of فَتَحَ ("opened"), on the pattern مَفْعُولٌ.',
    options: [
      'مَفْتُوحٌ\nmaftūḥun — opened',
      'فَاتِحٌ\nfātiḥun — opener (active participle)',
      'مِفْتَاحٌ\nmiftāḥun — key (ism aalah)',
      'مَفْتَحٌ\nmaftaḥun (as written)',
    ],
    correctIndex: 0,
    a: 'يتبع "فتح" الوزن نفسه: فَتَحَ ← مَفْتُوحٌ، بمعنى "الذي فُتح".\nفتح follows the same pattern: فَتَحَ becomes مَفْتُوحٌ, meaning "that which was opened."',
  },
  {
    q: 'أكمل: هذا الرجلُ ___ مشهورٌ. (اسم فاعل من "كتب")\nComplete: هذا الرجلُ ___ مشهورٌ — "This man is a famous writer" (اسم الفاعل of كتب)',
    options: [
      'كَاتِبٌ\nkātibun — a writer',
      'مَكْتُوبٌ\nmaktūbun — written',
      'كَتَبَ\nkataba — he wrote (verb)',
      'مَكْتَبٌ\nmaktabun — desk/office',
    ],
    correctIndex: 0,
    a: 'الجملة تصف الرجل بأنه من يقوم بالكتابة، وهذا معنى اسم الفاعل: "كَاتِبٌ"، لا معنى اسم المفعول أو مكان الفعل.\nThe sentence describes the man as one who performs the writing — exactly the meaning of اسم الفاعل: كَاتِبٌ, not the meaning of اسم المفعول or a place noun.',
  },
  {
    q: 'أكمل: هذا الدرسُ ___ بخطٍّ واضحٍ. (اسم مفعول من "كتب")\nComplete: هذا الدرسُ ___ بخطٍّ واضحٍ — "This lesson is written in clear handwriting" (اسم المفعول of كتب)',
    options: [
      'مَكْتُوبٌ\nmaktūbun — written',
      'كَاتِبٌ\nkātibun — writer',
      'يَكْتُبُ\nyaktubu — he writes',
      'كِتَابَةٌ\nkitābatun — writing',
    ],
    correctIndex: 0,
    a: 'الجملة تصف الدرس بأنه وقع عليه فعل الكتابة، وهذا معنى اسم المفعول: "مَكْتُوبٌ".\nThe sentence describes the lesson as the thing the writing fell upon — exactly the meaning of اسم المفعول: مَكْتُوبٌ.',
  },
  {
    q: 'أيّ اسم فاعل مكتوب خطأً من الفعل الثلاثي المجرد؟\nWhich اسم الفاعل of a bare Form I verb below is written incorrectly?',
    options: [
      'كَاتِبٌ\nkātibun — writer (from كتب)',
      'طَالِبٌ\nṭālibun — seeker (from طلب)',
      'فَتَحَ\nfataḥa (as written — this is the verb itself, not اسم فاعل)',
      'دَارِسٌ\ndārisun — studier (from درس)',
    ],
    correctIndex: 2,
    a: '"فَتَحَ" ليس اسم فاعل بل هو الفعل الماضي نفسه؛ اسم الفاعل الصحيح من "فتح" على وزن فَاعِلٌ هو "فَاتِحٌ".\nفَتَحَ is not an اسم فاعل at all — it is simply the past-tense verb. The correct اسم الفاعل of فتح, on the فَاعِلٌ pattern, is فَاتِحٌ.',
  },
  {
    q: 'أعرب "كَاتِبٌ" في: محمدٌ كَاتِبٌ مشهورٌ.\nParse كَاتِبٌ in the sentence محمدٌ كَاتِبٌ مشهورٌ ("Muhammad is a famous writer").',
    options: [
      'خبر مرفوع\nPredicate (خبر), مرفوع',
      'فاعل مرفوع\nSubject (فاعل), مرفوع',
      'مفعول به منصوب\nDirect object (مفعول به), منصوب',
      'نعت مجرور\nAdjective (نعت), مجرور',
    ],
    correctIndex: 0,
    a: '"كَاتِبٌ" هنا اسم فاعل يعمل عمل الوصف، وهو خبر المبتدأ "محمدٌ" في جملة اسمية، فهو مرفوع مثل كل خبر.\nHere كَاتِبٌ is an اسم فاعل functioning as a descriptive predicate — the خبر of the مبتدأ محمدٌ in a nominal sentence, so it is مرفوع, like every خبر.',
  },
  {
    q: 'كيف يُصاغ اسم الفاعل من الأفعال المزيدة (الأبواب من الثاني إلى العاشر)؟\nHow is the اسم الفاعل formed from augmented verbs (Forms II through X)?',
    options: [
      'يُستبدل حرف المضارعة بميم مضمومة، وتُكسر الحرف الذي قبل الآخر\nThe مضارعة prefix is replaced with a ḍamma-vowelled م, and the letter before the last one takes kasra',
      'يُضاف حرف "و" في أول الفعل\nA و is added at the beginning of the verb',
      'يُصاغ دائماً على وزن فَاعِلٌ كالمجرد\nIt is always formed on the فَاعِلٌ pattern, just like the bare Form I verb',
      'لا يوجد اسم فاعل للأفعال المزيدة\nThere is no اسم الفاعل for augmented verbs',
    ],
    correctIndex: 0,
    a: 'في الأفعال المزيدة، يُؤخذ المضارع وتُستبدل ياء المضارعة بميم مضمومة، ويُكسر الحرف الذي قبل الآخر لصياغة اسم الفاعل: دَرَّسَ (يُدَرِّسُ) ← مُدَرِّسٌ.\nFor augmented verbs, you take the present tense, replace the مضارعة prefix ي with a ḍamma-vowelled م, and give the second-to-last letter a kasra to form the اسم الفاعل: دَرَّسَ (present يُدَرِّسُ) becomes مُدَرِّسٌ.',
  },
  {
    q: 'كوّن اسم الفاعل من الفعل "دَرَّسَ" (باب فَعَّلَ، مضارعه يُدَرِّسُ).\nForm the اسم الفاعل of دَرَّسَ ("taught," Form II, present tense يُدَرِّسُ).',
    options: [
      'مُدَرِّسٌ\nmudarrisun — teacher',
      'مُدَرَّسٌ\nmudarrasun — "taught" (اسم مفعول)',
      'دَارِسٌ\ndārisun — studier (Form I pattern)',
      'مَدْرَسَةٌ\nmadrasatun — school',
    ],
    correctIndex: 0,
    a: 'من المضارع "يُدَرِّسُ" نستبدل الياء بميم مضمومة ونُبقي الكسرة قبل الآخر: مُدَرِّسٌ — بمعنى "الذي يُدَرِّس".\nFrom the present-tense يُدَرِّسُ, replace the ي with a ḍamma-vowelled م and keep the kasra before the last letter: مُدَرِّسٌ, meaning "the one who teaches."',
  },
  {
    q: 'كوّن اسم المفعول من الفعل "عَلَّمَ" (باب فَعَّلَ، مضارعه يُعَلِّمُ).\nForm the اسم المفعول of عَلَّمَ ("taught," Form II, present tense يُعَلِّمُ).',
    options: [
      'مُعَلَّمٌ\nmuʿallamun — taught/instructed',
      'مُعَلِّمٌ\nmuʿallimun — "teacher" (اسم فاعل)',
      'عَالِمٌ\nʿālimun — knowledgeable one (Form I pattern)',
      'تَعْلِيمٌ\ntaʿlīmun — teaching (verbal noun)',
    ],
    correctIndex: 0,
    a: 'في اسم المفعول من المزيد، يُستبدل حرف المضارعة بميم مضمومة، وتُفتح الحرف الذي قبل الآخر بدل الكسرة: يُعَلِّمُ ← مُعَلَّمٌ، بمعنى "الذي عُلِّم".\nFor the اسم المفعول of an augmented verb, the مضارعة prefix is likewise replaced with a ḍamma-vowelled م, but the second-to-last letter takes fatḥa instead of kasra: يُعَلِّمُ becomes مُعَلَّمٌ, meaning "the one who was taught."',
  },
  {
    q: 'إذا كان اسم الفاعل من "علّم" هو "مُعَلِّمٌ"، فما اسم المفعول من الفعل نفسه؟\nIf the اسم الفاعل of علّم is مُعَلِّمٌ, what is the اسم المفعول of the same verb?',
    options: [
      'مُعَلَّمٌ\nmuʿallamun — taught (fatḥa before the last letter)',
      'مُعَلِّمٌ\nmuʿallimun — teacher (unchanged, same as اسم الفاعل)',
      'عَلَّمَ\nʿallama — he taught (the verb itself)',
      'مُتَعَلِّمٌ\nmutaʿallimun — learner (Form V pattern)',
    ],
    correctIndex: 0,
    a: 'الفرق بين اسم الفاعل واسم المفعول في الأبواب المزيدة حركة واحدة فقط: كسرة قبل الآخر للفاعل، وفتحة قبل الآخر للمفعول: مُعَلِّمٌ (فاعل) مقابل مُعَلَّمٌ (مفعول).\nIn the augmented forms, اسم الفاعل and اسم المفعول differ by exactly one vowel: kasra before the last letter for the active participle, fatḥa for the passive one — مُعَلِّمٌ (active) versus مُعَلَّمٌ (passive).',
  },
  {
    q: 'أيّ جملة فيها خطأ في التمييز بين اسم الفاعل واسم المفعول؟\nWhich sentence confuses اسم الفاعل with اسم المفعول?',
    options: [
      'هذا مُدَرِّسٌ نشيطٌ\nhādhā mudarrisun nashīṭun — "This is an energetic teacher"',
      'هذا الدرسُ مُدَرَّسٌ جيداً\nhādhā d-darsu mudarrasun jayyidan — "This lesson is well taught"',
      'هذا الطالبُ مُدَرِّسٌ جيداً\nhādhā ṭ-ṭālibu mudarrisun jayyidan (as written)',
      'المعلمُ مُدَرِّسٌ ماهرٌ\nal-muʿallimu mudarrisun māhirun — "The teacher is a skilled instructor"',
    ],
    correctIndex: 2,
    a: '"هذا الطالبُ مُدَرِّسٌ جيداً" يستعمل اسم الفاعل (مُدَرِّسٌ = "من يُدرِّس") في سياق يصف الطالب بأنه يُدَرَّس (يقع عليه الفعل)؛ الصواب استخدام اسم المفعول: "هذا الطالبُ مُدَرَّسٌ جيداً" (بفتحة قبل الآخر).\nهذا الطالبُ مُدَرِّسٌ جيداً uses اسم الفاعل (مُدَرِّسٌ = "one who teaches") in a context describing the student as being taught (the action falling on him); the correct word is اسم المفعول: هذا الطالبُ مُدَرَّسٌ جيداً (fatḥa before the last letter).',
  },
  {
    q: 'ما هو اسم الفاعل المؤنث من "كَاتِبٌ"؟\nWhat is the feminine form of the اسم الفاعل كَاتِبٌ?',
    options: [
      'كَاتِبَةٌ\nkātibatun — a female writer',
      'كُتَّابٌ\nkuttābun — writers (broken plural)',
      'مَكْتُوبَةٌ\nmaktūbatun — written (اسم مفعول, feminine)',
      'كِتَابَةٌ\nkitābatun — writing (verbal noun)',
    ],
    correctIndex: 0,
    a: 'اسم الفاعل يؤنث بزيادة تاء التأنيث المربوطة على صيغة المذكر، كسائر الأسماء: كَاتِبٌ ← كَاتِبَةٌ.\nLike most Arabic nouns, اسم الفاعل is made feminine by adding a تاء مربوطة to the masculine form: كَاتِبٌ becomes كَاتِبَةٌ.',
  },
  {
    q: 'اسم الفاعل من "هَنْدَسَ" هو "مُهَنْدِسٌ". حوّله إلى اسم المفعول من الفعل نفسه.\nThe اسم الفاعل of هَنْدَسَ is مُهَنْدِسٌ. Transform it into the اسم المفعول of the same verb.',
    options: [
      'مُهَنْدَسٌ\nmuhandasun — engineered/designed (fatḥa before the last letter)',
      'مُهَنْدِسُونَ\nmuhandisūna — engineers (plural, still اسم فاعل)',
      'هَنْدَسَ\nhandasa — he engineered (the verb itself)',
      'هَنْدَسَةٌ\nhandasatun — engineering (verbal noun)',
    ],
    correctIndex: 0,
    a: 'يكفي تغيير الكسرة قبل الآخر إلى فتحة للانتقال من اسم الفاعل إلى اسم المفعول في الأبواب المزيدة والرباعية: مُهَنْدِسٌ (فاعل) ← مُهَنْدَسٌ (مفعول)، بمعنى "الذي صُمِّم هندسياً".\nSwitching from kasra to fatḥa before the last letter is all it takes to move from اسم الفاعل to اسم المفعول in augmented and quadriliteral verbs: مُهَنْدِسٌ (active) becomes مُهَنْدَسٌ (passive), meaning "that which was engineered/designed."',
  },
  {
    q: 'أعرب "مَفْتُوحٌ" في: البابُ مَفْتُوحٌ.\nParse مَفْتُوحٌ in the sentence البابُ مَفْتُوحٌ ("The door is open").',
    options: [
      'خبر مرفوع\nPredicate (خبر), مرفوع',
      'نائب فاعل مرفوع\nThe نائب الفاعل, مرفوع (nominative)',
      'مفعول به منصوب\nDirect object (مفعول به), منصوب',
      'حال منصوب\nAdverbial state (حال), منصوب',
    ],
    correctIndex: 0,
    a: '"مَفْتُوحٌ" اسم مفعول يعمل هنا عمل الوصف، وهو خبر المبتدأ "البابُ"، فهو مرفوع؛ لا يُخلط بنائب الفاعل الذي يظهر فقط داخل جملة فعلية مبنية للمجهول لا في جملة اسمية كهذه.\nHere مَفْتُوحٌ is an اسم المفعول acting descriptively, serving as the خبر of the مبتدأ البابُ, hence مرفوع. It should not be confused with نائب الفاعل, which only appears inside a passive verbal sentence, not a nominal sentence like this one.',
  },
  {
    q: 'أيّ الكلمات التالية اسم مفعول لا اسم فاعل؟\nWhich of the following words is an اسم مفعول, not an اسم فاعل?',
    options: [
      'مَكْتُوبٌ\nmaktūbun — written',
      'كَاتِبٌ\nkātibun — writer',
      'طَالِبٌ\nṭālibun — seeker/student',
      'مُدَرِّسٌ\nmudarrisun — teacher',
    ],
    correctIndex: 0,
    a: '"مَكْتُوبٌ" على وزن مَفْعُولٌ، وهو وزن اسم المفعول من الثلاثي المجرد؛ أما كَاتِبٌ وطَالِبٌ ومُدَرِّسٌ فكلها على أوزان اسم الفاعل (فَاعِلٌ، أو مُفَعِّلٌ بكسرة قبل الآخر في المزيد).\nمَكْتُوبٌ is on the مَفْعُولٌ pattern, the اسم المفعول pattern for a bare Form I verb. كَاتِبٌ, طَالِبٌ, and مُدَرِّسٌ are all اسم الفاعل patterns instead (فَاعِلٌ for Form I, or a kasra-before-last pattern for augmented verbs).',
  },
  {
    q: 'أكمل: هذا الدرسُ ___ جيداً. (اسم مفعول من "علّم"، باب فَعَّلَ)\nComplete: هذا الدرسُ ___ جيداً — "This lesson is well taught" (اسم المفعول of علّم, Form II)',
    options: [
      'مُعَلَّمٌ\nmuʿallamun — taught (fatḥa before the last letter)',
      'مُعَلِّمٌ\nmuʿallimun — teacher (kasra before the last letter)',
      'عَلَّمَ\nʿallama — he taught (the verb itself)',
      'تَعَلَّمَ\ntaʿallama — he learned (Form V verb)',
    ],
    correctIndex: 0,
    a: 'الجملة تصف الدرس بأنه وقع عليه التعليم، فتحتاج اسم المفعول بفتحة قبل الآخر: "مُعَلَّمٌ"، لا اسم الفاعل "مُعَلِّمٌ" بكسرة.\nThe sentence describes the lesson as the thing that was taught — it needs اسم المفعول, with fatḥa before the last letter: مُعَلَّمٌ, not اسم الفاعل مُعَلِّمٌ with kasra.',
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
            Topic 52 of 62
          </p>
          <h1 className="font-serif tracking-[-0.02em] text-3xl font-bold text-foreground leading-tight mb-3">
            <span
              dir="rtl"
              lang="ar"
              style={{ fontFamily: "'Noto Naskh Arabic', serif" }}
              className="mr-2"
            >
              اسم الفاعل واسم المفعول
            </span>
            — Active &amp; Passive Participles
          </h1>
          <p className="text-muted-foreground text-base max-w-xl">
            <bdi lang="ar">اسم الفاعل</bdi> names who does the action; <bdi lang="ar">اسم المفعول</bdi> names what it was done
            to. Form I uses two fixed patterns — <bdi lang="ar">فَاعِلٌ</bdi> (<bdi lang="ar">كَاتِبٌ</bdi>، <bdi lang="ar">طَالِبٌ</bdi>) and{' '}
            <bdi lang="ar">مَفْعُولٌ</bdi> (<bdi lang="ar">مَكْتُوبٌ</bdi>، <bdi lang="ar">مَفْتُوحٌ</bdi>). Forms II–X instead replace the{' '}
            <bdi lang="ar">مضارع</bdi> prefix with <bdi lang="ar">مُـ</bdi>, then split on a single vowel: kasra before the last
            letter for <span className="font-medium text-foreground"><bdi lang="ar">اسم الفاعل</bdi></span> (<bdi lang="ar">مُدَرِّسٌ</bdi>،{' '}
            <bdi lang="ar">مُهَنْدِسٌ</bdi>), fatḥa for <span className="font-medium text-foreground"><bdi lang="ar">اسم المفعول</bdi></span> (
            <bdi lang="ar">مُعَلَّمٌ</bdi>).
          </p>
        </div>
      </div>
      <div className="mx-auto w-[min(720px,calc(100%-2rem))] py-8">
        <QuizCarousel items={quizItems} />
      </div>
    </main>
  )
}

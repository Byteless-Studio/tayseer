import { createFileRoute, Link } from '@tanstack/react-router'
import { QuizCarousel } from '#/components/QuizCarousel'
import type { StrictQuizItem } from '#/routes/challenges/-quiz-types'

export const Route = createFileRoute('/challenges/grammar/mafool-liajlih/')({
  head: () => ({ meta: [{ title: "Al-Maf‘ūl li-Ajlihi — Grammar — Tayseer" }] }),
  component: TopicPage,
})

const quizItems: StrictQuizItem[] = [
  {
    q: 'ما هو المفعول لأجله؟\nWhat is المفعول لأجله?',
    options: [
      'مصدر منصوب يبيّن سبب وقوع الفعل\nAn accusative مصدر (verbal noun) that gives the reason the action happened',
      'مصدر منصوب من نفس جذر الفعل يفيد التوكيد\nAn accusative مصدر sharing the verb\'s own root, expressing emphasis',
      'اسم مرفوع هو فاعل الجملة\nA nominative noun that is the subject of the sentence',
      'اسم مجرور بحرف جر يبيّن المكان\nA genitive noun after a preposition, showing location',
    ],
    correctIndex: 0,
    a: 'المفعول لأجله مصدر منصوب يذكر سبب وقوع الفعل، ويجيب عن سؤال "لماذا؟".\nالمفعول لأجله is an accusative مصدر that states the reason behind an action — it answers the question "لماذا؟" (why?).',
  },
  {
    q: 'ما إعراب المفعول لأجله دائماً؟\nWhat case is المفعول لأجله always in?',
    options: [
      'منصوب دائماً\nAlways accusative (منصوب)',
      'مرفوع دائماً\nAlways nominative (مرفوع)',
      'مجرور دائماً\nAlways genitive (مجرور)',
      'مبني على الفتح دائماً\nAlways built (مبني) on fatḥah',
    ],
    correctIndex: 0,
    a: 'المفعول لأجله مصدر منصوب دائماً، يبيّن سبب الفعل الذي قبله.\nالمفعول لأجله is always an accusative مصدر, giving the reason for the verb that precedes it.',
  },
  {
    q: 'قُمْتُ إِجْلَالًا لِلْمُدَرِّسِ — ما إعراب "إِجْلَالًا"؟\nIn قُمْتُ إِجْلَالًا لِلْمُدَرِّسِ ("I stood up out of respect for the teacher"), what is the parse of إِجْلَالًا?',
    options: [
      'مفعول لأجله منصوب يبيّن سبب القيام\nمفعول لأجله, accusative, giving the reason for standing up',
      'حال منصوب يبيّن هيئة الفاعل\nحال, accusative, describing the state of the فاعل',
      'مفعول مطلق منصوب من جذر الفعل نفسه\nمفعول مطلق, accusative, from the verb\'s own root',
      'مفعول به منصوب\nDirect object (مفعول به), accusative',
    ],
    correctIndex: 0,
    a: '"إِجْلَالًا" مصدر منصوب من جذر مختلف عن فعل "قُمْتُ"، يبيّن سبب القيام: الإجلال والاحترام للمدرِّس. فهو مفعول لأجله.\nإِجْلَالًا is an accusative مصدر from a root different than قُمْتُ — it explains why he stood: out of respect for the teacher. That makes it مفعول لأجله.',
  },
  {
    q: 'سَافَرَ طَلَبًا لِلْعِلْمِ — ما إعراب "طَلَبًا"؟\nIn سَافَرَ طَلَبًا لِلْعِلْمِ ("He traveled seeking knowledge"), what is the parse of طَلَبًا?',
    options: [
      'مفعول لأجله منصوب يبيّن سبب السفر\nمفعول لأجله, accusative, giving the reason for the travel',
      'فاعل مرفوع\nSubject (فاعل), nominative',
      'مضاف إليه مجرور\nمضاف إليه, genitive',
      'نعت منصوب لـ"سافر"\nAn accusative نعت for سافر',
    ],
    correctIndex: 0,
    a: '"طَلَبًا" مصدر منصوب من جذر مختلف عن فعل "سَافَرَ"، يبيّن سبب السفر: طلب العلم. فهو مفعول لأجله.\nطَلَبًا is an accusative مصدر from a root different than سَافَرَ — it gives the reason for the travel: seeking knowledge. That makes it مفعول لأجله.',
  },
  {
    q: 'أيّ سؤال يجيب عنه المفعول لأجله؟\nWhat question does المفعول لأجله answer?',
    options: [
      'لِمَاذَا؟\nلِمَاذَا؟ ("why?")',
      'كَيْفَ؟\nكَيْفَ؟ ("how?")',
      'كَمْ مَرَّةً؟\nكَمْ مَرَّةً؟ ("how many times?")',
      'أَيْنَ؟\nأَيْنَ؟ ("where?")',
    ],
    correctIndex: 0,
    a: 'المفعول لأجله يجيب عن سؤال "لماذا؟"، فهو يبيّن الدافع أو السبب وراء وقوع الفعل.\nالمفعول لأجله answers "لماذا؟" — it states the motive or reason behind the action.',
  },
  {
    q: 'ما الفرق بين المفعول لأجله والمفعول المطلق من حيث الجذر؟\nWhat is the root-related difference between المفعول لأجله and المفعول المطلق?',
    options: [
      'المفعول لأجله من جذر مختلف عن الفعل ويبيّن السبب، أما المفعول المطلق فمن نفس جذر الفعل\nالمفعول لأجله comes from a root different than the verb and gives the reason, while المفعول المطلق shares the verb\'s own root',
      'كلاهما من نفس جذر الفعل دائماً\nBoth always share the verb\'s own root',
      'المفعول لأجله من نفس جذر الفعل، والمفعول المطلق من جذر مختلف\nالمفعول لأجله shares the verb\'s root, while المفعول المطلق comes from a different root',
      'لا فرق بينهما إطلاقاً\nThere is no difference between them at all',
    ],
    correctIndex: 0,
    a: 'المفعول لأجله مصدر من جذر مختلف عن فعله، يجيب عن "لماذا" (سَافَرَ طَلَبًا لِلْعِلْمِ). المفعول المطلق مصدر من نفس جذر فعله، يؤكده أو يصف نوعه أو عدده (ضَرَبْتُ ضَرْبَتَيْنِ).\nالمفعول لأجله is a مصدر from a root different than its verb, answering "why" (سَافَرَ طَلَبًا لِلْعِلْمِ). المفعول المطلق is a مصدر sharing the verb\'s own root, emphasizing, describing, or counting it (ضَرَبْتُ ضَرْبَتَيْنِ).',
  },
  {
    q: 'أكمل: قُمْتُ ___ لِلْمُدَرِّسِ (يبيّن سبب القيام: الاحترام)\nComplete: قُمْتُ ___ لِلْمُدَرِّسِ (giving the reason for standing: respect)',
    options: [
      'إِجْلَالًا\nijlālan — "out of respect"',
      'قِيَامًا\nqiyāman — "a standing" (same root as قُمْتُ)',
      'جَالِسًا\njālisan — "sitting" (اسم فاعل)',
      'إِجْلَالٌ\nijlālun — "respect" (مرفوع)',
    ],
    correctIndex: 0,
    a: 'المفعول لأجله يجب أن يكون منصوباً ومن جذر مختلف عن الفعل؛ فالجواب الصحيح "إِجْلَالًا" بالفتحة والتنوين، من جذر (ج ل ل) لا (ق و م).\nالمفعول لأجله must be accusative and from a root different than the verb. The correct fill is إِجْلَالًا — fatḥah with تنوين, from the root ج-ل-ل, not ق-و-م.',
  },
  {
    q: 'أكمل: سَافَرَ ___ لِلْعِلْمِ (يبيّن سبب السفر)\nComplete: سَافَرَ ___ لِلْعِلْمِ (giving the reason for the travel)',
    options: [
      'طَلَبًا\nṭalaban — "seeking"',
      'سَفَرًا\nsafaran — "a journey" (same root as سافر, would be مفعول مطلق not لأجله)',
      'طَالِبًا\nṭāliban — "a seeker/student" (اسم فاعل)',
      'طَلَبٌ\nṭalabun — "a seeking" (مرفوع)',
    ],
    correctIndex: 0,
    a: 'الجواب الصحيح "طَلَبًا": مصدر منصوب من جذر مختلف عن "سَافَرَ"، يبيّن سبب السفر وهو طلب العلم.\nThe correct fill is طَلَبًا — an accusative مصدر from a root different than سَافَرَ, explaining the reason for the travel: seeking knowledge.',
  },
  {
    q: 'أيّ جملة فيها خطأ لأن "المفعول لأجله" فيها من نفس جذر الفعل؟\nWhich sentence is wrong because its intended المفعول لأجله shares the verb\'s own root?',
    options: [
      'قُمْتُ إِجْلَالًا لِلْمُدَرِّسِ\nqumtu ijlālan li-l-mudarrisi — "I stood out of respect for the teacher"',
      'قُمْتُ قِيَامًا لِلْمُدَرِّسِ (يُراد بها بيان السبب)\nqumtu qiyāman li-l-mudarrisi (intended to state the reason)',
      'سَافَرَ طَلَبًا لِلْعِلْمِ\nsāfara ṭalaban li-l-‘ilmi — "He traveled seeking knowledge"',
      'وَقَفْتُ احْتِرَامًا لِلضَّيْفِ\nwaqaftu iḥtirāman li-ḍ-ḍayfi — "I stood out of respect for the guest"',
    ],
    correctIndex: 1,
    a: '"قُمْتُ قِيَامًا لِلْمُدَرِّسِ" لا يصلح مفعولاً لأجله لأن "قِيَامًا" من نفس جذر "قُمْتُ" (ق و م)؛ هذا يجعله مفعولاً مطلقاً مؤكِّداً للفعل، لا مبيّناً لسببه.\nقُمْتُ قِيَامًا لِلْمُدَرِّسِ cannot serve as مفعول لأجله because قِيَامًا shares the root ق-و-م with قُمْتُ — that makes it a مفعول مطلق emphasizing the verb, not a reason for it.',
  },
  {
    q: 'أيّ جملة فيها خطأ في إعراب المفعول لأجله؟\nWhich sentence has an error in the case of its المفعول لأجله?',
    options: [
      'قُمْتُ إِجْلَالًا لِلْمُدَرِّسِ\nqumtu ijlālan li-l-mudarrisi — "I stood out of respect for the teacher"',
      'قُمْتُ إِجْلَالٌ لِلْمُدَرِّسِ\nqumtu ijlālun li-l-mudarrisi',
      'سَافَرَ طَلَبًا لِلْعِلْمِ\nsāfara ṭalaban li-l-‘ilmi — "He traveled seeking knowledge"',
      'اجْتَهَدَ رَغْبَةً فِي النَّجَاحِ\nijtahada raghbatan fī n-najāḥi — "He worked hard, desiring success"',
    ],
    correctIndex: 1,
    a: '"قُمْتُ إِجْلَالٌ لِلْمُدَرِّسِ" خطأ: المفعول لأجله منصوب دائماً، والصواب "إِجْلَالًا" بالفتحة لا "إِجْلَالٌ" بالضمة.\nقُمْتُ إِجْلَالٌ لِلْمُدَرِّسِ is wrong: المفعول لأجله must always be accusative — the correct form is إِجْلَالًا with fatḥah, not إِجْلَالٌ with ḍammah.',
  },
  {
    q: 'ما علامة نصب "إِجْلَالًا" في: قُمْتُ إِجْلَالًا لِلْمُدَرِّسِ؟\nWhat is the accusative marker on إِجْلَالًا in قُمْتُ إِجْلَالًا لِلْمُدَرِّسِ?',
    options: [
      'الفتحة الظاهرة مع تنوين النصب، لأنه اسم مفرد نكرة\nAn overt fatḥah with تنوين النصب, since it is a singular indefinite noun',
      'الياء، لأنه جمع مذكر سالم\nA yāʾ, because it is a sound masculine plural',
      'الألف، لأنه من الأسماء الخمسة\nAn alif, because it is one of the five nouns',
      'كسرة، لأنه ممنوع من الصرف\nA kasrah, because it is a diptote',
    ],
    correctIndex: 0,
    a: '"إِجْلَالًا" اسم مفرد نكرة، فعلامة نصبه الفتحة الظاهرة، ويظهر التنوين لأنه غير مضاف وغير معرف.\nإِجْلَالًا is a singular indefinite noun, so it takes an overt fatḥah as its accusative marker, with تنوين since it is neither مضاف nor definite.',
  },
  {
    q: 'اشتقّ المصدر المناسب ليكون مفعولاً لأجله بمعنى "خوفاً من كذا" في جملة: هَرَبَ ___ مِنَ الْأَسَدِ\nDerive the right مصدر to serve as مفعول لأجله meaning "out of fear" in: هَرَبَ ___ مِنَ الْأَسَدِ ("He fled ___ the lion")',
    options: [
      'خَوْفًا\nkhawfan — "out of fear"',
      'هُرُوبًا\nhurūban — "a fleeing" (same root as هرب, would be مفعول مطلق)',
      'خَائِفًا\nkhā’ifan — "afraid" (اسم فاعل, functions as حال not سبب)',
      'خَوْفٌ\nkhawfun — "fear" (مرفوع)',
    ],
    correctIndex: 0,
    a: '"خَوْفًا" مصدر منصوب من جذر (خ و ف) مختلف عن فعل "هَرَبَ"، يبيّن سبب الهروب: الخوف. فهو مفعول لأجله صحيح.\nخَوْفًا is an accusative مصدر from the root خ-و-ف, different than هَرَبَ — it states the reason for fleeing: fear. This makes it a valid مفعول لأجله.',
  },
  {
    q: 'أيّ كلمة في الجملة التالية هي المفعول لأجله؟ اجْتَهَدَ الطَّالِبُ رَغْبَةً فِي النَّجَاحِ\nWhich word in اجْتَهَدَ الطَّالِبُ رَغْبَةً فِي النَّجَاحِ ("The student worked hard, desiring success") is المفعول لأجله?',
    options: [
      'رَغْبَةً\nraghbatan — "desiring"',
      'الطَّالِبُ\naṭ-ṭālibu — "the student"',
      'النَّجَاحِ\nan-najāḥi — "success"',
      'اجْتَهَدَ\nijtahada — "worked hard" (the verb)',
    ],
    correctIndex: 0,
    a: '"رَغْبَةً" مصدر منصوب من جذر مختلف عن "اجْتَهَدَ"، يبيّن سبب الاجتهاد: الرغبة في النجاح. فهو المفعول لأجله.\nرَغْبَةً is an accusative مصدر from a root different than اجْتَهَدَ — it explains why the student worked hard: a desire for success. That makes it المفعول لأجله.',
  },
  {
    q: 'قُمْتُ إِجْلَالًا لِلْمُدَرِّسِ — لماذا لا يصح اعتبار "إِجْلَالًا" حالاً؟\nIn قُمْتُ إِجْلَالًا لِلْمُدَرِّسِ, why can إِجْلَالًا not be treated as حال?',
    options: [
      'لأن الحال يبيّن هيئة صاحبه وقت الفعل، أما "إِجْلَالًا" فيبيّن سبب الفعل، وهو مصدر لا اسم هيئة\nBecause الحال describes the state of its صاحب at the moment of the verb, while إِجْلَالًا gives the reason for the verb — it is a مصدر, not a description of a state',
      'لأن الحال لا يكون منصوباً أبداً\nBecause الحال is never accusative',
      'لأن "إِجْلَالًا" مرفوع لا منصوب\nBecause إِجْلَالًا is nominative, not accusative',
      'لا فرق فعلياً؛ الكلمتان تؤديان نفس الوظيفة تماماً\nThere is no real difference — the two serve exactly the same function',
    ],
    correctIndex: 0,
    a: 'الحال يجيب عن "كيف؟" ويصف هيئة صاحبه وقت وقوع الفعل (كـ"باسمًا" في دخل المدرِّسُ باسمًا)، بينما المفعول لأجله يجيب عن "لماذا؟" ويبيّن دافع الفعل، وهو مصدر معنوي لا صورة حسية.\nالحال answers "how?" and describes the physical or emotional state of its صاحب at the moment of the verb (like بَاسِمًا in دخل المدرِّسُ باسمًا). المفعول لأجله instead answers "why?" and states the motive behind the action — it is an abstract مصدر, not a description of appearance.',
  },
  {
    q: 'أيّ جملة تستعمل المفعول لأجله بشكل صحيح؟\nWhich sentence correctly uses المفعول لأجله?',
    options: [
      'وَقَفْتُ تَقْدِيرًا لِجُهُودِهِ\nwaqaftu taqdīran li-juhūdihi — "I stood, in appreciation of his efforts"',
      'وَقَفْتُ وُقُوفًا لِجُهُودِهِ\nwaqaftu wuqūfan li-juhūdihi (same root as the verb)',
      'وَقَفْتُ تَقْدِيرٌ لِجُهُودِهِ\nwaqaftu taqdīrun li-juhūdihi',
      'وَقَفْتُ وَاقِفًا لِجُهُودِهِ\nwaqaftu wāqifan li-juhūdihi',
    ],
    correctIndex: 0,
    a: '"وَقَفْتُ تَقْدِيرًا لِجُهُودِهِ" صحيحة: "تَقْدِيرًا" مصدر منصوب من جذر مختلف عن "وَقَفْتُ"، يبيّن سبب الوقوف. الخيارات الأخرى إما من نفس جذر الفعل أو خاطئة الإعراب أو اسم فاعل لا مصدر.\nوَقَفْتُ تَقْدِيرًا لِجُهُودِهِ is correct: تَقْدِيرًا is an accusative مصدر from a root different than وَقَفْتُ, giving the reason for standing. The other options either share the verb\'s root, carry the wrong case, or use an اسم فاعل instead of a مصدر.',
  },
  {
    q: 'حَضَرْتُ الِاحْتِفَالَ حُبًّا فِي وَطَنِي — ما إعراب "حُبًّا"؟\nIn حَضَرْتُ الِاحْتِفَالَ حُبًّا فِي وَطَنِي ("I attended the celebration out of love for my homeland"), what is the parse of حُبًّا?',
    options: [
      'مفعول لأجله منصوب يبيّن سبب الحضور\nمفعول لأجله, accusative, giving the reason for attending',
      'مفعول به ثانٍ منصوب\nA second direct object, accusative',
      'حال منصوب\nحال, accusative',
      'نعت مجرور\nA genitive نعت',
    ],
    correctIndex: 0,
    a: '"حُبًّا" مصدر منصوب من جذر مختلف عن "حَضَرْتُ"، يبيّن سبب الحضور: حب الوطن. فهو مفعول لأجله.\nحُبًّا is an accusative مصدر from a root different than حَضَرْتُ — it explains the reason for attending: love of homeland. That makes it مفعول لأجله.',
  },
  {
    q: 'ما الشرط الأساسي الذي يميّز المفعول لأجله عن أي مصدر منصوب آخر؟\nWhat is the key condition that distinguishes المفعول لأجله from any other accusative مصدر?',
    options: [
      'أن يكون مصدراً قلبياً يبيّن الدافع النفسي أو السبب وراء الفعل، ومن جذر مختلف عنه\nIt must be an abstract, "inner" مصدر expressing the psychological motive or reason behind the action, and from a root different than the verb',
      'أن يكون من نفس جذر الفعل تماماً\nIt must share the verb\'s own root exactly',
      'أن يكون مثنى دائماً\nIt must always be dual',
      'أن يكون مجروراً بحرف جر\nIt must be genitive, governed by a preposition',
    ],
    correctIndex: 0,
    a: 'المفعول لأجله مصدر قلبي (يبيّن دافعاً نفسياً كالإجلال أو الطلب أو الخوف)، من جذر مختلف عن الفعل، ويجيب عن "لماذا؟".\nالمفعول لأجله is an abstract, "heart" مصدر — expressing a psychological motive like respect, seeking, or fear — from a root different than the verb, answering "لماذا؟" (why?).',
  },
  {
    q: 'صحّح: سَافَرَ سَفَرًا لِلْعِلْمِ (يُراد بها بيان السبب)\nCorrect: سَافَرَ سَفَرًا لِلْعِلْمِ (intended to give the reason)',
    options: [
      'سَافَرَ طَلَبًا لِلْعِلْمِ\nsāfara ṭalaban li-l-‘ilmi — "He traveled seeking knowledge"',
      'سَافَرَ سَفَرًا لِلْعِلْمِ (unchanged)\nsāfara safaran li-l-‘ilmi (unchanged)',
      'سَافَرَ السَّفَرَ لِلْعِلْمِ\nsāfara s-safara li-l-‘ilmi',
      'سَافَرَ سَافِرًا لِلْعِلْمِ\nsāfara sāfiran li-l-‘ilmi',
    ],
    correctIndex: 0,
    a: '"سَفَرًا" من نفس جذر "سَافَرَ" (س ف ر)، فيصلح مفعولاً مطلقاً مؤكِّداً لا مفعولاً لأجله؛ لبيان السبب لا بد من مصدر من جذر مختلف، مثل "طَلَبًا".\nسَفَرًا shares the root س-ف-ر with سَافَرَ, so it can only serve as an emphasizing مفعول مطلق, not a reason. To state the reason, a مصدر from a different root is needed — طَلَبًا.',
  },
  {
    q: 'اسْتَيْقَظَ الطَّالِبُ مُبَكِّرًا اسْتِعْدَادًا لِلِامْتِحَانِ — ما إعراب "اسْتِعْدَادًا"؟\nIn اسْتَيْقَظَ الطَّالِبُ مُبَكِّرًا اسْتِعْدَادًا لِلِامْتِحَانِ ("The student woke up early, in preparation for the exam"), what is the parse of اسْتِعْدَادًا?',
    options: [
      'مفعول لأجله منصوب يبيّن سبب الاستيقاظ المبكر\nمفعول لأجله, accusative, giving the reason for waking up early',
      'حال منصوب يبيّن هيئة الطالب\nحال, accusative, describing the student\'s physical state',
      'مفعول مطلق منصوب من جذر الفعل نفسه\nمفعول مطلق, accusative, from the verb\'s own root',
      'نعت منصوب لـ"مُبَكِّرًا"\nAn accusative نعت for مُبَكِّرًا',
    ],
    correctIndex: 0,
    a: '"اسْتِعْدَادًا" مصدر منصوب من جذر (ع د د) مختلف عن فعل "اسْتَيْقَظَ" (ي ق ظ)، يبيّن سبب الاستيقاظ المبكر: الاستعداد للامتحان. فهو مفعول لأجله.\nاسْتِعْدَادًا is an accusative مصدر from the root ع-د-د, different than اسْتَيْقَظَ (root ي-ق-ظ) — it gives the reason for waking up early: preparing for the exam. That makes it مفعول لأجله.',
  },
  {
    q: 'لخّص: أيّ العناصر التالية تصف المفعول لأجله وصفاً صحيحاً كاملاً؟\nSummarize: which of the following fully and correctly describes المفعول لأجله?',
    options: [
      'مصدر منصوب من جذر مختلف عن الفعل، يبيّن الدافع النفسي أو السبب وراء وقوعه، ويجيب عن سؤال "لماذا؟"\nAn accusative مصدر from a root different than the verb, giving the psychological motive or reason behind it, answering "لماذا؟" (why?)',
      'مصدر منصوب من نفس جذر الفعل يفيد التوكيد أو النوع أو العدد\nAn accusative مصدر from the verb\'s own root, expressing emphasis, manner, or number',
      'اسم نكرة منصوب يبيّن هيئة الفاعل وقت الفعل\nAn indefinite, accusative noun describing the فاعل\'s state at the moment of the verb',
      'اسم منصوب بعد واو المعية يفيد المصاحبة\nAn accusative noun after واو المعية, expressing accompaniment',
    ],
    correctIndex: 0,
    a: 'هذا هو التعريف الجامع: المفعول لأجله مصدر منصوب، من جذر مختلف عن فعله، يبيّن سبب وقوعه، ويجيب عن "لماذا؟" — كما في قُمْتُ إِجْلَالًا لِلْمُدَرِّسِ وسَافَرَ طَلَبًا لِلْعِلْمِ.\nThis is the complete definition: المفعول لأجله is an accusative مصدر, from a root different than its verb, giving the reason the action happened, answering "لماذا؟" — as in قُمْتُ إِجْلَالًا لِلْمُدَرِّسِ and سَافَرَ طَلَبًا لِلْعِلْمِ.',
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
            Topic 55 of 62
          </p>
          <h1 className="font-serif tracking-[-0.02em] text-3xl font-bold text-foreground leading-tight mb-3">
            <span
              dir="rtl"
              lang="ar"
              style={{ fontFamily: "'Noto Naskh Arabic', serif" }}
              className="mr-2"
            >
              المفعول لأجله
            </span>
            — The Accusative of Purpose
          </h1>
          <p className="text-muted-foreground text-base max-w-xl">
            <bdi lang="ar">المفعول لأجله</bdi> is an accusative <bdi lang="ar">مصدر</bdi> that
            states the reason behind an action — قُمْتُ إِجْلَالًا لِلْمُدَرِّسِ, "I stood up out
            of respect for the teacher," or سَافَرَ طَلَبًا لِلْعِلْمِ, "he traveled seeking
            knowledge." It answers "لماذا؟" (why?). The key test that separates it from{' '}
            <span className="font-medium text-foreground"><bdi lang="ar">المفعول المطلق</bdi></span>{' '}
            is the root: المفعول لأجله always comes from a <em>different</em> root than the verb,
            while المفعول المطلق shares the verb's own root.
          </p>
        </div>
      </div>
      <div className="mx-auto w-[min(720px,calc(100%-2rem))] py-8">
        <QuizCarousel items={quizItems} />
      </div>
    </main>
  )
}

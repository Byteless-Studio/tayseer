import { createFileRoute, Link } from '@tanstack/react-router'
import { QuizCarousel } from '#/components/QuizCarousel'
import type { StrictQuizItem } from '#/routes/challenges/-quiz-types'

export const Route = createFileRoute('/challenges/grammar/mafool-mutlaq/')({
  head: () => ({ meta: [{ title: 'Al-Maf‘ūl al-Muṭlaq — Grammar — Tayseer' }] }),
  component: TopicPage,
})

const quizItems: StrictQuizItem[] = [
  {
    q: 'ما هو المفعول المطلق؟\nWhat is المفعول المطلق?',
    options: [
      'مصدر منصوب من نفس جذر الفعل، يفيد التوكيد أو النوع أو العدد\nAn accusative مصدر (verbal noun) from the same root as the verb, expressing emphasis, manner, or number of occurrences',
      'اسم مجرور يأتي بعد حرف جر\nA genitive noun that follows a preposition',
      'اسم مرفوع هو فاعل الجملة\nA nominative noun that is the subject of the sentence',
      'مصدر من جذر مختلف عن الفعل يبيّن السبب\nA مصدر from a root different than the verb, showing the reason for the action',
    ],
    correctIndex: 0,
    a: 'المفعول المطلق مصدر منصوب مشتق من نفس جذر الفعل الذي قبله، وله ثلاث وظائف: التوكيد، أو بيان النوع، أو بيان العدد.\nالمفعول المطلق is an accusative مصدر sharing the same root as the verb before it. It serves one of three functions: emphasizing the verb, describing its manner/type, or counting how many times it happened.',
  },
  {
    q: 'ما إعراب المفعول المطلق دائماً؟\nWhat case is المفعول المطلق always in?',
    options: [
      'منصوب دائماً\nAlways accusative (منصوب)',
      'مرفوع دائماً\nAlways nominative (مرفوع)',
      'مجرور دائماً\nAlways genitive (مجرور)',
      'مجزوم دائماً\nAlways jussive (مجزوم)',
    ],
    correctIndex: 0,
    a: 'المفعول المطلق منصوب دائماً، مهما كانت وظيفته (توكيد أو نوع أو عدد).\nالمفعول المطلق is always accusative (منصوب), regardless of which of its three functions it is serving.',
  },
  {
    q: 'تَكَلَّمَ تَكْلِيمًا — ما وظيفة المفعول المطلق هنا؟\nIn تَكَلَّمَ تَكْلِيمًا ("He spoke, most definitely"), what function does المفعول المطلق serve here?',
    options: [
      'التوكيد — تأكيد وقوع الفعل نفسه\nEmphasis — reinforcing that the action of speaking definitely happened',
      'بيان النوع — وصف طريقة الكلام\nDescribing manner — how the speaking was done',
      'بيان العدد — كم مرة تكلم\nCounting — how many times he spoke',
      'بيان السبب — لماذا تكلم\nGiving the reason — why he spoke',
    ],
    correctIndex: 0,
    a: '"تَكْلِيمًا" مصدر مؤكِّد لفعله من نفس الجذر، بلا وصف زائد ولا عدد، فوظيفته توكيد وقوع الفعل.\nتَكْلِيمًا is a bare مصدر from the same root, with no extra description or count attached — its only job is to emphasize that the act of speaking truly occurred.',
  },
  {
    q: 'جَلَسَ جُلُوسَ الْمَلِكِ — ما وظيفة المفعول المطلق هنا، وما تركيبه؟\nIn جَلَسَ جُلُوسَ الْمَلِكِ ("He sat as a king sits"), what function does المفعول المطلق serve, and how is it built?',
    options: [
      'بيان النوع، وهو مضاف إلى "الملِكِ" في تركيب إضافة\nDescribing manner/type, and it forms an إضافة with الملِكِ as its مضاف إليه',
      'بيان العدد، وهو مثنى\nCounting occurrences, and it is dual',
      'التوكيد فقط بلا إضافة\nPure emphasis, with no إضافة involved',
      'مفعول لأجله يبيّن السبب\nA مفعول لأجله showing the reason',
    ],
    correctIndex: 0,
    a: '"جُلُوسَ" مفعول مطلق منصوب يبيّن نوع الجلوس (كجلوس الملك)، وهو مضاف، و"الملِكِ" مضاف إليه مجرور.\nجُلُوسَ is an accusative مفعول مطلق describing the manner of sitting — like a king\'s. It is itself a مضاف, with الملِكِ as the مضاف إليه, genitive.',
  },
  {
    q: 'ضَرَبْتُ ضَرْبَتَيْنِ — ما وظيفة المفعول المطلق هنا؟\nIn ضَرَبْتُ ضَرْبَتَيْنِ ("I struck twice"), what function does المفعول المطلق serve?',
    options: [
      'بيان العدد — كم مرة وقع الفعل\nCounting — how many times the action occurred',
      'بيان النوع — كيفية الضرب\nDescribing manner — how the striking was done',
      'التوكيد فقط\nPure emphasis only',
      'مفعول به ثانٍ\nA second direct object',
    ],
    correctIndex: 0,
    a: '"ضَرْبَتَيْنِ" مصدر مثنى منصوب من فعل "ضَرَبَ"، يبيّن عدد مرات وقوع الفعل: مرتين.\nضَرْبَتَيْنِ is a dual مصدر from ضَرَبَ, accusative, showing the action happened exactly twice.',
  },
  {
    q: 'ما علامة نصب "ضَرْبَتَيْنِ" في: ضَرَبْتُ ضَرْبَتَيْنِ؟\nWhat is the accusative marker on ضَرْبَتَيْنِ in ضَرَبْتُ ضَرْبَتَيْنِ?',
    options: [
      'الياء، لأنه مثنى\nA yāʾ, because it is dual',
      'الفتحة الظاهرة، لأنه مفرد\nAn overt fatḥah, because it is singular',
      'الألف، لأنه من الأسماء الخمسة\nAn alif, because it is one of the five nouns',
      'الكسرة، لأنه ممنوع من الصرف\nA kasrah, because it is a diptote',
    ],
    correctIndex: 0,
    a: 'المثنى يُنصب بالياء بدلاً من الفتحة؛ فـ"ضَرْبَتَيْنِ" منصوب بالياء لأنه مصدر مثنى.\nDual nouns take yāʾ as their accusative marker instead of fatḥah, so ضَرْبَتَيْنِ is accusative by yāʾ since it is a dual مصدر.',
  },
  {
    q: 'اشتقّ المصدر من الفعل "جَلَسَ" ليصلح مفعولاً مطلقاً.\nDerive the مصدر from جَلَسَ ("to sit") so it can serve as a مفعول مطلق.',
    options: [
      'جُلُوسًا\njulūsan — "a sitting"',
      'جَالِسًا\njālisan — "sitting" (اسم فاعل)',
      'مَجْلِسًا\nmajlisan — "a sitting-place" (اسم مكان)',
      'يَجْلِسُ\nyajlisu — "he sits" (present-tense verb)',
    ],
    correctIndex: 0,
    a: 'مصدر "جَلَسَ" هو "جُلُوسٌ"؛ ولأنه سيقع مفعولاً مطلقاً يُنصب فيصبح "جُلُوسًا".\nThe مصدر of جَلَسَ is جُلُوسٌ. Since it will serve as a مفعول مطلق, it takes the accusative ending: جُلُوسًا.',
  },
  {
    q: 'اشتقّ المصدر من الفعل "ضَرَبَ" ليصلح مفعولاً مطلقاً يبيّن العدد "مرة واحدة".\nDerive the مصدر from ضَرَبَ ("to strike") to serve as a مفعول مطلق meaning "once."',
    options: [
      'ضَرْبَةً\nḍarbatan — "one strike"',
      'ضَرْبَتَيْنِ\nḍarbatayni — "two strikes"',
      'ضَارِبًا\nḍāriban — "striking" (اسم فاعل)',
      'مَضْرُوبًا\nmaḍrūban — "struck" (اسم مفعول)',
    ],
    correctIndex: 0,
    a: 'مصدر المرة يُصاغ بزيادة تاء مربوطة على المصدر: "ضَرْبَة" تعني وقوع الفعل مرة واحدة، وتُنصب فتصير "ضَرْبَةً".\nThe مصدر المرة ("noun of a single occurrence") is formed by adding tāʾ marbūṭah to the مصدر: ضَرْبَة means the action happened exactly once, and in the accusative it is ضَرْبَةً.',
  },
  {
    q: 'أكمل: تَكَلَّمَ الْخَطِيبُ ___ (للتوكيد، من نفس جذر الفعل)\nComplete: تَكَلَّمَ الْخَطِيبُ ___ (for emphasis, from the same root as the verb)',
    options: [
      'تَكْلِيمًا\ntaklīman — "most definitely spoke"',
      'كَلَامًا كَثِيرًا\nkalāman kathīran — "a lot of talk" (different pattern)',
      'مُتَكَلِّمًا\nmutakalliman — "speaking" (اسم فاعل)',
      'كَلِمَةً\nkalimatan — "a word"',
    ],
    correctIndex: 0,
    a: 'المفعول المطلق المؤكِّد يأتي على مصدر الفعل نفسه بلا زيادة وصفية؛ فعل الفعل من Form V "تكلَّم" مصدره "تكليم" (بصيغة الفعل الرباعي)، فيصح "تَكَلَّمَ تَكْلِيمًا".\nThe emphasizing مفعول مطلق takes the verb\'s own مصدر with no extra description. Here the verb تكلَّم takes تكليمًا as its cognate مصدر, giving تَكَلَّمَ تَكْلِيمًا for pure emphasis.',
  },
  {
    q: 'أيّ جملة فيها خطأ في تركيب المفعول المطلق؟\nWhich sentence contains an error in its المفعول المطلق construction?',
    options: [
      'تَكَلَّمَ تَكْلِيمًا\ntakallama taklīman — "He spoke, most definitely"',
      'ضَرَبْتُ فَهْمًا\nḍarabtu fahman',
      'جَلَسَ جُلُوسَ الْمَلِكِ\njalasa julūsa l-maliki — "He sat as a king sits"',
      'ضَرَبْتُ ضَرْبَتَيْنِ\nḍarabtu ḍarbatayni — "I struck twice"',
    ],
    correctIndex: 1,
    a: '"ضَرَبْتُ فَهْمًا" خطأ: المفعول المطلق يجب أن يشترك مع الفعل في الجذر، و"فَهْمًا" من جذر (ف هـ م) لا (ض ر ب)، فلا يصلح مفعولاً مطلقاً لـ"ضَرَبْتُ".\nضَرَبْتُ فَهْمًا is wrong: المفعول المطلق must share the verb\'s own root, and فَهْمًا comes from the root ف-هـ-م, not ض-ر-ب — it cannot serve as a cognate object for ضَرَبْتُ.',
  },
  {
    q: 'أيّ جملة فيها خطأ يتعلق بإعراب المفعول المطلق؟\nWhich sentence has an error involving the case of المفعول المطلق?',
    options: [
      'تَكَلَّمَ تَكْلِيمًا\ntakallama taklīman — "He spoke, most definitely"',
      'تَكَلَّمَ تَكْلِيمٌ\ntakallama taklīmun',
      'ضَرَبْتُ ضَرْبَتَيْنِ\nḍarabtu ḍarbatayni — "I struck twice"',
      'جَلَسَ جُلُوسَ الْمَلِكِ\njalasa julūsa l-maliki — "He sat as a king sits"',
    ],
    correctIndex: 1,
    a: '"تَكَلَّمَ تَكْلِيمٌ" خطأ: المفعول المطلق منصوب دائماً، والصواب "تَكْلِيمًا" بالفتحة لا "تَكْلِيمٌ" بالضمة.\nتَكَلَّمَ تَكْلِيمٌ is wrong: المفعول المطلق must always be accusative — the correct form is تَكْلِيمًا with fatḥah, not تَكْلِيمٌ with ḍammah.',
  },
  {
    q: 'ما الفرق بين المفعول المطلق والمفعول لأجله من حيث الجذر؟\nWhat is the root-related difference between المفعول المطلق and المفعول لأجله?',
    options: [
      'المفعول المطلق من نفس جذر الفعل، أما المفعول لأجله فمن جذر مختلف يبيّن السبب\nالمفعول المطلق shares the verb\'s own root, while المفعول لأجله comes from a different root and gives the reason',
      'كلاهما من نفس جذر الفعل دائماً\nBoth always share the verb\'s own root',
      'المفعول لأجله من نفس جذر الفعل، والمفعول المطلق من جذر مختلف\nالمفعول لأجله shares the verb\'s root, while المفعول المطلق comes from a different root',
      'لا علاقة لأي منهما بالجذر\nNeither has any relationship to the root at all',
    ],
    correctIndex: 0,
    a: 'المفعول المطلق مصدر من نفس جذر فعله (ضَرَبْتُ ضَرْبَتَيْنِ)، بينما المفعول لأجله مصدر من جذر مختلف يجيب عن "لماذا" (سَافَرَ طَلَبًا لِلْعِلْمِ — طلب من جذر مختلف عن سافر).\nالمفعول المطلق is a مصدر from the same root as its verb (ضَرَبْتُ ضَرْبَتَيْنِ). المفعول لأجله, by contrast, is a مصدر from a different root that answers "why" (سَافَرَ طَلَبًا لِلْعِلْمِ — طَلَبًا comes from a different root than سافر).',
  },
  {
    q: 'ما علامة نصب "تَكْلِيمًا" في: تَكَلَّمَ تَكْلِيمًا؟\nWhat is the accusative marker on تَكْلِيمًا in تَكَلَّمَ تَكْلِيمًا?',
    options: [
      'الفتحة الظاهرة مع تنوين النصب، لأنه اسم مفرد نكرة\nAn overt fatḥah with تنوين النصب, since it is a singular indefinite noun',
      'الياء، لأنه جمع مذكر سالم\nA yāʾ, because it is a sound masculine plural',
      'الألف، لأنه مثنى\nAn alif, because it is dual',
      'حذف النون، لأنه من الأفعال الخمسة\nDropping the ن, because it is one of the five verbs',
    ],
    correctIndex: 0,
    a: '"تَكْلِيمًا" اسم مفرد نكرة، فعلامة نصبه الفتحة الظاهرة، ويظهر التنوين لأنه غير مضاف وغير معرف.\nتَكْلِيمًا is a singular indefinite noun, so it takes an overt fatḥah as its accusative marker, appearing with تنوين since it is neither مضاف nor definite.',
  },
  {
    q: 'أيّ جملة تستعمل المفعول المطلق لبيان النوع بشكل صحيح؟\nWhich sentence correctly uses المفعول المطلق to describe manner/type?',
    options: [
      'رَجَعَ رُجُوعَ الْمُنْتَصِرِ\nraja‘a ruju‘a l-muntaṣiri — "He returned as a victor returns"',
      'رَجَعَ رُجُوعًا\nraja‘a ruju‘an',
      'رَجَعَ رُجُوعَيْنِ\nraja‘a ruju‘ayni',
      'رَجَعَ الرُّجُوعُ\nraja‘a r-ruju‘u',
    ],
    correctIndex: 0,
    a: '"رُجُوعَ الْمُنْتَصِرِ" مفعول مطلق مضاف إلى ما بعده، فيبيّن نوع الرجوع (كرجوع المنتصر)، على نمط "جَلَسَ جُلُوسَ الْمَلِكِ".\nرُجُوعَ الْمُنْتَصِرِ is a مفعول مطلق in an إضافة construction, describing the manner of the return — like a victor\'s — following the same pattern as جَلَسَ جُلُوسَ الْمَلِكِ.',
  },
  {
    q: 'ما الفرق بين المفعول به والمفعول المطلق؟\nWhat is the difference between المفعول به (direct object) and المفعول المطلق (cognate object)?',
    options: [
      'المفعول به اسم يقع عليه فعل الفاعل وقد يكون من أي جذر، أما المفعول المطلق فمصدر من جذر الفعل نفسه يؤكده أو يصفه أو يعدّه\nالمفعول به is a noun the action falls upon and can be from any root, while المفعول المطلق is a مصدر from the verb\'s own root, emphasizing, describing, or counting it',
      'كلاهما يعني نفس الشيء بالضبط\nBoth mean exactly the same thing',
      'المفعول به لا يكون منصوباً أبداً\nالمفعول به is never accusative',
      'المفعول المطلق يقع عليه فعل الفاعل كالمفعول به\nالمفعول المطلق is something the action falls upon, just like المفعول به',
    ],
    correctIndex: 0,
    a: 'المفعول به (كـ"الكتابَ" في قرأتُ الكتابَ) اسم يقع عليه الفعل، من أي جذر. المفعول المطلق مصدر من جذر الفعل نفسه، ولا يقع عليه الفعل، بل يؤكده أو يصف نوعه أو يعدّ مرّاته.\nالمفعول به (like الكتابَ in قرأتُ الكتابَ) is a noun the verb acts upon, from any root. المفعول المطلق is a مصدر from the verb\'s own root — the action doesn\'t fall upon it; instead it emphasizes, characterizes, or counts the verb.',
  },
  {
    q: 'أكمل: ضَرَبْتُهُ ___ (يبيّن أن الضرب وقع مرة واحدة فقط)\nComplete: ضَرَبْتُهُ ___ (showing the striking happened only once)',
    options: [
      'ضَرْبَةً وَاحِدَةً\nḍarbatan wāḥidatan — "a single strike"',
      'ضَرْبَتَيْنِ\nḍarbatayni — "two strikes"',
      'ضَرْبًا\nḍarban — "striking" (bare emphasis, no count)',
      'ضَارِبًا\nḍāriban — "striking" (اسم فاعل)',
    ],
    correctIndex: 0,
    a: 'مصدر المرة "ضَرْبَة" منصوب يبيّن العدد، ويؤكَّد بكلمة "وَاحِدَة" لتوضيح أن الفعل وقع مرة واحدة بالضبط.\nThe مصدر المرة ضَرْبَة, accusative, shows the count, reinforced with وَاحِدَة to make clear the action happened exactly one time.',
  },
  {
    q: 'ما الوظائف الثلاث للمفعول المطلق؟\nWhat are the three functions of المفعول المطلق?',
    options: [
      'التوكيد، وبيان النوع، وبيان العدد\nEmphasis, describing manner/type, and counting occurrences',
      'الرفع، والنصب، والجر\nنominative, accusative, and genitive case',
      'الماضي، والمضارع، والأمر\nPast, present, and imperative tense',
      'الإفراد، والتثنية، والجمع\nSingular, dual, and plural',
    ],
    correctIndex: 0,
    a: 'المفعول المطلق يفيد إحدى ثلاث وظائف: توكيد الفعل (تَكَلَّمَ تَكْلِيمًا)، أو بيان نوعه (جَلَسَ جُلُوسَ الْمَلِكِ)، أو بيان عدد مرات وقوعه (ضَرَبْتُ ضَرْبَتَيْنِ).\nالمفعول المطلق serves one of three functions: emphasizing the verb (تَكَلَّمَ تَكْلِيمًا), describing its manner (جَلَسَ جُلُوسَ الْمَلِكِ), or counting how many times it occurred (ضَرَبْتُ ضَرْبَتَيْنِ).',
  },
  {
    q: 'كَتَبَ الطَّالِبُ ___ جَمِيلَةً — أيّ خيار يكمل الجملة بمفعول مطلق يبيّن النوع؟\nكَتَبَ الطَّالِبُ ___ جَمِيلَةً — which option completes the sentence with a مفعول مطلق describing manner?',
    options: [
      'كِتَابَةً\nkitābatan — "a writing" (منصوب, agreeing with the following adjective جَمِيلَةً)',
      'كَاتِبًا\nkātiban — "a writer" (اسم فاعل)',
      'مَكْتُوبًا\nmaktūban — "written" (اسم مفعول)',
      'كِتَابٌ\nkitābun — "a book" (مرفوع)',
    ],
    correctIndex: 0,
    a: '"كِتَابَةً" مفعول مطلق منصوب من جذر الفعل "كَتَبَ"، ووصفه بـ"جَمِيلَةً" يبيّن نوع الكتابة، أي: كَتَبَ الطالبُ كتابةً جميلةً.\nكِتَابَةً is an accusative مفعول مطلق from the root of كَتَبَ. Describing it with جَمِيلَةً shows the manner of the writing — كَتَبَ الطالبُ كتابةً جميلةً, "the student wrote beautifully."',
  },
  {
    q: 'أيّ الجمل التالية يستخدم المفعول المطلق بشكل غير صحيح للتوكيد؟\nWhich of the following sentences incorrectly uses المفعول المطلق for emphasis?',
    options: [
      'فَهِمَ الدَّرْسَ فَهْمًا\nfahima d-darsa fahman — "He understood the lesson, most certainly"',
      'فَهِمَ الدَّرْسَ إِدْرَاكًا\nfahima d-darsa idrākan',
      'كَتَبَ الرِّسَالَةَ كِتَابَةً\nkataba r-risālata kitābatan — "He wrote the letter, most certainly"',
      'شَرِبَ الْمَاءَ شُرْبًا\nshariba l-mā’a shurban — "He drank the water, most certainly"',
    ],
    correctIndex: 1,
    a: '"فَهِمَ الدَّرْسَ إِدْرَاكًا" خطأ: "إِدْرَاكًا" من جذر (د ر ك) لا (ف هـ م)، فلا يشترك مع الفعل في الجذر، فلا يصلح مفعولاً مطلقاً.\nفَهِمَ الدَّرْسَ إِدْرَاكًا is wrong: إِدْرَاكًا comes from the root د-ر-ك, not ف-هـ-م — it does not share the verb\'s root, so it cannot serve as a cognate مفعول مطلق.',
  },
  {
    q: 'لخّص: أيّ العناصر التالية تصف المفعول المطلق وصفاً صحيحاً كاملاً؟\nSummarize: which of the following fully and correctly describes المفعول المطلق?',
    options: [
      'مصدر منصوب من نفس جذر فعله، يفيد إما التوكيد أو بيان النوع (وغالباً بالإضافة) أو بيان العدد (وغالباً بالتثنية أو تاء المرة)\nAn accusative مصدر sharing the verb\'s own root, expressing either emphasis, manner (often via إضافة), or a count (often via the dual or tāʾ al-marrah)',
      'اسم مجرور بعد حرف جر يبيّن السبب\nA genitive noun after a preposition, giving the reason',
      'فعل ماضٍ مبني للمجهول\nA past-tense passive-voice verb',
      'اسم منادى مبني على الضم\nA vocative noun built on ḍamm',
    ],
    correctIndex: 0,
    a: 'هذا هو التعريف الجامع: المفعول المطلق مصدر منصوب من جذر فعله، وله ثلاث صور — توكيد بلا زيادة (تَكْلِيمًا)، أو بيان نوع بالإضافة (جُلُوسَ الْمَلِكِ)، أو بيان عدد بالتثنية أو مصدر المرة (ضَرْبَتَيْنِ).\nThis is the complete definition: المفعول المطلق is an accusative مصدر from the verb\'s own root, appearing in one of three forms — bare emphasis (تَكْلِيمًا), manner via إضافة (جُلُوسَ الْمَلِكِ), or a count via the dual or مصدر المرة (ضَرْبَتَيْنِ).',
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
            Topic 54 of 62
          </p>
          <h1 className="font-serif tracking-[-0.02em] text-3xl font-bold text-foreground leading-tight mb-3">
            <span
              dir="rtl"
              lang="ar"
              style={{ fontFamily: "'Noto Naskh Arabic', serif" }}
              className="mr-2"
            >
              المفعول المطلق
            </span>
            — The Absolute Object
          </h1>
          <p className="text-muted-foreground text-base max-w-xl">
            <bdi lang="ar">المفعول المطلق</bdi> is a <bdi lang="ar">مصدر</bdi> (verbal noun) built
            from the exact same root as the verb before it, always <bdi lang="ar">منصوب</bdi>. It
            plays one of three roles: emphasis (تَكَلَّمَ تَكْلِيمًا), manner or type, often via{' '}
            <bdi lang="ar">إضافة</bdi> (جَلَسَ جُلُوسَ الْمَلِكِ), or a count of how many times
            (ضَرَبْتُ ضَرْبَتَيْنِ). Because it must share the verb's own root, it is easy to
            distinguish from <bdi lang="ar">المفعول لأجله</bdi>, which comes from a different root
            and answers "why."
          </p>
        </div>
      </div>
      <div className="mx-auto w-[min(720px,calc(100%-2rem))] py-8">
        <QuizCarousel items={quizItems} />
      </div>
    </main>
  )
}

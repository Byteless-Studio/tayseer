import { createFileRoute, Link } from '@tanstack/react-router'
import { QuizCarousel } from '#/components/QuizCarousel'
import type { StrictQuizItem } from '#/routes/challenges/-quiz-types'

export const Route = createFileRoute('/challenges/grammar/mafool-maah/')({
  head: () => ({ meta: [{ title: "Al-Maf‘ūl Ma‘ahu — Grammar — Tayseer" }] }),
  component: TopicPage,
})

const quizItems: StrictQuizItem[] = [
  {
    q: 'ما هو المفعول معه؟\nWhat is المفعول معه?',
    options: [
      'اسم منصوب يقع بعد واو تفيد المصاحبة "مع"\nAn accusative noun that follows a واو meaning "along with"',
      'اسم مرفوع معطوف بواو العطف على الفاعل\nA nominative noun coordinated onto the subject by واو العطف',
      'مصدر منصوب من نفس جذر الفعل\nAn accusative مصدر sharing the verb\'s own root',
      'اسم مجرور بحرف جر "مع"\nA genitive noun governed by the preposition مع',
    ],
    correctIndex: 0,
    a: 'المفعول معه اسم منصوب يقع بعد واو تسمى "واو المعية"، بمعنى "مع"، وليس واو عطف.\nالمفعول معه is an accusative noun that follows a واو called واو المعية, meaning "along with" — not a coordinating واو العطف.',
  },
  {
    q: 'ما إعراب المفعول معه دائماً؟\nWhat case is المفعول معه always in?',
    options: [
      'منصوب دائماً\nAlways accusative (منصوب)',
      'مرفوع دائماً\nAlways nominative (مرفوع)',
      'مجرور دائماً\nAlways genitive (مجرور)',
      'يتبع حركة ما قبل الواو\nIt copies whatever case comes before the واو',
    ],
    correctIndex: 0,
    a: 'المفعول معه منصوب دائماً بعد واو المعية، مهما كان إعراب ما قبلها.\nالمفعول معه is always accusative (منصوب) after واو المعية, regardless of the case of what precedes it.',
  },
  {
    q: 'مَشَيْتُ وَالنَّهْرَ — ما إعراب "النَّهْرَ"؟\nIn مَشَيْتُ وَالنَّهْرَ ("I walked alongside the river"), what is the parse of النَّهْرَ?',
    options: [
      'مفعول معه منصوب بعد واو المعية\nمفعول معه, accusative, after واو المعية',
      'فاعل مرفوع معطوف على "مَشَيْتُ"\nA nominative فاعل coordinated onto مَشَيْتُ',
      'مضاف إليه مجرور\nمضاف إليه, genitive',
      'حال منصوب\nحال, accusative',
    ],
    correctIndex: 0,
    a: '"النَّهْرَ" اسم منصوب بعد واو المعية بمعنى "مع"؛ فالمعنى: مشيت مصاحباً للنهر، لا أن النهر مشى.\nالنَّهْرَ is an accusative noun after واو المعية, meaning "along with." The sense is: I walked alongside the river — not that the river itself walked.',
  },
  {
    q: 'كَيْفَ أَنْتَ وَبِلَالًا؟ — ما إعراب "بِلَالًا"؟\nIn كَيْفَ أَنْتَ وَبِلَالًا؟ ("How are you, along with Bilal?"), what is the parse of بِلَالًا?',
    options: [
      'مفعول معه منصوب بعد واو المعية\nمفعول معه, accusative, after واو المعية',
      'معطوف مرفوع على الضمير "أنتَ"\nA nominative noun coordinated onto the pronoun أنتَ',
      'مضاف إليه مجرور\nمضاف إليه, genitive',
      'مفعول به منصوب\nDirect object (مفعول به), accusative',
    ],
    correctIndex: 0,
    a: '"بِلَالًا" اسم منصوب بعد واو المعية، بمعنى "أنت مع بلال"، وليس معطوفاً مشاركاً في الفعل.\nبِلَالًا is an accusative noun after واو المعية — the sense is "you, together with Bilal," not a coordinated subject sharing in an action.',
  },
  {
    q: 'ما الفرق بين واو المعية وواو العطف؟\nWhat is the difference between واو المعية and واو العطف?',
    options: [
      'واو المعية تنصب ما بعدها بمعنى "مع"، أما واو العطف فتجعل ما بعدها يشارك ما قبلها في نفس الإعراب والفعل\nواو المعية puts what follows in the accusative, meaning "along with," while واو العطف makes what follows share the same case and action as what precedes',
      'كلتاهما تنصبان ما بعدهما دائماً\nBoth always put what follows in the accusative',
      'واو المعية تجزم ما بعدها\nواو المعية puts what follows into jazm',
      'لا فرق بينهما إطلاقاً\nThere is no difference between them at all',
    ],
    correctIndex: 0,
    a: 'واو العطف تُشرك الاسم الثاني مع الأول في نفس الإعراب والمشاركة في الفعل (مَشَيْتُ أَنَا وَبِلَالٌ: كلاهما مشى، وبِلَالٌ مرفوع معطوف). واو المعية تنصب ما بعدها بمعنى "مع"، دون مشاركة في الفعل (مَشَيْتُ وَبِلَالًا: أنا مشيت مصاحباً له).\nواو العطف shares the case and the action between the two nouns (مَشَيْتُ أَنَا وَبِلَالٌ: both walked, and بِلَالٌ is nominative, coordinated). واو المعية instead puts what follows in the accusative, meaning "along with," without implying it shared in the action (مَشَيْتُ وَبِلَالًا: I walked, accompanied by him).',
  },
  {
    q: 'قارن: مَشَيْتُ أَنَا وَبِلَالٌ مقابل مَشَيْتُ وَبِلَالًا — ما الفرق؟\nCompare مَشَيْتُ أَنَا وَبِلَالٌ vs مَشَيْتُ وَبِلَالًا — what is the difference?',
    options: [
      'الأولى عطف: بلال شارك في المشي ومرفوع، والثانية معية: بلال منصوب مرافق للمشي لا فاعل مشارك\nThe first is عطف: Bilal shared in the walking and is nominative, while the second is معية: Bilal is accusative, merely accompanying the walk, not a co-subject',
      'لا فرق في المعنى بينهما\nThere is no difference in meaning between them',
      'الأولى معية والثانية عطف\nThe first is معية and the second is عطف',
      'كلتاهما خطأ نحوياً\nBoth are grammatically incorrect',
    ],
    correctIndex: 0,
    a: '"أَنَا وَبِلَالٌ" عطف: بلالٌ مرفوع لأنه شريك أنا في فعل المشي. "وَبِلَالًا" معية: بِلَالًا منصوب لأنه مرافق لفعل المشي لا فاعل له، أي "مشيت بصحبة بلال".\nأَنَا وَبِلَالٌ is عطف: بلالٌ is nominative because he shares in the act of walking with "I." وَبِلَالًا is معية: بِلَالًا is accusative because he merely accompanies the walking, not performs it — "I walked in Bilal\'s company."',
  },
  {
    q: 'أكمل: كَيْفَ أَنْتَ ___؟ (مصاحبة بلال، بمعنى "مع بلال")\nComplete: كَيْفَ أَنْتَ ___؟ (accompanying Bilal, meaning "along with Bilal")',
    options: [
      'وَبِلَالًا\nwa-bilālan — "along with Bilal"',
      'وَبِلَالٌ\nwa-bilālun',
      'وَبِلَالٍ\nwa-bilālin',
      'بِلَالُ\nbilālu',
    ],
    correctIndex: 0,
    a: 'المفعول معه منصوب دائماً بعد واو المعية، فالجواب الصحيح "وَبِلَالًا" بالفتحة والتنوين.\nالمفعول معه is always accusative after واو المعية, so the correct fill is وَبِلَالًا — fatḥah with تنوين.',
  },
  {
    q: 'أكمل: مَشَيْتُ ___ (مصاحبة النهر أثناء المشي)\nComplete: مَشَيْتُ ___ (accompanying the river during the walk)',
    options: [
      'وَالنَّهْرَ\nwa-n-nahra — "alongside the river"',
      'وَالنَّهْرُ\nwa-n-nahru',
      'وَالنَّهْرِ\nwa-n-nahri',
      'النَّهْرَ\nan-nahra (missing the واو)',
    ],
    correctIndex: 0,
    a: 'المفعول معه ينصب بعد واو المعية، فالجواب الصحيح "وَالنَّهْرَ" بالفتحة، إذ لا تنوين لأنه معرف بأل.\nالمفعول معه is accusative after واو المعية, so the correct fill is وَالنَّهْرَ — fatḥah, with no تنوين since the word is definite with أل.',
  },
  {
    q: 'أيّ جملة فيها خطأ لأن الاسم بعد واو المعية جاء مرفوعاً؟\nWhich sentence is wrong because the noun after واو المعية was made nominative?',
    options: [
      'مَشَيْتُ وَالنَّهْرَ\nmashaytu wa-n-nahra — "I walked alongside the river"',
      'مَشَيْتُ وَالنَّهْرُ (يُراد بها المصاحبة)\nmashaytu wa-n-nahru (intended as accompaniment)',
      'كَيْفَ أَنْتَ وَبِلَالًا؟\nkayfa anta wa-bilālan? — "How are you, along with Bilal?"',
      'سَافَرْتُ وَأَخَاكَ\nsāfartu wa-akhāka — "I traveled along with your brother"',
    ],
    correctIndex: 1,
    a: '"مَشَيْتُ وَالنَّهْرُ" خطأ إن قُصدت المعية: المفعول معه منصوب دائماً، والصواب "وَالنَّهْرَ" بالفتحة لا "وَالنَّهْرُ" بالضمة.\nمَشَيْتُ وَالنَّهْرُ is wrong if معية is intended: المفعول معه must always be accusative — the correct form is وَالنَّهْرَ with fatḥah, not وَالنَّهْرُ with ḍammah.',
  },
  {
    q: 'سَافَرْتُ وَأَخَاكَ — ما إعراب "أَخَاكَ" وما علامة نصبه؟\nIn سَافَرْتُ وَأَخَاكَ ("I traveled along with your brother"), what is the parse of أَخَاكَ and its accusative marker?',
    options: [
      'مفعول معه منصوب، وعلامة نصبه الألف لأنه من الأسماء الخمسة\nمفعول معه, accusative, marked by an alif because it is one of the five nouns',
      'مضاف إليه مجرور بالياء\nمضاف إليه, genitive, marked by yā\'',
      'فاعل مرفوع بالواو\nSubject (فاعل), nominative, marked by wāw',
      'مفعول به منصوب بالفتحة الظاهرة\nDirect object (مفعول به), accusative, marked by an overt fatḥah',
    ],
    correctIndex: 0,
    a: '"أَخَاكَ" مفعول معه منصوب بعد واو المعية، وهو من الأسماء الخمسة (أب، أخ، حم، فو، ذو) التي تُنصب بالألف حين تكون مضافة: أَخَا.\nأَخَاكَ is مفعول معه, accusative, after واو المعية. It belongs to the five nouns (أب، أخ، حم، فو، ذو), which take alif as their accusative marker when they are مضاف: أَخَا.',
  },
  {
    q: 'ما علامة نصب "النَّهْرَ" في: مَشَيْتُ وَالنَّهْرَ؟\nWhat is the accusative marker on النَّهْرَ in مَشَيْتُ وَالنَّهْرَ?',
    options: [
      'الفتحة الظاهرة، لأنه اسم مفرد معرف بأل بلا تنوين\nAn overt fatḥah, since it is a singular noun made definite by أل, so no تنوين',
      'الياء، لأنه جمع مذكر سالم\nA yāʾ, because it is a sound masculine plural',
      'الألف، لأنه من الأسماء الخمسة\nAn alif, because it is one of the five nouns',
      'كسرة، لأنه ممنوع من الصرف\nA kasrah, because it is a diptote',
    ],
    correctIndex: 0,
    a: '"النَّهْرَ" اسم مفرد معرف بأل، فعلامة نصبه الفتحة الظاهرة، بلا تنوين لأن أل والتنوين لا يجتمعان.\nالنَّهْرَ is a singular noun made definite by أل, so its accusative marker is an overt fatḥah — with no تنوين, since أل and تنوين never combine on the same word.',
  },
  {
    q: 'أيّ كلمة في الجملة التالية هي المفعول معه؟ جَلَسْتُ وَالْمُدَرِّسَ فِي الْفَصْلِ\nWhich word in جَلَسْتُ وَالْمُدَرِّسَ فِي الْفَصْلِ ("I sat along with the teacher in the classroom") is المفعول معه?',
    options: [
      'الْمُدَرِّسَ\nal-mudarrisa — "the teacher"',
      'جَلَسْتُ\njalastu — "I sat" (the verb)',
      'الْفَصْلِ\nal-faṣli — "the classroom"',
      'فِي\nfī — "in" (a preposition)',
    ],
    correctIndex: 0,
    a: '"الْمُدَرِّسَ" اسم منصوب بعد واو المعية، بمعنى: جلستُ مصاحباً للمدرِّس. فهو المفعول معه.\nالْمُدَرِّسَ is an accusative noun after واو المعية, meaning: I sat in the teacher\'s company. That makes it المفعول معه.',
  },
  {
    q: 'أيّ الجمل التالية توظّف المفعول معه بشكل صحيح؟\nWhich of the following sentences correctly uses المفعول معه?',
    options: [
      'سِرْتُ وَالْجَبَلَ حَتَّى الْمَسَاءِ\nsirtu wa-l-jabala ḥattā l-masā’i — "I walked alongside the mountain until evening"',
      'سِرْتُ وَالْجَبَلُ حَتَّى الْمَسَاءِ\nsirtu wa-l-jabalu ḥattā l-masā’i',
      'سِرْتُ وَالْجَبَلِ حَتَّى الْمَسَاءِ\nsirtu wa-l-jabali ḥattā l-masā’i',
      'سِرْتُ الْجَبَلَ حَتَّى الْمَسَاءِ\nsirtu l-jabala ḥattā l-masā’i (missing واو)',
    ],
    correctIndex: 0,
    a: '"سِرْتُ وَالْجَبَلَ حَتَّى الْمَسَاءِ" صحيحة: "الْجَبَلَ" منصوب بعد واو المعية. الخيارات الأخرى إما مرفوعة أو مجرورة خطأً أو تفتقد واو المعية أصلاً.\nسِرْتُ وَالْجَبَلَ حَتَّى الْمَسَاءِ is correct: الْجَبَلَ is accusative after واو المعية. The other options wrongly mark it nominative or genitive, or drop واو المعية entirely.',
  },
  {
    q: 'ما الشرط الأساسي الذي يميّز واو المعية عن واو العطف في القراءة؟\nWhat is the key test that distinguishes واو المعية from واو العطف when reading a sentence?',
    options: [
      'هل الاسم الثاني شارك الأول في الفعل نفسه (عطف) أم كان مجرد مرافق له وقته (معية)؟\nDid the second noun share in the very same action as the first (عطف), or was it merely present alongside it (معية)?',
      'هل الاسم الثاني مذكر أم مؤنث؟\nIs the second noun masculine or feminine?',
      'هل الفعل ماضٍ أم مضارع؟\nIs the verb past or present tense?',
      'هل الجملة اسمية أم فعلية؟\nIs the sentence nominal or verbal?',
    ],
    correctIndex: 0,
    a: 'إذا شارك الاسم الثاني الأول في نفس الفعل (كأنهما فاعلان)، فالواو عطف وينصب لا محل—بل يرفع تبعاً. إذا كان الاسم الثاني مرافقاً وقت الفعل دون مشاركة فيه، فالواو معية وما بعدها منصوب دائماً.\nIf the second noun genuinely shares in the same action (as if both were doing it), the واو is عطف and the noun follows the case of what precedes. If the second noun was merely present during the action without performing it, the واو is معية, and what follows is always accusative.',
  },
  {
    q: 'صحّح: مَشَيْتُ وَالنَّهْرِ (يُراد بها المعية)\nCorrect: مَشَيْتُ وَالنَّهْرِ (intended as معية)',
    options: [
      'مَشَيْتُ وَالنَّهْرَ\nmashaytu wa-n-nahra — "I walked alongside the river"',
      'مَشَيْتُ وَالنَّهْرِ (unchanged)\nmashaytu wa-n-nahri (unchanged)',
      'مَشَيْتُ وَنَهْرٌ\nmashaytu wa-nahrun',
      'مَشَيْتُ النَّهْرِ\nmashaytu n-nahri',
    ],
    correctIndex: 0,
    a: '"وَالنَّهْرِ" خطأ لأن المفعول معه لا يُجَرّ أبداً؛ الصواب نصبه بالفتحة: "وَالنَّهْرَ".\nوَالنَّهْرِ is wrong because المفعول معه is never genitive — the correction gives it the accusative fatḥah: وَالنَّهْرَ.',
  },
  {
    q: 'ما الفرق بين المفعول معه والحال من حيث المعنى؟\nWhat is the difference in meaning between المفعول معه and الحال?',
    options: [
      'المفعول معه اسم يرافق الفاعل وقت الفعل بمعنى "مع"، أما الحال فيصف هيئة صاحبه لا مرافقته\nالمفعول معه is a noun accompanying the فاعل during the action, meaning "along with," while الحال describes the state of its صاحب rather than accompanying it',
      'كلاهما يعني نفس الشيء بالضبط\nBoth mean exactly the same thing',
      'الحال يعني "مع"، والمفعول معه يصف الهيئة\nالحال means "along with," and المفعول معه describes state',
      'المفعول معه لا يكون منصوباً أبداً\nالمفعول معه is never accusative',
    ],
    correctIndex: 0,
    a: 'المفعول معه (كـ"وَالنَّهْرَ" في مَشَيْتُ وَالنَّهْرَ) اسم رافق الفاعل في الفعل، بمعنى "مع". الحال (كـ"باسمًا" في دخل المدرِّسُ باسمًا) يصف هيئة صاحبه وقت الفعل، لا مرافقاً له. كلاهما منصوب لكن المعنى مختلف تماماً.\nالمفعول معه (like وَالنَّهْرَ in مَشَيْتُ وَالنَّهْرَ) is a noun that accompanied the فاعل during the action, meaning "along with." الحال (like بَاسِمًا in دخل المدرِّسُ باسمًا) describes the state of its صاحب at the moment of the verb, not something accompanying it. Both are accusative, but the meaning is entirely different.',
  },
  {
    q: 'أكمل بأسلوب المفعول معه: سَافَرْتُ ___ (مصاحبة أخيك)\nComplete using المفعول معه: سَافَرْتُ ___ (accompanying your brother)',
    options: [
      'وَأَخَاكَ\nwa-akhāka — "along with your brother"',
      'وَأَخُوكَ\nwa-akhūka',
      'وَأَخِيكَ\nwa-akhīka',
      'أَخَاكَ\nakhāka (missing واو)',
    ],
    correctIndex: 0,
    a: 'المفعول معه منصوب بعد واو المعية، والأسماء الخمسة تُنصب بالألف حين تكون مضافة، فالجواب "وَأَخَاكَ".\nالمفعول معه is accusative after واو المعية, and the five nouns take alif as their accusative marker when مضاف, giving وَأَخَاكَ.',
  },
  {
    q: 'أيّ جملة فيها خطأ لأن الاسم بعد واو المعية جاء مجروراً؟\nWhich sentence is wrong because the noun after واو المعية was made genitive?',
    options: [
      'كَيْفَ أَنْتَ وَبِلَالًا؟\nkayfa anta wa-bilālan? — "How are you, along with Bilal?"',
      'كَيْفَ أَنْتَ وَبِلَالٍ؟ (يُراد بها المعية)\nkayfa anta wa-bilālin? (intended as معية)',
      'مَشَيْتُ وَالنَّهْرَ\nmashaytu wa-n-nahra — "I walked alongside the river"',
      'جَلَسْتُ وَالْمُدَرِّسَ\njalastu wa-l-mudarrisa — "I sat along with the teacher"',
    ],
    correctIndex: 1,
    a: '"كَيْفَ أَنْتَ وَبِلَالٍ؟" خطأ: المفعول معه لا يُجَرّ أبداً، والصواب "وَبِلَالًا" بالفتحة والتنوين لأنه منصوب.\nكَيْفَ أَنْتَ وَبِلَالٍ؟ is wrong: المفعول معه is never genitive — the correct form is وَبِلَالًا with fatḥah and تنوين, since it is accusative.',
  },
  {
    q: 'أيّ كلمة في الجملة التالية هي المفعول معه؟ اسْتَيْقَظَ الْأَطْفَالُ وَشُرُوقَ الشَّمْسِ\nWhich word in اسْتَيْقَظَ الْأَطْفَالُ وَشُرُوقَ الشَّمْسِ ("The children woke up along with sunrise") is المفعول معه?',
    options: [
      'شُرُوقَ\nshurūqa — "sunrise"',
      'اسْتَيْقَظَ\nistayqaẓa — "woke up" (the verb)',
      'الْأَطْفَالُ\nal-aṭfālu — "the children"',
      'الشَّمْسِ\nash-shamsi — "the sun"',
    ],
    correctIndex: 0,
    a: '"شُرُوقَ" اسم منصوب بعد واو المعية، بمعنى: استيقظ الأطفال مع وقت شروق الشمس، لا أن الشروق فعل شيئاً. فهو المفعول معه، وهو مضاف إلى "الشمس".\nشُرُوقَ is an accusative noun after واو المعية, meaning: the children woke up at the same time as sunrise — not that the sunrise itself performed an action. That makes it المفعول معه, and it is itself a مضاف with الشمس as its مضاف إليه.',
  },
  {
    q: 'لخّص: أيّ العناصر التالية تصف المفعول معه وصفاً صحيحاً كاملاً؟\nSummarize: which of the following fully and correctly describes المفعول معه?',
    options: [
      'اسم منصوب دائماً يقع بعد واو المعية بمعنى "مع"، ويدل على مرافقة اسم لفعل دون مشاركته فيه، بخلاف واو العطف\nAn always-accusative noun following واو المعية, meaning "along with" — it shows a noun accompanying an action without sharing in performing it, unlike واو العطف',
      'مصدر منصوب من نفس جذر الفعل يفيد التوكيد\nAn accusative مصدر sharing the verb\'s own root, expressing emphasis',
      'اسم نكرة منصوب يصف هيئة الفاعل وقت الفعل\nAn indefinite, accusative noun describing the فاعل\'s state at the moment of the verb',
      'اسم مبني على الفتح بلا تنوين بعد "لا"\nA noun built on fatḥah with no تنوين, after لا',
    ],
    correctIndex: 0,
    a: 'هذا هو التعريف الجامع: المفعول معه اسم منصوب بعد واو المعية بمعنى "مع"، يدل على المرافقة لا المشاركة في الفعل — كما في مَشَيْتُ وَالنَّهْرَ وكَيْفَ أَنْتَ وَبِلَالًا؟\nThis is the complete definition: المفعول معه is an accusative noun after واو المعية, meaning "along with" — it shows accompaniment, not shared performance of the action, as in مَشَيْتُ وَالنَّهْرَ and كَيْفَ أَنْتَ وَبِلَالًا؟',
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
            Topic 56 of 62
          </p>
          <h1 className="font-serif tracking-[-0.02em] text-3xl font-bold text-foreground leading-tight mb-3">
            <span
              dir="rtl"
              lang="ar"
              style={{ fontFamily: "'Noto Naskh Arabic', serif" }}
              className="mr-2"
            >
              المفعول معه
            </span>
            — The Accusative of Association
          </h1>
          <p className="text-muted-foreground text-base max-w-xl">
            <bdi lang="ar">المفعول معه</bdi> is an accusative noun following{' '}
            <span className="font-medium text-foreground"><bdi lang="ar">واو المعية</bdi></span>{' '}
            ("and along with"), as in مَشَيْتُ وَالنَّهْرَ — "I walked alongside the river" — or
            كَيْفَ أَنْتَ وَبِلَالًا؟. It differs from an ordinary <bdi lang="ar">واو العطف</bdi>{' '}
            (coordinating "and"): after عطف the following noun shares the case of what precedes
            it and takes part in the same action, while after واو المعية the noun is simply
            accompanying — always <bdi lang="ar">منصوب</bdi>, regardless of what comes before.
          </p>
        </div>
      </div>
      <div className="mx-auto w-[min(720px,calc(100%-2rem))] py-8">
        <QuizCarousel items={quizItems} />
      </div>
    </main>
  )
}

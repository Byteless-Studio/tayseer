import { createFileRoute, Link } from '@tanstack/react-router'
import { QuizCarousel } from '#/components/QuizCarousel'
import type { StrictQuizItem } from '#/routes/challenges/-quiz-types'

export const Route = createFileRoute('/challenges/grammar/hal/')({
  head: () => ({ meta: [{ title: 'Al-Ḥāl — Grammar — Tayseer' }] }),
  component: TopicPage,
})

const quizItems: StrictQuizItem[] = [
  {
    q: 'ما هو الحال في اللغة العربية؟\nWhat is الحال in Arabic grammar?',
    options: [
      'اسم نكرة منصوب يصف هيئة الفاعل أو المفعول به وقت وقوع الفعل\nAn indefinite, accusative (منصوب) noun that describes the state of the فاعل or مفعول به at the moment the verb happens',
      'اسم معرفة مرفوع يقع مبتدأ في أول الجملة\nA definite, nominative noun that stands as the مبتدأ at the start of a sentence',
      'حرف يربط بين جملتين\nA particle that links two sentences together',
      'اسم مجرور يأتي بعد حرف جر\nA genitive noun that follows a preposition',
    ],
    correctIndex: 0,
    a: 'الحال اسم نكرة منصوب دائماً، يبيّن هيئة صاحبه (الفاعل أو المفعول به) عند وقوع الفعل.\nالحال is always an indefinite, accusative (منصوب) noun. It shows the condition or manner of its صاحب الحال — the فاعل or مفعول به — at the exact moment of the verb. It answers the question "كيف؟" (how / in what state?).',
  },
  {
    q: 'ما إعراب "بَاسِمًا" في: دَخَلَ الْمُدَرِّسُ بَاسِمًا؟\nWhat is the grammatical parse of بَاسِمًا in دَخَلَ الْمُدَرِّسُ بَاسِمًا ("The teacher entered smiling")?',
    options: [
      'حال منصوب وعلامة نصبه الفتحة الظاهرة\nحال (circumstantial description), accusative, marked by an overt fatḥah',
      'فاعل مرفوع وعلامة رفعه الضمة\nفاعل (subject), nominative, marked by ḍammah',
      'مفعول به منصوب\nDirect object (مفعول به), accusative',
      'نعت مجرور للمدرِّس\nAn adjective (نعت) for المدرِّس, genitive',
    ],
    correctIndex: 0,
    a: '"بَاسِمًا" حال منصوب من الفاعل "المدرِّسُ"، يبيّن هيئته وقت الدخول، وعلامة نصبه الفتحة الظاهرة.\nبَاسِمًا is حال, accusative, describing the فاعل المدرِّسُ — it shows his state ("smiling") at the moment of entering. It is marked by an overt fatḥah since it is an indefinite singular noun.',
  },
  {
    q: 'ما إعراب "بَاكِيًا" في: رَجَعَ الطِّفْلُ بَاكِيًا؟\nWhat is the grammatical parse of بَاكِيًا in رَجَعَ الطِّفْلُ بَاكِيًا ("The child returned crying")?',
    options: [
      'حال منصوب يبيّن هيئة الفاعل "الطفلُ" عند الرجوع\nحال, accusative, describing the state of the فاعل الطفلُ at the moment of returning',
      'مضاف إليه مجرور\nمضاف إليه, genitive',
      'خبر مرفوع\nPredicate (خبر), nominative',
      'مفعول مطلق منصوب\nCognate object (مفعول مطلق), accusative',
    ],
    correctIndex: 0,
    a: '"بَاكِيًا" حال منصوب، صاحبها الفاعل "الطفلُ"، وتبيّن هيئته حين رجع — كان باكياً في تلك اللحظة.\nبَاكِيًا is حال, accusative; its صاحب الحال is the فاعل الطفلُ. It describes his condition at the moment of the verb — he was crying as he returned.',
  },
  {
    q: 'ما نوع الجملة "وَهُوَ يَضْحَكُ" في: خَرَجَ الطَّالِبُ وَهُوَ يَضْحَكُ؟\nWhat kind of clause is وَهُوَ يَضْحَكُ in خَرَجَ الطَّالِبُ وَهُوَ يَضْحَكُ ("The student left while laughing")?',
    options: [
      'جملة حالية مقترنة بواو الحال، في محل نصب حال\nA حال clause introduced by واو الحال, in the accusative position as حال',
      'جملة صلة الموصول\nA relative clause (صلة الموصول)',
      'جملة شرطية جازمة\nA conditional clause requiring jazm',
      'جملة معطوفة بواو العطف على الفاعل\nA clause coordinated onto the subject by واو العطف',
    ],
    correctIndex: 0,
    a: 'الحال قد يكون جملة اسمية مقترنة بواو الحال بدلاً من كلمة واحدة؛ "وهو يضحك" في محل نصب حال، تبيّن هيئة الطالب وقت الخروج.\nالحال is not always a single word — it can be a full clause introduced by واو الحال. Here وهو يضحك sits in the accusative position as حال, describing the student\'s state ("laughing") at the moment he left.',
  },
  {
    q: 'ما الفرق الأساسي بين الحال والنعت من حيث التعريف والتنكير؟\nWhat is the core difference between الحال and النعت (adjective) regarding definiteness?',
    options: [
      'الحال دائماً نكرة، أما النعت فيطابق منعوته في التعريف أو التنكير\nالحال is always indefinite, while النعت must agree with the noun it describes in being definite or indefinite',
      'كلاهما يجب أن يكون معرفة دائماً\nBoth must always be definite',
      'الحال يطابق صاحبه في التعريف، والنعت دائماً نكرة\nالحال agrees with its صاحب in definiteness, while النعت is always indefinite',
      'لا فرق بينهما إطلاقاً\nThere is no difference between them at all',
    ],
    correctIndex: 0,
    a: 'الحال نكرة دائماً حتى لو كان صاحبها معرفة (كالمدرِّس)، بينما النعت يجب أن يطابق منعوته تعريفاً وتنكيراً، وكذلك في الرفع والنصب والجر والإفراد والتذكير.\nالحال is always indefinite — even when its صاحب الحال is definite, as المدرِّسُ is in دخل المدرِّسُ باسمًا. النعت, by contrast, must match its noun in definiteness/indefiniteness, case, number, and gender (e.g. الطالبُ المجتهدُ, both definite).',
  },
  {
    q: 'أيّ جملة فيها خطأ في تركيب الحال؟\nWhich sentence contains an error in its الحال construction?',
    options: [
      'دَخَلَ الْمُدَرِّسُ بَاسِمًا\ndakhala l-mudarrisu bāsiman — "The teacher entered smiling"',
      'دَخَلَ الْمُدَرِّسُ الْبَاسِمُ\ndakhala l-mudarrisu l-bāsimu',
      'رَجَعَ الطِّفْلُ بَاكِيًا\nraja‘a ṭ-ṭiflu bākiyan — "The child returned crying"',
      'خَرَجَ الطَّالِبُ وَهُوَ يَضْحَكُ\nkharaja ṭ-ṭālibu wa-huwa yaḍḥaku — "The student left while laughing"',
    ],
    correctIndex: 1,
    a: '"دَخَلَ الْمُدَرِّسُ الْبَاسِمُ" خطأ: "الْبَاسِمُ" هنا معرفة بأل ومرفوعة، فتصبح نعتاً للمدرِّس لا حالاً — والحال يجب أن يكون نكرة منصوبة، أي بَاسِمًا.\n"دَخَلَ الْمُدَرِّسُ الْبَاسِمُ" is wrong: with أل and رفع, الباسمُ reads as a نعت for المدرِّس, not a حال. الحال must be indefinite and accusative — بَاسِمًا, not الباسمُ.',
  },
  {
    q: 'أكمل: دَخَلَ الْمُدَرِّسُ ___ (يصف حاله وقت الدخول)\nComplete: دَخَلَ الْمُدَرِّسُ ___ (describing his state as he entered)',
    options: [
      'بَاسِمًا\nbāsiman — "smiling"',
      'الْبَاسِمُ\nal-bāsimu — "the smiling one"',
      'بَاسِمٌ\nbāsimun — "a smiling one"',
      'بَاسِمِ\nbāsimi',
    ],
    correctIndex: 0,
    a: 'الحال يجب أن يكون نكرة منصوبة، فالجواب الصحيح "بَاسِمًا" بالفتحة والتنوين — لا معرفاً بأل ولا مرفوعاً.\nالحال must be indefinite and accusative, so the correct fill is بَاسِمًا — fatḥah with تنوين. Neither the أل-definite form nor a nominative form can serve as حال.',
  },
  {
    q: 'رَأَيْتُ الطَّالِبَ رَاكِبًا — ما صاحب الحال هنا، وما إعراب "رَاكِبًا"؟\nIn رَأَيْتُ الطَّالِبَ رَاكِبًا ("I saw the student riding"), who is صاحب الحال, and what is the parse of رَاكِبًا?',
    options: [
      'صاحب الحال هو المفعول به "الطالبَ"، و"راكبًا" حال منصوب\nصاحب الحال is the مفعول به الطالبَ, and راكبًا is حال, accusative',
      'صاحب الحال هو الفاعل المستتر، و"راكبًا" مفعول به ثانٍ\nصاحب الحال is a hidden فاعل, and راكبًا is a second direct object',
      'صاحب الحال هو الفعل نفسه\nصاحب الحال is the verb itself',
      '"راكبًا" مضاف إليه مجرور\nراكبًا is مضاف إليه, genitive',
    ],
    correctIndex: 0,
    a: 'الحال قد يبيّن هيئة المفعول به لا الفاعل فقط. هنا صاحب الحال هو "الطالبَ" (المفعول به)، و"راكبًا" حال منصوب يصف هيئته وقت الرؤية.\nالحال can describe the مفعول به, not only the فاعل. Here صاحب الحال is الطالبَ (the object seen), and راكبًا is حال, accusative — describing his state ("riding") at the moment he was seen.',
  },
  {
    q: 'اشتقّ اسم الفاعل من الفعل "ضَحِكَ" ليصلح حالاً في جملة مثل: خرجت البنتُ ___\nDerive the اسم الفاعل from ضَحِكَ ("to laugh") so it can serve as حال in a sentence like: خرجت البنتُ ___',
    options: [
      'ضَاحِكَةً\nḍāḥikatan — "laughing" (fem.)',
      'ضَحِكَتْ\nḍaḥikat — "she laughed" (verb)',
      'ضَحِكٌ\nḍaḥikun — "laughter" (noun)',
      'مَضْحُوكَةً\nmaḍḥūkatan — "the one laughed at" (passive)',
    ],
    correctIndex: 0,
    a: 'اسم الفاعل من "ضَحِكَ" على وزن فاعل هو "ضَاحِك"، وإذا كان الحال يصف مؤنثاً (البنتُ) يؤنّث فيصير "ضَاحِكَةً" منصوباً بالفتحة والتنوين.\nThe اسم الفاعل of ضَحِكَ on the وزن فاعل is ضَاحِك. Since الحال must agree in gender with its صاحب الحال (here the feminine البنتُ), it takes the feminine ending: ضَاحِكَةً, accusative with fatḥah and تنوين.',
  },
  {
    q: 'ما وظيفة "واو الحال" في جملة مثل: خَرَجَ الطَّالِبُ وَهُوَ يَضْحَكُ؟\nWhat is the function of واو الحال in a sentence like خَرَجَ الطَّالِبُ وَهُوَ يَضْحَكُ?',
    options: [
      'تربط الجملة الاسمية بعدها بصاحب الحال قبلها، فتصبح الجملة كلها في محل نصب حال\nIt links the nominal clause after it to صاحب الحال before it, putting the whole clause in the accusative position as حال',
      'تفيد العطف والمشاركة في الحكم بين اسمين\nIt indicates coordination and shared status between two nouns',
      'تنصب الاسم الواقع بعدها مباشرة كمفعول معه\nIt puts the noun directly after it in the accusative as مفعول معه',
      'تجزم الفعل المضارع بعدها\nIt puts the present-tense verb after it into jazm',
    ],
    correctIndex: 0,
    a: 'واو الحال حرف يربط الجملة الحالية (غالباً اسمية تبدأ بضمير) بصاحبها؛ الجملة بعدها "هو يضحك" في محل نصب حال.\nواو الحال links a حال clause — usually a nominal clause opening with a pronoun — back to its صاحب الحال. The clause after it, هو يضحك, sits in the accusative position as حال, describing the state of الطالب.',
  },
  {
    q: 'أيّ الجمل التالية توظّف الحال بشكل صحيح ليصف المفعول به؟\nWhich of the following sentences correctly uses الحال to describe the مفعول به?',
    options: [
      'قَابَلْتُ الْمُدِيرَ مُبْتَسِمًا\nqābaltu l-mudīra mubtasiman — "I met the director, [him] smiling"',
      'قَابَلْتُ الْمُدِيرُ مُبْتَسِمٍ\nqābaltu l-mudīru mubtasimin',
      'قَابَلْتُ الْمُدِيرَ الْمُبْتَسِمُ\nqābaltu l-mudīra l-mubtasimu',
      'قَابَلْتُ مُبْتَسِمًا الْمُدِيرِ\nqābaltu mubtasiman al-mudīri',
    ],
    correctIndex: 0,
    a: '"قَابَلْتُ الْمُدِيرَ مُبْتَسِمًا" صحيحة: المديرَ مفعول به منصوب، ومُبْتَسِمًا حال منصوب نكرة يصف هيئته. الخيارات الأخرى تخطئ في رفع/جر الكلمات أو تُعرِّف الحال بأل.\nقَابَلْتُ الْمُدِيرَ مُبْتَسِمًا is correct: المديرَ is the accusative مفعول به, and مُبْتَسِمًا is an indefinite, accusative حال describing his state. The other options wrongly mark case with ḍammah/kasrah or wrongly define الحال with أل.',
  },
  {
    q: 'ما علامة نصب "بَاسِمًا" في: دَخَلَ الْمُدَرِّسُ بَاسِمًا؟\nWhat is the accusative marker on بَاسِمًا in دَخَلَ الْمُدَرِّسُ بَاسِمًا?',
    options: [
      'الفتحة الظاهرة مع تنوين النصب، لأنه اسم مفرد نكرة\nAn overt fatḥah plus تنوين النصب, since it is a singular indefinite noun',
      'الألف، لأنه من الأسماء الخمسة\nAn alif, because it is one of the five nouns',
      'الياء، لأنه جمع مذكر سالم\nA yāʾ, because it is a sound masculine plural',
      'كسرة، لأنه ممنوع من الصرف\nA kasrah, because it is a diptote',
    ],
    correctIndex: 0,
    a: '"بَاسِمًا" اسم مفرد نكرة، فعلامة نصبه الفتحة الظاهرة، ويظهر التنوين لأنه غير مضاف وغير معرف بأل.\nبَاسِمًا is a singular indefinite noun, so its accusative marker is an overt fatḥah, appearing with تنوين since the word is neither مضاف nor definite with أل.',
  },
  {
    q: 'صحّح الخطأ في الجملة: "رَجَعَ الطِّفْلُ بَاكٍ" (يُراد بها حال منصوب)\nCorrect the error in رَجَعَ الطِّفْلُ بَاكٍ (intended to carry an accusative حال)',
    options: [
      'رَجَعَ الطِّفْلُ بَاكِيًا\nraja‘a ṭ-ṭiflu bākiyan — "The child returned crying"',
      'رَجَعَ الطِّفْلُ الْبَاكِي\nraja‘a ṭ-ṭiflu l-bākī',
      'رَجَعَ الطِّفْلُ بَاكٍ\nraja‘a ṭ-ṭiflu bākin (unchanged)',
      'رَجَعَ الطِّفْلُ بُكَاءً\nraja‘a ṭ-ṭiflu bukā’an',
    ],
    correctIndex: 0,
    a: '"بَاكٍ" هنا مرفوع تقديراً (اسم منقوص نكرة)، فلا يصلح حالاً؛ الصواب نصبه بالياء الظاهرة: "بَاكِيًا"، ليطابق شرط الحال في النصب والتنكير.\nبَاكٍ (a منقوص noun) here carries an implied nominative — it cannot serve as حال. The correction restores the accusative with an overt yāʾ: بَاكِيًا, matching the requirement that الحال be indefinite and accusative.',
  },
  {
    q: 'قارن: خَرَجَ الطَّالِبُ الضَّاحِكُ مقابل خَرَجَ الطَّالِبُ ضَاحِكًا — ما الفرق؟\nCompare خَرَجَ الطَّالِبُ الضَّاحِكُ vs خَرَجَ الطَّالِبُ ضَاحِكًا — what is the difference?',
    options: [
      'الأولى نعت معرفة مرفوع يميّز الطالب عن غيره، والثانية حال نكرة منصوب يصف هيئته وقت الخروج\nThe first uses a definite, nominative نعت that identifies which student, while the second uses an indefinite, accusative حال describing his state as he left',
      'لا فرق في المعنى ولا في الإعراب بينهما\nThere is no difference in meaning or grammar between them',
      'الأولى حال والثانية نعت\nThe first is حال and the second is نعت',
      'كلتاهما خطأ نحوياً\nBoth are grammatically incorrect',
    ],
    correctIndex: 0,
    a: '"الضَّاحِكُ" معرف بأل ومرفوع، فهو نعت يخصص "الطالب" (الطالب المعروف بالضحك)؛ "ضَاحِكًا" نكرة منصوبة، فهي حال تصف هيئته في لحظة الخروج فقط.\nالضَّاحِكُ carries أل and رفع, functioning as a نعت that identifies which student. ضَاحِكًا is indefinite and منصوب, functioning as حال — describing only his momentary state as he left, not a permanent trait.',
  },
  {
    q: 'حَضَرَ الْوَفْدُ مُسْرِعًا — ما إعراب "مُسْرِعًا" وما صاحب الحال؟\nIn حَضَرَ الْوَفْدُ مُسْرِعًا ("The delegation arrived hurrying"), what is the parse of مُسْرِعًا and who is صاحب الحال?',
    options: [
      'حال منصوب، وصاحبه الفاعل "الوفدُ"\nحال, accusative, with صاحب الحال being the فاعل الوفدُ',
      'نعت مجرور للوفد\nA genitive نعت for الوفد',
      'مفعول لأجله منصوب\nAn accusative مفعول لأجله',
      'خبر مقدم\nA fronted خبر',
    ],
    correctIndex: 0,
    a: '"مُسْرِعًا" حال منصوب من الفاعل "الوفدُ"، يبيّن هيئته (مسرعاً) وقت الحضور.\nمُسْرِعًا is حال, accusative, describing the فاعل الوفدُ — showing that the delegation was hurrying at the moment they arrived.',
  },
  {
    q: 'أيّ جملة تستعمل الحال في صورة جملة فعلية بعد واو الحال؟\nWhich sentence uses الحال in the form of a verbal clause after واو الحال?',
    options: [
      'وَصَلَ أَحْمَدُ وَهُوَ يَحْمِلُ حَقِيبَتَهُ\nwaṣala aḥmadu wa-huwa yaḥmilu ḥaqībatahu — "Ahmad arrived while he was carrying his bag"',
      'وَصَلَ أَحْمَدُ حَامِلًا حَقِيبَتَهُ\nwaṣala aḥmadu ḥāmilan ḥaqībatahu — "Ahmad arrived carrying his bag"',
      'وَصَلَ أَحْمَدُ وَحَقِيبَتَهُ\nwaṣala aḥmadu wa-ḥaqībatahu — "Ahmad arrived, bag and all"',
      'وَصَلَ أَحْمَدُ الْحَامِلُ حَقِيبَتَهُ\nwaṣala aḥmadu l-ḥāmilu ḥaqībatahu',
    ],
    correctIndex: 0,
    a: '"وهو يحمل حقيبته" جملة فعلية (فعل مضارع + فاعل مستتر) مقترنة بواو الحال، في محل نصب حال. أما الخيار الثاني فحال مفردة (اسم فاعل)، لا جملة.\nوهو يحمل حقيبته is a verbal clause (present-tense verb + hidden subject) introduced by واو الحال, in the accusative position as حال. The second option instead uses a single-word حال (اسم فاعل), not a clause.',
  },
  {
    q: 'اختر التصحيح الصحيح: "خَرَجَ الطَّالِبُ وَ يَضْحَكُ" (بلا ضمير)\nChoose the correct fix for خَرَجَ الطَّالِبُ وَ يَضْحَكُ (missing the pronoun)',
    options: [
      'خَرَجَ الطَّالِبُ وَهُوَ يَضْحَكُ\nkharaja ṭ-ṭālibu wa-huwa yaḍḥaku — "The student left while laughing"',
      'خَرَجَ الطَّالِبُ وَيَضْحَكُ\nkharaja ṭ-ṭālibu wa-yaḍḥaku (unchanged)',
      'خَرَجَ الطَّالِبُ يَضْحَكُ\nkharaja ṭ-ṭālibu yaḍḥaku',
      'خَرَجَ الطَّالِبُ ضَاحِكٍ\nkharaja ṭ-ṭālibu ḍāḥikin',
    ],
    correctIndex: 0,
    a: 'الجملة الحالية الفعلية المقترنة بواو الحال تحتاج ضميراً يربطها بصاحب الحال؛ فالصواب "وهو يضحك" لا "ويضحك" وحدها.\nA verbal حال clause introduced by واو الحال needs a linking pronoun back to صاحب الحال — hence the correct form is وهو يضحك, not the bare ويضحك.',
  },
  {
    q: 'ما القاعدة العامة لتطابق الحال مع صاحبها في الجنس والعدد؟\nWhat is the general rule for الحال agreeing with its صاحب الحال in gender and number?',
    options: [
      'يطابق الحال صاحبه تذكيراً وتأنيثاً وإفراداً وتثنية وجمعاً، لكنه يبقى نكرة دائماً بخلاف التعريف\nالحال agrees with its صاحب in gender and number (singular/dual/plural), but stays indefinite regardless of whether صاحب الحال is definite',
      'لا علاقة بين الحال وصاحبه في الجنس أو العدد إطلاقاً\nThere is no relationship at all between الحال and its صاحب in gender or number',
      'الحال يطابق صاحبه في التعريف فقط، لا في الجنس والعدد\nالحال agrees with its صاحب only in definiteness, not in gender or number',
      'الحال يكون دائماً جمعاً مهما كان صاحبه\nالحال is always plural, whatever صاحب الحال is',
    ],
    correctIndex: 0,
    a: 'الحال كالنعت يطابق صاحبه في الجنس والعدد (ضَاحِكًا لمذكر مفرد، ضَاحِكَةً لمؤنث، ضَاحِكِينَ لجمع مذكر)، لكنه يخالف النعت في التعريف: الحال نكرة دائماً حتى لو كان صاحبه معرفة.\nLike النعت, الحال matches its صاحب in gender and number — ضَاحِكًا for a masculine singular, ضَاحِكَةً for feminine, ضَاحِكِينَ for a masculine plural. But unlike النعت, it differs in definiteness: الحال is always indefinite, even when صاحب الحال is definite.',
  },
  {
    q: 'أيّ سؤال يجيب عنه الحال في الجملة؟\nWhat question does الحال answer in a sentence?',
    options: [
      'كَيْفَ؟ (في أي هيئة وقع الفاعل أو المفعول به وقت الفعل)\nكَيْفَ؟ ("how" / in what state was the فاعل or مفعول به at the moment of the verb)',
      'لِمَاذَا؟ (لماذا وقع الفعل)\nلِمَاذَا؟ ("why" did the action happen)',
      'كَمْ مَرَّةً؟ (عدد مرات وقوع الفعل)\nكَمْ مَرَّةً؟ (how many times the action occurred)',
      'مَتَى؟ (زمن وقوع الفعل)\nمَتَى؟ ("when" did the action happen)',
    ],
    correctIndex: 0,
    a: 'الحال يجيب عن سؤال "كيف؟"، فهو يصف هيئة صاحبه عند وقوع الفعل، بخلاف المفعول لأجله (لماذا) والمفعول المطلق (كم مرة/بأي طريقة من نفس الجذر).\nالحال answers "كيف؟" — it describes the manner or state of its صاحب at the moment of the verb. This distinguishes it from المفعول لأجله (answers "why") and المفعول المطلق (answers "how many times" or "in what manner," using a noun from the verb\'s own root).',
  },
  {
    q: 'لخّص: أيّ العناصر التالية تصف "الحال" وصفاً صحيحاً كاملاً؟\nSummarize: which of the following fully and correctly describes الحال?',
    options: [
      'اسم نكرة منصوب دائماً، يبيّن هيئة الفاعل أو المفعول به وقت الفعل، وقد يكون كلمة مفردة أو جملة مقترنة بواو الحال\nAn always-indefinite, accusative noun that shows the state of the فاعل or مفعول به at the moment of the verb — it may be a single word or a clause introduced by واو الحال',
      'اسم معرفة مجرور يصف صاحبه في كل زمان\nA definite, genitive noun describing its صاحب permanently, in every time',
      'فعل ماضٍ جامد خاص بالتعجب\nA frozen past-tense verb specific to exclamation',
      'حرف عطف ينصب ما بعده دائماً\nA coordinating particle that always puts what follows in the accusative',
    ],
    correctIndex: 0,
    a: 'هذا هو التعريف الجامع: الحال نكرة منصوبة تبيّن هيئة صاحبها (فاعلاً كان أو مفعولاً به) لحظة وقوع الفعل، وتأتي مفردة كـ"باسمًا" أو جملة مقترنة بواو الحال كـ"وهو يضحك".\nThis is the complete definition: الحال is an indefinite, accusative noun showing the momentary state of its صاحب — whether فاعل or مفعول به — at the time of the verb. It appears either as a single word (بَاسِمًا) or as a clause introduced by واو الحال (وهو يضحك).',
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
            Topic 53 of 62
          </p>
          <h1 className="font-serif tracking-[-0.02em] text-3xl font-bold text-foreground leading-tight mb-3">
            <span
              dir="rtl"
              lang="ar"
              style={{ fontFamily: "'Noto Naskh Arabic', serif" }}
              className="mr-2"
            >
              الحال
            </span>
            — The Circumstantial Clause
          </h1>
          <p className="text-muted-foreground text-base max-w-xl">
            <bdi lang="ar">الحال</bdi> is an indefinite, always-<bdi lang="ar">منصوب</bdi> noun
            that describes the state of the <bdi lang="ar">فاعل</bdi> or{' '}
            <bdi lang="ar">مفعول به</bdi> at the moment the verb happens — دَخَلَ الْمُدَرِّسُ
            بَاسِمًا, "the teacher entered smiling." It can also be a full clause introduced by{' '}
            <span className="font-medium text-foreground"><bdi lang="ar">واو الحال</bdi></span>,
            as in خَرَجَ الطَّالِبُ وَهُوَ يَضْحَكُ. Unlike <bdi lang="ar">النعت</bdi>, which
            agrees with its noun in definiteness, <bdi lang="ar">الحال</bdi> is always indefinite,
            even when the noun it describes is definite.
          </p>
        </div>
      </div>
      <div className="mx-auto w-[min(720px,calc(100%-2rem))] py-8">
        <QuizCarousel items={quizItems} />
      </div>
    </main>
  )
}

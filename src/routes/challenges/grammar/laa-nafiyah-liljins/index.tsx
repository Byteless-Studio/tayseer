import { createFileRoute, Link } from '@tanstack/react-router'
import { QuizCarousel } from '#/components/QuizCarousel'
import type { StrictQuizItem } from '#/routes/challenges/-quiz-types'

export const Route = createFileRoute('/challenges/grammar/laa-nafiyah-liljins/')({
  head: () => ({ meta: [{ title: 'Lā al-Nāfiyah li-l-Jins — Grammar — Tayseer' }] }),
  component: TopicPage,
})

const quizItems: StrictQuizItem[] = [
  {
    q: 'ما هي "لا" النافية للجنس؟\nWhat is لا النافية للجنس?',
    options: [
      '"لا" تنفي كل أفراد الجنس على سبيل الشمول، والاسم بعدها مبني على الفتح بلا تنوين\nA لا that denies every single member of a category, categorically — the noun after it is built (مبني) on fatḥah, with no تنوين',
      '"لا" تنهى عن فعل مضارع وتجزمه\nA لا that forbids a present-tense verb and puts it in jazm',
      '"لا" تنفي فعلاً واحداً في الماضي فقط\nA لا that negates only a single past-tense verb',
      '"لا" حرف عطف يفيد الاستدراك\nA لا that functions as a coordinating particle of correction',
    ],
    correctIndex: 0,
    a: 'لا النافية للجنس تنفي الجنس كله نفياً عاماً وشاملاً، لا فرداً بعينه؛ واسمها مبني على الفتح بلا تنوين، في محل نصب اسم "لا".\nلا النافية للجنس denies an entire category, categorically and comprehensively — not just one individual. Its noun is built on fatḥah with no تنوين, in the accusative position as اسم لا.',
  },
  {
    q: 'ما حكم الاسم الواقع بعد "لا" النافية للجنس؟\nWhat is the rule for the noun placed after لا النافية للجنس?',
    options: [
      'مبني على الفتح، بلا تنوين\nBuilt (مبني) on fatḥah, with no تنوين',
      'معرب مرفوع بالضمة\nFully inflected (معرب), nominative with ḍammah',
      'معرب مجرور بالكسرة\nFully inflected (معرب), genitive with kasrah',
      'مبني على الضم مع تنوين\nBuilt on ḍamm, with تنوين',
    ],
    correctIndex: 0,
    a: 'اسم "لا" النافية للجنس (إذا كان مفرداً غير مضاف) يُبنى على الفتح ولا يُنوَّن، بخلاف الاسم المعرب العادي.\nThe noun of لا النافية للجنس (when it is a single, non-مضاف noun) is built on fatḥah and never carries تنوين — unlike an ordinarily inflected noun.',
  },
  {
    q: 'لَا رَيْبَ فِيهِ — ما إعراب "رَيْبَ"؟\nIn لَا رَيْبَ فِيهِ ("There is no doubt in it"), what is the parse of رَيْبَ?',
    options: [
      'اسم "لا" النافية للجنس، مبني على الفتح في محل نصب\nاسم لا النافية للجنس, built on fatḥah, in the accusative position',
      'مبتدأ مرفوع بالضمة\nSubject (مبتدأ), nominative with ḍammah',
      'اسم مجرور بحرف جر محذوف\nA genitive noun with an elided preposition',
      'فاعل لفعل "لا"\nThe فاعل of the verb لا',
    ],
    correctIndex: 0,
    a: '"رَيْبَ" اسم "لا" النافية للجنس، مبني على الفتح لا محل رفع أو جر، والجملة تنفي وجود أي ريب مهما كان.\nرَيْبَ is اسم لا النافية للجنس, built on fatḥah — never nominative or genitive. The sentence denies the existence of any doubt whatsoever, of any kind.',
  },
  {
    q: 'لَا إِلٰهَ إِلَّا اللّٰهُ — ما إعراب "إِلٰهَ"؟\nIn لَا إِلٰهَ إِلَّا اللّٰهُ ("There is no god but Allah"), what is the parse of إِلٰهَ?',
    options: [
      'اسم "لا" النافية للجنس، مبني على الفتح، ينفي وجود أي إله من أصله\nاسم لا النافية للجنس, built on fatḥah, denying the existence of any god whatsoever',
      'خبر "لا" مرفوع\nThe predicate (خبر) of لا, nominative',
      'مفعول به منصوب\nDirect object (مفعول به), accusative',
      'اسم إشارة مبني\nA demonstrative pronoun, built',
    ],
    correctIndex: 0,
    a: '"إِلٰهَ" اسم "لا" النافية للجنس، مبني على الفتح، وتنفي الجملة وجود أي إله من جنس الآلهة أصلاً، إلا الله وحده.\nإِلٰهَ is اسم لا النافية للجنس, built on fatḥah — the sentence denies the existence of any god at all, of any kind, except Allah alone.',
  },
  {
    q: 'لَا طَالِبَ فِي الْفَصْلِ — ما إعراب "طَالِبَ"؟\nIn لَا طَالِبَ فِي الْفَصْلِ ("There is no student in the classroom"), what is the parse of طَالِبَ?',
    options: [
      'اسم "لا" النافية للجنس، مبني على الفتح، ينفي وجود أي طالب مطلقاً\nاسم لا النافية للجنس, built on fatḥah, denying the presence of any student whatsoever',
      'خبر مقدم مرفوع\nA fronted predicate (خبر), nominative',
      'نعت مجرور\nA genitive نعت',
      'مضاف إليه مجرور\nمضاف إليه, genitive',
    ],
    correctIndex: 0,
    a: '"طَالِبَ" اسم "لا" النافية للجنس، مبني على الفتح بلا تنوين، وتنفي الجملة وجود أي طالب في الفصل إطلاقاً.\nطَالِبَ is اسم لا النافية للجنس, built on fatḥah with no تنوين — the sentence denies the presence of any student in the classroom whatsoever.',
  },
  {
    q: 'ما الفرق بين لا النافية للجنس ولا الناهية؟\nWhat is the difference between لا النافية للجنس and لا الناهية (prohibitive لا)?',
    options: [
      'النافية للجنس تدخل على اسم فتنفي جنسه، والناهية تدخل على فعل مضارع فتجزمه وتفيد النهي\nالنافية للجنس precedes a noun and denies its whole category, while الناهية precedes a present-tense verb, puts it in jazm, and expresses a prohibition',
      'كلتاهما تدخلان على الأسماء فقط\nBoth only ever precede nouns',
      'الناهية تنفي الجنس، والنافية للجنس تنهى عن الفعل\nالناهية denies a category, while النافية للجنس forbids an action',
      'لا فرق بينهما\nThere is no difference between them',
    ],
    correctIndex: 0,
    a: 'لا النافية للجنس تدخل على اسم نكرة فتبنيه على الفتح وتنفي جنسه كله (لَا طَالِبَ فِي الْفَصْلِ). لا الناهية تدخل على فعل مضارع فتجزمه وتفيد طلب الترك (لَا تَذْهَبْ).\nلا النافية للجنس precedes an indefinite noun, builds it on fatḥah, and denies its whole category (لَا طَالِبَ فِي الْفَصْلِ). لا الناهية precedes a present-tense verb, puts it into jazm, and expresses a command to stop (لَا تَذْهَبْ).',
  },
  {
    q: 'ما الفرق بين لا النافية للجنس ولا النافية العادية؟\nWhat is the difference between لا النافية للجنس and ordinary لا النافية?',
    options: [
      'النافية للجنس تبني اسمها على الفتح وتنفي الجنس شمولاً، أما النافية العادية فلا تبني ما بعدها ويبقى معرباً، وقد تتكرر\nالنافية للجنس builds its noun on fatḥah and denies a whole category, while ordinary النافية leaves what follows fully inflected (معرب) and may repeat',
      'كلتاهما تبنيان الاسم بعدهما على الفتح\nBoth build the following noun on fatḥah',
      'النافية العادية تجزم الفعل المضارع دائماً\nOrdinary النافية always puts a present-tense verb in jazm',
      'لا فرق بينهما في الإعراب أو المعنى\nThere is no difference between them in grammar or meaning',
    ],
    correctIndex: 0,
    a: 'لا النافية للجنس تخص نفي الجنس كله وتبني اسمها على الفتح (لَا طَالِبَ فِي الْفَصْلِ). لا النافية العادية تنفي جملة اسمية أو فعلية دون أن تبني ما بعدها، ويبقى الاسم معرباً (الطَّالِبُ لَا مُهْمِلٌ)، وقد تتكرر بمعنى "لا...ولا...".\nلا النافية للجنس is specific to denying a whole category, and it builds its noun on fatḥah (لَا طَالِبَ فِي الْفَصْلِ). Ordinary لا النافية simply negates a nominal or verbal sentence without building what follows — the noun stays fully inflected (الطَّالِبُ لَا مُهْمِلٌ) — and it can repeat, as in "لا...ولا..." ("neither...nor").',
  },
  {
    q: 'أيّ جملة فيها خطأ لأن الاسم بعد "لا" النافية للجنس أخذ تنويناً؟\nWhich sentence is wrong because the noun after لا النافية للجنس carries تنوين?',
    options: [
      'لَا رَيْبَ فِيهِ\nlā rayba fīhi — "There is no doubt in it"',
      'لَا رَيْبٌ فِيهِ (يُراد بها نفي الجنس)\nlā raybun fīhi (intended as categorical negation)',
      'لَا طَالِبَ فِي الْفَصْلِ\nlā ṭāliba fī l-faṣli — "There is no student in the classroom"',
      'لَا إِلٰهَ إِلَّا اللّٰهُ\nlā ilāha illā llāhu — "There is no god but Allah"',
    ],
    correctIndex: 1,
    a: '"لَا رَيْبٌ فِيهِ" خطأ إن قُصد نفي الجنس: اسم "لا" النافية للجنس يُبنى على الفتح بلا تنوين، فالصواب "لَا رَيْبَ فِيهِ".\nلَا رَيْبٌ فِيهِ is wrong if categorical negation is intended: اسم لا النافية للجنس is built on fatḥah with no تنوين — the correct form is لَا رَيْبَ فِيهِ.',
  },
  {
    q: 'أيّ جملة فيها خطأ لأن الاسم بعد "لا" النافية للجنس عُرِّف بأل؟\nWhich sentence is wrong because the noun after لا النافية للجنس was made definite with أل?',
    options: [
      'لَا طَالِبَ فِي الْفَصْلِ\nlā ṭāliba fī l-faṣli — "There is no student in the classroom"',
      'لَا الطَّالِبَ فِي الْفَصْلِ (يُراد بها نفي الجنس)\nlā ṭ-ṭāliba fī l-faṣli (intended as categorical negation)',
      'لَا رَيْبَ فِيهِ\nlā rayba fīhi — "There is no doubt in it"',
      'لَا إِلٰهَ إِلَّا اللّٰهُ\nlā ilāha illā llāhu — "There is no god but Allah"',
    ],
    correctIndex: 1,
    a: '"لَا الطَّالِبَ فِي الْفَصْلِ" خطأ: لا النافية للجنس تحتاج اسماً نكرة عاماً يقبل البناء، ولا تدخل على اسم معرف بأل؛ التعريف بأل يخصص الفرد لا الجنس كله.\nلَا الطَّالِبَ فِي الْفَصْلِ is wrong: لا النافية للجنس requires an indefinite, generic noun that can be built — it cannot govern a noun made definite with أل, since أل specifies one individual rather than the whole category.',
  },
  {
    q: 'أكمل: لَا ___ فِي الْفَصْلِ (نفي وجود أي طالب مطلقاً)\nComplete: لَا ___ فِي الْفَصْلِ (denying the presence of any student whatsoever)',
    options: [
      'طَالِبَ\nṭāliba — built on fatḥah, no تنوين',
      'طَالِبٌ\nṭālibun',
      'الطَّالِبَ\naṭ-ṭāliba',
      'طَالِبٍ\nṭālibin',
    ],
    correctIndex: 0,
    a: 'اسم "لا" النافية للجنس يُبنى على الفتح بلا تنوين وبلا أل، فالجواب الصحيح "طَالِبَ".\nاسم لا النافية للجنس is built on fatḥah, with no تنوين and no أل — the correct fill is طَالِبَ.',
  },
  {
    q: 'أكمل: لَا ___ فِيهِ (نفي وجود أي شك مطلقاً)\nComplete: لَا ___ فِيهِ (denying the presence of any doubt whatsoever)',
    options: [
      'رَيْبَ\nrayba — built on fatḥah, no تنوين',
      'رَيْبٌ\nraybun',
      'الرَّيْبَ\nar-rayba',
      'رَيْبٍ\nraybin',
    ],
    correctIndex: 0,
    a: 'اسم "لا" النافية للجنس يُبنى على الفتح بلا تنوين، فالجواب الصحيح "رَيْبَ" على غرار "لَا رَيْبَ فِيهِ".\nاسم لا النافية للجنس is built on fatḥah with no تنوين — the correct fill is رَيْبَ, matching لَا رَيْبَ فِيهِ.',
  },
  {
    q: 'ما نوع "لا" في "لَا تَكْذِبْ!"؟\nWhat kind of لا appears in لَا تَكْذِبْ! ("Do not lie!")?',
    options: [
      'لا الناهية، تجزم الفعل المضارع وتفيد النهي\nلا الناهية — it puts the present-tense verb in jazm and expresses a prohibition',
      'لا النافية للجنس، تبني الاسم بعدها\nلا النافية للجنس, building the noun after it',
      'لا النافية العادية، تنفي جملة اسمية\nOrdinary لا النافية, negating a nominal sentence',
      'لا زائدة لا معنى لها\nA superfluous لا with no meaning',
    ],
    correctIndex: 0,
    a: '"لَا تَكْذِبْ" فيها لا الناهية، تدخل على المضارع "تَكْذِبُ" فتجزمه (تَكْذِبْ بسكون آخره) وتفيد طلب الترك، بخلاف النافية للجنس التي تدخل على الأسماء فقط.\nلَا تَكْذِبْ contains لا الناهية — it precedes the present-tense تَكْذِبُ and puts it in jazm (تَكْذِبْ, ending in sukūn), expressing a command to refrain. This differs from لا النافية للجنس, which only ever precedes nouns.',
  },
  {
    q: 'ما إعراب "طَالِبَ" من حيث نوع الإعراب: أهو معرب أم مبني؟\nIs طَالِبَ in لَا طَالِبَ فِي الْفَصْلِ inflected (معرب) or built (مبني)?',
    options: [
      'مبني على الفتح في محل نصب اسم "لا"\nBuilt (مبني) on fatḥah, in the accusative position as اسم لا',
      'معرب منصوب بالفتحة الظاهرة كأي اسم عادي\nInflected (معرب), accusative with an overt fatḥah, like any ordinary noun',
      'معرب مرفوع بالضمة\nInflected (معرب), nominative with ḍammah',
      'مبني على الضم\nBuilt on ḍamm',
    ],
    correctIndex: 0,
    a: 'اسم "لا" النافية للجنس (المفرد غير المضاف) يُبنى على الفتح، لا يُعرب بحركات الإعراب العادية، وإن كان في محل نصب اسم "لا".\nThe noun of لا النافية للجنس (when singular and not مضاف) is built on fatḥah — it does not take ordinary inflectional vowels, even though it occupies the accusative position as اسم لا.',
  },
  {
    q: 'حَوّل الجملة العادية "لَيْسَ فِي الْفَصْلِ طَالِبٌ" (نفي جزئي محتمل) إلى تركيب "لا" النافية للجنس (نفي شامل قاطع).\nTransform the ordinary negation لَيْسَ فِي الْفَصْلِ طَالِبٌ (a negation that could be partial) into a لا النافية للجنس construction (a categorical, absolute denial).',
    options: [
      'لَا طَالِبَ فِي الْفَصْلِ\nlā ṭāliba fī l-faṣli — "There is no student in the classroom whatsoever"',
      'لَيْسَ طَالِبًا فِي الْفَصْلِ\nlaysa ṭāliban fī l-faṣli',
      'مَا طَالِبٌ فِي الْفَصْلِ\nmā ṭālibun fī l-faṣli',
      'لَا الطَّالِبُ فِي الْفَصْلِ\nlā ṭ-ṭālibu fī l-faṣli',
    ],
    correctIndex: 0,
    a: '"لَا طَالِبَ فِي الْفَصْلِ" تنفي وجود أي طالب البتة، نفياً شاملاً قاطعاً للجنس كله، وهو أقوى في القطع من نفي "ليس" الذي قد يحتمل الجزئية.\nلَا طَالِبَ فِي الْفَصْلِ denies the existence of any student at all — an absolute, categorical denial of the whole class of "students," stronger and more definitive than the negation with لَيْسَ, which could be read as partial.',
  },
  {
    q: 'ما دلالة لَا إِلٰهَ إِلَّا اللّٰهُ من حيث نفي الجنس؟\nWhat does لَا إِلٰهَ إِلَّا اللّٰهُ signify, in terms of denying a whole category?',
    options: [
      'نفي وجود أي إله من جنس الآلهة كافة، مع إثبات الألوهية لله وحده بأداة الاستثناء "إلا"\nDenying the existence of any deity of any kind whatsoever from the whole category of "gods," while affirming divinity for Allah alone via the exception particle إلا',
      'نفي إله واحد بعينه فقط، مع بقاء احتمال وجود آلهة أخرى\nDenying only one specific deity, while leaving open the possibility of other deities',
      'إثبات أن هناك آلهة متعددة\nAffirming that there are multiple deities',
      'لا علاقة للجملة بنفي الجنس أصلاً\nThe sentence has nothing to do with categorical negation at all',
    ],
    correctIndex: 0,
    a: 'لَا النافية للجنس في "لَا إِلٰهَ" تنفي جنس الألوهية عن كل ما سوى الله نفياً شاملاً قاطعاً، ثم يأتي الاستثناء "إِلَّا اللّٰهُ" ليثبتها لله وحده.\nلا النافية للجنس in لَا إِلٰهَ categorically and absolutely denies divinity to anything and everything besides Allah, and then the exception إِلَّا اللّٰهُ affirms it for Allah alone.',
  },
  {
    q: 'أيّ من الأمثلة التالية يستخدم "لا" النافية للجنس على غرار الأمثلة الثلاثة الأصلية (لا رَيبَ، لا إلٰهَ، لا طالبَ)؟\nWhich of the following examples uses لا النافية للجنس in the same pattern as the three original examples (لا رَيبَ، لا إلٰهَ، لا طالبَ)?',
    options: [
      'لَا كَسَلَ فِي طَرِيقِ النَّجَاحِ\nlā kasala fī ṭarīqi n-najāḥi — "There is no laziness on the path to success"',
      'لَا الْكَسَلُ فِي طَرِيقِ النَّجَاحِ\nlā l-kasalu fī ṭarīqi n-najāḥi',
      'لَا كَسَلٌ فِي طَرِيقِ النَّجَاحِ\nlā kasalun fī ṭarīqi n-najāḥi',
      'لَا تَكْسَلْ فِي طَرِيقِ النَّجَاحِ\nlā taksal fī ṭarīqi n-najāḥi',
    ],
    correctIndex: 0,
    a: '"لَا كَسَلَ فِي طَرِيقِ النَّجَاحِ" يطابق النمط: اسم نكرة مبني على الفتح بلا تنوين ولا أل بعد "لا"، تماماً كـ"لَا رَيْبَ" و"لَا طَالِبَ".\nلَا كَسَلَ فِي طَرِيقِ النَّجَاحِ matches the pattern: an indefinite noun built on fatḥah, with no تنوين and no أل, right after لا — exactly like لَا رَيْبَ and لَا طَالِبَ.',
  },
  {
    q: 'ما إعراب الجار والمجرور "فِي الْفَصْلِ" في: لَا طَالِبَ فِي الْفَصْلِ؟\nWhat is the grammatical role of the prepositional phrase فِي الْفَصْلِ in لَا طَالِبَ فِي الْفَصْلِ?',
    options: [
      'شبه جملة في محل رفع خبر "لا"\nA prepositional phrase in the nominative position, serving as خبر لا',
      'اسم "لا" النافية للجنس\nاسم لا النافية للجنس itself',
      'مفعول به منصوب\nDirect object (مفعول به), accusative',
      'بدل من "طالبَ"\nA بدل for طالبَ',
    ],
    correctIndex: 0,
    a: 'بعد اسم "لا" المبني يأتي الخبر غالباً شبه جملة، وهنا "فِي الْفَصْلِ" في محل رفع خبر "لا"، مبيّناً أين انتفى وجود أي طالب.\nAfter the built اسم لا, the خبر is often a prepositional phrase. Here فِي الْفَصْلِ is in the nominative position as خبر لا, specifying where the presence of any student is denied.',
  },
  {
    q: 'صحّح الجملة التالية إن قُصد بها نفي الجنس: لَا مُهْمِلٌ فِي الصَّفِّ\nCorrect the following sentence if categorical negation is intended: لَا مُهْمِلٌ فِي الصَّفِّ',
    options: [
      'لَا مُهْمِلَ فِي الصَّفِّ\nlā muhmila fī ṣ-ṣaffi — "There is no negligent person in the class whatsoever"',
      'لَا مُهْمِلٌ فِي الصَّفِّ (unchanged)\nlā muhmilun fī ṣ-ṣaffi (unchanged)',
      'لَا الْمُهْمِلَ فِي الصَّفِّ\nlā l-muhmila fī ṣ-ṣaffi',
      'لَيْسَ مُهْمِلٌ فِي الصَّفِّ\nlaysa muhmilun fī ṣ-ṣaffi',
    ],
    correctIndex: 0,
    a: '"مُهْمِلٌ" بالتنوين والرفع خطأ لنفي الجنس؛ اسم "لا" النافية للجنس يُبنى على الفتح بلا تنوين، فالصواب "لَا مُهْمِلَ فِي الصَّفِّ".\nمُهْمِلٌ with تنوين and ḍammah is wrong for categorical negation — اسم لا النافية للجنس is built on fatḥah with no تنوين, so the correction is لَا مُهْمِلَ فِي الصَّفِّ.',
  },
  {
    q: 'مَا نَوْعُ "لَا" فِي: لَا الطَّالِبُ حَاضِرٌ وَلَا الْمُدَرِّسُ؟\nWhat kind of لا appears in لَا الطَّالِبُ حَاضِرٌ وَلَا الْمُدَرِّسُ ("Neither the student nor the teacher is present")?',
    options: [
      'لا النافية العادية، تنفي جملة اسمية ولا تبني ما بعدها، وتتكرر بمعنى "لا...ولا..."\nOrdinary لا النافية — it negates a nominal sentence without building what follows, and it repeats, meaning "neither...nor..."',
      'لا النافية للجنس، تبني الاسم بعدها على الفتح\nلا النافية للجنس, building the noun after it on fatḥah',
      'لا الناهية، تجزم فعلاً مضارعاً\nلا الناهية, putting a present-tense verb in jazm',
      'لا زائدة لا معنى لها\nA superfluous لا with no meaning',
    ],
    correctIndex: 0,
    a: '"الطَّالِبُ" و"الْمُدَرِّسُ" معرفان بأل ومرفوعان (مبتدأ ومعطوف عليه)، ولا بني للجنس لا تدخل على المعرفة ولا تترك ما بعدها مرفوعاً؛ فهذه لا النافية العادية، وتكرارها بالواو يفيد "لا...ولا...".\nالطَّالِبُ and الْمُدَرِّسُ are definite with أل and nominative (a مبتدأ and a coordinated noun) — لا النافية للجنس never governs a definite noun nor leaves it nominative. This is ordinary لا النافية, and its repetition with و gives the "neither...nor..." sense.',
  },
  {
    q: 'لخّص: أيّ العناصر التالية تصف "لا" النافية للجنس وصفاً صحيحاً كاملاً؟\nSummarize: which of the following fully and correctly describes لا النافية للجنس?',
    options: [
      '"لا" تدخل على اسم نكرة فتنفي جنسه كله نفياً شاملاً قاطعاً، ويُبنى الاسم على الفتح بلا تنوين، بخلاف النافية العادية (لا تبني) والناهية (تدخل على الفعل المضارع فتجزمه)\nA لا that precedes an indefinite noun and denies its entire category, categorically and absolutely — the noun is built on fatḥah with no تنوين — unlike ordinary النافية (does not build) or الناهية (precedes a present-tense verb and puts it in jazm)',
      '"لا" تدخل على الفعل المضارع فتجزمه وتفيد الأمر بالترك\nA لا that precedes a present-tense verb, putting it in jazm, expressing a command to refrain',
      '"لا" حرف عطف يشرك اسمين في نفس الحكم\nA لا that functions as a coordinating particle, sharing one case between two nouns',
      '"لا" تدخل على الاسم المعرف بأل فتنصبه\nA لا that precedes a noun made definite with أل and puts it in the accusative',
    ],
    correctIndex: 0,
    a: 'هذا هو التعريف الجامع: لا النافية للجنس تنفي جنس اسمها النكرة كله نفياً شاملاً، ويُبنى اسمها على الفتح بلا تنوين — كما في لَا رَيْبَ فِيهِ، لَا إِلٰهَ إِلَّا اللّٰهُ، لَا طَالِبَ فِي الْفَصْلِ — وتتميز بذلك عن لا النافية العادية (لا تبني ما بعدها) ولا الناهية (تجزم الفعل المضارع).\nThis is the complete definition: لا النافية للجنس denies the entire category of its indefinite noun, absolutely — the noun is built on fatḥah with no تنوين, as in لَا رَيْبَ فِيهِ, لَا إِلٰهَ إِلَّا اللّٰهُ, and لَا طَالِبَ فِي الْفَصْلِ. This sets it apart from ordinary لا النافية (does not build what follows) and لا الناهية (puts a present-tense verb into jazm).',
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
            Topic 57 of 62
          </p>
          <h1 className="font-serif tracking-[-0.02em] text-3xl font-bold text-foreground leading-tight mb-3">
            <span
              dir="rtl"
              lang="ar"
              style={{ fontFamily: "'Noto Naskh Arabic', serif" }}
              className="mr-2"
            >
              لا النافية للجنس
            </span>
            — Categorical Negation
          </h1>
          <p className="text-muted-foreground text-base max-w-xl">
            <bdi lang="ar">لا النافية للجنس</bdi> denies an entire category at once — لَا رَيْبَ
            فِيهِ ("there is no doubt in it, whatsoever"), لَا إِلٰهَ إِلَّا اللّٰهُ, لَا طَالِبَ
            فِي الْفَصْلِ. Its noun is <bdi lang="ar">مبني على الفتح</bdi> with no{' '}
            <bdi lang="ar">تنوين</bdi>. This sets it apart from ordinary{' '}
            <span className="font-medium text-foreground"><bdi lang="ar">لا النافية</bdi></span>{' '}
            (which leaves the noun fully inflected and may repeat) and{' '}
            <span className="font-medium text-foreground"><bdi lang="ar">لا الناهية</bdi></span>{' '}
            (which governs a present-tense verb and puts it in jazm).
          </p>
        </div>
      </div>
      <div className="mx-auto w-[min(720px,calc(100%-2rem))] py-8">
        <QuizCarousel items={quizItems} />
      </div>
    </main>
  )
}

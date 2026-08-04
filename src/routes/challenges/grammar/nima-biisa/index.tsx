import { createFileRoute, Link } from '@tanstack/react-router'
import { QuizCarousel } from '#/components/QuizCarousel'
import type { StrictQuizItem } from '#/routes/challenges/-quiz-types'

export const Route = createFileRoute('/challenges/grammar/nima-biisa/')({
  head: () => ({ meta: [{ title: "Ni'ma & Bi'sa — Grammar — Tayseer" }] }),
  component: TopicPage,
})

const quizItems: StrictQuizItem[] = [
  {
    q: 'ما نوع "نِعْمَ" و"بِئْسَ" من حيث التصرف؟\nWhat kind of verbs are نِعْمَ and بِئْسَ, in terms of inflection?',
    options: [
      'فعلان مضارعان متصرفان\nFully-inflected present-tense verbs',
      'فعلان ماضيان جامدان لا يتصرفان\nFrozen (جامد) past-tense verbs — no present or imperative form',
      'اسما فعل\nPseudo-verb nouns (اسم فعل)',
      'حرفان لا محل لهما\nParticles with no verbal force',
    ],
    correctIndex: 1,
    a: 'نِعْمَ (للمدح) وبِئْسَ (للذم) فعلان ماضيان جامدان: لا يأتي منهما مضارع ولا أمر، ويلزمان صيغة واحدة ثابتة لإنشاء المدح أو الذم.\nنِعْمَ (praise) and بِئْسَ (blame) are frozen (جامد) past-tense verbs: they have no present-tense or imperative form, and always stay in this one fixed shape to express praise or blame.',
  },
  {
    q: 'ما التركيب الأساسي لجملة المدح أو الذم بـ"نعم/بئس"؟\nWhat is the basic structure of a نعم/بئس praise-or-blame sentence?',
    options: [
      'فعل + مفعول به فقط\nVerb + direct object only',
      'مبتدأ + خبر فقط\nSubject + predicate only',
      'فعل (نعم/بئس) + فاعل + مخصوص بالمدح أو الذم\nVerb (نعم/بئس) + فاعل + مخصوص — the noun singled out for praise or blame',
      'حرف نداء + منادى\nVocative particle + the noun addressed',
    ],
    correctIndex: 2,
    a: 'التركيب: الفعل (نعم أو بئس) ثم الفاعل (من مُدح أو ذُمّ جنسه) ثم المخصوص بالمدح أو الذم (من طُبّق عليه الحكم بعينه).\nThe structure is: the verb (نعم or بئس), then its فاعل (the category being praised or blamed), then the مخصوص (the specific noun the judgment is pinned on).',
  },
  {
    q: 'في "نِعْمَ الرَّجُلُ بِلَالٌ" ما إعراب "الرَّجُلُ"؟\nParse الرَّجُلُ in نِعْمَ الرَّجُلُ بِلَالٌ ("What an excellent man Bilal is!").',
    options: [
      'فاعل مرفوع\nSubject (فاعل), nominative',
      'مفعول به منصوب\nDirect object (مفعول به), accusative',
      'مبتدأ مرفوع\nSubject of a nominal sentence, nominative',
      'مضاف إليه مجرور\nمضاف إليه, genitive',
    ],
    correctIndex: 0,
    a: 'الرَّجُلُ فاعل نِعْمَ، مرفوع، وهو معرف بأل، يبيّن الجنس الذي وقع عليه المدح.\nالرَّجُلُ is the فاعل of نِعْمَ, nominative — definite with أل, naming the category being praised (men, as a class).',
  },
  {
    q: 'وما إعراب "بِلَالٌ" في نفس الجملة؟\nAnd the grammatical role of بِلَالٌ in the same sentence?',
    options: [
      'فاعل ثانٍ منصوب\nA second subject, accusative',
      'مضاف إليه مجرور\nمضاف إليه, genitive',
      'المخصوص بالمدح، مرفوع\nThe مخصوص (the one specifically praised), nominative',
      'حال منصوب\nحال ("circumstantial"), accusative',
    ],
    correctIndex: 2,
    a: 'بِلَالٌ هو المخصوص بالمدح، مرفوع، وهو خبر لمبتدأ محذوف تقديره "هو" — أي: (هو) بلالٌ.\nبِلَالٌ is the مخصوص — the specific person the praise lands on — nominative, functioning as the predicate of an implied subject "هو": (هو) بلالٌ.',
  },
  {
    q: 'في "بِئْسَ الْخُلُقُ الْكَذِبُ" ما إعراب "الْخُلُقُ"؟\nParse الْخُلُقُ in بِئْسَ الْخُلُقُ الْكَذِبُ ("What a bad trait lying is!").',
    options: [
      'مبتدأ مرفوع\nSubject of a nominal sentence, nominative',
      'فاعل مرفوع\nSubject (فاعل), nominative',
      'مفعول به منصوب\nDirect object (مفعول به), accusative',
      'المخصوص بالذم\nThe مخصوص (the one singled out for blame)',
    ],
    correctIndex: 1,
    a: 'الْخُلُقُ فاعل بِئْسَ، مرفوع، معرف بأل، يبيّن جنس الصفة المذمومة.\nالْخُلُقُ is the فاعل of بِئْسَ, nominative, definite with أل, naming the category of trait being blamed.',
  },
  {
    q: 'وما إعراب "الْكَذِبُ" في نفس الجملة؟\nAnd the grammatical role of الْكَذِبُ in the same sentence?',
    options: [
      'فاعل مرفوع\nSubject (فاعل), nominative',
      'المخصوص بالذم، مرفوع\nThe مخصوص (singled out for blame), nominative',
      'مضاف إليه مجرور\nمضاف إليه, genitive',
      'خبر منصوب\nPredicate, accusative',
    ],
    correctIndex: 1,
    a: 'الْكَذِبُ المخصوص بالذم، مرفوع، وهو خبر لمبتدأ محذوف تقديره "هو" — أي: (هو) الكذبُ.\nالْكَذِبُ is the مخصوص — the specific thing singled out for blame — nominative, predicate of an implied subject "هو": (هو) الكذبُ.',
  },
  {
    q: 'الفاعل في "نِعْمَ الرَّجُلُ" معرَّف بـ___\nThe فاعل in نِعْمَ الرَّجُلُ is made definite with ___',
    options: [
      'أل التعريف\nThe definite article أل',
      'الإضافة إلى ضمير\nIdāfah to a pronoun',
      'الإشارة\nA demonstrative',
      'العلمية (اسم علم)\nBeing a proper name',
    ],
    correctIndex: 0,
    a: 'أشيع صور فاعل نعم/بئس هي اسم معرف بأل يدل على الجنس، كما في الرَّجُلُ والْخُلُقُ.\nThe most common form of the فاعل of نعم/بئس is a noun made definite with أل, naming a category — as with الرَّجُلُ and الْخُلُقُ.',
  },
  {
    q: 'أكمل: بِئْسَ ___ الكذبُ (اختر الفاعل الصحيح، بمعنى "الصفة")\nComplete: بِئْسَ ___ الكذبُ — supply the فاعل, meaning "the trait"',
    options: [
      'خُلُقٌ\nkhuluqun — indefinite, no أل',
      'الْخُلُقُ\nal-khuluqu — definite with أل, nominative',
      'خُلُقًا\nkhuluqan — accusative',
      'خُلُقِ\nkhuluqi — genitive, no أل',
    ],
    correctIndex: 1,
    a: 'فاعل بِئْسَ هنا اسم معرف بأل، مرفوع: بِئْسَ الْخُلُقُ الْكَذِبُ.\nHere the فاعل of بِئْسَ is a definite noun with أل, nominative: بِئْسَ الْخُلُقُ الْكَذِبُ.',
  },
  {
    q: 'أكمل: نِعْمَ ___ بِلَالٌ (اختر الفاعل الصحيح، بمعنى "الرجل")\nComplete: نِعْمَ ___ بِلَالٌ — supply the فاعل, meaning "the man"',
    options: [
      'رَجُلٌ\nrajulun — indefinite, no أل',
      'رَجُلًا\nrajulan — accusative',
      'الرَّجُلُ\nal-rajulu — definite with أل, nominative',
      'رَجُلِ\nrajuli — genitive, no أل',
    ],
    correctIndex: 2,
    a: 'فاعل نِعْمَ هنا اسم معرف بأل، مرفوع: نِعْمَ الرَّجُلُ بِلَالٌ.\nHere the فاعل of نِعْمَ is a definite noun with أل, nominative: نِعْمَ الرَّجُلُ بِلَالٌ.',
  },
  {
    q: 'أيّ من نِعْمَ وبِئْسَ يُستعمل للمدح، وأيّهما للذم؟\nWhich of نِعْمَ and بِئْسَ is for praise, and which for blame?',
    options: [
      'نِعْمَ للمدح، بِئْسَ للذم\nنِعْمَ for praise, بِئْسَ for blame',
      'نِعْمَ للذم، بِئْسَ للمدح\nنِعْمَ for blame, بِئْسَ for praise',
      'كلاهما للمدح فقط\nBoth are for praise only',
      'كلاهما للذم فقط\nBoth are for blame only',
    ],
    correctIndex: 0,
    a: 'نِعْمَ فعل إنشاء مدح، وبِئْسَ فعل إنشاء ذم — لا يتبادلان الوظيفة.\nنِعْمَ generates praise, and بِئْسَ generates blame — the two are never interchangeable.',
  },
  {
    q: 'أيّ جملة فيها خطأ في تركيب المدح أو الذم؟\nWhich sentence contains a grammatical error in its praise/blame construction?',
    options: [
      'نِعْمَ الرَّجُلُ بِلَالٌ\nThe فاعل is definite with أل, nominative',
      'نِعْمَ رَجُلٌ بِلَالٌ\nThe فاعل is indefinite and nominative, with no أل and no النصب على التمييز',
      'بِئْسَ الْخُلُقُ الْكَذِبُ\nThe فاعل is definite with أل, nominative',
      'نِعْمَ الطَّالِبُ خَالِدٌ\nThe فاعل is definite with أل, nominative',
    ],
    correctIndex: 1,
    a: '"نِعْمَ رَجُلٌ بِلَالٌ" خطأ: فاعل نعم/بئس لا يكون نكرة مرفوعة بلا أل؛ فإما أن يُعرَّف بأل (نِعْمَ الرَّجُلُ)، وإما أن يُنصب نكرة على التمييز مع ضمير مستتر (نِعْمَ رَجُلًا بِلَالٌ).\n"نِعْمَ رَجُلٌ بِلَالٌ" is wrong: the فاعل of نعم/بئس cannot be a bare indefinite noun in the nominative. It must either be definite with أل (نِعْمَ الرَّجُلُ), or an indefinite noun accusative as تمييز with a hidden pronoun as the true فاعل (نِعْمَ رَجُلًا بِلَالٌ).',
  },
  {
    q: 'ما نوع الفعل "نِعْمَ" من حيث الزمن الحقيقي؟\nWhat is the true time-reference of the verb نِعْمَ?',
    options: [
      'فعل ماضٍ جامد لإنشاء المدح، لا يدل على زمن ماضٍ حقيقي\nA frozen past-tense verb that generates praise — it does not signal real past time',
      'فعل مضارع يدل على الحال\nA present-tense verb signalling the present moment',
      'فعل أمر\nAn imperative verb',
      'فعل مستقبل مقدَّر\nAn implied future-tense verb',
    ],
    correctIndex: 0,
    a: 'نِعْمَ وبِئْسَ في صيغة الماضي شكلاً فقط؛ وظيفتهما إنشاء حكم المدح أو الذم في الحال، لا الإخبار عن حدث ماضٍ.\nنِعْمَ and بِئْسَ are past-tense only in form; their function is to generate the judgment of praise or blame in the present moment, not to report a past event.',
  },
  {
    q: 'ما الوجهان المعروفان لإعراب المخصوص بالمدح أو الذم؟\nWhat are the two recognized ways to parse the مخصوص (the noun singled out for praise/blame)?',
    options: [
      'فاعل ثانٍ، أو مفعول به\nA second فاعل, or a مفعول به',
      'خبر لمبتدأ محذوف تقديره "هو"، أو مبتدأ مؤخر والجملة قبله خبر مقدم\nPredicate of an implied subject "هو," or a delayed subject with the earlier clause as its predicate',
      'حال، أو تمييز\nحال, or تمييز',
      'بدل، أو عطف بيان\nبدل, or عطف بيان',
    ],
    correctIndex: 1,
    a: 'يجوز إعراب المخصوص خبراً لمبتدأ محذوف تقديره "هو" (هو بلالٌ)، أو مبتدأ مؤخراً وجملة الفعل والفاعل قبله خبراً مقدماً — وكلاهما مرفوع في الحالين.\nThe مخصوص may be parsed as the predicate of an implied subject "هو" (هو بلالٌ), or as a delayed subject (مبتدأ مؤخر) with the preceding verb-and-فاعل clause as its predicate — either way it is nominative.',
  },
  {
    q: 'أكمل: بِئْسَ الصَّدِيقُ ___ (اختر المخصوص المناسب، اسم علم مرفوع)\nComplete: بِئْسَ الصَّدِيقُ ___ — supply the مخصوص, a nominative proper name',
    options: [
      'خَالِدًا\nKhālidan — accusative',
      'خَالِدٍ\nKhālidin — genitive',
      'خَالِدٌ\nKhālidun — nominative',
      'الْخَالِدُ\nal-Khālidu — a proper noun cannot take أل',
    ],
    correctIndex: 2,
    a: 'المخصوص مرفوع دائماً، فيصح: بِئْسَ الصَّدِيقُ خَالِدٌ.\nThe مخصوص is always nominative, so the correct completion is: بِئْسَ الصَّدِيقُ خَالِدٌ.',
  },
  {
    q: 'حوّل الجملة الاسمية "الكذبُ خُلُقٌ سيئٌ" إلى أسلوب ذم بـ"بئس"\nConvert the nominal sentence "الكذبُ خُلُقٌ سيئٌ" ("Lying is a bad trait") into a بئس blame construction',
    options: [
      'بِئْسَ الْخُلُقُ الْكَذِبُ\nVerb + فاعل الْخُلُقُ + مخصوص الْكَذِبُ',
      'بِئْسَ خُلُقٌ الْكَذِبُ\nفاعل left indefinite, without أل',
      'الْكَذِبُ بِئْسَ الْخُلُقُ\nالْكَذِبُ placed before the verb بِئْسَ',
      'بِئْسَ الْكَذِبُ الْخُلُقُ\nفاعل and مخصوص swapped',
    ],
    correctIndex: 0,
    a: 'التركيب الصحيح: بِئْسَ (الفعل) + الْخُلُقُ (الفاعل المعرف بأل، الصفة المذمومة) + الْكَذِبُ (المخصوص بالذم بعينه).\nThe correct construction: بِئْسَ (the verb) + الْخُلُقُ (the definite فاعل, the blameworthy category) + الْكَذِبُ (the مخصوص, the specific thing blamed).',
  },
  {
    q: 'حوّل "بلالٌ رجلٌ ممتاز" إلى أسلوب مدح بـ"نعم"\nConvert "بلالٌ رجلٌ ممتاز" ("Bilal is an excellent man") into a نعم praise construction',
    options: [
      'نِعْمَ الرَّجُلُ بِلَالٌ\nVerb + فاعل الرَّجُلُ + مخصوص بِلَالٌ',
      'نِعْمَ بِلَالٌ الرَّجُلُ\nفاعل and مخصوص swapped',
      'نِعْمَ رَجُلٌ بِلَالٌ\nفاعل left indefinite, nominative, without أل or نصب تمييز',
      'بِلَالٌ نِعْمَ الرَّجُلُ\nبِلَالٌ placed before the verb نِعْمَ',
    ],
    correctIndex: 0,
    a: 'التركيب الصحيح: نِعْمَ (الفعل) + الرَّجُلُ (الفاعل المعرف بأل) + بِلَالٌ (المخصوص بالمدح بعينه).\nThe correct construction: نِعْمَ (the verb) + الرَّجُلُ (the definite فاعل) + بِلَالٌ (the مخصوص, the specific person praised).',
  },
  {
    q: 'أعرب "نِعْمَ" نفسها إعراباً تاماً في "نِعْمَ الرَّجُلُ بِلَالٌ"\nGive the full parse of نِعْمَ itself in نِعْمَ الرَّجُلُ بِلَالٌ',
    options: [
      'فعل مضارع مرفوع\nA present-tense verb, indicative',
      'فعل ماضٍ جامد مبني على الفتح لإنشاء المدح، لا محل له من الإعراب\nA frozen past-tense verb, built on فتحة, generating praise — no grammatical position of its own',
      'اسم فعل أمر\nAn imperative pseudo-verb noun',
      'حرف جواب\nA response particle',
    ],
    correctIndex: 1,
    a: 'نِعْمَ فعل ماضٍ جامد لا يتصرف، مبني على الفتح، ولا محل له من الإعراب — وظيفته إنشاء حكم المدح فقط.\nنِعْمَ is a frozen, uninflected past-tense verb, built on فتحة, with no grammatical position of its own — its only job is to generate the judgment of praise.',
  },
  {
    q: 'لماذا يُسمى نِعْمَ وبِئْسَ "فعلين جامدين"؟\nWhy are نِعْمَ and بِئْسَ called "frozen (جامد) verbs"?',
    options: [
      'لأنهما يدلان على البرودة حرفياً\nBecause they literally mean "cold"',
      'لأنهما لا يتصرفان: لا يأتي منهما مضارع ولا أمر، ويلزمان صيغة واحدة\nBecause they don\'t inflect: no present or imperative form exists from them, and they stay in one fixed shape',
      'لأنهما مبنيان على الضم\nBecause they are built on ḍamma',
      'لأنهما لا يأخذان فاعلاً\nBecause they take no فاعل',
    ],
    correctIndex: 1,
    a: '"جامد" في الصرف يعني الفعل الذي لا يتصرف بين الأزمنة الثلاثة؛ نعم وبئس يلزمان صيغة الماضي فقط، فلا مضارع لهما ولا أمر بهذا المعنى.\n"جامد" ("frozen") means a verb that doesn\'t inflect across the three tenses. نعم and بئس are stuck in the past-tense shape only — there is no present or imperative form of them carrying this meaning.',
  },
  {
    q: 'أيّ جملة فيها خطأ نحوي في تركيب المدح أو الذم؟\nWhich sentence has a grammatical error in its praise/blame construction?',
    options: [
      'نِعْمَ الرَّجُلُ بِلَالٌ\nفاعل nominative, definite',
      'بِئْسَ الْخُلُقَ الْكَذِبُ\nفاعل marked accusative (منصوب)',
      'بِئْسَ الْخُلُقُ الْكَذِبُ\nفاعل nominative, definite',
      'نِعْمَ الطَّالِبُ خَالِدٌ\nفاعل nominative, definite',
    ],
    correctIndex: 1,
    a: '"بِئْسَ الْخُلُقَ الْكَذِبُ" خطأ: فاعل نعم/بئس يجب أن يكون مرفوعاً دائماً، فنُصب "الْخُلُقَ" هنا خطأ؛ الصواب بِئْسَ الْخُلُقُ الْكَذِبُ.\n"بِئْسَ الْخُلُقَ الْكَذِبُ" is wrong: the فاعل of نعم/بئس must always be nominative — making الْخُلُقَ accusative here is an error. The correct form is بِئْسَ الْخُلُقُ الْكَذِبُ.',
  },
  {
    q: 'ما إعراب الفاعل في "نعم/بئس" دائماً، بصرف النظر عن كل شيء آخر؟\nWhat is the case of the فاعل of نعم/بئس, always — regardless of anything else?',
    options: [
      'منصوب دائماً\nAlways accusative',
      'مرفوع دائماً\nAlways nominative',
      'مجرور دائماً\nAlways genitive',
      'مجزوم دائماً\nAlways jussive',
    ],
    correctIndex: 1,
    a: 'فاعل نعم وبئس مرفوع دائماً، سواء كان معرفاً بأل كالرَّجُلُ والْخُلُقُ، أو مضافاً لمعرف بأل.\nThe فاعل of نعم and بئس is always nominative — whether it is definite with أل, like الرَّجُلُ and الْخُلُقُ, or مضاف to something definite with أل.',
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
            Topic 60 of 62
          </p>
          <h1 className="font-serif tracking-[-0.02em] text-3xl font-bold text-foreground leading-tight mb-3">
            <span
              dir="rtl"
              lang="ar"
              style={{ fontFamily: "'Noto Naskh Arabic', serif" }}
              className="mr-2"
            >
              نِعْمَ وبِئْسَ
            </span>
            — Praise and Blame
          </h1>
          <p className="text-muted-foreground text-base max-w-xl">
            <bdi lang="ar">نِعْمَ</bdi> and <bdi lang="ar">بِئْسَ</bdi> are frozen (<bdi lang="ar">جامد</bdi>)
            past-tense verbs that generate praise or blame. Structure:{' '}
            <span className="font-medium text-foreground">verb + فاعل + مخصوص</span> — the{' '}
            <bdi lang="ar">فاعل</bdi> (definite with <bdi lang="ar">أل</bdi>) names the category, and the{' '}
            <bdi lang="ar">مخصوص</bdi> pins the judgment on one specific noun.{' '}
            <bdi lang="ar">نِعْمَ الرَّجُلُ بِلَالٌ</bdi> ("What an excellent man Bilal is!"),{' '}
            <bdi lang="ar">بِئْسَ الْخُلُقُ الْكَذِبُ</bdi> ("What a bad trait lying is!").
          </p>
        </div>
      </div>
      <div className="mx-auto w-[min(720px,calc(100%-2rem))] py-8">
        <QuizCarousel items={quizItems} />
      </div>
    </main>
  )
}

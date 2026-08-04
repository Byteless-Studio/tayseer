import { createFileRoute, Link } from '@tanstack/react-router'
import { QuizCarousel } from '#/components/QuizCarousel'
import type { StrictQuizItem } from '#/routes/challenges/-quiz-types'

export const Route = createFileRoute('/challenges/grammar/istithna/')({
  head: () => ({ meta: [{ title: "Istithnā (Exception with Illā) — Grammar — Tayseer" }] }),
  component: TopicPage,
})

const quizItems: StrictQuizItem[] = [
  {
    q: 'في جملة تامة مثبتة (المستثنى منه مذكور، والجملة غير منفية)، ما حكم الاسم بعد "إلّا"؟\nIn a COMPLETE, POSITIVE sentence (مستثنى منه mentioned, sentence not negated), what case does the noun after إلّا take?',
    options: [
      'مرفوع وجوباً\nObligatorily مرفوع (nominative)',
      'منصوب وجوباً على الاستثناء\nObligatorily منصوب (accusative) — النصب على الاستثناء',
      'مجرور وجوباً\nObligatorily مجرور (genitive)',
      'يجوز فيه الرفع أو النصب\nEither مرفوع or منصوب is allowed',
    ],
    correctIndex: 1,
    a: 'في التام المثبت يجب نصب المستثنى وجوباً، لا خيار آخر: حَضَرَ الطُّلَّابُ إِلَّا حَامِدًا.\nIn a تام مثبت sentence, the مستثنى (the noun after إلّا) must be منصوب — no other case is allowed: حَضَرَ الطُّلَّابُ إِلَّا حَامِدًا ("The students came, except Hamid").',
  },
  {
    q: 'حَضَرَ الطُّلَّابُ إِلَّا حَامِدًا — ما إعراب "حَامِدًا"؟\nParse حَامِدًا in حَضَرَ الطُّلَّابُ إِلَّا حَامِدًا.',
    options: [
      'فاعل مرفوع\nSubject (فاعل), nominative',
      'مستثنى منصوب بإلّا\nمستثنى (the excepted noun), accusative, governed by إلّا',
      'مضاف إليه مجرور\nمضاف إليه, genitive',
      'بدل مرفوع\nAppositive (بدل), nominative',
    ],
    correctIndex: 1,
    a: 'حَامِدًا مستثنى منصوب بإلّا، وجوباً، لأن الجملة تامة (المستثنى منه "الطلاب" مذكور) ومثبتة (غير منفية).\nحَامِدًا is the مستثنى, obligatorily accusative because the sentence is تام (its مستثنى منه, الطلاب, is stated) and مثبت (not negated).',
  },
  {
    q: '"حضر الطلاب إلا حامدًا" — ما نوع هذا الأسلوب من حيث التمام والإثبات؟\nWhat kind of istithnā pattern is "حضر الطلاب إلا حامدًا"?',
    options: [
      'تام مثبت\nComplete and affirmative — complete and positive',
      'تام منفي\nComplete and negative — complete and negative',
      'ناقص منفي (مفرغ)\nناقص منفي (مفرغ) — incomplete and negative',
      'ناقص مثبت\nناقص مثبت — incomplete and positive (not a real category)',
    ],
    correctIndex: 0,
    a: 'هذا أسلوب تام لأن المستثنى منه (الطلاب) مذكور، ومثبت لأن الجملة غير منفية — ولهذا وجب نصب المستثنى.\nThis is تام because the مستثنى منه (الطلاب) is stated, and مثبت because the sentence is not negated — which is exactly why the مستثنى must be منصوب.',
  },
  {
    q: 'في جملة منفية يُذكر فيها المستثنى منه، ما حكم الاسم بعد "إلّا"؟\nIn a NEGATIVE sentence where the مستثنى منه IS mentioned, what case does the noun after إلّا take?',
    options: [
      'منصوب وجوباً فقط\nObligatorily منصوب only',
      'مجرور وجوباً فقط\nObligatorily مجرور only',
      'يجوز فيه النصب على الاستثناء، أو اتباع إعراب المستثنى منه على البدل\nEither منصوب (النصب على الاستثناء) or matching the مستثنى منه\'s own case (as a بدل) is allowed',
      'مرفوع وجوباً فقط\nObligatorily مرفوع only',
    ],
    correctIndex: 2,
    a: 'في المنفي التام يجوز وجهان: نصب المستثنى على الاستثناء، أو إتباعه لإعراب المستثنى منه بدلاً منه: مَا حَضَرَ أَحَدٌ إِلَّا حَامِدٌ / حَامِدًا.\nIn a تام منفي sentence, two options are valid: منصوب on the إستثناء reading, or matching the case of the مستثنى منه as its بدل: مَا حَضَرَ أَحَدٌ إِلَّا حَامِدٌ (رفع، بدل) or حَامِدًا (نصب).',
  },
  {
    q: 'مَا حَضَرَ أَحَدٌ إِلَّا حَامِدٌ — ما إعراب "حَامِدٌ" هنا؟\nParse حَامِدٌ (nominative) in مَا حَضَرَ أَحَدٌ إِلَّا حَامِدٌ.',
    options: [
      'مستثنى منصوب على الاستثناء\nمستثنى, accusative, on the استثناء reading',
      'بدل من "أحدٌ" مرفوع مثله\nAn appositive (بدل) of أحدٌ, taking the same case, nominative',
      'فاعل ثانٍ\nA second subject',
      'مفعول به منصوب\nDirect object (مفعول به), accusative',
    ],
    correctIndex: 1,
    a: 'حَامِدٌ هنا بدل من "أحدٌ" (المستثنى منه)، فيتبعه في إعرابه فيكون مرفوعاً مثله.\nHere حَامِدٌ is a بدل ("appositive") of أحدٌ, the مستثنى منه — it takes the same case as أحدٌ, hence nominative.',
  },
  {
    q: 'مَا حَضَرَ أَحَدٌ إِلَّا حَامِدًا — ما إعراب "حَامِدًا" هنا؟\nParse حَامِدًا (accusative) in مَا حَضَرَ أَحَدٌ إِلَّا حَامِدًا.',
    options: [
      'بدل من "أحدٌ" منصوب مثله\nAn appositive of أحدٌ, matching its case',
      'مستثنى منصوب على الاستثناء\nمستثنى, accusative, on the استثناء reading',
      'مفعول لأجله\nAn accusative of purpose (مفعول لأجله)',
      'مجرور بحرف جر محذوف\nGenitive after an implied preposition',
    ],
    correctIndex: 1,
    a: 'هذا الوجه الثاني الجائز في المنفي التام: نصب حَامِدًا على الاستثناء مباشرة، بدل اتباعه لإعراب المستثنى منه.\nThis is the second valid option in a تام منفي sentence: حَامِدًا is منصوب directly on the استثناء reading, rather than matching the case of the مستثنى منه.',
  },
  {
    q: 'بحسب النصب على الاستثناء، أكمل: مَا حَضَرَ أَحَدٌ إِلَّا ___ (من "خالد")\nOn the استثناء (accusative) reading, complete: مَا حَضَرَ أَحَدٌ إِلَّا ___ — from خالد',
    options: [
      'خَالِدٌ\nKhālidun — nominative',
      'خَالِدًا\nKhālidan — accusative, on the استثناء reading',
      'خَالِدٍ\nKhālidin — genitive',
      'خَالِدُ\nKhālidu — no tanwīn',
    ],
    correctIndex: 1,
    a: 'على قراءة النصب على الاستثناء، يُنصب المستثنى بصرف النظر عن إعراب المستثنى منه: مَا حَضَرَ أَحَدٌ إِلَّا خَالِدًا.\nOn the استثناء reading, the مستثنى is منصوب regardless of the case of the مستثنى منه: مَا حَضَرَ أَحَدٌ إِلَّا خَالِدًا.',
  },
  {
    q: 'بحسب البدل (اتباع المستثنى منه)، أكمل: مَا حَضَرَ أَحَدٌ إِلَّا ___ (من "خالد")\nOn the بدل (matching case) reading, complete: مَا حَضَرَ أَحَدٌ إِلَّا ___ — from خالد',
    options: [
      'خَالِدًا\nKhālidan — accusative',
      'خَالِدٍ\nKhālidin — genitive',
      'خَالِدٌ\nKhālidun — nominative, matching أحدٌ',
      'خَالِدَ\nKhālida, no tanwīn',
    ],
    correctIndex: 2,
    a: 'على قراءة البدل، يتبع المستثنى إعراب المستثنى منه "أحدٌ" المرفوع، فيكون خَالِدٌ مرفوعاً أيضاً.\nOn the بدل reading, the مستثنى matches the case of the مستثنى منه, أحدٌ, which is nominative — so خَالِدٌ is nominative too.',
  },
  {
    q: 'متى يُسمى الاستثناء "مفرَّغًا"؟\nWhen is an istithnā called مفرَّغ ("emptied")?',
    options: [
      'حين تكون الجملة مثبتة\nWhen the sentence is positive',
      'حين يُذكر المستثنى منه في جملة منفية\nWhen the مستثنى منه is mentioned in a negative sentence',
      'حين لا يُذكر المستثنى منه في جملة منفية\nWhen the مستثنى منه is NOT mentioned, in a negative sentence',
      'حين يتكرر "إلّا" مرتين\nWhen إلّا is repeated twice',
    ],
    correctIndex: 2,
    a: 'الاستثناء المفرَّغ هو الاستثناء الناقص المنفي: جملة منفية لم يُذكر فيها المستثنى منه أصلاً، فيُترك الموضع "فارغاً" ليشغله الاسم بعد إلّا.\nA مفرَّغ ("emptied") istithnā is the ناقص منفي pattern: a negative sentence where the مستثنى منه is never stated at all, leaving its slot "empty" for the noun after إلّا to fill.',
  },
  {
    q: 'في الاستثناء المفرَّغ (الناقص المنفي)، كيف يُعرب الاسم بعد "إلّا"؟\nIn a مفرَّغ (ناقص منفي) istithnā, how is the noun after إلّا parsed?',
    options: [
      'منصوب دائماً على الاستثناء\nAlways منصوب, on the استثناء reading',
      'مرفوع دائماً\nAlways مرفوع',
      'حسب موقعه في الجملة، كأنّ "إلّا" غير موجودة\nAccording to its normal role in the sentence, as if إلّا were not there',
      'مجرور دائماً بإلّا نفسها\nAlways مجرور, governed by إلّا itself',
    ],
    correctIndex: 2,
    a: 'في المفرَّغ لا يوجد مستثنى منه يُقاس عليه، فيأخذ الاسم بعد إلّا الإعراب الذي يستحقه من تركيب الجملة، تماماً كما لو حُذفت إلّا.\nWith no مستثنى منه to reference, the noun after إلّا simply takes whatever case the sentence structure demands — exactly as if إلّا were removed entirely.',
  },
  {
    q: 'مَا رَأَيْتُ إِلَّا حَامِدًا — ما إعراب "حَامِدًا"؟\nParse حَامِدًا in مَا رَأَيْتُ إِلَّا حَامِدًا ("I saw only Hamid").',
    options: [
      'مستثنى منصوب بإلّا مباشرة\nمستثنى, accusative because of إلّا itself',
      'مفعول به منصوب، كأنّ الجملة "رأيتُ حامدًا"\nDirect object (مفعول به), accusative — as if the sentence were رأيتُ حامدًا',
      'فاعل مرفوع\nSubject (فاعل), nominative',
      'حال منصوب\nحال ("circumstantial"), accusative',
    ],
    correctIndex: 1,
    a: 'هذا استثناء مفرَّغ: لا مستثنى منه مذكوراً، فتُعرب "حامدًا" حسب موقعها الطبيعي في الجملة — مفعول به لفعل "رأيتُ" — كأنّ "إلّا" غير موجودة.\nThis is مفرَّغ: no مستثنى منه is stated, so حامدًا is parsed by its natural role — the direct object of رأيتُ — exactly as if إلّا were absent.',
  },
  {
    q: 'مَا مَرَرْتُ إِلَّا بِحَامِدٍ — ما إعراب "حَامِدٍ"؟\nParse حَامِدٍ in مَا مَرَرْتُ إِلَّا بِحَامِدٍ ("I passed by no one but Hamid").',
    options: [
      'مستثنى منصوب\nمستثنى, accusative',
      'اسم مجرور بحرف الجر "الباء"\nA noun governed by the preposition الباء, genitive',
      'فاعل مرفوع\nSubject (فاعل), nominative',
      'مبتدأ مرفوع\nSubject of a nominal sentence, nominative',
    ],
    correctIndex: 1,
    a: 'استثناء مفرَّغ أيضاً: الأصل "مررتُ بحامدٍ"، فالباء حرف جر يجر "حامدٍ" بصرف النظر عن وجود إلّا.\nAlso مفرَّغ: the underlying sentence is مررتُ بحامدٍ, so الباء governs حامدٍ in the genitive regardless of إلّا being there.',
  },
  {
    q: 'أكمل بصيغة المفرَّغ: مَا سَمِعْتُ إِلَّا ___ (من "الحقّ")\nComplete in the مفرَّغ pattern: مَا سَمِعْتُ إِلَّا ___ — from الحقّ',
    options: [
      'الحقُّ\nal-ḥaqqu — nominative',
      'الحقِّ\nal-ḥaqqi — genitive',
      'الحقَّ\nal-ḥaqqa — accusative, as مفعول به of سمعتُ',
      'حقًّا\nḥaqqan — indefinite, without the article',
    ],
    correctIndex: 2,
    a: 'الأصل "سمعتُ الحقَّ"، فـ"الحقَّ" مفعول به منصوب لفعل "سمعتُ"، وهذا هو إعرابها هنا أيضاً لأن الاستثناء مفرَّغ.\nThe underlying sentence is سمعتُ الحقَّ, so الحقَّ is the accusative direct object of سمعتُ — and that remains its parse here, since this istithnā is مفرَّغ.',
  },
  {
    q: 'حوّل "حضر الطلابُ إلا حامدًا" (تام مثبت) إلى استثناء مفرَّغ باستبعاد المستثنى منه ونفي الجملة\nConvert "حضر الطلابُ إلا حامدًا" (تام مثبت) into a مفرَّغ pattern by dropping the مستثنى منه and negating',
    options: [
      'مَا حَضَرَ إِلَّا حَامِدٌ\nحامدٌ becomes فاعل, nominative',
      'مَا حَضَرَ إِلَّا حَامِدًا\nحامدًا stays accusative',
      'حَضَرَ إِلَّا حَامِدٍ\nGenitive, no negation',
      'مَا حَضَرَ أَحَدٌ إِلَّا حَامِدٌ\nRe-introduces a مستثنى منه, which the instruction ruled out',
    ],
    correctIndex: 0,
    a: 'بلا مستثنى منه مذكور، يصير الاستثناء مفرَّغاً، وتُعرب "حامدٌ" حسب موقعها الطبيعي: فاعل لفعل "حضر"، فترفع: مَا حَضَرَ إِلَّا حَامِدٌ ("لم يحضر إلا حامد").\nWith no مستثنى منه stated, this becomes مفرَّغ — حامدٌ is parsed by its natural role, the فاعل of حضر, hence nominative: مَا حَضَرَ إِلَّا حَامِدٌ ("Only Hamid attended").',
  },
  {
    q: 'أيّ جملة فيها خطأ في إعراب الاستثناء؟\nWhich sentence contains an error in its istithnā parsing?',
    options: [
      'حَضَرَ الطُّلَّابُ إِلَّا حَامِدًا\nحامدًا accusative in a تام مثبت sentence',
      'حَضَرَ الطُّلَّابُ إِلَّا حَامِدٌ\nحامدٌ left nominative in a تام مثبت sentence',
      'مَا حَضَرَ أَحَدٌ إِلَّا حَامِدٌ\nحامدٌ nominative, as بدل, in a تام منفي sentence',
      'مَا رَأَيْتُ إِلَّا حَامِدًا\nحامدًا accusative, مفرَّغ',
    ],
    correctIndex: 1,
    a: '"حَضَرَ الطُّلَّابُ إِلَّا حَامِدٌ" خطأ: الجملة تامة مثبتة، فيجب نصب المستثنى وجوباً؛ الصواب حَضَرَ الطُّلَّابُ إِلَّا حَامِدًا.\n"حَضَرَ الطُّلَّابُ إِلَّا حَامِدٌ" is wrong: the sentence is تام مثبت, so the مستثنى must obligatorily be منصوب — the correct form is حَضَرَ الطُّلَّابُ إِلَّا حَامِدًا.',
  },
  {
    q: 'هل يجوز في الجملة التامة المثبتة أن يُرفع المستثنى على البدل، كما في المنفية؟\nIn a تام مثبت sentence, can the مستثنى be نominative, as a بدل — the way it can in a negative sentence?',
    options: [
      'نعم، الوجهان جائزان دائماً\nYes, both options are always valid',
      'لا، يجب نصب المستثنى وجوباً في التام المثبت فقط دون خيار آخر\nNo — in a تام مثبت sentence the مستثنى must obligatorily be منصوب, with no alternative',
      'نعم، لكن فقط مع أسماء الأعلام\nYes, but only with proper names',
      'لا، بل يجب جره\nNo — it must be مجرور instead',
    ],
    correctIndex: 1,
    a: 'الوجهان (النصب أو اتباع المستثنى منه) لا يجوزان إلا في المنفي؛ أما التام المثبت فحكمه واحد لا غير: نصب المستثنى وجوباً.\nThe two-way choice (accusative or matching the مستثنى منه) is only available when the sentence is negative. A تام مثبت sentence has exactly one rule: the مستثنى is obligatorily منصوب.',
  },
  {
    q: 'أعرب "حَامِدًا" إعراباً كاملاً في "مَا رَأَيْتُ إِلَّا حَامِدًا"\nGive the full parse of حَامِدًا in مَا رَأَيْتُ إِلَّا حَامِدًا',
    options: [
      'مستثنى منصوب بإلّا وعلامة نصبه الفتحة\nمستثنى, accusative because of إلّا, marked by fatḥa',
      'مفعول به منصوب وعلامة نصبه الفتحة، على الاستثناء المفرَّغ\nDirect object (مفعول به), accusative, marked by fatḥa, on the مفرَّغ reading',
      'فاعل مرفوع وعلامة رفعه الضمة\nSubject (فاعل), nominative, marked by ḍamma',
      'مضاف إليه مجرور وعلامة جره الكسرة\nمضاف إليه, genitive, marked by kasra',
    ],
    correctIndex: 1,
    a: 'لأن الاستثناء مفرَّغ (لا مستثنى منه مذكور)، تُعرب حَامِدًا حسب موقعها الحقيقي في الجملة: مفعول به منصوب لفعل "رأيتُ"، وعلامة نصبه الفتحة.\nBecause this istithnā is مفرَّغ (no مستثنى منه stated), حَامِدًا is parsed by its real role: the accusative direct object of رأيتُ, marked by fatḥa.',
  },
  {
    q: 'أكمل بصيغة البدل: مَا اجْتَهَدَ الطُّلَّابُ إِلَّا ___ (من "محمد")\nComplete on the بدل reading: مَا اجْتَهَدَ الطُّلَّابُ إِلَّا ___ — from محمد',
    options: [
      'مُحَمَّدًا\nMuḥammadan — accusative, on the استثناء reading',
      'مُحَمَّدٌ\nMuḥammadun — nominative, matching الطلابُ',
      'مُحَمَّدٍ\nMuḥammadin — genitive',
      'مُحَمَّدُ\nMuḥammadu, no tanwīn — a proper noun never takes أل, but it does take tanwīn here',
    ],
    correctIndex: 1,
    a: 'على قراءة البدل، يتبع المستثنى إعراب المستثنى منه "الطلابُ" المرفوع: مَا اجْتَهَدَ الطُّلَّابُ إِلَّا مُحَمَّدٌ.\nOn the بدل reading, the مستثنى matches the case of the مستثنى منه, الطلابُ, which is nominative: مَا اجْتَهَدَ الطُّلَّابُ إِلَّا مُحَمَّدٌ.',
  },
  {
    q: 'ما الفرق الأساسي بين الاستثناء التام والاستثناء المفرَّغ؟\nWhat is the core difference between تام and مفرَّغ istithnā?',
    options: [
      'التام: يُذكر المستثنى منه (مثبتاً أو منفياً). المفرَّغ: لا يُذكر المستثنى منه، ويُعرب الاسم بعد إلّا حسب موقعه في الجملة\nتام: the مستثنى منه is mentioned (positive or negative). مفرَّغ: no مستثنى منه, so the noun after إلّا is parsed by its role in the sentence',
      'التام دائماً منفي، والمفرَّغ دائماً مثبت\nتام is always negative, and مفرَّغ is always positive',
      'لا فرق بينهما إطلاقاً\nThere is no difference at all',
      'التام يستخدم "إلّا"، والمفرَّغ يستخدم "غير"\nتام uses إلّا, while مفرَّغ uses غير',
    ],
    correctIndex: 0,
    a: 'التام هو ما ذُكر فيه المستثنى منه (سواء كانت الجملة مثبتة أو منفية)؛ والمفرَّغ (الناقص المنفي) لا يُذكر فيه المستثنى منه، فيُعرب الاسم بعد إلّا حسب دوره الطبيعي في الجملة.\nتام is when the مستثنى منه is stated (whether the sentence is positive or negative). مفرَّغ (ناقص منفي) is when it is not, so the noun after إلّا takes whatever role it would naturally have in the sentence.',
  },
  {
    q: 'في "مَا مَرَرْتُ إِلَّا بِحَامِدٍ" ما نوع هذا الاستثناء؟\nWhat kind of istithnā is مَا مَرَرْتُ إِلَّا بِحَامِدٍ?',
    options: [
      'تام مثبت\nComplete and affirmative',
      'تام منفي\nComplete and negative',
      'ناقص منفي (مفرَّغ)، لأن المستثنى منه غير مذكور\nناقص منفي (مفرَّغ) — the مستثنى منه is not mentioned',
      'ليس استثناء أصلاً\nNot an istithnā at all',
    ],
    correctIndex: 2,
    a: 'الجملة منفية بـ"ما" ولا يوجد فيها مستثنى منه مذكور قبل إلّا، فهي استثناء ناقص منفي (مفرَّغ)، ولهذا تُعرب "حامدٍ" حسب موقعها الحقيقي: مجرورة بالباء.\nThe sentence is negated with ما, and no مستثنى منه appears before إلّا — so this is ناقص منفي (مفرَّغ), which is why حامدٍ is parsed by its real role: genitive, governed by الباء.',
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
            Topic 59 of 62
          </p>
          <h1 className="font-serif tracking-[-0.02em] text-3xl font-bold text-foreground leading-tight mb-3">
            <span
              dir="rtl"
              lang="ar"
              style={{ fontFamily: "'Noto Naskh Arabic', serif" }}
              className="mr-2"
            >
              الاستثناء بإلّا
            </span>
            — Exception with <bdi lang="ar">إلّا</bdi>
          </h1>
          <p className="text-muted-foreground text-base max-w-xl">
            In a COMPLETE, POSITIVE sentence, the noun after <bdi lang="ar">إلّا</bdi> is obligatorily{' '}
            <bdi lang="ar">منصوب</bdi>: <bdi lang="ar">حَضَرَ الطُّلَّابُ إِلَّا حَامِدًا</bdi>. In a NEGATIVE
            sentence with the <bdi lang="ar">مستثنى منه</bdi> mentioned, it may be <bdi lang="ar">منصوب</bdi>{' '}
            or match the <bdi lang="ar">مستثنى منه</bdi>'s case as a <bdi lang="ar">بدل</bdi>:{' '}
            <bdi lang="ar">مَا حَضَرَ أَحَدٌ إِلَّا حَامِدٌ / حَامِدًا</bdi>. When the{' '}
            <bdi lang="ar">مستثنى منه</bdi> is not mentioned at all (<bdi lang="ar">الاستثناء المفرَّغ</bdi>),
            the noun takes whatever case the sentence demands, as if <bdi lang="ar">إلّا</bdi> were absent:{' '}
            <bdi lang="ar">مَا رَأَيْتُ إِلَّا حَامِدًا</bdi>، <bdi lang="ar">مَا مَرَرْتُ إِلَّا بِحَامِدٍ</bdi>.
          </p>
        </div>
      </div>
      <div className="mx-auto w-[min(720px,calc(100%-2rem))] py-8">
        <QuizCarousel items={quizItems} />
      </div>
    </main>
  )
}

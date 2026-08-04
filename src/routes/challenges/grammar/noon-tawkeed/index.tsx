import { createFileRoute, Link } from '@tanstack/react-router'
import { QuizCarousel } from '#/components/QuizCarousel'
import type { StrictQuizItem } from '#/routes/challenges/-quiz-types'

export const Route = createFileRoute('/challenges/grammar/noon-tawkeed/')({
  head: () => ({ meta: [{ title: 'Nūn al-Tawkīd — Grammar — Tayseer' }] }),
  component: TopicPage,
})

const quizItems: StrictQuizItem[] = [
  {
    q: 'ما نوعا نون التوكيد؟\nWhat are the two kinds of نون التوكيد ("emphatic nūn")?',
    options: [
      'الثقيلة (ـَنَّ) والخفيفة (ـَنْ)\nThe heavy one (ـَنَّ, doubled) and the light one (ـَنْ, single sākin)',
      'المتصلة والمنفصلة\nAttached and detached',
      'الأصلية والزائدة\nOriginal and augmentative',
      'المرفوعة والمجزومة\nNominative and jussive',
    ],
    correctIndex: 0,
    a: 'نون التوكيد نوعان: نون التوكيد الثقيلة (ـَنَّ، مشددة)، ونون التوكيد الخفيفة (ـَنْ، ساكنة مفردة)، وكلتاهما تضيفان معنى التأكيد على الفعل.\nThere are two forms: the heavy نون التوكيد (ـَنَّ, doubled/shadda), and the light نون التوكيد (ـَنْ, a single sākin nūn). Both add emphasis to the verb they attach to.',
  },
  {
    q: 'ما تأثير اتصال نون التوكيد المباشر بفعل مضارع مفرد على إعرابه؟\nWhat happens to a singular present-tense verb\'s inflection when نون التوكيد attaches directly to it?',
    options: [
      'يبقى معرباً كما كان\nIt stays inflected (معرب) exactly as before',
      'يصير الفعل مبنياً على الفتح، بدل إعرابه الأصلي رفعاً أو نصباً أو جزماً\nThe verb becomes built (مبني) on فتحة, instead of being inflected as nominative, accusative, or jussive',
      'يصير الفعل مبنياً على السكون\nThe verb becomes built on سكون',
      'يتحول الفعل إلى الماضي\nThe verb turns into a past-tense form',
    ],
    correctIndex: 1,
    a: 'القاعدة: إذا اتصل بفعل مضارع مفرد نون توكيد مباشرة (ثقيلة أو خفيفة)، بُني الفعل على الفتح، وفقد إعرابه الأصلي (رفعاً كان أو نصباً أو جزماً).\nThe rule: when نون التوكيد (heavy or light) attaches directly to a singular present-tense verb, the verb becomes built (مبني) on فتحة, losing whatever inflection it had before — indicative, subjunctive, or jussive.',
  },
  {
    q: 'في "لَأَكْتُبَنَّ الدَّرْسَ" ما إعراب "أَكْتُبَنَّ"؟\nParse أَكْتُبَنَّ in لَأَكْتُبَنَّ الدَّرْسَ ("I will surely write the lesson!").',
    options: [
      'فعل مضارع مرفوع بالضمة\nA present-tense verb, indicative, marked by ḍamma',
      'فعل مضارع مبني على الفتح لاتصاله بنون التوكيد الثقيلة\nA present-tense verb, built on فتحة, because of the attached heavy نون التوكيد',
      'فعل مضارع منصوب بالفتحة\nA present-tense verb, subjunctive, marked by fatḥa',
      'فعل أمر مبني على الفتح\nAn imperative verb, built on فتحة',
    ],
    correctIndex: 1,
    a: 'أَكْتُبَنَّ فعل مضارع اتصلت به نون التوكيد الثقيلة مباشرة، فبُني على الفتح، وفقد إعرابه الأصلي.\nأَكْتُبَنَّ is a present-tense verb with the heavy نون التوكيد attached directly — so it is built on فتحة, no longer carrying its original inflection.',
  },
  {
    q: 'ما وظيفة اللام في "وَاللّٰهِ لَأَكْتُبَنَّ الدَّرْسَ"؟\nWhat does the لام in وَاللّٰهِ لَأَكْتُبَنَّ الدَّرْسَ do?',
    options: [
      'لام الجر\nA preposition لام',
      'لام الأمر\nThe imperative لام',
      'لام القسم (الموطئة للقسم)، تمهّد للقسم وتؤكد وقوع الفعل\nThe لام of oath (لام القسم), preparing for the oath and reinforcing that the verb will happen',
      'لام التعليل\nThe لام of purpose',
    ],
    correctIndex: 2,
    a: 'هذه اللام تسمى اللام الموطئة للقسم: تمهّد لجواب قسم مذكور قبلها (وَاللّٰهِ)، وتؤكد معنى وقوع الفعل، وغالباً ما يقترن جوابها بنون التوكيد.\nThis is اللام الموطئة للقسم ("the لام that paves the way for an oath"): it anticipates the oath stated before it (وَاللّٰهِ) and reinforces that the verb will certainly happen — its verb is often paired with نون التوكيد.',
  },
  {
    q: 'في "لَا تَذْهَبَنَّ!" ما نوع "لَا"؟\nWhat kind of لَا appears in لَا تَذْهَبَنَّ! ("Do not go!")?',
    options: [
      'لا النافية للجنس\nThe categorical negator لا النافية للجنس',
      'لا الناهية الجازمة\nThe prohibitive, jazm-inducing لا (لا الناهية)',
      'لا النافية للفعل الماضي\nThe past-tense negator لا',
      'لا الزائدة\nAn augmentative, meaningless لا',
    ],
    correctIndex: 1,
    a: 'هذه لا الناهية، تجزم الفعل المضارع عادة؛ لكن هنا اتصل الفعل بنون التوكيد الثقيلة فبُني على الفتح بدل الجزم، مع بقاء معنى النهي المؤكد.\nThis is لا الناهية, which normally puts the present-tense verb in jazm. Here, though, نون التوكيد attaches directly, so the verb is built on فتحة instead of being jussive — while the prohibitive meaning remains, now emphasized.',
  },
  {
    q: 'أكمل: لَتَجْتَهِدَ___ (اختر نون التوكيد الثقيلة الصحيحة)\nComplete: لَتَجْتَهِدَ___ — supply the correct heavy نون التوكيد',
    options: [
      'نْ\n-n — the light form',
      'نَّ\n-nna — the heavy form, giving لَتَجْتَهِدَنَّ',
      'ون\n-ūn — the sound masculine plural ending',
      'ين\n-īn — the sound masculine plural ending in نصب/جر',
    ],
    correctIndex: 1,
    a: 'نون التوكيد الثقيلة مشددة بفتحة قبلها: لَتَجْتَهِدَنَّ ("You will surely strive!").\nThe heavy نون التوكيد is doubled (shadda), preceded by فتحة: لَتَجْتَهِدَنَّ ("You will surely strive!").',
  },
  {
    q: 'حوّل الفعل "تَكْتُبُ" (مرفوع) إلى صيغة مؤكدة بالنون الثقيلة\nConvert تَكْتُبُ (indicative) into a form emphasized with the heavy نون التوكيد',
    options: [
      'تَكْتُبُنَّ\nKeeps ḍamma before the doubled nūn',
      'تَكْتُبَنَّ\nفتحة before the doubled nūn — built on فتحة',
      'تَكْتُبْنَّ\nKeeps سكون before the doubled nūn',
      'تَكْتُبِنَّ\nكسرة before the doubled nūn',
    ],
    correctIndex: 1,
    a: 'عند اتصال نون التوكيد الثقيلة، يُبنى الفعل على الفتح، فتصير الضمة التي على آخر الفعل فتحة: تَكْتُبُ ← تَكْتُبَنَّ.\nWhen the heavy نون التوكيد attaches, the verb is built on فتحة — the final letter\'s vowel changes from ḍamma to fatḥa: taktubu → taktubanna.',
  },
  {
    q: 'حوّل نفس الفعل "تَكْتُبُ" إلى صيغة مؤكدة بالنون الخفيفة\nConvert تَكْتُبُ into a form emphasized with the light نون التوكيد',
    options: [
      'تَكْتُبُنْ\nKeeps ḍamma before the light nūn',
      'تَكْتُبْنْ\nKeeps سكون before the light nūn',
      'تَكْتُبَنْ\nفتحة before the light nūn — built on فتحة',
      'تَكْتُبِنْ\nكسرة before the light nūn',
    ],
    correctIndex: 2,
    a: 'مثل النون الثقيلة، النون الخفيفة تُبنى معها الفعل على الفتح أيضاً: تَكْتُبُ ← تَكْتُبَنْ.\nJust like the heavy nūn, the light نون التوكيد also builds the verb on فتحة: taktubu → taktuban.',
  },
  {
    q: 'أيّ كلمة فيها خطأ في كتابة الفعل المتصل بنون التوكيد الثقيلة؟\nWhich word wrongly forms a verb attached to the heavy نون التوكيد?',
    options: [
      'لَأَكْتُبَنَّ\nفتحة before the doubled nūn',
      'لَأَكْتُبُنَّ\nḍamma kept before the doubled nūn',
      'لَأَنْجَحَنَّ\nفتحة before the doubled nūn',
      'اُكْتُبَنَّ\nفتحة before the doubled nūn',
    ],
    correctIndex: 1,
    a: '"لَأَكْتُبُنَّ" خطأ لأنه أبقى الضمة على الباء، بينما اتصال نون التوكيد يوجب بناء الفعل على الفتح: الصواب لَأَكْتُبَنَّ.\n"لَأَكْتُبُنَّ" is wrong because it keeps the ḍamma on the ب, but attaching نون التوكيد requires the verb to be built on فتحة — the correct form is لَأَكْتُبَنَّ.',
  },
  {
    q: 'هل تلحق نون التوكيد الخفيفة فعل الأمر أيضاً، أم المضارع فقط؟\nDoes نون التوكيد attach to the imperative too, or only to the present tense?',
    options: [
      'المضارع فقط\nOnly the present tense',
      'تلحق المضارع المؤكد (بلام القسم أو غيره) وفعل الأمر ولا الناهية\nIt attaches to an emphasized present-tense verb (with لام القسم or otherwise), to the imperative, and after لا الناهية',
      'الماضي فقط\nOnly the past tense',
      'لا تلحق أي فعل\nIt attaches to no verb at all',
    ],
    correctIndex: 1,
    a: 'نون التوكيد (ثقيلة أو خفيفة) تلحق المضارع المؤكد بلام القسم (لَأَكْتُبَنَّ)، وفعل الأمر (اُكْتُبَنَّ)، والمضارع المسبوق بلا الناهية (لَا تَذْهَبَنَّ).\nنون التوكيد (heavy or light) attaches to a present-tense verb reinforced by لام القسم (لَأَكْتُبَنَّ), to an imperative verb (اُكْتُبَنَّ), and to a present-tense verb after لا الناهية (لَا تَذْهَبَنَّ).',
  },
  {
    q: 'أعرب "تَذْهَبَنَّ" إعراباً كاملاً في "لَا تَذْهَبَنَّ!"\nGive the full parse of تَذْهَبَنَّ in لَا تَذْهَبَنَّ!',
    options: [
      'فعل مضارع مجزوم بالسكون\nA present-tense verb, jussive, marked by سكون',
      'فعل مضارع مبني على الفتح لاتصاله بنون التوكيد الثقيلة، في محل جزم بـ"لا" الناهية\nA present-tense verb, built on فتحة because of the attached heavy نون التوكيد, in the jussive position because of لا الناهية',
      'فعل ماضٍ مبني على الفتح\nA past-tense verb, built on فتحة',
      'فعل مضارع منصوب بالفتحة\nA present-tense verb, subjunctive, marked by fatḥa',
    ],
    correctIndex: 1,
    a: 'لا الناهية تطلب الجزم، لكن اتصال النون الثقيلة يبني الفعل على الفتح لفظاً؛ ومحله لا يزال الجزم لأن "لا" لا تزال تحكم الفعل من حيث المعنى والموقع.\nلا الناهية calls for jazm, but the attached heavy nūn forces the verb into بناء on فتحة in form; it remains jussive in position (محل جزم), since لا الناهية still governs the verb\'s role.',
  },
  {
    q: 'أكمل: اُكْتُبْ___ الدَّرْسَ! (فعل أمر مؤكد بالنون الثقيلة)\nComplete: اُكْتُبْ___ الدَّرْسَ! — the imperative, emphasized with the heavy نون التوكيد',
    options: [
      'ْنَّ\nسكون kept on the ب before the doubled nūn',
      'َنَّ\nفتحة on the ب, then the doubled nūn — اُكْتُبَنَّ',
      'ُنَّ\nḍamma on the ب before the doubled nūn',
      'ِنَّ\nكسرة on the ب before the doubled nūn',
    ],
    correctIndex: 1,
    a: 'فعل الأمر اُكْتُبْ مبني على السكون أصلاً؛ عند اتصال النون الثقيلة يُبنى على الفتح بدلاً من السكون: اُكْتُبْ ← اُكْتُبَنَّ.\nThe imperative اُكْتُبْ is normally built on سكون; once the heavy nūn attaches, it is instead built on فتحة: uktub → uktubanna.',
  },
  {
    q: 'بم تُسمى النون المشددة الواقعة في آخر الفعل المؤكد، مثل ـَنَّ؟\nWhat is the doubled nūn at the end of an emphasized verb — like ـَنَّ — called?',
    options: [
      'نون النسوة\nنون النسوة (the feminine plural nūn)',
      'نون الوقاية\nنون الوقاية (the "protective" nūn)',
      'نون التوكيد الثقيلة\nThe heavy نون التوكيد',
      'نون الرفع\nنون الرفع (the nūn marking indicative الأفعال الخمسة)',
    ],
    correctIndex: 2,
    a: 'النون المشددة الملحقة بالفعل لتوكيده تسمى نون التوكيد الثقيلة، وتُبنى الفعل معها على الفتح.\nThe doubled nūn attached to a verb to emphasize it is called نون التوكيد الثقيلة — it builds the verb on فتحة.',
  },
  {
    q: 'وبم تُسمى النون الساكنة المفردة، مثل ـَنْ؟\nAnd what is the single sākin nūn — like ـَنْ — called?',
    options: [
      'نون التوكيد الخفيفة\nThe light نون التوكيد',
      'نون التوكيد الثقيلة\nThe heavy نون التوكيد',
      'نون الجمع\nThe plural nūn',
      'نون الوقاية\nThe "protective" nūn',
    ],
    correctIndex: 0,
    a: 'النون الساكنة المفردة الملحقة للتوكيد تسمى نون التوكيد الخفيفة، وهي أخف من الثقيلة لكنها تبني الفعل على الفتح كذلك.\nThe single sākin nūn attached for emphasis is called نون التوكيد الخفيفة — lighter than the heavy one, but it still builds the verb on فتحة.',
  },
  {
    q: 'حوّل جملة النهي "لَا تُهْمِلْ" (مجزوم بالسكون) إلى نهي مؤكد بالنون الثقيلة\nConvert the prohibition لَا تُهْمِلْ (jussive, marked by سكون) into one emphasized with the heavy نون التوكيد',
    options: [
      'لَا تُهْمِلُنَّ\nḍamma kept before the doubled nūn',
      'لَا تُهْمِلْنَّ\nسكون kept before the doubled nūn',
      'لَا تُهْمِلَنَّ\nفتحة before the doubled nūn — built on فتحة',
      'لَا تُهْمِلِنَّ\nكسرة before the doubled nūn',
    ],
    correctIndex: 2,
    a: 'اتصال النون الثقيلة يبني الفعل على الفتح، فيتحول السكون الذي على اللام إلى فتحة: تُهْمِلْ ← تُهْمِلَنَّ.\nAttaching the heavy nūn builds the verb on فتحة — the سكون on the ل becomes a فتحة: tuhmil → tuhmilanna.',
  },
  {
    q: 'أيّ جملة فيها خطأ في بناء الفعل المتصل بنون التوكيد؟\nWhich sentence has an error in how the verb is built with نون التوكيد attached?',
    options: [
      'لَأَكْتُبَنَّ الدَّرْسَ\nBuilt on فتحة',
      'لَا تَذْهَبَنَّ\nBuilt on فتحة',
      'لَا تَذْهَبْنَّ\nسكون kept before the doubled nūn',
      'اُكْتُبَنَّ الدَّرْسَ\nBuilt on فتحة',
    ],
    correctIndex: 2,
    a: '"لَا تَذْهَبْنَّ" خطأ: بقي السكون على الباء رغم اتصال النون الثقيلة، ويجب أن يتحول إلى فتحة؛ الصواب لَا تَذْهَبَنَّ.\n"لَا تَذْهَبْنَّ" is wrong: the سكون on the ب was kept despite the heavy nūn attaching, when it must shift to فتحة — the correct form is لَا تَذْهَبَنَّ.',
  },
  {
    q: 'هل يبقى للفعل محل إعراب (رفع أو نصب أو جزم) بعد أن يُبنى على الفتح بنون التوكيد؟\nDoes the verb keep a grammatical "position" (nominative, subjunctive, or jussive) after being built on فتحة by نون التوكيد?',
    options: [
      'لا، يفقد كل أثر لموقعه الأصلي\nNo, all trace of its original position is lost',
      'نعم، يكون مبنياً في اللفظ، لكنه في محل رفع أو نصب أو جزم بحسب موقعه قبل اتصال النون\nYes — it is built (مبني) in form, but holds the position of nominative, subjunctive, or jussive that its role before the nūn attached would require',
      'يتحول دائماً إلى محل رفع فقط\nIt always shifts to a nominative position only',
      'يتحول دائماً إلى محل جزم فقط\nIt always shifts to a jussive position only',
    ],
    correctIndex: 1,
    a: 'البناء هنا لفظي فقط بسبب نون التوكيد المباشرة؛ الموقع النحوي (محل الإعراب) يبقى كما كان يقتضيه موقع الفعل في الجملة قبل اتصال النون.\nThe بناء here is only in the verb\'s outward form, forced by نون التوكيد. Its underlying grammatical position stays whatever the sentence structure required before the nūn attached.',
  },
  {
    q: 'أكمل: وَاللّٰهِ ___ (من الفعل "أنجح"، بلام القسم ونون التوكيد الثقيلة)\nComplete: وَاللّٰهِ ___ — from the verb أنجح ("I succeed"), with لام القسم and the heavy نون التوكيد',
    options: [
      'لَأَنْجَحُنَّ\nḍamma kept before the doubled nūn',
      'لَأَنْجَحَنَّ\nفتحة before the doubled nūn — built on فتحة',
      'سَأَنْجَحُ\nA plain future form, without نون التوكيد',
      'لَأَنْجَحْنَّ\nسكون kept before the doubled nūn',
    ],
    correctIndex: 1,
    a: 'أنجح (مرفوع أصلاً بالضمة) يُبنى على الفتح عند اتصال نون التوكيد الثقيلة: أنجحُ ← لَأَنْجَحَنَّ ("By Allah, I will surely succeed!").\nanjaḥu (originally indicative, marked by ḍamma) is built on فتحة once the heavy nūn attaches: anjaḥu → la-anjaḥanna ("By Allah, I will surely succeed!").',
  },
  {
    q: 'حوّل الفعل "يَجْتَهِدُ" (مرفوع، غائب) إلى صيغة مؤكدة بالنون الخفيفة\nConvert يَجْتَهِدُ (indicative, third person) into a form emphasized with the light نون التوكيد',
    options: [
      'يَجْتَهِدُنْ\nḍamma kept before the light nūn',
      'يَجْتَهِدْنْ\nسكون kept before the light nūn',
      'يَجْتَهِدَنْ\nفتحة before the light nūn — built on فتحة',
      'يَجْتَهِدِنْ\nكسرة before the light nūn',
    ],
    correctIndex: 2,
    a: 'اتصال النون الخفيفة يبني الفعل على الفتح مثل الثقيلة تماماً: يَجْتَهِدُ ← يَجْتَهِدَنْ.\nThe light nūn builds the verb on فتحة, exactly like the heavy one: yajtahidu → yajtahidan.',
  },
  {
    q: 'ما الفرق العملي بين نون التوكيد الثقيلة والخفيفة من حيث تأثيرهما على بناء الفعل؟\nWhat is the practical difference between the heavy and light نون التوكيد in how they affect the verb\'s بناء?',
    options: [
      'لا فرق: كلتاهما تبنيان الفعل المفرد المتصل بهما مباشرة على الفتح، وتختلفان فقط في الشكل (مشددة أو ساكنة)\nNo difference in effect: both build a directly-attached singular verb on فتحة — they differ only in shape (doubled vs. sākin)',
      'الثقيلة تبني على الضم، والخفيفة تبني على الكسر\nThe heavy one builds on ḍamma, the light one on kasra',
      'الثقيلة تُستعمل مع الماضي فقط\nThe heavy one is used only with the past tense',
      'الخفيفة لا تدخل على فعل الأمر أبداً\nThe light one never attaches to the imperative',
    ],
    correctIndex: 0,
    a: 'كلتا النونين، حين تتصلان مباشرة بفعل مضارع أو أمر مفرد، تبنيانه على الفتح؛ الفرق بينهما شكلي فقط: الثقيلة مشددة (ـَنَّ)، والخفيفة ساكنة مفردة (ـَنْ).\nBoth kinds of نون التوكيد, when directly attached to a singular present-tense or imperative verb, build it on فتحة — they differ only in shape: the heavy one is doubled (ـَنَّ), the light one a single sākin (ـَنْ).',
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
            Topic 61 of 62
          </p>
          <h1 className="font-serif tracking-[-0.02em] text-3xl font-bold text-foreground leading-tight mb-3">
            <span
              dir="rtl"
              lang="ar"
              style={{ fontFamily: "'Noto Naskh Arabic', serif" }}
              className="mr-2"
            >
              نون التوكيد
            </span>
            — The Emphatic <bdi lang="ar">Nūn</bdi>
          </h1>
          <p className="text-muted-foreground text-base max-w-xl">
            There are two forms: heavy <bdi lang="ar">ـَنَّ</bdi> and light <bdi lang="ar">ـَنْ</bdi>. Attached
            directly to a singular present-tense verb (or an imperative), the verb becomes{' '}
            <bdi lang="ar">مبني على الفتح</bdi> — built on فتحة — instead of keeping its usual indicative,
            subjunctive, or jussive inflection.{' '}
            <bdi lang="ar">وَاللّٰهِ لَأَكْتُبَنَّ الدَّرْسَ!</bdi> ("By Allah, I will surely write the
            lesson!"), <bdi lang="ar">لَا تَذْهَبَنَّ!</bdi> ("Do not go!").
          </p>
        </div>
      </div>
      <div className="mx-auto w-[min(720px,calc(100%-2rem))] py-8">
        <QuizCarousel items={quizItems} />
      </div>
    </main>
  )
}

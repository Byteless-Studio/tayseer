import { createFileRoute, Link } from '@tanstack/react-router'
import { QuizCarousel } from '#/components/QuizCarousel'
import type { StrictQuizItem } from '#/routes/challenges/-quiz-types'

export const Route = createFileRoute('/challenges/grammar/awlu-awlaat/')({
  head: () => ({ meta: [{ title: 'Ūlū & Ūlāt — Grammar — Tayseer' }] }),
  component: TopicPage,
})

const quizItems: StrictQuizItem[] = [
  {
    q: 'ما "أُولُو" و"أُولَاتُ"؟\nWhat are أُولُو and أُولَاتُ?',
    options: [
      'اسما إشارة للبعيد\nDemonstratives for something far away',
      'جمعا "ذو" و"ذات"، بمعنى "أصحاب/صاحبات"\nThe plurals of ذو and ذات, meaning "possessors of"',
      'اسما موصول لجمع العقلاء\nRelative pronouns for a rational plural',
      'ضميرا جمع منفصل\nDetached plural pronouns',
    ],
    correctIndex: 1,
    a: 'أُولُو جمع "ذو" (مذكر)، وأُولَاتُ جمع "ذات" (مؤنث)، وكلاهما بمعنى "أصحاب/صاحبات [صفة أو شيء]".\nأُولُو is the plural of ذو (masculine), and أُولَاتُ is the plural of ذات (feminine) — both mean "possessors of [some quality or thing]".',
  },
  {
    q: 'ما حالة إعراب "أُولُو"؟\nWhat case does the form أُولُو mark?',
    options: [
      'جمع مذكر في حالة الرفع\nMasculine plural, nominative case',
      'جمع مؤنث في حالة الرفع\nFeminine plural, nominative case',
      'جمع مذكر في حالتي النصب والجر\nMasculine plural, accusative and genitive',
      'مفرد مذكر في حالة الرفع\nMasculine singular, nominative',
    ],
    correctIndex: 0,
    a: 'أُولُو هي صيغة جمع المذكر في حالة الرفع فقط — أُولُو الأَلْبَابِ (رفعاً).\nأُولُو is the masculine plural form used only in the nominative — أُولُو الأَلْبَابِ (nominative).',
  },
  {
    q: 'وما مقابل "أُولُو" في حالتي النصب والجر؟\nAnd what replaces أُولُو in the accusative and genitive?',
    options: [
      'أُولَاتِ\nŪlāti — the feminine oblique form',
      'أُولِي\nŪlī — masculine plural, accusative/genitive',
      'أُولَى\nūlā — "first" (feminine)',
      'أُولُونَ\nŪlūna',
    ],
    correctIndex: 1,
    a: 'في النصب والجر يحل محل أُولُو الشكل أُولِي، تماماً كما يحل جمع المذكر السالم "ي" محل الواو.\nIn the accusative and genitive, أُولُو is replaced by أُولِي — exactly as a sound masculine plural swaps و for ي outside the nominative.',
  },
  {
    q: 'ما حالة إعراب "أُولَاتُ"؟\nWhat case does the form أُولَاتُ mark?',
    options: [
      'جمع مؤنث في حالة الرفع\nFeminine plural, nominative case',
      'جمع مذكر في حالة الرفع\nMasculine plural, nominative case',
      'جمع مؤنث في حالتي النصب والجر\nFeminine plural, accusative and genitive',
      'مفرد مؤنث في حالة الرفع\nFeminine singular, nominative',
    ],
    correctIndex: 0,
    a: 'أُولَاتُ هي صيغة جمع المؤنث في حالة الرفع — أُولَاتُ مَالٍ (رفعاً).\nأُولَاتُ is the feminine plural form used in the nominative — أُولَاتُ مَالٍ (nominative).',
  },
  {
    q: 'وما مقابل "أُولَاتُ" في حالتي النصب والجر؟\nAnd what replaces أُولَاتُ in the accusative and genitive?',
    options: [
      'أُولِي\nŪlī — the masculine oblique form',
      'أُولَاتَ\nŪlāta, fatḥa',
      'أُولَاتِ\nŪlāti — feminine plural, accusative/genitive, kasra',
      'أُولَاتٍ\nŪlātin, with tanwīn',
    ],
    correctIndex: 2,
    a: 'في النصب والجر تصير أُولَاتُ ← أُولَاتِ (بالكسرة)، تماماً كجمع المؤنث السالم الذي يُنصب ويُجر بالكسرة أيضاً.\nIn the accusative and genitive, أُولَاتُ becomes أُولَاتِ (kasra) — just as a sound feminine plural takes kasra for both the accusative and the genitive.',
  },
  {
    q: 'هل تأتي "أُولُو" و"أُولَاتُ" إلا مضافتين؟\nCan أُولُو and أُولَاتُ ever stand without being مضاف?',
    options: [
      'نعم، تُستعملان مستقلتين كأي اسم\nYes, they can be used independently, like any noun',
      'لا، تلزمان الإضافة دائماً، والاسم بعدهما مجرور\nNo — they are always مضاف, and the noun after them is مجرور',
      'نعم، إذا سبقهما حرف جر\nYes, if preceded by a preposition',
      'لا فرق بينهما وبين "هؤلاء"\nThere is no difference between them and "هؤلاء"',
    ],
    correctIndex: 1,
    a: 'مثل ذو وذات، تلزم أُولُو وأُولَاتُ الإضافة دائماً إلى اسم بعدهما يبيّن الصفة أو الشيء المملوك، وذلك الاسم مجرور دائماً.\nLike ذو and ذات, أُولُو and أُولَاتُ always require idāfah to a following noun naming the quality or thing possessed — and that following noun is always مجرور.',
  },
  {
    q: 'في "أُولُو الأَلْبَابِ" ما إعراب "أُولُو"؟\nParse أُولُو in أُولُو الأَلْبَابِ ("possessors of understanding").',
    options: [
      'اسم مرفوع بالواو نيابة عن الضمة، كجمع مذكر سالم\nA noun, nominative, marked by و in place of ḍamma — as with a sound masculine plural',
      'اسم منصوب بالياء\nA noun, accusative, marked by ي',
      'اسم مجرور بالياء\nA noun, genitive, marked by ي',
      'اسم مبني على الضم\nA noun, built on ḍamma',
    ],
    correctIndex: 0,
    a: 'أُولُو مرفوعة بالواو نيابة عن الضمة، على غرار جمع المذكر السالم، وهي مضاف إلى الأَلْبَابِ.\nأُولُو is nominative, marked by و in place of ḍamma — following the sound masculine plural pattern — and it is مضاف to الأَلْبَابِ.',
  },
  {
    q: 'وما إعراب "الأَلْبَابِ" في نفس التركيب؟\nAnd the grammatical role of الأَلْبَابِ in the same phrase?',
    options: [
      'فاعل مرفوع\nSubject (فاعل), nominative',
      'مضاف إليه مجرور\nمضاف إليه, genitive',
      'مفعول به منصوب\nDirect object (مفعول به), accusative',
      'خبر مرفوع\nPredicate, nominative',
    ],
    correctIndex: 1,
    a: 'الأَلْبَابِ مضاف إليه مجرور، لأن أُولُو تلزم الإضافة والاسم الذي يليها مجرور دائماً.\nالأَلْبَابِ is the مضاف إليه, genitive — because أُولُو always requires idāfah, and the following noun is always مجرور.',
  },
  {
    q: 'في "أُولَاتُ مَالٍ" ما إعراب "أُولَاتُ"؟\nParse أُولَاتُ in أُولَاتُ مَالٍ ("women of wealth").',
    options: [
      'مبني على الكسر\nBuilt on كسرة',
      'مرفوع بالضمة، كجمع مؤنث سالم\nNominative, marked by ḍamma — as with a sound feminine plural',
      'منصوب بالكسرة\nAccusative, marked by kasra',
      'مجرور بالفتحة\nGenitive, marked by fatḥa',
    ],
    correctIndex: 1,
    a: 'أُولَاتُ ترفع بالضمة الظاهرة، على غرار جمع المؤنث السالم، وهي مضاف إلى مَالٍ.\nأُولَاتُ is nominative, marked by a plain ḍamma — following the sound feminine plural pattern — and it is مضاف to مَالٍ.',
  },
  {
    q: 'وما إعراب "مَالٍ" في نفس التركيب؟\nAnd the grammatical role of مَالٍ in the same phrase?',
    options: [
      'فاعل مرفوع\nSubject (فاعل), nominative',
      'مفعول به منصوب\nDirect object (مفعول به), accusative',
      'مضاف إليه مجرور\nمضاف إليه, genitive',
      'حال منصوب\nحال ("circumstantial"), accusative',
    ],
    correctIndex: 2,
    a: 'مَالٍ مضاف إليه مجرور بالكسرة الظاهرة (منوّن لأنه نكرة).\nمَالٍ is the مضاف إليه, genitive, marked by a plain kasra (with tanwīn, since it is indefinite).',
  },
  {
    q: 'جاء ___ الألبابِ (اختر صيغة الرفع لجمع المذكر)\njāʾa ___ al-albābi — supply the nominative masculine plural form',
    options: [
      'أُولِي\nŪlī — accusative/genitive',
      'أُولَاتُ\nŪlātu — feminine',
      'أُولُو\nŪlū — nominative masculine',
      'أُولَاتِ\nŪlāti — feminine oblique',
    ],
    correctIndex: 2,
    a: 'الفاعل يلزم الرفع، وصيغة الرفع لجمع المذكر هي أُولُو: جَاءَ أُولُو الأَلْبَابِ.\nThe subject (فاعل) requires the nominative, and the nominative masculine plural form is أُولُو: جَاءَ أُولُو الأَلْبَابِ.',
  },
  {
    q: 'رأيتُ ___ الألبابِ (اختر صيغة النصب)\nraʾaytu ___ al-albābi — supply the accusative form',
    options: [
      'أُولُو\nŪlū — nominative',
      'أُولِي\nŪlī — accusative masculine',
      'أُولَاتُ\nŪlātu — feminine nominative',
      'أُولَاتِ\nŪlāti — feminine oblique',
    ],
    correctIndex: 1,
    a: 'المفعول به يلزم النصب، وصيغة النصب لجمع المذكر هي أُولِي: رَأَيْتُ أُولِي الأَلْبَابِ.\nThe direct object requires the accusative, and the accusative masculine plural form is أُولِي: raʾaytu ūlī l-albābi.',
  },
  {
    q: 'سلَّمتُ على ___ الألبابِ (اختر صيغة الجر)\nsallamtu ʿalā ___ al-albābi — supply the genitive form',
    options: [
      'أُولُو\nŪlū — nominative',
      'أُولَاتِ\nŪlāti — feminine oblique',
      'أُولَاتُ\nŪlātu — feminine nominative',
      'أُولِي\nŪlī — genitive masculine, after the preposition على',
    ],
    correctIndex: 3,
    a: 'بعد حرف الجر "على" يجب الجر، وصيغة الجر لجمع المذكر هي أُولِي أيضاً (تتحد مع صيغة النصب): سَلَّمْتُ عَلَى أُولِي الأَلْبَابِ.\nAfter the preposition على, the noun must be genitive — and the genitive masculine plural form is also أُولِي (identical to the accusative form): sallamtu ʿalā ūlī l-albābi.',
  },
  {
    q: 'هؤلاء نساءٌ ___ مالٍ (اختر صيغة الرفع لجمع المؤنث)\nhāʾulāʾi nisāʾun ___ mālin — supply the nominative feminine plural form',
    options: [
      'أُولَاتِ\nŪlāti — oblique',
      'أُولُو\nŪlū — masculine',
      'أُولَاتُ\nŪlātu — nominative feminine',
      'أُولِي\nŪlī — masculine oblique',
    ],
    correctIndex: 2,
    a: 'نعت مرفوع تابع لـ"نساءٌ"، وصيغة الرفع لجمع المؤنث هي أُولَاتُ: هؤلاء نساءٌ أُولَاتُ مَالٍ.\nAn adjective agreeing with the nominative نساءٌ, and the nominative feminine plural form is أُولَاتُ: hāʾulāʾi nisāʾun ūlātu mālin.',
  },
  {
    q: 'رأيتُ نساءً ___ مالٍ (اختر صيغة النصب لجمع المؤنث)\nraʾaytu nisāʾan ___ mālin — supply the accusative feminine plural form',
    options: [
      'أُولَاتُ\nŪlātu — nominative',
      'أُولَاتِ\nŪlāti — accusative feminine, marked by kasra',
      'أُولِي\nŪlī — masculine',
      'أُولُو\nŪlū — masculine nominative',
    ],
    correctIndex: 1,
    a: 'نعت منصوب تابع لـ"نساءً"، وصيغة النصب لجمع المؤنث هي أُولَاتِ، بالكسرة نيابة عن الفتحة كجمع المؤنث السالم: رَأَيْتُ نِسَاءً أُولَاتِ مَالٍ.\nAn adjective agreeing with the accusative نساءً, and the accusative feminine plural form is أُولَاتِ — kasra in place of fatḥa, as with a sound feminine plural: raʾaytu nisāʾan ūlāti mālin.',
  },
  {
    q: 'بأي علامة تُرفع "أُولُو"؟\nWhat marker signals the nominative on أُولُو?',
    options: [
      'بالضمة\nBy ḍamma',
      'بالفتحة\nBy fatḥa',
      'بالواو، كجمع المذكر السالم، لا بالضمة\nBy و, as with a sound masculine plural — not by ḍamma',
      'بالألف\nBy alif',
    ],
    correctIndex: 2,
    a: 'أُولُو تُرفع بحرف الواو، على غرار جمع المذكر السالم (مدرسونَ، مسلمونَ)، لا بالضمة الظاهرة على المفرد.\nأُولū is marked nominative with the letter و, following the sound masculine plural pattern (mudarrisūna, muslimūna) — not with a plain ḍamma the way a singular noun would be.',
  },
  {
    q: 'بأي علامة تُنصب وتُجر "أُولَاتُ" (في حالتي النصب والجر)؟\nWhat marker signals the accusative and genitive on أُولَاتُ?',
    options: [
      'بالفتحة\nBy fatḥa',
      'بالياء\nBy ي',
      'بالألف\nBy alif',
      'بالكسرة، كجمع المؤنث السالم، لا بالفتحة\nBy kasra, as with a sound feminine plural — not by fatḥa',
    ],
    correctIndex: 3,
    a: 'جمع المؤنث السالم — وأُولَاتُ تسلك مسلكه — يُنصب ويُجر بالكسرة نيابة عن الفتحة، فتصير أُولَاتِ في الحالتين معاً.\nA sound feminine plural — and أُولَاتُ follows its pattern — takes kasra in place of fatḥa for both the accusative and genitive, becoming أُولَاتِ in both.',
  },
  {
    q: 'أيّ جملة فيها خطأ نحوي؟\nWhich sentence contains a grammatical error?',
    options: [
      'جَاءَ أُولُو الأَلْبَابِ\nأُولُو, nominative, as فاعل',
      'رَأَيْتُ أُولُو الأَلْبَابِ\nأُولُو, nominative, as مفعول به',
      'أُولَاتُ مَالٍ نِسَاءٌ فَاضِلَاتٌ\nأُولَاتُ, nominative, as مبتدأ',
      'سَلَّمْتُ عَلَى أُولِي الأَلْبَابِ\nأُولِي, genitive, after على',
    ],
    correctIndex: 1,
    a: '"رَأَيْتُ أُولُو الأَلْبَابِ" خطأ: المفعول به يلزم النصب، فيجب استعمال أُولِي لا أُولُو؛ الصواب رَأَيْتُ أُولِي الأَلْبَابِ.\n"رَأَيْتُ أُولُو الأَلْبَابِ" is wrong: the direct object requires the accusative, so أُولِي must be used, not أُولُو — the correct form is رَأَيْتُ أُولِي الأَلْبَابِ.',
  },
  {
    q: 'ما المفرد الذي تُعد "أُولُو" جمعاً له؟\nWhich singular does أُولُو serve as the plural of?',
    options: [
      'رَجُلٌ\nrajulun — "man"',
      'ذُو\ndhū — "possessor of" (masculine singular)',
      'هَذَا\nhādhā — "this"',
      'صَاحِبٌ\nṣāḥibun — "companion", used independently',
    ],
    correctIndex: 1,
    a: 'أُولُو تعمل جمعاً لـ"ذُو" (وأُولَاتُ جمعاً لـ"ذَات")؛ ذو نفسه ليس له جمع من صيغته، فتسد أُولُو مسدّ جمعه، وتُعرب كجمع مذكر سالم.\nأُولū functions as the plural of ذُو (and أُولَاتُ as the plural of ذَات). ذو has no plural built from its own root, so أُولū fills that role, inflecting like a sound masculine plural.',
  },
  {
    q: 'حوّل "صاحبُ علمٍ" (بمعنى ذو علمٍ، مفرد) إلى صيغة الجمع في حالة الرفع\nConvert صاحبُ علمٍ ("a possessor of knowledge", singular) into the plural, nominative case',
    options: [
      'أُولِي عِلْمٍ\nŪlī ʿilmin — accusative/genitive plural',
      'أُولُو عِلْمٍ\nŪlū ʿilmin — nominative plural',
      'ذَوُو عِلْمٍ\nDhawū ʿilmin — a different plural, of ذَوُو',
      'أُولَاتُ عِلْمٍ\nŪlātu ʿilmin — feminine plural',
    ],
    correctIndex: 1,
    a: 'جمع "ذو" (المذكر) في حالة الرفع هو أُولُو: أُولُو عِلْمٍ ("possessors of knowledge").\nThe plural of ذو (masculine) in the nominative is أُولُو: ūlū ʿilmin ("possessors of knowledge").',
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
            Topic 62 of 62
          </p>
          <h1 className="font-serif tracking-[-0.02em] text-3xl font-bold text-foreground leading-tight mb-3">
            <span
              dir="rtl"
              lang="ar"
              style={{ fontFamily: "'Noto Naskh Arabic', serif" }}
              className="mr-2"
            >
              أُولُو وأُولَاتُ
            </span>
            — Possessors Of (plural)
          </h1>
          <p className="text-muted-foreground text-base max-w-xl">
            <bdi lang="ar">أُولُو</bdi> and <bdi lang="ar">أُولَاتُ</bdi> are the plurals of{' '}
            <bdi lang="ar">ذو</bdi>/<bdi lang="ar">ذات</bdi>, always <bdi lang="ar">مضاف</bdi> with the
            following noun <bdi lang="ar">مجرور</bdi>. <bdi lang="ar">أُولُو</bdi> is masculine plural,
            nominative — <bdi lang="ar">أُولِي</bdi> covers the accusative and genitive.{' '}
            <bdi lang="ar">أُولَاتُ</bdi> is feminine plural, nominative —{' '}
            <bdi lang="ar">أُولَاتِ</bdi> covers the accusative and genitive.{' '}
            <bdi lang="ar">أُولُو الأَلْبَابِ</bdi> ("possessors of understanding"),{' '}
            <bdi lang="ar">أُولَاتُ مَالٍ</bdi> ("women of wealth").
          </p>
        </div>
      </div>
      <div className="mx-auto w-[min(720px,calc(100%-2rem))] py-8">
        <QuizCarousel items={quizItems} />
      </div>
    </main>
  )
}

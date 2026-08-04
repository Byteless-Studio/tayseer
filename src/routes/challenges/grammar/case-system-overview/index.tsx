import { createFileRoute, Link } from '@tanstack/react-router'
import { QuizCarousel } from '#/components/QuizCarousel'
import type { StrictQuizItem } from '#/routes/challenges/-quiz-types'

export const Route = createFileRoute('/challenges/grammar/case-system-overview/')({
  head: () => ({ meta: [{ title: 'Case System Overview — Grammar — Tayseer' }] }),
  component: TopicPage,
})

const quizItems: StrictQuizItem[] = [
  {
    q: 'ما هي الحالات الإعرابية الثلاث الأساسية في العربية، وما علامة كل منها في الأصل؟\nWhat are the three basic grammatical cases in Arabic, and what is each one\'s basic marker?',
    options: [
      'الرفع (ـُ)، النصب (ـَ)، الجر (ـِ)\nرفع (ـُ, nominative), نصب (ـَ, accusative), جر (ـِ, genitive)',
      'الماضي، المضارع، الأمر\nPast, present, and imperative — those are verb tenses/moods, not noun cases',
      'المفرد، المثنى، الجمع\nSingular, dual, and plural — those are numbers, not cases',
      'المذكر، المؤنث، المحايد\nMasculine, feminine, and neuter — Arabic has no neuter',
    ],
    correctIndex: 0,
    a: 'الحالات الإعرابية الثلاث للاسم هي: الرفع وعلامته الأصلية الضمة (ـُ)، النصب وعلامته الأصلية الفتحة (ـَ)، والجر وعلامته الأصلية الكسرة (ـِ).\nThe noun\'s three cases are: رفع, whose basic marker is a ḍammah (ـُ); نصب, whose basic marker is a fatḥah (ـَ); and جر, whose basic marker is a kasrah (ـِ).',
  },
  {
    q: 'جاء الطالبُ — ما الذي يجعل "الطالبُ" مرفوعاً هنا؟\njāʾa ṭ-ṭālibu ("The student came") — what makes "الطالبُ" مرفوع here?',
    options: [
      'لأنه مفعول به\nBecause it is a direct object',
      'لأنه فاعل — والفاعل من أشهر الأسباب الموجبة للرفع\nBecause it is the subject (فاعل) — and the فاعل is one of the most common reasons for رفع',
      'لأنه مضاف إليه\nBecause it is a مضاف إليه',
      'لأنه اسم بعد حرف جر\nBecause it is a noun after a preposition',
    ],
    correctIndex: 1,
    a: 'الفاعل مرفوع دائماً، وهو أحد أبرز مواضع الرفع في الجملة الفعلية، تماماً كما يُرفع المبتدأ والخبر في الجملة الاسمية.\nThe فاعل (subject of a verb) is always مرفوع — one of the clearest places رفع shows up in a verbal sentence, just as the مبتدأ and خبر are مرفوع in a nominal sentence.',
  },
  {
    q: 'رأيتُ الطالبَ — لماذا "الطالبَ" هنا منصوب؟\nraʾaytu ṭ-ṭāliba ("I saw the student") — why is "الطالبَ" here منصوب?',
    options: [
      'لأنه مبتدأ\nBecause it is a مبتدأ',
      'لأنه مفعول به — والمفعول به من أشهر الأسباب الموجبة للنصب\nBecause it is the direct object (مفعول به) — and the مفعول به is one of the most common reasons for نصب',
      'لأنه مضاف إليه\nBecause it is a مضاف إليه',
      'لأنه اسم بعد حرف جر\nBecause it is a noun after a preposition',
    ],
    correctIndex: 1,
    a: 'المفعول به منصوب دائماً، فهو أحد أشهر المواضع الموجبة لحالة النصب، مثل مفعول به الفعل رأى في هذا المثال.\nThe direct object (مفعول به) is always منصوب — one of the most common triggers for the نصب case, just as it is here as the object of رأى.',
  },
  {
    q: 'مررتُ بالطالبِ / كتابُ الطالبِ — ما القاسم المشترك الذي يجعل "الطالبِ" مجروراً في كلا المثالين؟\nmarartu bi-ṭ-ṭālibi / kitābu ṭ-ṭālibi ("I passed by the student" / "the student\'s book") — what do these two have in common that makes "الطالبِ" مجرور in both?',
    options: [
      'الوقوع بعد حرف جر في الأول، والوقوع مضافاً إليه في الثاني — وكلاهما من أسباب الجر\nComing after a preposition in the first, and being a مضاف إليه in the second — both are triggers for جر',
      'كون الطالب فاعلاً في الحالتين\nThe student being the subject (فاعل) in both',
      'كون الطالب خبراً في الحالتين\nThe student being the predicate (خبر) in both',
      'الصدفة، لا رابط بينهما\nCoincidence — there is no connection between them',
    ],
    correctIndex: 0,
    a: 'الجر له سببان رئيسيان: الوقوع بعد حرف جر (مررتُ بالطالبِ) أو الوقوع مضافاً إليه (كتابُ الطالبِ) — وكلاهما يوجب الجر رغم اختلاف السياق.\nجر has two main triggers: sitting after a preposition (مررتُ بالطالبِ) or being a مضاف إليه (كتابُ الطالبِ) — both force جر even though the contexts differ.',
  },
  {
    q: 'جاء الفتى — لماذا لا تظهر حركة إعرابية واضحة على آخر "الفتى" رغم أنه فاعل مرفوع؟\njāʾa l-fatā ("The young man came") — why doesn\'t a clear case vowel appear on the end of "الفتى," even though it is a مرفوع subject?',
    options: [
      'لأنه اسم مبني لا معرب\nBecause it is a مبني (indeclinable) noun, not معرب',
      'لأنه اسم منقوص من نوع خاص لا يُعرب أصلاً\nBecause it is a special منقوص noun that isn\'t declined at all',
      'لأن الاسم المقصور (المنتهي بألف لينة) تُقدَّر عليه حركات الإعراب لتعذر نطقها على الألف\nBecause an اسم مقصور (ending in a soft alif) has its case vowels estimated (مقدّرة), since they can\'t physically be pronounced on the alif',
      'لأنه جمع تكسير\nBecause it is a broken plural',
    ],
    correctIndex: 2,
    a: 'الاسم المقصور المنتهي بألف لينة (كالفتى) تُقدَّر عليه حركات الإعراب الثلاث جميعاً لتعذر النطق بها على الألف الساكنة، فيُقال "جاء الفتى" و"رأيتُ الفتى" و"مررتُ بالفتى" دون تغير ظاهر في اللفظ رغم اختلاف الإعراب.\nAn اسم مقصور ending in a soft alif (like الفتى) has all three case vowels estimated (مقدّرة), because they cannot be pronounced on the still alif. So you say "جاء الفتى," "رأيتُ الفتى," and "مررتُ بالفتى" with no audible change, even though the case is different each time.',
  },
  {
    q: 'هذا الطالبُ مجتهدٌ — لماذا لا تتغير حركة "هذا" أبداً رغم أنه في محل رفع مبتدأ؟\nhādhā ṭ-ṭālibu mujtahidun ("This student is diligent") — why does the ending of "هذا" never change, even though it sits in the مرفوع position as مبتدأ?',
    options: [
      'لأنه اسم مبني (اسم إشارة)، والمبني لا تتغير حركة آخره بتغير موقعه الإعرابي، بخلاف المعرب\nBecause it is a مبني noun (a demonstrative), and a مبني word\'s ending never changes with its grammatical role, unlike a معرب word',
      'لأنه ليس له موقع إعرابي أصلاً\nBecause it has no grammatical position at all',
      'لأنه حرف لا اسم\nBecause it is a particle (حرف), not a noun',
      'لأنه ممنوع من الصرف\nBecause it is a diptote (ممنوع من الصرف)',
    ],
    correctIndex: 0,
    a: 'أسماء الإشارة والضمائر من الأسماء المبنية، فحركة آخرها ثابتة مهما تغير موقعها الإعرابي في الجملة، على خلاف الأسماء المعربة التي تتغير حركتها بتغير العامل (رفع/نصب/جر).\nDemonstratives and pronouns are مبني nouns, so their ending stays fixed no matter what grammatical role they play, unlike معرب nouns, whose ending changes with the governing case (رفع/نصب/جر).',
  },
  {
    q: 'أيّ من هذه الجمل بها خطأ في اختيار الحالة الإعرابية المناسبة للسبب النحوي المذكور؟\nWhich of these has the wrong case paired with the grammatical reason given?',
    options: [
      'الطالبُ (فاعل) → رفع\nالطالبُ (subject) → رفع',
      'الكتابَ (مفعول به) → نصب\nالكتابَ (direct object) → نصب',
      'الطالبِ (مضاف إليه) → رفع\nالطالبِ (مضاف إليه) → رفع (nominative)',
      'المسجدِ (بعد حرف جر) → جر\nالمسجدِ (after a preposition) → جر',
    ],
    correctIndex: 2,
    a: 'المضاف إليه يكون مجروراً دائماً لا مرفوعاً؛ فالخيار "الطالبِ (مضاف إليه) → رفع" خطأ، والصواب أن يكون مجروراً كما في "كتابُ الطالبِ".\nA مضاف إليه is always مجرور, never مرفوع — so "الطالبِ (مضاف إليه) → رفع" is wrong; it should be مجرور, as in "كتابُ الطالبِ."',
  },
  {
    q: 'باختصار، ما الفرق الجوهري بين اسم معرب واسم مبني من حيث الإعراب؟\nIn short, what is the fundamental difference between a معرب noun and a مبني noun in terms of case?',
    options: [
      'المعرب تتغير حركة آخره (ظاهرة أو مقدّرة) حسب موقعه في الجملة؛ المبني حركة آخره ثابتة لا تتغير رغم اختلاف موقعه الإعرابي\nA معرب noun\'s ending changes (visibly or by estimation) with its role in the sentence; a مبني noun\'s ending stays fixed no matter what role it plays',
      'المعرب دائماً مرفوع، والمبني دائماً منصوب\nمعرب nouns are always مرفوع, and مبني nouns are always منصوب',
      'المعرب للأفعال فقط، والمبني للأسماء فقط\nمعرب applies only to verbs, and مبني only to nouns',
      'لا فرق بينهما، كلاهما بنفس القاعدة\nThere is no difference — both follow the same rule',
    ],
    correctIndex: 0,
    a: 'الاسم المعرب (كالطالب، الفتى) تتغير حركة آخره — ظاهرة كانت أو مقدّرة — بحسب موقعه الإعرابي (فاعل، مفعول به، مضاف إليه...)، بينما الاسم المبني (كأسماء الإشارة والضمائر) تبقى حركة آخره ثابتة دائماً بصرف النظر عن موقعه.\nA معرب noun (like الطالب or الفتى) has its ending change — visibly or by estimation — according to its grammatical role (subject, direct object, مضاف إليه…), while a مبني noun (like demonstratives and pronouns) keeps a fixed ending regardless of its role.',
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
            Topic 14 of 47
          </p>
          <h1 className="font-serif tracking-[-0.02em] text-3xl font-bold text-foreground leading-tight mb-3">
            <span
              dir="rtl"
              lang="ar"
              style={{ fontFamily: "'Noto Naskh Arabic', serif" }}
              className="mr-2"
            >
              الإعراب
            </span>
            — Case System Overview
          </h1>
          <p className="text-muted-foreground text-base max-w-xl">
            Every noun in Arabic carries one of three cases: <bdi lang="ar">رفع</bdi> (<bdi lang="ar">ـُ</bdi>, typically the subject or
            <bdi lang="ar">مبتدأ</bdi>), <bdi lang="ar">نصب</bdi> (<bdi lang="ar">ـَ</bdi>, typically the object), or <bdi lang="ar">جر</bdi> (<bdi lang="ar">ـِ</bdi>, after a preposition or as a <bdi lang="ar">مضاف
            إليه</bdi>). Words ending in <bdi lang="ar">ا</bdi> or <bdi lang="ar">ى</bdi> (like <bdi lang="ar">الفتى</bdi>) can't physically carry these vowels, so the
            case is <span className="font-medium text-foreground"><bdi lang="ar">مقدّرة</bdi></span> — estimated, not
            pronounced. And <bdi lang="ar">مبني</bdi> words like demonstratives and pronouns sit outside the system
            entirely: their ending never changes no matter what role they play.
          </p>
        </div>
      </div>
      <div className="mx-auto w-[min(720px,calc(100%-2rem))] py-8">
        <QuizCarousel items={quizItems} />
      </div>
    </main>
  )
}

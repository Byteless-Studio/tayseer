import { createFileRoute, Link } from '@tanstack/react-router'
import { QuizCarousel } from '#/components/QuizCarousel'
import type { StrictQuizItem } from '#/routes/challenges/-quiz-types'

export const Route = createFileRoute('/challenges/grammar/relative-pronouns/')({
  head: () => ({ meta: [{ title: 'Relative Pronouns & Clauses — Grammar — Tayseer' }] }),
  component: TopicPage,
})

const quizItems: StrictQuizItem[] = [
  {
    q: 'ما الاسم الموصول المناسب للمفرد المذكر؟\nWhich relative pronoun fits the masculine singular?',
    options: [
      'الذي\nAlladhī — masc. sg. "who/which/that"',
      'التي\nAllatī — fem. sg.',
      'الذين\nAlladhīna — masc. pl.',
      'اللاتي\nAllātī — fem. pl.',
    ],
    correctIndex: 0,
    a: '"الذي" اسم موصول للمفرد المذكر، مثل "جاء الطالبُ الذي نجحَ".\n"الذي" (alladhī) is the relative pronoun for masculine singular, as in جاء الطالبُ الذي نجحَ — "The student who succeeded came."',
  },
  {
    q: 'ما الاسم الموصول المناسب للمفردة المؤنثة؟\nWhich relative pronoun fits the feminine singular?',
    options: [
      'التي\nAllatī — fem. sg. "who/which/that"',
      'الذي\nAlladhī — masc. sg.',
      'اللتان\nAllatān — fem. dual',
      'اللاتي\nAllātī — fem. pl.',
    ],
    correctIndex: 0,
    a: '"التي" اسم موصول للمفردة المؤنثة، مثل "نجحتِ الطالبةُ التي اجتهدتْ".\n"التي" (allatī) is the relative pronoun for feminine singular, as in نجحتِ الطالبةُ التي اجتهدتْ — "The student(f) who worked hard succeeded."',
  },
  {
    q: 'ما الاسمان الموصولان الخاصان بالمثنى (مذكراً ومؤنثاً)؟\nWhat are the two relative pronouns for the dual (masc. and fem.)?',
    options: [
      'اللذان (مذكر) واللتان (مؤنث)\nAlladhān (masc.) and allatān (fem.)',
      'الذين (مذكر) واللاتي (مؤنث)\nAlladhīna (masc.) and allātī (fem.) — these are actually the plural forms',
      'الذي والتي\nAlladhī and allatī — these are actually the singular forms',
      'اللذان للمؤنث واللتان للمذكر\nAlladhān for feminine and allatān for masculine — genders swapped',
    ],
    correctIndex: 0,
    a: 'للمثنى اسمان موصولان: "اللذان" للمثنى المذكر و"اللتان" للمثنى المؤنث، مثل "الطالبانِ اللذانِ نجحا" و"الطالبتانِ اللتانِ نجحتا".\nThe dual has two relative pronouns: اللذان (alladhān) for masculine dual and اللتان (allatān) for feminine dual, as in الطالبانِ اللذانِ نجحا ("the two students(m) who succeeded") and الطالبتانِ اللتانِ نجحتا ("the two students(f) who succeeded").',
  },
  {
    q: 'ما الاسم الموصول لجمع المذكر العاقل؟\nWhat is the relative pronoun for the rational masculine plural?',
    options: [
      'الذين\nAlladhīna — masc. pl.',
      'اللاتي\nAllātī — fem. pl.',
      'الذي\nAlladhī — masc. sg.',
      'اللتان\nAllatān — fem. dual',
    ],
    correctIndex: 0,
    a: '"الذين" اسم موصول لجمع المذكر العاقل، مثل "نجحَ الطلابُ الذين اجتهدوا".\n"الذين" (alladhīna) is the relative pronoun for the rational masculine plural, as in نجحَ الطلابُ الذين اجتهدوا — "The students who worked hard succeeded."',
  },
  {
    q: 'ما هو "العائد" الذي تستلزمه جملة الصلة بعد الاسم الموصول؟\nWhat is "العائد" (the referring pronoun) that the relative clause after the relative pronoun must contain?',
    options: [
      'حرف جر يربط الجملتين\nA preposition linking the two clauses',
      'ضمير يعود على الاسم الموصول ويربط جملة الصلة به، مثل الهاء في "الكتابُ الذي قرأتُه"\nA pronoun referring back to the relative pronoun, linking the clause to it — like the ه in الكتابُ الذي قرأتُه ("the book that I read it")',
      'فعل أمر إلزامي\nAn obligatory imperative verb',
      'لا يوجد عائد إلزامي في أي حال\nThere is no obligatory referring pronoun in any case',
    ],
    correctIndex: 1,
    a: 'تستلزم جملة الصلة بعد الاسم الموصول ضميراً يعود عليه يُسمى "العائد"، مثل الهاء في "الكتابُ الذي قرأتُه" حيث تعود الهاء على "الذي" (أي على الكتاب).\nThe relative clause (جملة الصلة) after the relative pronoun requires a pronoun referring back to it, called العائد. In الكتابُ الذي قرأتُه ("the book that I read"), the ه of قرأتُه refers back to الذي (i.e. to the book) — literally "that I read it."',
  },
  {
    q: 'أيّ من هذه الجمل بها خطأ نحوي (خلوّها من العائد)؟\nWhich of these sentences has a grammatical error (missing the referring pronoun)?',
    options: [
      'الطالبُ الذي نجحَ سعيدٌ\nAṭ-ṭālibu lladhī najaḥa saʿīdun — "The student who succeeded is happy"',
      'الكتابُ الذي قرأتُ ممتعٌ\nAl-kitābu lladhī qara\'tu mumtiʿun',
      'الرجلُ الذي سلّمتُ عليه كريمٌ\nAr-rajulu lladhī sallamtu ʿalayhi karīmun — "The man whom I greeted is generous"',
      'المدينةُ التي زرتُها جميلةٌ\nAl-madīnatu llatī zurtuhā jamīlatun — "The city that I visited is beautiful"',
    ],
    correctIndex: 1,
    a: 'جملة الصلة "قرأتُ" تفتقر إلى ضمير عائد يربطها بالاسم الموصول "الذي"، والصواب "الكتابُ الذي قرأتُه ممتعٌ" بإضافة الهاء العائدة على الكتاب.\nThe relative clause قرأتُ lacks a referring pronoun linking it back to الذي. The correction is الكتابُ الذي قرأتُه ممتعٌ, adding the ه that refers back to "the book" — literally "the book that I read it."',
  },
  {
    q: 'هل يجوز استعمال "الذي" أو "التي" بعد اسم نكرة، مثل "*رجلٌ الذي جاء"؟\nCan الذي or التي be used after an indefinite noun, as in *رجلٌ الذي جاء?',
    options: [
      'نعم، لا فرق بين النكرة والمعرفة\nYes, there is no difference between definite and indefinite',
      'لا، فالأسماء الموصولة لا تُستعمل إلا بعد اسم معرفة، والنكرة تُنعت بجملة بلا اسم موصول (رجلٌ جاء)\nNo — relative pronouns are only used after a DEFINITE noun. An indefinite noun is described by a clause with no relative pronoun at all (رجلٌ جاء — "a man came")',
      'نعم بشرط أن يكون الفعل ماضياً\nYes, provided the verb is in the past tense',
      'لا، ولا يجوز نعت النكرة بجملة إطلاقاً\nNo, and an indefinite noun can never be described by a clause at all',
    ],
    correctIndex: 1,
    a: 'الأسماء الموصولة تُستعمل حصراً بعد اسم معرفة، أما النكرة فتُنعت بجملة فعلية أو اسمية مباشرة دون اسم موصول: يُقال "رجلٌ جاء" لا "*رجلٌ الذي جاء".\nRelative pronouns are used exclusively after a definite noun. An indefinite noun is instead described directly by a verbal or nominal clause with no relative pronoun: you say رجلٌ جاء ("a man came"), never *رجلٌ الذي جاء.',
  },
  {
    q: 'ما الاسم الموصول لجمع المؤنث؟\nWhat is the relative pronoun for the feminine plural?',
    options: [
      'اللاتي\nAllātī — fem. pl.',
      'الذين\nAlladhīna — masc. pl.',
      'اللتان\nAllatān — fem. dual',
      'الذي\nAlladhī — masc. sg.',
    ],
    correctIndex: 0,
    a: '"اللاتي" (وتُقال أيضاً "اللائي") اسم موصول لجمع المؤنث، مثل "نجحتِ الطالباتُ اللاتي اجتهدنَ".\n"اللاتي" (also said اللائي) is the relative pronoun for the feminine plural, as in نجحتِ الطالباتُ اللاتي اجتهدنَ — "The students(f) who worked hard succeeded."',
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
            Topic 23 of 47
          </p>
          <h1 className="font-serif tracking-[-0.02em] text-3xl font-bold text-foreground leading-tight mb-3">
            <span
              dir="rtl"
              lang="ar"
              style={{ fontFamily: "'Noto Naskh Arabic', serif" }}
              className="mr-2"
            >
              الأسماء الموصولة
            </span>
            — Relative Pronouns & Clauses
          </h1>
          <p className="text-muted-foreground text-base max-w-xl">
            <bdi lang="ar">الذي</bdi> (masc. sg.), <bdi lang="ar">التي</bdi> (fem. sg.), <bdi lang="ar">اللذان/اللتان</bdi> (dual), <bdi lang="ar">الذين</bdi> (masc. pl.), <bdi lang="ar">اللاتي</bdi>
            (fem. pl.) introduce a relative clause. The clause must contain a referring pronoun
            (<bdi lang="ar">عائد</bdi>) pointing back to the antecedent, and relative pronouns are only used after a
            DEFINITE antecedent.
          </p>
        </div>
      </div>
      <div className="mx-auto w-[min(720px,calc(100%-2rem))] py-8">
        <QuizCarousel items={quizItems} />
      </div>
    </main>
  )
}

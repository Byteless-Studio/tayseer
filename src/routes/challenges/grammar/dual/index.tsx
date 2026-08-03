import { createFileRoute, Link } from '@tanstack/react-router'
import { QuizCarousel } from '#/components/QuizCarousel'
import type { StrictQuizItem } from '#/routes/challenges/-quiz-types'

export const Route = createFileRoute('/challenges/grammar/dual/')({
  head: () => ({ meta: [{ title: 'The Dual — Grammar — Tayseer' }] }),
  component: TopicPage,
})

const quizItems: StrictQuizItem[] = [
  {
    q: 'ما هي علامتا رفع المثنى ونصبه وجره؟\nWhat are the dual\'s markers for رفع, نصب, and جر?',
    options: [
      'انِ في الرفع، يْنِ في النصب والجر\nانِ (-āni) in رفع, يْنِ (-ayni) in نصب and جر',
      'ونَ في الرفع، ينَ في النصب والجر\nونَ (-ūna) in رفع, ينَ (-īna) in نصب and جر — those are the sound masculine plural markers',
      'ات في جميع الحالات\nات (-āt) in every case — that is the sound feminine plural marker',
      'و في الرفع، ي في النصب والجر\nو (-ū) in رفع, ي (-ī) in نصب and جر',
    ],
    correctIndex: 0,
    a: 'يُثنى الاسم بزيادة "انِ" في حالة الرفع و"يْنِ" في حالتي النصب والجر، مثل: طالبٌ ← طالبانِ (رفع) / طالبَينِ (نصب وجر).\nA noun is made dual by adding "انِ" in رفع and "يْنِ" in both نصب and جر: طالبٌ ("a student") → طالبانِ (رفع) / طالبَينِ (نصب and جر).',
  },
  {
    q: 'جاء الطالبـ___ إلى المدرسةِ (اثنان، رفع)\njāʾa ṭ-ṭāliba___ ilā l-madrasati ("The two students came to school") — dual, رفع',
    options: [
      'طالبٌ\nṭālibun — singular, wrong',
      'طالبانِ\nṭālibāni — dual, رفع',
      'طالبينِ\nṭālibīni — wrong vowel pattern',
      'طالبونَ\nṭālibūna — sound masculine plural, wrong',
    ],
    correctIndex: 1,
    a: 'الفاعل هنا مثنى مرفوع، فتُزاد "انِ" على المفرد: "طالبانِ" — والنون هنا عوض عن التنوين وليست علامة إعراب متغيرة.\nThe subject here is a مرفوع dual, so "انِ" is added onto the singular: "طالبانِ." The نون here stands in for تنوين — it isn\'t a case marker that changes.',
  },
  {
    q: 'رأيتُ الطالبـ___ في الملعبِ (اثنان، نصب)\nraʾaytu ṭ-ṭāliba___ fī l-malʿabi ("I saw the two students at the field") — dual, نصب',
    options: [
      'طالبَينِ\nṭālibayni — dual, نصب',
      'طالبانِ\nṭālibāni — that\'s the رفع form, wrong here',
      'طالبونَ\nṭālibūna — sound masculine plural, wrong',
      'طالبينَ\nṭālibīna — wrong vowel on the ن',
    ],
    correctIndex: 0,
    a: 'المفعول به هنا مثنى منصوب، وعلامة نصب المثنى "يْنِ" لا الألف: "طالبَينِ".\nThe direct object here is a منصوب dual, and the dual\'s نصب marker is "يْنِ", not the alif: "طالبَينِ."',
  },
  {
    q: 'أيّ ضمير يُستعمل للدلالة على المثنى الغائب (هو + هو)؟\nWhich pronoun is used for the third-person dual (هو + هو)?',
    options: [
      'هما\nhumā — "the two of them"',
      'هُم\nhum — third-person masculine plural',
      'هُنّ\nhunna — third-person feminine plural',
      'أنتما\nantumā — second-person dual',
    ],
    correctIndex: 0,
    a: 'يشمل المثنى الأسماء والصفات وحتى الضمائر: "هما" ضمير الغائب للمثنى (مذكراً كان أو مؤنثاً)، بخلاف "هم" لجمع الغائبين و"أنتما" لمثنى المخاطب.\nThe dual covers nouns, adjectives, and even pronouns: "هما" is the third-person dual pronoun (whether masculine or feminine), as opposed to "هم" for the third-person plural and "أنتما" for the second-person dual.',
  },
  {
    q: 'أيّ من هذه الجمل بها خطأ نحوي؟\nWhich of these sentences has a grammar error?',
    options: [
      'جاء طالبانِ مجتهدانِ\njāʾa ṭālibāni mujtahidāni — "Two diligent students came"',
      'رأيتُ طالبَينِ مجتهدَينِ\nraʾaytu ṭālibayni mujtahidayni — "I saw two diligent students"',
      'هذانِ الطالبانُ مجتهدانِ\nhādhāni ṭ-ṭālibānu mujtahidāni — wrong: النون should be kasrah, not ḍammah',
      'سلّمتُ على الطالبَينِ المجتهدَينِ\nsallamtu ʿalā ṭ-ṭālibayni l-mujtahidayni — "I greeted the two diligent students"',
    ],
    correctIndex: 2,
    a: 'نون المثنى مكسورة دائماً بصرف النظر عن موقع الاسم الإعرابي، لأنها عوض عن التنوين وليست علامة إعراب متغيرة: الصواب "هذانِ الطالبانِ" لا "الطالبانُ" بضم النون.\nThe dual\'s نون always has a kasrah, no matter what case the noun is in, because it stands in for تنوين rather than being a case marker that changes: the correct form is "هذانِ الطالبانِ," not "الطالبانُ" with a ḍammah on the نون.',
  },
  {
    q: 'ماذا يحدث للتنوين عندما يُثنى الاسم؟\nWhat happens to تنوين when a noun is made dual?',
    options: [
      'يبقى كما هو\nIt stays exactly as it was',
      'يُحذف لأن النون تعوض عنه\nIt is dropped, because the نون of the dual ending stands in for it',
      'يتحول إلى شدة\nIt turns into a shaddah',
      'يتضاعف\nIt doubles',
    ],
    correctIndex: 1,
    a: 'عند تثنية الاسم يسقط تنوينه، لأن نون المثنى (في انِ أو يْنِ) تقوم مقام التنوين وتؤدي وظيفته في الدلالة على عدم الإضافة.\nWhen a noun is made dual, its تنوين drops, because the نون of the dual ending (in انِ or يْنِ) takes over تنوين\'s job of marking that the noun isn\'t in idāfah.',
  },
  {
    q: 'المعلمتانِ ___ (اجتهد، نعت مثنى مؤنث مرفوع)\nal-muʿallimatāni ___ (from اجتهد "to be diligent" — dual feminine مرفوع adjective)',
    options: [
      'المجتهدتانِ\nal-mujtahidatāni — dual feminine, مرفوع',
      'المجتهدانِ\nal-mujtahidāni — dual masculine, wrong gender',
      'المجتهدتينِ\nal-mujtahidatayni — that\'s the نصب/جر form, wrong here',
      'المجتهدةُ\nal-mujtahidatu — singular, wrong number',
    ],
    correctIndex: 0,
    a: 'الصفة تتبع الموصوف في العدد والنوع والإعراب، فموصوف مثنى مؤنث مرفوع "المعلمتانِ" يستوجب نعتاً مثنى مؤنثاً مرفوعاً: "المجتهدتانِ".\nThe adjective follows the noun in number, gender, and case, so the مرفوع dual feminine noun "المعلمتانِ" requires a مرفوع dual feminine adjective: "المجتهدتانِ."',
  },
  {
    q: 'سلّمتُ على المعلمـ___ (اثنتان، جر)\nsallamtu ʿalā l-muʿallima___ ("I greeted the two [female] teachers") — dual, جر',
    options: [
      'معلمتينِ\nmuʿallimatayni — dual feminine, جر',
      'معلمتانِ\nmuʿallimatāni — that\'s the رفع form, wrong here',
      'معلماتٍ\nmuʿallimātin — sound feminine plural, wrong',
      'معلمةٍ\nmuʿallimatin — singular, wrong',
    ],
    correctIndex: 0,
    a: 'الاسم هنا مجرور بحرف الجر "على"، وعلامة جر المثنى مثل نصبه "يْنِ": "معلمتَينِ" لا "معلمتانِ".\nThe noun here is مجرور by the preposition "على," and the dual\'s جر marker is the same as its نصب marker, "يْنِ": "معلمتَينِ," not "معلمتانِ."',
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
            Topic 15 of 47
          </p>
          <h1 className="font-serif tracking-[-0.02em] text-3xl font-bold text-foreground leading-tight mb-3">
            <span
              dir="rtl"
              lang="ar"
              style={{ fontFamily: "'Noto Naskh Arabic', serif" }}
              className="mr-2"
            >
              المثنى
            </span>
            — The Dual
          </h1>
          <p className="text-muted-foreground text-base max-w-xl">
            The dual (<span className="font-medium text-foreground">مثنى</span>) marks exactly two
            of something. Add <span className="font-medium text-foreground">انِ</span> in رفع or{' '}
            <span className="font-medium text-foreground">يْنِ</span> in نصب/جر to the singular —
            the same suffix works for nouns, adjectives, and even pronouns (هما, "the two of
            them"). A noun loses its تنوين once it is dualized.
          </p>
        </div>
      </div>
      <div className="mx-auto w-[min(720px,calc(100%-2rem))] py-8">
        <QuizCarousel items={quizItems} />
      </div>
    </main>
  )
}

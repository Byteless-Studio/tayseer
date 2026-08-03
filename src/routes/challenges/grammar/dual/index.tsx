import { createFileRoute, Link } from '@tanstack/react-router'
import { QuizCarousel } from '#/components/QuizCarousel'
import type { StrictQuizItem } from '#/routes/challenges/-quiz-types'

export const Route = createFileRoute('/challenges/grammar/dual/')({
  head: () => ({ meta: [{ title: 'The Dual — Grammar — Tayseer' }] }),
  component: TopicPage,
})

const quizItems: StrictQuizItem[] = [
  {
    q: 'ما هي علامتا رفع المثنى ونصبه وجره؟',
    options: [
      'انِ في الرفع، يْنِ في النصب والجر',
      'ونَ في الرفع، ينَ في النصب والجر',
      'ات في جميع الحالات',
      'و في الرفع، ي في النصب والجر',
    ],
    correctIndex: 0,
    a: 'يُثنى الاسم بزيادة "انِ" في حالة الرفع و"يْنِ" في حالتي النصب والجر، مثل: طالبٌ ← طالبانِ (رفع) / طالبَينِ (نصب وجر).',
  },
  {
    q: 'جاء الطالبـ___ إلى المدرسةِ (اثنان، رفع)',
    options: ['طالبٌ', 'طالبانِ', 'طالبينِ', 'طالبونَ'],
    correctIndex: 1,
    a: 'الفاعل هنا مثنى مرفوع، فتُزاد "انِ" على المفرد: "طالبانِ" — والنون هنا عوض عن التنوين وليست علامة إعراب متغيرة.',
  },
  {
    q: 'رأيتُ الطالبـ___ في الملعبِ (اثنان، نصب)',
    options: ['طالبَينِ', 'طالبانِ', 'طالبونَ', 'طالبينَ'],
    correctIndex: 0,
    a: 'المفعول به هنا مثنى منصوب، وعلامة نصب المثنى "يْنِ" لا الألف: "طالبَينِ".',
  },
  {
    q: 'أيّ ضمير يُستعمل للدلالة على المثنى الغائب (هو + هو)؟',
    options: ['هما', 'هُم', 'هُنّ', 'أنتما'],
    correctIndex: 0,
    a: 'يشمل المثنى الأسماء والصفات وحتى الضمائر: "هما" ضمير الغائب للمثنى (مذكراً كان أو مؤنثاً)، بخلاف "هم" لجمع الغائبين و"أنتما" لمثنى المخاطب.',
  },
  {
    q: 'أيّ من هذه الجمل بها خطأ نحوي؟',
    options: [
      'جاء طالبانِ مجتهدانِ',
      'رأيتُ طالبَينِ مجتهدَينِ',
      'هذانِ الطالبانُ مجتهدانِ',
      'سلّمتُ على الطالبَينِ المجتهدَينِ',
    ],
    correctIndex: 2,
    a: 'نون المثنى مكسورة دائماً بصرف النظر عن موقع الاسم الإعرابي، لأنها عوض عن التنوين وليست علامة إعراب متغيرة: الصواب "هذانِ الطالبانِ" لا "الطالبانُ" بضم النون.',
  },
  {
    q: 'ماذا يحدث للتنوين عندما يُثنى الاسم؟',
    options: ['يبقى كما هو', 'يُحذف لأن النون تعوض عنه', 'يتحول إلى شدة', 'يتضاعف'],
    correctIndex: 1,
    a: 'عند تثنية الاسم يسقط تنوينه، لأن نون المثنى (في انِ أو يْنِ) تقوم مقام التنوين وتؤدي وظيفته في الدلالة على عدم الإضافة.',
  },
  {
    q: 'المعلمتانِ ___ (اجتهد، نعت مثنى مؤنث مرفوع)',
    options: ['المجتهدتانِ', 'المجتهدانِ', 'المجتهدتينِ', 'المجتهدةُ'],
    correctIndex: 0,
    a: 'الصفة تتبع الموصوف في العدد والنوع والإعراب، فموصوف مثنى مؤنث مرفوع "المعلمتانِ" يستوجب نعتاً مثنى مؤنثاً مرفوعاً: "المجتهدتانِ".',
  },
  {
    q: 'سلّمتُ على المعلمـ___ (اثنتان، جر)',
    options: ['معلمتينِ', 'معلمتانِ', 'معلماتٍ', 'معلمةٍ'],
    correctIndex: 0,
    a: 'الاسم هنا مجرور بحرف الجر "على"، وعلامة جر المثنى مثل نصبه "يْنِ": "معلمتَينِ" لا "معلمتانِ".',
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

import { createFileRoute, Link } from '@tanstack/react-router'
import { QuizCarousel } from '#/components/QuizCarousel'
import type { StrictQuizItem } from '#/routes/challenges/-quiz-types'

export const Route = createFileRoute('/challenges/grammar/verb-basics-faail-mafool/')({
  head: () => ({ meta: [{ title: 'Verb Sentence Basics — Grammar — Tayseer' }] }),
  component: TopicPage,
})

const quizItems: StrictQuizItem[] = [
  {
    q: 'ما هو الفاعل وما حكم إعرابه؟',
    options: [
      'اسم منصوب يقع عليه فعل الفاعل',
      'اسم مرفوع يدل على من قام بالفعل أو اتصف به، ويأتي بعد الفعل في الترتيب القياسي',
      'اسم مجرور بحرف جر يسبقه',
      'فعل يدل على الحدث نفسه',
    ],
    correctIndex: 1,
    a: 'الفاعل اسم مرفوع دائماً يدل على من قام بالفعل، ويأتي بعد الفعل في الترتيب القياسي للجملة الفعلية، مثل "الطالبُ" في "كتبَ الطالبُ الدرسَ".',
  },
  {
    q: 'ما الترتيب القياسي (الأصلي) لعناصر الجملة الفعلية في العربية؟',
    options: [
      'فعل - فاعل - مفعول به',
      'فاعل - فعل - مفعول به',
      'مفعول به - فعل - فاعل',
      'فاعل - مفعول به - فعل',
    ],
    correctIndex: 0,
    a: 'الترتيب القياسي للجملة الفعلية هو: الفعل ثم الفاعل ثم المفعول به (فعل-فاعل-مفعول به)، كما في "كتبَ الطالبُ الدرسَ"، وإن جاز التقديم والتأخير لأغراض بلاغية.',
  },
  {
    q: 'أكمل: أكلَ الولدُ ___ (التفاحة، مفعول به منصوب)',
    options: ['التفاحةُ', 'التفاحةَ', 'التفاحةِ', 'تفاحةٌ'],
    correctIndex: 1,
    a: 'المفعول به منصوب دائماً، فتكون "التفاحةَ" هي الإجابة الصحيحة: "أكلَ الولدُ التفاحةَ".',
  },
  {
    q: 'هل يمكن أن يكون للفعل الواحد أكثر من فاعل واحد نحوياً؟',
    options: [
      'نعم، يمكن أن يكون له فاعلان أو أكثر في آن واحد',
      'لا، لكل فعل فاعل واحد فقط؛ وإسناد الفعل لعدة أشخاص يتم بالعطف على الفاعل لا بتعدد الفاعلين',
      'نعم، إذا كان الفعل متعدياً',
      'لا يوجد فاعل إلا في الجملة الاسمية',
    ],
    correctIndex: 1,
    a: 'الفعل الواحد له فاعل واحد فقط نحوياً؛ فعند إسناده لعدة أشخاص نستخدم فاعلاً واحداً معطوفاً عليه بحرف عطف، مثل "كتبَ زيدٌ وعمرٌو"، ويبقى "زيدٌ" هو الفاعل و"عمرٌو" معطوفاً عليه.',
  },
  {
    q: 'ما الفرق بين الفعل المتعدي والفعل اللازم؟',
    options: [
      'المتعدي يحتاج إلى مفعول به لتمام معناه، واللازم يكتفي بفاعله دون حاجة لمفعول به',
      'المتعدي لا يحتاج فاعلاً، واللازم يحتاج فاعلاً',
      'المتعدي فعل ماضٍ فقط، واللازم فعل مضارع فقط',
      'لا فرق بينهما في المعنى أو الاستعمال',
    ],
    correctIndex: 0,
    a: 'الفعل المتعدي يتعدى أثره إلى مفعول به فيحتاج إليه لتمام المعنى، مثل "كتبَ الرسالةَ"؛ أما الفعل اللازم فيكتفي بفاعله، مثل "ذهبَ الولدُ"، فهو تام المعنى بفاعله وحده.',
  },
  {
    q: 'أي من هذه الجمل بها خطأ في إعراب الفاعل والمفعول به؟',
    options: ['قرأ الطالبُ الكتابَ', 'قرأ الطالبَ الكتابُ', 'فتح الرجلُ البابَ', 'شرب الطفلُ الماءَ'],
    correctIndex: 1,
    a: 'في "قرأ الطالبَ الكتابُ" عُكس الإعراب: الفاعل ("الطالب") يجب أن يكون مرفوعاً والمفعول به ("الكتاب") منصوباً؛ الصواب: "قرأ الطالبُ الكتابَ".',
  },
  {
    q: 'ما هو الجذر الثلاثي (يُرمز له بـ ف-ع-ل) وما فائدته؟',
    options: [
      'هيكل مكوّن من ثلاثة أحرف أصلية (مثل ك-ت-ب) تُبنى منه جميع تصريفات الفعل وأوزانه المشتقة',
      'صيغة خاصة بالفعل المضارع فقط',
      'اسم آخر لحروف الجر',
      'قاعدة تخص الأسماء الخمسة فقط',
    ],
    correctIndex: 0,
    a: 'الجذر الثلاثي مثل ف-ع-ل هو الهيكل الأساسي من ثلاثة أحرف أصلية (مثل ك-ت-ب لـ"كتب") الذي تُشتق منه كل صيغ الفعل وأوزانه، ماضياً ومضارعاً ومصدراً واسم فاعل ونحوه.',
  },
  {
    q: 'الفعل "نامَ" في جملة "نامَ الطفلُ" يُصنَّف على أنه:',
    options: [
      'فعل متعدٍ يحتاج مفعولاً به',
      'فعل لازم يكتفي بفاعله',
      'اسم لا فعل',
      'حرف جر',
    ],
    correctIndex: 1,
    a: '"نامَ" فعل لازم؛ يكتفي بفاعله ("الطفلُ") ولا يحتاج إلى مفعول به لتمام معناه، بخلاف الأفعال المتعدية كـ"أكلَ" أو "كتبَ".',
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
            Topic 29 of 47
          </p>
          <h1 className="font-serif tracking-[-0.02em] text-3xl font-bold text-foreground leading-tight mb-3">
            <span
              dir="rtl"
              lang="ar"
              style={{ fontFamily: "'Noto Naskh Arabic', serif" }}
              className="mr-2"
            >
              الفاعل والمفعول به
            </span>
            — Verb Sentence Basics
          </h1>
          <p className="text-muted-foreground text-base max-w-xl">
            Every verbal sentence rests on a فعل (verb), its فاعل (subject — always مرفوع,
            appearing after the verb), and often a{' '}
            <span className="font-medium text-foreground">مفعول به</span> (object — always منصوب).
            Standard word order is verb-subject-object, a verb takes only ONE فاعل, and verbs
            split into متعدٍ (transitive, takes an object) and لازم (intransitive). Every
            conjugated form is built from a three-consonant root skeleton like ف-ع-ل.
          </p>
        </div>
      </div>
      <div className="mx-auto w-[min(720px,calc(100%-2rem))] py-8">
        <QuizCarousel items={quizItems} />
      </div>
    </main>
  )
}

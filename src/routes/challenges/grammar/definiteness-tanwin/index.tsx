import { createFileRoute, Link } from '@tanstack/react-router'
import { QuizCarousel } from '#/components/QuizCarousel'
import type { StrictQuizItem } from '#/routes/challenges/-quiz-types'

export const Route = createFileRoute('/challenges/grammar/definiteness-tanwin/')({
  head: () => ({ meta: [{ title: 'Definiteness & Tanwīn — Grammar — Tayseer' }] }),
  component: TopicPage,
})

const quizItems: StrictQuizItem[] = [
  {
    q: 'ما الفرق الأساسي بين الاسم النكرة (nakirah) والاسم المعرفة (maʿrifah)؟',
    options: [
      'النكرة تدل على شيء غير محدد ("a/an ..."), والمعرفة تدل على شيء محدد معروف ("the ...")',
      'النكرة مرفوعة دائماً، والمعرفة منصوبة دائماً',
      'النكرة للمذكر فقط، والمعرفة للمؤنث فقط',
      'لا فرق بينهما؛ هما مترادفان في الاستعمال',
    ],
    correctIndex: 0,
    a: 'النكرة اسم عام غير محدد (كتابٌ = "a book"), بينما المعرفة اسم محدد معروف بعينه للمخاطب (الكتابُ = "the book"). هذا التمييز هو أساس معظم قواعد النحو المتعلقة بالتعريف.',
  },
  {
    q: "تنوين مثل ـٌ ـً ـٍ يظهر في النطق على آخر الاسم النكرة. بماذا ينطق تحديداً؟",
    options: [
      'بنون ساكنة منطوقة غير مكتوبة تدل على أن الاسم نكرة',
      'بحرف الألف المكتوب فقط',
      'بشدّة على أول الكلمة',
      'بحذف آخر حرف من الكلمة',
    ],
    correctIndex: 0,
    a: 'التنوين هو نون ساكنة زائدة تُنطق آخر الاسم ولا تُكتب حرفاً، وهي العلامة الصوتية القياسية التي تدل على أن الاسم نكرة (غير محدد).',
  },
  {
    q: 'كتابٌ (indefinite, "a book") becomes الكتابُ ("the book") once أل is added. What happens to the تنوين?',
    options: [
      'It stays exactly as it was',
      'It is dropped entirely — أل and تنوين never co-occur on the same word',
      'It changes into a shaddah',
      'It moves to the first letter of the word',
    ],
    correctIndex: 1,
    a: 'أل التعريف وتنوين النكرة يتنافيان: الاسم إما نكرة (يحمل تنوينًا) أو معرفة بأل (بلا تنوين), فلا يمكن أن يجتمع الاثنان على اسم واحد.',
  },
  {
    q: 'كتابٌ + ياء المتكلم (my) → ___ (fill in the blank)',
    options: ['كتابٌي', 'كتابي', 'كتابٍي', 'كِتاباً ي'],
    correctIndex: 1,
    a: 'إضافة ضمير متصل مثل ياء المتكلم تجعل الاسم معرفة بالإضافة إلى الضمير، فيسقط التنوين تماماً: كتابي = "my book" بلا تنوين، تماماً كما يسقط عند دخول أل.',
  },
  {
    q: 'أيّ من هذه الجمل بها خطأ نحوي متعلق بالتنوين والتعريف؟',
    options: [
      'رأيتُ كتاباً جديداً',
      'رأيتُ الكتابٌ الجديدُ',
      'هذا كتابُ محمدٍ',
      'رأيتُ الكتابَ الجديدَ',
    ],
    correctIndex: 1,
    a: 'الجملة "رأيتُ الكتابٌ الجديدُ" خاطئة لأنها جمعت بين أل التعريف والتنوين على كلمة واحدة (الكتابٌ), وهذا غير جائز؛ الصواب "الكتابَ" بلا تنوين لأن أل موجودة.',
  },
  {
    q: 'أيّ من هذه الأسماء معرفة بذاتها من غير حاجة إلى أل أو إضافة؟',
    options: ['بيتٌ', 'إبراهيمُ', 'رجلٌ', 'طالبةٌ'],
    correctIndex: 1,
    a: 'اسم العَلَم مثل إبراهيمُ معرفة بذاته لأنه يشير إلى شخص بعينه دون حاجة لأل، وهو أيضاً ممنوع من الصرف فلا يُنوَّن أصلاً — على عكس الأسماء النكرة الثلاثة الأخرى التي تحمل تنويناً ظاهراً.',
  },
  {
    q: 'هذا (this) وهو (he) كلاهما معرفة بذاتهما دون أل أو إضافة. Why?',
    options: [
      'لأنهما اسم إشارة وضمير، وكلاهما نوع مستقل من أنواع المعرفة السبعة',
      'لأنهما مبنيان على الفتح دائماً في كل موضع',
      'لأنهما لا يُعربان أبداً في أي موضع من الكلام',
      'لأنهما جمعا تكسير لكلمتين أخريين',
    ],
    correctIndex: 0,
    a: 'اسم الإشارة (هذا) والضمير (هو) نوعان من أنواع المعرفة الأساسية في العربية، فهما معرفة بذاتهما بصرف النظر عن دخول أل أو الإضافة عليهما.',
  },
  {
    q: 'كتابُ الطالبِ ("the student\'s book") — لماذا كلمة "كتاب" هنا معرفة رغم خلوها من أل؟',
    options: [
      'لأنها اسم علم بذاتها',
      'لأنها مضاف، وقد اكتسبت تعريفها من المضاف إليه المعرَّف (الطالبِ)',
      'لأنها منصوبة في هذه الجملة',
      'لأنها جمع مؤنث سالم',
    ],
    correctIndex: 1,
    a: 'في تركيب الإضافة، يكتسب المضاف (كتاب) تعريفه من المضاف إليه (الطالب) متى كان هذا الأخير معرفة، فتصبح عبارة "كتاب الطالب" كلها معرفة رغم أن "كتاب" نفسها بلا أل ولا تنوين.',
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
            Topic 1 of 47
          </p>
          <h1 className="font-serif tracking-[-0.02em] text-3xl font-bold text-foreground leading-tight mb-3">
            <span
              dir="rtl"
              lang="ar"
              style={{ fontFamily: "'Noto Naskh Arabic', serif" }}
              className="mr-2"
            >
              التنوين
            </span>
            — Definiteness &amp; Tanwīn
          </h1>
          <p className="text-muted-foreground text-base max-w-xl">
            Every Arabic noun is either <span className="font-medium text-foreground">نكرة</span>{' '}
            (indefinite, "a/an ...") or <span className="font-medium text-foreground">معرفة</span>{' '}
            (definite, "the ..."). Tanwīn — the trailing ـٌ ـً ـٍ sound — is the spoken marker of an
            indefinite noun, and it disappears the moment the noun becomes definite, whether by
            adding أل, attaching a possessive pronoun, or being a proper noun, demonstrative,
            pronoun, or the first term of an idāfah whose second term is definite.
          </p>
        </div>
      </div>
      <div className="mx-auto w-[min(720px,calc(100%-2rem))] py-8">
        <QuizCarousel items={quizItems} />
      </div>
    </main>
  )
}

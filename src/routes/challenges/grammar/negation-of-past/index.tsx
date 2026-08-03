import { createFileRoute, Link } from '@tanstack/react-router'
import { QuizCarousel } from '#/components/QuizCarousel'
import type { StrictQuizItem } from '#/routes/challenges/-quiz-types'

export const Route = createFileRoute('/challenges/grammar/negation-of-past/')({
  head: () => ({ meta: [{ title: 'Negation of the Past — Grammar — Tayseer' }] }),
  component: TopicPage,
})

const quizItems: StrictQuizItem[] = [
  {
    q: 'كيف تُنفى الجملة الماضية بأبسط طريقة باستخدام "ما"؟',
    options: [
      'ما + فعل مضارع',
      'ما + فعل ماضٍ، ويبقى الفعل على صيغته الماضية دون تغيير',
      'ما + اسم منصوب',
      'ما + فعل أمر',
    ],
    correctIndex: 1,
    a: '"ما" النافية تدخل على الفعل الماضي دون تغيير صيغته: "ما كتبَ" = "he did not write"، وهي أبسط أداة لنفي الماضي.',
  },
  {
    q: 'ما الصيغة الصحيحة لفعل "كتب" في المضارع المجزوم بعد "لم"؟',
    options: ['يكتبُ (مرفوع)', 'يكتبَ (منصوب)', 'يكتبْ (مجزوم)', 'كتبَ (ماضٍ)'],
    correctIndex: 2,
    a: 'بعد "لم" يُجزم الفعل المضارع بحذف حركة الإعراب: "لم يكتبْ" — لا يُرفع (يكتبُ) ولا يُنصب (يكتبَ) ولا يبقى ماضياً (كتبَ).',
  },
  {
    q: 'هل تدخل "ما" و"لم" على نفس نوع الفعل عند نفي الماضي؟',
    options: [
      'نعم، كلتاهما تدخل على الفعل الماضي بصيغته دون تغيير',
      '"ما" تدخل على الماضي كما هو، بينما "لم" تدخل على المضارع فتجزمه رغم أن المعنى الناتج ماضٍ',
      '"لم" تدخل على فعل الأمر فقط',
      '"ما" تدخل على المضارع المنصوب فقط',
    ],
    correctIndex: 1,
    a: '"ما" تدخل على الفعل الماضي مباشرة دون تغيير في صيغته، أما "لم" فتدخل على الفعل المضارع وتجزمه، رغم أن المعنى الناتج في الحالتين هو نفي وقوع الفعل في الماضي.',
  },
  {
    q: 'أكمل: ما ___ الولدُ إلى المدرسةِ (نفي "ذهب" بأسلوب "ما")',
    options: ['يذهبْ', 'ذهبَ', 'يذهبُ', 'اذهبْ'],
    correctIndex: 1,
    a: 'بعد "ما" النافية يبقى الفعل على صيغته الماضية كما هو: "ما ذهبَ الولدُ إلى المدرسةِ" (the boy did not go to school).',
  },
  {
    q: 'أي من الجمل التالية بها خطأ في استخدام "لم"؟',
    options: ['لم يذهبْ الولدُ', 'لم ذهبَ الولدُ', 'لم يكتبْ الطالبُ', 'لم يشربْ الطفلُ'],
    correctIndex: 1,
    a: '"لم ذهبَ الولدُ" خطأ لأن "لم" تدخل على المضارع المجزوم لا على الماضي مباشرة؛ الصواب "لم يذهبْ الولدُ" بتحويل الفعل إلى صيغة المضارع المجزوم.',
  },
  {
    q: 'أي أداتين تُستخدمان لنفي الفعل الماضي في العربية؟',
    options: ['لن ولا', 'ما ولم', 'لا الناهية ولن', 'إن ولو'],
    correctIndex: 1,
    a: 'تُستخدم "ما" و"لم" لنفي الفعل الماضي: "ما" تدخل على الماضي مباشرة، و"لم" تدخل على المضارع فتجزمه وتحوّل معناه إلى نفي وقوع الفعل في الماضي.',
  },
  {
    q: 'عند نفي "شرب الطفلُ الحليبَ" بأسلوب "لم"، ما الصيغة الصحيحة؟',
    options: [
      'لم شرب الطفلُ الحليبَ',
      'لم يشربُ الطفلُ الحليبَ',
      'لم يشربْ الطفلُ الحليبَ',
      'لم يشربَ الطفلُ الحليبَ',
    ],
    correctIndex: 2,
    a: 'الصواب "لم يشربْ الطفلُ الحليبَ": يتحول الفعل الماضي "شربَ" إلى المضارع المجزوم "يشربْ" بعد دخول أداة الجزم "لم".',
  },
  {
    q: 'لماذا لا يجوز أن يُقال "لم كتبَ الطالبُ" لنفي "كتبَ الطالبُ الدرسَ"؟',
    options: [
      'لأن "لم" لا تدخل إلا على أفعال الأمر',
      'لأن "لم" أداة جزم تختص بالدخول على الفعل المضارع، لا على الفعل الماضي مباشرة',
      'لأن "لم" لا تفيد النفي أصلاً',
      'لأنه تركيب صحيح لا خطأ فيه',
    ],
    correctIndex: 1,
    a: '"لم" أداة جزم تدخل حصراً على الفعل المضارع فتجزمه؛ فلا يصح إدخالها على الفعل الماضي كما هو، بل يجب أولاً تحويل الفعل إلى صورته المضارعة ثم جزمه: "لم يكتبْ الطالبُ الدرسَ".',
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
            Topic 31 of 47
          </p>
          <h1 className="font-serif tracking-[-0.02em] text-3xl font-bold text-foreground leading-tight mb-3">
            <span
              dir="rtl"
              lang="ar"
              style={{ fontFamily: "'Noto Naskh Arabic', serif" }}
              className="mr-2"
            >
              نفي الماضي
            </span>
            — Negation of the Past
          </h1>
          <p className="text-muted-foreground text-base max-w-xl">
            The past tense can be negated two ways. The simple form is{' '}
            <span className="font-medium text-foreground">ما</span> + فعل ماضٍ (ما كتبَ = "he did
            not write"), with the verb unchanged. The other is{' '}
            <span className="font-medium text-foreground">لم</span> + فعل مضارع مجزوم (لم يكتبْ) —
            critically, لم requires the PRESENT-tense verb in the jussive (مجزوم) form, not the
            ماضي verb itself.
          </p>
        </div>
      </div>
      <div className="mx-auto w-[min(720px,calc(100%-2rem))] py-8">
        <QuizCarousel items={quizItems} />
      </div>
    </main>
  )
}

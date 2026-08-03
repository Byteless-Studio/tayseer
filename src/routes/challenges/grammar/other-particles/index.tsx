import { createFileRoute, Link } from '@tanstack/react-router'
import { QuizCarousel } from '#/components/QuizCarousel'
import type { StrictQuizItem } from '#/routes/challenges/-quiz-types'

export const Route = createFileRoute('/challenges/grammar/other-particles/')({
  head: () => ({ meta: [{ title: 'Other Particles — Grammar — Tayseer' }] }),
  component: TopicPage,
})

const quizItems: StrictQuizItem[] = [
  {
    q: '"لأنّ" من أخوات "إنّ" التي تدخل على الجملة الاسمية. ما تأثيرها الإعرابي؟',
    options: [
      'تنصب المبتدأ (فيصير اسمها) وترفع الخبر، وتفيد السببية بمعنى "because"',
      'ترفع المبتدأ وتنصب الخبر',
      'تجزم الفعل المضارع الذي يليها',
      'لا تأثير إعرابي لها إطلاقاً',
    ],
    correctIndex: 0,
    a: '"لأنّ" كإنّ وأخواتها تنصب المبتدأ فيصبح اسمها، وتُبقي الخبر مرفوعاً؛ وهي تفيد السببية: "تغيّبتُ لأنّ الطقسَ باردٌ".',
  },
  {
    q: 'تغيّبتُ عن المدرسةِ لأنّ الطقسَ ___ (أكمل بالخبر المرفوع بمعنى "بارد")',
    options: ['باردٌ', 'باردَ', 'باردًا', 'باردٍ'],
    correctIndex: 0,
    a: '"لأنّ" تنصب اسمها ("الطقسَ") وترفع خبرها، فتكون صيغة الخبر مرفوعة بالضمة المنونة: "باردٌ".',
  },
  {
    q: 'ما وظيفة "فإنّ" (الفاء + إنّ) في جملة مثل: من يجتهدْ فإنّه ناجحٌ؟',
    options: [
      'مركّبة من الفاء الرابطة لجواب الشرط + إنّ التوكيدية الناصبة، فتربط الجواب بالشرط مع التوكيد وتنصب ما بعدها كإنّ',
      'تجزم فعل الشرط',
      'تفيد النفي المطلق للجملة',
      'تدخل فقط على الأفعال الماضية ولا علاقة لها بالجمل الاسمية',
    ],
    correctIndex: 0,
    a: '"فإنّ" مركّبة من الفاء الرابطة لجواب الشرط (خاصة حين يكون الجواب جملة اسمية) + "إنّ" التوكيدية، فتربط الجواب بالشرط مع توكيد المعنى، وتنصب اسمها وترفع خبرها كإنّ العادية.',
  },
  {
    q: 'من يجتهدْ ___ ناجحٌ (اختر الأنسب لربط جواب الشرط الاسمي بالشرط مع التوكيد)',
    options: ['فإنّه', 'لأنّه', 'إنما', 'أنّه'],
    correctIndex: 0,
    a: '"فإنّه" هي الأنسب: الفاء رابطة لجواب الشرط، وإنّ توكيدية ناصبة، والهاء ضمير اسمها: "من يجتهدْ فإنّه ناجحٌ".',
  },
  {
    q: 'أعرب "الصادقُ" في الجملة: إنما الصادقُ محبوبٌ.',
    options: [
      'مبتدأ مرفوع؛ لأن "ما" في "إنما" هي "ما الكافة" التي منعت "إنّ" من العمل (النصب)',
      'اسم إنّ منصوب',
      'خبر إنّ مرفوع',
      'مفعول به منصوب',
    ],
    correctIndex: 0,
    a: '"ما" في "إنما" هي "ما الكافة" التي تكفّ "إنّ" عن عملها النحوي، فتبقى الجملة اسمية عادية: "الصادقُ" مبتدأ مرفوع و"محبوبٌ" خبره؛ وتفيد "إنما" معنى الحصر (only/just).',
  },
  {
    q: 'أيّ الجمل التالية بها خطأ في استخدام "إنما"؟',
    options: [
      'إنما العلمُ نورٌ',
      'إنما الصدقُ منجاةٌ',
      'إنما العلمَ نورٌ',
      'إنما الكذبُ رذيلةٌ',
    ],
    correctIndex: 2,
    a: 'الجملة الثالثة خطأ لأن "ما" الكافة في "إنما" تمنع "إنّ" من العمل، فيجب أن يبقى الاسم بعدها مرفوعاً كمبتدإ: الصواب "إنما العلمُ نورٌ" لا "إنما العلمَ نورٌ".',
  },
  {
    q: 'ذهبتُ إلى المكتبةِ ___ دراسةً جادةً (أدرس، بلام التعليل الناصبة للمضارع، بمعنى "لكي أدرس")',
    options: ['لأدرسَ', 'لأدرسُ', 'لأدرسْ', 'أدرسُ'],
    correctIndex: 0,
    a: 'لام التعليل تدخل على المضارع فتنصبه بفتحة ظاهرة (فعل سالم): "لأدرسَ" — بخلاف الرفع "لأدرسُ" أو الجزم "لأدرسْ" وكلاهما خطأ هنا.',
  },
  {
    q: 'أيّ الجمل التالية بها خطأ في استخدام لام التعليل؟',
    options: [
      'سافرتُ إلى الرياضِ لأتعلّمَ العربيةَ',
      'اجتهدَ الطالبُ ليحصلَ على الجائزةِ',
      'قرأتُ الكتابَ لأفهمُ محتواه',
      'ذهبَ إلى الطبيبِ ليطمئنَّ على صحته',
    ],
    correctIndex: 2,
    a: 'الجملة الثالثة خطأ لأن لام التعليل تنصب المضارع، فالصواب "لأفهمَ" لا "لأفهمُ" (وهي صيغة الرفع، وهذا يخالف عمل لام التعليل الناصبة).',
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
            Topic 40 of 47
          </p>
          <h1 className="font-serif tracking-[-0.02em] text-3xl font-bold text-foreground leading-tight mb-3">
            <span
              dir="rtl"
              lang="ar"
              style={{ fontFamily: "'Noto Naskh Arabic', serif" }}
              className="mr-2"
            >
              حروف أخرى
            </span>
            — Other Particles
          </h1>
          <p className="text-muted-foreground text-base max-w-xl">
            لأنّ ("because") is a sister of إنّ — it nasbs its اسم and rafas its خبر: لأنّ الطقسَ
            باردٌ. فإنّ combines the ف of a conditional's جواب with إنّ for emphasis: من يجتهدْ
            فإنّه ناجحٌ. إنما is restrictive ("only/just") — its ما is ما الكافة, which cancels
            إنّ's grammatical effect, so what follows stays مرفوع as a normal مبتدأ: إنما العلمُ
            نورٌ. لام التعليل (لِ + مضارع) nasbs the verb and means "in order to": ذهبتُ لأدرسَ.
          </p>
        </div>
      </div>
      <div className="mx-auto w-[min(720px,calc(100%-2rem))] py-8">
        <QuizCarousel items={quizItems} />
      </div>
    </main>
  )
}

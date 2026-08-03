import { createFileRoute, Link } from '@tanstack/react-router'
import { QuizCarousel } from '#/components/QuizCarousel'
import type { StrictQuizItem } from '#/routes/challenges/-quiz-types'

export const Route = createFileRoute('/challenges/grammar/imperative/')({
  head: () => ({ meta: [{ title: 'The Imperative — Grammar — Tayseer' }] }),
  component: TopicPage,
})

const quizItems: StrictQuizItem[] = [
  {
    q: 'من أين يُشتق فعل الأمر في العربية؟',
    options: [
      'من الفعل الماضي مباشرة',
      'من الفعل المضارع المجزوم المخاطب، بحذف حرف المضارعة وتعديل الآخر',
      'من المصدر مباشرة',
      'لا يُشتق بل يُحفظ سماعاً لكل فعل على حدة',
    ],
    correctIndex: 1,
    a: 'فعل الأمر يُشتق من الفعل المضارع المجزوم المخاطب، بحذف حرف المضارعة (التاء) من أوله، مع إجراء التعديلات اللازمة على آخره (سكون، أو حذف نون، أو حذف حرف علة).',
  },
  {
    q: 'لأي ضمائر يُصاغ فعل الأمر حصرياً؟',
    options: [
      'لجميع الضمائر (الغائب والمخاطب والمتكلم)',
      'للمخاطب فقط (أنتَ، أنتِ، أنتما، أنتم، أنتنّ)',
      'للمتكلم فقط (أنا، نحن)',
      'للغائب فقط (هو، هي، هم)',
    ],
    correctIndex: 1,
    a: 'فعل الأمر لا يُصاغ إلا لضمائر المخاطب (أنتَ/أنتِ/أنتما/أنتم/أنتنّ)؛ أما الطلب من الغائب أو المتكلم فيُعبَّر عنه بأسلوب آخر (لام الأمر مع المضارع، مثل "لِيكتبْ").',
  },
  {
    q: 'ما صيغة الأمر الصحيحة من الفعل "كتب" للمخاطب المفرد المذكر (أنتَ)؟',
    options: ['تَكْتُبْ', 'اُكْتُبْ', 'كَتَبْ', 'يَكْتُبْ'],
    correctIndex: 1,
    a: 'صيغة الأمر من "كتب" مع "أنتَ" هي "اُكْتُبْ": حُذف حرف المضارعة (التاء) من "تَكْتُبْ"، وأُضيفت همزة وصل مضمومة لأن الحرف الثالث من المضارع (يَكْتُبُ) مضموم العين.',
  },
  {
    q: 'لماذا أضيفت همزة الوصل إلى بداية "اُكْتُبْ"؟',
    options: [
      'لأنها تحمل معنى زائداً على الفعل',
      'لتفادي البدء بساكن، إذ لا يمكن نطق كلمة عربية تبدأ بحرف ساكن مباشرة',
      'لأنها جزء أصلي من الجذر',
      'لتمييز الأمر عن المضارع دون أي سبب صوتي',
    ],
    correctIndex: 1,
    a: 'بعد حذف حرف المضارعة يبقى أول الفعل ساكناً (كْتُبْ)، والعربية لا تبدأ كلامها بساكن؛ فتُضاف همزة الوصل لتيسير النطق فقط، وتُحذف في النطق عند الوصل بكلام سابق.',
  },
  {
    q: 'ما صيغة الأمر من "جلس" (يَجْلِسُ) للمخاطب المفرد؟',
    options: ['اُجْلِسْ', 'اِجْلِسْ', 'أَجْلِسْ', 'جَلَسْ'],
    correctIndex: 1,
    a: 'مضارع "جلس" هو "يَجْلِسُ" مكسور العين، فتكون همزة الوصل في الأمر مكسورة أيضاً: "اِجْلِسْ" — تتبع حركة همزة الوصل حركة عين المضارع.',
  },
  {
    q: 'ماذا يحدث لصيغة الأمر في الأفعال الخمسة (كالمشتقة من ضمائر "أنتِ" و"أنتم")؟',
    options: [
      'تبقى النون كما هي دائماً',
      'تُحذف النون كما تُحذف في المضارع المجزوم، مثل "اُكْتُبُوا" و"اُكْتُبِي"',
      'تُضاف نون زائدة',
      'لا يُصاغ منها أمر أصلاً',
    ],
    correctIndex: 1,
    a: 'في الأفعال الخمسة (أنتِ، أنتما، أنتم)، يُحذف حرف النون في صيغة الأمر تماماً كما يُحذف في المضارع المجزوم: "تَكْتُبِينَ" ← "اُكْتُبِي"، "تَكْتُبُونَ" ← "اُكْتُبُوا".',
  },
  {
    q: 'أي من هذه الصيغ خطأ في صياغة الأمر من "كتب"؟',
    options: ['(أنتَ) اُكْتُبْ', '(أنتِ) اُكْتُبِي', '(أنتم) اُكْتُبُونَ', '(أنتما) اُكْتُبَا'],
    correctIndex: 2,
    a: 'صيغة الأمر مع "أنتم" هي "اُكْتُبُوا" بحذف النون، لا "اُكْتُبُونَ"؛ فالنون تُحذف في الأمر تماماً كما تُحذف في المضارع المجزوم للأفعال الخمسة.',
  },
  {
    q: 'ماذا يحدث لحرف العلة في فعل الأمر من الأفعال الأجوفة (المعتلة الوسط)، مثل "قال"؟',
    options: [
      'يبقى حرف العلة كما هو دون تغيير: "قُولْ"',
      'يُحذف حرف العلة عند تسكين آخر الفعل، فتصبح الصيغة "قُلْ"',
      'يتحول حرف العلة إلى همزة',
      'لا يوجد أمر من الأفعال الأجوفة',
    ],
    correctIndex: 1,
    a: 'في الفعل الأجوف كـ"قال" (يَقُولُ)، إذا سُكِّن آخر الفعل في الجزم أو الأمر، يُحذف حرف العلة (الواو) وتبقى حركته على ما قبله دلالة عليه: فعل الأمر منه "قُلْ" لا "قُوْلْ".',
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
            Topic 34 of 47
          </p>
          <h1 className="font-serif tracking-[-0.02em] text-3xl font-bold text-foreground leading-tight mb-3">
            <span
              dir="rtl"
              lang="ar"
              style={{ fontFamily: "'Noto Naskh Arabic', serif" }}
              className="mr-2"
            >
              فعل الأمر
            </span>
            — The Imperative
          </h1>
          <p className="text-muted-foreground text-base max-w-xl">
            The imperative is derived from المضارع المجزوم by dropping the person-prefix and
            adjusting the ending. It exists ONLY for 2nd-person forms (أنتَ/أنتِ/أنتما/أنتم/أنتنّ),
            ending in سكون, or dropping the نون for the five-verb forms, or dropping a weak letter.
            A همزة الوصل is added whenever the resulting form would start with a bare consonant
            cluster (اُكْتُبْ).
          </p>
        </div>
      </div>
      <div className="mx-auto w-[min(720px,calc(100%-2rem))] py-8">
        <QuizCarousel items={quizItems} />
      </div>
    </main>
  )
}

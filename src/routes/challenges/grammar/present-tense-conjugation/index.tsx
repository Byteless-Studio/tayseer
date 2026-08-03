import { createFileRoute, Link } from '@tanstack/react-router'
import { QuizCarousel } from '#/components/QuizCarousel'
import type { StrictQuizItem } from '#/routes/challenges/-quiz-types'

export const Route = createFileRoute('/challenges/grammar/present-tense-conjugation/')({
  head: () => ({ meta: [{ title: 'Present Tense Full Conjugation — Grammar — Tayseer' }] }),
  component: TopicPage,
})

const quizItems: StrictQuizItem[] = [
  {
    q: 'بم يتميز الفعل المضارع صرفياً عن الفعل الماضي؟',
    options: [
      'بلاحقة في آخره فقط',
      'بحرف من أحرف المضارعة (أ/ن/ي/ت) في أوله، وأحياناً لاحقة أيضاً',
      'بحذف الجذر الثلاثي',
      'لا فرق بينهما شكلياً',
    ],
    correctIndex: 1,
    a: 'الفعل المضارع يتميز بحرف من "أحرف المضارعة" (أ، ن، ي، ت) يُزاد في أوله، وقد يُضاف إليه أيضاً لاحقة في آخره حسب الضمير، مثل "يَكْتُبُ" و"تَكْتُبِينَ".',
  },
  {
    q: 'أكمل: أنا ___ الدرسَ (الصيغة الصحيحة لمضارع "كتب" مع "أنا")',
    options: ['أَكْتُبُ', 'نَكْتُبُ', 'يَكْتُبُ', 'تَكْتُبُ'],
    correctIndex: 0,
    a: 'حرف المضارعة الخاص بالمتكلم المفرد "أنا" هو الهمزة: "أنا أَكْتُبُ الدرسَ".',
  },
  {
    q: 'أكمل: نحن ___ الدرسَ (الصيغة الصحيحة لمضارع "كتب" مع "نحن")',
    options: ['أَكْتُبُ', 'نَكْتُبُ', 'يَكْتُبُونَ', 'تَكْتُبُ'],
    correctIndex: 1,
    a: 'حرف المضارعة الخاص بالمتكلمين "نحن" هو النون: "نحن نَكْتُبُ الدرسَ".',
  },
  {
    q: 'ما علامة الرفع الأصلية (الافتراضية) في الفعل المضارع الصحيح الآخر، مثل "يَكْتُبُ"؟',
    options: ['الفتحة الظاهرة', 'الضمة الظاهرة', 'السكون', 'ثبوت النون'],
    correctIndex: 1,
    a: 'الفعل المضارع الصحيح الآخر يُرفع بالضمة الظاهرة على آخره، كما في "يَكْتُبُ"؛ أما الأفعال الخمسة فتُرفع بثبوت النون بدلاً من الضمة.',
  },
  {
    q: 'ما هي "الأفعال الخمسة" وكيف تُرفع؟',
    options: [
      'كل مضارع اتصلت به ألف الاثنين أو واو الجماعة أو ياء المخاطبة (مثل يَكْتُبَانِ، يَكْتُبُونَ، تَكْتُبِينَ)، وتُرفع بثبوت النون',
      'أفعال ماضية فقط',
      'أفعال أمر فقط لا غير',
      'أفعال تُرفع بالضمة كسائر الأفعال',
    ],
    correctIndex: 0,
    a: 'الأفعال الخمسة هي كل مضارع اتصلت به ألف الاثنين أو واو الجماعة أو ياء المخاطبة (مثل يَكْتُبَانِ، يَكْتُبُونَ، تَكْتُبِينَ)، وعلامة رفعها ثبوت النون في آخرها، بدلاً من الضمة.',
  },
  {
    q: 'أكمل: أنتِ ___ الدرسَ (الصيغة الصحيحة لمضارع "كتب" مع المخاطبة المفردة)',
    options: ['تَكْتُبُ', 'تَكْتُبِينَ', 'تَكْتُبَانِ', 'تَكْتُبْنَ'],
    correctIndex: 1,
    a: '"أنتِ" (المخاطبة المفردة) تأخذ صيغة "تَكْتُبِينَ" وهي من الأفعال الخمسة (بياء المخاطبة)، تُرفع بثبوت النون.',
  },
  {
    q: 'أي من هذه الصيغ خطأ في تصريف مضارع "كتب" مع الضمير المذكور؟',
    options: ['هو يَكْتُبُ', 'هم يَكْتُبُونَ', 'أنتم تَكْتُبُ', 'هنّ يَكْتُبْنَ'],
    correctIndex: 2,
    a: '"أنتم" (جمع المخاطبين) تأخذ صيغة "تَكْتُبُونَ" من الأفعال الخمسة، لا "تَكْتُبُ" التي هي صيغة المخاطب المفرد "أنتَ".',
  },
  {
    q: 'أي حرف من أحرف المضارعة (أ ن ي ت) يُستخدم مع "هو" ومع جماعة الغائبين "هم" و"هنّ"؟',
    options: ['الهمزة', 'النون', 'الياء', 'التاء'],
    correctIndex: 2,
    a: 'حرف "الياء" هو حرف المضارعة المستخدم مع الغائب المفرد "هو" (يَكْتُبُ) وجماعة الغائبين "هم" (يَكْتُبُونَ) وجماعة الغائبات "هنّ" (يَكْتُبْنَ).',
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
            Topic 32 of 47
          </p>
          <h1 className="font-serif tracking-[-0.02em] text-3xl font-bold text-foreground leading-tight mb-3">
            <span
              dir="rtl"
              lang="ar"
              style={{ fontFamily: "'Noto Naskh Arabic', serif" }}
              className="mr-2"
            >
              تصريف الفعل المضارع
            </span>
            — Present Tense Full Conjugation
          </h1>
          <p className="text-muted-foreground text-base max-w-xl">
            Unlike the past tense, the present tense is marked by a PREFIX — one of أ / ن / ي / ت
            — plus sometimes a suffix. The default مرفوع ending is a ـُ (or ثبوت النون for the
            five-verb forms). The prefix follows the person: أ=أنا, ن=نحن, ي=هو/هم/هنّ, and
            ت=أنتَ/أنتِ/هي and the rest of the "you" forms.
          </p>
        </div>
      </div>
      <div className="mx-auto w-[min(720px,calc(100%-2rem))] py-8">
        <QuizCarousel items={quizItems} />
      </div>
    </main>
  )
}

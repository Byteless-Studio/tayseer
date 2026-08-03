import { createFileRoute, Link } from '@tanstack/react-router'
import { QuizCarousel } from '#/components/QuizCarousel'
import type { StrictQuizItem } from '#/routes/challenges/-quiz-types'

export const Route = createFileRoute('/challenges/grammar/sound-masculine-plural/')({
  head: () => ({ meta: [{ title: 'Sound Masculine Plural — Grammar — Tayseer' }] }),
  component: TopicPage,
})

const quizItems: StrictQuizItem[] = [
  {
    q: 'كيف يُجمع الاسم جمعاً مذكراً سالماً؟',
    options: [
      'بزيادة ونَ في الرفع وينَ في النصب والجر',
      'بزيادة ات في جميع الحالات',
      'بتغيير البنية الداخلية للكلمة',
      'بزيادة انِ في الرفع ويْنِ في النصب والجر',
    ],
    correctIndex: 0,
    a: 'جمع المذكر السالم يُصاغ بزيادة "ونَ" على المفرد في حالة الرفع و"ينَ" في حالتي النصب والجر، مثل: مسلمٌ ← مسلمونَ (رفع) / مسلمينَ (نصب وجر).',
  },
  {
    q: 'على أيّ نوع من الأسماء يُطبَّق جمع المذكر السالم عادة؟',
    options: [
      'الأسماء الجامدة غير العاقلة (كتاب، بيت)',
      'أعلام الذكور العقلاء والصفات المذكرة العاقلة (مثل مسلم، معلّم)',
      'كل اسم مؤنث',
      'الأسماء الخمسة فقط',
    ],
    correctIndex: 1,
    a: 'يُطبَّق جمع المذكر السالم غالباً على أعلام الذكور العقلاء وعلى الصفات (اسم الفاعل واسم المفعول ونحوهما) الدالة على المذكر العاقل، مثل "مسلم ← مسلمون" و"معلّم ← معلّمون"، ولا يُقاس على الأسماء الجامدة غير العاقلة.',
  },
  {
    q: 'جاء المعلمـ___ إلى المدرسةِ (جمع، رفع)',
    options: ['المعلمونَ', 'المعلمينَ', 'المعلماتُ', 'المعلمانِ'],
    correctIndex: 0,
    a: 'الفاعل هنا جمع مذكر سالم مرفوع، وعلامة رفعه الواو: "المعلمونَ".',
  },
  {
    q: 'رأيتُ المعلمـ___ في الاجتماعِ (جمع، نصب)',
    options: ['المعلمينَ', 'المعلمونَ', 'المعلماتِ', 'المعلمَينِ'],
    correctIndex: 0,
    a: 'المفعول به هنا جمع مذكر سالم منصوب، وعلامة نصبه الياء لا الألف: "المعلمينَ".',
  },
  {
    q: 'ماذا يحدث لنون جمع المذكر السالم إذا صار الجمع مضافاً؟',
    options: [
      'تبقى كما هي',
      'تُحذف، مثل "معلّمو المدرسةِ"',
      'تتحول إلى تنوين',
      'يتحول الجمع إلى جمع تكسير',
    ],
    correctIndex: 1,
    a: 'إذا وقع جمع المذكر السالم مضافاً (أول ركني الإضافة) حُذفت نونه، فيقال "معلّمو المدرسةِ" (رفع) و"معلّمي المدرسةِ" (نصب وجر) لا "معلّمونَ المدرسةِ".',
  },
  {
    q: 'أيّ من هذه الجمل بها خطأ نحوي؟',
    options: [
      'هؤلاء معلّمو المدرسةِ المجتهدونَ',
      'رأيتُ معلّمينَ المدرسةِ',
      'سلّمتُ على معلّمي المدرسةِ',
      'هؤلاء معلّمونَ مجتهدونَ',
    ],
    correctIndex: 1,
    a: '"معلّمينَ" هنا مضاف إلى "المدرسةِ" فيجب حذف نونه: الصواب "رأيتُ معلّمي المدرسةِ" لا "معلّمينَ المدرسةِ".',
  },
  {
    q: 'مررتُ بالمهندسـ___ في المكتبِ (جمع، جر)',
    options: ['المهندسينَ', 'المهندسونَ', 'المهندساتِ', 'المهندسَينِ'],
    correctIndex: 0,
    a: 'الاسم هنا مجرور بحرف الجر "الباء"، وعلامة جر جمع المذكر السالم الياء كنصبه: "المهندسينَ".',
  },
  {
    q: 'ما حركة نون "ونَ" و"ينَ" في جمع المذكر السالم، مثل "الفائزونَ"؟',
    options: ['مكسورة دائماً', 'مفتوحة دائماً', 'مضمومة دائماً', 'ساكنة دائماً'],
    correctIndex: 1,
    a: 'نون جمع المذكر السالم مفتوحة دائماً في "ونَ" و"ينَ" بصرف النظر عن موقع الكلمة الإعرابي، بخلاف نون المثنى التي تكون مكسورة دائماً.',
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
            Topic 16 of 47
          </p>
          <h1 className="font-serif tracking-[-0.02em] text-3xl font-bold text-foreground leading-tight mb-3">
            <span
              dir="rtl"
              lang="ar"
              style={{ fontFamily: "'Noto Naskh Arabic', serif" }}
              className="mr-2"
            >
              جمع المذكر السالم
            </span>
            — Sound Masculine Plural
          </h1>
          <p className="text-muted-foreground text-base max-w-xl">
            Sound masculine plural (<span className="font-medium text-foreground">جمع المذكر السالم</span>)
            is formed by adding <span className="font-medium text-foreground">ونَ</span> in رفع or{' '}
            <span className="font-medium text-foreground">ينَ</span> in نصب/جر to masculine human
            nouns and participles — never to non-human nouns. When the plural becomes a مضاف, its
            نون is dropped.
          </p>
        </div>
      </div>
      <div className="mx-auto w-[min(720px,calc(100%-2rem))] py-8">
        <QuizCarousel items={quizItems} />
      </div>
    </main>
  )
}

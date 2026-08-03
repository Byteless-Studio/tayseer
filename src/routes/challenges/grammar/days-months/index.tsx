import { createFileRoute, Link } from '@tanstack/react-router'
import { QuizCarousel } from '#/components/QuizCarousel'
import type { StrictQuizItem } from '#/routes/challenges/-quiz-types'

export const Route = createFileRoute('/challenges/grammar/days-months/')({
  head: () => ({ meta: [{ title: 'Days & Months — Grammar — Tayseer' }] }),
  component: TopicPage,
})

const quizItems: StrictQuizItem[] = [
  {
    q: 'ما الأيام السبعة بالعربية بالترتيب ابتداءً من الأحد؟',
    options: [
      'الأحد، الاثنين، الثلاثاء، الأربعاء، الخميس، الجمعة، السبت',
      'السبت، الجمعة، الخميس، الأربعاء، الثلاثاء، الاثنين، الأحد',
      'الاثنين، الثلاثاء، الأربعاء، الخميس، الجمعة، السبت، الأحد',
      'الجمعة، السبت، الأحد، الاثنين، الثلاثاء، الأربعاء، الخميس',
    ],
    correctIndex: 0,
    a: 'الأيام السبعة بالعربية بالترتيب: الأحد، الاثنين، الثلاثاء، الأربعاء، الخميس، الجمعة، السبت.',
  },
  {
    q: 'كيف يُعرب تركيب "يوم الأحد" نحوياً؟',
    options: [
      'تركيب إضافي: "يوم" مضاف و"الأحد" مضاف إليه مجرور',
      '"يوم" نعت و"الأحد" منعوت',
      '"يوم" مبتدأ و"الأحد" خبر',
      'لا علاقة نحوية بين الكلمتين',
    ],
    correctIndex: 0,
    a: '"يوم الأحد" تركيب إضافي: "يوم" مضاف لا يأخذ تنويناً ولا أل، و"الأحد" مضاف إليه مجرور، تماماً كأي تركيب إضافي آخر.',
  },
  {
    q: 'سأسافرُ يومَ ___ (الاثنين، مضاف إليه)',
    options: ['الاثنينِ', 'الاثنانِ', 'الاثنينُ', 'الاثنون'],
    correctIndex: 0,
    a: '"يومَ" هنا ظرف منصوب مضاف، و"الاثنين" مضاف إليه مجرور، ويُجر بالكسرة الظاهرة على النون: "يومَ الاثنينِ".',
  },
  {
    q: 'كيف نقول "اليوم هو يوم الجمعة" بأقصر صياغة صحيحة؟',
    options: [
      'اليومُ يومُ الجمعةِ',
      'اليومَ يومِ الجمعةِ',
      'اليومُ يومَ الجمعةَ',
      'الجمعةُ يومَ اليومِ',
    ],
    correctIndex: 0,
    a: '"اليومُ" مبتدأ مرفوع، و"يومُ الجمعةِ" خبر مرفوع وهو تركيب إضافي ("يوم" مضاف مرفوع و"الجمعة" مضاف إليه مجرور): "اليومُ يومُ الجمعةِ".',
  },
  {
    q: 'أيّ من هذه الجمل بها خطأ نحوي؟',
    options: [
      'قابلتُه يومَ الخميسِ',
      'قابلتُه يومُ الخميسِ',
      'الاجتماعُ يومَ الثلاثاءِ',
      'سأزورُك يومَ السبتِ',
    ],
    correctIndex: 1,
    a: '"يوم" هنا ظرف زمان منصوب يدل على وقت وقوع الفعل، فالصواب نصبه "يومَ الخميسِ" لا رفعه "يومُ الخميسِ".',
  },
  {
    q: 'كيف نقول "بعد ثلاثةِ أيامٍ" مطبّقين قاعدة مخالفة الجنس مع العدد ٣؟',
    options: ['بعد ثلاثةِ أيامٍ', 'بعد ثلاثِ أيامٍ', 'بعد ثلاثةِ يومٍ', 'بعد ثلاثُ يومِ'],
    correctIndex: 0,
    a: '"أيام" جمع مذكر ("يوم" مذكر)، فيوافق العدد ٣ هذا الأصل بأخذ تاء التأنيث طبقاً لمخالفة الجنس: "ثلاثةُ أيامٍ"، والمعدود "أيامٍ" مجرور مضاف إليه.',
  },
  {
    q: 'كيف يُعرب "رمضانَ" في "صُمْنا شهرَ رمضانَ"؟',
    options: [
      'مضاف إليه مجرور',
      'مضاف إليه منصوب',
      'مفعول به ثانٍ',
      'بدل مرفوع',
    ],
    correctIndex: 0,
    a: '"رمضانَ" مضاف إليه، وحكمه الإعرابي الجر دائماً كسائر المضاف إليه، وإن كانت علامة جره هنا الفتحة نيابة عن الكسرة لأنه اسم ممنوع من الصرف (سيأتي تفصيل ذلك في درس الممنوع من الصرف).',
  },
  {
    q: 'لماذا لا يجوز أن نقول "يوم الأحدَ" بنصب "الأحد"؟',
    options: [
      'لأن "الأحد" مضاف إليه ويجب أن يكون مجروراً دائماً بصرف النظر عن إعراب المضاف',
      'لأن "الأحد" ممنوع من الصرف',
      'لأن "يوم" لا يجوز إضافته',
      'هذا صحيح ويجوز نصبه',
    ],
    correctIndex: 0,
    a: '"الأحد" مضاف إليه في هذا التركيب، والمضاف إليه مجرور دائماً بصرف النظر عن موقع المضاف الإعرابي (مرفوعاً كان أو منصوباً أو مجروراً)، فلا يجوز نصبه أو رفعه بحال.',
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
            Topic 20 of 47
          </p>
          <h1 className="font-serif tracking-[-0.02em] text-3xl font-bold text-foreground leading-tight mb-3">
            <span
              dir="rtl"
              lang="ar"
              style={{ fontFamily: "'Noto Naskh Arabic', serif" }}
              className="mr-2"
            >
              الأيام والشهور
            </span>
            — Days & Months
          </h1>
          <p className="text-muted-foreground text-base max-w-xl">
            The days of the week (الأحد، الاثنين، الثلاثاء، الأربعاء، الخميس، الجمعة، السبت) and
            the months of the year combine with idāfah to express dates — يوم الأحد, "Sunday"
            (literally "the day of al-Aḥad"). This topic applies your idāfah and number knowledge
            to build simple date expressions.
          </p>
        </div>
      </div>
      <div className="mx-auto w-[min(720px,calc(100%-2rem))] py-8">
        <QuizCarousel items={quizItems} />
      </div>
    </main>
  )
}

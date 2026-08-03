import { createFileRoute, Link } from '@tanstack/react-router'
import { QuizCarousel } from '#/components/QuizCarousel'
import type { StrictQuizItem } from '#/routes/challenges/-quiz-types'

export const Route = createFileRoute('/challenges/grammar/broken-plural/')({
  head: () => ({ meta: [{ title: 'Broken Plural — Grammar — Tayseer' }] }),
  component: TopicPage,
})

const quizItems: StrictQuizItem[] = [
  {
    q: 'ما الذي يميّز جمع التكسير عن جمع المذكر السالم وجمع المؤنث السالم؟',
    options: [
      'يُصاغ بزيادة لاحقة ثابتة على آخر الكلمة',
      'يتغيّر فيه البناء الداخلي للكلمة (الحركات والحروف) بدلاً من إضافة لاحقة ثابتة',
      'يقتصر على الأسماء المؤنثة',
      'لا يُستعمل إلا مع الصفات',
    ],
    correctIndex: 1,
    a: 'جمع التكسير يُصاغ بتغيير الصيغة الداخلية للمفرد (تكسير بنيته) لا بزيادة لاحقة ثابتة، مثل: كتاب ← كُتُب، رجل ← رجال، بيت ← بيوت — بخلاف جمعي المذكر والمؤنث السالمين اللذين يحافظان على صورة المفرد ويزيدان عليها لاحقة.',
  },
  {
    q: 'ما جمع كلمة "كتاب" جمع تكسير؟',
    options: ['كُتُب', 'كتابونَ', 'كتاباتٌ', 'كتابانِ'],
    correctIndex: 0,
    a: 'جمع "كتاب" تكسيراً هو "كُتُب" على وزن فُعُل، وهذا نمط داخلي محفوظ سماعاً لا يُقاس عليه بقاعدة ثابتة.',
  },
  {
    q: 'ما جمع كلمة "بيت" جمع تكسير؟',
    options: ['بيوت', 'بيتاتٌ', 'بيتينَ', 'بيتانِ'],
    correctIndex: 0,
    a: 'جمع "بيت" تكسيراً هو "بيوت"، وهو نمط آخر من أنماط جمع التكسير المتعددة التي تُحفظ سماعاً عن العرب.',
  },
  {
    q: 'هل يمكن اشتقاق وزن جمع التكسير لأيّ اسم بقاعدة صرفية واحدة ثابتة؟',
    options: [
      'نعم، هناك وزن واحد يُطبَّق دائماً',
      'لا، فأوزان جمع التكسير كثيرة ومتنوعة وتُحفظ لكل اسم على حدة سماعاً',
      'نعم، عن طريق إضافة "ون" فقط',
      'لا، لأن جمع التكسير غير موجود أصلاً في العربية',
    ],
    correctIndex: 1,
    a: 'لجمع التكسير أوزان صرفية كثيرة (مثل فُعُل وفِعال وأفعال وفُعول وغيرها)، ولا توجد قاعدة واحدة تحدد أيّ وزن يُستعمل لأيّ مفرد، لذا يجب حفظ جمع كل اسم سماعاً عن العرب.',
  },
  {
    q: 'كيف تُعامَل الصفة مع جمع تكسير لغير العاقل، مثل "الكتب"؟',
    options: [
      'تُعامَل معاملة الجمع المذكر السالم (الكتبُ المجتهدونَ)',
      'تُعامَل معاملة المفرد المؤنث، فيُقال "الكتبُ الجميلةُ" لا "الكتبُ الجميلاتُ"',
      'تبقى الصفة مذكرة مفردة دائماً',
      'لا يجوز نعت جمع التكسير بصفة إطلاقاً',
    ],
    correctIndex: 1,
    a: 'جمع التكسير لغير العاقل يُعامَل معاملة المفردة المؤنثة في الإعراب والنعت، فيُقال "الكتبُ الجميلةُ" بصفة مفردة مؤنثة لا "الكتبُ الجميلاتُ".',
  },
  {
    q: 'أيّ من هذه الجمل بها خطأ نحوي في نعت جمع تكسير لغير عاقل؟',
    options: [
      'قرأتُ الكتبَ الجميلةَ',
      'رأيتُ البيوتَ الجميلاتِ',
      'هذه الأقلامُ الجديدةُ',
      'اشتريتُ الحقائبَ الثمينةَ',
    ],
    correctIndex: 1,
    a: '"البيوت" جمع تكسير لغير العاقل، فيجب نعته بصفة مفردة مؤنثة منصوبة: الصواب "رأيتُ البيوتَ الجميلةَ" لا "الجميلاتِ" بصيغة جمع المؤنث السالم.',
  },
  {
    q: 'ما جمع كلمة "رجل" جمع تكسير؟',
    options: ['رجال', 'رجلونَ', 'رجلاتٌ', 'رجلانِ'],
    correctIndex: 0,
    a: 'جمع "رجل" تكسيراً هو "رجال" على وزن فِعال، وهذا الجمع يُعامَل معاملة العاقل المذكر في الإعراب لأنه جمع تكسير لعاقل.',
  },
  {
    q: 'هل يُعامَل جمع التكسير للعاقل (مثل "رجال") أيضاً معاملة المفردة المؤنثة؟',
    options: [
      'نعم دائماً بلا استثناء',
      'لا، فجمع التكسير للعاقل يُعامَل معاملة الجمع الحقيقي في الإعراب (رجالٌ مجتهدونَ)، والمعاملة المفردة المؤنثة خاصة بغير العاقل',
      'لا فرق بين العاقل وغير العاقل في هذه القاعدة',
      'جمع التكسير لا يُنعت مطلقاً',
    ],
    correctIndex: 1,
    a: 'قاعدة معاملة جمع التكسير معاملة المفردة المؤنثة خاصة بغير العاقل، أما جمع التكسير للعاقل مثل "رجال" فيُنعت ويُخبر عنه بصيغة الجمع الحقيقي: "رجالٌ مجتهدونَ" لا "رجالٌ مجتهدةٌ".',
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
            Topic 18 of 47
          </p>
          <h1 className="font-serif tracking-[-0.02em] text-3xl font-bold text-foreground leading-tight mb-3">
            <span
              dir="rtl"
              lang="ar"
              style={{ fontFamily: "'Noto Naskh Arabic', serif" }}
              className="mr-2"
            >
              جمع التكسير
            </span>
            — Broken Plural
          </h1>
          <p className="text-muted-foreground text-base max-w-xl">
            Broken plural (<span className="font-medium text-foreground">جمع التكسير</span>)
            changes a noun's internal vowel pattern instead of adding a suffix — كتاب becomes كُتُب,
            رجل becomes رجال, بيت becomes بيوت. The patterns must be memorized noun by noun. A
            non-human broken plural is grammatically treated as a feminine singular for agreement.
          </p>
        </div>
      </div>
      <div className="mx-auto w-[min(720px,calc(100%-2rem))] py-8">
        <QuizCarousel items={quizItems} />
      </div>
    </main>
  )
}

import { createFileRoute, Link } from '@tanstack/react-router'
import { QuizCarousel } from '#/components/QuizCarousel'
import type { StrictQuizItem } from '#/routes/challenges/-quiz-types'

export const Route = createFileRoute('/challenges/grammar/broken-plural/')({
  head: () => ({ meta: [{ title: 'Broken Plural — Grammar — Tayseer' }] }),
  component: TopicPage,
})

const quizItems: StrictQuizItem[] = [
  {
    q: 'ما الذي يميّز جمع التكسير عن جمع المذكر السالم وجمع المؤنث السالم؟\nWhat distinguishes the broken plural from the sound masculine and sound feminine plurals?',
    options: [
      'يُصاغ بزيادة لاحقة ثابتة على آخر الكلمة\nIt is formed by adding a fixed suffix to the end of the word',
      'يتغيّر فيه البناء الداخلي للكلمة (الحركات والحروف) بدلاً من إضافة لاحقة ثابتة\nThe word\'s internal pattern (vowels and letters) changes, instead of adding a fixed suffix',
      'يقتصر على الأسماء المؤنثة\nIt is limited to feminine nouns',
      'لا يُستعمل إلا مع الصفات\nIt is used only with adjectives',
    ],
    correctIndex: 1,
    a: 'جمع التكسير يُصاغ بتغيير الصيغة الداخلية للمفرد (تكسير بنيته) لا بزيادة لاحقة ثابتة، مثل: كتاب ← كُتُب، رجل ← رجال، بيت ← بيوت — بخلاف جمعي المذكر والمؤنث السالمين اللذين يحافظان على صورة المفرد ويزيدان عليها لاحقة.\nThe broken plural is formed by changing the singular\'s internal pattern ("breaking" its structure), not by adding a fixed suffix — e.g. كتاب ← كُتُب, رجل ← رجال, بيت ← بيوت. This is unlike the sound masculine and sound feminine plurals, which keep the shape of the singular intact and just add a suffix.',
  },
  {
    q: 'ما جمع كلمة "كتاب" جمع تكسير؟\nWhat is the broken plural of "كتاب" ("book")?',
    options: [
      'كُتُب\nkutub — "books"',
      'كتابونَ\nkitābūna',
      'كتاباتٌ\nkitābātun',
      'كتابانِ\nkitābāni — dual, "two books"',
    ],
    correctIndex: 0,
    a: 'جمع "كتاب" تكسيراً هو "كُتُب" على وزن فُعُل، وهذا نمط داخلي محفوظ سماعاً لا يُقاس عليه بقاعدة ثابتة.\nThe broken plural of "كتاب" is "كُتُب," on the pattern فُعُل. This is an internal pattern that is simply memorized by ear — there is no fixed rule to derive it.',
  },
  {
    q: 'ما جمع كلمة "بيت" جمع تكسير؟\nWhat is the broken plural of "بيت" ("house")?',
    options: [
      'بيوت\nbuyūt — "houses"',
      'بيتاتٌ\nbaytātun',
      'بيتينَ\nbaytīna',
      'بيتانِ\nbaytāni — dual, "two houses"',
    ],
    correctIndex: 0,
    a: 'جمع "بيت" تكسيراً هو "بيوت"، وهو نمط آخر من أنماط جمع التكسير المتعددة التي تُحفظ سماعاً عن العرب.\nThe broken plural of "بيت" is "بيوت" — yet another of the many broken-plural patterns that are memorized by ear from native Arab usage.',
  },
  {
    q: 'هل يمكن اشتقاق وزن جمع التكسير لأيّ اسم بقاعدة صرفية واحدة ثابتة؟\nCan the broken-plural pattern of any noun be derived from a single fixed morphological rule?',
    options: [
      'نعم، هناك وزن واحد يُطبَّق دائماً\nYes, there is one pattern that always applies',
      'لا، فأوزان جمع التكسير كثيرة ومتنوعة وتُحفظ لكل اسم على حدة سماعاً\nNo — broken-plural patterns are numerous and varied, and each noun\'s plural must be memorized individually by ear',
      'نعم، عن طريق إضافة "ون" فقط\nYes, simply by adding "ون"',
      'لا، لأن جمع التكسير غير موجود أصلاً في العربية\nNo, because the broken plural does not actually exist in Arabic',
    ],
    correctIndex: 1,
    a: 'لجمع التكسير أوزان صرفية كثيرة (مثل فُعُل وفِعال وأفعال وفُعول وغيرها)، ولا توجد قاعدة واحدة تحدد أيّ وزن يُستعمل لأيّ مفرد، لذا يجب حفظ جمع كل اسم سماعاً عن العرب.\nThe broken plural has many morphological patterns (فُعُل, فِعال, أفعال, فُعول, and others), and there is no single rule that determines which pattern applies to which singular — so each noun\'s plural must be memorized by ear from native usage.',
  },
  {
    q: 'كيف تُعامَل الصفة مع جمع تكسير لغير العاقل، مثل "الكتب"؟\nHow is an adjective treated when describing a non-human broken plural, like "الكتب" ("the books")?',
    options: [
      'تُعامَل معاملة الجمع المذكر السالم (الكتبُ المجتهدونَ)\nIt is treated like a sound masculine plural (الكتبُ المجتهدونَ)',
      'تُعامَل معاملة المفرد المؤنث، فيُقال "الكتبُ الجميلةُ" لا "الكتبُ الجميلاتُ"\nIt is treated as if it were feminine singular — so you say "الكتبُ الجميلةُ," not "الكتبُ الجميلاتُ"',
      'تبقى الصفة مذكرة مفردة دائماً\nThe adjective stays masculine singular always',
      'لا يجوز نعت جمع التكسير بصفة إطلاقاً\nA broken plural can never be described by an adjective at all',
    ],
    correctIndex: 1,
    a: 'جمع التكسير لغير العاقل يُعامَل معاملة المفردة المؤنثة في الإعراب والنعت، فيُقال "الكتبُ الجميلةُ" بصفة مفردة مؤنثة لا "الكتبُ الجميلاتُ".\nA non-human broken plural is grammatically treated as a feminine singular for case marking and adjective agreement — so you say "الكتبُ الجميلةُ" ("the beautiful books") with a feminine singular adjective, not "الكتبُ الجميلاتُ" with a feminine plural one.',
  },
  {
    q: 'أيّ من هذه الجمل بها خطأ نحوي في نعت جمع تكسير لغير عاقل؟\nWhich of these sentences has a grammatical error in describing a non-human broken plural?',
    options: [
      'قرأتُ الكتبَ الجميلةَ\nqaraʾtu l-kutuba l-jamīlata — "I read the beautiful books"',
      'رأيتُ البيوتَ الجميلاتِ\nraʾaytu l-buyūta l-jamīlāti',
      'هذه الأقلامُ الجديدةُ\nhādhihi l-aqlāmu l-jadīdatu — "These are the new pens"',
      'اشتريتُ الحقائبَ الثمينةَ\nishtaraytu l-ḥaqāʾiba th-thamīnata — "I bought the precious bags"',
    ],
    correctIndex: 1,
    a: '"البيوت" جمع تكسير لغير العاقل، فيجب نعته بصفة مفردة مؤنثة منصوبة: الصواب "رأيتُ البيوتَ الجميلةَ" لا "الجميلاتِ" بصيغة جمع المؤنث السالم.\n"البيوت" is a non-human broken plural, so it must be described with a feminine singular adjective in نصب: the correct form is "رأيتُ البيوتَ الجميلةَ," not "الجميلاتِ" in the sound feminine plural.',
  },
  {
    q: 'ما جمع كلمة "رجل" جمع تكسير؟\nWhat is the broken plural of "رجل" ("man")?',
    options: [
      'رجال\nrijāl — "men"',
      'رجلونَ\nrajulūna',
      'رجلاتٌ\nrajulātun',
      'رجلانِ\nrajulāni — dual, "two men"',
    ],
    correctIndex: 0,
    a: 'جمع "رجل" تكسيراً هو "رجال" على وزن فِعال، وهذا الجمع يُعامَل معاملة العاقل المذكر في الإعراب لأنه جمع تكسير لعاقل.\nThe broken plural of "رجل" is "رجال," on the pattern فِعال. Because it is a broken plural of a rational (human) noun, it is treated grammatically as masculine rational plural, not as a feminine singular.',
  },
  {
    q: 'هل يُعامَل جمع التكسير للعاقل (مثل "رجال") أيضاً معاملة المفردة المؤنثة؟\nIs a broken plural of a rational noun (like "رجال") also treated as feminine singular?',
    options: [
      'نعم دائماً بلا استثناء\nYes, always, without exception',
      'لا، فجمع التكسير للعاقل يُعامَل معاملة الجمع الحقيقي في الإعراب (رجالٌ مجتهدونَ)، والمعاملة المفردة المؤنثة خاصة بغير العاقل\nNo — a broken plural of a rational noun is treated as a true plural for agreement (رجالٌ مجتهدونَ); the feminine-singular treatment is specific to non-rational nouns',
      'لا فرق بين العاقل وغير العاقل في هذه القاعدة\nThere is no difference between rational and non-rational nouns for this rule',
      'جمع التكسير لا يُنعت مطلقاً\nA broken plural can never be described by an adjective at all',
    ],
    correctIndex: 1,
    a: 'قاعدة معاملة جمع التكسير معاملة المفردة المؤنثة خاصة بغير العاقل، أما جمع التكسير للعاقل مثل "رجال" فيُنعت ويُخبر عنه بصيغة الجمع الحقيقي: "رجالٌ مجتهدونَ" لا "رجالٌ مجتهدةٌ".\nThe rule of treating a broken plural as feminine singular is specific to non-human nouns. A broken plural of a rational noun like "رجال" is instead described and reported on with true plural agreement: "رجالٌ مجتهدونَ" ("hardworking men"), not "رجالٌ مجتهدةٌ."',
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
            Topic 18 of 62
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
            Broken plural (<span className="font-medium text-foreground"><bdi lang="ar">جمع التكسير</bdi></span>)
            changes a noun's internal vowel pattern instead of adding a suffix — <bdi lang="ar">كتاب</bdi> becomes <bdi lang="ar">كُتُب</bdi>,
            <bdi lang="ar">رجل</bdi> becomes <bdi lang="ar">رجال</bdi>, <bdi lang="ar">بيت</bdi> becomes <bdi lang="ar">بيوت</bdi>. The patterns must be memorized noun by noun. A
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

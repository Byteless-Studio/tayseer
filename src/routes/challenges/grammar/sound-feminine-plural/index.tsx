import { createFileRoute, Link } from '@tanstack/react-router'
import { QuizCarousel } from '#/components/QuizCarousel'
import type { StrictQuizItem } from '#/routes/challenges/-quiz-types'

export const Route = createFileRoute('/challenges/grammar/sound-feminine-plural/')({
  head: () => ({ meta: [{ title: 'Sound Feminine Plural — Grammar — Tayseer' }] }),
  component: TopicPage,
})

const quizItems: StrictQuizItem[] = [
  {
    q: 'كيف يُصاغ جمع المؤنث السالم من "معلّمة"؟\nHow is the sound feminine plural of "معلّمة" ("female teacher") formed?',
    options: [
      'معلّمونَ\nmuʿallimūna — sound masculine plural',
      'معلّماتٌ\nmuʿallimātun — sound feminine plural',
      'معلّمينَ\nmuʿallimīna — sound masculine plural, نصب/جر',
      'معلّمانِ\nmuʿallimāni — dual',
    ],
    correctIndex: 1,
    a: 'يُصاغ جمع المؤنث السالم بحذف التاء المربوطة وزيادة "ات": معلّمة ← معلّماتٌ.\nThe sound feminine plural is formed by dropping the ة and adding "ات": معلّمة ← معلّماتٌ — "female teacher" → "female teachers."',
  },
  {
    q: 'بم يُنصب جمع المؤنث السالم؟\nWhat marks the نصب (accusative) of a sound feminine plural?',
    options: [
      'بالفتحة كسائر الأسماء\nFatḥa, like most nouns',
      'بالكسرة نيابة عن الفتحة\nKasra, standing in for fatḥa',
      'بالياء\nwith the letter yāʾ (ي)',
      'بحذف النون\nDropping the نون',
    ],
    correctIndex: 1,
    a: 'يُخالف جمع المؤنث السالم القاعدة العامة، فيُنصب بالكسرة نيابة عن الفتحة، بينما يُرفع بالضمة كالمعتاد ويُجر بالكسرة أيضاً.\nThe sound feminine plural breaks the general rule: it takes kasra in نصب instead of fatḥa, while its رفع is the usual ḍamma and its جر is also kasra.',
  },
  {
    q: 'نجحتِ الطالبـ___ في الامتحانِ (جمع، رفع)\nنجحتِ الطالبـ___ في الامتحانِ — "The [female] students passed the exam" (plural, رفع)',
    options: [
      'الطالباتُ\naṭ-ṭālibātu — رفع form',
      'الطالباتِ\naṭ-ṭālibāti — نصب/جر form',
      'الطالبونَ\naṭ-ṭālibūna — masculine plural',
      'الطالبتانِ\naṭ-ṭālibatāni — feminine dual',
    ],
    correctIndex: 0,
    a: 'الفاعل هنا جمع مؤنث سالم مرفوع، وعلامة رفعه الضمة: "الطالباتُ".\nThe subject here is a sound feminine plural in رفع, and its رفع marker is ḍamma: "الطالباتُ" — "the [female] students."',
  },
  {
    q: 'شاهدتُ الطالبـ___ في الحفلِ (جمع، نصب)\nشاهدتُ الطالبـ___ في الحفلِ — "I watched the [female] students at the ceremony" (plural, نصب)',
    options: [
      'الطالباتِ\naṭ-ṭālibāti — نصب form (kasra, not fatḥa)',
      'الطالباتُ\naṭ-ṭālibātu — رفع form',
      'الطالباتَ\naṭ-ṭālibāta — with fatḥa',
      'الطالبونَ\naṭ-ṭālibūna — masculine plural',
    ],
    correctIndex: 0,
    a: 'المفعول به هنا جمع مؤنث سالم منصوب، وينوب عن الفتحة الكسرة: "الطالباتِ" لا "الطالباتَ".\nThe direct object here is a sound feminine plural in نصب, and kasra stands in for fatḥa: "الطالباتِ," not "الطالباتَ."',
  },
  {
    q: 'أيّ من هذه الجمل بها خطأ نحوي؟\nWhich of these sentences contains a grammatical error?',
    options: [
      'قابلتُ المعلماتِ في المدرسةِ\nqābaltu l-muʿallimāti fī l-madrasati — "I met the teachers at school"',
      'إنّ المعلماتَ مجتهداتٌ\ninna l-muʿallimāta mujtahidātun',
      'جاءت المعلماتُ باكراً\njāʾati l-muʿallimātu bākiran — "The teachers came early"',
      'مررتُ بالمعلماتِ المجتهداتِ\nmarartu bi-l-muʿallimāti l-mujtahidāti — "I passed by the hardworking teachers"',
    ],
    correctIndex: 1,
    a: '"المعلماتِ" اسم إنّ منصوب، وجمع المؤنث السالم يُنصب بالكسرة لا بالفتحة: الصواب "إنّ المعلماتِ مجتهداتٌ".\n"المعلماتَ" is the noun of إنّ, which stands in نصب — and the sound feminine plural takes kasra in نصب, not fatḥa: the correct form is "إنّ المعلماتِ مجتهداتٌ."',
  },
  {
    q: 'هل يقتصر جمع المؤنث السالم على الأسماء المؤنثة العاقلة فقط؟\nIs the sound feminine plural limited to rational (human) feminine nouns only?',
    options: [
      'نعم، يقتصر على المؤنث العاقل فقط\nYes, it is limited to rational feminine nouns only',
      'لا، فقد يُجمع به بعض الأسماء غير العاقلة أيضاً مثل "سيارة ← سيارات"\nNo — some non-rational nouns take it too, like "سيارة ← سيارات" ("car" → "cars")',
      'نعم، ويقتصر أيضاً على الصفات دون الأسماء\nYes, and it is also limited to adjectives, not nouns',
      'لا يوجد جمع مؤنث سالم لغير العاقل مطلقاً\nThere is no sound feminine plural for non-rational nouns at all',
    ],
    correctIndex: 1,
    a: 'رغم أن جمع المؤنث السالم شائع في المؤنث العاقل (معلّمة ← معلّمات)، فإنه يُستعمل أيضاً لبعض الأسماء غير العاقلة، مثل "سيارة ← سيارات" و"حمّام ← حمّامات".\nThough the sound feminine plural is common for rational feminine nouns (معلّمة ← معلّمات), it is also used for some non-rational nouns, like "سيارة ← سيارات" ("car" → "cars") and "حمّام ← حمّامات" ("bathroom" → "bathrooms").',
  },
  {
    q: 'سلّمتُ على المعلمـ___ الجديداتِ (جمع، جر)\nسلّمتُ على المعلمـ___ الجديداتِ — "I greeted the new [female] teachers" (plural, جر)',
    options: [
      'المعلماتِ\nal-muʿallimāti — جر form',
      'المعلماتُ\nal-muʿallimātu — رفع form',
      'المعلماتَ\nal-muʿallimāta — نصب form',
      'المعلمينَ\nal-muʿallimīna — masculine plural',
    ],
    correctIndex: 0,
    a: 'الاسم هنا مجرور بحرف الجر "على"، وعلامة جر جمع المؤنث السالم الكسرة: "المعلماتِ".\nThe noun here is مجرور after the preposition على, and the جر marker of a sound feminine plural is kasra: "المعلماتِ."',
  },
  {
    q: 'ما الفرق الجوهري بين علامة إعراب جمع المؤنث السالم وعلامة إعراب المثنى وجمع المذكر السالم؟\nWhat is the core difference between how the sound feminine plural is marked for case and how the dual and sound masculine plural are marked?',
    options: [
      'لا فرق، فكلها تُعرب بالحروف\nNo difference — all three are marked with letters',
      'جمع المؤنث السالم يُعرب بالحركات (الضمة والكسرة) بينما المثنى وجمع المذكر السالم يُعربان بالحروف\nThe sound feminine plural is marked with short vowels (ḍamma, kasra), while the dual and sound masculine plural are marked with letters',
      'جمع المؤنث السالم يُعرب بالحروف أيضاً\nThe sound feminine plural is also marked with letters',
      'كلها تُبنى ولا تُعرب\nAll three are indeclinable (مبني), not declinable',
    ],
    correctIndex: 1,
    a: 'جمع المؤنث السالم يُعرب بالحركات الظاهرة على آخره (الضمة رفعاً والكسرة نصباً وجراً)، بخلاف المثنى وجمع المذكر السالم اللذين يُعربان بالحروف (الألف أو الياء في المثنى، والواو أو الياء في جمع المذكر السالم).\nThe sound feminine plural is marked by short vowels on its ending (ḍamma for رفع, kasra for both نصب and جر) — unlike the dual and sound masculine plural, which are marked by letters (ا or ي in the dual; و or ي in the sound masculine plural).',
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
            Topic 17 of 47
          </p>
          <h1 className="font-serif tracking-[-0.02em] text-3xl font-bold text-foreground leading-tight mb-3">
            <span
              dir="rtl"
              lang="ar"
              style={{ fontFamily: "'Noto Naskh Arabic', serif" }}
              className="mr-2"
            >
              جمع المؤنث السالم
            </span>
            — Sound Feminine Plural
          </h1>
          <p className="text-muted-foreground text-base max-w-xl">
            Sound feminine plural (<span className="font-medium text-foreground"><bdi lang="ar">جمع المؤنث السالم</bdi></span>)
            replaces a final <bdi lang="ar">تاء مربوطة</bdi> with <bdi lang="ar">ت</bdi> and adds <bdi lang="ar">ات</bdi>. Unlike most nouns, its case is marked
            with damma in <bdi lang="ar">رفع</bdi> but kasra — not fatha — in both <bdi lang="ar">نصب</bdi> and <bdi lang="ar">جر</bdi>.
          </p>
        </div>
      </div>
      <div className="mx-auto w-[min(720px,calc(100%-2rem))] py-8">
        <QuizCarousel items={quizItems} />
      </div>
    </main>
  )
}

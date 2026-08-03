import { createFileRoute, Link } from '@tanstack/react-router'
import { QuizCarousel } from '#/components/QuizCarousel'
import type { StrictQuizItem } from '#/routes/challenges/-quiz-types'

export const Route = createFileRoute('/challenges/grammar/aakhar-ukhraa/')({
  head: () => ({ meta: [{ title: 'Aakhar / Ukhraa — Grammar — Tayseer' }] }),
  component: TopicPage,
})

const quizItems: StrictQuizItem[] = [
  {
    q: 'ما صيغ "آخر" (another/other) بحسب الجنس والعدد؟\nWhat are the forms of "آخر" (another/other) according to gender and number?',
    options: [
      'آخر (مذكر مفرد)، أخرى (مؤنث مفرد)، آخرون (مذكر جمع)، أخريات (مؤنث جمع)\nآخر (masc. sg.), أخرى (fem. sg.), آخرون (masc. pl.), أخريات (fem. pl.)',
      'آخر للجميع دون تغيير\nآخر for everyone, unchanged',
      'أخرى للمذكر وآخر للمؤنث\nأخرى for masculine and آخر for feminine',
      'آخرون للمفرد وآخر للجمع\nآخرون for singular and آخر for plural',
    ],
    correctIndex: 0,
    a: '"آخر" للمفرد المذكر، و"أخرى" للمفردة المؤنثة، و"آخرون" لجمع المذكر، و"أخريات" لجمع المؤنث — وتتبع في ذلك قواعد النعت العادية.\n"آخر" is masculine singular, "أخرى" is feminine singular, "آخرون" is masculine plural, and "أخريات" is feminine plural — they follow the normal rules of adjective agreement.',
  },
  {
    q: 'لماذا تُعد "آخر" (بصيغة المفرد المذكر النكرة) اسماً ممنوعاً من الصرف؟\nWhy is "آخر" (in its indefinite masculine singular form) a diptote (ممنوع من الصرف)?',
    options: [
      'لأنها على وزن "أفعل" وهو من أوزان الممنوع من الصرف\nBecause it follows the pattern "أفعل", one of the diptote patterns',
      'لأنها معرفة دائماً\nBecause it is always definite',
      'لأنها جمع تكسير\nBecause it is a broken plural',
      'لأنها اسم أعجمي\nBecause it is a foreign (non-Arabic) noun',
    ],
    correctIndex: 0,
    a: '"آخر" على وزن "أفعل"، وهذا الوزن من أوزان الممنوع من الصرف في حالة التنكير، فلا تقبل التنوين وتُجر بالفتحة نيابة عن الكسرة.\n"آخر" follows the pattern "أفعل", and this pattern is one of the diptote patterns when indefinite — so it takes no تنوين and is put in the genitive with fatḥa instead of kasra.',
  },
  {
    q: 'قرأتُ كتاباً ___ (آخر، نصب)\nqara\'tu kitāban ___ (آخر, accusative) — "I read another book"',
    options: [
      'آخرَ\nākhara — accusative, no تنوين (diptote)',
      'آخرٌ\nākharun — nominative, with تنوين',
      'آخرٍ\nākharin — genitive, with تنوين',
      'آخراً\nākharan — accusative, with تنوين',
    ],
    correctIndex: 0,
    a: '"آخرَ" هنا نعت منصوب تابع لـ"كتاباً"، ويُنصب بالفتحة كالمعتاد (تشابه المصروف في النصب رغم كونه ممنوعاً من الصرف).\n"آخرَ" here is an adjective (نعت) in the accusative, agreeing with "كتاباً", and takes fatḥa as usual — the accusative form looks just like a regular noun\'s, even though "آخر" is a diptote.',
  },
  {
    q: 'مررتُ بكتابٍ ___ (آخر، جر)\nmarartu bi-kitābin ___ (آخر, genitive) — "I passed by another book"',
    options: [
      'آخرَ\nākhara — genitive with fatḥa instead of kasra (diptote), no تنوين',
      'آخرٍ\nākharin — genitive with kasra, with تنوين',
      'آخرُ\nākharu — nominative',
      'آخراً\nākharan — accusative, with تنوين',
    ],
    correctIndex: 0,
    a: '"آخرَ" هنا نعت مجرور تابع لـ"كتابٍ"، لكنه يُجر بالفتحة نيابة عن الكسرة وبلا تنوين لأنه ممنوع من الصرف في حالة التنكير.\n"آخرَ" here is an adjective (نعت) in the genitive, agreeing with "كتابٍ" — but it is marked genitive with fatḥa instead of kasra and takes no تنوين, because it is a diptote when indefinite.',
  },
  {
    q: 'بم يُرفع "آخر" النكرة، وهل يُنوَّن؟\nHow is indefinite "آخر" marked in the nominative, and does it take تنوين?',
    options: [
      'بالضمة، ولا يُنوَّن لأنه ممنوع من الصرف\nWith ḍamma, and no تنوين, because it is a diptote',
      'بالضمة، ويُنوَّن كالمعتاد\nWith ḍamma, and تنوين as usual',
      'بالفتحة نيابة عن الضمة\nWith fatḥa instead of ḍamma',
      'لا يجوز رفعه إطلاقاً\nIt cannot be put in the nominative at all',
    ],
    correctIndex: 0,
    a: 'يُرفع "آخر" النكرة بالضمة الظاهرة (كسائر الأسماء الممنوعة من الصرف في الرفع) لكن دون تنوين: "هذا كتابٌ آخرُ".\nIndefinite "آخر" is marked nominative with a plain ḍamma (like other diptotes in the nominative), but without تنوين: "هذا كتابٌ آخرُ" — "This is another book."',
  },
  {
    q: 'هل "أخرى" (المؤنث) ممنوعة من الصرف أيضاً؟\nIs "أخرى" (the feminine form) also a diptote?',
    options: [
      'نعم، فهي على وزن "فُعلى" الممنوع من الصرف، وتُعرب بحركات مقدرة على الألف المقصورة\nYes — it follows the diptote pattern "فُعلى", and its case is shown by implied vowels on the ألف مقصورة',
      'لا، فهي مصروفة تماماً وتُنوَّن\nNo, it declines fully and takes تنوين',
      'لا فرق بين آخر وأخرى في هذا الحكم\nThere is no difference between آخر and أخرى in this rule',
      'أخرى تُبنى دائماً على الفتح\nأخرى is always built (مبني) on fatḥa',
    ],
    correctIndex: 0,
    a: '"أخرى" على وزن "فُعلى" وهو أيضاً من أوزان الممنوع من الصرف، لكنها تنتهي بألف مقصورة فتُعرب بحركات مقدرة على الألف في جميع الحالات لتعذر ظهورها، لا بحركات ظاهرة كـ"آخر".\n"أخرى" follows the pattern "فُعلى", which is also a diptote pattern — but since it ends in an ألف مقصورة, its case is shown by implied (not visible) vowels on that alif in every case, unlike the visible vowels on "آخر".',
  },
  {
    q: 'أيّ من هذه الجمل بها خطأ نحوي؟\nWhich of these sentences contains a grammatical error?',
    options: [
      'عندي سيارةٌ أخرى\n"I have another car"',
      'اشتريتُ قلماً آخراً\n"I bought another pen" — written with تنوين, which is the error',
      'جاء طالبٌ آخرُ\n"Another student came"',
      'قابلتُ طالباتٍ أخرياتٍ\n"I met other female students"',
    ],
    correctIndex: 1,
    a: '"آخر" ممنوعة من الصرف في حالة التنكير فلا تقبل التنوين: الصواب "اشتريتُ قلماً آخرَ" لا "آخراً" بالتنوين.\n"آخر" is a diptote when indefinite, so it cannot take تنوين: the correct form is "اشتريتُ قلماً آخرَ" ("I bought another pen"), not "آخراً" with تنوين.',
  },
  {
    q: 'هل "الآخر" (معرفة بأل) ممنوعة من الصرف أيضاً؟\nIs "الآخر" (made definite with أل) still a diptote?',
    options: [
      'لا، فمنع الصرف خاص بحالة التنكير فقط؛ إذا عُرِّف الاسم عاد إلى الإعراب بالحركات الظاهرة الكاملة بما فيها الكسرة\nNo — diptote status applies only when indefinite; once the noun is made definite it takes full, visible case vowels again, including kasra',
      'نعم، يبقى ممنوعاً من الصرف حتى بعد التعريف\nYes, it stays a diptote even after being made definite',
      'يصبح مبنياً\nIt becomes مبني (indeclinable)',
      'لا يجوز تعريفه بأل إطلاقاً\nIt can never be made definite with أل',
    ],
    correctIndex: 0,
    a: 'منع الصرف يزول إذا عُرِّف الاسم بأل التعريف أو أُضيف، فيعود الاسم إلى الإعراب الكامل بالحركات الظاهرة: "مررتُ بالكتابِ الآخرِ" بالكسرة الكاملة، لا بالفتحة كما في حالة التنكير.\nDiptote status disappears once the noun is made definite with أل or placed in idāfah — it then takes full, visible case vowels: "مررتُ بالكتابِ الآخرِ" ("I passed by the other book") with a full kasra, not the fatḥa used when indefinite.',
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
            Topic 27 of 47
          </p>
          <h1 className="font-serif tracking-[-0.02em] text-3xl font-bold text-foreground leading-tight mb-3">
            <span
              dir="rtl"
              lang="ar"
              style={{ fontFamily: "'Noto Naskh Arabic', serif" }}
              className="mr-2"
            >
              آخر / أخرى
            </span>
            — Another/Other
          </h1>
          <p className="text-muted-foreground text-base max-w-xl">
            آخر (masc.), أخرى (fem.), آخرون/أخريات (plural) mean "another/other". This adjective
            agrees like a normal adjective in gender and number, but the indefinite masculine
            singular form آخر is itself a diptote (ممنوع من الصرف).
          </p>
        </div>
      </div>
      <div className="mx-auto w-[min(720px,calc(100%-2rem))] py-8">
        <QuizCarousel items={quizItems} />
      </div>
    </main>
  )
}

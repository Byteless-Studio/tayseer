import { createFileRoute, Link } from '@tanstack/react-router'
import { QuizCarousel } from '#/components/QuizCarousel'
import type { StrictQuizItem } from '#/routes/challenges/-quiz-types'

export const Route = createFileRoute('/challenges/grammar/adverbs-of-place/')({
  head: () => ({ meta: [{ title: 'Adverbs of Place — Grammar — Tayseer' }] }),
  component: TopicPage,
})

const quizItems: StrictQuizItem[] = [
  {
    q: 'أيّ من هذه الكلمات ليست من ظروف المكان؟\nWhich of these words is NOT an adverb of place?',
    options: [
      'فوق\nfawqa — "above / on top of"',
      'أمس\namsi — "yesterday"',
      'تحت\ntaḥta — "under / below"',
      'بين\nbayna — "between"',
    ],
    correctIndex: 1,
    a: '"أمس" ظرف زمان (يدل على وقت) لا ظرف مكان، بخلاف "فوق" و"تحت" و"بين" و"أمام" و"وراء" و"عند" و"يمين" و"يسار" التي تدل جميعها على مكان.\n"أمس" ("yesterday") is an adverb of TIME, not place, unlike "فوق", "تحت", "بين", "أمام", "وراء", "عند", "يمين", and "يسار", which all denote place.',
  },
  {
    q: 'ما إعراب ظرف المكان مثل "فوقَ" عندما يلي الفعل؟\nWhat case does a place adverb like "فوقَ" take when it follows the verb?',
    options: [
      'منصوب على الظرفية المكانية\nAccusative, as an adverbial of place (ظرفية مكانية)',
      'مرفوع على الفاعلية\nNominative, as the subject (فاعل)',
      'مجرور بحرف جر مقدر\nGenitive, governed by an implied preposition',
      'مبني على الفتح دائماً\nAlways built (مبني) on fatḥa',
    ],
    correctIndex: 0,
    a: 'ظرف المكان يُعرب منصوباً على الظرفية المكانية (نائباً عن "في")، مثل "الكتابُ فوقَ الطاولةِ" — "فوقَ" ظرف منصوب.\nA place adverb is put in the accusative as an adverbial of place (standing in for "في", "in/on"), as in "الكتابُ فوقَ الطاولةِ" ("The book is on top of the table") — "فوقَ" is an accusative adverb.',
  },
  {
    q: 'الكتابُ ___ الطاولةِ (فوق)\nal-kitābu ___ aṭ-ṭāwilati — "The book is on top of the table" (فوق, above)',
    options: [
      'فوقَ\nfawqa — accusative adverb of place',
      'فوقُ\nfawqu — nominative',
      'فوقٍ\nfawqin — genitive, with تنوين',
      'فوقاً\nfawqan — accusative, with تنوين',
    ],
    correctIndex: 0,
    a: '"فوقَ" ظرف مكان منصوب وهو مضاف، و"الطاولةِ" مضاف إليه مجرور: "فوقَ الطاولةِ".\n"فوقَ" is an accusative adverb of place and is itself a مضاف, with "الطاولةِ" as its مضاف إليه in the genitive: "فوقَ الطاولةِ" ("on top of the table").',
  },
  {
    q: 'ما إعراب الاسم الذي يلي ظرف المكان، مثل "الطاولة" في "فوق الطاولة"؟\nWhat case is the noun that follows a place adverb, like "الطاولة" in "فوق الطاولة"?',
    options: [
      'مضاف إليه مجرور\nمضاف إليه, in the genitive',
      'مفعول به منصوب\nDirect object, in the accusative',
      'فاعل مرفوع\nSubject, in the nominative',
      'نعت مرفوع\nAdjective, in the nominative',
    ],
    correctIndex: 0,
    a: 'ظرف المكان يعمل عمل المضاف، فالاسم الذي يليه مضاف إليه مجرور دائماً، مثل "الطاولةِ" في "فوقَ الطاولةِ".\nA place adverb functions as a مضاف, so the noun that follows it is always its مضاف إليه, in the genitive — like "الطاولةِ" in "فوقَ الطاولةِ".',
  },
  {
    q: 'القطُّ ___ السريرِ (تحت)\nal-qiṭṭu ___ as-sarīri — "The cat is under the bed" (تحت, under)',
    options: [
      'تحتَ\ntaḥta — accusative adverb of place',
      'تحتُ\ntaḥtu — nominative',
      'تحتٍ\ntaḥtin — genitive, with تنوين',
      'تحتاً\ntaḥtan — accusative, with تنوين',
    ],
    correctIndex: 0,
    a: '"تحتَ" ظرف مكان منصوب مضاف، و"السريرِ" مضاف إليه مجرور: "تحتَ السريرِ".\n"تحتَ" is an accusative adverb of place and a مضاف, with "السريرِ" as its مضاف إليه in the genitive: "تحتَ السريرِ" ("under the bed").',
  },
  {
    q: 'أيّ من هذه الجمل بها خطأ نحوي؟\nWhich of these sentences contains a grammatical error?',
    options: [
      'جلستُ أمامَ المعلمِ\n"I sat in front of the teacher"',
      'وقفَ وراءُ البابِ\n"He stood behind the door" — with وراء in the nominative',
      'المسجدُ بينَ البيتينِ\n"The mosque is between the two houses"',
      'جلسَ عن يمينِ الإمامِ\n"He sat to the right of the imam"',
    ],
    correctIndex: 1,
    a: '"وراء" ظرف مكان يجب أن يُنصب دائماً عند الدلالة على الظرفية: الصواب "وقفَ وراءَ البابِ" لا "وراءُ" بالرفع.\n"وراء" is a place adverb and must always be accusative when it expresses place: the correct form is "وقفَ وراءَ البابِ", not "وراءُ" in the nominative.',
  },
  {
    q: 'المسجدُ ___ البيتِ والمدرسةِ (بين)\nal-masjidu ___ al-bayti wal-madrasati — "The mosque is between the house and the school" (بين, between)',
    options: [
      'بينَ\nbayna — accusative adverb of place',
      'بينُ\nbaynu — nominative',
      'بينٍ\nbaynin — genitive, with تنوين',
      'بيناً\nbaynan — accusative, with تنوين',
    ],
    correctIndex: 0,
    a: '"بينَ" ظرف مكان منصوب يفيد الوقوع وسط شيئين، وما بعده مضاف إليه مجرور: "بينَ البيتِ والمدرسةِ".\n"بينَ" is an accusative adverb of place meaning being situated between two things, and what follows it is its مضاف إليه in the genitive: "بينَ البيتِ والمدرسةِ".',
  },
  {
    q: 'كيف تتغير حركة "عند" عند إضافتها إلى ياء المتكلم كما في "عندي"؟\nWhat happens to "عند" when the pronoun "ي" ("my/me") is attached to it, as in "عندي"?',
    options: [
      'تبقى منصوبة اسمياً لكنها تتصل بضمير متصل "ي" فتصبح "عندي" بمعنى "I have / at my place"\nIt stays a noun in the accusative, but attaches the pronoun "ي" (an attached pronoun) to become "عندي", meaning "I have / at my place"',
      'تتحول إلى فعل\nIt turns into a verb',
      'تصبح حرف جر مستقل\nIt becomes an independent preposition',
      'لا يجوز إضافتها إلى الضمائر إطلاقاً\nIt can never be joined to pronouns',
    ],
    correctIndex: 0,
    a: '"عند" ظرف مكان يُضاف إلى الأسماء والضمائر كسائر ظروف المكان، فتتصل به ياء المتكلم (ضمير مبني في محل جر مضاف إليه) لتكوّن "عندي" وتفيد الملكية أو المصاحبة، مع بقاء "عند" نفسها منصوبة على الظرفية.\n"عند" is a place adverb that takes idāfah with nouns and pronouns like other place adverbs, so "ي" (a مبني pronoun functioning as a genitive مضاف إليه) attaches to it to form "عندي", expressing possession or presence ("I have" / "at my place"), while "عند" itself stays accusative as an adverbial of place.',
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
            Topic 21 of 62
          </p>
          <h1 className="font-serif tracking-[-0.02em] text-3xl font-bold text-foreground leading-tight mb-3">
            <span
              dir="rtl"
              lang="ar"
              style={{ fontFamily: "'Noto Naskh Arabic', serif" }}
              className="mr-2"
            >
              ظرف المكان
            </span>
            — Adverbs of Place
          </h1>
          <p className="text-muted-foreground text-base max-w-xl">
            Place adverbs like <bdi lang="ar">فوق، تحت، أمام، وراء، بين، عند، يمين، يسار</bdi> function as <bdi lang="ar">ظرف</bdi> —
            <bdi lang="ar">منصوب</bdi> — when followed by a <bdi lang="ar">مضاف إليه: فوقَ الطاولةِ</bdi> (<bdi lang="ar">فوق منصوب</bdi>, <bdi lang="ar">الطاولة مجرور مضاف
            إليه</bdi>).
          </p>
        </div>
      </div>
      <div className="mx-auto w-[min(720px,calc(100%-2rem))] py-8">
        <QuizCarousel items={quizItems} />
      </div>
    </main>
  )
}

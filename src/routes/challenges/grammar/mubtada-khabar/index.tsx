import { createFileRoute, Link } from '@tanstack/react-router'
import { QuizCarousel } from '#/components/QuizCarousel'
import type { StrictQuizItem } from '#/routes/challenges/-quiz-types'

export const Route = createFileRoute('/challenges/grammar/mubtada-khabar/')({
  head: () => ({ meta: [{ title: 'The Nominal Sentence — Grammar — Tayseer' }] }),
  component: TopicPage,
})

const quizItems: StrictQuizItem[] = [
  {
    q: 'ما هي الجملة الاسمية وما ركناها الأساسيان؟\nWhat is a nominal sentence (جملة اسمية), and what are its two basic parts?',
    options: [
      'جملة تبدأ بفعل، وركناها الفاعل والمفعول به\nA sentence that starts with a verb, whose two parts are the subject (فاعل) and object (مفعول به)',
      'جملة تبدأ باسم، وركناها المبتدأ والخبر\nA sentence that starts with a noun, whose two parts are the مبتدأ (topic) and the خبر (predicate)',
      'جملة تبدأ بحرف جر، وركناها الجار والمجرور\nA sentence that starts with a preposition, whose two parts are the preposition and the noun it governs',
      'جملة تبدأ بأداة استفهام، وركناها السؤال والجواب\nA sentence that starts with a question word, whose two parts are the question and the answer',
    ],
    correctIndex: 1,
    a: 'الجملة الاسمية هي الجملة التي تبدأ باسم، وتتكون في أبسط صورها من ركنين: المبتدأ (الاسم الذي يُبتدأ به الكلام) والخبر (ما يخبر عنه ويكمل معناه).\nA جملة اسمية is a sentence that starts with a noun, and in its simplest form consists of two parts: the مبتدأ (the noun the sentence opens with) and the خبر (what is said about it, completing the meaning).',
  },
  {
    q: 'محمدٌ في الفصلِ — ما إعراب "محمد" هنا، ولماذا؟\nمحمدٌ في الفصلِ ("Muhammad is in the classroom") — what is the case of "محمد" here, and why?',
    options: [
      'مبتدأ مرفوع لأنه ابتدئ به الكلام والحديث عنه\nمبتدأ, مرفوع, because the sentence opens with it and it is what is being talked about',
      'مفعول به منصوب\nمفعول به, منصوب (direct object, accusative)',
      'مضاف إليه مجرور\nمضاف إليه, مجرور (genitive, second term of an idāfah)',
      'حال منصوب\nحال, منصوب (an accusative circumstantial phrase)',
    ],
    correctIndex: 0,
    a: 'محمد هنا هو الاسم الذي ابتدئ به الكلام، فهو مبتدأ، وحكمه الرفع. الجار والمجرور "في الفصلِ" يقع في محل رفع خبر.\nHere محمد is the noun the sentence opens with, so it is the مبتدأ, and it takes مرفوع. The prepositional phrase "في الفصلِ" sits in the position of the مرفوع خبر.',
  },
  {
    q: 'ما حكم إعراب كل من المبتدأ والخبر في الجملة الاسمية البسيطة (كالطالبُ مجتهدٌ)؟\nWhat case do both the مبتدأ and the خبر take in a simple nominal sentence (like الطالبُ مجتهدٌ)?',
    options: [
      'المبتدأ مرفوع والخبر منصوب\nThe مبتدأ is مرفوع and the خبر is منصوب',
      'المبتدأ منصوب والخبر مرفوع\nThe مبتدأ is منصوب and the خبر is مرفوع',
      'كلاهما مرفوع\nBoth are مرفوع',
      'كلاهما مجرور\nBoth are مجرور',
    ],
    correctIndex: 2,
    a: 'الأصل في الجملة الاسمية البسيطة أن يكون كل من المبتدأ والخبر مرفوعاً — الطالبُ (مبتدأ مرفوع) مجتهدٌ (خبر مرفوع).\nBy default, in a simple nominal sentence both the مبتدأ and the خبر are مرفوع — الطالبُ (مبتدأ, مرفوع) مجتهدٌ (خبر, مرفوع).',
  },
  {
    q: 'الطالبُ مجتهدٌ — لماذا المبتدأ هنا معرفة (الطالبُ بأل) بينما الخبر نكرة (مجتهدٌ)؟\nالطالبُ مجتهدٌ — why is the مبتدأ here definite (الطالبُ, with أل) while the خبر is indefinite (مجتهدٌ)?',
    options: [
      'صدفة لا قاعدة عامة لها\nCoincidence, with no general rule behind it',
      'لأن هذا هو النمط الأشيع: مبتدأ معرفة (شيء محدد نتحدث عنه) + خبر نكرة (صفة أو معلومة عنه)\nBecause this is the most common pattern: definite مبتدأ (a specific thing we are talking about) + indefinite خبر (a description or piece of information about it)',
      'لأن كل مبتدأ يجب أن يكون معرفة وكل خبر يجب أن يكون نكرة بلا استثناء\nBecause every مبتدأ must be definite and every خبر must be indefinite, with no exceptions',
      'لأن الخبر لا يمكن أن يكون معرفة أبداً في أي جملة\nBecause a خبر can never be definite in any sentence',
    ],
    correctIndex: 1,
    a: 'الأنماط الأشيع للجملة الاسمية هي مبتدأ معرفة (شيء معروف نتكلم عنه) يتبعه خبر نكرة (يعطي معلومة عنه) — وإن كان هذا ليس قيداً مطلقاً في كل تراكيب اللغة.\nThe most common pattern for a nominal sentence is a definite مبتدأ (something known that we are talking about) followed by an indefinite خبر (giving information about it) — though this is not an absolute rule for every construction in the language.',
  },
  {
    q: 'أيّ من هذه الجمل بها خطأ في مطابقة الخبر للمبتدأ في العدد والجنس؟\nWhich of these sentences has an error in matching the خبر to the مبتدأ in number and gender?',
    options: [
      'الطالبةُ مجتهدةٌ\naṭ-ṭālibatu mujtahidatun — "The [female] student is diligent" (correct)',
      'الطالبانِ مجتهدانِ\naṭ-ṭālibāni mujtahidāni — "The two students are diligent" (correct, dual)',
      'الطالباتُ مجتهدةٌ\naṭ-ṭālibātu mujtahidatun',
      'الطلابُ مجتهدونَ\naṭ-ṭullābu mujtahidūna — "The students are diligent" (correct, masculine plural)',
    ],
    correctIndex: 2,
    a: '"الطالباتُ مجتهدةٌ" خطأ لأن المبتدأ جمع مؤنث (الطالباتُ) ويحتاج خبراً يطابقه في الجمع لا في المفرد؛ الصواب "الطالباتُ مجتهداتٌ".\n"الطالباتُ مجتهدةٌ" is wrong because the مبتدأ is a feminine plural (الطالباتُ) and needs a خبر that matches it in plural, not singular; the correct form is "الطالباتُ مجتهداتٌ".',
  },
  {
    q: 'البيتُ كبيرٌ — What kind of word is the خبر "كبيرٌ" here, and what does it tell us about المبتدأ؟\nالبيتُ كبيرٌ — what kind of word is the خبر "كبيرٌ" here, and what does it tell us about المبتدأ؟',
    options: [
      'فعل يخبر عن حدوث الكبر\nA verb reporting that "growing large" occurred',
      'اسم مفرد (صفة) يصف حال المبتدأ ويكمل معناه\nA single noun (an adjective) describing the state of the مبتدأ and completing its meaning',
      'حرف جر يربط بين المبتدأ وما بعده\nA preposition linking the مبتدأ to what follows it',
      'مضاف إليه يخصص المبتدأ\nA مضاف إليه specifying the مبتدأ',
    ],
    correctIndex: 1,
    a: 'كبيرٌ هنا خبر مفرد (اسم وليس فعلاً ولا جملة)، وهو صفة تصف حال المبتدأ "البيت" وتُتمم معنى الجملة، ويطابقه في الرفع والإفراد والتذكير.\nHere كبيرٌ is a خبر مفرد (a single noun, not a verb or a clause) — an adjective describing the state of the مبتدأ "البيت" and completing the sentence\'s meaning, agreeing with it in case, number, and gender.',
  },
  {
    q: 'أكمل الجملة بخبر مرفوع يطابق المبتدأ في التذكير: البابُ ___\nComplete the sentence with a مرفوع خبر that matches the مبتدأ in gender: البابُ ___',
    options: [
      'مفتوحةٌ\nmaftūḥatun',
      'مفتوحٌ\nmaftūḥun — "open"',
      'مفتوحاً\nmaftūḥan',
      'مفتوحِ\nmaftūḥi',
    ],
    correctIndex: 1,
    a: 'الباب اسم مذكر، فيجب أن يطابقه الخبر في التذكير والرفع: "البابُ مفتوحٌ" — لا "مفتوحةٌ" (مؤنث) ولا "مفتوحاً" (منصوب).\nالباب is masculine, so the خبر must match it in gender and case: "البابُ مفتوحٌ" — not "مفتوحةٌ" (feminine) and not "مفتوحاً" (accusative).',
  },
  {
    q: 'هل يمكن أن يتقدم الخبر على المبتدأ في العربية؟ اختر التوضيح الأدق.\nCan the خبر come before the مبتدأ in Arabic? Choose the most accurate explanation.',
    options: [
      'لا، أبداً؛ ترتيب مبتدأ ثم خبر ثابت لا يتغير في كل الحالات\nNo, never; the order مبتدأ then خبر is fixed and never changes',
      'نعم، يجوز تقديم الخبر شبه الجملة (كالجار والمجرور أو الظرف) على المبتدأ في مواضع معينة، كقولنا "في البيتِ رجلٌ"\nYes — a خبر that is a prepositional or adverbial phrase (شبه جملة) may be fronted before the مبتدأ in certain contexts, as in "في البيتِ رجلٌ" ("There is a man in the house")',
      'نعم، لكن فقط إذا كان المبتدأ فعلاً\nYes, but only if the مبتدأ is a verb',
      'لا فرق؛ لا يوجد ترتيب محدد أصلاً في الجملة الاسمية\nIt doesn\'t matter; there is no fixed order at all in a nominal sentence',
    ],
    correctIndex: 1,
    a: 'الأصل تقديم المبتدأ على الخبر، لكن يجوز تقديم الخبر إذا كان شبه جملة (جار ومجرور أو ظرف) خصوصاً إذا كان المبتدأ نكرة، كقولنا "في البيتِ رجلٌ" حيث تقدّم شبه الجملة "في البيتِ" على المبتدأ النكرة "رجلٌ".\nBy default the مبتدأ precedes the خبر, but the خبر may be fronted when it is a شبه جملة (prepositional or adverbial phrase), especially when the مبتدأ is indefinite — as in "في البيتِ رجلٌ," where the شبه جملة "في البيتِ" is fronted before the indefinite مبتدأ "رجلٌ".',
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
            Topic 5 of 62
          </p>
          <h1 className="font-serif tracking-[-0.02em] text-3xl font-bold text-foreground leading-tight mb-3">
            <span
              dir="rtl"
              lang="ar"
              style={{ fontFamily: "'Noto Naskh Arabic', serif" }}
              className="mr-2"
            >
              مبتدأ وخبر
            </span>
            — The Nominal Sentence
          </h1>
          <p className="text-muted-foreground text-base max-w-xl">
            An Arabic sentence that starts with a noun is a{' '}
            <span className="font-medium text-foreground"><bdi lang="ar">جملة اسمية</bdi></span>, built from a{' '}
            <span className="font-medium text-foreground"><bdi lang="ar">مبتدأ</bdi></span> (topic, <bdi lang="ar">مرفوع</bdi>) and a{' '}
            <span className="font-medium text-foreground"><bdi lang="ar">خبر</bdi></span> (predicate, <bdi lang="ar">مرفوع</bdi>). The most
            common shape is a definite <bdi lang="ar">مبتدأ</bdi> followed by an indefinite <bdi lang="ar">خبر</bdi> (<bdi lang="ar">الطالبُ مجتهدٌ</bdi> — "the
            student is diligent"), and the <bdi lang="ar">خبر</bdi> must always agree with the <bdi lang="ar">مبتدأ</bdi> in gender and
            number.
          </p>
        </div>
      </div>
      <div className="mx-auto w-[min(720px,calc(100%-2rem))] py-8">
        <QuizCarousel items={quizItems} />
      </div>
    </main>
  )
}

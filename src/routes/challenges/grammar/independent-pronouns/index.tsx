import { createFileRoute, Link } from '@tanstack/react-router'
import { QuizCarousel } from '#/components/QuizCarousel'
import type { StrictQuizItem } from '#/routes/challenges/-quiz-types'

export const Route = createFileRoute('/challenges/grammar/independent-pronouns/')({
  head: () => ({ meta: [{ title: 'Independent Pronouns — Grammar — Tayseer' }] }),
  component: TopicPage,
})

const quizItems: StrictQuizItem[] = [
  {
    q: 'ما هو الضمير المنفصل المناسب للمتكلم المفرد (I)؟\nWhat is the correct independent pronoun for the first-person singular ("I")?',
    options: [
      'أنتَ\nanta — "you" (masculine singular)',
      'أنا\nanā — "I"',
      'هو\nhuwa — "he"',
      'نحن\nnaḥnu — "we"',
    ],
    correctIndex: 1,
    a: 'أنا هو ضمير المتكلم المفرد (سواء مذكراً أو مؤنثاً)، يُستخدم للإشارة إلى المتكلم نفسه.\nأنا is the first-person singular pronoun (used for both masculine and feminine speakers), referring to the speaker themselves.',
  },
  {
    q: 'ما هو الضمير المنفصل المناسب للمخاطب المؤنث المفرد (you, fem. sg.)؟\nWhat is the correct independent pronoun for the second-person feminine singular ("you," fem. sg.)?',
    options: [
      'أنتَ\nanta — "you" (masculine singular)',
      'أنتِ\nanti — "you" (feminine singular)',
      'أنتما\nantumā — "you two" (dual)',
      'أنتنّ\nantunna — "you" (feminine plural)',
    ],
    correctIndex: 1,
    a: 'أنتِ (بكسر التاء) ضمير المخاطبة المفردة المؤنثة، بينما أنتَ (بفتح التاء) للمخاطب المفرد المذكر.\nأنتِ (with kasrah on the ت) is the pronoun for a single feminine addressee, while أنتَ (with fatḥah) is for a single masculine addressee.',
  },
  {
    q: 'هما ذاهبانِ إلى المسجدِ — لأيّ عدد وجنس يُستخدم الضمير هما؟\nهما ذاهبانِ إلى المسجدِ ("The two of them are going to the mosque") — for what number and gender is the pronoun هما used?',
    options: [
      'الجمع المذكر\nMasculine plural',
      'المثنى (مذكراً كان أو مؤنثاً)\nThe dual (whether masculine or feminine)',
      'المفرد المؤنث\nFeminine singular',
      'الجمع المؤنث\nFeminine plural',
    ],
    correctIndex: 1,
    a: 'هما ضمير الغائب للمثنى، ويُستخدم للمثنى المذكر والمؤنث معاً (على خلاف أنتما التي تخص المخاطَبين تحديداً بنفس الصيغة أيضاً لكليهما).\nهما is the third-person dual pronoun, used for both masculine and feminine dual referents alike (much as أنتما serves both genders for the second-person dual).',
  },
  {
    q: 'أكمل: ___ مجتهدونَ (نحن نتحدث عن جماعة رجال غائبين — "they are diligent")\nComplete: ___ مجتهدونَ (we are talking about a group of absent men — "they are diligent")',
    options: [
      'هم\nhum — "they" (masculine plural)',
      'هنّ\nhunna — "they" (feminine plural)',
      'هما\nhumā — "they two" (dual)',
      'أنتم\nantum — "you" (masculine plural)',
    ],
    correctIndex: 0,
    a: 'هم ضمير الغائب لجمع الذكور، ويطابقه الخبر بصيغة جمع المذكر السالم "مجتهدونَ".\nهم is the third-person masculine plural pronoun, matched by the خبر in the sound masculine plural form "مجتهدونَ".',
  },
  {
    q: 'أنتَ طالبٌ ("You are a student") — What role does the pronoun أنتَ play, and what case does that put it in?\nأنتَ طالبٌ ("You are a student") — what role does the pronoun أنتَ play, and what case does that put it in?',
    options: [
      'مفعول به، منصوب\nمفعول به (direct object), منصوب',
      'مبتدأ، في محل رفع\nمبتدأ (topic), in the position of مرفوع',
      'مضاف إليه، في محل جر\nمضاف إليه, in the position of مجرور',
      'حال، في محل نصب\nحال (circumstantial), in the position of منصوب',
    ],
    correctIndex: 1,
    a: 'أنتَ هنا مبتدأ في محل رفع، وطالبٌ خبره المرفوع — الضمائر المنفصلة تعمل مبتدأ في الجملة الاسمية تماماً كالأسماء الظاهرة.\nHere أنتَ is the مبتدأ in the position of مرفوع, and طالبٌ is its مرفوع خبر — independent pronouns function as the مبتدأ of a nominal sentence exactly like ordinary nouns do.',
  },
  {
    q: 'أيّ من هذه الجمل بها خطأ في مطابقة الخبر لضمير المبتدأ؟\nWhich of these sentences has an error in matching the خبر to the pronoun مبتدأ?',
    options: [
      'هي مجتهدةٌ\nhiya mujtahidatun — "She is diligent"',
      'هم مجتهدونَ\nhum mujtahidūna — "They are diligent"',
      'هنّ مجتهدٌ\nhunna mujtahidun',
      'أنتِ مجتهدةٌ\nanti mujtahidatun — "You are diligent"',
    ],
    correctIndex: 2,
    a: '"هنّ مجتهدٌ" خطأ لأن هنّ ضمير لجمع الإناث الغائبات، ويحتاج خبراً بصيغة جمع المؤنث السالم؛ الصواب "هنّ مجتهداتٌ".\n"هنّ مجتهدٌ" is wrong because هنّ is the pronoun for a group of absent women and needs a خبر in the sound feminine plural form; the correct form is "هنّ مجتهداتٌ".',
  },
  {
    q: 'الضمائر المنفصلة مثل أنا وهو مبنية دائماً. What does that mean about their form?\nالضمائر المنفصلة مثل أنا وهو مبنية دائماً. What does that mean about their form?',
    options: [
      'تتغير حركة آخرها حسب موقعها الإعرابي في الجملة\nTheir ending changes according to their grammatical position in the sentence',
      'شكلها وحركة آخرها ثابتان دائماً، بصرف النظر عن موقعها من الإعراب\nTheir form and ending are always fixed, regardless of their grammatical position',
      'لا يمكن أن تكون مبتدأ أبداً\nThey can never be a مبتدأ',
      'تُعرب فقط في حالة النصب\nThey are only declined in the accusative case',
    ],
    correctIndex: 1,
    a: 'الضمائر المنفصلة كلها مبنية، فشكلها لا يتغير بتغير موقعها الإعرابي (مبتدأ أو غيره)، خلافاً للأسماء المعربة التي تتغير حركة آخرها حسب العامل.\nAll independent pronouns are مبني, so their form never changes with their grammatical position (مبتدأ or otherwise), unlike مُعرَب nouns whose ending changes according to the governing factor.',
  },
  {
    q: 'رتّب هذه الضمائر حسب المخاطَب الصحيح: نحن جالسونَ في الحديقةِ. لماذا استُخدم "نحن" هنا وليس "أنا"؟\nنحن جالسونَ في الحديقةِ ("We are sitting in the garden") — why is "نحن" used here and not "أنا"?',
    options: [
      'لأن المتكلم يتحدث عن نفسه وحده\nBecause the speaker is talking about themselves alone',
      'لأن المتكلم يتحدث نيابة عن مجموعة تضمه (نحن = "we"), لا عن نفسه منفرداً (أنا = "I")\nBecause the speaker is speaking on behalf of a group that includes them (نحن = "we"), not for themselves alone (أنا = "I")',
      'لأن نحن للمخاطب لا للمتكلم\nBecause نحن is for the addressee, not the speaker',
      'لا فرق بين أنا ونحن في المعنى\nThere is no difference in meaning between أنا and نحن',
    ],
    correctIndex: 1,
    a: 'نحن ضمير المتكلمين (جمع)، يُستخدم حين يتحدث المتكلم عن نفسه مع آخرين، بخلاف أنا التي تخص المتكلم المفرد وحده.\nنحن is the plural first-person pronoun, used when the speaker talks about themselves together with others — unlike أنا, which is reserved for the speaker alone.',
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
            Topic 7 of 47
          </p>
          <h1 className="font-serif tracking-[-0.02em] text-3xl font-bold text-foreground leading-tight mb-3">
            <span
              dir="rtl"
              lang="ar"
              style={{ fontFamily: "'Noto Naskh Arabic', serif" }}
              className="mr-2"
            >
              الضمائر المنفصلة
            </span>
            — Independent Pronouns
          </h1>
          <p className="text-muted-foreground text-base max-w-xl">
            أنا نحن أنتَ أنتِ أنتما أنتم أنتنّ هو هي هما هم هنّ — the full set of independent
            pronouns stands on its own as a complete word (unlike attached pronouns), most commonly
            working as the <span className="font-medium text-foreground">مبتدأ</span> of a nominal
            sentence. Whatever خبر follows must agree with the pronoun's person, gender, and number,
            and like all pronouns, these words are{' '}
            <span className="font-medium text-foreground">مبني</span> — their form never changes
            with case.
          </p>
        </div>
      </div>
      <div className="mx-auto w-[min(720px,calc(100%-2rem))] py-8">
        <QuizCarousel items={quizItems} />
      </div>
    </main>
  )
}

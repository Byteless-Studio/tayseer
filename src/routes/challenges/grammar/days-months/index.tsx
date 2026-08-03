import { createFileRoute, Link } from '@tanstack/react-router'
import { QuizCarousel } from '#/components/QuizCarousel'
import type { StrictQuizItem } from '#/routes/challenges/-quiz-types'

export const Route = createFileRoute('/challenges/grammar/days-months/')({
  head: () => ({ meta: [{ title: 'Days & Months — Grammar — Tayseer' }] }),
  component: TopicPage,
})

const quizItems: StrictQuizItem[] = [
  {
    q: 'ما الأيام السبعة بالعربية بالترتيب ابتداءً من الأحد؟\nWhat are the seven days of the week in Arabic, in order starting from Sunday?',
    options: [
      'الأحد، الاثنين، الثلاثاء، الأربعاء، الخميس، الجمعة، السبت\nal-Aḥad (Sun), al-Ithnayn (Mon), ath-Thulāthāʾ (Tue), al-Arbiʿāʾ (Wed), al-Khamīs (Thu), al-Jumʿah (Fri), as-Sabt (Sat)',
      'السبت، الجمعة، الخميس، الأربعاء، الثلاثاء، الاثنين، الأحد\nThe same seven days, but listed in reverse order starting from Saturday',
      'الاثنين، الثلاثاء، الأربعاء، الخميس، الجمعة، السبت، الأحد\nThe same seven days, but starting from Monday instead of Sunday',
      'الجمعة، السبت، الأحد، الاثنين، الثلاثاء، الأربعاء، الخميس\nThe same seven days, but starting from Friday instead of Sunday',
    ],
    correctIndex: 0,
    a: 'الأيام السبعة بالعربية بالترتيب: الأحد، الاثنين، الثلاثاء، الأربعاء، الخميس، الجمعة، السبت.\nThe seven days of the week in Arabic, in order: الأحد (Sunday), الاثنين (Monday), الثلاثاء (Tuesday), الأربعاء (Wednesday), الخميس (Thursday), الجمعة (Friday), السبت (Saturday).',
  },
  {
    q: 'كيف يُعرب تركيب "يوم الأحد" نحوياً؟\nHow is the construction "يوم الأحد" ("Sunday", literally "the day of al-Aḥad") analyzed grammatically?',
    options: [
      'تركيب إضافي: "يوم" مضاف و"الأحد" مضاف إليه مجرور\nAn idāfah construction: "يوم" is the مضاف, and "الأحد" is the مضاف إليه, in the genitive',
      '"يوم" نعت و"الأحد" منعوت\n"يوم" is an adjective and "الأحد" is what it describes',
      '"يوم" مبتدأ و"الأحد" خبر\n"يوم" is the subject (مبتدأ) and "الأحد" is the predicate (خبر)',
      'لا علاقة نحوية بين الكلمتين\nThere is no grammatical relationship between the two words',
    ],
    correctIndex: 0,
    a: '"يوم الأحد" تركيب إضافي: "يوم" مضاف لا يأخذ تنويناً ولا أل، و"الأحد" مضاف إليه مجرور، تماماً كأي تركيب إضافي آخر.\n"يوم الأحد" is an idāfah construction: "يوم" is the مضاف, taking neither تنوين nor أل, and "الأحد" is the مضاف إليه in the genitive — just like any other idāfah.',
  },
  {
    q: 'سأسافرُ يومَ ___ (الاثنين، مضاف إليه)\nsa-usāfiru yawma ___ (الاثنين, as the مضاف إليه) — "I will travel on Monday"',
    options: [
      'الاثنينِ\nal-Ithnayni — genitive',
      'الاثنانِ\nal-Ithnāni — nominative dual form',
      'الاثنينُ\nal-Ithnaynu — nominative-marked, incorrect here',
      'الاثنون\nal-Ithnūn — incorrect form',
    ],
    correctIndex: 0,
    a: '"يومَ" هنا ظرف منصوب مضاف، و"الاثنين" مضاف إليه مجرور، ويُجر بالكسرة الظاهرة على النون: "يومَ الاثنينِ".\n"يومَ" here is an accusative adverb and a مضاف, and "الاثنين" is its مضاف إليه in the genitive, marked by a visible kasra on the ن: "يومَ الاثنينِ" ("on Monday").',
  },
  {
    q: 'كيف نقول "اليوم هو يوم الجمعة" بأقصر صياغة صحيحة؟\nWhat is the shortest correct way to say "Today is Friday"?',
    options: [
      'اليومُ يومُ الجمعةِ\n"al-yawmu yawmu l-jumʿati" — "Today is Friday"',
      'اليومَ يومِ الجمعةِ\nWrong case endings throughout',
      'اليومُ يومَ الجمعةَ\nWrong case on the predicate and the مضاف إليه',
      'الجمعةُ يومَ اليومِ\nIncorrectly reverses subject and predicate',
    ],
    correctIndex: 0,
    a: '"اليومُ" مبتدأ مرفوع، و"يومُ الجمعةِ" خبر مرفوع وهو تركيب إضافي ("يوم" مضاف مرفوع و"الجمعة" مضاف إليه مجرور): "اليومُ يومُ الجمعةِ".\n"اليومُ" is the subject (مبتدأ) in the nominative, and "يومُ الجمعةِ" is the predicate (خبر), itself an idāfah — "يوم" is the مضاف, nominative, and "الجمعة" is the مضاف إليه, genitive: "اليومُ يومُ الجمعةِ".',
  },
  {
    q: 'أيّ من هذه الجمل بها خطأ نحوي؟\nWhich of these sentences contains a grammatical error?',
    options: [
      'قابلتُه يومَ الخميسِ\n"I met him on Thursday" — يوم correctly accusative',
      'قابلتُه يومُ الخميسِ\n"I met him on Thursday" — يوم wrongly in the nominative',
      'الاجتماعُ يومَ الثلاثاءِ\n"The meeting is on Tuesday"',
      'سأزورُك يومَ السبتِ\n"I will visit you on Saturday"',
    ],
    correctIndex: 1,
    a: '"يوم" هنا ظرف زمان منصوب يدل على وقت وقوع الفعل، فالصواب نصبه "يومَ الخميسِ" لا رفعه "يومُ الخميسِ".\n"يوم" here is an accusative adverb of time, showing when the action happened, so the correct form is the accusative "يومَ الخميسِ", not the nominative "يومُ الخميسِ".',
  },
  {
    q: 'كيف نقول "بعد ثلاثةِ أيامٍ" مطبّقين قاعدة مخالفة الجنس مع العدد ٣؟\nHow do we say "after three days", applying the gender-reversal rule with the number 3?',
    options: [
      'بعد ثلاثةِ أيامٍ\n"baʿda thalāthati ayyāmin" — "after three days" (correct)',
      'بعد ثلاثِ أيامٍ\nWrong: drops the ة, but "يوم" is masculine so the number needs it',
      'بعد ثلاثةِ يومٍ\nWrong: the counted noun should be plural (أيامٍ), not singular',
      'بعد ثلاثُ يومِ\nWrong on both the number\'s case and the counted noun\'s form',
    ],
    correctIndex: 0,
    a: '"أيام" جمع مذكر ("يوم" مذكر)، فيوافق العدد ٣ هذا الأصل بأخذ تاء التأنيث طبقاً لمخالفة الجنس: "ثلاثةُ أيامٍ"، والمعدود "أيامٍ" مجرور مضاف إليه.\n"أيام" is a masculine plural (its singular "يوم" is masculine), so the number 3 takes the تاء التأنيث, following the rule that numbers 3–10 take the OPPOSITE gender marking from the counted noun: "ثلاثةُ أيامٍ" — and the counted noun "أيامٍ" is the مضاف إليه, in the genitive.',
  },
  {
    q: 'كيف يُعرب "رمضانَ" في "صُمْنا شهرَ رمضانَ"؟\nWhat case is "رمضانَ" in the sentence "صُمْنا شهرَ رمضانَ" ("We fasted the month of Ramadan")?',
    options: [
      'مضاف إليه مجرور\nمضاف إليه, in the genitive',
      'مضاف إليه منصوب\nمضاف إليه, in the accusative',
      'مفعول به ثانٍ\nA second direct object',
      'بدل مرفوع\nA بدل, in the nominative',
    ],
    correctIndex: 0,
    a: '"رمضانَ" مضاف إليه، وحكمه الإعرابي الجر دائماً كسائر المضاف إليه، وإن كانت علامة جره هنا الفتحة نيابة عن الكسرة لأنه اسم ممنوع من الصرف (سيأتي تفصيل ذلك في درس الممنوع من الصرف).\n"رمضانَ" is a مضاف إليه, and like every مضاف إليه, its case is always genitive — even though its genitive marker here is fatḥa instead of kasra, because "رمضان" is a diptote (ممنوع من الصرف), a topic covered in more detail in its own lesson.',
  },
  {
    q: 'لماذا لا يجوز أن نقول "يوم الأحدَ" بنصب "الأحد"؟\nWhy can we not say "يوم الأحدَ" with "الأحد" in the accusative?',
    options: [
      'لأن "الأحد" مضاف إليه ويجب أن يكون مجروراً دائماً بصرف النظر عن إعراب المضاف\nBecause "الأحد" is the مضاف إليه, and a مضاف إليه must always be genitive, regardless of the case of the مضاف',
      'لأن "الأحد" ممنوع من الصرف\nBecause "الأحد" is a diptote',
      'لأن "يوم" لا يجوز إضافته\nBecause "يوم" cannot take idāfah',
      'هذا صحيح ويجوز نصبه\nThis is actually correct, and the accusative is allowed',
    ],
    correctIndex: 0,
    a: '"الأحد" مضاف إليه في هذا التركيب، والمضاف إليه مجرور دائماً بصرف النظر عن موقع المضاف الإعرابي (مرفوعاً كان أو منصوباً أو مجروراً)، فلا يجوز نصبه أو رفعه بحال.\n"الأحد" is the مضاف إليه in this construction, and a مضاف إليه is always genitive, no matter what case the مضاف itself is in (nominative, accusative, or genitive) — so it can never be put in the accusative or nominative.',
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

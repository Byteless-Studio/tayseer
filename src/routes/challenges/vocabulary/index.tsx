import { createFileRoute, Link } from '@tanstack/react-router'
import { QuizCarousel } from '#/components/QuizCarousel'
import type { StrictQuizItem } from '#/routes/challenges/-quiz-types'

export const Route = createFileRoute('/challenges/vocabulary/')({
  head: () => ({ meta: [{ title: 'Vocabulary — Roots & Patterns — Tayseer' }] }),
  component: VocabularyQuizPage,
})

function ArWord({ children }: { children: React.ReactNode }) {
  return (
    <span dir="rtl" lang="ar" style={{ fontFamily: "'Noto Naskh Arabic', serif" }}>
      {children}
    </span>
  )
}

function VocabularyQuizPage() {
  return (
    <main className="flex-1">
      <div className="border-b border-border bg-beige">
        <div className="mx-auto w-[min(1080px,calc(100%-2rem))] py-12">
          <Link
            to="/challenges"
            className="inline-block text-sm text-muted-foreground hover:text-foreground no-underline mb-4"
          >
            ← Back to Challenges
          </Link>
          <p className="text-[0.7rem] font-bold tracking-[0.12em] uppercase text-muted-foreground mb-3">
            Vocabulary Quiz
          </p>
          <h1 className="font-serif tracking-[-0.02em] text-4xl font-bold text-foreground leading-tight mb-3">
            Vocabulary — Roots &amp; Patterns
          </h1>
          <p className="text-muted-foreground text-base max-w-2xl">
            Almost every Arabic word is built from two ingredients: a three-letter{' '}
            <span className="font-medium text-foreground">root</span> (<ArWord>جذر</ArWord>) that
            carries the core meaning, and a <span className="font-medium text-foreground">pattern</span>{' '}
            or <span className="font-medium text-foreground">wazn</span> (<ArWord>وزن</ArWord>) that
            shapes it into a verb, doer, object, tool, place, or abstract idea. Learn to recognize
            the patterns and you can decode words you've never seen before — this quiz drills the
            most common verb patterns (<ArWord>أوزان الفعل</ArWord>), noun patterns, and a set of
            mixed questions across ten everyday roots.
          </p>
        </div>
      </div>

      <div className="mx-auto w-[min(1080px,calc(100%-2rem))] py-8">
        <QuizCarousel items={quizItems} />
      </div>
    </main>
  )
}

const quizItems: StrictQuizItem[] = [
  // ─── Verb patterns (أوزان الفعل) — 9 patterns × 2 questions ────────────────
  {
    q: 'الجذر ك-ت-ب على وزن فَعَلَ (الوزن الأساسي) — ما الفعل الناتج؟',
    options: ['كَتَبَ', 'كَاتَبَ', 'أَكْتَبَ', 'تَكَتَّبَ'],
    correctIndex: 0,
    a: "كَتَبَ هو الفعل المجرد على وزن فَعَلَ، الوزن الأساسي الذي يدل على وقوع الفعل مباشرة دون زيادة معنى كالمشاركة أو التعدية — يعني 'to write'.",
  },
  {
    q: "كَتَبَ (to write) is built on which verb pattern, and what does that pattern indicate?",
    options: [
      'فَاعَلَ — mutual action between two parties',
      'فَعَلَ — the basic/ground form, a plain action with no added shade of meaning',
      'أَفْعَلَ — causing someone else to do the action',
      'اِنْفَعَلَ — the action happening passively to the subject',
    ],
    correctIndex: 1,
    a: "كَتَبَ follows the ground form فَعَلَ (Form I) — three root letters with no augmentation, the simplest verb pattern that just states the raw action 'to write', with no causative, reciprocal, or reflexive shading added.",
  },
  {
    q: 'كَاتَبَ is built on the pattern فَاعَلَ instead of فَعَلَ (كَتَبَ). What extra meaning does the ا after the first root letter add?',
    options: [
      'It makes the action happen twice as fast',
      'It turns the verb into a noun',
      "It makes the action mutual — 'to correspond/write to one another'",
      'It removes the subject entirely',
    ],
    correctIndex: 2,
    a: "The وزن فَاعَلَ inserts a long ا after the first root letter to signal that the action involves two parties acting on each other — كَاتَبَ doesn't just mean 'wrote' but 'corresponded/exchanged letters with' someone, i.e. mutual/attempted action.",
  },
  {
    q: 'From the root ن-ص-ر (help/aid) on the pattern فَاعَلَ, what word results and what does it mean?',
    options: ['نَصَرَ = helped', 'أَنْصَرَ = made helped', 'اِنْتَصَرَ = was victorious', 'نَاصَرَ = supported one another (mutual)'],
    correctIndex: 3,
    a: "نَاصَرَ is ن-ص-ر on وزن فَاعَلَ, meaning 'to support/back one another' — the mutual sense of فَاعَلَ turns the plain 'help' (نَصَرَ) into a two-sided alliance of mutual support.",
  },
  {
    q: 'أَخْرَجَ is root خ-ر-ج on the pattern أَفْعَلَ. What grammatical function does the extra أ at the start add?',
    options: [
      'Causation — making someone/something perform the base action',
      'Reciprocity — doing it to each other',
      'Repetition — doing it intensely/repeatedly',
      'Passivity — having it happen to you',
    ],
    correctIndex: 0,
    a: "أَفْعَلَ prefixes a hamza to the root, turning a simple verb into a causative one. خَرَجَ means 'he went out'; أَخْرَجَ means 'he took (something/someone) out' — he caused the going-out.",
  },
  {
    q: 'Using the causative pattern أَفْعَلَ on the root د-خ-ل (to enter), what verb results and what does it mean?',
    options: [
      'دَخَلَ = entered',
      'أَدْخَلَ = caused to enter/brought in',
      'تَدَاخَلَ = intermingled',
      'اِسْتَدْخَلَ = sought to bring in',
    ],
    correctIndex: 1,
    a: "أَدْخَلَ is د-خ-ل on وزن أَفْعَلَ — the causative hamza changes 'دَخَلَ = he entered' into 'أَدْخَلَ = he brought/let in', i.e. he caused something to enter.",
  },
  {
    q: 'كَسَّرَ doubles the middle root letter of ك-س-ر (فَعَّلَ pattern) instead of the plain كَسَرَ. What does that doubling (تشديد) signal?',
    options: [
      'Mutual action between two people',
      'The action happening to the subject by itself',
      'Intensity/repetition — smashing into many pieces, not just one break',
      'A request to perform the action',
    ],
    correctIndex: 2,
    a: 'The doubled middle letter of وزن فَعَّلَ marks intensive or repeated/causative action. كَسَرَ = \'he broke [something]\', but كَسَّرَ = \'he smashed [it] to pieces\' — the intensifying تشديد multiplies the action across many parts.',
  },
  {
    q: 'عَلَّمَ is root ع-ل-م on the pattern فَعَّلَ. What does it mean, and how does that relate to عَلِمَ (he knew)?',
    options: [
      "it means 'he knew intensely'",
      "it means 'they knew mutually'",
      "it means 'he sought knowledge'",
      'عَلَّمَ = he taught (caused another to know); عَلِمَ = he knew — فَعَّلَ here is causative: making someone else acquire knowledge',
    ],
    correctIndex: 3,
    a: "فَعَّلَ on ع-ل-م gives عَلَّمَ = 'he taught', the causative counterpart of عَلِمَ = 'he knew'. Where أَفْعَلَ is the more general causative pattern, فَعَّلَ here does the same causative job with an added sense of directly instilling the knowledge in someone else.",
  },
  {
    q: 'تَعَلَّمَ adds a تَ prefix to the فَعَّلَ pattern (عَلَّمَ → تَعَلَّمَ). What does this reflexive تَفَعَّلَ pattern add to the meaning?',
    options: [
      "The subject now does the action to/for themselves — 'to teach oneself/learn'",
      'The action is now done to two people at once',
      'The verb becomes negated',
      'The action is now a one-time instant event',
    ],
    correctIndex: 0,
    a: "تَفَعَّلَ prefixes ت to the intensive/causative فَعَّلَ pattern to turn the action back onto the subject. عَلَّمَ = 'he taught (someone else)'; تَعَلَّمَ = 'he taught himself / learned' — the reflexive ت redirects the causative action inward.",
  },
  {
    q: 'What is ك-س-ر on the pattern تَفَعَّلَ, and what does it mean?',
    options: [
      'كَسَّرَ = he smashed it',
      'تَكَسَّرَ = it shattered/broke into pieces (by itself)',
      'اِنْكَسَرَ = it got broken',
      'كَاسَرَ = he broke it in return',
    ],
    correctIndex: 1,
    a: "تَكَسَّرَ is ك-س-ر on وزن تَفَعَّلَ — it takes the intensive 'smash to pieces' meaning of فَعَّلَ (كَسَّرَ) and folds it back onto the subject itself, so it means 'it shattered/broke apart (on its own, into many pieces)'.",
  },
  {
    q: 'تَقَارَبَ is root ق-ر-ب on the pattern تَفَاعَلَ. What does this pattern signal?',
    options: [
      'A causative action forced on someone',
      'A one-sided passive event',
      "A reciprocal action shared equally between two or more parties — 'to draw close to one another'",
      'An instrument used to perform the action',
    ],
    correctIndex: 2,
    a: "تَفَاعَلَ combines the mutual ا of فَاعَلَ with a reflexive ت, marking an action that multiple parties do together to each other. تَقَارَبَ = 'to draw close to one another / grow closer' — the closeness (root ق-ر-ب) is mutual and shared.",
  },
  {
    q: 'Using the reciprocal pattern تَفَاعَلَ on root د-ر-س (study), what verb results and what does it convey?',
    options: [
      'دَرَسَ = he studied',
      'دَرَّسَ = he taught',
      'اِسْتَدْرَسَ = he sought to study',
      'تَدَارَسَ = they studied together/reviewed with one another',
    ],
    correctIndex: 3,
    a: "تَدَارَسَ is د-ر-س on وزن تَفَاعَلَ — the reciprocal pattern turns solitary 'studying' (دَرَسَ) into a shared activity: 'to study/review together, quizzing one another'.",
  },
  {
    q: 'اِنْكَسَرَ is root ك-س-ر on the pattern اِنْفَعَلَ. What does the ن after the initial hamza signal?',
    options: [
      "A passive/reflexive event that happens to the subject with no stated agent — 'it got broken/broke on its own'",
      'That two people broke it together',
      'That the subject broke something else on purpose',
      'That the breaking is habitual/professional',
    ],
    correctIndex: 0,
    a: 'وزن اِنْفَعَلَ is the classic passive-reflexive pattern: the ن marks that the action befalls the subject without naming who did it. اِنْكَسَرَ = \'it got broken/it broke\' — the glass just broke, no agent is expressed, unlike the transitive كَسَرَ (he broke it).',
  },
  {
    q: 'What is ف-ت-ح on the pattern اِنْفَعَلَ, and what does it mean?',
    options: [
      'فَتَحَ = he opened it',
      'اِنْفَتَحَ = it opened (by itself/became open)',
      'فَتَّحَ = he opened it repeatedly',
      'اِفْتَتَحَ = he inaugurated it',
    ],
    correctIndex: 1,
    a: "اِنْفَتَحَ is ف-ت-ح on وزن اِنْفَعَلَ — following the passive/reflexive pattern, it means 'it opened / became open' by itself, with no agent named, as opposed to the transitive فَتَحَ 'he opened it'.",
  },
  {
    q: 'اِجْتَمَعَ is root ج-م-ع on the pattern اِفْتَعَلَ. What does this pattern typically add to the base meaning?',
    options: [
      'A causative sense forcing others to gather',
      'A negative/opposite meaning of the root',
      "A reflexive sense — the subject performs the action on/for itself, e.g. 'to gather itself/assemble'",
      'An instrument used for gathering',
    ],
    correctIndex: 2,
    a: "وزن اِفْتَعَلَ inserts a ت after the first root letter to mark a reflexive or self-involved action. جَمَعَ = 'he gathered/collected [something]'; اِجْتَمَعَ = 'they gathered/assembled [themselves]' — the group brought itself together.",
  },
  {
    q: 'What is ق-ر-ب on the pattern اِفْتَعَلَ, and what does it mean?',
    options: [
      'قَرُبَ = he was near',
      'قَرَّبَ = he brought [something] near',
      'تَقَارَبَ = they grew close to one another',
      'اِقْتَرَبَ = he drew near/approached (himself moving closer)',
    ],
    correctIndex: 3,
    a: "اِقْتَرَبَ is ق-ر-ب on وزن اِفْتَعَلَ — the reflexive ت makes the subject actively bring itself closer: 'he drew near / approached', distinct from the plain adjectival قَرُبَ 'he was near'.",
  },
  {
    q: 'اِسْتَخْرَجَ is root خ-ر-ج on the pattern اِسْتَفْعَلَ. What does the اِسْتَ prefix contribute?',
    options: [
      "'To seek/request/consider' the base action — here, to actively work to bring something out — 'to extract'",
      'A simple passive meaning',
      'A mutual/reciprocal meaning',
      'An instrument-noun meaning',
    ],
    correctIndex: 0,
    a: "وزن اِسْتَفْعَلَ prefixes اِسْتَ, which regularly means 'to seek/ask for/deliberately bring about' the root's action. Building on the causative أَخْرَجَ (to take out), اِسْتَخْرَجَ = 'to extract' — to deliberately seek to bring something out.",
  },
  {
    q: 'What is ف-ت-ح on the pattern اِسْتَفْعَلَ, and what does it typically mean?',
    options: [
      'فَتَحَ = he opened it',
      'اِسْتَفْتَحَ = to seek an opening/ask for victory (e.g. to open a recitation, or pray for victory)',
      'فَتَّحَ = he opened it repeatedly',
      'اِنْفَتَحَ = it opened by itself',
    ],
    correctIndex: 1,
    a: "اِسْتَفْتَحَ is ف-ت-ح on وزن اِسْتَفْعَلَ — following the 'seek/request X' sense of اِسْتَفْعَلَ, it means 'to seek an opening' or, classically, 'to ask God for victory/judgment', i.e. actively requesting the root's action.",
  },

  // ─── Noun patterns — 6 categories × 2 (masdar category has 3) ─────────────
  {
    q: 'كَاتِب is on the pattern فَاعِل. What role does this pattern mark?',
    options: [
      'The passive participle — the thing being written',
      "The verbal noun — 'the writing'",
      "The active participle — the one doing the action, 'writer'",
      'The instrument used to write',
    ],
    correctIndex: 2,
    a: "فَاعِل is the pattern of the active participle (اسم الفاعل) — 'the one who does X'. كَاتِب, from ك-ت-ب, means 'writer', the doer of the writing.",
  },
  {
    q: 'What is ن-ص-ر on the pattern فَاعِل, and what does it mean?',
    options: [
      'مَنْصُور = one who is helped',
      'نَصْر = help/victory (noun)',
      'مِنْصَار = an instrument for helping',
      'نَاصِر = helper/supporter (one who helps)',
    ],
    correctIndex: 3,
    a: "نَاصِر is ن-ص-ر on وزن فَاعِل, the active-participle pattern — 'helper, one who supports/aids', the doer of the نَصْر (help/victory).",
  },
  {
    q: 'مَكْتُوب is on the pattern مَفْعُول. What role does this pattern mark, as opposed to فَاعِل?',
    options: [
      "The passive participle — the thing that the action was done to, 'written/a piece of writing'",
      'The active participle — the one doing the writing',
      'The place where writing happens',
      'An instrument for writing',
    ],
    correctIndex: 0,
    a: "مَفْعُول is the passive-participle pattern (اسم المفعول) — 'the thing X was done to', opposite of the doer-pattern فَاعِل. مَكْتُوب, from ك-ت-ب, means 'written / a piece of writing' — the object the writing was done to.",
  },
  {
    q: 'What is ن-ص-ر on the pattern مَفْعُول, and what does it mean?',
    options: [
      'نَاصِر = a helper',
      'مَنْصُور = one who has been helped/made victorious',
      'نَصَرَ = he helped',
      'نُصْرَة = the act of helping',
    ],
    correctIndex: 1,
    a: "مَنْصُور is ن-ص-ر on وزن مَفْعُول, the passive-participle pattern — 'one who has been helped/granted victory', i.e. the recipient of the نَصْر, opposite of the doer-noun نَاصِر.",
  },
  {
    q: 'نَجَّار (carpenter) is built on the pattern فَعَّال. What does this pattern usually convey?',
    options: [
      'A one-time doer of the action',
      'The tool used for the trade',
      'Intensiveness or a professional habitual doer of the action — someone whose trade/habit is X',
      "The passive recipient of the trade's work",
    ],
    correctIndex: 2,
    a: "فَعَّال, with its doubled middle letter, is the intensive/professional pattern (صيغة مبالغة) — it marks someone who does the action habitually or as a trade, not just once. نَجَّار = 'carpenter', one whose profession is woodworking.",
  },
  {
    q: "الفَتَّاح, from ف-ت-ح, is on the pattern فَعَّال. Given that فَتَحَ means 'to open/to judge/decide', what does this professional/intensive pattern suggest about الفَتَّاح?",
    options: [
      'One who is occasionally opened',
      'An instrument for opening doors',
      'The place where opening happens',
      'One who opens/judges constantly and thoroughly — the ultimate, habitual Opener/Judge',
    ],
    correctIndex: 3,
    a: "As one of Allah's names, الفَتَّاح uses the intensive فَعَّال pattern to convey a doer of ف-ت-ح (open/judge) on a constant, unlimited, all-encompassing scale — 'the ultimate/perpetual Opener and Judge', not a one-off action.",
  },
  {
    q: 'مِفْتَاح (key) is built on the instrument-noun pattern مِفْعَال, from root ف-ت-ح. What does this pattern mark?',
    options: [
      "The tool/instrument used to perform the root's action",
      'The person who performs the action',
      'The place where the action occurs',
      'The abstract concept of the action',
    ],
    correctIndex: 0,
    a: "مِفْعَال (along with مِفْعَل / مِفْعَلة) is the instrument-noun pattern (اسم الآلة) — it names the tool used to do the root's action. مِفْتَاح, from ف-ت-ح (to open), is 'the tool used to open' — a key.",
  },
  {
    q: 'مِنْشَار (saw), from root ن-ش-ر (to saw/spread), follows the same مِفْعَال instrument pattern as مِفْتَاح. What does it name?',
    options: [
      'The person who saws',
      'The tool used to perform the sawing action',
      'The place where sawing is done',
      "The verbal noun 'sawing'",
    ],
    correctIndex: 1,
    a: 'Like مِفْتَاح, مِنْشَار is on وزن مِفْعَال — the tool used to carry out the root\'s action. From ن-ش-ر, it names the instrument for sawing: a saw.',
  },
  {
    q: 'مَكْتَب (office) is built on the place-noun pattern مَفْعَل, from root ك-ت-ب. What does this pattern mark?',
    options: [
      'The tool used for the action',
      'The doer of the action',
      "The place (or time) where the root's action typically occurs",
      'The passive object of the action',
    ],
    correctIndex: 2,
    a: "مَفْعَل (and its variant مَفْعِل) is the place/time-noun pattern (اسم المكان/الزمان) — it names where or when the root's action happens. مَكْتَب, from ك-ت-ب, is 'the place of writing' — an office/desk.",
  },
  {
    q: 'مَدْرَسَة (school), from root د-ر-س, follows the same place-noun family as مَكْتَب (with a ة ending). What does it name?',
    options: [
      'The person who studies',
      'The instrument used to study',
      'The abstract idea of studying',
      "The place where the root's action (studying) happens — 'the place of study'",
    ],
    correctIndex: 3,
    a: "مَدْرَسَة is a feminine-marked place noun (مَفْعَلة) from د-ر-س (to study) — 'the place of study', a school, following the same place-noun logic as مَكْتَب.",
  },
  {
    q: 'كِتَابَة, on the مصدر (verbal-noun) pattern فِعَالة, is derived from root ك-ت-ب. What does it mean and what does a مصدر represent grammatically?',
    options: [
      "'Writing' — the abstract verbal noun naming the action itself, without a subject or tense",
      "'Writer' — the one who writes",
      "'Written' — the thing that was written",
      "'Office' — the place of writing",
    ],
    correctIndex: 0,
    a: 'كِتَابَة is the مصدر (verbal noun) of ك-ت-ب on the common pattern فِعَالة — it names the action itself in the abstract, \'writing\', with no subject, object, or tense attached, unlike the participles كَاتِب/مَكْتُوب.',
  },
  {
    q: 'دُخُول, on the مصدر pattern فُعُول, comes from root د-خ-ل. What does it mean?',
    options: [
      'دَاخِل = one who enters',
      'دُخُول = entering (the abstract act of entering)',
      'مَدْخَل = the entrance (place)',
      'أَدْخَلَ = he brought in',
    ],
    correctIndex: 1,
    a: 'دُخُول is the مصدر of د-خ-ل على وزن فُعُول, common for verbs of motion/state — \'entering\', the abstract act itself, as opposed to the doer دَاخِل or the place-noun مَدْخَل (entrance).',
  },
  {
    q: 'تَعْلِيم, on the مصدر pattern تَفْعِيل, is the verbal noun of عَلَّمَ (Form II). What does it mean?',
    options: [
      'عَالِم = one who knows/scholar',
      'مُعَلِّم = teacher (the doer)',
      'تَعْلِيم = teaching (the abstract act of teaching)',
      'تَعَلُّم = learning (reflexive act)',
    ],
    correctIndex: 2,
    a: 'تَفْعِيل is the standard مصدر pattern for فَعَّلَ (Form II) verbs. تَعْلِيم, from عَلَّمَ, means \'teaching\' — the abstract act of causing someone to know — distinct from the doer-noun مُعَلِّم (teacher) or the reflexive مصدر تَعَلُّم (learning).',
  },

  // ─── Mixed questions across the 10 roots ───────────────────────────────────
  {
    q: 'What three-letter root underlies the word مَكْتَبَة (library/bookshop)?',
    options: ['م-ك-ت', 'ك-ت-ة', 'ب-ت-ك', 'ك-ت-ب'],
    correctIndex: 3,
    a: 'مَكْتَبَة strips down to the root ك-ت-ب (write) — the other letter combinations are just reshuffled letters, not real roots. مَكْتَبَة, on the place-noun pattern مَفْعَلة, means \'place of books/writing\' — a library.',
  },
  {
    q: 'مُدَرِّس (teacher) comes from which root, and what pattern/role does the pattern مُفَعِّل mark here?',
    options: [
      "Root د-ر-س; مُفَعِّل is the active-participle pattern of Form II فَعَّلَ — 'one who causes teaching', i.e. teacher",
      'Root ر-س-د; a passive participle',
      'Root د-س-ر; an instrument noun',
      'Root س-د-ر; a place noun',
    ],
    correctIndex: 0,
    a: "مُدَرِّس comes from root د-ر-س (to study). Its pattern مُفَعِّل is the active-participle form of the Form II verb دَرَّسَ (to teach) — 'one who does the teaching', a teacher.",
  },
  {
    q: 'عَالِم (scholar/one who knows) is built on which root and pattern, and what does it mean?',
    options: [
      'root م-ل-ع, pattern فَاعِل',
      "Root ع-ل-م, pattern فَاعِل, active participle = 'knower/scholar'",
      "root ع-ل-م, pattern مَفْعُول, passive = 'known thing'",
      'root ل-ع-م, pattern فَعِيل',
    ],
    correctIndex: 1,
    a: "عَالِم is root ع-ل-م (to know) on the active-participle pattern فَاعِل — 'the one who knows', a scholar. Compare مَعْلُوم (root ع-ل-م, pattern مَفْعُول) = 'known/a known fact', the passive counterpart.",
  },
  {
    q: 'مَخْرَج, from root خ-ر-ج, is on the place-noun pattern مَفْعَل. What does it mean?',
    options: [
      'خَارِج = outside (active participle)',
      'إِخْرَاج = producing/directing (masdar of Form IV)',
      'مَخْرَج = exit/place of going out',
      'مُخْرِج = director/producer (active participle of Form IV)',
    ],
    correctIndex: 2,
    a: 'مَخْرَج is خ-ر-ج on the place-noun pattern مَفْعَل — literally \'the place of going out\', i.e. an exit, following the same logic as مَكْتَب (place of writing).',
  },
  {
    q: 'What root and general meaning does مُدَاخَلَة (intervention/interjecting in a discussion) come from?',
    options: [
      'Root خ-ل-د; masdar of eternity',
      'Root د-ل-خ; an instrument noun',
      'Root خ-د-ل; a place noun',
      "Root د-خ-ل (to enter); on the مصدر pattern of Form III مُفَاعَلة, it signals a mutual 'entering into' a conversation — intervening",
    ],
    correctIndex: 3,
    a: "مُدَاخَلَة comes from root د-خ-ل (to enter). It's the مصدر of the Form III pattern فَاعَلَ (دَاخَلَ), which usually carries a mutual/interactive sense — here, 'entering into' a discussion with others, i.e. an intervention/interjection.",
  },
  {
    q: "Compare فَاتِح and مَفْتُوح, both from root ف-ت-ح. Which is the active participle ('opener/conqueror') and which is the passive participle ('opened')?",
    options: [
      'فَاتِح = active (opener), مَفْتُوح = passive (opened)',
      'فَاتِح = passive, مَفْتُوح = active',
      'Both are active',
      'Both are passive',
    ],
    correctIndex: 0,
    a: "فَاتِح follows the active-participle pattern فَاعِل — 'one who opens/conquers'. مَفْتُوح follows the passive-participle pattern مَفْعُول — 'that which has been opened'. Same root ف-ت-ح, opposite grammatical roles.",
  },
  {
    q: 'اِنْكِسَار (the masdar "breaking/fracture") and اِنْكَسَرَ (the verb "it broke") share root ك-س-ر and the وزن اِنْفَعَلَ family. What does the shared ن across both forms signal?',
    options: [
      'A causative sense — someone forcing the breaking',
      'A passive/reflexive sense — something happening to the subject without a stated external agent',
      'A reciprocal sense — two things breaking each other',
      'An instrument sense — the tool that broke it',
    ],
    correctIndex: 1,
    a: 'The ن of وزن اِنْفَعَلَ (and its مصدر اِنْفِعَال) consistently marks a passive/reflexive event — something that happens to the subject with no agent named. اِنْكَسَرَ/اِنْكِسَار both describe the glass breaking on its own, not someone breaking it.',
  },
  {
    q: "جَمَاعَة (group/congregation) and مَجْمُوعَة (a collection/set) both come from root ج-م-ع but use different patterns. What's the core difference in what each names?",
    options: [
      'They are identical in meaning',
      'جَمَاعَة is the verb; مَجْمُوعَة is the root',
      'جَمَاعَة names a body of people who have gathered (collective noun); مَجْمُوعَة (pattern مَفْعُولة) names a passive "thing that has been collected"',
      'مَجْمُوعَة names the place of gathering',
    ],
    correctIndex: 2,
    a: 'Both trace to ج-م-ع (to gather), but جَمَاعَة is a collective noun for a group of people who have come together, while مَجْمُوعَة sits on the passive-participle pattern مَفْعُولة — \'a set/collection that has been gathered\', more often used for items than people.',
  },
  {
    q: 'اِنْتِصَار (victory, masdar) comes from root ن-ص-ر on the وزن اِفْتِعَال (masdar of اِفْتَعَلَ). Given that اِفْتَعَلَ marks a reflexive sense, what does اِنْتِصَار literally convey?',
    options: [
      'Helping someone else to win',
      'Being helped by another',
      'The place where a victory happened',
      'Winning victory for oneself — securing one\'s own triumph, distinct from simply نَصَرَ (helping someone else)',
    ],
    correctIndex: 3,
    a: 'اِنْتِصَار sits on اِفْتِعَال, the مصدر of اِفْتَعَلَ, which (like اِجْتَمَعَ) carries a reflexive sense. From ن-ص-ر (help/support), اِنْتِصَار is \'winning victory for oneself\' — securing one\'s own triumph — as opposed to plain نَصْر, \'helping/supporting\' someone else.',
  },
  {
    q: 'قَرِيب (near/relative), on the pattern فَعِيل, comes from root ق-ر-ب. What kind of adjective/noun does the فَعِيل pattern typically form?',
    options: [
      "A simple descriptive adjective expressing a quality or state — 'near, close' (and by extension, 'a close relative')",
      'An instrument noun',
      'A place noun',
      'A passive participle only used for people who were physically moved closer',
    ],
    correctIndex: 0,
    a: "فَعِيل is a common adjectival pattern (صفة مشبهة) describing an inherent quality or state. From ق-ر-ب (nearness), قَرِيب means 'near/close', and by extension 'a close relative' — someone near to you by kinship.",
  },
]

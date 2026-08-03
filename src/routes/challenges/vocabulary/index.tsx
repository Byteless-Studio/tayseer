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
    q: 'الجذر ك-ت-ب على وزن فَعَلَ (الوزن الأساسي) — ما الفعل الناتج؟\nThe root ك-ت-ب on the pattern فَعَلَ (the ground form) — what verb results?',
    options: [
      'كَتَبَ\nkataba — "he wrote" (Form I, the ground pattern)',
      'كَاتَبَ\nkātaba — "he corresponded with" (Form III)',
      'أَكْتَبَ\naktaba — "he dictated/made [someone] write" (Form IV)',
      'تَكَتَّبَ\ntakattaba — a reflexive Form V shape, not the ground form',
    ],
    correctIndex: 0,
    a: 'كَتَبَ هو الفعل المجرد على وزن فَعَلَ، الوزن الأساسي الذي يدل على وقوع الفعل مباشرة دون زيادة معنى كالمشاركة أو التعدية.\nكَتَبَ is the plain verb on the ground pattern فَعَلَ, the basic pattern that shows the action happening directly, with no added shade of meaning like reciprocity or causation — it means "to write".',
  },
  {
    q: 'كَتَبَ مبني على أي وزن من أوزان الفعل، وما الذي يدل عليه هذا الوزن؟\nكَتَبَ (to write) is built on which verb pattern, and what does that pattern indicate?',
    options: [
      'فَاعَلَ\nMutual action between two parties',
      'فَعَلَ\nThe basic/ground form — a plain action with no added shade of meaning',
      'أَفْعَلَ\nCausing someone else to do the action',
      'اِنْفَعَلَ\nThe action happening passively to the subject',
    ],
    correctIndex: 1,
    a: 'كَتَبَ تتبع الوزن الأساسي فَعَلَ (الوزن الأول) — ثلاثة أحرف جذرية دون أي زيادة، وهو أبسط وزن يعبر عن الفعل الخام دون أي دلالة سببية أو تشاركية أو انعكاسية.\nكَتَبَ follows the ground form فَعَلَ (Form I) — three root letters with no augmentation, the simplest verb pattern that just states the raw action "to write", with no causative, reciprocal, or reflexive shading added.',
  },
  {
    q: 'كَاتَبَ مبنية على وزن فَاعَلَ بدلاً من فَعَلَ (كَتَبَ). ما المعنى الإضافي الذي يضيفه حرف الألف بعد الحرف الجذري الأول؟\nكَاتَبَ is built on the pattern فَاعَلَ instead of فَعَلَ (كَتَبَ). What extra meaning does the ا after the first root letter add?',
    options: [
      'يجعل الفعل يقع بضعف السرعة\nIt makes the action happen twice as fast',
      'يحوّل الفعل إلى اسم\nIt turns the verb into a noun',
      'يجعل الفعل يفيد المشاركة والتبادل\nIt makes the action mutual — "to correspond/write to one another"',
      'يحذف الفاعل تماماً\nIt removes the subject entirely',
    ],
    correctIndex: 2,
    a: 'وزن فَاعَلَ يُدخل ألفاً طويلة بعد الحرف الجذري الأول ليدل على أن الفعل يقع بين طرفين يتبادلان الفعل — فكَاتَبَ لا تعني مجرد "كتب" بل "راسل/تبادل الكتابة مع" شخص آخر، أي فعل تشاركي.\nThe وزن فَاعَلَ inserts a long ا after the first root letter to signal that the action involves two parties acting on each other — كَاتَبَ doesn\'t just mean "wrote" but "corresponded/exchanged letters with" someone, i.e. mutual/attempted action.',
  },
  {
    q: 'من الجذر ن-ص-ر (المساعدة) على وزن فَاعَلَ، ما الكلمة الناتجة وما معناها؟\nFrom the root ن-ص-ر (help/aid) on the pattern فَاعَلَ, what word results and what does it mean?',
    options: [
      'نَصَرَ\nnaṣara — "he helped"',
      'أَنْصَرَ\nanṣara — not a standard form here',
      'اِنْتَصَرَ\nintaṣara — "he was victorious"',
      'نَاصَرَ\nnāṣara — "he supported/backed [someone], mutual support" — correct, on وزن فَاعَلَ',
    ],
    correctIndex: 3,
    a: 'نَاصَرَ هي ن-ص-ر على وزن فَاعَلَ، بمعنى "يساند/يدعم أحدهما الآخر" — فمعنى المشاركة في وزن فَاعَلَ يحوّل المساعدة البسيطة (نَصَرَ) إلى تحالف متبادل من الدعم.\nنَاصَرَ is ن-ص-ر on وزن فَاعَلَ, meaning "to support/back one another" — the mutual sense of فَاعَلَ turns the plain "help" (نَصَرَ) into a two-sided alliance of mutual support.',
  },
  {
    q: 'أَخْرَجَ هي جذر خ-ر-ج على وزن أَفْعَلَ. ما الوظيفة النحوية التي تضيفها الهمزة الزائدة في البداية؟\nأَخْرَجَ is root خ-ر-ج on the pattern أَفْعَلَ. What grammatical function does the extra أ at the start add?',
    options: [
      'التعدية/السببية — جعل شخص أو شيء آخر يقوم بالفعل الأساسي\nCausation — making someone/something perform the base action',
      'المشاركة — فعل الأمر تجاه بعضهم البعض\nReciprocity — doing it to each other',
      'التكرار — فعل الأمر بشدة أو تكراراً\nRepetition — doing it intensely/repeatedly',
      'المطاوعة/التأثر — وقوع الفعل عليك\nPassivity — having it happen to you',
    ],
    correctIndex: 0,
    a: 'وزن أَفْعَلَ يضيف همزة إلى بداية الجذر، فيحوّل الفعل البسيط إلى فعل سببي (تعدية). خَرَجَ تعني "خرج هو"؛ أَخْرَجَ تعني "أخرج (شيئاً أو شخصاً)" — أي تسبب في خروجه.\nأَفْعَلَ prefixes a hamza to the root, turning a simple verb into a causative one. خَرَجَ means "he went out"; أَخْرَجَ means "he took (something/someone) out" — he caused the going-out.',
  },
  {
    q: 'باستخدام الوزن السببي أَفْعَلَ على الجذر د-خ-ل (يدخل)، ما الفعل الناتج وما معناه؟\nUsing the causative pattern أَفْعَلَ on the root د-خ-ل (to enter), what verb results and what does it mean?',
    options: [
      'دَخَلَ\ndakhala — "he entered"',
      'أَدْخَلَ\nadkhala — "he caused to enter/brought in" — correct, on وزن أَفْعَلَ',
      'تَدَاخَلَ\ntadākhala — "it intermingled"',
      'اِسْتَدْخَلَ\nistadkhala — "he sought to bring in"',
    ],
    correctIndex: 1,
    a: 'أَدْخَلَ هي د-خ-ل على وزن أَفْعَلَ — الهمزة السببية تحوّل "دَخَلَ = دخل هو" إلى "أَدْخَلَ = أدخل/أحضر إلى الداخل"، أي تسبب في دخول شيء ما.\nأَدْخَلَ is د-خ-ل on وزن أَفْعَلَ — the causative hamza changes "دَخَلَ = he entered" into "أَدْخَلَ = he brought/let in", i.e. he caused something to enter.',
  },
  {
    q: 'كَسَّرَ تُضعِّف الحرف الجذري الأوسط من ك-س-ر (وزن فَعَّلَ) بدلاً من كَسَرَ البسيطة. ما الذي يدل عليه هذا التضعيف (التشديد)؟\nكَسَّرَ doubles the middle root letter of ك-س-ر (فَعَّلَ pattern) instead of the plain كَسَرَ. What does that doubling (تشديد) signal?',
    options: [
      'فعل تشاركي بين شخصين\nMutual action between two people',
      'وقوع الفعل على الفاعل نفسه من تلقاء ذاته\nThe action happening to the subject by itself',
      'الشدة/التكرار — التحطيم إلى قطع كثيرة لا كسرة واحدة\nIntensity/repetition — smashing into many pieces, not just one break',
      'طلب القيام بالفعل\nA request to perform the action',
    ],
    correctIndex: 2,
    a: 'تضعيف الحرف الأوسط في وزن فَعَّلَ يدل على الشدة أو التكرار أو السببية. كَسَرَ = "كسر هو [شيئاً]"، لكن كَسَّرَ = "حطّم [الشيء] إلى قطع" — فالتشديد المكثف يضاعف الفعل عبر أجزاء كثيرة.\nThe doubled middle letter of وزن فَعَّلَ marks intensive or repeated/causative action. كَسَرَ = "he broke [something]", but كَسَّرَ = "he smashed [it] to pieces" — the intensifying تشديد multiplies the action across many parts.',
  },
  {
    q: 'عَلَّمَ هي جذر ع-ل-م على وزن فَعَّلَ. ما معناها، وما علاقتها بـ عَلِمَ (عرف)؟\nعَلَّمَ is root ع-ل-م on the pattern فَعَّلَ. What does it mean, and how does that relate to عَلِمَ (he knew)?',
    options: [
      'تعني "عرف بشدة"\nit means "he knew intensely"',
      'تعني "عرفوا معاً"\nit means "they knew mutually"',
      'تعني "سعى لطلب العلم"\nit means "he sought knowledge"',
      'عَلَّمَ = علّم (تسبب في أن يعرف شخص آخر)؛ عَلِمَ = عرف — فوزن فَعَّلَ هنا سببي: يجعل شخصاً آخر يكتسب المعرفة\nعَلَّمَ = he taught (caused another to know); عَلِمَ = he knew — فَعَّلَ here is causative: making someone else acquire knowledge',
    ],
    correctIndex: 3,
    a: 'وزن فَعَّلَ على ع-ل-م يعطي عَلَّمَ = "علّم"، وهو المقابل السببي لـ عَلِمَ = "عرف". وبينما أَفْعَلَ هو الوزن السببي الأعم، فإن فَعَّلَ هنا يؤدي الوظيفة السببية نفسها مع دلالة إضافية على غرس المعرفة مباشرة في شخص آخر.\nفَعَّلَ on ع-ل-م gives عَلَّمَ = "he taught", the causative counterpart of عَلِمَ = "he knew". Where أَفْعَلَ is the more general causative pattern, فَعَّلَ here does the same causative job with an added sense of directly instilling the knowledge in someone else.',
  },
  {
    q: 'تَعَلَّمَ تضيف تاءً في البداية إلى وزن فَعَّلَ (عَلَّمَ ← تَعَلَّمَ). ما الذي يضيفه وزن تَفَعَّلَ الانعكاسي هذا إلى المعنى؟\nتَعَلَّمَ adds a تَ prefix to the فَعَّلَ pattern (عَلَّمَ → تَعَلَّمَ). What does this reflexive تَفَعَّلَ pattern add to the meaning?',
    options: [
      'يقوم الفاعل الآن بالفعل على نفسه/لنفسه — "يعلّم نفسه/يتعلّم"\nThe subject now does the action to/for themselves — "to teach oneself/learn"',
      'يقع الفعل الآن على شخصين في آن واحد\nThe action is now done to two people at once',
      'يصبح الفعل منفياً\nThe verb becomes negated',
      'يصبح الفعل حدثاً لحظياً واحداً\nThe action is now a one-time instant event',
    ],
    correctIndex: 0,
    a: 'وزن تَفَعَّلَ يضيف تاءً إلى وزن فَعَّلَ التكثيفي/السببي ليعيد توجيه الفعل نحو الفاعل نفسه. عَلَّمَ = "علّم (شخصاً آخر)"؛ تَعَلَّمَ = "علّم نفسه/تعلّم" — فالتاء الانعكاسية تعيد توجيه الفعل السببي إلى الداخل.\nتَفَعَّلَ prefixes ت to the intensive/causative فَعَّلَ pattern to turn the action back onto the subject. عَلَّمَ = "he taught (someone else)"; تَعَلَّمَ = "he taught himself / learned" — the reflexive ت redirects the causative action inward.',
  },
  {
    q: 'ما هي ك-س-ر على وزن تَفَعَّلَ، وما معناها؟\nWhat is ك-س-ر on the pattern تَفَعَّلَ, and what does it mean?',
    options: [
      'كَسَّرَ\nkassara — "he smashed it" (Form II, intensive)',
      'تَكَسَّرَ\ntakassara — "it shattered/broke into pieces (by itself)" — correct, on وزن تَفَعَّلَ',
      'اِنْكَسَرَ\ninkasara — "it got broken" (Form VII, passive/reflexive)',
      'كَاسَرَ\nkāsara — not a standard form here',
    ],
    correctIndex: 1,
    a: 'تَكَسَّرَ هي ك-س-ر على وزن تَفَعَّلَ — تأخذ المعنى التكثيفي "حطّم إلى قطع" من وزن فَعَّلَ (كَسَّرَ) وتعيد توجيهه نحو الفاعل نفسه، فتصبح "تحطّم/تكسّر (من تلقاء نفسه، إلى قطع كثيرة)".\nتَكَسَّرَ is ك-س-ر on وزن تَفَعَّلَ — it takes the intensive "smash to pieces" meaning of فَعَّلَ (كَسَّرَ) and folds it back onto the subject itself, so it means "it shattered/broke apart (on its own, into many pieces)".',
  },
  {
    q: 'تَقَارَبَ هي جذر ق-ر-ب على وزن تَفَاعَلَ. بماذا يدل هذا الوزن؟\nتَقَارَبَ is root ق-ر-ب on the pattern تَفَاعَلَ. What does this pattern signal?',
    options: [
      'فعل سببي مفروض على أحد\nA causative action forced on someone',
      'حدث سلبي (انفعالي) من طرف واحد\nA one-sided passive event',
      'فعل تبادلي يشترك فيه طرفان أو أكثر بالتساوي — "يقترب أحدهما من الآخر"\nA reciprocal action shared equally between two or more parties — "to draw close to one another"',
      'أداة تُستخدم لأداء الفعل\nAn instrument used to perform the action',
    ],
    correctIndex: 2,
    a: 'وزن تَفَاعَلَ يجمع بين ألف المشاركة في فَاعَلَ وتاء الانعكاس، فيدل على فعل يقوم به عدة أطراف تجاه بعضهم البعض. تَقَارَبَ = "يقترب أحدهما من الآخر/يزداد التقارب" — فالقرب (الجذر ق-ر-ب) هنا متبادل ومشترك.\nتَفَاعَلَ combines the mutual ا of فَاعَلَ with a reflexive ت, marking an action that multiple parties do together to each other. تَقَارَبَ = "to draw close to one another / grow closer" — the closeness (root ق-ر-ب) is mutual and shared.',
  },
  {
    q: 'باستخدام الوزن التبادلي تَفَاعَلَ على الجذر د-ر-س (يدرس)، ما الفعل الناتج وما الذي يوحي به؟\nUsing the reciprocal pattern تَفَاعَلَ on root د-ر-س (study), what verb results and what does it convey?',
    options: [
      'دَرَسَ\ndarasa — "he studied"',
      'دَرَّسَ\ndarrasa — "he taught"',
      'اِسْتَدْرَسَ\nistadrasa — not a standard form here',
      'تَدَارَسَ\ntadārasa — "they studied together/reviewed with one another" — correct, on وزن تَفَاعَلَ',
    ],
    correctIndex: 3,
    a: 'تَدَارَسَ هي د-ر-س على وزن تَفَاعَلَ — الوزن التبادلي يحوّل الدراسة الفردية (دَرَسَ) إلى نشاط مشترك: "يدرسون/يراجعون معاً، يسائل بعضهم بعضاً".\nتَدَارَسَ is د-ر-س on وزن تَفَاعَلَ — the reciprocal pattern turns solitary "studying" (دَرَسَ) into a shared activity: "to study/review together, quizzing one another".',
  },
  {
    q: 'اِنْكَسَرَ هي جذر ك-س-ر على وزن اِنْفَعَلَ. بماذا تدل النون بعد الهمزة الأولى؟\nاِنْكَسَرَ is root ك-س-ر on the pattern اِنْفَعَلَ. What does the ن after the initial hamza signal?',
    options: [
      'حدث سلبي/انعكاسي يقع على الفاعل دون ذكر فاعل حقيقي — "انكسر من تلقاء نفسه"\nA passive/reflexive event that happens to the subject with no stated agent — "it got broken/broke on its own"',
      'أن شخصين كسراه معاً\nThat two people broke it together',
      'أن الفاعل كسر شيئاً آخر عمداً\nThat the subject broke something else on purpose',
      'أن الكسر عادة أو حرفة\nThat the breaking is habitual/professional',
    ],
    correctIndex: 0,
    a: 'وزن اِنْفَعَلَ هو الوزن الانعكاسي/السلبي الكلاسيكي: النون تدل على وقوع الفعل على الفاعل دون ذكر من قام به. اِنْكَسَرَ = "انكسر/تكسّر" — فالزجاج انكسر فحسب، دون ذكر فاعل، على عكس الفعل المتعدي كَسَرَ (كسره هو).\nوزن اِنْفَعَلَ is the classic passive-reflexive pattern: the ن marks that the action befalls the subject without naming who did it. اِنْكَسَرَ = "it got broken/it broke" — the glass just broke, no agent is expressed, unlike the transitive كَسَرَ (he broke it).',
  },
  {
    q: 'ما هي ف-ت-ح على وزن اِنْفَعَلَ، وما معناها؟\nWhat is ف-ت-ح on the pattern اِنْفَعَلَ, and what does it mean?',
    options: [
      'فَتَحَ\nfataḥa — "he opened it"',
      'اِنْفَتَحَ\ninfataḥa — "it opened (by itself/became open)" — correct, on وزن اِنْفَعَلَ',
      'فَتَّحَ\nfattaḥa — "he opened it repeatedly"',
      'اِفْتَتَحَ\niftataḥa — "he inaugurated it"',
    ],
    correctIndex: 1,
    a: 'اِنْفَتَحَ هي ف-ت-ح على وزن اِنْفَعَلَ — باتباع الوزن الانعكاسي/السلبي، تعني "انفتح/أصبح مفتوحاً" من تلقاء نفسه، دون ذكر فاعل، على عكس الفعل المتعدي فَتَحَ "فتحه هو".\nاِنْفَتَحَ is ف-ت-ح on وزن اِنْفَعَلَ — following the passive/reflexive pattern, it means "it opened / became open" by itself, with no agent named, as opposed to the transitive فَتَحَ "he opened it".',
  },
  {
    q: 'اِجْتَمَعَ هي جذر ج-م-ع على وزن اِفْتَعَلَ. ما الذي يضيفه هذا الوزن عادة إلى المعنى الأساسي؟\nاِجْتَمَعَ is root ج-م-ع on the pattern اِفْتَعَلَ. What does this pattern typically add to the base meaning?',
    options: [
      'معنى سببي يفرض على الآخرين التجمع\nA causative sense forcing others to gather',
      'معنى النفي أو عكس الجذر\nA negative/opposite meaning of the root',
      'معنى انعكاسي — يؤدي الفاعل الفعل على نفسه/لنفسه، مثل "يجتمع/يتجمّع"\nA reflexive sense — the subject performs the action on/for itself, e.g. "to gather itself/assemble"',
      'أداة تُستخدم للتجميع\nAn instrument used for gathering',
    ],
    correctIndex: 2,
    a: 'وزن اِفْتَعَلَ يُدخل تاءً بعد الحرف الجذري الأول ليدل على فعل انعكاسي يخص الفاعل نفسه. جَمَعَ = "جمع (شيئاً)"؛ اِجْتَمَعَ = "اجتمعوا/تجمّعوا (بأنفسهم)" — فالمجموعة جمعت نفسها.\nوزن اِفْتَعَلَ inserts a ت after the first root letter to mark a reflexive or self-involved action. جَمَعَ = "he gathered/collected [something]"; اِجْتَمَعَ = "they gathered/assembled [themselves]" — the group brought itself together.',
  },
  {
    q: 'ما هي ق-ر-ب على وزن اِفْتَعَلَ، وما معناها؟\nWhat is ق-ر-ب on the pattern اِفْتَعَلَ, and what does it mean?',
    options: [
      'قَرُبَ\nqaruba — "he was near"',
      'قَرَّبَ\nqarraba — "he brought [something] near"',
      'تَقَارَبَ\ntaqāraba — "they grew close to one another"',
      'اِقْتَرَبَ\niqtaraba — "he drew near/approached (himself moving closer)" — correct, on وزن اِفْتَعَلَ',
    ],
    correctIndex: 3,
    a: 'اِقْتَرَبَ هي ق-ر-ب على وزن اِفْتَعَلَ — التاء الانعكاسية تجعل الفاعل يقرّب نفسه بفاعلية: "اقترب/دنا"، بخلاف الفعل الوصفي البسيط قَرُبَ "كان قريباً".\nاِقْتَرَبَ is ق-ر-ب on وزن اِفْتَعَلَ — the reflexive ت makes the subject actively bring itself closer: "he drew near / approached", distinct from the plain adjectival قَرُبَ "he was near".',
  },
  {
    q: 'اِسْتَخْرَجَ هي جذر خ-ر-ج على وزن اِسْتَفْعَلَ. بماذا تسهم إضافة اِسْتَ في بداية الفعل؟\nاِسْتَخْرَجَ is root خ-ر-ج on the pattern اِسْتَفْعَلَ. What does the اِسْتَ prefix contribute?',
    options: [
      'معنى "طلب/سعى إلى" الفعل الأساسي — هنا: العمل بفاعلية على إخراج شيء ما — "استخرج"\n"To seek/request/consider" the base action — here, to actively work to bring something out — "to extract"',
      'معنى سلبي (مبني للمجهول) بسيط\nA simple passive meaning',
      'معنى تبادلي/مشترك\nA mutual/reciprocal meaning',
      'معنى اسم الآلة\nAn instrument-noun meaning',
    ],
    correctIndex: 0,
    a: 'وزن اِسْتَفْعَلَ يضيف اِسْتَ في البداية، وهي تدل عادة على "طلب/السعي إلى/تعمّد إحداث" فعل الجذر. وبناءً على الفعل السببي أَخْرَجَ (أخرج)، فإن اِسْتَخْرَجَ = "استخرج" — أي السعي بتعمّد لإخراج شيء ما.\nوزن اِسْتَفْعَلَ prefixes اِسْتَ, which regularly means "to seek/ask for/deliberately bring about" the root\'s action. Building on the causative أَخْرَجَ (to take out), اِسْتَخْرَجَ = "to extract" — to deliberately seek to bring something out.',
  },
  {
    q: 'ما هي ف-ت-ح على وزن اِسْتَفْعَلَ، وماذا تعني عادة؟\nWhat is ف-ت-ح on the pattern اِسْتَفْعَلَ, and what does it typically mean?',
    options: [
      'فَتَحَ\nfataḥa — "he opened it"',
      'اِسْتَفْتَحَ\nistaftaḥa — "to seek an opening/ask for victory" (e.g. to open a recitation, or pray for victory) — correct, on وزن اِسْتَفْعَلَ',
      'فَتَّحَ\nfattaḥa — "he opened it repeatedly"',
      'اِنْفَتَحَ\ninfataḥa — "it opened by itself"',
    ],
    correctIndex: 1,
    a: 'اِسْتَفْتَحَ هي ف-ت-ح على وزن اِسْتَفْعَلَ — باتباع معنى "طلب/السعي إلى" في وزن اِسْتَفْعَلَ، تعني "طلب الفتح" أو، بالمعنى الكلاسيكي، "طلب النصر/الحكم من الله"، أي طلب فعل الجذر بفاعلية.\nاِسْتَفْتَحَ is ف-ت-ح on وزن اِسْتَفْعَلَ — following the "seek/request X" sense of اِسْتَفْعَلَ, it means "to seek an opening" or, classically, "to ask God for victory/judgment", i.e. actively requesting the root\'s action.',
  },

  // ─── Noun patterns — 6 categories × 2 (masdar category has 3) ─────────────
  {
    q: 'كَاتِب مبنية على وزن فَاعِل. بماذا يدل هذا الوزن؟\nكَاتِب is on the pattern فَاعِل. What role does this pattern mark?',
    options: [
      'اسم المفعول — الشيء الذي وقع عليه الفعل\nThe passive participle — the thing being written',
      "المصدر — لفظ الفعل نفسه\nThe verbal noun — 'the writing'",
      "اسم الفاعل — من يقوم بالفعل\nThe active participle — the one doing the action, 'writer'",
      'اسم الآلة المستخدمة للكتابة\nThe instrument used to write',
    ],
    correctIndex: 2,
    a: "فَاعِل هو وزن اسم الفاعل، الذي يدل على من يقوم بالفعل. كَاتِب من الجذر ك-ت-ب تعني الكاتب، أي من يقوم بالكتابة.\nفَاعِل is the pattern of the active participle (اسم الفاعل) — 'the one who does X'. كَاتِب, from ك-ت-ب, means 'writer', the doer of the writing.",
  },
  {
    q: 'ما هي ن-ص-ر على وزن فَاعِل، وما معناها؟\nWhat is ن-ص-ر on the pattern فَاعِل, and what does it mean?',
    options: [
      'مَنْصُور\nmanṣūr — "one who is helped"',
      'نَصْر\nnaṣr — "help/victory" (noun)',
      'مِنْصَار\nminṣār — not a real standard word here',
      'نَاصِر\nnāṣir — "helper/supporter" (one who helps) — correct, on وزن فَاعِل',
    ],
    correctIndex: 3,
    a: 'نَاصِر هي ن-ص-ر على وزن فَاعِل، وزن اسم الفاعل — بمعنى "مُساعِد/مؤيد"، فاعل النَصْر (المساعدة/النصر).\nنَاصِر is ن-ص-ر on وزن فَاعِل, the active-participle pattern — "helper, one who supports/aids", the doer of the نَصْر (help/victory).',
  },
  {
    q: 'مَكْتُوب مبنية على وزن مَفْعُول. بماذا يدل هذا الوزن مقارنة بوزن فَاعِل؟\nمَكْتُوب is on the pattern مَفْعُول. What role does this pattern mark, as opposed to فَاعِل?',
    options: [
      "اسم المفعول — الشيء الذي وقع عليه الفعل: مكتوب/قطعة كتابة\nThe passive participle — the thing that the action was done to, 'written/a piece of writing'",
      'اسم الفاعل — من يقوم بالكتابة\nThe active participle — the one doing the writing',
      'اسم المكان الذي تحدث فيه الكتابة\nThe place where writing happens',
      'اسم آلة للكتابة\nAn instrument for writing',
    ],
    correctIndex: 0,
    a: "مَفْعُول هو وزن اسم المفعول (الشيء الذي وقع عليه الفعل)، عكس وزن اسم الفاعل فَاعِل. مَكْتُوب من ك-ت-ب تعني مكتوب/قطعة كتابة — أي الشيء الذي وقعت عليه الكتابة.\nمَفْعُول is the passive-participle pattern (اسم المفعول) — 'the thing X was done to', opposite of the doer-pattern فَاعِل. مَكْتُوب, from ك-ت-ب, means 'written / a piece of writing' — the object the writing was done to.",
  },
  {
    q: 'ما هي ن-ص-ر على وزن مَفْعُول، وما معناها؟\nWhat is ن-ص-ر on the pattern مَفْعُول, and what does it mean?',
    options: [
      'نَاصِر\nnāṣir — "a helper"',
      'مَنْصُور\nmanṣūr — "one who has been helped/made victorious" — correct, on وزن مَفْعُول',
      'نَصَرَ\nnaṣara — "he helped"',
      'نُصْرَة\nnuṣrah — "the act of helping"',
    ],
    correctIndex: 1,
    a: 'مَنْصُور هي ن-ص-ر على وزن مَفْعُول، وزن اسم المفعول — بمعنى "من نُصِر/من مُنِح النصر"، أي متلقي النَصْر، عكس اسم الفاعل نَاصِر.\nمَنْصُور is ن-ص-ر on وزن مَفْعُول, the passive-participle pattern — "one who has been helped/granted victory", i.e. the recipient of the نَصْر, opposite of the doer-noun نَاصِر.',
  },
  {
    q: 'نَجَّار (نجّار) مبنية على وزن فَعَّال. بماذا يدل هذا الوزن عادة؟\nنَجَّار (carpenter) is built on the pattern فَعَّال. What does this pattern usually convey?',
    options: [
      'من يقوم بالفعل مرة واحدة فقط\nA one-time doer of the action',
      'الأداة المستخدمة في الحرفة\nThe tool used for the trade',
      'المبالغة أو من يمتهن الفعل بصفة دائمة — من كانت حرفته أو عادته كذا\nIntensiveness or a professional habitual doer of the action — someone whose trade/habit is X',
      "المتلقي السلبي لعمل الحرفة\nThe passive recipient of the trade's work",
    ],
    correctIndex: 2,
    a: "وزن فَعَّال، بتضعيف الحرف الأوسط، هو وزن المبالغة/الحرفة (صيغة مبالغة) — يدل على من يقوم بالفعل بصفة دائمة أو كحرفة، لا لمرة واحدة. نَجَّار تعني 'نجّار'، أي من مهنته النجارة.\nفَعَّال, with its doubled middle letter, is the intensive/professional pattern (صيغة مبالغة) — it marks someone who does the action habitually or as a trade, not just once. نَجَّار = 'carpenter', one whose profession is woodworking.",
  },
  {
    q: "الفَتَّاح من الجذر ف-ت-ح مبنية على وزن فَعَّال. وبما أنّ فَتَحَ تعني \"فتح/حكم وقضى\"، فبماذا يوحي هذا الوزن المبالغ فيه عن الفَتَّاح؟\nالفَتَّاح, from ف-ت-ح, is on the pattern فَعَّال. Given that فَتَحَ means 'to open/to judge/decide', what does this professional/intensive pattern suggest about الفَتَّاح?",
    options: [
      'من يُفتح أحياناً\nOne who is occasionally opened',
      'أداة لفتح الأبواب\nAn instrument for opening doors',
      'المكان الذي يحدث فيه الفتح\nThe place where opening happens',
      'من يفتح/يحكم بصفة دائمة وشاملة — الفاتح/الحاكم الأزلي الدائم\nOne who opens/judges constantly and thoroughly — the ultimate, habitual Opener/Judge',
    ],
    correctIndex: 3,
    a: "بصفته أحد أسماء الله الحسنى، يستخدم اسم الفَتَّاح وزن المبالغة فَعَّال ليدل على من يقوم بالفتح والحكم (ف-ت-ح) على نطاق دائم لا حدود له وشامل — أي الفاتح والحاكم الأزلي الدائم، لا فعلاً يحدث مرة واحدة.\nAs one of Allah's names, الفَتَّاح uses the intensive فَعَّال pattern to convey a doer of ف-ت-ح (open/judge) on a constant, unlimited, all-encompassing scale — 'the ultimate/perpetual Opener and Judge', not a one-off action.",
  },
  {
    q: 'مِفْتَاح (مفتاح) مبنية على وزن اسم الآلة مِفْعَال، من الجذر ف-ت-ح. بماذا يدل هذا الوزن؟\nمِفْتَاح (key) is built on the instrument-noun pattern مِفْعَال, from root ف-ت-ح. What does this pattern mark?',
    options: [
      "الأداة المستخدمة لأداء فعل الجذر\nThe tool/instrument used to perform the root's action",
      'الشخص الذي يقوم بالفعل\nThe person who performs the action',
      'المكان الذي يحدث فيه الفعل\nThe place where the action occurs',
      'المفهوم المجرد للفعل\nThe abstract concept of the action',
    ],
    correctIndex: 0,
    a: "وزن مِفْعَال (وكذلك مِفْعَل / مِفْعَلة) هو وزن اسم الآلة — يسمّي الأداة المستخدمة لأداء فعل الجذر. مِفْتَاح من ف-ت-ح (فتح) هي الأداة المستخدمة للفتح — أي المفتاح.\nمِفْعَال (along with مِفْعَل / مِفْعَلة) is the instrument-noun pattern (اسم الآلة) — it names the tool used to do the root's action. مِفْتَاح, from ف-ت-ح (to open), is 'the tool used to open' — a key.",
  },
  {
    q: 'مِنْشَار (منشار)، من الجذر ن-ش-ر (نشر/قطع)، يتبع نفس وزن الآلة مِفْعَال مثل مِفْتَاح. بماذا يسمّي؟\nمِنْشَار (saw), from root ن-ش-ر (to saw/spread), follows the same مِفْعَال instrument pattern as مِفْتَاح. What does it name?',
    options: [
      'الشخص الذي ينشر\nThe person who saws',
      'الأداة المستخدمة لأداء فعل النشر\nThe tool used to perform the sawing action',
      'المكان الذي يتم فيه النشر\nThe place where sawing is done',
      "المصدر: النشر\nThe verbal noun 'sawing'",
    ],
    correctIndex: 1,
    a: 'مثل مِفْتَاح، مِنْشَار على وزن مِفْعَال — الأداة المستخدمة لأداء فعل الجذر. من ن-ش-ر، تسمّي أداة النشر: المنشار.\nLike مِفْتَاح, مِنْشَار is on وزن مِفْعَال — the tool used to carry out the root\'s action. From ن-ش-ر, it names the instrument for sawing: a saw.',
  },
  {
    q: 'مَكْتَب (مكتب) مبنية على وزن اسم المكان مَفْعَل، من الجذر ك-ت-ب. بماذا يدل هذا الوزن؟\nمَكْتَب (office) is built on the place-noun pattern مَفْعَل, from root ك-ت-ب. What does this pattern mark?',
    options: [
      'الأداة المستخدمة للفعل\nThe tool used for the action',
      'من يقوم بالفعل\nThe doer of the action',
      "المكان (أو الزمان) الذي يقع فيه فعل الجذر عادة\nThe place (or time) where the root's action typically occurs",
      'المفعول به السلبي للفعل\nThe passive object of the action',
    ],
    correctIndex: 2,
    a: "وزن مَفْعَل (وصيغته الأخرى مَفْعِل) هو وزن اسم المكان/الزمان — يسمّي أين أو متى يقع فعل الجذر. مَكْتَب من ك-ت-ب هو مكان الكتابة — أي المكتب.\nمَفْعَل (and its variant مَفْعِل) is the place/time-noun pattern (اسم المكان/الزمان) — it names where or when the root's action happens. مَكْتَب, from ك-ت-ب, is 'the place of writing' — an office/desk.",
  },
  {
    q: 'مَدْرَسَة (مدرسة)، من الجذر د-ر-س، تتبع نفس عائلة أسماء المكان مثل مَكْتَب (بزيادة تاء التأنيث). بماذا تسمّي؟\nمَدْرَسَة (school), from root د-ر-س, follows the same place-noun family as مَكْتَب (with a ة ending). What does it name?',
    options: [
      'الشخص الذي يدرس\nThe person who studies',
      'الأداة المستخدمة للدراسة\nThe instrument used to study',
      'الفكرة المجردة للدراسة\nThe abstract idea of studying',
      "المكان الذي يقع فيه فعل الجذر (الدراسة) — أي مكان الدراسة\nThe place where the root's action (studying) happens — 'the place of study'",
    ],
    correctIndex: 3,
    a: "مَدْرَسَة اسم مكان مؤنث (مَفْعَلة) من د-ر-س (درس) — أي مكان الدراسة، أي المدرسة، على نفس منطق اسم المكان في مَكْتَب.\nمَدْرَسَة is a feminine-marked place noun (مَفْعَلة) from د-ر-س (to study) — 'the place of study', a school, following the same place-noun logic as مَكْتَب.",
  },
  {
    q: 'كِتَابَة، على وزن المصدر فِعَالة، مشتقة من الجذر ك-ت-ب. ما معناها، وماذا يمثل المصدر نحوياً؟\nكِتَابَة, on the مصدر (verbal-noun) pattern فِعَالة, is derived from root ك-ت-ب. What does it mean and what does a مصدر represent grammatically?',
    options: [
      'الكتابة\nal-kitābah — "writing" — the abstract verbal noun naming the action itself, without a subject or tense',
      'كاتب\nkātib — "writer" — the one who writes',
      'مكتوب\nmaktūb — "written" — the thing that was written',
      'مكتب\nmaktab — "office" — the place of writing',
    ],
    correctIndex: 0,
    a: 'كِتَابَة هي مصدر ك-ت-ب على الوزن الشائع فِعَالة — تسمّي الفعل نفسه بصورة مجردة، أي "الكتابة"، دون فاعل أو مفعول أو زمن، على عكس اسمي الفاعل والمفعول كَاتِب/مَكْتُوب.\nكِتَابَة is the مصدر (verbal noun) of ك-ت-ب on the common pattern فِعَالة — it names the action itself in the abstract, \'writing\', with no subject, object, or tense attached, unlike the participles كَاتِب/مَكْتُوب.',
  },
  {
    q: 'دُخُول، على وزن المصدر فُعُول، مشتقة من الجذر د-خ-ل. ما معناها؟\nدُخُول, on the مصدر pattern فُعُول, comes from root د-خ-ل. What does it mean?',
    options: [
      'دَاخِل\ndākhil — "one who enters"',
      'دُخُول\ndukhūl — "entering" (the abstract act of entering) — correct, the مصدر',
      'مَدْخَل\nmadkhal — "the entrance" (place)',
      'أَدْخَلَ\nadkhala — "he brought in"',
    ],
    correctIndex: 1,
    a: 'دُخُول هو مصدر د-خ-ل على وزن فُعُول، الشائع في أفعال الحركة/الحالة — أي "الدخول"، الفعل المجرد نفسه، بخلاف اسم الفاعل دَاخِل أو اسم المكان مَدْخَل (المدخل).\nدُخُول is the مصدر of د-خ-ل على وزن فُعُول, common for verbs of motion/state — "entering", the abstract act itself, as opposed to the doer دَاخِل or the place-noun مَدْخَل (entrance).',
  },
  {
    q: 'تَعْلِيم، على وزن المصدر تَفْعِيل، هو مصدر الفعل عَلَّمَ (الوزن الثاني). ما معناه؟\nتَعْلِيم, on the مصدر pattern تَفْعِيل, is the verbal noun of عَلَّمَ (Form II). What does it mean?',
    options: [
      'عَالِم\nʿālim — "one who knows/scholar"',
      'مُعَلِّم\nmuʿallim — "teacher" (the doer)',
      'تَعْلِيم\ntaʿlīm — "teaching" (the abstract act of teaching) — correct, the مصدر',
      'تَعَلُّم\ntaʿallum — "learning" (reflexive act)',
    ],
    correctIndex: 2,
    a: 'تَفْعِيل هو الوزن القياسي لمصدر أفعال فَعَّلَ (الوزن الثاني). تَعْلِيم، من عَلَّمَ، تعني "التعليم" — الفعل المجرد المتمثل في جعل شخص آخر يعرف — بخلاف اسم الفاعل مُعَلِّم (المعلّم) أو المصدر الانعكاسي تَعَلُّم (التعلّم).\nتَفْعِيل is the standard مصدر pattern for فَعَّلَ (Form II) verbs. تَعْلِيم, from عَلَّمَ, means "teaching" — the abstract act of causing someone to know — distinct from the doer-noun مُعَلِّم (teacher) or the reflexive مصدر تَعَلُّم (learning).',
  },

  // ─── Mixed questions across the 10 roots ───────────────────────────────────
  {
    q: 'ما الجذر الثلاثي الذي تقوم عليه كلمة مَكْتَبَة (مكتبة/دار كتب)؟\nWhat three-letter root underlies the word مَكْتَبَة (library/bookshop)?',
    options: [
      'م-ك-ت\nNot a real root — just reshuffled letters',
      'ك-ت-ة\nNot a real root — ة is not a root letter',
      'ب-ت-ك\nNot a real root — just reshuffled letters',
      'ك-ت-ب\nk-t-b — "to write" — correct, the real root',
    ],
    correctIndex: 3,
    a: 'مَكْتَبَة تُختزل إلى الجذر ك-ت-ب (كتب) — أما التوليفات الأخرى فهي مجرد أحرف معاد ترتيبها، وليست جذوراً حقيقية. مَكْتَبَة، على وزن اسم المكان مَفْعَلة، تعني "مكان الكتب/الكتابة" — أي المكتبة.\nمَكْتَبَة strips down to the root ك-ت-ب (write) — the other letter combinations are just reshuffled letters, not real roots. مَكْتَبَة, on the place-noun pattern مَفْعَلة, means "place of books/writing" — a library.',
  },
  {
    q: 'مُدَرِّس (مدرّس) من أي جذر، وما الوظيفة/الوزن الذي يدل عليه مُفَعِّل هنا؟\nمُدَرِّس (teacher) comes from which root, and what pattern/role does the pattern مُفَعِّل mark here?',
    options: [
      "الجذر د-ر-س؛ مُفَعِّل هو اسم الفاعل من الوزن الثاني فَعَّلَ — أي من يتسبب في التعليم، أي المدرّس\nRoot د-ر-س; مُفَعِّل is the active-participle pattern of Form II فَعَّلَ — 'one who causes teaching', i.e. teacher",
      'الجذر ر-س-د؛ اسم مفعول\nRoot ر-س-د; a passive participle',
      'الجذر د-س-ر؛ اسم آلة\nRoot د-س-ر; an instrument noun',
      'الجذر س-د-ر؛ اسم مكان\nRoot س-د-ر; a place noun',
    ],
    correctIndex: 0,
    a: 'مُدَرِّس من الجذر د-ر-س (درس). ووزنه مُفَعِّل هو صيغة اسم الفاعل من الفعل دَرَّسَ (الوزن الثاني، بمعنى "علّم") — أي من يقوم بالتدريس، أي المدرّس.\nمُدَرِّس comes from root د-ر-س (to study). Its pattern مُفَعِّل is the active-participle form of the Form II verb دَرَّسَ (to teach) — "one who does the teaching", a teacher.',
  },
  {
    q: 'عَالِم (عالِم — العلّامة) مبنية على أي جذر ووزن، وما معناها؟\nعَالِم (scholar/one who knows) is built on which root and pattern, and what does it mean?',
    options: [
      'الجذر م-ل-ع، وزن فَاعِل\nroot م-ل-ع, pattern فَاعِل — not a real root',
      "الجذر ع-ل-م، وزن فَاعِل، اسم فاعل = عارف/عالِم\nRoot ع-ل-م, pattern فَاعِل, active participle = 'knower/scholar'",
      "الجذر ع-ل-م، وزن مَفْعُول، اسم مفعول = شيء معلوم\nroot ع-ل-م, pattern مَفْعُول, passive = 'known thing'",
      'الجذر ل-ع-م، وزن فَعِيل\nroot ل-ع-م, pattern فَعِيل — not a real root',
    ],
    correctIndex: 1,
    a: 'عَالِم هي الجذر ع-ل-م (عَلِمَ) على وزن اسم الفاعل فَاعِل — أي "من يعرف"، أي العالِم. قارن بـ مَعْلُوم (الجذر ع-ل-م، وزن مَفْعُول) = "معروف/حقيقة معلومة"، النظير السلبي.\nعَالِم is root ع-ل-م (to know) on the active-participle pattern فَاعِل — "the one who knows", a scholar. Compare مَعْلُوم (root ع-ل-م, pattern مَفْعُول) = "known/a known fact", the passive counterpart.',
  },
  {
    q: 'مَخْرَج، من الجذر خ-ر-ج، مبنية على وزن اسم المكان مَفْعَل. ما معناها؟\nمَخْرَج, from root خ-ر-ج, is on the place-noun pattern مَفْعَل. What does it mean?',
    options: [
      'خَارِج\nkhārij — "outside" (active participle)',
      'إِخْرَاج\nikhrāj — "producing/directing" (مصدر of Form IV)',
      'مَخْرَج\nmakhraj — "exit/place of going out" — correct, on وزن مَفْعَل',
      'مُخْرِج\nmukhrij — "director/producer" (active participle of Form IV)',
    ],
    correctIndex: 2,
    a: 'مَخْرَج هي خ-ر-ج على وزن اسم المكان مَفْعَل — وتعني حرفياً "مكان الخروج"، أي المخرج، على نفس منطق مَكْتَب (مكان الكتابة).\nمَخْرَج is خ-ر-ج on the place-noun pattern مَفْعَل — literally "the place of going out", i.e. an exit, following the same logic as مَكْتَب (place of writing).',
  },
  {
    q: 'مِن أي جذر ومعنى عام تأتي كلمة مُدَاخَلَة (مداخلة/تدخّل في نقاش)؟\nWhat root and general meaning does مُدَاخَلَة (intervention/interjecting in a discussion) come from?',
    options: [
      'الجذر خ-ل-د؛ مصدر بمعنى الخلود\nRoot خ-ل-د; masdar of eternity',
      'الجذر د-ل-خ؛ اسم آلة\nRoot د-ل-خ; an instrument noun',
      'الجذر خ-د-ل؛ اسم مكان\nRoot خ-د-ل; a place noun',
      'الجذر د-خ-ل (دخل)؛ على وزن مصدر الوزن الثالث مُفَاعَلة، يدل على دخول تبادلي في نقاش — أي التدخّل\nRoot د-خ-ل (to enter); on the مصدر pattern of Form III مُفَاعَلة, it signals a mutual \'entering into\' a conversation — intervening',
    ],
    correctIndex: 3,
    a: 'مُدَاخَلَة من الجذر د-خ-ل (دخل). وهي مصدر وزن الثالث فَاعَلَ (دَاخَلَ)، الذي يحمل عادة معنى تبادلياً/تفاعلياً — وهنا بمعنى "الدخول" في نقاش مع آخرين، أي التدخّل/المداخلة.\nمُدَاخَلَة comes from root د-خ-ل (to enter). It\'s the مصدر of the Form III pattern فَاعَلَ (دَاخَلَ), which usually carries a mutual/interactive sense — here, "entering into" a discussion with others, i.e. an intervention/interjection.',
  },
  {
    q: "قارن بين فَاتِح ومَفْتُوح، وكلاهما من الجذر ف-ت-ح. أيّهما اسم الفاعل (الفاتح/الغازي) وأيّهما اسم المفعول (المفتوح)؟\nCompare فَاتِح and مَفْتُوح, both from root ف-ت-ح. Which is the active participle ('opener/conqueror') and which is the passive participle ('opened')?",
    options: [
      'فَاتِح = فاعل (فاتح)، مَفْتُوح = مفعول (مفتوح)\nفَاتِح = active (opener), مَفْتُوح = passive (opened) — correct',
      'فَاتِح = مفعول، مَفْتُوح = فاعل\nفَاتِح = passive, مَفْتُوح = active',
      'كلاهما اسم فاعل\nBoth are active',
      'كلاهما اسم مفعول\nBoth are passive',
    ],
    correctIndex: 0,
    a: "فَاتِح يتبع وزن اسم الفاعل فَاعِل — أي من يفتح/يغزو. مَفْتُوح يتبع وزن اسم المفعول مَفْعُول — أي ما وقع عليه الفتح. الجذر واحد ف-ت-ح، لكن الوظيفتين النحويتين متضادتان.\nفَاتِح follows the active-participle pattern فَاعِل — 'one who opens/conquers'. مَفْتُوح follows the passive-participle pattern مَفْعُول — 'that which has been opened'. Same root ف-ت-ح, opposite grammatical roles.",
  },
  {
    q: 'اِنْكِسَار (المصدر بمعنى "الكسر/التحطم") واِنْكَسَرَ (الفعل بمعنى "انكسر") يشتركان في الجذر ك-س-ر وعائلة وزن اِنْفَعَلَ. بماذا تدل النون المشتركة بين الصيغتين؟\nاِنْكِسَار (the masdar "breaking/fracture") and اِنْكَسَرَ (the verb "it broke") share root ك-س-ر and the وزن اِنْفَعَلَ family. What does the shared ن across both forms signal?',
    options: [
      'معنى سببي — شخص يفرض الكسر\nA causative sense — someone forcing the breaking',
      'معنى انعكاسي/سلبي — شيء يحدث للفاعل دون ذكر فاعل خارجي\nA passive/reflexive sense — something happening to the subject without a stated external agent',
      'معنى تبادلي — شيئان يكسر أحدهما الآخر\nA reciprocal sense — two things breaking each other',
      'معنى الآلة — الأداة التي كسرته\nAn instrument sense — the tool that broke it',
    ],
    correctIndex: 1,
    a: 'نون وزن اِنْفَعَلَ (ومصدره اِنْفِعَال) تدل دائماً على حدث انعكاسي/سلبي — شيء يقع على الفاعل دون ذكر من فعله. اِنْكَسَرَ/اِنْكِسَار كلاهما يصف الزجاج وهو ينكسر من تلقاء نفسه، لا أن أحداً كسره.\nThe ن of وزن اِنْفَعَلَ (and its مصدر اِنْفِعَال) consistently marks a passive/reflexive event — something that happens to the subject with no agent named. اِنْكَسَرَ/اِنْكِسَار both describe the glass breaking on its own, not someone breaking it.',
  },
  {
    q: "جَمَاعَة (جماعة/تجمّع) ومَجْمُوعَة (مجموعة) كلاهما من الجذر ج-م-ع لكن بوزنين مختلفين. ما جوهر الفرق فيما تسمّيه كل كلمة؟\nجَمَاعَة (group/congregation) and مَجْمُوعَة (a collection/set) both come from root ج-م-ع but use different patterns. What's the core difference in what each names?",
    options: [
      'الكلمتان متطابقتان في المعنى\nThey are identical in meaning',
      'جَمَاعَة هي الفعل؛ مَجْمُوعَة هي الجذر\nجَمَاعَة is the verb; مَجْمُوعَة is the root',
      'جَمَاعَة تسمّي مجموعة من الناس اجتمعوا (اسم جمع)؛ مَجْمُوعَة (وزن مَفْعُولة) تسمّي شيئاً سلبياً "تم جمعه"\nجَمَاعَة names a body of people who have gathered (collective noun); مَجْمُوعَة (pattern مَفْعُولة) names a passive "thing that has been collected"',
      'مَجْمُوعَة تسمّي مكان التجمّع\nمَجْمُوعَة names the place of gathering',
    ],
    correctIndex: 2,
    a: 'كلتاهما ترجعان إلى ج-م-ع (جمع)، لكن جَمَاعَة اسم جمع لمجموعة من الناس اجتمعوا معاً، بينما مَجْمُوعَة تقع على وزن اسم المفعول مَفْعُولة — أي "مجموعة/طاقم تم جمعه"، وتُستخدم غالباً للأشياء أكثر من الأشخاص.\nBoth trace to ج-م-ع (to gather), but جَمَاعَة is a collective noun for a group of people who have come together, while مَجْمُوعَة sits on the passive-participle pattern مَفْعُولة — \'a set/collection that has been gathered\', more often used for items than people.',
  },
  {
    q: 'اِنْتِصَار (النصر، مصدر) يأتي من الجذر ن-ص-ر على وزن اِفْتِعَال (مصدر اِفْتَعَلَ). بما أنّ اِفْتَعَلَ يدل على معنى انعكاسي، فبماذا يوحي اِنْتِصَار حرفياً؟\nاِنْتِصَار (victory, masdar) comes from root ن-ص-ر on the وزن اِفْتِعَال (masdar of اِفْتَعَلَ). Given that اِفْتَعَلَ marks a reflexive sense, what does اِنْتِصَار literally convey?',
    options: [
      'مساعدة شخص آخر على الفوز\nHelping someone else to win',
      'أن يُساعَد المرء من غيره\nBeing helped by another',
      'مكان وقوع النصر\nThe place where a victory happened',
      'الفوز بالنصر لنفسه — تحقيق انتصار خاص به، بخلاف مجرد نَصَرَ (مساعدة شخص آخر)\nWinning victory for oneself — securing one\'s own triumph, distinct from simply نَصَرَ (helping someone else)',
    ],
    correctIndex: 3,
    a: 'اِنْتِصَار يقع على وزن اِفْتِعَال، مصدر اِفْتَعَلَ، الذي يحمل (مثل اِجْتَمَعَ) معنى انعكاسياً. من ن-ص-ر (المساعدة/الدعم)، فإن اِنْتِصَار تعني "الفوز بالنصر لنفسه" — أي تحقيق انتصار خاص به — بخلاف نَصْر البسيطة، أي "مساعدة/دعم" شخص آخر.\nاِنْتِصَار sits on اِفْتِعَال, the مصدر of اِفْتَعَلَ, which (like اِجْتَمَعَ) carries a reflexive sense. From ن-ص-ر (help/support), اِنْتِصَار is "winning victory for oneself" — securing one\'s own triumph — as opposed to plain نَصْر, "helping/supporting" someone else.',
  },
  {
    q: 'قَرِيب (قريب/نسيب)، على وزن فَعِيل، يأتي من الجذر ق-ر-ب. أيّ نوع من الصفات/الأسماء يُكوّنه وزن فَعِيل عادة؟\nقَرِيب (near/relative), on the pattern فَعِيل, comes from root ق-ر-ب. What kind of adjective/noun does the فَعِيل pattern typically form?',
    options: [
      'صفة وصفية بسيطة تعبّر عن صفة أو حالة ثابتة — قريب/دانٍ (وبالتالي أيضاً بمعنى نسيب)\nA simple descriptive adjective expressing a quality or state — "near, close" (and by extension, "a close relative")',
      'اسم آلة\nAn instrument noun',
      'اسم مكان\nA place noun',
      'اسم مفعول يُستخدم فقط لمن تم تقريبهم جسدياً\nA passive participle only used for people who were physically moved closer',
    ],
    correctIndex: 0,
    a: 'فَعِيل وزن صفة شائع (صفة مشبهة) يصف صفة أو حالة ملازمة. من ق-ر-ب (القرب)، تعني قَرِيب "قريب/دانٍ"، وبالامتداد "قريب" بمعنى نسيب — أي شخص قريب منك بصلة القرابة.\nفَعِيل is a common adjectival pattern (صفة مشبهة) describing an inherent quality or state. From ق-ر-ب (nearness), قَرِيب means "near/close", and by extension "a close relative" — someone near to you by kinship.',
  },
]

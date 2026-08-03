import { createFileRoute, Link } from '@tanstack/react-router'
import { QuizCarousel } from '#/components/QuizCarousel'
import type { StrictQuizItem } from '#/routes/challenges/-quiz-types'

export const Route = createFileRoute('/challenges/grammar/spelling-rules/')({
  head: () => ({ meta: [{ title: 'Spelling Rules — Grammar — Tayseer' }] }),
  component: TopicPage,
})

const quizItems: StrictQuizItem[] = [
  {
    q: 'ما الفرق بين همزة الوصل وهمزة القطع؟\nWhat is the difference between همزة الوصل (connecting hamza) and همزة القطع (cutting hamza)?',
    options: [
      'همزة الوصل تُنطق في بداية الكلام وتسقط نطقاً عند الوصل بما قبلها، بينما همزة القطع تُنطق دائماً في كل الأحوال\nهمزة الوصل is pronounced only at the start of speech and drops in pronunciation when connected to what precedes it, while همزة القطع is always pronounced, in every case.',
      'كلاهما يُنطقان دائماً بلا استثناء\nBoth are always pronounced, without exception',
      'كلاهما تسقطان دائماً في الوصل\nBoth always drop when connected in speech',
      'همزة الوصل لا تُكتب أبداً في أي موضع\nهمزة الوصل is never written in any position',
    ],
    correctIndex: 0,
    a: 'همزة الوصل (ا) تُنطق فقط عند البدء بالكلمة وتسقط نطقاً إذا وُصلت الكلمة بما قبلها في الكلام، أما همزة القطع (أ/إ) فتُنطق دائماً سواء بُدئ بالكلمة أو وُصلت.\nهمزة الوصل (ا) is pronounced only when starting speech with the word, and drops in pronunciation if the word is connected to what precedes it. همزة القطع (أ/إ), however, is always pronounced, whether the word begins speech or is connected.',
  },
  {
    q: 'أيّ الكلمات التالية تبدأ بهمزة وصل؟\nWhich of the following words begins with همزة وصل?',
    options: [
      'ابنٌ\nibnun — "son" (begins with همزة وصل)',
      'أخٌ\nakhun — "brother" (begins with همزة قطع)',
      'إحسانٌ\niḥsānun — "kindness" (begins with همزة قطع)',
      'أستاذٌ\nustādhun — "teacher" (begins with همزة قطع)',
    ],
    correctIndex: 0,
    a: '"ابن" من الأسماء السماعية المعدودة التي تبدأ بهمزة وصل (مثل: اسم، امرؤ، اثنان)، بينما "أخٌ" و"إحسانٌ" و"أستاذٌ" همزاتها همزات قطع.\nابن is one of a small set of memorized nouns that begin with همزة وصل (like اسم, امرؤ, اثنان), while أخٌ, إحسانٌ, and أستاذٌ all begin with همزة قطع.',
  },
  {
    q: 'أيّ الأفعال التالية كُتبت بخطأ في نوع الهمزة؟\nWhich of the following verbs has an error in the type of hamza used?',
    options: [
      'اكتبْ\nuktub — "write!" (correctly begins with همزة وصل)',
      'اجلسْ\nijlis — "sit!" (correctly begins with همزة وصل)',
      'أكرمْ\nakrim — "honor!" (correctly begins with همزة قطع, from quadriliteral أكرم)',
      'إذهبْ\nIncorrect: should be اذهبْ with همزة وصل, not إذهبْ with همزة قطع',
    ],
    correctIndex: 3,
    a: 'الكلمة الرابعة خطأ: "اذهب" أمر من الفعل الثلاثي "ذهب"، فهمزته همزة وصل تُكتب ألفاً بلا رأس همزة (ا)، فكتابتها "إذهبْ" بهمزة قطع تحتها خطأ إملائي شائع؛ أما "أكرمْ" فأمرها من الرباعي "أكرم" الذي همزته قطع أصلاً.\nThe fourth word is wrong: اذهب is the imperative of the triliteral verb ذهب, so its hamza is a همزة وصل, written as a bare alif with no hamza mark (ا). Writing it as إذهبْ with a همزة قطع (hamza under the alif) is a common spelling mistake. أكرمْ, however, is the imperative of the quadriliteral أكرم, whose hamza is genuinely a همزة قطع.',
  },
  {
    q: 'كيف تُنطق التاء المربوطة (ة) عند الوقف عليها، وكيف تُنطق عند وصلها بما بعدها أو اتصال ضمير بها؟\nHow is تاء مربوطة (ة) pronounced when pausing on it, and how is it pronounced when connected to what follows or when a pronoun is attached to it?',
    options: [
      'تُنطق هاءً ساكنة عند الوقف، وتُنطق تاءً عند الوصل أو اتصال ضمير بها: مدرستي، مدرسةُ الحيّ\nIt is pronounced as a silent هـ when pausing, and as a ت when connected in speech or when a pronoun is attached: مدرستي ("my school"), مدرسةُ الحيّ ("the neighborhood\'s school").',
      'تُنطق تاءً دائماً في كل الأحوال\nIt is always pronounced as ت, in every case',
      'تُنطق هاءً دائماً في كل الأحوال\nIt is always pronounced as هـ, in every case',
      'لا تُنطق إطلاقاً في أي حال\nIt is never pronounced at all, in any case',
    ],
    correctIndex: 0,
    a: 'التاء المربوطة تُنطق هاءً عند الوقف عليها في آخر الكلام، بينما تُنطق تاءً عادية عند وصلها بما بعدها في الجملة أو عند اتصال ضمير بها: "مدرستي"، "مدرسةُ الحيّ".\nتاء مربوطة is pronounced as هـ when pausing on it at the end of speech, while it is pronounced as an ordinary ت when connected to what follows in the sentence or when a pronoun is attached to it: "مدرستي" ("my school"), "مدرسةُ الحيّ" ("the neighborhood\'s school").',
  },
  {
    q: 'أيّ الكلمات التالية تنتهي بتاء مربوطة (ة) لا تاء مفتوحة (ت)؟\nWhich of the following words ends in تاء مربوطة (ة), not an ordinary ت?',
    options: [
      'مدرسةٌ\nmadrasatun — "school" (ends in تاء مربوطة)',
      'بيتٌ\nbaytun — "house" (ends in an ordinary ت)',
      'صوتٌ\nṣawtun — "voice" (ends in an ordinary ت)',
      'وقتٌ\nwaqtun — "time" (ends in an ordinary ت)',
    ],
    correctIndex: 0,
    a: '"مدرسةٌ" تنتهي بتاء مربوطة تتحول هاءً عند الوقف، أما "بيتٌ" و"صوتٌ" و"وقتٌ" فتاؤها أصلية (مفتوحة) ثابتة في الكلمة سواء وُصلت أو وُقف عليها.\nمدرسةٌ ends in a تاء مربوطة that turns into هـ when pausing, while بيتٌ, صوتٌ, and وقتٌ all have an original (open) ت that stays fixed in the word whether it\'s connected or paused on.',
  },
  {
    q: 'ما الفرق بين الحروف الشمسية والحروف القمرية عند دخول "أل" التعريف؟\nWhat is the difference between الحروف الشمسية (sun letters) and الحروف القمرية (moon letters) when أل التعريف is attached?',
    options: [
      'الحروف الشمسية تُدغم فيها لام "أل" فتُكتب ولا تُنطق (الشمس تُنطق ash-shams)، بينما الحروف القمرية تُبقي لام "أل" واضحة النطق (القمر تُنطق al-qamar)\nWith sun letters, the ل of أل assimilates into the following letter, so it is written but not pronounced (الشمس is pronounced ash-shams). With moon letters, the ل of أل stays clearly pronounced (القمر is pronounced al-qamar).',
      'كلاهما تُدغم فيهما اللام دائماً\nThe ل always assimilates with both',
      'كلاهما تُبقيان اللام واضحة دائماً\nBoth always keep the ل clearly pronounced',
      'الفرق فقط في الكتابة لا في النطق إطلاقاً\nThe difference is only in writing, not in pronunciation at all',
    ],
    correctIndex: 0,
    a: 'الحروف الشمسية تُدغم فيها لام "أل" فتُكتب ولا تُنطق مثل "الشمس"، أما الحروف القمرية فتبقى لام "أل" ظاهرة النطق مثل "القمر".\nWith sun letters, the ل of أل assimilates into the letter that follows, so it\'s written but not pronounced, as in الشمس. With moon letters, the ل of أل stays clearly pronounced, as in القمر.',
  },
  {
    q: 'أيّ الكلمات التالية "اللام" فيها شمسية (مدغمة، لا تُنطق)؟\nIn which of the following words is the ل a sun letter (assimilated, not pronounced)?',
    options: [
      'الشمسُ\nash-shamsu — "the sun" (sun letter — ل is silent)',
      'القمرُ\nal-qamaru — "the moon" (moon letter — ل is pronounced)',
      'الكتابُ\nal-kitābu — "the book" (moon letter — ل is pronounced)',
      'البيتُ\nal-baytu — "the house" (moon letter — ل is pronounced)',
    ],
    correctIndex: 0,
    a: '"الشمسُ" لامها شمسية مدغمة في الشين فلا تُنطق، بينما "القمر" و"الكتاب" و"البيت" لامها قمرية واضحة النطق.\nالشمسُ has a sun-letter ل that assimilates into the ش, so it isn\'t pronounced, while القمر, الكتاب, and البيت all have a moon-letter ل that is clearly pronounced.',
  },
  {
    q: 'أيّ الجمل التالية بها خطأ إملائي؟\nWhich of the following sentences contains a spelling error?',
    options: [
      'ذهبَ الطالبُ إلى المدرسةِ\nThe student went to school',
      'اكتبْ درسَك بخط واضح\nWrite your lesson in clear handwriting',
      'هذا ابنُ عمّي\nThis is my cousin (my paternal uncle\'s son)',
      'قرأتُ الكتابَ في المدرسه\nIncorrect: المدرسه should end in تاء مربوطة (المدرسةِ), not هاء',
    ],
    correctIndex: 3,
    a: 'الجملة الرابعة بها خطأ إملائي: يجب أن تُكتب "المدرسةِ" بتاء مربوطة لا هاء؛ فالهاء تمثل النطق الوقفي فقط ولا تُستخدم في الكتابة المتصلة بالجملة.\nThe fourth sentence has a spelling error: المدرسةِ must be written with تاء مربوطة, not هاء. The هاء only represents the pause pronunciation and is never used in writing when connected within a sentence.',
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
            Topic 45 of 47
          </p>
          <h1 className="font-serif tracking-[-0.02em] text-3xl font-bold text-foreground leading-tight mb-3">
            <span
              dir="rtl"
              lang="ar"
              style={{ fontFamily: "'Noto Naskh Arabic', serif" }}
              className="mr-2"
            >
              قواعد الإملاء
            </span>
            — Spelling Rules
          </h1>
          <p className="text-muted-foreground text-base max-w-xl">
            همزة الوصل is dropped in connected speech — it appears with أل, the imperative of a
            plain ثلاثي verb, and a few memorized nouns (ابن، اسم، امرؤ، اثنان); همزة القطع is
            always pronounced. تاء مربوطة (ة) is pronounced ه in pause but ت when connected or
            suffixed. الحروف الشمسية assimilate the ل of أل so it is written but silent
            (الشمس = ash-shams); الحروف القمرية keep it clearly pronounced (القمر = al-qamar).
          </p>
        </div>
      </div>
      <div className="mx-auto w-[min(720px,calc(100%-2rem))] py-8">
        <QuizCarousel items={quizItems} />
      </div>
    </main>
  )
}

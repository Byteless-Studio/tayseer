import { createFileRoute, Link } from '@tanstack/react-router'
import { QuizCarousel } from '#/components/QuizCarousel'
import type { StrictQuizItem } from '#/routes/challenges/-quiz-types'

export const Route = createFileRoute('/challenges/grammar/spelling-rules/')({
  head: () => ({ meta: [{ title: 'Spelling Rules — Grammar — Tayseer' }] }),
  component: TopicPage,
})

const quizItems: StrictQuizItem[] = [
  {
    q: 'ما الفرق بين همزة الوصل وهمزة القطع؟',
    options: [
      'همزة الوصل تُنطق في بداية الكلام وتسقط نطقاً عند الوصل بما قبلها، بينما همزة القطع تُنطق دائماً في كل الأحوال',
      'كلاهما يُنطقان دائماً بلا استثناء',
      'كلاهما تسقطان دائماً في الوصل',
      'همزة الوصل لا تُكتب أبداً في أي موضع',
    ],
    correctIndex: 0,
    a: 'همزة الوصل (ا) تُنطق فقط عند البدء بالكلمة وتسقط نطقاً إذا وُصلت الكلمة بما قبلها في الكلام، أما همزة القطع (أ/إ) فتُنطق دائماً سواء بُدئ بالكلمة أو وُصلت.',
  },
  {
    q: 'أيّ الكلمات التالية تبدأ بهمزة وصل؟',
    options: ['ابنٌ', 'أخٌ', 'إحسانٌ', 'أستاذٌ'],
    correctIndex: 0,
    a: '"ابن" من الأسماء السماعية المعدودة التي تبدأ بهمزة وصل (مثل: اسم، امرؤ، اثنان)، بينما "أخٌ" و"إحسانٌ" و"أستاذٌ" همزاتها همزات قطع.',
  },
  {
    q: 'أيّ الأفعال التالية كُتبت بخطأ في نوع الهمزة؟',
    options: ['اكتبْ', 'اجلسْ', 'أكرمْ', 'إذهبْ'],
    correctIndex: 3,
    a: 'الكلمة الرابعة خطأ: "اذهب" أمر من الفعل الثلاثي "ذهب"، فهمزته همزة وصل تُكتب ألفاً بلا رأس همزة (ا)، فكتابتها "إذهبْ" بهمزة قطع تحتها خطأ إملائي شائع؛ أما "أكرمْ" فأمرها من الرباعي "أكرم" الذي همزته قطع أصلاً.',
  },
  {
    q: 'كيف تُنطق التاء المربوطة (ة) عند الوقف عليها، وكيف تُنطق عند وصلها بما بعدها أو اتصال ضمير بها؟',
    options: [
      'تُنطق هاءً ساكنة عند الوقف، وتُنطق تاءً عند الوصل أو اتصال ضمير بها: مدرستي، مدرسةُ الحيّ',
      'تُنطق تاءً دائماً في كل الأحوال',
      'تُنطق هاءً دائماً في كل الأحوال',
      'لا تُنطق إطلاقاً في أي حال',
    ],
    correctIndex: 0,
    a: 'التاء المربوطة تُنطق هاءً عند الوقف عليها في آخر الكلام، بينما تُنطق تاءً عادية عند وصلها بما بعدها في الجملة أو عند اتصال ضمير بها: "مدرستي"، "مدرسةُ الحيّ".',
  },
  {
    q: 'أيّ الكلمات التالية تنتهي بتاء مربوطة (ة) لا تاء مفتوحة (ت)؟',
    options: ['مدرسةٌ', 'بيتٌ', 'صوتٌ', 'وقتٌ'],
    correctIndex: 0,
    a: '"مدرسةٌ" تنتهي بتاء مربوطة تتحول هاءً عند الوقف، أما "بيتٌ" و"صوتٌ" و"وقتٌ" فتاؤها أصلية (مفتوحة) ثابتة في الكلمة سواء وُصلت أو وُقف عليها.',
  },
  {
    q: 'ما الفرق بين الحروف الشمسية والحروف القمرية عند دخول "أل" التعريف؟',
    options: [
      'الحروف الشمسية تُدغم فيها لام "أل" فتُكتب ولا تُنطق (الشمس تُنطق ash-shams)، بينما الحروف القمرية تُبقي لام "أل" واضحة النطق (القمر تُنطق al-qamar)',
      'كلاهما تُدغم فيهما اللام دائماً',
      'كلاهما تُبقيان اللام واضحة دائماً',
      'الفرق فقط في الكتابة لا في النطق إطلاقاً',
    ],
    correctIndex: 0,
    a: 'الحروف الشمسية تُدغم فيها لام "أل" فتُكتب ولا تُنطق مثل "الشمس"، أما الحروف القمرية فتبقى لام "أل" ظاهرة النطق مثل "القمر".',
  },
  {
    q: 'أيّ الكلمات التالية "اللام" فيها شمسية (مدغمة، لا تُنطق)؟',
    options: ['الشمسُ', 'القمرُ', 'الكتابُ', 'البيتُ'],
    correctIndex: 0,
    a: '"الشمسُ" لامها شمسية مدغمة في الشين فلا تُنطق، بينما "القمر" و"الكتاب" و"البيت" لامها قمرية واضحة النطق.',
  },
  {
    q: 'أيّ الجمل التالية بها خطأ إملائي؟',
    options: [
      'ذهبَ الطالبُ إلى المدرسةِ',
      'اكتبْ درسَك بخط واضح',
      'هذا ابنُ عمّي',
      'قرأتُ الكتابَ في المدرسه',
    ],
    correctIndex: 3,
    a: 'الجملة الرابعة بها خطأ إملائي: يجب أن تُكتب "المدرسةِ" بتاء مربوطة لا هاء؛ فالهاء تمثل النطق الوقفي فقط ولا تُستخدم في الكتابة المتصلة بالجملة.',
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

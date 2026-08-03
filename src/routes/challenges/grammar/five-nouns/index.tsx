import { createFileRoute, Link } from '@tanstack/react-router'
import { QuizCarousel } from '#/components/QuizCarousel'
import type { StrictQuizItem } from '#/routes/challenges/-quiz-types'

export const Route = createFileRoute('/challenges/grammar/five-nouns/')({
  head: () => ({ meta: [{ title: 'The Five Nouns — Grammar — Tayseer' }] }),
  component: TopicPage,
})

const quizItems: StrictQuizItem[] = [
  {
    q: 'ما الأسماء الخمسة؟',
    options: [
      'أب، أخ، حم، فو، ذو',
      'أب، أخت، ابن، بنت، حم',
      'أنا، أنت، هو، هي، نحن',
      'كتاب، قلم، باب، بيت، شمس',
    ],
    correctIndex: 0,
    a: 'الأسماء الخمسة هي: أب، أخ، حم (بمعنى قريب الزوج أو الزوجة)، فو (بمعنى الفم)، ذو (بمعنى صاحب).',
  },
  {
    q: 'جاء ___ محمدٍ (أبو، رفع)',
    options: ['أبو', 'أبا', 'أبي', 'أب'],
    correctIndex: 0,
    a: '"أب" هنا مضاف إلى اسم ظاهر ("محمد") لا إلى ياء المتكلم، فيُرفع بالواو نيابة عن الضمة: "أبو محمدٍ".',
  },
  {
    q: 'رأيتُ ___ محمدٍ (أبا، نصب)',
    options: ['أبا', 'أبو', 'أبي', 'أب'],
    correctIndex: 0,
    a: 'يُنصب من الأسماء الخمسة بالألف نيابة عن الفتحة عندما يكون مضافاً لغير ياء المتكلم: "رأيتُ أبا محمدٍ".',
  },
  {
    q: 'سلّمتُ على ___ محمدٍ (أبي، جر)',
    options: ['أبي', 'أبو', 'أبا', 'أب'],
    correctIndex: 0,
    a: 'يُجر من الأسماء الخمسة بالياء نيابة عن الكسرة عندما يكون مضافاً لغير ياء المتكلم: "سلّمتُ على أبي محمدٍ".',
  },
  {
    q: 'ماذا يحدث لإعراب "أب" عندما يُضاف إلى ياء المتكلم كما في "أبي"؟',
    options: [
      'يبقى معرباً بالحروف (و/ا/ي) كالمعتاد',
      'يخرج عن قاعدة الأسماء الخمسة وتلزم صورة واحدة بالياء ويُقدَّر إعرابه',
      'يُصبح مبنياً على الضم دائماً',
      'لا يجوز إضافته إلى ياء المتكلم إطلاقاً',
    ],
    correctIndex: 1,
    a: 'إذا أُضيف أحد الأسماء الخمسة إلى ياء المتكلم (مثل "أبي") لزمت الكلمة صورة واحدة بالياء، وخرجت عن إعرابها بالحروف، فيُقدَّر إعرابها (رفعاً ونصباً وجراً) على ما قبل ياء المتكلم منع من ظهوره اشتغال المحل بحركة الياء المناسبة.',
  },
  {
    q: 'أيّ من هذه الجمل بها خطأ نحوي؟',
    options: [
      'جاء أخو خالدٍ',
      'رأيتُ أخو خالدٍ',
      'سلّمتُ على أخي خالدٍ',
      'هذا ذو مالٍ',
    ],
    correctIndex: 1,
    a: '"أخو" هنا مفعول به منصوب، ويُنصب من الأسماء الخمسة بالألف: الصواب "رأيتُ أخا خالدٍ" لا "أخو".',
  },
  {
    q: 'ما معنى "ذو" من الأسماء الخمسة؟',
    options: [
      'بمعنى "صاحب"، ولا يُستعمل إلا مضافاً إلى اسم بعده',
      'بمعنى "هذا"',
      'حرف جر',
      'بمعنى "الذي" الاسم الموصول',
    ],
    correctIndex: 0,
    a: '"ذو" من الأسماء الخمسة بمعنى "صاحب"، ولا يقع إلا مضافاً إلى اسم جنس ظاهر بعده يدل على ما يُملَك أو يُتصف به، مثل "رجلٌ ذو مالٍ" (رجل صاحب مال).',
  },
  {
    q: 'هذا ___ الأسدِ (فو، رفع، بمعنى فم الأسد)',
    options: ['فو', 'فا', 'في', 'فم'],
    correctIndex: 0,
    a: '"فو" (بمعنى الفم) من الأسماء الخمسة، ويُرفع بالواو إذا أُضيف لغير ياء المتكلم: "هذا فو الأسدِ" — واللفظ الشائع "فم" ليس من الأسماء الخمسة، ويُعرب بالحركات العادية.',
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
            Topic 24 of 47
          </p>
          <h1 className="font-serif tracking-[-0.02em] text-3xl font-bold text-foreground leading-tight mb-3">
            <span
              dir="rtl"
              lang="ar"
              style={{ fontFamily: "'Noto Naskh Arabic', serif" }}
              className="mr-2"
            >
              الأسماء الخمسة
            </span>
            — The Five Nouns
          </h1>
          <p className="text-muted-foreground text-base max-w-xl">
            أب، أخ، حم، فو، ذو ("possessor of") take و in رفع, ا in نصب, ي in جر — but ONLY when
            مضاف to something other than ياء المتكلم ("my").
          </p>
        </div>
      </div>
      <div className="mx-auto w-[min(720px,calc(100%-2rem))] py-8">
        <QuizCarousel items={quizItems} />
      </div>
    </main>
  )
}

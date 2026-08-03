import { createFileRoute, Link } from '@tanstack/react-router'
import { QuizCarousel } from '#/components/QuizCarousel'
import type { StrictQuizItem } from '#/routes/challenges/-quiz-types'

export const Route = createFileRoute('/challenges/grammar/ism-ishaara-far/')({
  head: () => ({ meta: [{ title: 'Ism Ishaara (Far) — Grammar — Tayseer' }] }),
  component: TopicPage,
})

const quizItems: StrictQuizItem[] = [
  {
    q: 'ما الفرق بين ذلك وتلك؟',
    options: [
      'ذلك للإشارة إلى البعيد المذكر المفرد، وتلك للإشارة إلى البعيد المؤنث المفرد',
      'ذلك للقريب، وتلك للبعيد',
      'ذلك للجمع، وتلك للمفرد',
      'لا فرق بينهما، يستخدمان بالتبادل',
    ],
    correctIndex: 0,
    a: 'ذلك اسم إشارة للمفرد المذكر البعيد، وتلك اسم إشارة للمفرد المؤنث البعيد — وهما نظيرا هذا وهذه لكن للإشارة إلى ما هو بعيد عن المتكلم لا قريب منه.',
  },
  {
    q: 'ما العلاقة بين ذلك/تلك وهذا/هذه من حيث البنية والوظيفة؟',
    options: [
      'لا علاقة بينهما إطلاقاً، أدوات مختلفة تماماً في الاستخدام',
      'كلاهما يعمل بنفس الطريقة نحوياً (مبتدأ أو صفة إشارية)، والفرق فقط في البعد: هذا/هذه للقريب، ذلك/تلك للبعيد',
      'ذلك/تلك تُستخدمان للأشخاص فقط، وهذا/هذه للأشياء فقط',
      'ذلك/تلك مُعربتان، وهذا/هذه مبنيتان',
    ],
    correctIndex: 1,
    a: 'ذلك/تلك توازيان هذا/هذه تماماً في الوظيفة النحوية (تعملان مبتدأ أو صفة إشارية)، والفرق الوحيد هو الدلالة على البُعد المكاني (أو المعنوي) بدل القرب.',
  },
  {
    q: 'كتابٌ (masc.) بعيد عن المتكلم. أيّ جملة صحيحة للإشارة إليه؟',
    options: ['هذا كتابٌ', 'تلك كتابٌ', 'ذلك كتابٌ', 'هذه كتابٌ'],
    correctIndex: 2,
    a: 'كتاب اسم مذكر، والمشار إليه بعيد، فالأداة الصحيحة هي ذلك (المذكر البعيد): "ذلك كتابٌ" = "That is a book."',
  },
  {
    q: 'مدرسةٌ (fem.) بعيدة عن المتكلم. أيّ جملة صحيحة للإشارة إليها؟',
    options: ['ذلك مدرسةٌ', 'هذه مدرسةٌ', 'تلك مدرسةٌ', 'هذا مدرسةٌ'],
    correctIndex: 2,
    a: 'مدرسة اسم مؤنث، والمشار إليه بعيد، فالأداة الصحيحة هي تلك (المؤنث البعيد): "تلك مدرسةٌ" = "That is a school."',
  },
  {
    q: 'أيّ من هذه الجمل بها خطأ في مطابقة اسم الإشارة البعيد لجنس المشار إليه؟',
    options: ['ذلك رجلٌ', 'تلك امرأةٌ', 'ذلك سيارةٌ', 'تلك حديقةٌ'],
    correctIndex: 2,
    a: '"ذلك سيارةٌ" خطأ لأن سيارة اسم مؤنث، فيجب استخدام تلك لا ذلك؛ الصواب "تلك سيارةٌ".',
  },
  {
    q: 'ذلك كتابُ زيدٍ — What structure follows the demonstrative ذلك here, and what does it mean?',
    options: [
      'فعل وفاعل — "that wrote Zayd"',
      'تركيب إضافة (كتابُ زيدٍ = "Zayd\'s book") يعمل خبراً للمبتدأ ذلك',
      'جار ومجرور فقط',
      'اسم موصول وصلته',
    ],
    correctIndex: 1,
    a: 'ذلك مبتدأ، وما بعده "كتابُ زيدٍ" تركيب إضافة كامل (مضاف + مضاف إليه) يعمل خبراً للمبتدأ: "ذلك كتابُ زيدٍ" = "That is Zayd\'s book" — اسم الإشارة البعيد يمكن أن يُخبر عنه بإضافة كاملة تماماً كما يُخبر عنه باسم مفرد.',
  },
  {
    q: 'تلك حقيبةُ الطالبةِ — أعرب "تلك" في هذه الجملة.',
    options: ['اسم إشارة مبني في محل رفع مبتدأ', 'فعل ماضٍ مبني', 'حرف عطف', 'اسم إشارة في محل نصب مفعول به'],
    correctIndex: 0,
    a: 'تلك اسم إشارة مبني على السكون في محل رفع مبتدأ، وخبره هو تركيب الإضافة "حقيبةُ الطالبةِ" (حقيبة الطالبة).',
  },
  {
    q: 'مثل هذا وهذه، فإن ذلك وتلك أيضاً ___',
    options: [
      'معربان تتغير حركة آخرهما حسب الموقع الإعرابي',
      'مبنيان لا تتغير حركة آخرهما بتغير الموقع الإعرابي',
      'يُعربان فقط في حالة الرفع',
      'جمعا تكسير لكلمة مفردة',
    ],
    correctIndex: 1,
    a: 'أسماء الإشارة كلها — القريبة (هذا/هذه) والبعيدة (ذلك/تلك) — مبنية، فحركة آخرها ثابتة (السكون هنا) ولا تتغير مهما اختلف موقعها الإعرابي في الجملة.',
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
            Topic 6 of 47
          </p>
          <h1 className="font-serif tracking-[-0.02em] text-3xl font-bold text-foreground leading-tight mb-3">
            <span
              dir="rtl"
              lang="ar"
              style={{ fontFamily: "'Noto Naskh Arabic', serif" }}
              className="mr-2"
            >
              ذلك / تلك
            </span>
            — Ism Ishaara (Far)
          </h1>
          <p className="text-muted-foreground text-base max-w-xl">
            ذلك (masculine) and تلك (feminine) point to something distant, running exactly parallel
            to هذا/هذه — same مبني nature, same مبتدأ/صفة-إشارية roles — only shifted from near to
            far. They combine naturally with an idāfah phrase acting as their خبر, as in{' '}
            <span className="font-medium text-foreground">ذلك كتابُ زيدٍ</span> ("that is Zayd's
            book").
          </p>
        </div>
      </div>
      <div className="mx-auto w-[min(720px,calc(100%-2rem))] py-8">
        <QuizCarousel items={quizItems} />
      </div>
    </main>
  )
}

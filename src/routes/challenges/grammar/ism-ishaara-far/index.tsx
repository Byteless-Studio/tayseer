import { createFileRoute, Link } from '@tanstack/react-router'
import { QuizCarousel } from '#/components/QuizCarousel'
import type { StrictQuizItem } from '#/routes/challenges/-quiz-types'

export const Route = createFileRoute('/challenges/grammar/ism-ishaara-far/')({
  head: () => ({ meta: [{ title: 'Ism Ishaara (Far) — Grammar — Tayseer' }] }),
  component: TopicPage,
})

const quizItems: StrictQuizItem[] = [
  {
    q: 'ما الفرق بين ذلك وتلك؟\nWhat is the difference between ذلك and تلك?',
    options: [
      'ذلك للإشارة إلى البعيد المذكر المفرد، وتلك للإشارة إلى البعيد المؤنث المفرد\nذلك points to something distant and masculine singular, تلك points to something distant and feminine singular',
      'ذلك للقريب، وتلك للبعيد\nذلك is for something near, تلك is for something distant',
      'ذلك للجمع، وتلك للمفرد\nذلك is for the plural, تلك is for the singular',
      'لا فرق بينهما، يستخدمان بالتبادل\nThere is no difference; they are used interchangeably',
    ],
    correctIndex: 0,
    a: 'ذلك اسم إشارة للمفرد المذكر البعيد، وتلك اسم إشارة للمفرد المؤنث البعيد — وهما نظيرا هذا وهذه لكن للإشارة إلى ما هو بعيد عن المتكلم لا قريب منه.\nذلك is the demonstrative for something distant and masculine singular, and تلك is the demonstrative for something distant and feminine singular — they parallel هذا and هذه but point to something far from the speaker rather than near.',
  },
  {
    q: 'ما العلاقة بين ذلك/تلك وهذا/هذه من حيث البنية والوظيفة؟\nHow are ذلك/تلك related to هذا/هذه in structure and function?',
    options: [
      'لا علاقة بينهما إطلاقاً، أدوات مختلفة تماماً في الاستخدام\nThey are completely unrelated — entirely different words in usage',
      'كلاهما يعمل بنفس الطريقة نحوياً (مبتدأ أو صفة إشارية)، والفرق فقط في البعد: هذا/هذه للقريب، ذلك/تلك للبعيد\nBoth work the same way grammatically (as مبتدأ or demonstrative adjective) — the only difference is distance: هذا/هذه for near, ذلك/تلك for far',
      'ذلك/تلك تُستخدمان للأشخاص فقط، وهذا/هذه للأشياء فقط\nذلك/تلك are used only for people, and هذا/هذه only for things',
      'ذلك/تلك مُعربتان، وهذا/هذه مبنيتان\nذلك/تلك are مُعرَب, while هذا/هذه are مبني',
    ],
    correctIndex: 1,
    a: 'ذلك/تلك توازيان هذا/هذه تماماً في الوظيفة النحوية (تعملان مبتدأ أو صفة إشارية)، والفرق الوحيد هو الدلالة على البُعد المكاني (أو المعنوي) بدل القرب.\nذلك/تلك exactly parallel هذا/هذه in grammatical function (both can work as مبتدأ or demonstrative adjective) — the only difference is that they signal spatial (or figurative) distance instead of nearness.',
  },
  {
    q: 'كتابٌ (masc.) بعيد عن المتكلم. أيّ جملة صحيحة للإشارة إليه؟\nكتابٌ (masc.) is far from the speaker. Which sentence correctly points to it?',
    options: [
      'هذا كتابٌ\nhādhā kitābun',
      'تلك كتابٌ\ntilka kitābun',
      'ذلك كتابٌ\ndhālika kitābun — "That is a book"',
      'هذه كتابٌ\nhādhihi kitābun',
    ],
    correctIndex: 2,
    a: 'كتاب اسم مذكر، والمشار إليه بعيد، فالأداة الصحيحة هي ذلك (المذكر البعيد): "ذلك كتابٌ" = "That is a book."\nكتاب is masculine and the referent is distant, so the correct word is ذلك (masculine, distant): "ذلك كتابٌ" = "That is a book."',
  },
  {
    q: 'مدرسةٌ (fem.) بعيدة عن المتكلم. أيّ جملة صحيحة للإشارة إليها؟\nمدرسةٌ (fem.) is far from the speaker. Which sentence correctly points to it?',
    options: [
      'ذلك مدرسةٌ\ndhālika madrasatun',
      'هذه مدرسةٌ\nhādhihi madrasatun',
      'تلك مدرسةٌ\ntilka madrasatun — "That is a school"',
      'هذا مدرسةٌ\nhādhā madrasatun',
    ],
    correctIndex: 2,
    a: 'مدرسة اسم مؤنث، والمشار إليه بعيد، فالأداة الصحيحة هي تلك (المؤنث البعيد): "تلك مدرسةٌ" = "That is a school."\nمدرسة is feminine and the referent is distant, so the correct word is تلك (feminine, distant): "تلك مدرسةٌ" = "That is a school."',
  },
  {
    q: 'أيّ من هذه الجمل بها خطأ في مطابقة اسم الإشارة البعيد لجنس المشار إليه؟\nWhich of these sentences has an error in matching the distant demonstrative to the gender of what it refers to?',
    options: [
      'ذلك رجلٌ\ndhālika rajulun — "That is a man"',
      'تلك امرأةٌ\ntilka imra\'atun — "That is a woman"',
      'ذلك سيارةٌ\ndhālika sayyāratun',
      'تلك حديقةٌ\ntilka ḥadīqatun — "That is a garden"',
    ],
    correctIndex: 2,
    a: '"ذلك سيارةٌ" خطأ لأن سيارة اسم مؤنث، فيجب استخدام تلك لا ذلك؛ الصواب "تلك سيارةٌ".\n"ذلك سيارةٌ" is wrong because سيارة is feminine, so تلك must be used instead of ذلك; the correct form is "تلك سيارةٌ".',
  },
  {
    q: 'ذلك كتابُ زيدٍ — What structure follows the demonstrative ذلك here, and what does it mean?\nذلك كتابُ زيدٍ — what structure follows the demonstrative ذلك here, and what does it mean?',
    options: [
      'فعل وفاعل — "that wrote Zayd"\nA verb and its subject — "that wrote Zayd"',
      'تركيب إضافة (كتابُ زيدٍ = "Zayd\'s book") يعمل خبراً للمبتدأ ذلك\nAn idāfah construction (كتابُ زيدٍ = "Zayd\'s book") functioning as the خبر of the مبتدأ ذلك',
      'جار ومجرور فقط\nJust a preposition and the noun it governs',
      'اسم موصول وصلته\nA relative pronoun (اسم موصول) and its relative clause',
    ],
    correctIndex: 1,
    a: 'ذلك مبتدأ، وما بعده "كتابُ زيدٍ" تركيب إضافة كامل (مضاف + مضاف إليه) يعمل خبراً للمبتدأ: "ذلك كتابُ زيدٍ" = "That is Zayd\'s book" — اسم الإشارة البعيد يمكن أن يُخبر عنه بإضافة كاملة تماماً كما يُخبر عنه باسم مفرد.\nذلك is the مبتدأ, and what follows, "كتابُ زيدٍ," is a complete idāfah (مضاف + مضاف إليه) functioning as the خبر: "ذلك كتابُ زيدٍ" = "That is Zayd\'s book" — a distant demonstrative can take a full idāfah as its خبر, exactly as it can take a single noun.',
  },
  {
    q: 'تلك حقيبةُ الطالبةِ — أعرب "تلك" في هذه الجملة.\nتلك حقيبةُ الطالبةِ ("That is the [female] student\'s bag") — parse "تلك" in this sentence.',
    options: [
      'اسم إشارة مبني في محل رفع مبتدأ\nA demonstrative, مبني, in the position of مرفوع مبتدأ',
      'فعل ماضٍ مبني\nA مبني past-tense verb',
      'حرف عطف\nA conjunction (حرف عطف)',
      'اسم إشارة في محل نصب مفعول به\nA demonstrative in the position of منصوب مفعول به',
    ],
    correctIndex: 0,
    a: 'تلك اسم إشارة مبني على السكون في محل رفع مبتدأ، وخبره هو تركيب الإضافة "حقيبةُ الطالبةِ" (حقيبة الطالبة).\nتلك is a demonstrative, مبني على السكون, in the position of مرفوع مبتدأ, and its خبر is the idāfah construction "حقيبةُ الطالبةِ" ("the student\'s bag").',
  },
  {
    q: 'مثل هذا وهذه، فإن ذلك وتلك أيضاً ___\nLike هذا and هذه, ذلك and تلك are also ___',
    options: [
      'معربان تتغير حركة آخرهما حسب الموقع الإعرابي\nمُعرَب — their ending changes according to grammatical position',
      'مبنيان لا تتغير حركة آخرهما بتغير الموقع الإعرابي\nمبني — their ending never changes with grammatical position',
      'يُعربان فقط في حالة الرفع\nOnly declined (معرب) in the nominative case',
      'جمعا تكسير لكلمة مفردة\nBroken plurals (جمع تكسير) of a singular word',
    ],
    correctIndex: 1,
    a: 'أسماء الإشارة كلها — القريبة (هذا/هذه) والبعيدة (ذلك/تلك) — مبنية، فحركة آخرها ثابتة (السكون هنا) ولا تتغير مهما اختلف موقعها الإعرابي في الجملة.\nAll demonstratives — near (هذا/هذه) and far (ذلك/تلك) — are مبني, so their ending is fixed (سكون here) and never changes regardless of their grammatical position in the sentence.',
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
            Topic 6 of 62
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
            <bdi lang="ar">ذلك</bdi> (masculine) and <bdi lang="ar">تلك</bdi> (feminine) point to something distant, running exactly parallel
            to <bdi lang="ar">هذا/هذه</bdi> — same <bdi lang="ar">مبني</bdi> nature, same <bdi lang="ar">مبتدأ/صفة</bdi>-<bdi lang="ar">إشارية</bdi> roles — only shifted from near to
            far. They combine naturally with an idāfah phrase acting as their <bdi lang="ar">خبر</bdi>, as in{' '}
            <span className="font-medium text-foreground"><bdi lang="ar">ذلك كتابُ زيدٍ</bdi></span> ("that is Zayd's
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

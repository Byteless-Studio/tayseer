import { createFileRoute, Link } from '@tanstack/react-router'
import { QuizCarousel } from '#/components/QuizCarousel'
import type { StrictQuizItem } from '#/routes/challenges/-quiz-types'

export const Route = createFileRoute('/challenges/grammar/masdar-muawwal/')({
  head: () => ({ meta: [{ title: 'The Implied Verbal Noun — Grammar — Tayseer' }] }),
  component: TopicPage,
})

const quizItems: StrictQuizItem[] = [
  {
    q: 'ما المقصود بـ"المصدر المؤول"؟\nWhat is meant by المصدر المؤول (the implied verbal noun)?',
    options: [
      'تركيب من "أنْ" + فعل مضارع، أو "أنّ" + اسمها وخبرها، يُؤوَّل (يُحوَّل) إلى مصدر صريح واحد يقوم مقامه في الجملة\nA construction of أنْ + a present-tense verb, or أنّ + its اسم and خبر, that can be interpreted (converted) as a single explicit مصدر standing in its place in the sentence',
      'اسم علم مؤنث\nA feminine proper noun',
      'فعل ماضٍ مبني للمجهول\nA passive-voice past-tense verb',
      'حرف جر زائد لا معنى له\nAn extra, meaningless preposition',
    ],
    correctIndex: 0,
    a: 'المصدر المؤول تركيب مكوَّن من "أنْ" مع فعلها أو "أنّ" مع اسمها وخبرها، يمكن تأويله بمصدر صريح مفرد يقوم مقامه في الإعراب، مثل "أريد أن أنجحَ" بمعنى "أريد النجاحَ".\nThe implied verbal noun (المصدر المؤول) is a construction made of أنْ with its verb, or أنّ with its اسم and خبر, that can be interpreted as a single explicit مصدر standing in its grammatical place — like أريد أن أنجحَ, meaning أريد النجاحَ ("I want success").',
  },
  {
    q: 'يسرّني أنّ الحقَّ ___ (أكمل بخبر "أنّ"، مرفوع، بمعنى "منتصر")\nyasurrunī anna l-ḥaqqa ___ — "It pleases me that the truth is triumphant" (complete with the nominative خبر of أنّ, meaning "triumphant")',
    options: [
      'منتصرٌ\nmuntaṣirun — nominative (مرفوع)',
      'منتصراً\nmuntaṣiran — accusative form, incorrect here',
      'منتصرٍ\nmuntaṣirin — genitive form, incorrect here',
      'منتصرَ\nmuntaṣira — an incorrect vowel ending',
    ],
    correctIndex: 0,
    a: '"أنّ" تنصب اسمها ("الحقَّ") وترفع خبرها ("منتصرٌ")؛ والجملة كلها (أنّ الحقَّ منتصرٌ) في تأويل مصدر مرفوع فاعل لـ"يسرّني" (بمعنى: يسرّني انتصارُ الحق).\nأنّ makes its اسم (الحقَّ) accusative and keeps its خبر (منتصرٌ) nominative; the whole clause (أنّ الحقَّ منتصرٌ) is interpreted as a nominative مصدر functioning as the subject (فاعل) of يسرّني — meaning يسرّني انتصارُ الحق ("the triumph of the truth pleases me").',
  },
  {
    q: 'أريد ___ في الامتحانِ (اكتب المصدر المؤول الصحيح من "أن" و"أنجح")\nurīdu ___ fī l-imtiḥāni — "I want to succeed in the exam" (write the correct implied verbal noun from أن and أنجح)',
    options: [
      'أن أنجحَ\nan anjaḥa — أن + accusative present-tense verb (correct)',
      'أن أنجحُ\nan anjaḥu — أن + nominative present-tense verb (incorrect)',
      'أنّي أنجحَ\nannī anjaḥa — the wrong particle (أنّي instead of أن)',
      'إنْ أنجحْ\nin anjaḥ — conditional إنْ with a jussive verb, the wrong meaning',
    ],
    correctIndex: 0,
    a: 'يُبنى المصدر المؤول هنا من "أنْ" الناصبة + المضارع المنصوب: "أريد أن أنجحَ" (بمعنى: أريد النجاحَ)، وهو في محل نصب مفعول به.\nThe implied verbal noun here is built from accusative-marking أنْ + the accusative present-tense verb: أريد أن أنجحَ (meaning أريد النجاحَ — "I want success"), and it is in the accusative position as a direct object (مفعول به).',
  },
  {
    q: 'لماذا تُفتح همزة "أنّ" بعد الفعل "علمتُ" في "علمتُ أنّ الجوَّ باردٌ"، بينما تُكسر همزة "إنّ" بعد القول في "قال: إنّ الجوَّ باردٌ"؟\nWhy is the hamza of أنّ pronounced with فتح after the verb علمتُ in علمتُ أنّ الجوَّ باردٌ, while the hamza of إنّ is pronounced with كسر after قال in قال: إنّ الجوَّ باردٌ?',
    options: [
      'لأن "أنّ" المفتوحة بعد "علمتُ" تُؤوَّل مع اسمها وخبرها بمصدر يقع مفعولاً به (علمتُ برودةَ الجو)، أما "إنّ" بعد القول فتُكسر لأنها تفتتح جملة مقول القول المستقلة التي لا تُؤوَّل بمصدر\nBecause فتح-أنّ after علمتُ is interpreted, with its اسم and خبر, as a مصدر functioning as the direct object (علمتُ برودةَ الجو — "I knew of the cold weather"); whereas إنّ after a verb of saying takes كسر because it opens the independent quoted clause, which cannot be interpreted as a مصدر',
      'لا فرق بينهما ويمكن استخدام أيّ منهما في كل موضع\nThere is no difference, and either can be used in any position',
      '"أنّ" المفتوحة تفيد النفي دائماً\nفتح-أنّ always conveys negation',
      '"إنّ" المكسورة هي التي تُؤوَّل دائماً بمصدر\nكسر-إنّ is the one always interpreted as a مصدر',
    ],
    correctIndex: 0,
    a: 'تُفتح "أنّ" حين يصح تأويل ما بعدها مع اسمها وخبرها بمصدر صريح يشغل موقعاً إعرابياً (هنا مفعول به لـ"علمتُ")، بينما تُكسر "إنّ" في بداية جملة مقول القول المستقلة (كما بعد "قال")، لأنها لا تقبل التأويل بمصدر.\nأنّ takes فتح whenever what follows it, together with its اسم and خبر, can validly be interpreted as an explicit مصدر filling a grammatical slot (here, direct object of علمتُ); إنّ takes كسر at the start of an independent quoted clause (as after قال), because it cannot be interpreted as a مصدر.',
  },
  {
    q: 'حوّل "يعجبني اجتهادُ الطالبِ" إلى مصدر مؤول: يعجبني ___ الطالبُ\nConvert يعجبني اجتهادُ الطالبِ ("The diligence of the student pleases me") into an implied verbal noun: يعجبني ___ الطالبُ',
    options: [
      'أن يجتهدَ\nan yajtahida — أن + accusative present-tense verb (correct)',
      'أن يجتهدُ\nan yajtahidu — أن + nominative present-tense verb (incorrect)',
      'أنّ يجتهدَ\nanna yajtahida — the wrong particle (أنّ governs a noun, not a verb, directly)',
      'إنْ يجتهدْ\nin yajtahid — conditional إنْ with a jussive verb, the wrong meaning',
    ],
    correctIndex: 0,
    a: 'يُصاغ المصدر المؤول من "أنْ" (المصدرية الناصبة) + الفعل المضارع منصوباً: "يعجبني أن يجتهدَ الطالبُ" بمعنى "يعجبني اجتهادُ الطالب".\nThe implied verbal noun is formed from أنْ (المصدرية, accusative-marking) + the present-tense verb, accusative: يعجبني أن يجتهدَ الطالبُ, meaning يعجبني اجتهادُ الطالب ("the diligence of the student pleases me").',
  },
  {
    q: '"أنْ" المصدرية تدخل على الفعل الماضي أيضاً، كما في "سافرتُ بعد أن أنهيتُ عملي". فهل يظهر عليها أثر النصب حينئذٍ؟\nأنْ المصدرية can also govern a past-tense verb, as in سافرتُ بعد أن أنهيتُ عملي ("I traveled after I finished my work"). Does the effect of نصب show on the verb in that case?',
    options: [
      'لا، لأن الفعل الماضي مبني دائماً فلا يظهر عليه أثر النصب، لكن المصدر المؤول ذاته (أنْ + الفعل الماضي) لا يزال يشغل محلاً إعرابياً كمصدر\nNo — the past-tense verb is always built (مبني), so the effect of نصب does not show on it, but the implied verbal noun itself (أنْ + the past-tense verb) still occupies a grammatical position as a مصدر',
      'نعم، يظهر النصب بالفتحة دائماً على الفعل الماضي\nYes, نصب always shows as a فتحة on the past-tense verb',
      'يُجزم الفعل الماضي بعد "أنْ"\nThe past-tense verb becomes jussive after أنْ',
      'لا يجوز دخول "أنْ" على الفعل الماضي إطلاقاً\nأنْ can never govern a past-tense verb at all',
    ],
    correctIndex: 0,
    a: '"أنْ" المصدرية تدخل على الماضي والمضارع، لكنها تنصب المضارع لفظاً، أما الماضي فمبني دائماً فلا يظهر عليه أثر النصب؛ ويبقى المصدر المؤول (بعد أن أنهيتُ) في محل جر مضاف إليه لـ"بعد".\nأنْ المصدرية governs both past and present-tense verbs, but it only makes the present tense visibly accusative; the past tense is always built (مبني), so the effect of نصب does not show on it. The implied verbal noun (بعد أن أنهيتُ) still sits in the genitive position as the مضاف إليه of بعد.',
  },
  {
    q: 'أيّ الجمل التالية بها خطأ في نصب المصدر المؤول؟\nWhich of the following sentences has an error in the نصب of the implied verbal noun?',
    options: [
      'أريدُ أن أسافرَ غداً\nurīdu an usāfira ghadan — "I want to travel tomorrow"',
      'أظنُّ أنّ الامتحانَ سهلٌ\naẓunnu anna l-imtiḥāna sahlun — "I think the exam is easy"',
      'أريدُ أن أسافرُ غداً\nurīdu an usāfiru ghadan',
      'يجب أن تدرسَ جيداً\nyajibu an tadrusa jayyidan — "You must study well"',
    ],
    correctIndex: 2,
    a: 'الجملة الثالثة خطأ لأن "أنْ" المصدرية الناصبة توجب نصب الفعل المضارع بعدها، فالصواب "أريدُ أن أسافرَ غداً" لا "أسافرُ" بالرفع.\nThe third sentence is wrong because accusative-marking أنْ المصدرية requires the present-tense verb after it to be accusative; the correct form is أريدُ أن أسافرَ غداً, not the nominative أسافرُ.',
  },
  {
    q: 'أيّ الجمل التالية بها خطأ في نصب اسم "أنّ" داخل المصدر المؤول؟\nWhich of the following sentences has an error in the نصب of the اسم of أنّ within the implied verbal noun?',
    options: [
      'تفاجأتُ من أنّ النتيجةَ ممتازةٌ\ntafājaʾtu min anna n-natījata mumtāzatun — "I was surprised that the result is excellent"',
      'يسرّني أنّ الحقَّ منتصرٌ\nyasurrunī anna l-ḥaqqa muntaṣirun — "It pleases me that the truth is triumphant"',
      'سافرتُ بعد أن أنهيتُ عملي\nsāfartu baʿda an anhaytu ʿamalī — "I traveled after I finished my work"',
      'تفاجأتُ من أنّ النتيجةُ ممتازةٌ\ntafājaʾtu min anna n-natījatu mumtāzatun',
    ],
    correctIndex: 3,
    a: 'الجملة الرابعة خطأ لأن "أنّ" تنصب اسمها، فالصواب "أنّ النتيجةَ ممتازةٌ" بنصب "النتيجةَ" لا رفعها "النتيجةُ".\nThe fourth sentence is wrong because أنّ makes its اسم accusative; the correct form is أنّ النتيجةَ ممتازةٌ with النتيجةَ accusative, not nominative النتيجةُ.',
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
            Topic 42 of 47
          </p>
          <h1 className="font-serif tracking-[-0.02em] text-3xl font-bold text-foreground leading-tight mb-3">
            <span
              dir="rtl"
              lang="ar"
              style={{ fontFamily: "'Noto Naskh Arabic', serif" }}
              className="mr-2"
            >
              المصدر المؤول
            </span>
            — The Implied Verbal Noun
          </h1>
          <p className="text-muted-foreground text-base max-w-xl">
            أنْ + a مضارع verb (or أنّ + its اسم and خبر) forms a single implied مصدر that fills
            one grammatical slot in the sentence — subject, object, or the object of a
            preposition. Common after أريد أن..., أظنّ أنّ..., يسرّني أنّ...: أريد أن أنجحَ =
            أريد النجاحَ. أنّ (فتح) is used exactly where this مصدر تأويل is possible (after
            verbs like علمتُ، أظنّ); إنّ (كسر) is not — it opens an independent quoted clause,
            as after القول, and never forms a مصدر مؤول.
          </p>
        </div>
      </div>
      <div className="mx-auto w-[min(720px,calc(100%-2rem))] py-8">
        <QuizCarousel items={quizItems} />
      </div>
    </main>
  )
}

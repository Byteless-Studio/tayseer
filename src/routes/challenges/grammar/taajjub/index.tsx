import { createFileRoute, Link } from '@tanstack/react-router'
import { QuizCarousel } from '#/components/QuizCarousel'
import type { StrictQuizItem } from '#/routes/challenges/-quiz-types'

export const Route = createFileRoute('/challenges/grammar/taajjub/')({
  head: () => ({ meta: [{ title: "Ta'ajjub — Grammar — Tayseer" }] }),
  component: TopicPage,
})

const quizItems: StrictQuizItem[] = [
  {
    q: 'في جملة "ما أجملَ السماءَ!" ما إعراب "ما"؟\nIn the sentence ما أجملَ السماءَ! ("How beautiful the sky is!"), what is the grammatical role of ما?',
    options: [
      'اسم استفهام مبني في محل نصب مفعول به\nAn interrogative noun (اسم استفهام), built (مبني), in the accusative position as a direct object',
      'اسم نكرة تام بمعنى "شيء عظيم"، مبني في محل رفع مبتدأ\nA complete indefinite noun (اسم نكرة تام) meaning "something great," built (مبني), in the nominative position as the subject (مبتدأ)',
      'حرف نفي لا محل له من الإعراب\nA negative particle (حرف نفي) with no grammatical position',
      'اسم موصول مبني في محل رفع فاعل\nA relative pronoun (اسم موصول), built (مبني), in the nominative position as the subject of the verb (فاعل)',
    ],
    correctIndex: 1,
    a: '"ما" في صيغة التعجب "ما أفعلَه" اسم نكرة تام بمعنى "شيء عظيم"، مبني على السكون في محل رفع مبتدأ، وجملة "أجملَ السماءَ" بعده في محل رفع خبر.\nIn the exclamation pattern ما أفعلَه, ما is a complete indefinite noun (اسم نكرة تام) meaning "something great," built on سكون, in the nominative position as the subject (مبتدأ). The clause أجملَ السماءَ that follows is in the nominative position as its predicate (خبر).',
  },
  {
    q: 'ما نوع الفعل "أجملَ" في هذا التركيب، وهل يتصرف؟\nWhat kind of verb is أجملَ in this construction, and is it inflected across tenses?',
    options: [
      'فعل ماضٍ متصرف عادي\nAn ordinary, fully-inflected past-tense verb',
      'فعل ماضٍ جامد على وزن "أفعل" ثابت الصيغة لا يتصرف، خاص بصيغة التعجب\nA frozen (جامد) past-tense verb on the وزن "أفعل," fixed in form and uninflected — specific to the exclamation pattern',
      'فعل أمر\nAn imperative verb (فعل أمر)',
      'اسم فعل\nA pseudo-verb noun (اسم فعل)',
    ],
    correctIndex: 1,
    a: '"أجملَ" في صيغة التعجب فعل ماضٍ جامد لا يتصرف (لا يأتي منه مضارع ولا أمر بهذا المعنى)، وهو ثابت على وزن "أفعل" دائماً بصرف النظر عن الفاعل.\nIn the exclamation pattern, أجملَ is a frozen (جامد) past-tense verb — it has no present-tense or imperative form with this meaning — and it always stays fixed on the وزن "أفعل," regardless of who the subject is.',
  },
  {
    q: 'ما إعراب "السماءَ" في "ما أجملَ السماءَ!"؟\nWhat is the grammatical case of السماءَ in ما أجملَ السماءَ!?',
    options: [
      'فاعل مرفوع\nSubject (فاعل), nominative (مرفوع)',
      'مفعول به منصوب\nDirect object (مفعول به), accusative (منصوب)',
      'مضاف إليه مجرور\nمضاف إليه, genitive (مجرور)',
      'خبر مرفوع\nPredicate (خبر), nominative (مرفوع)',
    ],
    correctIndex: 1,
    a: '"السماءَ" مفعول به منصوب لفعل التعجب "أجملَ"، والفاعل ضمير مستتر تقديره "هو" يعود على "ما".\nالسماءَ is the direct object (مفعول به), accusative, of the exclamation verb أجملَ. Its subject is a hidden pronoun (ضمير مستتر) understood as هو, referring back to ما.',
  },
  {
    q: '___ أحسنَ الطالبَ! (صيغة التعجب القياسية)\n___ aḥsana ṭ-ṭāliba! — fill in the standard exclamation particle: "How excellent the student is!"',
    options: [
      'ما\nmā — the standard exclamation particle',
      'من\nman — "who" (relative/interrogative pronoun)',
      'كيف\nkayfa — "how" (interrogative adverb)',
      'أين\nayna — "where" (interrogative adverb)',
    ],
    correctIndex: 0,
    a: 'صيغة التعجب القياسية تبدأ بـ"ما" التعجبية: "ما أحسنَ الطالبَ!".\nThe standard exclamation pattern begins with the exclamatory ما: ما أحسنَ الطالبَ! — "How excellent the student is!"',
  },
  {
    q: 'أكرِمْ ___ محمدٍ! (الصيغة الثانية للتعجب)\nakrim ___ Muḥammadin! — fill in the particle for the second exclamation pattern',
    options: [
      'بـ\nbi — the particle this pattern uses',
      'لـ\nli — "for/to" (preposition)',
      'من\nmin — "from" (preposition)',
      'إلى\nilā — "to" (preposition)',
    ],
    correctIndex: 0,
    a: 'الصيغة الثانية للتعجب هي "أَفْعِلْ بِه" وتُبنى بفعل أمر جامد متصل بباء زائدة تجرّ الفاعل لفظاً: "أكرِمْ بمحمدٍ!" وأصل المعنى "ما أكرمَ محمداً!".\nThe second exclamation pattern is أَفْعِلْ بِه: a frozen imperative verb joined to an extra ب that marks the subject مجرور in form only: أكرِمْ بمحمدٍ! — meaning, at root, ما أكرمَ محمداً! ("How generous Muhammad is!").',
  },
  {
    q: 'في "أكرِمْ بمحمدٍ!" ما إعراب "محمدٍ" رغم أنه مجرور لفظاً بالباء؟\nIn أكرِمْ بمحمدٍ!, what is the grammatical role of محمدٍ, despite being marked مجرور in form by the ب?',
    options: [
      'مجرور لفظاً، لكنه فاعل مرفوع محلاً\nمجرور in form (because of the ب), but functioning as the subject (فاعل) — nominative in position (مرفوع محلاً)',
      'مفعول به منصوب\nDirect object (مفعول به), accusative (منصوب)',
      'مبتدأ مرفوع\nSubject of a nominal sentence (مبتدأ), nominative (مرفوع)',
      'بدل مجرور\nAn appositive (بدل), genitive (مجرور)',
    ],
    correctIndex: 0,
    a: '"محمدٍ" في هذه الصيغة فاعل لفعل "أكرِمْ" مرفوع محلاً، لكنه مجرور لفظاً بالباء الزائدة التي دخلت على الفاعل لتوكيد معنى التعجب.\nIn this pattern, محمدٍ is the subject (فاعل) of the verb أكرِمْ — nominative in position (مرفوع محلاً) — but مجرور in form because of the extra ب attached to the subject to emphasize the sense of exclamation.',
  },
  {
    q: 'أيّ من هذه الجمل بها خطأ نحوي في صيغة التعجب؟\nWhich of these sentences has a grammatical error in its exclamation pattern?',
    options: [
      'ما أجملَ الحديقةَ!\nmā ajmala l-ḥadīqata! — "How beautiful the garden is!"',
      'ما أجملُ الحديقةَ!\nmā ajmalu l-ḥadīqata!',
      'ما أروعَ المنظرَ!\nmā rawʿa l-manẓara! — "How wonderful the view is!"',
      'أحسِنْ بأخلاقِه!\naḥsin bi-akhlāqihi! — "How excellent his character is!"',
    ],
    correctIndex: 1,
    a: '"أفعل" في صيغة التعجب فعل ماضٍ جامد مبني على الفتح دائماً، فلا يجوز ضمه: الصواب "ما أجملَ الحديقةَ!" لا "أجملُ".\nThe أفعل of the exclamation pattern is a frozen past-tense verb, always built on فتح — it can never take ضم. The correct form is ما أجملَ الحديقةَ!, not أجملُ.',
  },
  {
    q: 'كيف نفرّق بين "أفعل" التعجب و"أفعل" التفضيل شكلاً ووظيفةً؟\nHow do we distinguish أفعل of exclamation from أفعل of comparison (تفضيل), in form and function?',
    options: [
      'لا فرق بينهما مطلقاً في الإعراب والوظيفة\nThere is no difference at all between them in grammar or function',
      '"أفعل" التعجب فعل ماضٍ جامد يقع بعد "ما" ويتبعه مفعول به منصوب، بينما "أفعل" التفضيل اسم يقارن بين شيئين وقد يُضاف أو يُسبق بـ"من"\nThe exclamation أفعل is a frozen past-tense verb that follows ما and takes a direct object after it; the comparative أفعل is a noun that compares two things and may be مضاف or preceded by من',
      'كلاهما اسم دائماً\nBoth are always nouns',
      'كلاهما فعل دائماً\nBoth are always verbs',
    ],
    correctIndex: 1,
    a: 'كلا التركيبين يشتقان من وزن "أفعل" لكن التعجب فعل ماضٍ جامد يأتي بعد "ما" ويليه مفعول به منصوب ("ما أجملَ السماءَ")، بينما أفعل التفضيل اسم/صفة تفيد المقارنة وتُضاف لاسم بعدها أو تُسبق بـ"من" ("محمدٌ أجملُ من أخيه").\nBoth constructions are built on the وزن أفعل, but the exclamation form is a frozen past-tense verb that follows ما and takes a direct object after it (ما أجملَ السماءَ), while the comparative أفعل is a noun/adjective expressing comparison, either مضاف to a following noun or preceded by من (محمدٌ أجملُ من أخيه — "Muhammad is more handsome than his brother").',
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
            Topic 22 of 47
          </p>
          <h1 className="font-serif tracking-[-0.02em] text-3xl font-bold text-foreground leading-tight mb-3">
            <span
              dir="rtl"
              lang="ar"
              style={{ fontFamily: "'Noto Naskh Arabic', serif" }}
              className="mr-2"
            >
              التعجب
            </span>
            — Ta'ajjub
          </h1>
          <p className="text-muted-foreground text-base max-w-xl">
            The main pattern of wonder/exclamation is{' '}
            <span className="font-medium text-foreground"><bdi lang="ar">ما أَفْعَلَه</bdi>!</span> ("how ...!"), as in
            <bdi lang="ar">ما أجملَ السماءَ</bdi>! ("How beautiful the sky is!"). <bdi lang="ar">ما</bdi> is a <bdi lang="ar">مبتدأ</bdi> (<bdi lang="ar">مبني</bdi>), <bdi lang="ar">أفعل</bdi> is a fixed
            verb, and the following noun is <bdi lang="ar">مفعول به منصوب</bdi>. A secondary pattern is <bdi lang="ar">أَفْعِلْ بِه</bdi>!.
          </p>
        </div>
      </div>
      <div className="mx-auto w-[min(720px,calc(100%-2rem))] py-8">
        <QuizCarousel items={quizItems} />
      </div>
    </main>
  )
}

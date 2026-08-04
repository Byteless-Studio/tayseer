import { createFileRoute, Link } from '@tanstack/react-router'
import { QuizCarousel } from '#/components/QuizCarousel'
import type { StrictQuizItem } from '#/routes/challenges/-quiz-types'

export const Route = createFileRoute('/challenges/grammar/negation-of-past/')({
  head: () => ({ meta: [{ title: 'Negation of the Past — Grammar — Tayseer' }] }),
  component: TopicPage,
})

const quizItems: StrictQuizItem[] = [
  {
    q: 'كيف تُنفى الجملة الماضية بأبسط طريقة باستخدام "ما"؟\nWhat is the simplest way to negate a past-tense sentence, using ما?',
    options: [
      'ما + فعل مضارع\nما + present-tense verb',
      'ما + فعل ماضٍ، ويبقى الفعل على صيغته الماضية دون تغيير\nما + past-tense verb, with the verb kept unchanged in its past form',
      'ما + اسم منصوب\nما + accusative noun',
      'ما + فعل أمر\nما + imperative verb',
    ],
    correctIndex: 1,
    a: '"ما" النافية تدخل على الفعل الماضي دون تغيير صيغته: "ما كتبَ" = "he did not write"، وهي أبسط أداة لنفي الماضي.\nNegating ما attaches to the past-tense verb without changing its form: ما كتبَ = "he did not write" — it is the simplest tool for negating the past.',
  },
  {
    q: 'ما الصيغة الصحيحة لفعل "كتب" في المضارع المجزوم بعد "لم"؟\nWhat is the correct form of كتب in the jussive present tense after لم?',
    options: [
      'يكتبُ (مرفوع)\nyaktubu (مرفوع — indicative)',
      'يكتبَ (منصوب)\nyaktuba (منصوب — subjunctive)',
      'يكتبْ (مجزوم)\nyaktub (مجزوم — jussive)',
      'كتبَ (ماضٍ)\nkataba (ماضٍ — past tense)',
    ],
    correctIndex: 2,
    a: 'بعد "لم" يُجزم الفعل المضارع بحذف حركة الإعراب: "لم يكتبْ" — لا يُرفع (يكتبُ) ولا يُنصب (يكتبَ) ولا يبقى ماضياً (كتبَ).\nAfter لم the present-tense verb is jussive (مجزوم), dropping its case ending: لم يكتبْ ("he did not write") — never indicative (يكتبُ), subjunctive (يكتبَ), or left in the past form (كتبَ).',
  },
  {
    q: 'هل تدخل "ما" و"لم" على نفس نوع الفعل عند نفي الماضي؟\nDo ما and لم attach to the same type of verb when negating the past?',
    options: [
      'نعم، كلتاهما تدخل على الفعل الماضي بصيغته دون تغيير\nYes, both attach to the past-tense verb unchanged',
      '"ما" تدخل على الماضي كما هو، بينما "لم" تدخل على المضارع فتجزمه رغم أن المعنى الناتج ماضٍ\nما attaches to the past verb as-is, while لم attaches to the present and makes it jussive, even though the resulting meaning is past',
      '"لم" تدخل على فعل الأمر فقط\nلم only attaches to the imperative verb',
      '"ما" تدخل على المضارع المنصوب فقط\nما only attaches to the subjunctive present',
    ],
    correctIndex: 1,
    a: '"ما" تدخل على الفعل الماضي مباشرة دون تغيير في صيغته، أما "لم" فتدخل على الفعل المضارع وتجزمه، رغم أن المعنى الناتج في الحالتين هو نفي وقوع الفعل في الماضي.\nما attaches directly to the past-tense verb without changing its form, while لم attaches to the present-tense verb and makes it jussive — yet in both cases the resulting meaning is a denial that the action happened in the past.',
  },
  {
    q: 'أكمل: ما ___ الولدُ إلى المدرسةِ (نفي "ذهب" بأسلوب "ما")\nComplete: ما ___ الولدُ إلى المدرسةِ (negating ذهب with ما)',
    options: [
      'يذهبْ\nyadhhab (jussive present',
      'ذهبَ\ndhahaba — he went',
      'يذهبُ\nyadhhabu (indicative present)',
      'اذهبْ\nidhhab (imperative — go!)',
    ],
    correctIndex: 1,
    a: 'بعد "ما" النافية يبقى الفعل على صيغته الماضية كما هو: "ما ذهبَ الولدُ إلى المدرسةِ" (the boy did not go to school).\nAfter negating ما the verb stays in its past form unchanged: ما ذهبَ الولدُ إلى المدرسةِ ("the boy did not go to school").',
  },
  {
    q: 'أي من الجمل التالية بها خطأ في استخدام "لم"؟\nWhich of the following sentences has an error in its use of لم?',
    options: [
      'لم يذهبْ الولدُ\nlam yadhhab al-waladu — the boy did not go',
      'لم ذهبَ الولدُ\nlam dhahaba al-waladu (as written',
      'لم يكتبْ الطالبُ\nlam yaktub aṭ-ṭālibu — the student did not write',
      'لم يشربْ الطفلُ\nlam yashrab aṭ-ṭiflu — the child did not drink',
    ],
    correctIndex: 1,
    a: '"لم ذهبَ الولدُ" خطأ لأن "لم" تدخل على المضارع المجزوم لا على الماضي مباشرة؛ الصواب "لم يذهبْ الولدُ" بتحويل الفعل إلى صيغة المضارع المجزوم.\n"لم ذهبَ الولدُ" is wrong because لم attaches to the jussive present, not directly to the past; the correct form is لم يذهبْ الولدُ, converting the verb to the jussive present.',
  },
  {
    q: 'أي أداتين تُستخدمان لنفي الفعل الماضي في العربية؟\nWhich two particles are used to negate the past-tense verb in Arabic?',
    options: [
      'لن ولا\nلن and لا',
      'ما ولم\nما and لم',
      'لا الناهية ولن\nلا الناهية (prohibitive) and لن',
      'إن ولو\nإن and لو',
    ],
    correctIndex: 1,
    a: 'تُستخدم "ما" و"لم" لنفي الفعل الماضي: "ما" تدخل على الماضي مباشرة، و"لم" تدخل على المضارع فتجزمه وتحوّل معناه إلى نفي وقوع الفعل في الماضي.\nما and لم are used to negate the past-tense verb: ما attaches directly to the past, while لم attaches to the present, making it jussive and shifting its meaning to a denial that the action happened in the past.',
  },
  {
    q: 'عند نفي "شرب الطفلُ الحليبَ" بأسلوب "لم"، ما الصيغة الصحيحة؟\nWhen negating شرب الطفلُ الحليبَ with لم, what is the correct form?',
    options: [
      'لم شرب الطفلُ الحليبَ\nlam shariba aṭ-ṭiflu al-ḥalība (as written',
      'لم يشربُ الطفلُ الحليبَ\nlam yashrabu aṭ-ṭiflu al-ḥalība (indicative',
      'لم يشربْ الطفلُ الحليبَ\nlam yashrab aṭ-ṭiflu al-ḥalība — the child did not drink the milk',
      'لم يشربَ الطفلُ الحليبَ\nlam yashraba aṭ-ṭiflu al-ḥalība (subjunctive',
    ],
    correctIndex: 2,
    a: 'الصواب "لم يشربْ الطفلُ الحليبَ": يتحول الفعل الماضي "شربَ" إلى المضارع المجزوم "يشربْ" بعد دخول أداة الجزم "لم".\nThe correct form is لم يشربْ الطفلُ الحليبَ: the past verb شربَ converts to the jussive present يشربْ once the jussive particle لم attaches.',
  },
  {
    q: 'لماذا لا يجوز أن يُقال "لم كتبَ الطالبُ" لنفي "كتبَ الطالبُ الدرسَ"؟\nWhy is it not correct to say لم كتبَ الطالبُ to negate كتبَ الطالبُ الدرسَ?',
    options: [
      'لأن "لم" لا تدخل إلا على أفعال الأمر\nBecause لم only attaches to imperative verbs',
      'لأن "لم" أداة جزم تختص بالدخول على الفعل المضارع، لا على الفعل الماضي مباشرة\nBecause لم is a jussive particle that specifically attaches to the present-tense verb, not directly to the past',
      'لأن "لم" لا تفيد النفي أصلاً\nBecause لم does not convey negation at all',
      'لأنه تركيب صحيح لا خطأ فيه\nBecause it is actually a correct construction with no error',
    ],
    correctIndex: 1,
    a: '"لم" أداة جزم تدخل حصراً على الفعل المضارع فتجزمه؛ فلا يصح إدخالها على الفعل الماضي كما هو، بل يجب أولاً تحويل الفعل إلى صورته المضارعة ثم جزمه: "لم يكتبْ الطالبُ الدرسَ".\nلم is a jussive particle that attaches exclusively to the present-tense verb, making it jussive; it cannot attach to the past-tense verb as-is. The verb must first be converted to its present form and then made jussive: لم يكتبْ الطالبُ الدرسَ.',
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
            Topic 31 of 47
          </p>
          <h1 className="font-serif tracking-[-0.02em] text-3xl font-bold text-foreground leading-tight mb-3">
            <span
              dir="rtl"
              lang="ar"
              style={{ fontFamily: "'Noto Naskh Arabic', serif" }}
              className="mr-2"
            >
              نفي الماضي
            </span>
            — Negation of the Past
          </h1>
          <p className="text-muted-foreground text-base max-w-xl">
            The past tense can be negated two ways. The simple form is{' '}
            <span className="font-medium text-foreground"><bdi lang="ar">ما</bdi></span> + <bdi lang="ar">فعل ماضٍ</bdi> (<bdi lang="ar">ما كتبَ</bdi> = "he did
            not write"), with the verb unchanged. The other is{' '}
            <span className="font-medium text-foreground"><bdi lang="ar">لم</bdi></span> + <bdi lang="ar">فعل مضارع مجزوم</bdi> (<bdi lang="ar">لم يكتبْ</bdi>) —
            critically, <bdi lang="ar">لم</bdi> requires the PRESENT-tense verb in the jussive (<bdi lang="ar">مجزوم</bdi>) form, not the
            <bdi lang="ar">ماضي</bdi> verb itself.
          </p>
        </div>
      </div>
      <div className="mx-auto w-[min(720px,calc(100%-2rem))] py-8">
        <QuizCarousel items={quizItems} />
      </div>
    </main>
  )
}

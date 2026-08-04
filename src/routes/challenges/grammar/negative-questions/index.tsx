import { createFileRoute, Link } from '@tanstack/react-router'
import { QuizCarousel } from '#/components/QuizCarousel'
import type { StrictQuizItem } from '#/routes/challenges/-quiz-types'

export const Route = createFileRoute('/challenges/grammar/negative-questions/')({
  head: () => ({ meta: [{ title: 'Negative Questions & How to Answer Them — Grammar — Tayseer' }] }),
  component: TopicPage,
})

const quizItems: StrictQuizItem[] = [
  {
    q: 'كيف تُصاغ الأسئلة المنفية في العربية؟\nHow are negative questions formed in Arabic?',
    options: [
      'بإدخال همزة الاستفهام "أ" على أداة نفي مثل "لا" أو على الفعل الناقص "ليس": "ألا تحبُّ القراءةَ؟"، "ألستَ مسافراً؟"\nBy adding the interrogative همزة أ before a negation particle like لا or before the deficient verb ليس: "ألا تحبُّ القراءةَ؟" ("Don\'t you love reading?"), "ألستَ مسافراً؟" ("Aren\'t you traveling?").',
      'بحذف الفعل من الجملة تماماً\nBy dropping the verb from the sentence entirely',
      'باستخدام "هل" فقط دون أي أداة نفي\nBy using هل alone, with no negation particle at all',
      'بتكرار الفعل مرتين\nBy repeating the verb twice',
    ],
    correctIndex: 0,
    a: 'تُصاغ الأسئلة المنفية بإدخال همزة الاستفهام "أ" على أداة نفي مثل "لا" أو على الفعل الناقص "ليس": "ألا تحبُّ القراءةَ؟"، "ألستَ مسافراً؟".\nNegative questions are formed by adding the interrogative همزة أ before a negation particle like لا or before the deficient verb ليس: "ألا تحبُّ القراءةَ؟" ("Don\'t you love reading?"), "ألستَ مسافراً؟" ("Aren\'t you traveling?").',
  },
  {
    q: 'إذا سُئلتَ: "ألستَ مسافراً؟" وكنتَ بالفعل مسافراً (أي أن الحقيقة تخالف النفي الوارد في السؤال)، فبأيّ كلمة تُجيب؟\nIf you\'re asked "ألستَ مسافراً؟" ("Aren\'t you traveling?") and you actually are traveling (i.e., the truth contradicts the negation in the question), which word do you answer with?',
    options: [
      'بلى (لأنها تُستخدم لتكذيب النفي الوارد في السؤال وإثبات عكسه: بلى أنا مسافرٌ)\nبلى (because it\'s used to contradict the negation in the question and assert the opposite: "بلى, أنا مسافرٌ" — "Yes I am, I\'m traveling.")',
      'نعم (لأنها تؤكد النفي فتعني أنك لست مسافراً)\nنعم (because it confirms the negation, meaning you are not traveling)',
      'كلتاهما بمعنى واحد ولا فرق بينهما\nBoth mean the same thing, with no difference between them',
      'لا يصح الجواب إلا بجملة كاملة منفية\nThe only valid answer is a full negative sentence',
    ],
    correctIndex: 0,
    a: '"بلى" هي الأداة الخاصة بالرد على سؤال منفٍ لتكذيب النفي وإثبات عكسه: فإذا قيل "ألستَ مسافراً؟" وكنتَ مسافراً فعلاً، تقول "بلى" (بمعنى: بل أنا مسافرٌ).\nبلى is the specific word used to answer a negative question by contradicting the negation and asserting the opposite: if asked "ألستَ مسافراً؟" and you truly are traveling, you say "بلى" (meaning: "on the contrary, I am traveling").',
  },
  {
    q: 'أَلَمْ تُخبِرْني بالحقيقةِ؟ / والجواب يثبت أنه أخبرك فعلاً (تكذيب للنفي): ___، أخبرتُك\nأَلَمْ تُخبِرْني بالحقيقةِ؟ ("Didn\'t you tell me the truth?") — the answer confirms he did tell you (contradicting the negation): ___, أخبرتُك',
    options: [
      'بلى\nbalā — contradicts the negation, asserts the opposite',
      'نعم\nnaʿam — confirms the negation as worded',
      'لا\nlā — "no" (not the answer word for this context)',
      'كلا\nkallā — "certainly not" (not the answer word for this context)',
    ],
    correctIndex: 0,
    a: 'السؤال منفيّ بـ"لم"، والجواب يثبت عكس النفي (أي أنه أخبره فعلاً)، فتجب استخدام "بلى" لتكذيب النفي الوارد في السؤال.\nThe question is negated with لم, and the answer confirms the opposite of that negation (that he did in fact tell him), so بلى must be used to contradict the negation in the question.',
  },
  {
    q: 'أيّ الحوارات التالية بها خطأ في استخدام أداة الجواب مع سؤال مثبت (غير منفي)؟\nWhich of the following exchanges has an error in the answer word used with a positive (non-negative) question?',
    options: [
      'هل حضرتَ الاجتماعَ؟ — نعم، حضرتُ\nDid you attend the meeting? — Yes, I attended',
      'هل أنتَ طالبٌ؟ — نعم أنا طالبٌ\nAre you a student? — Yes, I am a student',
      'أتحبُّ القراءةَ؟ — نعم أحبها\nDo you love reading? — Yes, I love it',
      'هل سافرتَ أمس؟ — بلى، سافرتُ\nبلى only answers negative questions; this question is positive, so it should be نعم',
    ],
    correctIndex: 3,
    a: 'الحوار الرابع خاطئ لأن "بلى" لا تُستخدم إلا رداً على سؤال منفٍ لتكذيب نفيه، أما هذا السؤال ("هل سافرتَ أمس؟") فمثبت غير منفيّ، فيجب الرد بـ"نعم": "نعم، سافرتُ".\nThe fourth exchange is wrong because بلى is used only to answer a negative question by contradicting its negation, but this question (هل سافرتَ أمس؟) is positive, not negative, so the answer must be نعم: "نعم، سافرتُ."',
  },
  {
    q: 'إذا سُئلتَ: "ألم تَنَمْ جيداً؟" وأجبتَ بـ"نعم"، فما الذي تُقرّه؟\nIf asked "ألم تَنَمْ جيداً؟" ("Didn\'t you sleep well?") and you answer with نعم, what are you confirming?',
    options: [
      'تُقرّ بمضمون السؤال كما وَرَد بنفيه، أي أنك لم تنمْ جيداً\nYou\'re confirming the content of the question exactly as worded, with its negation — meaning that you did not sleep well.',
      'تنفي النفي وتُثبت أنك نمتَ جيداً\nYou\'re negating the negation and asserting that you did sleep well',
      'لا معنى محدداً لهذا الجواب\nThis answer has no specific meaning',
      'تطلب إعادة السؤال\nYou\'re asking for the question to be repeated',
    ],
    correctIndex: 0,
    a: '"نعم" تُصدّق مضمون السؤال كما وَرَد، فإن كان السؤال منفياً ("ألم تنمْ؟") فإن "نعم" تعني تصديق ذلك النفي (أي: نعم، لم أنمْ جيداً)؛ ولإثبات عكس النفي وجب استخدام "بلى" بدلاً منها.\nنعم confirms the content of the question exactly as it was worded; if the question is negative (ألم تنمْ؟), then نعم means confirming that negation (i.e., "yes, I did not sleep well"). To assert the opposite of the negation, بلى must be used instead.',
  },
  {
    q: 'أيّ الحوارات التالية بها خطأ في استخدام أداة الجواب مع سؤال منفٍ؟\nWhich of the following exchanges has an error in the answer word used with a negative question?',
    options: [
      'أَلستَ طالباً؟ — بلى أنا طالبٌ\nAren\'t you a student? — Yes I am, I\'m a student',
      'هل أنتَ طالبٌ؟ — نعم أنا طالبٌ\nAre you a student? — Yes, I am a student',
      'أَلَمْ تحضرْ الدرسَ؟ — بلى، حضرتُه\nDidn\'t you attend the lesson? — Yes I did, I attended it',
      'أَلستَ مخطئاً؟ — نعم، أنا مخطئٌ\nthe speaker asserts he IS mistaken, contradicting the negation, so بلى is needed, not نعم',
    ],
    correctIndex: 3,
    a: 'الحوار الرابع خاطئ؛ فالمتحدث يثبت أنه مخطئ، أي يكذّب النفي الوارد في السؤال ("ألستَ مخطئاً؟")، فيجب أن يستخدم "بلى" لا "نعم": الصواب "بلى، أنا مخطئٌ".\nThe fourth exchange is wrong: the speaker is asserting that he is mistaken, which contradicts the negation in the question (ألستَ مخطئاً؟), so he must use بلى, not نعم: the correct answer is "بلى، أنا مخطئٌ."',
  },
  {
    q: 'أَلا تعرفُ الجوابَ؟ (وأنت في الحقيقة تعرفه) — الجواب الصحيح: ___، أعرفه\nأَلا تعرفُ الجوابَ؟ ("Don\'t you know the answer?") — and you actually do know it — the correct answer: ___, أعرفه',
    options: [
      'بلى\nbalā — contradicts the negation, asserts the opposite',
      'نعم\nnaʿam — confirms the negation as worded',
      'لا\nlā — "no" (not the answer word for this context)',
      'ربما\nrubbamā — "maybe" (not a valid answer word for a yes/no negative question)',
    ],
    correctIndex: 0,
    a: 'السؤال منفيّ بـ"لا" الاستفهامية ("ألا تعرفُ؟")، والجواب يثبت عكس النفي (أنك تعرف الجواب فعلاً)، فتُستخدم "بلى" لتكذيب النفي.\nThe question is negated with the interrogative لا (ألا تعرفُ؟), and the answer asserts the opposite of that negation (that you do in fact know the answer), so بلى is used to contradict the negation.',
  },
  {
    q: 'ما القاعدة العامة في التفريق بين "بلى" و"نعم" في الرد على الأسئلة؟\nWhat is the general rule for distinguishing بلى from نعم when answering questions?',
    options: [
      '"بلى" تُستخدم خاصة لتكذيب سؤال منفٍ وإثبات عكسه، أما "نعم" فتُستخدم لتصديق مضمون السؤال كما وَرَد سواء كان مثبتاً أو منفياً\nبلى is used specifically to contradict a negative question and assert its opposite, while نعم is used to confirm the content of the question exactly as worded, whether that question was positive or negative.',
      '"بلى" و"نعم" مترادفتان تماماً في كل السياقات\nبلى and نعم are complete synonyms in every context',
      '"نعم" لا تُستخدم إلا مع الأسئلة المنفية فقط\nنعم is only ever used with negative questions',
      '"بلى" تُستخدم فقط مع الأسئلة المثبتة\nبلى is only ever used with positive questions',
    ],
    correctIndex: 0,
    a: 'القاعدة أن "بلى" مختصة بتكذيب مضمون السؤال المنفي وإثبات عكسه، بينما "نعم" تُصدّق مضمون السؤال كما وَرَد لفظاً، سواء كان السؤال مثبتاً أم منفياً.\nThe rule is that بلى is reserved for contradicting the content of a negative question and asserting its opposite, while نعم confirms the content of the question exactly as worded, whether the question was positive or negative.',
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
            Topic 47 of 47
          </p>
          <h1 className="font-serif tracking-[-0.02em] text-3xl font-bold text-foreground leading-tight mb-3">
            <span
              dir="rtl"
              lang="ar"
              style={{ fontFamily: "'Noto Naskh Arabic', serif" }}
              className="mr-2"
            >
              الأسئلة المنفية
            </span>
            — Negative Questions & How to Answer Them
          </h1>
          <p className="text-muted-foreground text-base max-w-xl">
            Adding <bdi lang="ar">همزة الاستفهام أ</bdi> to <bdi lang="ar">لا</bdi> or <bdi lang="ar">ليس</bdi> forms a negative question: <bdi lang="ar">أَلَسْتَ...؟</bdi> The
            answering rules are the core test point: <bdi lang="ar">بلى</bdi> contradicts the negative — it asserts
            the opposite of what the question implied ("yes, contrary to that"); <bdi lang="ar">نعم</bdi> confirms
            the question exactly as it was worded, whether that wording was positive or negative.
          </p>
        </div>
      </div>
      <div className="mx-auto w-[min(720px,calc(100%-2rem))] py-8">
        <QuizCarousel items={quizItems} />
      </div>
    </main>
  )
}

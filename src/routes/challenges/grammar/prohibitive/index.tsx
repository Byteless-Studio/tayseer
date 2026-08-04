import { createFileRoute, Link } from '@tanstack/react-router'
import { QuizCarousel } from '#/components/QuizCarousel'
import type { StrictQuizItem } from '#/routes/challenges/-quiz-types'

export const Route = createFileRoute('/challenges/grammar/prohibitive/')({
  head: () => ({ meta: [{ title: 'The Prohibitive — Grammar — Tayseer' }] }),
  component: TopicPage,
})

const quizItems: StrictQuizItem[] = [
  {
    q: 'ما عمل "لا الناهية" في الفعل المضارع الذي يليها؟\nWhat effect does لا الناهية have on the present-tense verb that follows it?',
    options: [
      'ترفعه\nIt makes it مرفوع',
      'تنصبه\nIt makes it منصوب',
      'تجزمه، وتفيد النهي عن فعل الشيء\nIt makes it مجزوم, and conveys a prohibition against doing the thing',
      'لا تؤثر في إعرابه\nIt has no effect on its case',
    ],
    correctIndex: 2,
    a: '"لا الناهية" أداة جزم تدخل على الفعل المضارع فتجزمه، وتفيد طلب الكف عن الفعل (النهي)، مثل "لا تَكْتُبْ" = "don\'t write".\nلا الناهية is a jussive particle that attaches to the present-tense verb and makes it مجزوم, conveying a request to stop doing the action (prohibition): لا تَكْتُبْ = "don\'t write".',
  },
  {
    q: 'أكمل: لا ___ على الجدارِ! (نهي بـ"لا الناهية")\nComplete: لا ___ على الجدارِ! (a prohibition with لا الناهية)',
    options: [
      'تَكْتُبُ\ntaktubu (indicative',
      'تَكْتُبَ\ntaktuba (subjunctive',
      'تَكْتُبْ\ntaktub — write! [prohibited] (correct, jussive)',
      'كَتَبْتَ\nkatabta — past tense',
    ],
    correctIndex: 2,
    a: 'بعد "لا الناهية" يُجزم الفعل المضارع بحذف حركة الإعراب: "لا تَكْتُبْ على الجدارِ" (don\'t write on the wall) لا "لا تَكْتُبُ" ولا "لا تَكْتُبَ".\nAfter لا الناهية the present-tense verb is مجزوم, dropping its case ending: لا تَكْتُبْ على الجدارِ ("don\'t write on the wall") — never لا تَكْتُبُ nor لا تَكْتُبَ.',
  },
  {
    q: 'ما الفرق بين "لا الناهية" و"لا النافية" رغم أنهما بنفس الشكل؟\nWhat is the difference between لا الناهية and لا النافية, even though they look identical?',
    options: [
      'لا فرق بينهما إطلاقاً في المعنى أو العمل\nNo difference at all, in meaning or grammatical effect',
      '"لا الناهية" تفيد طلب الكف عن الفعل وتجزم المضارع، بينما "لا النافية" تنفي وقوع الفعل فقط ولا تجزمه\nلا الناهية conveys a request to stop the action and makes the present tense مجزوم, while لا النافية only negates the occurrence of the action and does not make it مجزوم',
      '"لا النافية" تجزم و"الناهية" لا تجزم\nلا النافية makes the verb مجزوم and لا الناهية does not',
      'كلتاهما تدخلان على الأسماء فقط\nBoth only attach to nouns',
    ],
    correctIndex: 1,
    a: 'كلاهما بنفس اللفظ لكن يختلفان في المعنى والعمل: "لا الناهية" أداة طلب (أمر بالكف) تجزم المضارع، مثل "لا تَكْذِبْ"؛ أما "لا النافية" فتنفي وقوع الفعل في الحاضر أو الاستقبال دون أن تجزمه، فيبقى مرفوعاً: "لا يَكْذِبُ محمدٌ" (Muhammad does not lie).\nBoth look identical but differ in meaning and grammatical effect: لا الناهية is a request particle (a command to stop) that makes the present tense مجزوم, as in لا تَكْذِبْ ("don\'t lie"); لا النافية instead negates the occurrence of the action in the present or future without making it مجزوم, so the verb stays مرفوع: لا يَكْذِبُ محمدٌ ("Muhammad does not lie").',
  },
  {
    q: 'أي من الجملتين تستخدم "لا" للنهي (لا للنفي)، ولماذا؟\nWhich of the two sentences uses لا for prohibition (not negation), and why?',
    options: [
      '"لا يَشْرَبُ الطفلُ القهوةَ" (نفي، الفعل مرفوع)\nلا يَشْرَبُ الطفلُ القهوةَ (negation — the verb is مرفوع)',
      '"لا تَشْرَبْ القهوةَ" (نهي، الفعل مجزوم)\nلا تَشْرَبْ القهوةَ (prohibition — the verb is مجزوم)',
      'كلتاهما نهي\nBoth are prohibitions',
      'كلتاهما نفي\nBoth are negations',
    ],
    correctIndex: 1,
    a: '"لا تَشْرَبْ القهوةَ" نهي لأن الفعل مجزوم (تَشْرَبْ بسكون الآخر) وموجّه لمخاطب، بمعنى "أطلب منك ألا تشرب"؛ أما "لا يَشْرَبُ الطفلُ القهوةَ" فنفي لأن الفعل مرفوع ويخبر عن حال لا يطلب تغييرها.\nلا تَشْرَبْ القهوةَ is a prohibition because the verb is مجزوم (تَشْرَبْ, ending in sukūn) and directed at a 2nd-person addressee, meaning "I\'m asking you not to drink"; لا يَشْرَبُ الطفلُ القهوةَ is a negation because the verb is مرفوع and simply states a fact, with no request for change.',
  },
  {
    q: 'أكمل: لا ___ بعيداً! (نهي، من فعل "ذهب")\nComplete: لا ___ بعيداً! (a prohibition, from the verb ذهب)',
    options: [
      'تَذْهَبُ\ntadhhabu (indicative',
      'تَذْهَبْ\ntadhhab — go! [prohibited] (correct, jussive)',
      'تَذْهَبَ\ntadhhaba — subjunctive',
      'ذَهَبْتَ\ndhahabta — past tense',
    ],
    correctIndex: 1,
    a: 'النهي يقتضي جزم الفعل المضارع: "لا تَذْهَبْ بعيداً!" (Don\'t go far!).\nA prohibition requires the present-tense verb to be مجزوم: لا تَذْهَبْ بعيداً! ("Don\'t go far!").',
  },
  {
    q: 'هل يمكن أن تدخل "لا الناهية" على فعل غائب لا مخاطب؟\nCan لا الناهية attach to an absent (3rd person) verb rather than an addressed one?',
    options: [
      'لا، فهي خاصة بالمخاطب فقط\nNo, it is exclusive to the 2nd person',
      'نعم، وتُفيد طلب عدم فعل الغائب، مثل "لا يَذْهَبْ أحدٌ" مع بقاء عمل الجزم\nYes, and it conveys a request that the absent party not do the action, like لا يَذْهَبْ أحدٌ, with the jussive effect still holding',
      'لا وجود لهذا الاستخدام إطلاقاً\nThis usage doesn\'t exist at all',
      'تدخل فقط على الأفعال الماضية\nIt only attaches to past-tense verbs',
    ],
    correctIndex: 1,
    a: 'يمكن أن تدخل "لا" على الفعل الغائب لإفادة النهي أيضاً، مثل "لا يَذْهَبْ أحدٌ" (Let no one go)، وهو استخدام أقل شيوعاً من النهي المباشر للمخاطب لكنه صحيح نحوياً ويجزم الفعل كذلك.\nلا can also attach to a 3rd-person verb to convey a prohibition, as in لا يَذْهَبْ أحدٌ ("Let no one go") — a less common usage than direct prohibition of a 2nd-person addressee, but grammatically valid, and it makes the verb مجزوم too.',
  },
  {
    q: 'هل الجملة "لا تَلْعَبِي بالنارِ" صحيحة لمخاطبة مؤنثة؟\nIs the sentence لا تَلْعَبِي بالنارِ correct for a feminine addressee?',
    options: [
      'صحيح، والفعل مجزوم بحذف النون لأنه من الأفعال الخمسة\nCorrect — the verb is مجزوم by dropping the نون because it is one of الأفعال الخمسة',
      'خطأ، الصواب لا تَلْعَبِينَ بالنار\nkhaṭaʾ — "wrong; it should be لا تَلْعَبِينَ بالنار"',
      'خطأ، لا يوجد نهي للمؤنث\nWrong — there is no prohibitive form for the feminine',
      'خطأ، الصواب لا تَلْعَبُ بالنار\nkhaṭaʾ — "wrong; it should be لا تَلْعَبُ بالنار"',
    ],
    correctIndex: 0,
    a: '"لا تَلْعَبِي بالنارِ" صحيح: الفعل "تَلْعَبِينَ" من الأفعال الخمسة، وعلامة جزمه حذف النون، فتصبح "تَلْعَبِي" بعد دخول "لا" الناهية.\nلا تَلْعَبِي بالنارِ is correct: the verb تَلْعَبِينَ is one of الأفعال الخمسة, and its جزم marker is dropping the نون, giving تَلْعَبِي once لا الناهية attaches.',
  },
  {
    q: 'ما إعراب الفعل المضارع في جملة "لا تَقْتَرِبْ من الحافةِ"؟\nWhat is the case of the present-tense verb in the sentence لا تَقْتَرِبْ من الحافةِ?',
    options: [
      'مرفوع بالضمة\nمرفوع, with ḍamma',
      'منصوب بالفتحة\nمنصوب, with fatḥa',
      'مجزوم بالسكون بـ"لا" الناهية\nمجزوم, with sukūn, caused by لا الناهية',
      'مبني على الفتح\nBuilt (مبني) on a fatḥa',
    ],
    correctIndex: 2,
    a: 'الفعل "تَقْتَرِبْ" مجزوم بالسكون الظاهر على آخره، وأداة الجزم هي "لا" الناهية التي أفادت هنا معنى النهي عن الاقتراب من الحافة.\nThe verb تَقْتَرِبْ is مجزوم with a visible sukūn at the end, and the جزم-causing particle is لا الناهية, which here conveys a prohibition against getting close to the edge.',
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
            Topic 35 of 47
          </p>
          <h1 className="font-serif tracking-[-0.02em] text-3xl font-bold text-foreground leading-tight mb-3">
            <span
              dir="rtl"
              lang="ar"
              style={{ fontFamily: "'Noto Naskh Arabic', serif" }}
              className="mr-2"
            >
              لا الناهية
            </span>
            — The Prohibitive
          </h1>
          <p className="text-muted-foreground text-base max-w-xl">
            لا + فعل مضارع مجزوم forms a prohibition (لا تَكْتُبْ = "don't write"). This is
            distinct from لا النافية, which simply negates a present-tense statement and does NOT
            cause jazm — the same particle, but a different grammatical effect depending on
            whether it's a command or a statement.
          </p>
        </div>
      </div>
      <div className="mx-auto w-[min(720px,calc(100%-2rem))] py-8">
        <QuizCarousel items={quizItems} />
      </div>
    </main>
  )
}

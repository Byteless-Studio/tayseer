import { createFileRoute, Link } from '@tanstack/react-router'
import { QuizCarousel } from '#/components/QuizCarousel'
import type { StrictQuizItem } from '#/routes/challenges/-quiz-types'

export const Route = createFileRoute('/challenges/grammar/prohibitive/')({
  head: () => ({ meta: [{ title: 'The Prohibitive — Grammar — Tayseer' }] }),
  component: TopicPage,
})

const quizItems: StrictQuizItem[] = [
  {
    q: 'ما عمل "لا الناهية" في الفعل المضارع الذي يليها؟',
    options: [
      'ترفعه',
      'تنصبه',
      'تجزمه، وتفيد النهي عن فعل الشيء',
      'لا تؤثر في إعرابه',
    ],
    correctIndex: 2,
    a: '"لا الناهية" أداة جزم تدخل على الفعل المضارع فتجزمه، وتفيد طلب الكف عن الفعل (النهي)، مثل "لا تَكْتُبْ" = "don\'t write".',
  },
  {
    q: 'أكمل: لا ___ على الجدارِ! (نهي بـ"لا الناهية")',
    options: ['تَكْتُبُ', 'تَكْتُبَ', 'تَكْتُبْ', 'كَتَبْتَ'],
    correctIndex: 2,
    a: 'بعد "لا الناهية" يُجزم الفعل المضارع بحذف حركة الإعراب: "لا تَكْتُبْ على الجدارِ" (don\'t write on the wall) لا "لا تَكْتُبُ" ولا "لا تَكْتُبَ".',
  },
  {
    q: 'ما الفرق بين "لا الناهية" و"لا النافية" رغم أنهما بنفس الشكل؟',
    options: [
      'لا فرق بينهما إطلاقاً في المعنى أو العمل',
      '"لا الناهية" تفيد طلب الكف عن الفعل وتجزم المضارع، بينما "لا النافية" تنفي وقوع الفعل فقط ولا تجزمه',
      '"لا النافية" تجزم و"الناهية" لا تجزم',
      'كلتاهما تدخلان على الأسماء فقط',
    ],
    correctIndex: 1,
    a: 'كلاهما بنفس اللفظ لكن يختلفان في المعنى والعمل: "لا الناهية" أداة طلب (أمر بالكف) تجزم المضارع، مثل "لا تَكْذِبْ"؛ أما "لا النافية" فتنفي وقوع الفعل في الحاضر أو الاستقبال دون أن تجزمه، فيبقى مرفوعاً: "لا يَكْذِبُ محمدٌ" (Muhammad does not lie).',
  },
  {
    q: 'أي من الجملتين تستخدم "لا" للنهي (لا للنفي)، ولماذا؟',
    options: [
      '"لا يَشْرَبُ الطفلُ القهوةَ" (نفي، الفعل مرفوع)',
      '"لا تَشْرَبْ القهوةَ" (نهي، الفعل مجزوم)',
      'كلتاهما نهي',
      'كلتاهما نفي',
    ],
    correctIndex: 1,
    a: '"لا تَشْرَبْ القهوةَ" نهي لأن الفعل مجزوم (تَشْرَبْ بسكون الآخر) وموجّه لمخاطب، بمعنى "أطلب منك ألا تشرب"؛ أما "لا يَشْرَبُ الطفلُ القهوةَ" فنفي لأن الفعل مرفوع ويخبر عن حال لا يطلب تغييرها.',
  },
  {
    q: 'أكمل: لا ___ بعيداً! (نهي، من فعل "ذهب")',
    options: ['تَذْهَبُ', 'تَذْهَبْ', 'تَذْهَبَ', 'ذَهَبْتَ'],
    correctIndex: 1,
    a: 'النهي يقتضي جزم الفعل المضارع: "لا تَذْهَبْ بعيداً!" (Don\'t go far!).',
  },
  {
    q: 'هل يمكن أن تدخل "لا الناهية" على فعل غائب لا مخاطب؟',
    options: [
      'لا، فهي خاصة بالمخاطب فقط',
      'نعم، وتُفيد طلب عدم فعل الغائب، مثل "لا يَذْهَبْ أحدٌ" مع بقاء عمل الجزم',
      'لا وجود لهذا الاستخدام إطلاقاً',
      'تدخل فقط على الأفعال الماضية',
    ],
    correctIndex: 1,
    a: 'يمكن أن تدخل "لا" على الفعل الغائب لإفادة النهي أيضاً، مثل "لا يَذْهَبْ أحدٌ" (Let no one go)، وهو استخدام أقل شيوعاً من النهي المباشر للمخاطب لكنه صحيح نحوياً ويجزم الفعل كذلك.',
  },
  {
    q: 'هل الجملة "لا تَلْعَبِي بالنارِ" صحيحة لمخاطبة مؤنثة؟',
    options: [
      'صحيح، والفعل مجزوم بحذف النون لأنه من الأفعال الخمسة',
      'خطأ، الصواب لا تَلْعَبِينَ بالنار',
      'خطأ، لا يوجد نهي للمؤنث',
      'خطأ، الصواب لا تَلْعَبُ بالنار',
    ],
    correctIndex: 0,
    a: '"لا تَلْعَبِي بالنارِ" صحيح: الفعل "تَلْعَبِينَ" من الأفعال الخمسة، وعلامة جزمه حذف النون، فتصبح "تَلْعَبِي" بعد دخول "لا" الناهية.',
  },
  {
    q: 'ما إعراب الفعل المضارع في جملة "لا تَقْتَرِبْ من الحافةِ"؟',
    options: ['مرفوع بالضمة', 'منصوب بالفتحة', 'مجزوم بالسكون بـ"لا" الناهية', 'مبني على الفتح'],
    correctIndex: 2,
    a: 'الفعل "تَقْتَرِبْ" مجزوم بالسكون الظاهر على آخره، وأداة الجزم هي "لا" الناهية التي أفادت هنا معنى النهي عن الاقتراب من الحافة.',
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

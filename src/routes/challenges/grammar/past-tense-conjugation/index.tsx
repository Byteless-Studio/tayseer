import { createFileRoute, Link } from '@tanstack/react-router'
import { QuizCarousel } from '#/components/QuizCarousel'
import type { StrictQuizItem } from '#/routes/challenges/-quiz-types'

export const Route = createFileRoute('/challenges/grammar/past-tense-conjugation/')({
  head: () => ({ meta: [{ title: 'Past Tense Full Conjugation — Grammar — Tayseer' }] }),
  component: TopicPage,
})

const quizItems: StrictQuizItem[] = [
  {
    q: 'كيف يُصرَّف الفعل الماضي عبر الضمائر المختلفة؟\nHow is the past-tense verb conjugated across the different pronouns?',
    options: [
      'بالتصدير بحرف مضارعة في أوله\nBy prefixing it with a حرف مضارعة (present-tense marker) at the start',
      'بإضافة لواحق (ضمائر متصلة) في آخره، بينما يبقى جذره ثابتاً\nBy adding suffixes (attached pronouns) at the end, while the root stays fixed',
      'بتغيير الحرف الأول من الجذر نفسه\nBy changing the first letter of the root itself',
      'لا يتغير شكل الفعل الماضي أبداً بين الضمائر\nThe past-tense verb\'s shape never changes across pronouns',
    ],
    correctIndex: 1,
    a: 'الفعل الماضي يُصرَّف عبر الضمائر المختلفة بإضافة لواحق (ضمائر متصلة) في آخره، مثل التاء والألف والواو والنون، بينما يبقى جذر الفعل نفسه ثابتاً، كما في: كَتَبَ ← كَتَبْتُ ← كَتَبُوا.\nThe past-tense verb is conjugated across pronouns by adding suffixes (attached pronouns) at the end — ت، ا، و، ن — while the verb\'s root stays fixed, as in: كَتَبَ ← كَتَبْتُ ← كَتَبُوا (kataba → katabtu → katabū).',
  },
  {
    q: 'ما هي صيغة الفعل الماضي مع ضمير "هو" (الغائب المفرد المذكر)؟\nWhat is the past-tense form with the pronoun هو (3rd person masc. sg.)?',
    options: [
      'الصيغة المجردة بلا لاحقة، مثل "كَتَبَ"\nThe bare form with no suffix, like كَتَبَ',
      'الصيغة مع لاحقة التاء "كَتَبَتْ"\nThe form with the ت suffix: كَتَبَتْ',
      'الصيغة مع لاحقة الألف "كَتَبَا"\nThe form with the ا suffix: كَتَبَا',
      'الصيغة مع لاحقة النون "كَتَبْنَ"\nThe form with the ن suffix: كَتَبْنَ',
    ],
    correctIndex: 0,
    a: 'صيغة "هو" هي الأصل المجرد للفعل الماضي بلا أي لاحقة ضمير متصل، مثل "كَتَبَ"، وهي القاعدة التي تُشتق منها بقية الصيغ بإضافة اللواحق المناسبة.\nThe هو form is the bare base of the past-tense verb, with no attached-pronoun suffix at all, like كَتَبَ (kataba, "he wrote") — it is the root from which every other form is derived by adding the right suffix.',
  },
  {
    q: 'أكمل: أنتِ ___ الرسالةَ (الصيغة الصحيحة لـ"كتب" مع المخاطبة المفردة)\nComplete: أنتِ ___ الرسالةَ (the correct form of كتب with the 2nd person fem. sg.)',
    options: [
      'كَتَبْتَ\nkatabta — you (m. sg.) wrote',
      'كَتَبْتِ\nkatabti — you (f. sg.) wrote',
      'كَتَبَتْ\nkatabat — she wrote',
      'كَتَبْتُنَّ\nkatabtunna — you (f. pl.) wrote',
    ],
    correctIndex: 1,
    a: 'مع ضمير "أنتِ" (المخاطبة المفردة) تُضاف لاحقة "تِ" بكسر التاء: "أنتِ كَتَبْتِ الرسالةَ"، بخلاف "كَتَبْتَ" الخاصة بالمخاطب المذكر.\nWith أنتِ (2nd person fem. sg.) the suffix تِ (kasra on the ت) is added: أنتِ كَتَبْتِ الرسالةَ ("you wrote the letter") — not كَتَبْتَ, which belongs to the masculine أنتَ.',
  },
  {
    q: 'ما هي صيغة الفعل الماضي "كتب" مع ضمير "هنّ" (جمع الغائبات)؟\nWhat is the past-tense form of كتب with the pronoun هنّ (3rd person fem. pl.)?',
    options: [
      'كَتَبْنَ\nkatabna — they (f. pl.) wrote',
      'كَتَبُوا\nkatabū — they (m. pl.) wrote',
      'كَتَبَتَا\nkatabatā — they two (f. dual) wrote',
      'كَتَبَتْ\nkatabat — she wrote',
    ],
    correctIndex: 0,
    a: 'مع "هنّ" تُضاف لاحقة "نَ" الساكنة النون: "الطالباتُ كَتَبْنَ الدرسَ"، وهي لاحقة خاصة بجمع الإناث الغائبات.\nWith هنّ the suffix نَ (sukūn on the ن) is added: الطالباتُ كَتَبْنَ الدرسَ ("the female students wrote the lesson") — this suffix belongs exclusively to the feminine plural absent group.',
  },
  {
    q: 'أي من هذه الصيغ خطأ في تصريف الفعل الماضي "كتب" مع الضمير المذكور؟\nWhich of these forms is WRONG for the pronoun given, when conjugating the past-tense verb كتب?',
    options: [
      'أنتم كَتَبْتُم\nantum katabtum — you (m. pl.) wrote',
      'نحن كَتَبْنَا\nnaḥnu katabnā — we wrote',
      'أنتما كَتَبَا\nantumā katabā (as written — should be كَتَبْتُما)',
      'هم كَتَبُوا\nhum katabū — they (m. pl.) wrote',
    ],
    correctIndex: 2,
    a: '"أنتما" (المخاطبان) تأخذ لاحقة "تُما": الصواب "كَتَبْتُما"؛ أما "كَتَبَا" (بلا تاء) فهي صيغة "هما" للغائبَين المثنى، لا للمخاطبَين.\nأنتما (2nd person dual) takes the suffix تُما: the correct form is كَتَبْتُما. كَتَبَا (with no ت) is instead the هما form for the absent dual, not the addressed dual.',
  },
  {
    q: 'ماذا تدل لاحقة "تُ" (بضم التاء) في تصريف الماضي، كما في "كَتَبْتُ"؟\nWhat does the suffix تُ (ḍamma on the ت) indicate in past-tense conjugation, as in كَتَبْتُ?',
    options: [
      'تدل على ضمير المتكلم المفرد "أنا"\nIt indicates the 1st person singular pronoun أنا',
      'تدل على ضمير الغائب "هو"\nIt indicates the absent pronoun هو',
      'تدل على جمع المخاطبين\nIt indicates the addressed plural',
      'تدل على المثنى\nIt indicates the dual',
    ],
    correctIndex: 0,
    a: 'لاحقة "تُ" المضمومة التاء تدل على المتكلم المفرد "أنا": "أنا كَتَبْتُ الدرسَ" (I wrote the lesson).\nThe suffix تُ (ḍamma on the ت) marks the 1st person singular أنا: أنا كَتَبْتُ الدرسَ ("I wrote the lesson").',
  },
  {
    q: 'ما صيغة الفعل الماضي "كتب" مع "هما" حين تدل على مثنى مؤنث غائب؟\nWhat is the past-tense form of كتب with هما when it refers to a feminine dual absent pair?',
    options: [
      'كَتَبَا\nkatabā — they two (m. dual) wrote',
      'كَتَبَتَا\nkatabatā — they two (f. dual) wrote',
      'كَتَبْتُما\nkatabtumā — you two wrote',
      'كَتَبْنَ\nkatabna — they (f. pl.) wrote',
    ],
    correctIndex: 1,
    a: '"هما" للمثنى المؤنث الغائب تأخذ لاحقة "تَا": "الطالبتان كَتَبَتَا الدرسَ"، بخلاف "كَتَبَا" الخاصة بالمثنى المذكر الغائب.\nهما for the feminine absent dual takes the suffix تَا: الطالبتان كَتَبَتَا الدرسَ ("the two [female] students wrote the lesson") — unlike كَتَبَا, which belongs to the masculine absent dual.',
  },
  {
    q: 'أكمل: نحن ___ الدرسَ (الصيغة الصحيحة لـ"كتب" مع "نحن")\nComplete: نحن ___ الدرسَ (the correct form of كتب with نحن)',
    options: [
      'كَتَبْنَا\nkatabnā — we wrote',
      'كَتَبْتُم\nkatabtum — you (m. pl.) wrote',
      'كَتَبُوا\nkatabū — they (m. pl.) wrote',
      'كَتَبْنَ\nkatabna — they (f. pl.) wrote',
    ],
    correctIndex: 0,
    a: 'مع "نحن" تُضاف لاحقة "نَا": "نحن كَتَبْنَا الدرسَ" (We wrote the lesson) — لا تُخلط بلاحقة "نَ" الساكنة الخاصة بـ"هنّ" فقط.\nWith نحن the suffix نَا is added: نحن كَتَبْنَا الدرسَ ("We wrote the lesson") — don\'t confuse it with the bare sukūn نَ suffix, which belongs only to هنّ.',
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
            Topic 30 of 47
          </p>
          <h1 className="font-serif tracking-[-0.02em] text-3xl font-bold text-foreground leading-tight mb-3">
            <span
              dir="rtl"
              lang="ar"
              style={{ fontFamily: "'Noto Naskh Arabic', serif" }}
              className="mr-2"
            >
              تصريف الفعل الماضي
            </span>
            — Past Tense Full Conjugation
          </h1>
          <p className="text-muted-foreground text-base max-w-xl">
            The past tense conjugates entirely by SUFFIX — the root and pattern never move. The
            هو (3rd person masc. sg.) form is the unsuffixed base (كَتَبَ), and every other person
            adds a suffix onto it: ت, تِ, تما, تم, تنّ, ا, وا, تا, نَ, نا across{' '}
            <span className="font-medium text-foreground">
              هو / هي / هما / هم / هنّ / أنتَ / أنتِ / أنتما / أنتم / أنتنّ / أنا / نحن
            </span>
            .
          </p>
        </div>
      </div>
      <div className="mx-auto w-[min(720px,calc(100%-2rem))] py-8">
        <QuizCarousel items={quizItems} />
      </div>
    </main>
  )
}

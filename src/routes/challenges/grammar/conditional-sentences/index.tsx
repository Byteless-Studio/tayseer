import { createFileRoute, Link } from '@tanstack/react-router'
import { QuizCarousel } from '#/components/QuizCarousel'
import type { StrictQuizItem } from '#/routes/challenges/-quiz-types'

export const Route = createFileRoute('/challenges/grammar/conditional-sentences/')({
  head: () => ({ meta: [{ title: 'Conditional Sentences — Grammar — Tayseer' }] }),
  component: TopicPage,
})

const quizItems: StrictQuizItem[] = [
  {
    q: 'ما وظيفة "إنْ" و"مَنْ" النحوية في أسلوب الشرط؟\nWhat do إنْ and مَنْ do grammatically in a conditional sentence?',
    options: [
      'أداتا شرط جازمتان تجزمان فعلين: فعل الشرط وجوابه\nBoth are jazm-inducing conditional particles that put two verbs in jazm: فعل الشرط and جواب الشرط',
      'أداتا شرط ترفعان الفعلين معاً\nBoth make the two verbs nominative (مرفوع)',
      'أداتا استفهام لا تؤثران في إعراب الفعل\nBoth are question words with no effect on verb inflection',
      'أداتا شرط تنصبان جواب الشرط فقط\nBoth put only جواب الشرط in the accusative',
    ],
    correctIndex: 0,
    a: 'إنْ ومَنْ من أدوات الشرط الجازمة، وقاعدتها أنهما تجزمان فعلين معاً: فعل الشرط (الواقع بعد الأداة مباشرة) وجواب الشرط (نتيجته).\nإنْ and مَنْ are jazm-inducing conditional particles (أدوات الشرط الجازمة). The rule: they put both فعل الشرط (right after the particle) and جواب الشرط (its result) in jazm — إِنْ تَجْتَهِدْ تَنْجَحْ, مَنْ يَعْمَلْ خَيْرًا يَرَهُ.',
  },
  {
    q: 'في "إِنْ تَجْتَهِدْ تَنْجَحْ" ما هو فعل الشرط؟\nIn إِنْ تَجْتَهِدْ تَنْجَحْ ("If you strive, you will succeed"), which verb is فعل الشرط?',
    options: [
      'تَنْجَحْ\ntanjaḥ — "you will succeed"',
      'تَجْتَهِدْ\ntajtahid — "you strive"',
      'إِنْ\nin — the particle itself',
      'لا فعل شرط في الجملة\nThere is no فعل الشرط in this sentence',
    ],
    correctIndex: 1,
    a: 'تَجْتَهِدْ هو فعل الشرط، لأنه الفعل الواقع مباشرة بعد أداة الشرط "إنْ".\nتَجْتَهِدْ is فعل الشرط, the verb immediately following the conditional particle إنْ. تَنْجَحْ, which states the result, is جواب الشرط.',
  },
  {
    q: 'وما جواب الشرط في نفس الجملة "إِنْ تَجْتَهِدْ تَنْجَحْ"؟\nAnd in that same sentence, which verb is جواب الشرط?',
    options: [
      'تَجْتَهِدْ\ntajtahid — "you strive"',
      'إِنْ\nin — the particle itself',
      'تَنْجَحْ\ntanjaḥ — "you will succeed"',
      'كلاهما معاً\nBoth verbs together',
    ],
    correctIndex: 2,
    a: 'تَنْجَحْ هو جواب الشرط، وهو نتيجة تحقق فعل الشرط، وهو أيضاً مجزوم مثله.\nتَنْجَحْ is جواب الشرط — the result that follows once فعل الشرط happens — and it too is جازم (jussive), matching فعل الشرط.',
  },
  {
    q: 'ما علامة جزم الفعل "تَجْتَهِدْ"؟\nWhat is the jazm marker on تَجْتَهِدْ?',
    options: [
      'حذف النون\nDropping the ن (as in الأفعال الخمسة)',
      'حذف حرف العلة\nDropping a weak letter',
      'السكون\nSukūn',
      'الفتحة\nFatḥa',
    ],
    correctIndex: 2,
    a: 'تَجْتَهِدْ فعل مضارع صحيح الآخر مفرد، فعلامة جزمه السكون الظاهر على آخره.\ntajtahid is a sound present-tense verb (صحيح الآخر), singular — so its jazm marker is a plain سكون on the final letter, exactly like a jussive singular verb.',
  },
  {
    q: 'ما علامة جزم الفعل "تَنْجَحْ" في نفس الجملة؟\nAnd the jazm marker on تَنْجَحْ, in the same sentence?',
    options: [
      'الفتحة\nFatḥa',
      'حذف حرف العلة\nDropping a weak letter',
      'حذف النون\nDropping the ن',
      'السكون\nSukūn',
    ],
    correctIndex: 3,
    a: 'مثل فعل الشرط، جواب الشرط هنا فعل مضارع صحيح الآخر مفرد، فعلامة جزمه السكون أيضاً.\nLike فعل الشرط, تَنْجَحْ is a sound, singular present-tense verb — so it too takes سكون as its jazm marker.',
  },
  {
    q: 'أكمل: مَنْ يَعْمَلْ خَيْرًا ___ (جواب الشرط من الفعل "يرى")\nComplete: مَنْ يَعْمَلْ خَيْرًا ___ — supply جواب الشرط from the verb يرى ("to see"), with an attached object pronoun "it"',
    options: [
      'يراه\nyarāhu — keeps the alif of يرى',
      'يرآه\nyarʾāhu',
      'يَرَهُ\nyarahu — the weak letter dropped, then the pronoun ه attached',
      'يرِه\nyarihu',
    ],
    correctIndex: 2,
    a: 'يرى فعل معتل الآخر بالألف، وفي حالة الجزم تُحذف الألف: يرى ← يَرَ، ثم يتصل بها ضمير المفعول به "ـه" فتصير يَرَهُ.\nيرى ends in a weak alif. In jazm, that weak letter is dropped: يرى → يَرَ. The object pronoun ـه then attaches: يَرَهُ — "he will see it." This is the famous Qur\'anic pattern فَمَن يَعْمَلْ ... يَرَهُ.',
  },
  {
    q: 'ما علامة جزم الفعل "يَرَ" (أصله يرى) في "مَنْ يَعْمَلْ خَيْرًا يَرَهُ"؟\nWhat is the jazm marker on يَرَ (originally يرى) in مَنْ يَعْمَلْ خَيْرًا يَرَهُ?',
    options: [
      'السكون\nSukūn',
      'حذف النون\nDropping the ن',
      'حذف حرف العلة\nDropping the weak letter (the alif)',
      'الفتحة\nFatḥa',
    ],
    correctIndex: 2,
    a: 'يرى فعل مضارع معتل الآخر، وعلامة جزم المعتل الآخر حذف حرف العلة، لا السكون، لأن السكون لا يظهر على حرف علة محذوف أصلاً.\nBecause يرى is weak-ending (معتل الآخر), its jazm marker is not a visible سكون but the dropping of the weak letter itself (حذف حرف العلة) — يرى becomes يَرَ.',
  },
  {
    q: 'ما إعراب "مَنْ" في "مَنْ يَعْمَلْ خَيْرًا يَرَهُ"؟\nWhat is the grammatical role of مَنْ in مَنْ يَعْمَلْ خَيْرًا يَرَهُ?',
    options: [
      'حرف شرط جازم لا محل له من الإعراب\nA jazm-inducing particle with no grammatical position',
      'اسم شرط جازم مبني في محل رفع مبتدأ\nA jazm-inducing conditional noun (اسم شرط), built, in the nominative position as مبتدأ',
      'اسم استفهام\nAn interrogative noun',
      'اسم موصول\nA relative pronoun',
    ],
    correctIndex: 1,
    a: 'مَنْ اسم شرط جازم (بخلاف إنْ التي حرف)، مبني على السكون في محل رفع مبتدأ، وجملة "يعمل خيراً" خبره.\nUnlike إنْ (a particle), مَنْ is a noun (اسم شرط) — built on سكون, in the nominative position as مبتدأ, with the clause يعمل خيراً as its predicate.',
  },
  {
    q: 'ما إعراب "إِنْ" في "إِنْ تَجْتَهِدْ تَنْجَحْ"؟\nWhat is the grammatical role of إِنْ in إِنْ تَجْتَهِدْ تَنْجَحْ?',
    options: [
      'اسم شرط جازم مبني في محل رفع مبتدأ\nA conditional noun, built, in the nominative position as مبتدأ',
      'حرف شرط جازم لا محل له من الإعراب\nA jazm-inducing conditional particle with no grammatical position',
      'حرف جر\nA preposition',
      'ضمير متصل\nAn attached pronoun',
    ],
    correctIndex: 1,
    a: 'إنْ حرف شرط جازم فقط، ليست اسماً، فلا محل لها من الإعراب — بخلاف مَنْ التي اسم له محل.\nإنْ is purely a particle (حرف), not a noun, so it has no grammatical position of its own — unlike مَنْ, which is a noun with a position (مبتدأ).',
  },
  {
    q: 'حوّل الجملة الخبرية "أنتَ تجتهدُ فتنجحُ" إلى أسلوب شرط بـ"إنْ"\nConvert the statement "أنتَ تجتهدُ فتنجحُ" ("You strive, so you succeed") into a conditional with إنْ',
    options: [
      'إِنْ تَجْتَهِدُ تَنْجَحُ\nKeeps both verbs مرفوع',
      'إِنْ تَجْتَهِدْ تَنْجَحْ\nBoth verbs jussive (مجزوم), marked by سكون',
      'إِنْ تَجْتَهِدَ تَنْجَحَ\nBoth verbs منصوب',
      'إِنْ تَجْتَهِدْ تَنْجَحُ\nOnly the first verb jussive',
    ],
    correctIndex: 1,
    a: 'بعد "إنْ" يجب جزم الفعلين معاً: فعل الشرط وجوابه، وعلامة الجزم هنا السكون لأن الفعلين صحيحا الآخر مفردان: إِنْ تَجْتَهِدْ تَنْجَحْ.\nAfter إنْ, both verbs must be jazm — فعل الشرط and جواب الشرط — marked with سكون since both are sound, singular present-tense verbs: إِنْ تَجْتَهِدْ تَنْجَحْ.',
  },
  {
    q: 'إِنْ ___ تنجحْ في الامتحان (اختر فعل الشرط الصحيح من "تدرس")\nإِنْ ___ tanjaḥ fī l-imtiḥān — supply فعل الشرط, correctly jussive, from تدرس ("to study")',
    options: [
      'تدرسُ\ntadrusu — indicative',
      'تدرسَ\ntadrusa — subjunctive',
      'تدرسْ\ntadrus — jussive, marked by سكون',
      'تدرسِ\ntadrusi',
    ],
    correctIndex: 2,
    a: 'بعد "إنْ" يجب جزم فعل الشرط، فيصبح تدرسُ ← تدرسْ بحذف الضمة ووضع السكون.\nAfter إنْ, فعل الشرط must be jussive: tadrusu (indicative) becomes tadrus (jussive), the ḍamma replaced by سكون.',
  },
  {
    q: 'أيّ جملة فيها خطأ في تطبيق قاعدة الجزم بعد "إنْ"؟\nWhich sentence violates the jazm rule after إنْ?',
    options: [
      'إِنْ تَجْتَهِدْ تَنْجَحْ\nBoth verbs jussive',
      'إِنْ تَجْتَهِدُ تَنْجَحُ\nBoth verbs left indicative (مرفوع)',
      'مَنْ يَعْمَلْ خَيْرًا يَرَهُ\nBoth verbs jussive, the second by dropping the weak letter',
      'مَنْ يَزْرَعْ خَيْرًا يَحْصُدْ\nBoth verbs jussive, marked by سكون',
    ],
    correctIndex: 1,
    a: '"إِنْ تَجْتَهِدُ تَنْجَحُ" خطأ لأن الفعلين بقيا مرفوعين بالضمة، بينما "إنْ" أداة شرط جازمة تُلزم جزم الفعلين معاً: الصواب إِنْ تَجْتَهِدْ تَنْجَحْ.\n"إِنْ تَجْتَهِدُ تَنْجَحُ" is wrong: both verbs stayed indicative (مرفوع, with ḍamma), but إنْ forces jazm on both — the correct form is إِنْ تَجْتَهِدْ تَنْجَحْ.',
  },
  {
    q: 'حوّل "أنتم تجتهدون فتنجحون" إلى أسلوب شرط بـ"إنْ"\nConvert "أنتم تجتهدون فتنجحون" ("You [pl.] strive, so you succeed") into a conditional with إنْ',
    options: [
      'إِنْ تَجْتَهِدُونَ تَنْجَحُونَ\nBoth verbs keep their ن',
      'إِنْ تَجْتَهِدُوا تَنْجَحُوا\nBoth verbs drop the ن',
      'إِنْ تَجْتَهِدْ تَنْجَحْ\nSingular jussive forms',
      'إِنْ تَجْتَهِدَنَّ تَنْجَحَنَّ\nBoth verbs take نون التوكيد',
    ],
    correctIndex: 1,
    a: 'تجتهدون من الأفعال الخمسة، وعلامة جزمها حذف النون، فتصير تَجْتَهِدُوا؛ وكذلك تَنْجَحُوا.\ntajtahidūna is one of الأفعال الخمسة, so its jazm marker is dropping the ن, giving tajtahidū — and likewise tanjaḥū.',
  },
  {
    q: 'ما علامة جزم الفعل "تَجْتَهِدُوا" (من الأفعال الخمسة) في "إِنْ تَجْتَهِدُوا تَنْجَحُوا"؟\nWhat is the jazm marker on تَجْتَهِدُوا (one of الأفعال الخمسة) in إِنْ تَجْتَهِدُوا تَنْجَحُوا?',
    options: [
      'السكون\nSukūn',
      'حذف حرف العلة\nDropping a weak letter',
      'الفتحة\nFatḥa',
      'حذف النون\nDropping the ن',
    ],
    correctIndex: 3,
    a: 'تَجْتَهِدُوا من الأفعال الخمسة (فعل مضارع + واو الجماعة)، وهذه الأفعال تُجزم بحذف النون: تجتهدون ← تجتهدوا.\ntajtahidūna is one of الأفعال الخمسة (a present-tense verb + واو الجماعة). Such verbs take jazm by dropping the ن: tajtahidūna → tajtahidū.',
  },
  {
    q: 'أنتما إِنْ ___ تنجحا (اختر فعل الشرط الصحيح من "تجتهدان")\nantumā in ___ tanjaḥā — supply فعل الشرط, jussive, from تجتهدان ("you two strive")',
    options: [
      'تجتهدان\ntajtahidāni — indicative dual',
      'تجتهدا\ntajtahidā — the ن of the dual dropped',
      'تجتهدَ\ntajtahida',
      'تجتهدْ\ntajtahid — singular jussive',
    ],
    correctIndex: 1,
    a: 'تجتهدان من الأفعال الخمسة (مثنى + نون)، وتُجزم بحذف النون: تجتهدان ← تجتهدا.\ntajtahidāni is one of الأفعال الخمسة (dual form + ن). It takes jazm by dropping the ن: tajtahidāni → tajtahidā.',
  },
  {
    q: 'الفعل "تجتهدين" (مضارع مرفوع للمخاطبة) يصبح بعد "إنْ" في حالة الجزم ___\ntajtahidīna (indicative, "you [f.] strive") becomes, after إنْ in the jussive, ___',
    options: [
      'تجتهدين\ntajtahidīna — unchanged, still indicative',
      'تجتهدْنَ\ntajtahidna',
      'تجتهدِ\ntajtahidi',
      'تجتهدي\ntajtahidī — the ن of تجتهدين dropped',
    ],
    correctIndex: 3,
    a: 'تجتهدين من الأفعال الخمسة (مضارع + ياء المخاطبة + نون)، وتُجزم بحذف النون: تجتهدين ← تجتهدي.\ntajtahidīna is one of الأفعال الخمسة (present tense + ياء المخاطبة + ن). It takes jazm by dropping the ن: tajtahidīna → tajtahidī.',
  },
  {
    q: 'أيّ جملة فيها خطأ في جزم الأفعال الخمسة بعد "إنْ"؟\nWhich sentence wrongly handles jazm of الأفعال الخمسة after إنْ?',
    options: [
      'إِنْ تَجْتَهِدُوا تَنْجَحُوا\nBoth verbs drop the ن',
      'إِنْ تَجْتَهِدُونَ تَنْجَحُونَ\nBoth verbs keep the ن',
      'إِنْ تَجْتَهِدَا تَنْجَحَا\nBoth verbs drop the ن',
      'إِنْ تَجْتَهِدِي تَنْجَحِي\nBoth verbs drop the ن',
    ],
    correctIndex: 1,
    a: '"إِنْ تَجْتَهِدُونَ تَنْجَحُونَ" خطأ لأن الأفعال الخمسة تُجزم وجوباً بحذف النون؛ إبقاؤها يعني أن الفعل بقي مرفوعاً: الصواب إِنْ تَجْتَهِدُوا تَنْجَحُوا.\n"إِنْ تَجْتَهِدُونَ تَنْجَحُونَ" is wrong: الأفعال الخمسة must take jazm by dropping the ن — keeping it means the verb is still indicative. The correct form is إِنْ تَجْتَهِدُوا تَنْجَحُوا.',
  },
  {
    q: 'أعرب الفعل "تَنْجَحْ" إعراباً كاملاً في "إِنْ تَجْتَهِدْ تَنْجَحْ"\nGive the full parse of تَنْجَحْ in إِنْ تَجْتَهِدْ تَنْجَحْ',
    options: [
      'فعل مضارع مرفوع وعلامة رفعه الضمة\nA present-tense verb, indicative, marked by ḍamma',
      'فعل مضارع مجزوم جواب الشرط، وعلامة جزمه السكون\nA present-tense verb, jussive, functioning as جواب الشرط, marked by سكون',
      'فعل ماضٍ مبني على الفتح\nA past-tense verb, built on fatḥa',
      'فعل أمر مبني على السكون\nAn imperative verb, built on سكون',
    ],
    correctIndex: 1,
    a: 'تَنْجَحْ فعل مضارع مجزوم لوقوعه جواباً للشرط "إنْ"، وعلامة جزمه السكون الظاهر على آخره لأنه صحيح الآخر مفرد.\ntanjaḥ is a present-tense verb in jazm because it is جواب الشرط of إنْ, marked by a plain سكون since it is sound-ending and singular.',
  },
  {
    q: 'هل تجزم "إنْ" فعلاً واحداً أم فعلين؟\nDoes إنْ put one verb, or two, in jazm?',
    options: [
      'فعلاً واحداً فقط، هو فعل الشرط\nOnly one verb — فعل الشرط',
      'فعلين معاً: فعل الشرط وجوابه\nBoth verbs together: فعل الشرط and جواب الشرط',
      'لا تجزم أي فعل، بل تنصب\nIt puts no verb in jazm — it puts them in the accusative instead',
      'ثلاثة أفعال\nThree verbs',
    ],
    correctIndex: 1,
    a: 'القاعدة الأساسية لأدوات الشرط الجازمة مثل إنْ ومَنْ: تجزمان فعلين معاً، فعل الشرط وجوابه، لا فعلاً واحداً.\nThe core rule for jazm-inducing conditional particles like إنْ and مَنْ: they put two verbs in jazm together — فعل الشرط and جواب الشرط — never just one.',
  },
  {
    q: 'مَنْ يَزْرَعْ خَيْرًا ___ (أكمل جواب الشرط من "يحصد")\nman yazraʿ khayran ___ — supply جواب الشرط, jussive, from يحصد ("to reap")',
    options: [
      'يحصدُ\nyaḥṣudu — indicative',
      'يحصدَ\nyaḥṣuda — subjunctive',
      'يحصدْ\nyaḥṣud — jussive, marked by سكون',
      'يحصدَنَّ\nyaḥṣudanna — with نون التوكيد',
    ],
    correctIndex: 2,
    a: 'يحصد فعل مضارع صحيح الآخر مفرد، وبوقوعه جواباً لشرط "مَنْ" يُجزم بالسكون: مَنْ يَزْرَعْ خَيْرًا يَحْصُدْ.\nyaḥṣud is a sound, singular present-tense verb. As جواب الشرط of مَنْ, it takes jazm marked by سكون: man yazraʿ khayran yaḥṣud — "whoever sows good will reap it."',
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
            Topic 58 of 62
          </p>
          <h1 className="font-serif tracking-[-0.02em] text-3xl font-bold text-foreground leading-tight mb-3">
            <span
              dir="rtl"
              lang="ar"
              style={{ fontFamily: "'Noto Naskh Arabic', serif" }}
              className="mr-2"
            >
              أدوات الشرط
            </span>
            — Conditional Sentences
          </h1>
          <p className="text-muted-foreground text-base max-w-xl">
            <bdi lang="ar">إِنْ</bdi> ("if") and <bdi lang="ar">مَنْ</bdi> ("whoever") are jazm-inducing
            conditional particles: they put <span className="font-medium text-foreground">both</span> verbs
            in jazm — the <bdi lang="ar">فعل الشرط</bdi> right after the particle, and the{' '}
            <bdi lang="ar">جواب الشرط</bdi> that states the result. <bdi lang="ar">إِنْ تَجْتَهِدْ تَنْجَحْ</bdi>{' '}
            ("If you strive, you will succeed"), <bdi lang="ar">مَنْ يَعْمَلْ خَيْرًا يَرَهُ</bdi> ("Whoever does
            good will see it"). The jazm marker varies: <bdi lang="ar">سكون</bdi> for a sound singular verb,
            dropping the weak letter for a defective one, or dropping the <bdi lang="ar">نون</bdi> for one of{' '}
            <bdi lang="ar">الأفعال الخمسة</bdi>.
          </p>
        </div>
      </div>
      <div className="mx-auto w-[min(720px,calc(100%-2rem))] py-8">
        <QuizCarousel items={quizItems} />
      </div>
    </main>
  )
}

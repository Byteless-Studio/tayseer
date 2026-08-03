import { createFileRoute, Link } from '@tanstack/react-router'
import { QuizCarousel } from '#/components/QuizCarousel'
import type { StrictQuizItem } from '#/routes/challenges/-quiz-types'

export const Route = createFileRoute('/challenges/grammar/present-tense-conjugation/')({
  head: () => ({ meta: [{ title: 'Present Tense Full Conjugation — Grammar — Tayseer' }] }),
  component: TopicPage,
})

const quizItems: StrictQuizItem[] = [
  {
    q: 'بم يتميز الفعل المضارع صرفياً عن الفعل الماضي؟\nMorphologically, what distinguishes the present-tense verb from the past-tense verb?',
    options: [
      'بلاحقة في آخره فقط\nBy a suffix at the end only',
      'بحرف من أحرف المضارعة (أ/ن/ي/ت) في أوله، وأحياناً لاحقة أيضاً\nBy one of the أحرف المضارعة (present-tense prefixes: أ/ن/ي/ت) at the start, and sometimes a suffix too',
      'بحذف الجذر الثلاثي\nBy dropping the three-letter root',
      'لا فرق بينهما شكلياً\nThere is no formal difference between them',
    ],
    correctIndex: 1,
    a: 'الفعل المضارع يتميز بحرف من "أحرف المضارعة" (أ، ن، ي، ت) يُزاد في أوله، وقد يُضاف إليه أيضاً لاحقة في آخره حسب الضمير، مثل "يَكْتُبُ" و"تَكْتُبِينَ".\nThe present-tense verb is marked by one of the أحرف المضارعة (أ، ن، ي، ت) added at the start, and depending on the pronoun a suffix may also be added at the end, as in يَكْتُبُ and تَكْتُبِينَ.',
  },
  {
    q: 'أكمل: أنا ___ الدرسَ (الصيغة الصحيحة لمضارع "كتب" مع "أنا")\nComplete: أنا ___ الدرسَ (the correct present-tense form of كتب with أنا)',
    options: [
      'أَكْتُبُ\naktubu — I write',
      'نَكْتُبُ\nnaktubu — we write',
      'يَكْتُبُ\nyaktubu — he writes',
      'تَكْتُبُ\ntaktubu — you (m. sg.) write / she writes',
    ],
    correctIndex: 0,
    a: 'حرف المضارعة الخاص بالمتكلم المفرد "أنا" هو الهمزة: "أنا أَكْتُبُ الدرسَ".\nThe present-tense prefix for the 1st person singular أنا is the hamza أ: أنا أَكْتُبُ الدرسَ ("I write the lesson").',
  },
  {
    q: 'أكمل: نحن ___ الدرسَ (الصيغة الصحيحة لمضارع "كتب" مع "نحن")\nComplete: نحن ___ الدرسَ (the correct present-tense form of كتب with نحن)',
    options: [
      'أَكْتُبُ\naktubu — I write',
      'نَكْتُبُ\nnaktubu — we write',
      'يَكْتُبُونَ\nyaktubūna — they (m. pl.) write',
      'تَكْتُبُ\ntaktubu — you (m. sg.) write / she writes',
    ],
    correctIndex: 1,
    a: 'حرف المضارعة الخاص بالمتكلمين "نحن" هو النون: "نحن نَكْتُبُ الدرسَ".\nThe present-tense prefix for the plural speaker نحن is the نون: نحن نَكْتُبُ الدرسَ ("we write the lesson").',
  },
  {
    q: 'ما علامة الرفع الأصلية (الافتراضية) في الفعل المضارع الصحيح الآخر، مثل "يَكْتُبُ"؟\nWhat is the default مرفوع marker on a sound-final present-tense verb, like يَكْتُبُ?',
    options: [
      'الفتحة الظاهرة\nA visible fatḥa',
      'الضمة الظاهرة\nA visible ḍamma',
      'السكون\nSukūn',
      'ثبوت النون\nThe retained نون (for the five-verb forms)',
    ],
    correctIndex: 1,
    a: 'الفعل المضارع الصحيح الآخر يُرفع بالضمة الظاهرة على آخره، كما في "يَكْتُبُ"؛ أما الأفعال الخمسة فتُرفع بثبوت النون بدلاً من الضمة.\nA sound-final present-tense verb is مرفوع with a visible ḍamma at the end, as in يَكْتُبُ; the الأفعال الخمسة (five-verb forms) are instead مرفوع by keeping the نون in place of the ḍamma.',
  },
  {
    q: 'ما هي "الأفعال الخمسة" وكيف تُرفع؟\nWhat are الأفعال الخمسة ("the five verbs"), and how are they مرفوع?',
    options: [
      'كل مضارع اتصلت به ألف الاثنين أو واو الجماعة أو ياء المخاطبة (مثل يَكْتُبَانِ، يَكْتُبُونَ، تَكْتُبِينَ)، وتُرفع بثبوت النون\nEvery present-tense verb attached to ألف الاثنين, واو الجماعة, or ياء المخاطبة (like يَكْتُبَانِ, يَكْتُبُونَ, تَكْتُبِينَ) — مرفوع by keeping the نون',
      'أفعال ماضية فقط\nPast-tense verbs only',
      'أفعال أمر فقط لا غير\nImperative verbs only, nothing else',
      'أفعال تُرفع بالضمة كسائر الأفعال\nVerbs that are مرفوع with ḍamma like all others',
    ],
    correctIndex: 0,
    a: 'الأفعال الخمسة هي كل مضارع اتصلت به ألف الاثنين أو واو الجماعة أو ياء المخاطبة (مثل يَكْتُبَانِ، يَكْتُبُونَ، تَكْتُبِينَ)، وعلامة رفعها ثبوت النون في آخرها، بدلاً من الضمة.\nالأفعال الخمسة are every present-tense verb attached to ألف الاثنين, واو الجماعة, or ياء المخاطبة (like يَكْتُبَانِ, يَكْتُبُونَ, تَكْتُبِينَ), and their مرفوع marker is keeping the نون at the end, instead of a ḍamma.',
  },
  {
    q: 'أكمل: أنتِ ___ الدرسَ (الصيغة الصحيحة لمضارع "كتب" مع المخاطبة المفردة)\nComplete: أنتِ ___ الدرسَ (the correct present-tense form of كتب with the 2nd person fem. sg.)',
    options: [
      'تَكْتُبُ\ntaktubu — you (m. sg.) write',
      'تَكْتُبِينَ\ntaktubīna — you (f. sg.) write',
      'تَكْتُبَانِ\ntaktubāni — you two write',
      'تَكْتُبْنَ\ntaktubna — you (f. pl.) write',
    ],
    correctIndex: 1,
    a: '"أنتِ" (المخاطبة المفردة) تأخذ صيغة "تَكْتُبِينَ" وهي من الأفعال الخمسة (بياء المخاطبة)، تُرفع بثبوت النون.\nأنتِ (2nd person fem. sg.) takes the form تَكْتُبِينَ, one of الأفعال الخمسة (with ياء المخاطبة), مرفوع by keeping the نون.',
  },
  {
    q: 'أي من هذه الصيغ خطأ في تصريف مضارع "كتب" مع الضمير المذكور؟\nWhich of these forms is WRONG for the pronoun given, when conjugating the present-tense verb كتب?',
    options: [
      'هو يَكْتُبُ\nhuwa yaktubu — he writes (correct)',
      'هم يَكْتُبُونَ\nhum yaktubūna — they (m. pl.) write (correct)',
      'أنتم تَكْتُبُ\nantum taktubu (as written — wrong)',
      'هنّ يَكْتُبْنَ\nhunna yaktubna — they (f. pl.) write (correct)',
    ],
    correctIndex: 2,
    a: '"أنتم" (جمع المخاطبين) تأخذ صيغة "تَكْتُبُونَ" من الأفعال الخمسة، لا "تَكْتُبُ" التي هي صيغة المخاطب المفرد "أنتَ".\nأنتم (2nd person masc. pl.) takes the form تَكْتُبُونَ, one of الأفعال الخمسة — not تَكْتُبُ, which is the form for the singular أنتَ.',
  },
  {
    q: 'أي حرف من أحرف المضارعة (أ ن ي ت) يُستخدم مع "هو" ومع جماعة الغائبين "هم" و"هنّ"؟\nWhich of the present-tense prefixes (أ ن ي ت) is used with هو and with the absent groups هم and هنّ?',
    options: [
      'الهمزة\nThe hamza أ',
      'النون\nThe نون',
      'الياء\nThe ياء',
      'التاء\nThe تاء',
    ],
    correctIndex: 2,
    a: 'حرف "الياء" هو حرف المضارعة المستخدم مع الغائب المفرد "هو" (يَكْتُبُ) وجماعة الغائبين "هم" (يَكْتُبُونَ) وجماعة الغائبات "هنّ" (يَكْتُبْنَ).\nThe letter ياء is the present-tense prefix used with the singular absent هو (يَكْتُبُ), the absent masculine group هم (يَكْتُبُونَ), and the absent feminine group هنّ (يَكْتُبْنَ).',
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
            Topic 32 of 47
          </p>
          <h1 className="font-serif tracking-[-0.02em] text-3xl font-bold text-foreground leading-tight mb-3">
            <span
              dir="rtl"
              lang="ar"
              style={{ fontFamily: "'Noto Naskh Arabic', serif" }}
              className="mr-2"
            >
              تصريف الفعل المضارع
            </span>
            — Present Tense Full Conjugation
          </h1>
          <p className="text-muted-foreground text-base max-w-xl">
            Unlike the past tense, the present tense is marked by a PREFIX — one of أ / ن / ي / ت
            — plus sometimes a suffix. The default مرفوع ending is a ـُ (or ثبوت النون for the
            five-verb forms). The prefix follows the person: أ=أنا, ن=نحن, ي=هو/هم/هنّ, and
            ت=أنتَ/أنتِ/هي and the rest of the "you" forms.
          </p>
        </div>
      </div>
      <div className="mx-auto w-[min(720px,calc(100%-2rem))] py-8">
        <QuizCarousel items={quizItems} />
      </div>
    </main>
  )
}

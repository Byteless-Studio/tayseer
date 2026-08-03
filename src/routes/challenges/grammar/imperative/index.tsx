import { createFileRoute, Link } from '@tanstack/react-router'
import { QuizCarousel } from '#/components/QuizCarousel'
import type { StrictQuizItem } from '#/routes/challenges/-quiz-types'

export const Route = createFileRoute('/challenges/grammar/imperative/')({
  head: () => ({ meta: [{ title: 'The Imperative — Grammar — Tayseer' }] }),
  component: TopicPage,
})

const quizItems: StrictQuizItem[] = [
  {
    q: 'من أين يُشتق فعل الأمر في العربية؟\nIn Arabic, where is the imperative verb derived from?',
    options: [
      'من الفعل الماضي مباشرة\nDirectly from the past-tense verb',
      'من الفعل المضارع المجزوم المخاطب، بحذف حرف المضارعة وتعديل الآخر\nFrom the jussive present-tense 2nd-person verb, by dropping the present-tense prefix and adjusting the ending',
      'من المصدر مباشرة\nDirectly from the verbal noun (مصدر)',
      'لا يُشتق بل يُحفظ سماعاً لكل فعل على حدة\nIt is not derived at all — it is memorized by convention for each verb individually',
    ],
    correctIndex: 1,
    a: 'فعل الأمر يُشتق من الفعل المضارع المجزوم المخاطب، بحذف حرف المضارعة (التاء) من أوله، مع إجراء التعديلات اللازمة على آخره (سكون، أو حذف نون، أو حذف حرف علة).\nThe imperative is derived from the jussive 2nd-person present-tense verb, by dropping the present-tense prefix (ت) from the start, and making the necessary adjustments at the end (a sukūn, dropping the نون, or dropping a weak letter).',
  },
  {
    q: 'لأي ضمائر يُصاغ فعل الأمر حصرياً؟\nFor which pronouns is the imperative formed, exclusively?',
    options: [
      'لجميع الضمائر (الغائب والمخاطب والمتكلم)\nFor all pronouns (absent, addressed, and speaker)',
      'للمخاطب فقط (أنتَ، أنتِ، أنتما، أنتم، أنتنّ)\nFor the 2nd person only (أنتَ، أنتِ، أنتما، أنتم، أنتنّ)',
      'للمتكلم فقط (أنا، نحن)\nFor the speaker only (أنا، نحن)',
      'للغائب فقط (هو، هي، هم)\nFor the absent 3rd person only (هو، هي، هم)',
    ],
    correctIndex: 1,
    a: 'فعل الأمر لا يُصاغ إلا لضمائر المخاطب (أنتَ/أنتِ/أنتما/أنتم/أنتنّ)؛ أما الطلب من الغائب أو المتكلم فيُعبَّر عنه بأسلوب آخر (لام الأمر مع المضارع، مثل "لِيكتبْ").\nThe imperative is formed only for the 2nd-person pronouns (أنتَ/أنتِ/أنتما/أنتم/أنتنّ); a request directed at an absent or 1st person is instead expressed another way — لام الأمر with the present tense, like لِيكتبْ ("let him write").',
  },
  {
    q: 'ما صيغة الأمر الصحيحة من الفعل "كتب" للمخاطب المفرد المذكر (أنتَ)؟\nWhat is the correct imperative form of كتب for the masculine singular addressee (أنتَ)?',
    options: [
      'تَكْتُبْ\ntaktub (the jussive present, before deriving the imperative)',
      'اُكْتُبْ\nuktub — write! (correct)',
      'كَتَبْ\nkatab (the bare past stem — wrong)',
      'يَكْتُبْ\nyaktub (3rd person jussive — wrong)',
    ],
    correctIndex: 1,
    a: 'صيغة الأمر من "كتب" مع "أنتَ" هي "اُكْتُبْ": حُذف حرف المضارعة (التاء) من "تَكْتُبْ"، وأُضيفت همزة وصل مضمومة لأن الحرف الثالث من المضارع (يَكْتُبُ) مضموم العين.\nThe imperative of كتب with أنتَ is اُكْتُبْ: the present-tense prefix (ت) is dropped from تَكْتُبْ, and a ḍamma-vowelled همزة الوصل is added because the middle radical of the present tense (يَكْتُبُ) carries a ḍamma.',
  },
  {
    q: 'لماذا أضيفت همزة الوصل إلى بداية "اُكْتُبْ"؟\nWhy is a همزة الوصل added to the start of اُكْتُبْ?',
    options: [
      'لأنها تحمل معنى زائداً على الفعل\nBecause it adds an extra meaning to the verb',
      'لتفادي البدء بساكن، إذ لا يمكن نطق كلمة عربية تبدأ بحرف ساكن مباشرة\nTo avoid starting with a consonant cluster, since no Arabic word can begin directly with a sākin letter',
      'لأنها جزء أصلي من الجذر\nBecause it is an original part of the root',
      'لتمييز الأمر عن المضارع دون أي سبب صوتي\nTo distinguish the imperative from the present tense, with no phonetic reason at all',
    ],
    correctIndex: 1,
    a: 'بعد حذف حرف المضارعة يبقى أول الفعل ساكناً (كْتُبْ)، والعربية لا تبدأ كلامها بساكن؛ فتُضاف همزة الوصل لتيسير النطق فقط، وتُحذف في النطق عند الوصل بكلام سابق.\nAfter dropping the present-tense prefix, the verb would start with a sākin letter (كْتُبْ), and Arabic speech can never begin with a sākin; so همزة الوصل is added purely to ease pronunciation, and it drops in speech when connected to preceding words.',
  },
  {
    q: 'ما صيغة الأمر من "جلس" (يَجْلِسُ) للمخاطب المفرد؟\nWhat is the imperative of جلس (present tense يَجْلِسُ) for the singular addressee?',
    options: [
      'اُجْلِسْ\nujlis (ḍamma hamza — wrong pattern here)',
      'اِجْلِسْ\nijlis — sit! (correct)',
      'أَجْلِسْ\najlis (fatḥa hamza — wrong)',
      'جَلَسْ\njalas (bare past stem — wrong)',
    ],
    correctIndex: 1,
    a: 'مضارع "جلس" هو "يَجْلِسُ" مكسور العين، فتكون همزة الوصل في الأمر مكسورة أيضاً: "اِجْلِسْ" — تتبع حركة همزة الوصل حركة عين المضارع.\nThe present tense of جلس is يَجْلِسُ, with a kasra on the middle radical, so the همزة الوصل in the imperative is also kasra-vowelled: اِجْلِسْ — the vowel on همزة الوصل follows the vowel of the present tense\'s middle radical.',
  },
  {
    q: 'ماذا يحدث لصيغة الأمر في الأفعال الخمسة (كالمشتقة من ضمائر "أنتِ" و"أنتم")؟\nWhat happens to the imperative form in the five-verb forms (derived from the pronouns أنتِ and أنتم)?',
    options: [
      'تبقى النون كما هي دائماً\nThe نون always stays as it is',
      'تُحذف النون كما تُحذف في المضارع المجزوم، مثل "اُكْتُبُوا" و"اُكْتُبِي"\nThe نون is dropped, just as it is dropped in the jussive present, like اُكْتُبُوا and اُكْتُبِي',
      'تُضاف نون زائدة\nAn extra نون is added',
      'لا يُصاغ منها أمر أصلاً\nNo imperative is formed from them at all',
    ],
    correctIndex: 1,
    a: 'في الأفعال الخمسة (أنتِ، أنتما، أنتم)، يُحذف حرف النون في صيغة الأمر تماماً كما يُحذف في المضارع المجزوم: "تَكْتُبِينَ" ← "اُكْتُبِي"، "تَكْتُبُونَ" ← "اُكْتُبُوا".\nIn the five-verb forms (أنتِ، أنتما، أنتم), the نون is dropped in the imperative exactly as it is dropped in the jussive present: تَكْتُبِينَ ← اُكْتُبِي, تَكْتُبُونَ ← اُكْتُبُوا.',
  },
  {
    q: 'أي من هذه الصيغ خطأ في صياغة الأمر من "كتب"؟\nWhich of these forms is WRONG when forming the imperative of كتب?',
    options: [
      '(أنتَ) اُكْتُبْ\n(anta) uktub — write! (correct)',
      '(أنتِ) اُكْتُبِي\n(anti) uktubī — write! (correct)',
      '(أنتم) اُكْتُبُونَ\n(antum) uktubūna (as written — wrong)',
      '(أنتما) اُكْتُبَا\n(antumā) uktubā — write! [dual] (correct)',
    ],
    correctIndex: 2,
    a: 'صيغة الأمر مع "أنتم" هي "اُكْتُبُوا" بحذف النون، لا "اُكْتُبُونَ"؛ فالنون تُحذف في الأمر تماماً كما تُحذف في المضارع المجزوم للأفعال الخمسة.\nThe imperative with أنتم is اُكْتُبُوا, with the نون dropped — not اُكْتُبُونَ; the نون drops in the imperative exactly as it drops in the jussive present for the five-verb forms.',
  },
  {
    q: 'ماذا يحدث لحرف العلة في فعل الأمر من الأفعال الأجوفة (المعتلة الوسط)، مثل "قال"؟\nWhat happens to the weak letter in the imperative of hollow verbs (weak in the middle), like قال?',
    options: [
      'يبقى حرف العلة كما هو دون تغيير: "قُولْ"\nThe weak letter stays unchanged: قُولْ',
      'يُحذف حرف العلة عند تسكين آخر الفعل، فتصبح الصيغة "قُلْ"\nThe weak letter is dropped when the end of the verb takes a sukūn, giving the form قُلْ',
      'يتحول حرف العلة إلى همزة\nThe weak letter turns into a hamza',
      'لا يوجد أمر من الأفعال الأجوفة\nThere is no imperative for hollow verbs',
    ],
    correctIndex: 1,
    a: 'في الفعل الأجوف كـ"قال" (يَقُولُ)، إذا سُكِّن آخر الفعل في الجزم أو الأمر، يُحذف حرف العلة (الواو) وتبقى حركته على ما قبله دلالة عليه: فعل الأمر منه "قُلْ" لا "قُوْلْ".\nIn a hollow verb like قال (present يَقُولُ), when the end of the verb takes a sukūn — in the jussive or the imperative — the weak letter (و) is dropped and its vowel is left on the letter before it as a trace: the imperative is قُلْ, not قُوْلْ.',
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
            Topic 34 of 47
          </p>
          <h1 className="font-serif tracking-[-0.02em] text-3xl font-bold text-foreground leading-tight mb-3">
            <span
              dir="rtl"
              lang="ar"
              style={{ fontFamily: "'Noto Naskh Arabic', serif" }}
              className="mr-2"
            >
              فعل الأمر
            </span>
            — The Imperative
          </h1>
          <p className="text-muted-foreground text-base max-w-xl">
            The imperative is derived from المضارع المجزوم by dropping the person-prefix and
            adjusting the ending. It exists ONLY for 2nd-person forms (أنتَ/أنتِ/أنتما/أنتم/أنتنّ),
            ending in سكون, or dropping the نون for the five-verb forms, or dropping a weak letter.
            A همزة الوصل is added whenever the resulting form would start with a bare consonant
            cluster (اُكْتُبْ).
          </p>
        </div>
      </div>
      <div className="mx-auto w-[min(720px,calc(100%-2rem))] py-8">
        <QuizCarousel items={quizItems} />
      </div>
    </main>
  )
}

import { createFileRoute, Link } from '@tanstack/react-router'
import { QuizCarousel } from '#/components/QuizCarousel'
import type { StrictQuizItem } from '#/routes/challenges/-quiz-types'

export const Route = createFileRoute('/challenges/grammar/sound-masculine-plural/')({
  head: () => ({ meta: [{ title: 'Sound Masculine Plural — Grammar — Tayseer' }] }),
  component: TopicPage,
})

const quizItems: StrictQuizItem[] = [
  {
    q: 'كيف يُجمع الاسم جمعاً مذكراً سالماً؟\nHow is a noun pluralized as a sound masculine plural?',
    options: [
      'بزيادة ونَ في الرفع وينَ في النصب والجر\nBy adding ونَ (-ūna) in رفع and ينَ (-īna) in both نصب and جر',
      'بزيادة ات في جميع الحالات\nBy adding ات (-āt) in every case',
      'بتغيير البنية الداخلية للكلمة\nBy changing the internal pattern of the word',
      'بزيادة انِ في الرفع ويْنِ في النصب والجر\nBy adding انِ (-āni) in رفع and يْنِ (-ayni) in نصب and جر',
    ],
    correctIndex: 0,
    a: 'جمع المذكر السالم يُصاغ بزيادة "ونَ" على المفرد في حالة الرفع و"ينَ" في حالتي النصب والجر، مثل: مسلمٌ ← مسلمونَ (رفع) / مسلمينَ (نصب وجر).\nThe sound masculine plural is formed by adding "ونَ" (-ūna) to the singular in رفع, and "ينَ" (-īna) in both نصب and جر — e.g. مسلمٌ ← مسلمونَ (رفع) / مسلمينَ (نصب وجر).',
  },
  {
    q: 'على أيّ نوع من الأسماء يُطبَّق جمع المذكر السالم عادة؟\nWhat kind of noun does the sound masculine plural normally apply to?',
    options: [
      'الأسماء الجامدة غير العاقلة (كتاب، بيت)\nNon-human, non-derived nouns (كتاب، بيت — "book," "house")',
      'أعلام الذكور العقلاء والصفات المذكرة العاقلة (مثل مسلم، معلّم)\nProper names of rational males and masculine rational-noun adjectives (like مسلم، معلّم — "Muslim," "teacher")',
      'كل اسم مؤنث\nEvery feminine noun',
      'الأسماء الخمسة فقط\nOnly the Five Nouns (الأسماء الخمسة)',
    ],
    correctIndex: 1,
    a: 'يُطبَّق جمع المذكر السالم غالباً على أعلام الذكور العقلاء وعلى الصفات (اسم الفاعل واسم المفعول ونحوهما) الدالة على المذكر العاقل، مثل "مسلم ← مسلمون" و"معلّم ← معلّمون"، ولا يُقاس على الأسماء الجامدة غير العاقلة.\nThe sound masculine plural is mostly used for proper names of rational males and for adjectives (active/passive participles and the like) describing a rational male, like مسلم ← مسلمون and معلّم ← معلّمون — it is not applied to non-human, non-derived nouns like كتاب or بيت.',
  },
  {
    q: 'جاء المعلمـ___ إلى المدرسةِ (جمع، رفع)\nجاء المعلمـ___ إلى المدرسةِ — "The teachers came to school" (plural, رفع)',
    options: [
      'المعلمونَ\nal-muʿallimūna — رفع form',
      'المعلمينَ\nal-muʿallimīna — نصب/جر form',
      'المعلماتُ\nal-muʿallimātu — feminine plural',
      'المعلمانِ\nal-muʿallimāni — dual, رفع',
    ],
    correctIndex: 0,
    a: 'الفاعل هنا جمع مذكر سالم مرفوع، وعلامة رفعه الواو: "المعلمونَ".\nThe subject (فاعل) here is a sound masculine plural in رفع, and its رفع marker is و: "المعلمونَ" — "the teachers."',
  },
  {
    q: 'رأيتُ المعلمـ___ في الاجتماعِ (جمع، نصب)\nرأيتُ المعلمـ___ في الاجتماعِ — "I saw the teachers at the meeting" (plural, نصب)',
    options: [
      'المعلمينَ\nal-muʿallimīna — نصب/جر form',
      'المعلمونَ\nal-muʿallimūna — رفع form',
      'المعلماتِ\nal-muʿallimāti — feminine plural, جر/نصب',
      'المعلمَينِ\nal-muʿallimayni — dual, نصب/جر',
    ],
    correctIndex: 0,
    a: 'المفعول به هنا جمع مذكر سالم منصوب، وعلامة نصبه الياء لا الألف: "المعلمينَ".\nThe direct object (مفعول به) here is a sound masculine plural in نصب, and its نصب marker is ي, not ا: "المعلمينَ" — "the teachers."',
  },
  {
    q: 'ماذا يحدث لنون جمع المذكر السالم إذا صار الجمع مضافاً؟\nWhat happens to the نون of a sound masculine plural when the plural becomes a مضاف (first term of an idāfah)?',
    options: [
      'تبقى كما هي\nIt stays as it is',
      'تُحذف، مثل "معلّمو المدرسةِ"\nIt is dropped, as in "معلّمو المدرسةِ" — "the teachers of the school"',
      'تتحول إلى تنوين\nIt turns into تنوين',
      'يتحول الجمع إلى جمع تكسير\nThe plural switches to a broken plural',
    ],
    correctIndex: 1,
    a: 'إذا وقع جمع المذكر السالم مضافاً (أول ركني الإضافة) حُذفت نونه، فيقال "معلّمو المدرسةِ" (رفع) و"معلّمي المدرسةِ" (نصب وجر) لا "معلّمونَ المدرسةِ".\nWhen a sound masculine plural becomes a مضاف (the first term of an idāfah), its نون is dropped: "معلّمو المدرسةِ" (رفع) and "معلّمي المدرسةِ" (نصب/جر) — never "معلّمونَ المدرسةِ" with the نون kept.',
  },
  {
    q: 'أيّ من هذه الجمل بها خطأ نحوي؟\nWhich of these sentences contains a grammatical error?',
    options: [
      'هؤلاء معلّمو المدرسةِ المجتهدونَ\nhāʾulāʾi muʿallimū l-madrasati l-mujtahidūna — "These are the hardworking teachers of the school"',
      'رأيتُ معلّمينَ المدرسةِ\nraʾaytu muʿallimīna l-madrasati',
      'سلّمتُ على معلّمي المدرسةِ\nsallamtu ʿalā muʿallimī l-madrasati — "I greeted the teachers of the school"',
      'هؤلاء معلّمونَ مجتهدونَ\nhāʾulāʾi muʿallimūna mujtahidūna — "These are hardworking teachers"',
    ],
    correctIndex: 1,
    a: '"معلّمينَ" هنا مضاف إلى "المدرسةِ" فيجب حذف نونه: الصواب "رأيتُ معلّمي المدرسةِ" لا "معلّمينَ المدرسةِ".\n"معلّمينَ" here is a مضاف before "المدرسةِ," so its نون must be dropped: the correct form is "رأيتُ معلّمي المدرسةِ," not "معلّمينَ المدرسةِ" with the نون kept.',
  },
  {
    q: 'مررتُ بالمهندسـ___ في المكتبِ (جمع، جر)\nمررتُ بالمهندسـ___ في المكتبِ — "I passed by the engineers at the office" (plural, جر)',
    options: [
      'المهندسينَ\nal-muhandisīna — جر/نصب form',
      'المهندسونَ\nal-muhandisūna — رفع form',
      'المهندساتِ\nal-muhandisāti — feminine plural',
      'المهندسَينِ\nal-muhandisayni — dual, جر/نصب',
    ],
    correctIndex: 0,
    a: 'الاسم هنا مجرور بحرف الجر "الباء"، وعلامة جر جمع المذكر السالم الياء كنصبه: "المهندسينَ".\nThe noun here is مجرور after the preposition بـ, and the جر marker of a sound masculine plural is ي — the same as its نصب marker: "المهندسينَ" — "the engineers."',
  },
  {
    q: 'ما حركة نون "ونَ" و"ينَ" في جمع المذكر السالم، مثل "الفائزونَ"؟\nWhat vowel does the نون of "ونَ" and "ينَ" carry in the sound masculine plural, as in "الفائزونَ" ("the winners")?',
    options: [
      'مكسورة دائماً\nAlways kasra',
      'مفتوحة دائماً\nAlways fatḥa',
      'مضمومة دائماً\nAlways ḍamma',
      'ساكنة دائماً\nAlways with no vowel (sākinah)',
    ],
    correctIndex: 1,
    a: 'نون جمع المذكر السالم مفتوحة دائماً في "ونَ" و"ينَ" بصرف النظر عن موقع الكلمة الإعرابي، بخلاف نون المثنى التي تكون مكسورة دائماً.\nThe نون of the sound masculine plural always carries fatḥa in both "ونَ" and "ينَ," regardless of the word\'s grammatical role — unlike the نون of the dual, which is always kasra.',
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
            Topic 16 of 62
          </p>
          <h1 className="font-serif tracking-[-0.02em] text-3xl font-bold text-foreground leading-tight mb-3">
            <span
              dir="rtl"
              lang="ar"
              style={{ fontFamily: "'Noto Naskh Arabic', serif" }}
              className="mr-2"
            >
              جمع المذكر السالم
            </span>
            — Sound Masculine Plural
          </h1>
          <p className="text-muted-foreground text-base max-w-xl">
            Sound masculine plural (<span className="font-medium text-foreground"><bdi lang="ar">جمع المذكر السالم</bdi></span>)
            is formed by adding <span className="font-medium text-foreground"><bdi lang="ar">ونَ</bdi></span> in <bdi lang="ar">رفع</bdi> or{' '}
            <span className="font-medium text-foreground"><bdi lang="ar">ينَ</bdi></span> in <bdi lang="ar">نصب/جر</bdi> to masculine human
            nouns and participles — never to non-human nouns. When the plural becomes a <bdi lang="ar">مضاف</bdi>, its
            <bdi lang="ar">نون</bdi> is dropped.
          </p>
        </div>
      </div>
      <div className="mx-auto w-[min(720px,calc(100%-2rem))] py-8">
        <QuizCarousel items={quizItems} />
      </div>
    </main>
  )
}

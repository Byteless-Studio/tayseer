import { createFileRoute, Link } from '@tanstack/react-router'
import { QuizCarousel } from '#/components/QuizCarousel'
import type { StrictQuizItem } from '#/routes/challenges/-quiz-types'

export const Route = createFileRoute('/challenges/grammar/defective-diptotes/')({
  head: () => ({ meta: [{ title: 'Defective Nouns & Diptotes — Grammar — Tayseer' }] }),
  component: TopicPage,
})

const quizItems: StrictQuizItem[] = [
  {
    q: 'ما هو الاسم المنقوص؟\nWhat is an الاسم المنقوص (defective noun)?',
    options: [
      'اسم ينتهي بياء لازمة مكسور ما قبلها، مثل "القاضي"\nA noun ending in a permanent ي preceded by a kasra, like "القاضي" ("the judge")',
      'اسم ينتهي بألف، مثل "الفتى"\nA noun ending in an alif, like "الفتى" ("the youth")',
      'اسم ينتهي بواو، مثل "الدلو"\nA noun ending in a و, like "الدلو" ("the bucket")',
      'اسم لا ينصرف\nA noun that does not decline (a diptote)',
    ],
    correctIndex: 0,
    a: 'الاسم المنقوص اسم معرب ينتهي بياء لازمة مكسور ما قبلها، مثل "القاضي" و"الداعي" و"الساعي".\nAn الاسم المنقوص is a declinable noun ending in a permanent ي preceded by a kasra, like "القاضي" ("the judge"), "الداعي" ("the caller"), and "الساعي" ("the one striving").',
  },
  {
    q: 'ماذا يحدث لياء الاسم المنقوص النكرة في حالتي الرفع والجر؟\nWhat happens to the ي of an indefinite defective noun in the nominative and genitive?',
    options: [
      'تبقى ثابتة وتُنوَّن\nIt stays and takes تنوين',
      'تُحذف وتبقى الكسرة دالة عليها مع تنوين العوض، مثل "قاضٍ"\nIt is dropped, with the kasra remaining to indicate it, plus a compensatory تنوين — like "قاضٍ"',
      'تتحول إلى ألف\nIt turns into an alif',
      'تتحول إلى واو\nIt turns into a و',
    ],
    correctIndex: 1,
    a: 'في حالتي الرفع والجر، إذا كان الاسم المنقوص نكرة، تُحذف ياؤه لفظاً وتبقى الكسرة (مع تنوين العوض) دالة عليها: "قاضٍ" لا "قاضيٌ" ولا "قاضيٍ".\nIn the nominative and genitive, if the defective noun is indefinite, its ي is dropped in pronunciation, and the kasra (plus a compensatory تنوين) remains to indicate it: "قاضٍ", not "قاضيٌ" or "قاضيٍ".',
  },
  {
    q: 'ماذا يحدث لياء الاسم المنقوص النكرة في حالة النصب؟\nWhat happens to the ي of an indefinite defective noun in the accusative?',
    options: [
      'تُحذف كما في الرفع والجر\nIt is dropped, as in the nominative and genitive',
      'تثبت الياء وتُنوَّن بالفتح، مثل "رأيتُ قاضياً"\nThe ي stays, and it takes تنوين with fatḥa, like "رأيتُ قاضياً" ("I saw a judge")',
      'تتحول إلى واو\nIt turns into a و',
      'لا يجوز نصب الاسم المنقوص\nThe defective noun cannot be put in the accusative',
    ],
    correctIndex: 1,
    a: 'في حالة النصب تثبت ياء الاسم المنقوص النكرة ويظهر عليها التنوين بالفتح: "رأيتُ قاضياً" — بخلاف الرفع والجر حيث تُحذف الياء.\nIn the accusative, the ي of an indefinite defective noun stays, and تنوين with fatḥa appears on it: "رأيتُ قاضياً" — unlike the nominative and genitive, where the ي is dropped.',
  },
  {
    q: 'ماذا يحدث لياء الاسم المنقوص إذا كان معرفاً، مثل "القاضي"؟\nWhat happens to the ي of a defective noun when it is definite, like "القاضي"?',
    options: [
      'تبقى ثابتة في جميع الحالات وتُقدَّر عليها الحركات\nIt stays in every case, with the case vowels merely implied on it',
      'تُحذف دائماً\nIt is always dropped',
      'تتحول إلى ألف دائماً\nIt always turns into an alif',
      'يصبح الاسم ممنوعاً من الصرف\nThe noun becomes a diptote',
    ],
    correctIndex: 0,
    a: 'إذا كان الاسم المنقوص معرفاً (كـ"القاضي")، تثبت ياؤه في جميع حالات الإعراب وتُقدَّر عليها الضمة والكسرة للثقل، بينما تظهر الفتحة في النصب: "جاء القاضي"، "رأيتُ القاضيَ"، "سلّمتُ على القاضي".\nWhen the defective noun is definite (like "القاضي"), its ي stays in every case, with ḍamma and kasra merely implied on it (too heavy to pronounce), while fatḥa in the accusative is visible: "جاء القاضي" ("The judge came"), "رأيتُ القاضيَ" ("I saw the judge"), "سلّمتُ على القاضي" ("I greeted the judge").',
  },
  {
    q: 'ما علامة الاسم الممنوع من الصرف في حالتي الرفع والنصب؟\nWhat marks a diptote noun in the nominative and accusative?',
    options: [
      'نفس علامات الاسم المصروف تماماً بما فيها التنوين\nExactly the same markers as a regular (fully declinable) noun, including تنوين',
      'يُرفع بالضمة ويُنصب بالفتحة كالمصروف، لكن بلا تنوين\nNominative with ḍamma and accusative with fatḥa, just like a regular noun, but without تنوين',
      'يُجر بالفتحة في الرفع والنصب معاً\nGenitive with fatḥa in both the nominative and accusative',
      'يُبنى في جميع حالاته\nIt is built (مبني) in every case',
    ],
    correctIndex: 1,
    a: 'الممنوع من الصرف يُرفع بالضمة ويُنصب بالفتحة كالاسم العادي، لكنه لا يقبل التنوين أبداً؛ والفارق الأبرز يظهر في الجر حيث يُجر بالفتحة نيابة عن الكسرة إذا كان نكرة.\nA diptote is nominative with ḍamma and accusative with fatḥa, just like a regular noun, but it never takes تنوين; the clearest difference shows up in the genitive, where it takes fatḥa instead of kasra when indefinite.',
  },
  {
    q: 'كيف يُجر الاسم الممنوع من الصرف إذا كان نكرة (غير معرف بأل ولا مضاف)؟\nHow is a diptote put in the genitive when it is indefinite (not definite with أل and not in idāfah)?',
    options: [
      'بالكسرة كالمعتاد\nWith kasra, as usual',
      'بالفتحة نيابة عن الكسرة، وبلا تنوين\nWith fatḥa instead of kasra, and without تنوين',
      'بالضمة\nWith ḍamma',
      'لا يجوز جره إطلاقاً\nIt can never be put in the genitive',
    ],
    correctIndex: 1,
    a: 'الاسم الممنوع من الصرف (إذا لم يكن معرفاً بأل ولا مضافاً) يُجر بالفتحة نيابة عن الكسرة وبلا تنوين، مثل "صلّيتُ في مساجدَ كثيرةٍ" — بخلاف الاسم المصروف الذي يُجر بالكسرة المنوَّنة.\nA diptote (when not definite with أل and not in idāfah) is put in the genitive with fatḥa instead of kasra, and without تنوين — like "صلّيتُ في مساجدَ كثيرةٍ" ("I prayed in many mosques") — unlike a regular noun, which takes a kasra with تنوين.',
  },
  {
    q: 'أيّ الأسماء التالية ممنوع من الصرف؟\nWhich of the following nouns are diptotes?',
    options: [
      '"أحمر" (وزن أفعل للألوان) و"مساجد" (وزن مفاعل جمعاً)\n"أحمر" ("red", the أفعل pattern for colors) and "مساجد" ("mosques", the مفاعل broken-plural pattern)',
      '"كتاب" و"قلم"\n"كتاب" ("book") and "قلم" ("pen")',
      '"رجل" و"بيت"\n"رجل" ("man") and "بيت" ("house")',
      '"طالب" و"معلم"\n"طالب" ("student") and "معلم" ("teacher")',
    ],
    correctIndex: 0,
    a: 'من أبرز أسباب المنع من الصرف: وزن "أفعل" في الألوان وأفعل التفضيل (أحمر، أفضل)، وصيغ منتهى الجموع على وزن مفاعل/مفاعيل (مساجد، مصابيح)، وبعض الأعلام (كأحمد وإبراهيم ومعظم الأسماء الأعجمية).\nAmong the main causes of diptote status: the pattern "أفعل" in colors and elatives (أحمر "red", أفضل "better/best"), the صيغة منتهى الجموع pattern مفاعل/مفاعيل (مساجد "mosques", مصابيح "lamps"), and certain proper names (like أحمد, إبراهيم, and most non-Arabic names).',
  },
  {
    q: 'أيّ من هذه الجمل بها خطأ نحوي؟\nWhich of these sentences contains a grammatical error?',
    options: [
      'صلّيتُ في مساجدَ جميلةٍ\n"I prayed in beautiful mosques" — مساجدَ without تنوين',
      'صلّيتُ في مساجدٍ جميلةٍ\n"I prayed in beautiful mosques" — مساجدٍ with تنوين',
      'قابلتُ رجلاً أفضلَ مني\n"I met a man better than me"',
      'مررتُ بمصابيحَ مضيئةٍ\n"I passed by lit lamps"',
    ],
    correctIndex: 1,
    a: '"مساجد" اسم ممنوع من الصرف (على وزن منتهى الجموع مفاعل)، فلا يقبل التنوين ويُجر بالفتحة: الصواب "صلّيتُ في مساجدَ جميلةٍ" لا "مساجدٍ" بالتنوين والكسر.\n"مساجد" is a diptote (on the صيغة منتهى الجموع pattern مفاعل), so it takes no تنوين and is put in the genitive with fatḥa: the correct form is "صلّيتُ في مساجدَ جميلةٍ", not "مساجدٍ" with تنوين and kasra.',
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
            Topic 26 of 62
          </p>
          <h1 className="font-serif tracking-[-0.02em] text-3xl font-bold text-foreground leading-tight mb-3">
            <span
              dir="rtl"
              lang="ar"
              style={{ fontFamily: "'Noto Naskh Arabic', serif" }}
              className="mr-2"
            >
              المنقوص والممنوع من الصرف
            </span>
            — Defective Nouns & Diptotes
          </h1>
          <p className="text-muted-foreground text-base max-w-xl">
            <bdi lang="ar">الاسم المنقوص</bdi> ends in <bdi lang="ar">ي</bdi> preceded by kasra (<bdi lang="ar">القاضي</bdi>) — it drops the <bdi lang="ar">ي</bdi> in indefinite
            <bdi lang="ar">رفع/جر</bdi> (<bdi lang="ar">قاضٍ</bdi>) but keeps it in <bdi lang="ar">نصب</bdi> (<bdi lang="ar">قاضياً</bdi>) and always when definite. <bdi lang="ar">الممنوع من الصرف</bdi>
            takes no <bdi lang="ar">تنوين</bdi> and fatha instead of kasra in indefinite <bdi lang="ar">جر</bdi> — categories: <bdi lang="ar">أفعل</bdi>-pattern
            colors/elatives, certain proper names, and plurals on <bdi lang="ar">مفاعل/مفاعيل</bdi>.
          </p>
        </div>
      </div>
      <div className="mx-auto w-[min(720px,calc(100%-2rem))] py-8">
        <QuizCarousel items={quizItems} />
      </div>
    </main>
  )
}

import { createFileRoute, Link } from '@tanstack/react-router'
import { QuizCarousel } from '#/components/QuizCarousel'
import type { StrictQuizItem } from '#/routes/challenges/-quiz-types'

export const Route = createFileRoute('/challenges/grammar/verb-basics-faail-mafool/')({
  head: () => ({ meta: [{ title: 'Verb Sentence Basics — Grammar — Tayseer' }] }),
  component: TopicPage,
})

const quizItems: StrictQuizItem[] = [
  {
    q: 'ما هو الفاعل وما حكم إعرابه؟\nWhat is the فاعل (subject), and what is its grammatical case?',
    options: [
      'اسم منصوب يقع عليه فعل الفاعل\nAn accusative (منصوب) noun that the action of the verb falls upon',
      'اسم مرفوع يدل على من قام بالفعل أو اتصف به، ويأتي بعد الفعل في الترتيب القياسي\nA nominative (مرفوع) noun denoting who performed the action or holds its quality, coming after the verb in standard word order',
      'اسم مجرور بحرف جر يسبقه\nA genitive (مجرور) noun governed by a preceding preposition',
      'فعل يدل على الحدث نفسه\nA verb denoting the event itself',
    ],
    correctIndex: 1,
    a: 'الفاعل اسم مرفوع دائماً يدل على من قام بالفعل، ويأتي بعد الفعل في الترتيب القياسي للجملة الفعلية، مثل "الطالبُ" في "كتبَ الطالبُ الدرسَ".\nThe فاعل is always a nominative (مرفوع) noun denoting who performed the action, coming after the verb in the standard order of a verbal sentence — like الطالبُ in كتبَ الطالبُ الدرسَ ("the student wrote the lesson").',
  },
  {
    q: 'ما الترتيب القياسي (الأصلي) لعناصر الجملة الفعلية في العربية؟\nWhat is the standard (default) word order for a verbal sentence in Arabic?',
    options: [
      'فعل - فاعل - مفعول به\nVerb, subject, object (فعل - فاعل - مفعول به)',
      'فاعل - فعل - مفعول به\nSubject, verb, object (فاعل - فعل - مفعول به)',
      'مفعول به - فعل - فاعل\nObject, verb, subject (مفعول به - فعل - فاعل)',
      'فاعل - مفعول به - فعل\nSubject, object, verb (فاعل - مفعول به - فعل)',
    ],
    correctIndex: 0,
    a: 'الترتيب القياسي للجملة الفعلية هو: الفعل ثم الفاعل ثم المفعول به (فعل-فاعل-مفعول به)، كما في "كتبَ الطالبُ الدرسَ"، وإن جاز التقديم والتأخير لأغراض بلاغية.\nThe standard order of a verbal sentence is verb, then subject, then object (فعل-فاعل-مفعول به), as in كتبَ الطالبُ الدرسَ ("the student wrote the lesson") — though reordering is allowed for rhetorical effect.',
  },
  {
    q: 'أكمل: أكلَ الولدُ ___ (التفاحة، مفعول به منصوب)\nComplete: أكلَ الولدُ ___ — "The boy ate the apple" (fill in التفاحة as the accusative direct object)',
    options: [
      'التفاحةُ\nat-tuffāḥatu — nominative (مرفوع)',
      'التفاحةَ\nat-tuffāḥata — accusative (منصوب)',
      'التفاحةِ\nat-tuffāḥati — genitive (مجرور)',
      'تفاحةٌ\ntuffāḥatun — indefinite nominative (مرفوع)',
    ],
    correctIndex: 1,
    a: 'المفعول به منصوب دائماً، فتكون "التفاحةَ" هي الإجابة الصحيحة: "أكلَ الولدُ التفاحةَ".\nThe direct object (مفعول به) is always accusative (منصوب), so التفاحةَ is the correct answer: أكلَ الولدُ التفاحةَ — "The boy ate the apple."',
  },
  {
    q: 'هل يمكن أن يكون للفعل الواحد أكثر من فاعل واحد نحوياً؟\nCan a single verb grammatically have more than one فاعل (subject)?',
    options: [
      'نعم، يمكن أن يكون له فاعلان أو أكثر في آن واحد\nYes, it can have two or more subjects at once',
      'لا، لكل فعل فاعل واحد فقط؛ وإسناد الفعل لعدة أشخاص يتم بالعطف على الفاعل لا بتعدد الفاعلين\nNo, every verb has only one فاعل; assigning the verb to several people is done by conjoining (عطف) onto the subject, not by having multiple subjects',
      'نعم، إذا كان الفعل متعدياً\nYes, if the verb is transitive (متعدٍ)',
      'لا يوجد فاعل إلا في الجملة الاسمية\nA فاعل only exists in a nominal sentence (الجملة الاسمية)',
    ],
    correctIndex: 1,
    a: 'الفعل الواحد له فاعل واحد فقط نحوياً؛ فعند إسناده لعدة أشخاص نستخدم فاعلاً واحداً معطوفاً عليه بحرف عطف، مثل "كتبَ زيدٌ وعمرٌو"، ويبقى "زيدٌ" هو الفاعل و"عمرٌو" معطوفاً عليه.\nA single verb grammatically has only one فاعل; when it is attributed to several people, we use one subject with others conjoined (معطوف) onto it, as in كتبَ زيدٌ وعمرٌو ("Zayd and Amr wrote") — زيدٌ remains the فاعل, and عمرٌو is conjoined onto it.',
  },
  {
    q: 'ما الفرق بين الفعل المتعدي والفعل اللازم؟\nWhat is the difference between a transitive verb (متعدٍ) and an intransitive verb (لازم)?',
    options: [
      'المتعدي يحتاج إلى مفعول به لتمام معناه، واللازم يكتفي بفاعله دون حاجة لمفعول به\nThe transitive verb needs a direct object to complete its meaning; the intransitive verb is complete with just its subject, needing no object',
      'المتعدي لا يحتاج فاعلاً، واللازم يحتاج فاعلاً\nThe transitive verb needs no subject, while the intransitive verb does',
      'المتعدي فعل ماضٍ فقط، واللازم فعل مضارع فقط\nThe transitive verb is only past tense, and the intransitive verb is only present tense',
      'لا فرق بينهما في المعنى أو الاستعمال\nThere is no difference between them in meaning or usage',
    ],
    correctIndex: 0,
    a: 'الفعل المتعدي يتعدى أثره إلى مفعول به فيحتاج إليه لتمام المعنى، مثل "كتبَ الرسالةَ"؛ أما الفعل اللازم فيكتفي بفاعله، مثل "ذهبَ الولدُ"، فهو تام المعنى بفاعله وحده.\nA transitive verb (متعدٍ) carries its effect over to a direct object and needs one to complete its meaning, as in كتبَ الرسالةَ ("wrote the letter"); an intransitive verb (لازم) is complete with just its subject, as in ذهبَ الولدُ ("the boy went") — its meaning is whole with the subject alone.',
  },
  {
    q: 'أي من هذه الجمل بها خطأ في إعراب الفاعل والمفعول به؟\nWhich of these sentences has an error in the case-marking of the subject and object?',
    options: [
      'قرأ الطالبُ الكتابَ\nqaraʾa ṭ-ṭālibu l-kitāba — "The student read the book"',
      'قرأ الطالبَ الكتابُ\nqaraʾa ṭ-ṭāliba l-kitābu',
      'فتح الرجلُ البابَ\nfataḥa r-rajulu l-bāba — "The man opened the door"',
      'شرب الطفلُ الماءَ\nshariba ṭ-ṭiflu l-māʾa — "The child drank the water"',
    ],
    correctIndex: 1,
    a: 'في "قرأ الطالبَ الكتابُ" عُكس الإعراب: الفاعل ("الطالب") يجب أن يكون مرفوعاً والمفعول به ("الكتاب") منصوباً؛ الصواب: "قرأ الطالبُ الكتابَ".\nIn قرأ الطالبَ الكتابُ the case-marking is reversed: the subject (الطالب) must be nominative (مرفوع) and the object (الكتاب) accusative (منصوب); the correct form is قرأ الطالبُ الكتابَ.',
  },
  {
    q: 'ما هو الجذر الثلاثي (يُرمز له بـ ف-ع-ل) وما فائدته؟\nWhat is the three-consonant root (symbolized ف-ع-ل), and what is it used for?',
    options: [
      'هيكل مكوّن من ثلاثة أحرف أصلية (مثل ك-ت-ب) تُبنى منه جميع تصريفات الفعل وأوزانه المشتقة\nA skeleton of three original consonants (like ك-ت-ب) from which every conjugation and derived pattern of the verb is built',
      'صيغة خاصة بالفعل المضارع فقط\nA form specific to the present-tense verb only',
      'اسم آخر لحروف الجر\nAnother name for prepositions (حروف الجر)',
      'قاعدة تخص الأسماء الخمسة فقط\nA rule specific to the Five Nouns only',
    ],
    correctIndex: 0,
    a: 'الجذر الثلاثي مثل ف-ع-ل هو الهيكل الأساسي من ثلاثة أحرف أصلية (مثل ك-ت-ب لـ"كتب") الذي تُشتق منه كل صيغ الفعل وأوزانه، ماضياً ومضارعاً ومصدراً واسم فاعل ونحوه.\nThe three-consonant root, symbolized ف-ع-ل, is the basic skeleton of three original consonants (like ك-ت-ب for كتب) from which every form and pattern of the verb is derived — past tense, present tense, verbal noun, active participle, and so on.',
  },
  {
    q: 'الفعل "نامَ" في جملة "نامَ الطفلُ" يُصنَّف على أنه:\nThe verb نامَ in the sentence نامَ الطفلُ ("The child slept") is classified as:',
    options: [
      'فعل متعدٍ يحتاج مفعولاً به\nA transitive verb (متعدٍ) needing a direct object',
      'فعل لازم يكتفي بفاعله\nAn intransitive verb (لازم) complete with just its subject',
      'اسم لا فعل\nA noun, not a verb',
      'حرف جر\nA preposition (حرف جر)',
    ],
    correctIndex: 1,
    a: '"نامَ" فعل لازم؛ يكتفي بفاعله ("الطفلُ") ولا يحتاج إلى مفعول به لتمام معناه، بخلاف الأفعال المتعدية كـ"أكلَ" أو "كتبَ".\nنامَ is an intransitive verb (لازم); it is complete with just its subject (الطفلُ) and needs no direct object, unlike transitive verbs such as أكلَ or كتبَ.',
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
            Topic 29 of 47
          </p>
          <h1 className="font-serif tracking-[-0.02em] text-3xl font-bold text-foreground leading-tight mb-3">
            <span
              dir="rtl"
              lang="ar"
              style={{ fontFamily: "'Noto Naskh Arabic', serif" }}
              className="mr-2"
            >
              الفاعل والمفعول به
            </span>
            — Verb Sentence Basics
          </h1>
          <p className="text-muted-foreground text-base max-w-xl">
            Every verbal sentence rests on a <bdi lang="ar">فعل</bdi> (verb), its <bdi lang="ar">فاعل</bdi> (subject — always <bdi lang="ar">مرفوع</bdi>,
            appearing after the verb), and often a{' '}
            <span className="font-medium text-foreground"><bdi lang="ar">مفعول به</bdi></span> (object — always <bdi lang="ar">منصوب</bdi>).
            Standard word order is verb-subject-object, a verb takes only ONE <bdi lang="ar">فاعل</bdi>, and verbs
            split into <bdi lang="ar">متعدٍ</bdi> (transitive, takes an object) and <bdi lang="ar">لازم</bdi> (intransitive). Every
            conjugated form is built from a three-consonant root skeleton like <bdi lang="ar">ف</bdi>-<bdi lang="ar">ع</bdi>-<bdi lang="ar">ل</bdi>.
          </p>
        </div>
      </div>
      <div className="mx-auto w-[min(720px,calc(100%-2rem))] py-8">
        <QuizCarousel items={quizItems} />
      </div>
    </main>
  )
}

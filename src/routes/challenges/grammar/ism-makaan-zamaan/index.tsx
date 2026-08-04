import { createFileRoute } from '@tanstack/react-router'
import { GrammarTopicPage } from '#/routes/challenges/grammar/-topic-page'
import type { StrictQuizItem } from '#/routes/challenges/-quiz-types'

export const Route = createFileRoute('/challenges/grammar/ism-makaan-zamaan/')({
  head: () => ({ meta: [{ title: 'Nouns of Place & Time — Grammar — Tayseer' }] }),
  component: TopicPage,
})

const quizItems: StrictQuizItem[] = [
  {
    "q": "ما اللفظ الذي يطابق الوصف الآتي: اسم مكان على وزن مَفْعَل؟\nWhich expression matches this description: A place noun on the pattern مَفْعَل?",
    "options": [
      "مَكْتَب\nmaktab — office or desk",
      "مَطْعَم\nmaṭʿam — restaurant",
      "مَسْجِد\nmasjid — mosque",
      "مَجْلِس\nmajlis — sitting room or council",
      "مُسْتَشْفَى\nmustashfā — hospital"
    ],
    "correctIndex": 0,
    "a": "مَكْتَب: اسم مكان على وزن مَفْعَل.\nmaktab — office or desk: A place noun on the pattern مَفْعَل."
  },
  {
    "q": "أيُّ مثالٍ يستعمل مَكْتَب؟\nWhich example uses maktab — office or desk?",
    "options": [
      "هذا مَكْتَبُ المديرِ.\nThis is the principal’s office.",
      "نأكلُ في المَطْعَمِ.\nWe eat in the restaurant.",
      "صلّيتُ في المَسْجِدِ.\nI prayed in the mosque.",
      "جلسنا في المَجْلِسِ.\nWe sat in the sitting room.",
      "ذهبَ المريضُ إلى المُسْتَشْفَى.\nThe patient went to the hospital."
    ],
    "correctIndex": 0,
    "a": "هذا مَكْتَبُ المديرِ.\nThis is the principal’s office."
  },
  {
    "q": "أكمل بالنمط المناسب: هذا ____ُ المديرِ..\nComplete with the appropriate form: This is the principal’s office.",
    "options": [
      "مَكْتَب\nmaktab — office or desk",
      "مَطْعَم\nmaṭʿam — restaurant",
      "مَسْجِد\nmasjid — mosque",
      "مَجْلِس\nmajlis — sitting room or council",
      "مُسْتَشْفَى\nmustashfā — hospital"
    ],
    "correctIndex": 0,
    "a": "مَكْتَب هو اللفظ المناسب في هذا المثال.\nmaktab — office or desk is the appropriate form in this example."
  },
  {
    "q": "ما التحليل الأنسب لـ مَكْتَب؟\nWhat is the best description of maktab — office or desk?",
    "options": [
      "اسم مكان على وزن مَفْعَل\nA place noun on the pattern مَفْعَل",
      "اسم مكان على وزن مَفْعَل\nA place noun on the pattern مَفْعَل",
      "اسم مكان على وزن مَفْعِل\nA place noun on the pattern مَفْعِل",
      "اسم مكان على وزن مَفْعِل\nA place noun on the pattern مَفْعِل",
      "اسم مكان من فعل مزيد\nA place noun derived from an augmented verb"
    ],
    "correctIndex": 0,
    "a": "مَكْتَب: اسم مكان على وزن مَفْعَل.\nmaktab — office or desk: A place noun on the pattern مَفْعَل."
  },
  {
    "q": "ما اللفظ الذي يطابق الوصف الآتي: اسم مكان على وزن مَفْعَل؟\nWhich expression matches this description: A place noun on the pattern مَفْعَل?",
    "options": [
      "مَكْتَب\nmaktab — office or desk",
      "مَطْعَم\nmaṭʿam — restaurant",
      "مَسْجِد\nmasjid — mosque",
      "مَجْلِس\nmajlis — sitting room or council",
      "مُسْتَشْفَى\nmustashfā — hospital"
    ],
    "correctIndex": 1,
    "a": "مَطْعَم: اسم مكان على وزن مَفْعَل.\nmaṭʿam — restaurant: A place noun on the pattern مَفْعَل."
  },
  {
    "q": "أيُّ مثالٍ يستعمل مَطْعَم؟\nWhich example uses maṭʿam — restaurant?",
    "options": [
      "هذا مَكْتَبُ المديرِ.\nThis is the principal’s office.",
      "نأكلُ في المَطْعَمِ.\nWe eat in the restaurant.",
      "صلّيتُ في المَسْجِدِ.\nI prayed in the mosque.",
      "جلسنا في المَجْلِسِ.\nWe sat in the sitting room.",
      "ذهبَ المريضُ إلى المُسْتَشْفَى.\nThe patient went to the hospital."
    ],
    "correctIndex": 1,
    "a": "نأكلُ في المَطْعَمِ.\nWe eat in the restaurant."
  },
  {
    "q": "أكمل بالنمط المناسب: نأكلُ في ال____ِ..\nComplete with the appropriate form: We eat in the restaurant.",
    "options": [
      "مَطْعَم\nmaṭʿam — restaurant",
      "مَسْجِد\nmasjid — mosque",
      "مَجْلِس\nmajlis — sitting room or council",
      "مُسْتَشْفَى\nmustashfā — hospital",
      "مَكْتَب\nmaktab — office or desk"
    ],
    "correctIndex": 0,
    "a": "مَطْعَم هو اللفظ المناسب في هذا المثال.\nmaṭʿam — restaurant is the appropriate form in this example."
  },
  {
    "q": "ما التحليل الأنسب لـ مَطْعَم؟\nWhat is the best description of maṭʿam — restaurant?",
    "options": [
      "اسم مكان على وزن مَفْعَل\nA place noun on the pattern مَفْعَل",
      "اسم مكان على وزن مَفْعَل\nA place noun on the pattern مَفْعَل",
      "اسم مكان على وزن مَفْعِل\nA place noun on the pattern مَفْعِل",
      "اسم مكان على وزن مَفْعِل\nA place noun on the pattern مَفْعِل",
      "اسم مكان من فعل مزيد\nA place noun derived from an augmented verb"
    ],
    "correctIndex": 1,
    "a": "مَطْعَم: اسم مكان على وزن مَفْعَل.\nmaṭʿam — restaurant: A place noun on the pattern مَفْعَل."
  },
  {
    "q": "ما اللفظ الذي يطابق الوصف الآتي: اسم مكان على وزن مَفْعِل؟\nWhich expression matches this description: A place noun on the pattern مَفْعِل?",
    "options": [
      "مَكْتَب\nmaktab — office or desk",
      "مَطْعَم\nmaṭʿam — restaurant",
      "مَسْجِد\nmasjid — mosque",
      "مَجْلِس\nmajlis — sitting room or council",
      "مُسْتَشْفَى\nmustashfā — hospital"
    ],
    "correctIndex": 2,
    "a": "مَسْجِد: اسم مكان على وزن مَفْعِل.\nmasjid — mosque: A place noun on the pattern مَفْعِل."
  },
  {
    "q": "أيُّ مثالٍ يستعمل مَسْجِد؟\nWhich example uses masjid — mosque?",
    "options": [
      "هذا مَكْتَبُ المديرِ.\nThis is the principal’s office.",
      "نأكلُ في المَطْعَمِ.\nWe eat in the restaurant.",
      "صلّيتُ في المَسْجِدِ.\nI prayed in the mosque.",
      "جلسنا في المَجْلِسِ.\nWe sat in the sitting room.",
      "ذهبَ المريضُ إلى المُسْتَشْفَى.\nThe patient went to the hospital."
    ],
    "correctIndex": 2,
    "a": "صلّيتُ في المَسْجِدِ.\nI prayed in the mosque."
  },
  {
    "q": "أكمل بالنمط المناسب: صلّيتُ في ال____ِ..\nComplete with the appropriate form: I prayed in the mosque.",
    "options": [
      "مَسْجِد\nmasjid — mosque",
      "مَجْلِس\nmajlis — sitting room or council",
      "مُسْتَشْفَى\nmustashfā — hospital",
      "مَكْتَب\nmaktab — office or desk",
      "مَطْعَم\nmaṭʿam — restaurant"
    ],
    "correctIndex": 0,
    "a": "مَسْجِد هو اللفظ المناسب في هذا المثال.\nmasjid — mosque is the appropriate form in this example."
  },
  {
    "q": "ما التحليل الأنسب لـ مَسْجِد؟\nWhat is the best description of masjid — mosque?",
    "options": [
      "اسم مكان على وزن مَفْعَل\nA place noun on the pattern مَفْعَل",
      "اسم مكان على وزن مَفْعَل\nA place noun on the pattern مَفْعَل",
      "اسم مكان على وزن مَفْعِل\nA place noun on the pattern مَفْعِل",
      "اسم مكان على وزن مَفْعِل\nA place noun on the pattern مَفْعِل",
      "اسم مكان من فعل مزيد\nA place noun derived from an augmented verb"
    ],
    "correctIndex": 2,
    "a": "مَسْجِد: اسم مكان على وزن مَفْعِل.\nmasjid — mosque: A place noun on the pattern مَفْعِل."
  },
  {
    "q": "ما اللفظ الذي يطابق الوصف الآتي: اسم مكان على وزن مَفْعِل؟\nWhich expression matches this description: A place noun on the pattern مَفْعِل?",
    "options": [
      "مَكْتَب\nmaktab — office or desk",
      "مَطْعَم\nmaṭʿam — restaurant",
      "مَسْجِد\nmasjid — mosque",
      "مَجْلِس\nmajlis — sitting room or council",
      "مُسْتَشْفَى\nmustashfā — hospital"
    ],
    "correctIndex": 3,
    "a": "مَجْلِس: اسم مكان على وزن مَفْعِل.\nmajlis — sitting room or council: A place noun on the pattern مَفْعِل."
  },
  {
    "q": "أيُّ مثالٍ يستعمل مَجْلِس؟\nWhich example uses majlis — sitting room or council?",
    "options": [
      "هذا مَكْتَبُ المديرِ.\nThis is the principal’s office.",
      "نأكلُ في المَطْعَمِ.\nWe eat in the restaurant.",
      "صلّيتُ في المَسْجِدِ.\nI prayed in the mosque.",
      "جلسنا في المَجْلِسِ.\nWe sat in the sitting room.",
      "ذهبَ المريضُ إلى المُسْتَشْفَى.\nThe patient went to the hospital."
    ],
    "correctIndex": 3,
    "a": "جلسنا في المَجْلِسِ.\nWe sat in the sitting room."
  },
  {
    "q": "أكمل بالنمط المناسب: جلسنا في ال____ِ..\nComplete with the appropriate form: We sat in the sitting room.",
    "options": [
      "مَجْلِس\nmajlis — sitting room or council",
      "مُسْتَشْفَى\nmustashfā — hospital",
      "مَكْتَب\nmaktab — office or desk",
      "مَطْعَم\nmaṭʿam — restaurant",
      "مَسْجِد\nmasjid — mosque"
    ],
    "correctIndex": 0,
    "a": "مَجْلِس هو اللفظ المناسب في هذا المثال.\nmajlis — sitting room or council is the appropriate form in this example."
  },
  {
    "q": "ما التحليل الأنسب لـ مَجْلِس؟\nWhat is the best description of majlis — sitting room or council?",
    "options": [
      "اسم مكان على وزن مَفْعَل\nA place noun on the pattern مَفْعَل",
      "اسم مكان على وزن مَفْعَل\nA place noun on the pattern مَفْعَل",
      "اسم مكان على وزن مَفْعِل\nA place noun on the pattern مَفْعِل",
      "اسم مكان على وزن مَفْعِل\nA place noun on the pattern مَفْعِل",
      "اسم مكان من فعل مزيد\nA place noun derived from an augmented verb"
    ],
    "correctIndex": 3,
    "a": "مَجْلِس: اسم مكان على وزن مَفْعِل.\nmajlis — sitting room or council: A place noun on the pattern مَفْعِل."
  },
  {
    "q": "ما اللفظ الذي يطابق الوصف الآتي: اسم مكان من فعل مزيد؟\nWhich expression matches this description: A place noun derived from an augmented verb?",
    "options": [
      "مَكْتَب\nmaktab — office or desk",
      "مَطْعَم\nmaṭʿam — restaurant",
      "مَسْجِد\nmasjid — mosque",
      "مَجْلِس\nmajlis — sitting room or council",
      "مُسْتَشْفَى\nmustashfā — hospital"
    ],
    "correctIndex": 4,
    "a": "مُسْتَشْفَى: اسم مكان من فعل مزيد.\nmustashfā — hospital: A place noun derived from an augmented verb."
  },
  {
    "q": "أيُّ مثالٍ يستعمل مُسْتَشْفَى؟\nWhich example uses mustashfā — hospital?",
    "options": [
      "هذا مَكْتَبُ المديرِ.\nThis is the principal’s office.",
      "نأكلُ في المَطْعَمِ.\nWe eat in the restaurant.",
      "صلّيتُ في المَسْجِدِ.\nI prayed in the mosque.",
      "جلسنا في المَجْلِسِ.\nWe sat in the sitting room.",
      "ذهبَ المريضُ إلى المُسْتَشْفَى.\nThe patient went to the hospital."
    ],
    "correctIndex": 4,
    "a": "ذهبَ المريضُ إلى المُسْتَشْفَى.\nThe patient went to the hospital."
  },
  {
    "q": "أكمل بالنمط المناسب: ذهبَ المريضُ إلى ال____..\nComplete with the appropriate form: The patient went to the hospital.",
    "options": [
      "مُسْتَشْفَى\nmustashfā — hospital",
      "مَكْتَب\nmaktab — office or desk",
      "مَطْعَم\nmaṭʿam — restaurant",
      "مَسْجِد\nmasjid — mosque",
      "مَجْلِس\nmajlis — sitting room or council"
    ],
    "correctIndex": 0,
    "a": "مُسْتَشْفَى هو اللفظ المناسب في هذا المثال.\nmustashfā — hospital is the appropriate form in this example."
  },
  {
    "q": "ما التحليل الأنسب لـ مُسْتَشْفَى؟\nWhat is the best description of mustashfā — hospital?",
    "options": [
      "اسم مكان على وزن مَفْعَل\nA place noun on the pattern مَفْعَل",
      "اسم مكان على وزن مَفْعَل\nA place noun on the pattern مَفْعَل",
      "اسم مكان على وزن مَفْعِل\nA place noun on the pattern مَفْعِل",
      "اسم مكان على وزن مَفْعِل\nA place noun on the pattern مَفْعِل",
      "اسم مكان من فعل مزيد\nA place noun derived from an augmented verb"
    ],
    "correctIndex": 4,
    "a": "مُسْتَشْفَى: اسم مكان من فعل مزيد.\nmustashfā — hospital: A place noun derived from an augmented verb."
  }
]

function TopicPage() {
  return <GrammarTopicPage arabic="اسم المكان والزمان" title="Nouns of Place & Time" description="Practice the patterns used for places and times, especially مَفْعَل and مَفْعِل." items={quizItems} />
}


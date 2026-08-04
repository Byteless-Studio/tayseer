import { createFileRoute } from '@tanstack/react-router'
import { GrammarTopicPage } from '#/routes/challenges/grammar/-topic-page'
import type { StrictQuizItem } from '#/routes/challenges/-quiz-types'

export const Route = createFileRoute('/challenges/grammar/ism-tasgheer/')({
  head: () => ({ meta: [{ title: 'The Diminutive — Grammar — Tayseer' }] }),
  component: TopicPage,
})

const quizItems: StrictQuizItem[] = [
  {
    "q": "ما اللفظ الذي يطابق الوصف الآتي: تصغير جَبَل على وزن فُعَيْل؟\nWhich expression matches this description: The diminutive of جَبَل on the pattern فُعَيْل?",
    "options": [
      "جُبَيْل\njubayl — small mountain",
      "رُجَيْل\nrujayl — little man",
      "وُلَيْد\nwulayd — little boy",
      "كُتَيِّب\nkutayyib — small book or booklet",
      "نُهَيْر\nnuhayr — small river"
    ],
    "correctIndex": 0,
    "a": "جُبَيْل: تصغير جَبَل على وزن فُعَيْل.\njubayl — small mountain: The diminutive of جَبَل on the pattern فُعَيْل."
  },
  {
    "q": "أيُّ مثالٍ يستعمل جُبَيْل؟\nWhich example uses jubayl — small mountain?",
    "options": [
      "رأيتُ جُبَيْلاً بعيداً.\nI saw a small mountain in the distance.",
      "جاء رُجَيْلٌ إلى السوقِ.\nA little man came to the market.",
      "لعبَ وُلَيْدٌ في الحديقةِ.\nA little boy played in the garden.",
      "قرأتُ كُتَيِّباً نافعاً.\nI read a useful booklet.",
      "مررنا بِنُهَيْرٍ صافٍ.\nWe passed by a clear little river."
    ],
    "correctIndex": 0,
    "a": "رأيتُ جُبَيْلاً بعيداً.\nI saw a small mountain in the distance."
  },
  {
    "q": "أكمل بالنمط المناسب: رأيتُ ____اً بعيداً..\nComplete with the appropriate form: I saw a small mountain in the distance.",
    "options": [
      "جُبَيْل\njubayl — small mountain",
      "رُجَيْل\nrujayl — little man",
      "وُلَيْد\nwulayd — little boy",
      "كُتَيِّب\nkutayyib — small book or booklet",
      "نُهَيْر\nnuhayr — small river"
    ],
    "correctIndex": 0,
    "a": "جُبَيْل هو اللفظ المناسب في هذا المثال.\njubayl — small mountain is the appropriate form in this example."
  },
  {
    "q": "ما التحليل الأنسب لـ جُبَيْل؟\nWhat is the best description of jubayl — small mountain?",
    "options": [
      "تصغير جَبَل على وزن فُعَيْل\nThe diminutive of جَبَل on the pattern فُعَيْل",
      "تصغير رَجُل على وزن فُعَيْل\nThe diminutive of رَجُل on the pattern فُعَيْل",
      "تصغير وَلَد على وزن فُعَيْل\nThe diminutive of وَلَد on the pattern فُعَيْل",
      "تصغير كِتَاب على وزن فُعَيْل\nThe diminutive of كِتَاب on the pattern فُعَيْل",
      "تصغير نَهْر على وزن فُعَيْل\nThe diminutive of نَهْر on the pattern فُعَيْل"
    ],
    "correctIndex": 0,
    "a": "جُبَيْل: تصغير جَبَل على وزن فُعَيْل.\njubayl — small mountain: The diminutive of جَبَل on the pattern فُعَيْل."
  },
  {
    "q": "ما اللفظ الذي يطابق الوصف الآتي: تصغير رَجُل على وزن فُعَيْل؟\nWhich expression matches this description: The diminutive of رَجُل on the pattern فُعَيْل?",
    "options": [
      "جُبَيْل\njubayl — small mountain",
      "رُجَيْل\nrujayl — little man",
      "وُلَيْد\nwulayd — little boy",
      "كُتَيِّب\nkutayyib — small book or booklet",
      "نُهَيْر\nnuhayr — small river"
    ],
    "correctIndex": 1,
    "a": "رُجَيْل: تصغير رَجُل على وزن فُعَيْل.\nrujayl — little man: The diminutive of رَجُل on the pattern فُعَيْل."
  },
  {
    "q": "أيُّ مثالٍ يستعمل رُجَيْل؟\nWhich example uses rujayl — little man?",
    "options": [
      "رأيتُ جُبَيْلاً بعيداً.\nI saw a small mountain in the distance.",
      "جاء رُجَيْلٌ إلى السوقِ.\nA little man came to the market.",
      "لعبَ وُلَيْدٌ في الحديقةِ.\nA little boy played in the garden.",
      "قرأتُ كُتَيِّباً نافعاً.\nI read a useful booklet.",
      "مررنا بِنُهَيْرٍ صافٍ.\nWe passed by a clear little river."
    ],
    "correctIndex": 1,
    "a": "جاء رُجَيْلٌ إلى السوقِ.\nA little man came to the market."
  },
  {
    "q": "أكمل بالنمط المناسب: جاء ____ٌ إلى السوقِ..\nComplete with the appropriate form: A little man came to the market.",
    "options": [
      "رُجَيْل\nrujayl — little man",
      "وُلَيْد\nwulayd — little boy",
      "كُتَيِّب\nkutayyib — small book or booklet",
      "نُهَيْر\nnuhayr — small river",
      "جُبَيْل\njubayl — small mountain"
    ],
    "correctIndex": 0,
    "a": "رُجَيْل هو اللفظ المناسب في هذا المثال.\nrujayl — little man is the appropriate form in this example."
  },
  {
    "q": "ما التحليل الأنسب لـ رُجَيْل؟\nWhat is the best description of rujayl — little man?",
    "options": [
      "تصغير جَبَل على وزن فُعَيْل\nThe diminutive of جَبَل on the pattern فُعَيْل",
      "تصغير رَجُل على وزن فُعَيْل\nThe diminutive of رَجُل on the pattern فُعَيْل",
      "تصغير وَلَد على وزن فُعَيْل\nThe diminutive of وَلَد on the pattern فُعَيْل",
      "تصغير كِتَاب على وزن فُعَيْل\nThe diminutive of كِتَاب on the pattern فُعَيْل",
      "تصغير نَهْر على وزن فُعَيْل\nThe diminutive of نَهْر on the pattern فُعَيْل"
    ],
    "correctIndex": 1,
    "a": "رُجَيْل: تصغير رَجُل على وزن فُعَيْل.\nrujayl — little man: The diminutive of رَجُل on the pattern فُعَيْل."
  },
  {
    "q": "ما اللفظ الذي يطابق الوصف الآتي: تصغير وَلَد على وزن فُعَيْل؟\nWhich expression matches this description: The diminutive of وَلَد on the pattern فُعَيْل?",
    "options": [
      "جُبَيْل\njubayl — small mountain",
      "رُجَيْل\nrujayl — little man",
      "وُلَيْد\nwulayd — little boy",
      "كُتَيِّب\nkutayyib — small book or booklet",
      "نُهَيْر\nnuhayr — small river"
    ],
    "correctIndex": 2,
    "a": "وُلَيْد: تصغير وَلَد على وزن فُعَيْل.\nwulayd — little boy: The diminutive of وَلَد on the pattern فُعَيْل."
  },
  {
    "q": "أيُّ مثالٍ يستعمل وُلَيْد؟\nWhich example uses wulayd — little boy?",
    "options": [
      "رأيتُ جُبَيْلاً بعيداً.\nI saw a small mountain in the distance.",
      "جاء رُجَيْلٌ إلى السوقِ.\nA little man came to the market.",
      "لعبَ وُلَيْدٌ في الحديقةِ.\nA little boy played in the garden.",
      "قرأتُ كُتَيِّباً نافعاً.\nI read a useful booklet.",
      "مررنا بِنُهَيْرٍ صافٍ.\nWe passed by a clear little river."
    ],
    "correctIndex": 2,
    "a": "لعبَ وُلَيْدٌ في الحديقةِ.\nA little boy played in the garden."
  },
  {
    "q": "أكمل بالنمط المناسب: لعبَ ____ٌ في الحديقةِ..\nComplete with the appropriate form: A little boy played in the garden.",
    "options": [
      "وُلَيْد\nwulayd — little boy",
      "كُتَيِّب\nkutayyib — small book or booklet",
      "نُهَيْر\nnuhayr — small river",
      "جُبَيْل\njubayl — small mountain",
      "رُجَيْل\nrujayl — little man"
    ],
    "correctIndex": 0,
    "a": "وُلَيْد هو اللفظ المناسب في هذا المثال.\nwulayd — little boy is the appropriate form in this example."
  },
  {
    "q": "ما التحليل الأنسب لـ وُلَيْد؟\nWhat is the best description of wulayd — little boy?",
    "options": [
      "تصغير جَبَل على وزن فُعَيْل\nThe diminutive of جَبَل on the pattern فُعَيْل",
      "تصغير رَجُل على وزن فُعَيْل\nThe diminutive of رَجُل on the pattern فُعَيْل",
      "تصغير وَلَد على وزن فُعَيْل\nThe diminutive of وَلَد on the pattern فُعَيْل",
      "تصغير كِتَاب على وزن فُعَيْل\nThe diminutive of كِتَاب on the pattern فُعَيْل",
      "تصغير نَهْر على وزن فُعَيْل\nThe diminutive of نَهْر on the pattern فُعَيْل"
    ],
    "correctIndex": 2,
    "a": "وُلَيْد: تصغير وَلَد على وزن فُعَيْل.\nwulayd — little boy: The diminutive of وَلَد on the pattern فُعَيْل."
  },
  {
    "q": "ما اللفظ الذي يطابق الوصف الآتي: تصغير كِتَاب على وزن فُعَيْل؟\nWhich expression matches this description: The diminutive of كِتَاب on the pattern فُعَيْل?",
    "options": [
      "جُبَيْل\njubayl — small mountain",
      "رُجَيْل\nrujayl — little man",
      "وُلَيْد\nwulayd — little boy",
      "كُتَيِّب\nkutayyib — small book or booklet",
      "نُهَيْر\nnuhayr — small river"
    ],
    "correctIndex": 3,
    "a": "كُتَيِّب: تصغير كِتَاب على وزن فُعَيْل.\nkutayyib — small book or booklet: The diminutive of كِتَاب on the pattern فُعَيْل."
  },
  {
    "q": "أيُّ مثالٍ يستعمل كُتَيِّب؟\nWhich example uses kutayyib — small book or booklet?",
    "options": [
      "رأيتُ جُبَيْلاً بعيداً.\nI saw a small mountain in the distance.",
      "جاء رُجَيْلٌ إلى السوقِ.\nA little man came to the market.",
      "لعبَ وُلَيْدٌ في الحديقةِ.\nA little boy played in the garden.",
      "قرأتُ كُتَيِّباً نافعاً.\nI read a useful booklet.",
      "مررنا بِنُهَيْرٍ صافٍ.\nWe passed by a clear little river."
    ],
    "correctIndex": 3,
    "a": "قرأتُ كُتَيِّباً نافعاً.\nI read a useful booklet."
  },
  {
    "q": "أكمل بالنمط المناسب: قرأتُ ____اً نافعاً..\nComplete with the appropriate form: I read a useful booklet.",
    "options": [
      "كُتَيِّب\nkutayyib — small book or booklet",
      "نُهَيْر\nnuhayr — small river",
      "جُبَيْل\njubayl — small mountain",
      "رُجَيْل\nrujayl — little man",
      "وُلَيْد\nwulayd — little boy"
    ],
    "correctIndex": 0,
    "a": "كُتَيِّب هو اللفظ المناسب في هذا المثال.\nkutayyib — small book or booklet is the appropriate form in this example."
  },
  {
    "q": "ما التحليل الأنسب لـ كُتَيِّب؟\nWhat is the best description of kutayyib — small book or booklet?",
    "options": [
      "تصغير جَبَل على وزن فُعَيْل\nThe diminutive of جَبَل on the pattern فُعَيْل",
      "تصغير رَجُل على وزن فُعَيْل\nThe diminutive of رَجُل on the pattern فُعَيْل",
      "تصغير وَلَد على وزن فُعَيْل\nThe diminutive of وَلَد on the pattern فُعَيْل",
      "تصغير كِتَاب على وزن فُعَيْل\nThe diminutive of كِتَاب on the pattern فُعَيْل",
      "تصغير نَهْر على وزن فُعَيْل\nThe diminutive of نَهْر on the pattern فُعَيْل"
    ],
    "correctIndex": 3,
    "a": "كُتَيِّب: تصغير كِتَاب على وزن فُعَيْل.\nkutayyib — small book or booklet: The diminutive of كِتَاب on the pattern فُعَيْل."
  },
  {
    "q": "ما اللفظ الذي يطابق الوصف الآتي: تصغير نَهْر على وزن فُعَيْل؟\nWhich expression matches this description: The diminutive of نَهْر on the pattern فُعَيْل?",
    "options": [
      "جُبَيْل\njubayl — small mountain",
      "رُجَيْل\nrujayl — little man",
      "وُلَيْد\nwulayd — little boy",
      "كُتَيِّب\nkutayyib — small book or booklet",
      "نُهَيْر\nnuhayr — small river"
    ],
    "correctIndex": 4,
    "a": "نُهَيْر: تصغير نَهْر على وزن فُعَيْل.\nnuhayr — small river: The diminutive of نَهْر on the pattern فُعَيْل."
  },
  {
    "q": "أيُّ مثالٍ يستعمل نُهَيْر؟\nWhich example uses nuhayr — small river?",
    "options": [
      "رأيتُ جُبَيْلاً بعيداً.\nI saw a small mountain in the distance.",
      "جاء رُجَيْلٌ إلى السوقِ.\nA little man came to the market.",
      "لعبَ وُلَيْدٌ في الحديقةِ.\nA little boy played in the garden.",
      "قرأتُ كُتَيِّباً نافعاً.\nI read a useful booklet.",
      "مررنا بِنُهَيْرٍ صافٍ.\nWe passed by a clear little river."
    ],
    "correctIndex": 4,
    "a": "مررنا بِنُهَيْرٍ صافٍ.\nWe passed by a clear little river."
  },
  {
    "q": "أكمل بالنمط المناسب: مررنا بِ____ٍ صافٍ..\nComplete with the appropriate form: We passed by a clear little river.",
    "options": [
      "نُهَيْر\nnuhayr — small river",
      "جُبَيْل\njubayl — small mountain",
      "رُجَيْل\nrujayl — little man",
      "وُلَيْد\nwulayd — little boy",
      "كُتَيِّب\nkutayyib — small book or booklet"
    ],
    "correctIndex": 0,
    "a": "نُهَيْر هو اللفظ المناسب في هذا المثال.\nnuhayr — small river is the appropriate form in this example."
  },
  {
    "q": "ما التحليل الأنسب لـ نُهَيْر؟\nWhat is the best description of nuhayr — small river?",
    "options": [
      "تصغير جَبَل على وزن فُعَيْل\nThe diminutive of جَبَل on the pattern فُعَيْل",
      "تصغير رَجُل على وزن فُعَيْل\nThe diminutive of رَجُل on the pattern فُعَيْل",
      "تصغير وَلَد على وزن فُعَيْل\nThe diminutive of وَلَد on the pattern فُعَيْل",
      "تصغير كِتَاب على وزن فُعَيْل\nThe diminutive of كِتَاب on the pattern فُعَيْل",
      "تصغير نَهْر على وزن فُعَيْل\nThe diminutive of نَهْر on the pattern فُعَيْل"
    ],
    "correctIndex": 4,
    "a": "نُهَيْر: تصغير نَهْر على وزن فُعَيْل.\nnuhayr — small river: The diminutive of نَهْر on the pattern فُعَيْل."
  }
]

function TopicPage() {
  return <GrammarTopicPage arabic="اسم التصغير" title="The Diminutive" description="Practice the diminutive pattern فُعَيْل and the meanings it can convey." items={quizItems} />
}


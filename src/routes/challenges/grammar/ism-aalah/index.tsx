import { createFileRoute } from '@tanstack/react-router'
import { GrammarTopicPage } from '#/routes/challenges/grammar/-topic-page'
import type { StrictQuizItem } from '#/routes/challenges/-quiz-types'

export const Route = createFileRoute('/challenges/grammar/ism-aalah/')({
  head: () => ({ meta: [{ title: 'Nouns of Instrument — Grammar — Tayseer' }] }),
  component: TopicPage,
})

const quizItems: StrictQuizItem[] = [
  {
    "q": "ما اللفظ الذي يطابق الوصف الآتي: اسم آلة على وزن مِفْعَال؟\nWhich expression matches this description: An instrument noun on the pattern مِفْعَال?",
    "options": [
      "مِفْتَاح\nmiftāḥ — key",
      "مِيزَان\nmīzān — scale",
      "مِقَصّ\nmiqaṣṣ — scissors",
      "مِبْرَد\nmibrad — file",
      "مِكْنَسَة\nmiknasa — broom"
    ],
    "correctIndex": 0,
    "a": "مِفْتَاح: اسم آلة على وزن مِفْعَال.\nmiftāḥ — key: An instrument noun on the pattern مِفْعَال."
  },
  {
    "q": "أيُّ مثالٍ يستعمل مِفْتَاح؟\nWhich example uses miftāḥ — key?",
    "options": [
      "فتحتُ البابَ بالمِفْتَاحِ.\nI opened the door with the key.",
      "وزنتُ التفاحَ بالمِيزَانِ.\nI weighed the apples with the scale.",
      "قطعتُ الورقةَ بالمِقَصِّ.\nI cut the paper with the scissors.",
      "بَرَدْتُ القلمَ بالمِبْرَدِ.\nI sharpened the pencil with the file.",
      "كنستُ الأرضَ بالمِكْنَسَةِ.\nI swept the floor with the broom."
    ],
    "correctIndex": 0,
    "a": "فتحتُ البابَ بالمِفْتَاحِ.\nI opened the door with the key."
  },
  {
    "q": "أكمل بالنمط المناسب: فتحتُ البابَ بال____ِ..\nComplete with the appropriate form: I opened the door with the key.",
    "options": [
      "مِفْتَاح\nmiftāḥ — key",
      "مِيزَان\nmīzān — scale",
      "مِقَصّ\nmiqaṣṣ — scissors",
      "مِبْرَد\nmibrad — file",
      "مِكْنَسَة\nmiknasa — broom"
    ],
    "correctIndex": 0,
    "a": "مِفْتَاح هو اللفظ المناسب في هذا المثال.\nmiftāḥ — key is the appropriate form in this example."
  },
  {
    "q": "ما التحليل الأنسب لـ مِفْتَاح؟\nWhat is the best description of miftāḥ — key?",
    "options": [
      "اسم آلة على وزن مِفْعَال\nAn instrument noun on the pattern مِفْعَال",
      "اسم آلة على وزن مِفْعَال\nAn instrument noun on the pattern مِفْعَال",
      "اسم آلة على وزن مِفْعَل\nAn instrument noun on the pattern مِفْعَل",
      "اسم آلة على وزن مِفْعَل\nAn instrument noun on the pattern مِفْعَل",
      "اسم آلة على وزن مِفْعَلَة\nAn instrument noun on the pattern مِفْعَلَة"
    ],
    "correctIndex": 0,
    "a": "مِفْتَاح: اسم آلة على وزن مِفْعَال.\nmiftāḥ — key: An instrument noun on the pattern مِفْعَال."
  },
  {
    "q": "ما اللفظ الذي يطابق الوصف الآتي: اسم آلة على وزن مِفْعَال؟\nWhich expression matches this description: An instrument noun on the pattern مِفْعَال?",
    "options": [
      "مِفْتَاح\nmiftāḥ — key",
      "مِيزَان\nmīzān — scale",
      "مِقَصّ\nmiqaṣṣ — scissors",
      "مِبْرَد\nmibrad — file",
      "مِكْنَسَة\nmiknasa — broom"
    ],
    "correctIndex": 1,
    "a": "مِيزَان: اسم آلة على وزن مِفْعَال.\nmīzān — scale: An instrument noun on the pattern مِفْعَال."
  },
  {
    "q": "أيُّ مثالٍ يستعمل مِيزَان؟\nWhich example uses mīzān — scale?",
    "options": [
      "فتحتُ البابَ بالمِفْتَاحِ.\nI opened the door with the key.",
      "وزنتُ التفاحَ بالمِيزَانِ.\nI weighed the apples with the scale.",
      "قطعتُ الورقةَ بالمِقَصِّ.\nI cut the paper with the scissors.",
      "بَرَدْتُ القلمَ بالمِبْرَدِ.\nI sharpened the pencil with the file.",
      "كنستُ الأرضَ بالمِكْنَسَةِ.\nI swept the floor with the broom."
    ],
    "correctIndex": 1,
    "a": "وزنتُ التفاحَ بالمِيزَانِ.\nI weighed the apples with the scale."
  },
  {
    "q": "أكمل بالنمط المناسب: وزنتُ التفاحَ بال____ِ..\nComplete with the appropriate form: I weighed the apples with the scale.",
    "options": [
      "مِيزَان\nmīzān — scale",
      "مِقَصّ\nmiqaṣṣ — scissors",
      "مِبْرَد\nmibrad — file",
      "مِكْنَسَة\nmiknasa — broom",
      "مِفْتَاح\nmiftāḥ — key"
    ],
    "correctIndex": 0,
    "a": "مِيزَان هو اللفظ المناسب في هذا المثال.\nmīzān — scale is the appropriate form in this example."
  },
  {
    "q": "ما التحليل الأنسب لـ مِيزَان؟\nWhat is the best description of mīzān — scale?",
    "options": [
      "اسم آلة على وزن مِفْعَال\nAn instrument noun on the pattern مِفْعَال",
      "اسم آلة على وزن مِفْعَال\nAn instrument noun on the pattern مِفْعَال",
      "اسم آلة على وزن مِفْعَل\nAn instrument noun on the pattern مِفْعَل",
      "اسم آلة على وزن مِفْعَل\nAn instrument noun on the pattern مِفْعَل",
      "اسم آلة على وزن مِفْعَلَة\nAn instrument noun on the pattern مِفْعَلَة"
    ],
    "correctIndex": 1,
    "a": "مِيزَان: اسم آلة على وزن مِفْعَال.\nmīzān — scale: An instrument noun on the pattern مِفْعَال."
  },
  {
    "q": "ما اللفظ الذي يطابق الوصف الآتي: اسم آلة على وزن مِفْعَل؟\nWhich expression matches this description: An instrument noun on the pattern مِفْعَل?",
    "options": [
      "مِفْتَاح\nmiftāḥ — key",
      "مِيزَان\nmīzān — scale",
      "مِقَصّ\nmiqaṣṣ — scissors",
      "مِبْرَد\nmibrad — file",
      "مِكْنَسَة\nmiknasa — broom"
    ],
    "correctIndex": 2,
    "a": "مِقَصّ: اسم آلة على وزن مِفْعَل.\nmiqaṣṣ — scissors: An instrument noun on the pattern مِفْعَل."
  },
  {
    "q": "أيُّ مثالٍ يستعمل مِقَصّ؟\nWhich example uses miqaṣṣ — scissors?",
    "options": [
      "فتحتُ البابَ بالمِفْتَاحِ.\nI opened the door with the key.",
      "وزنتُ التفاحَ بالمِيزَانِ.\nI weighed the apples with the scale.",
      "قطعتُ الورقةَ بالمِقَصِّ.\nI cut the paper with the scissors.",
      "بَرَدْتُ القلمَ بالمِبْرَدِ.\nI sharpened the pencil with the file.",
      "كنستُ الأرضَ بالمِكْنَسَةِ.\nI swept the floor with the broom."
    ],
    "correctIndex": 2,
    "a": "قطعتُ الورقةَ بالمِقَصِّ.\nI cut the paper with the scissors."
  },
  {
    "q": "أكمل بالنمط المناسب: قطعتُ الورقةَ بال____ِ..\nComplete with the appropriate form: I cut the paper with the scissors.",
    "options": [
      "مِقَصّ\nmiqaṣṣ — scissors",
      "مِبْرَد\nmibrad — file",
      "مِكْنَسَة\nmiknasa — broom",
      "مِفْتَاح\nmiftāḥ — key",
      "مِيزَان\nmīzān — scale"
    ],
    "correctIndex": 0,
    "a": "مِقَصّ هو اللفظ المناسب في هذا المثال.\nmiqaṣṣ — scissors is the appropriate form in this example."
  },
  {
    "q": "ما التحليل الأنسب لـ مِقَصّ؟\nWhat is the best description of miqaṣṣ — scissors?",
    "options": [
      "اسم آلة على وزن مِفْعَال\nAn instrument noun on the pattern مِفْعَال",
      "اسم آلة على وزن مِفْعَال\nAn instrument noun on the pattern مِفْعَال",
      "اسم آلة على وزن مِفْعَل\nAn instrument noun on the pattern مِفْعَل",
      "اسم آلة على وزن مِفْعَل\nAn instrument noun on the pattern مِفْعَل",
      "اسم آلة على وزن مِفْعَلَة\nAn instrument noun on the pattern مِفْعَلَة"
    ],
    "correctIndex": 2,
    "a": "مِقَصّ: اسم آلة على وزن مِفْعَل.\nmiqaṣṣ — scissors: An instrument noun on the pattern مِفْعَل."
  },
  {
    "q": "ما اللفظ الذي يطابق الوصف الآتي: اسم آلة على وزن مِفْعَل؟\nWhich expression matches this description: An instrument noun on the pattern مِفْعَل?",
    "options": [
      "مِفْتَاح\nmiftāḥ — key",
      "مِيزَان\nmīzān — scale",
      "مِقَصّ\nmiqaṣṣ — scissors",
      "مِبْرَد\nmibrad — file",
      "مِكْنَسَة\nmiknasa — broom"
    ],
    "correctIndex": 3,
    "a": "مِبْرَد: اسم آلة على وزن مِفْعَل.\nmibrad — file: An instrument noun on the pattern مِفْعَل."
  },
  {
    "q": "أيُّ مثالٍ يستعمل مِبْرَد؟\nWhich example uses mibrad — file?",
    "options": [
      "فتحتُ البابَ بالمِفْتَاحِ.\nI opened the door with the key.",
      "وزنتُ التفاحَ بالمِيزَانِ.\nI weighed the apples with the scale.",
      "قطعتُ الورقةَ بالمِقَصِّ.\nI cut the paper with the scissors.",
      "بَرَدْتُ القلمَ بالمِبْرَدِ.\nI sharpened the pencil with the file.",
      "كنستُ الأرضَ بالمِكْنَسَةِ.\nI swept the floor with the broom."
    ],
    "correctIndex": 3,
    "a": "بَرَدْتُ القلمَ بالمِبْرَدِ.\nI sharpened the pencil with the file."
  },
  {
    "q": "أكمل بالنمط المناسب: بَرَدْتُ القلمَ بال____ِ..\nComplete with the appropriate form: I sharpened the pencil with the file.",
    "options": [
      "مِبْرَد\nmibrad — file",
      "مِكْنَسَة\nmiknasa — broom",
      "مِفْتَاح\nmiftāḥ — key",
      "مِيزَان\nmīzān — scale",
      "مِقَصّ\nmiqaṣṣ — scissors"
    ],
    "correctIndex": 0,
    "a": "مِبْرَد هو اللفظ المناسب في هذا المثال.\nmibrad — file is the appropriate form in this example."
  },
  {
    "q": "ما التحليل الأنسب لـ مِبْرَد؟\nWhat is the best description of mibrad — file?",
    "options": [
      "اسم آلة على وزن مِفْعَال\nAn instrument noun on the pattern مِفْعَال",
      "اسم آلة على وزن مِفْعَال\nAn instrument noun on the pattern مِفْعَال",
      "اسم آلة على وزن مِفْعَل\nAn instrument noun on the pattern مِفْعَل",
      "اسم آلة على وزن مِفْعَل\nAn instrument noun on the pattern مِفْعَل",
      "اسم آلة على وزن مِفْعَلَة\nAn instrument noun on the pattern مِفْعَلَة"
    ],
    "correctIndex": 3,
    "a": "مِبْرَد: اسم آلة على وزن مِفْعَل.\nmibrad — file: An instrument noun on the pattern مِفْعَل."
  },
  {
    "q": "ما اللفظ الذي يطابق الوصف الآتي: اسم آلة على وزن مِفْعَلَة؟\nWhich expression matches this description: An instrument noun on the pattern مِفْعَلَة?",
    "options": [
      "مِفْتَاح\nmiftāḥ — key",
      "مِيزَان\nmīzān — scale",
      "مِقَصّ\nmiqaṣṣ — scissors",
      "مِبْرَد\nmibrad — file",
      "مِكْنَسَة\nmiknasa — broom"
    ],
    "correctIndex": 4,
    "a": "مِكْنَسَة: اسم آلة على وزن مِفْعَلَة.\nmiknasa — broom: An instrument noun on the pattern مِفْعَلَة."
  },
  {
    "q": "أيُّ مثالٍ يستعمل مِكْنَسَة؟\nWhich example uses miknasa — broom?",
    "options": [
      "فتحتُ البابَ بالمِفْتَاحِ.\nI opened the door with the key.",
      "وزنتُ التفاحَ بالمِيزَانِ.\nI weighed the apples with the scale.",
      "قطعتُ الورقةَ بالمِقَصِّ.\nI cut the paper with the scissors.",
      "بَرَدْتُ القلمَ بالمِبْرَدِ.\nI sharpened the pencil with the file.",
      "كنستُ الأرضَ بالمِكْنَسَةِ.\nI swept the floor with the broom."
    ],
    "correctIndex": 4,
    "a": "كنستُ الأرضَ بالمِكْنَسَةِ.\nI swept the floor with the broom."
  },
  {
    "q": "أكمل بالنمط المناسب: كنستُ الأرضَ بال____ِ..\nComplete with the appropriate form: I swept the floor with the broom.",
    "options": [
      "مِكْنَسَة\nmiknasa — broom",
      "مِفْتَاح\nmiftāḥ — key",
      "مِيزَان\nmīzān — scale",
      "مِقَصّ\nmiqaṣṣ — scissors",
      "مِبْرَد\nmibrad — file"
    ],
    "correctIndex": 0,
    "a": "مِكْنَسَة هو اللفظ المناسب في هذا المثال.\nmiknasa — broom is the appropriate form in this example."
  },
  {
    "q": "ما التحليل الأنسب لـ مِكْنَسَة؟\nWhat is the best description of miknasa — broom?",
    "options": [
      "اسم آلة على وزن مِفْعَال\nAn instrument noun on the pattern مِفْعَال",
      "اسم آلة على وزن مِفْعَال\nAn instrument noun on the pattern مِفْعَال",
      "اسم آلة على وزن مِفْعَل\nAn instrument noun on the pattern مِفْعَل",
      "اسم آلة على وزن مِفْعَل\nAn instrument noun on the pattern مِفْعَل",
      "اسم آلة على وزن مِفْعَلَة\nAn instrument noun on the pattern مِفْعَلَة"
    ],
    "correctIndex": 4,
    "a": "مِكْنَسَة: اسم آلة على وزن مِفْعَلَة.\nmiknasa — broom: An instrument noun on the pattern مِفْعَلَة."
  }
]

function TopicPage() {
  return <GrammarTopicPage arabic="اسم الآلة" title="Nouns of Instrument" description="Learn the common patterns for the instrument by which an action is done." items={quizItems} />
}


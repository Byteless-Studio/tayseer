import { createFileRoute } from '@tanstack/react-router'
import { GrammarTopicPage } from '#/routes/challenges/grammar/-topic-page'
import type { StrictQuizItem } from '#/routes/challenges/-quiz-types'

export const Route = createFileRoute('/challenges/grammar/tahdheer-ighraa/')({
  head: () => ({ meta: [{ title: 'Warning & Encouragement — Grammar — Tayseer' }] }),
  component: TopicPage,
})

const quizItems: StrictQuizItem[] = [
  {
    "q": "ما اللفظ الذي يطابق الوصف الآتي: أسلوب تحذير؛ الكذبَ منصوب؟\nWhich expression matches this description: A warning construction; الكذبَ is accusative?",
    "options": [
      "إِيَّاكَ وَالْكَذِبَ\niyyāka wa-l-kadhiba — beware of lying",
      "الطَّرِيقَ\naṭ-ṭarīqa — the road!",
      "الصِّدْقَ الصِّدْقَ\naṣ-ṣidqa aṣ-ṣidqa — honesty, honesty!",
      "الصَّلَاةَ\naṣ-ṣalāta — prayer!",
      "إِيَّاكُمْ وَالْغِيبَةَ\niyyākum wa-l-ghībata — beware of backbiting"
    ],
    "correctIndex": 0,
    "a": "إِيَّاكَ وَالْكَذِبَ: أسلوب تحذير؛ الكذبَ منصوب.\niyyāka wa-l-kadhiba — beware of lying: A warning construction; الكذبَ is accusative."
  },
  {
    "q": "أيُّ مثالٍ يستعمل إِيَّاكَ وَالْكَذِبَ؟\nWhich example uses iyyāka wa-l-kadhiba — beware of lying?",
    "options": [
      "إِيَّاكَ وَالْكَذِبَ!\nBeware of lying!",
      "الطَّرِيقَ! لا تَلْعَبْ فيهِ.\nThe road! Do not play in it.",
      "الصِّدْقَ الصِّدْقَ يا بُنَيَّ.\nHonesty, honesty, my son.",
      "الصَّلَاةَ يا إخوةُ.\nPrayer, brothers.",
      "إِيَّاكُمْ وَالْغِيبَةَ!\nBeware of backbiting!"
    ],
    "correctIndex": 0,
    "a": "إِيَّاكَ وَالْكَذِبَ!\nBeware of lying!"
  },
  {
    "q": "أكمل بالنمط المناسب: ____!.\nComplete with the appropriate form: Beware of lying!",
    "options": [
      "إِيَّاكَ وَالْكَذِبَ\niyyāka wa-l-kadhiba — beware of lying",
      "الطَّرِيقَ\naṭ-ṭarīqa — the road!",
      "الصِّدْقَ الصِّدْقَ\naṣ-ṣidqa aṣ-ṣidqa — honesty, honesty!",
      "الصَّلَاةَ\naṣ-ṣalāta — prayer!",
      "إِيَّاكُمْ وَالْغِيبَةَ\niyyākum wa-l-ghībata — beware of backbiting"
    ],
    "correctIndex": 0,
    "a": "إِيَّاكَ وَالْكَذِبَ هو اللفظ المناسب في هذا المثال.\niyyāka wa-l-kadhiba — beware of lying is the appropriate form in this example."
  },
  {
    "q": "ما التحليل الأنسب لـ إِيَّاكَ وَالْكَذِبَ؟\nWhat is the best description of iyyāka wa-l-kadhiba — beware of lying?",
    "options": [
      "أسلوب تحذير؛ الكذبَ منصوب\nA warning construction; الكذبَ is accusative",
      "أسلوب تحذير؛ الاسم منصوب بفعل محذوف\nA warning construction; the noun is accusative through an implied verb",
      "أسلوب إغراء؛ الاسم منصوب بفعل محذوف\nAn encouragement construction; the noun is accusative through an implied verb",
      "أسلوب إغراء؛ الاسم منصوب بفعل محذوف\nAn encouragement construction; the noun is accusative through an implied verb",
      "أسلوب تحذير للمخاطبين\nA warning construction addressed to a group"
    ],
    "correctIndex": 0,
    "a": "إِيَّاكَ وَالْكَذِبَ: أسلوب تحذير؛ الكذبَ منصوب.\niyyāka wa-l-kadhiba — beware of lying: A warning construction; الكذبَ is accusative."
  },
  {
    "q": "ما اللفظ الذي يطابق الوصف الآتي: أسلوب تحذير؛ الاسم منصوب بفعل محذوف؟\nWhich expression matches this description: A warning construction; the noun is accusative through an implied verb?",
    "options": [
      "إِيَّاكَ وَالْكَذِبَ\niyyāka wa-l-kadhiba — beware of lying",
      "الطَّرِيقَ\naṭ-ṭarīqa — the road!",
      "الصِّدْقَ الصِّدْقَ\naṣ-ṣidqa aṣ-ṣidqa — honesty, honesty!",
      "الصَّلَاةَ\naṣ-ṣalāta — prayer!",
      "إِيَّاكُمْ وَالْغِيبَةَ\niyyākum wa-l-ghībata — beware of backbiting"
    ],
    "correctIndex": 1,
    "a": "الطَّرِيقَ: أسلوب تحذير؛ الاسم منصوب بفعل محذوف.\naṭ-ṭarīqa — the road!: A warning construction; the noun is accusative through an implied verb."
  },
  {
    "q": "أيُّ مثالٍ يستعمل الطَّرِيقَ؟\nWhich example uses aṭ-ṭarīqa — the road!?",
    "options": [
      "إِيَّاكَ وَالْكَذِبَ!\nBeware of lying!",
      "الطَّرِيقَ! لا تَلْعَبْ فيهِ.\nThe road! Do not play in it.",
      "الصِّدْقَ الصِّدْقَ يا بُنَيَّ.\nHonesty, honesty, my son.",
      "الصَّلَاةَ يا إخوةُ.\nPrayer, brothers.",
      "إِيَّاكُمْ وَالْغِيبَةَ!\nBeware of backbiting!"
    ],
    "correctIndex": 1,
    "a": "الطَّرِيقَ! لا تَلْعَبْ فيهِ.\nThe road! Do not play in it."
  },
  {
    "q": "أكمل بالنمط المناسب: ____! لا تَلْعَبْ فيهِ..\nComplete with the appropriate form: The road! Do not play in it.",
    "options": [
      "الطَّرِيقَ\naṭ-ṭarīqa — the road!",
      "الصِّدْقَ الصِّدْقَ\naṣ-ṣidqa aṣ-ṣidqa — honesty, honesty!",
      "الصَّلَاةَ\naṣ-ṣalāta — prayer!",
      "إِيَّاكُمْ وَالْغِيبَةَ\niyyākum wa-l-ghībata — beware of backbiting",
      "إِيَّاكَ وَالْكَذِبَ\niyyāka wa-l-kadhiba — beware of lying"
    ],
    "correctIndex": 0,
    "a": "الطَّرِيقَ هو اللفظ المناسب في هذا المثال.\naṭ-ṭarīqa — the road! is the appropriate form in this example."
  },
  {
    "q": "ما التحليل الأنسب لـ الطَّرِيقَ؟\nWhat is the best description of aṭ-ṭarīqa — the road!?",
    "options": [
      "أسلوب تحذير؛ الكذبَ منصوب\nA warning construction; الكذبَ is accusative",
      "أسلوب تحذير؛ الاسم منصوب بفعل محذوف\nA warning construction; the noun is accusative through an implied verb",
      "أسلوب إغراء؛ الاسم منصوب بفعل محذوف\nAn encouragement construction; the noun is accusative through an implied verb",
      "أسلوب إغراء؛ الاسم منصوب بفعل محذوف\nAn encouragement construction; the noun is accusative through an implied verb",
      "أسلوب تحذير للمخاطبين\nA warning construction addressed to a group"
    ],
    "correctIndex": 1,
    "a": "الطَّرِيقَ: أسلوب تحذير؛ الاسم منصوب بفعل محذوف.\naṭ-ṭarīqa — the road!: A warning construction; the noun is accusative through an implied verb."
  },
  {
    "q": "ما اللفظ الذي يطابق الوصف الآتي: أسلوب إغراء؛ الاسم منصوب بفعل محذوف؟\nWhich expression matches this description: An encouragement construction; the noun is accusative through an implied verb?",
    "options": [
      "إِيَّاكَ وَالْكَذِبَ\niyyāka wa-l-kadhiba — beware of lying",
      "الطَّرِيقَ\naṭ-ṭarīqa — the road!",
      "الصِّدْقَ الصِّدْقَ\naṣ-ṣidqa aṣ-ṣidqa — honesty, honesty!",
      "الصَّلَاةَ\naṣ-ṣalāta — prayer!",
      "إِيَّاكُمْ وَالْغِيبَةَ\niyyākum wa-l-ghībata — beware of backbiting"
    ],
    "correctIndex": 2,
    "a": "الصِّدْقَ الصِّدْقَ: أسلوب إغراء؛ الاسم منصوب بفعل محذوف.\naṣ-ṣidqa aṣ-ṣidqa — honesty, honesty!: An encouragement construction; the noun is accusative through an implied verb."
  },
  {
    "q": "أيُّ مثالٍ يستعمل الصِّدْقَ الصِّدْقَ؟\nWhich example uses aṣ-ṣidqa aṣ-ṣidqa — honesty, honesty!?",
    "options": [
      "إِيَّاكَ وَالْكَذِبَ!\nBeware of lying!",
      "الطَّرِيقَ! لا تَلْعَبْ فيهِ.\nThe road! Do not play in it.",
      "الصِّدْقَ الصِّدْقَ يا بُنَيَّ.\nHonesty, honesty, my son.",
      "الصَّلَاةَ يا إخوةُ.\nPrayer, brothers.",
      "إِيَّاكُمْ وَالْغِيبَةَ!\nBeware of backbiting!"
    ],
    "correctIndex": 2,
    "a": "الصِّدْقَ الصِّدْقَ يا بُنَيَّ.\nHonesty, honesty, my son."
  },
  {
    "q": "أكمل بالنمط المناسب: ____ يا بُنَيَّ..\nComplete with the appropriate form: Honesty, honesty, my son.",
    "options": [
      "الصِّدْقَ الصِّدْقَ\naṣ-ṣidqa aṣ-ṣidqa — honesty, honesty!",
      "الصَّلَاةَ\naṣ-ṣalāta — prayer!",
      "إِيَّاكُمْ وَالْغِيبَةَ\niyyākum wa-l-ghībata — beware of backbiting",
      "إِيَّاكَ وَالْكَذِبَ\niyyāka wa-l-kadhiba — beware of lying",
      "الطَّرِيقَ\naṭ-ṭarīqa — the road!"
    ],
    "correctIndex": 0,
    "a": "الصِّدْقَ الصِّدْقَ هو اللفظ المناسب في هذا المثال.\naṣ-ṣidqa aṣ-ṣidqa — honesty, honesty! is the appropriate form in this example."
  },
  {
    "q": "ما التحليل الأنسب لـ الصِّدْقَ الصِّدْقَ؟\nWhat is the best description of aṣ-ṣidqa aṣ-ṣidqa — honesty, honesty!?",
    "options": [
      "أسلوب تحذير؛ الكذبَ منصوب\nA warning construction; الكذبَ is accusative",
      "أسلوب تحذير؛ الاسم منصوب بفعل محذوف\nA warning construction; the noun is accusative through an implied verb",
      "أسلوب إغراء؛ الاسم منصوب بفعل محذوف\nAn encouragement construction; the noun is accusative through an implied verb",
      "أسلوب إغراء؛ الاسم منصوب بفعل محذوف\nAn encouragement construction; the noun is accusative through an implied verb",
      "أسلوب تحذير للمخاطبين\nA warning construction addressed to a group"
    ],
    "correctIndex": 2,
    "a": "الصِّدْقَ الصِّدْقَ: أسلوب إغراء؛ الاسم منصوب بفعل محذوف.\naṣ-ṣidqa aṣ-ṣidqa — honesty, honesty!: An encouragement construction; the noun is accusative through an implied verb."
  },
  {
    "q": "ما اللفظ الذي يطابق الوصف الآتي: أسلوب إغراء؛ الاسم منصوب بفعل محذوف؟\nWhich expression matches this description: An encouragement construction; the noun is accusative through an implied verb?",
    "options": [
      "إِيَّاكَ وَالْكَذِبَ\niyyāka wa-l-kadhiba — beware of lying",
      "الطَّرِيقَ\naṭ-ṭarīqa — the road!",
      "الصِّدْقَ الصِّدْقَ\naṣ-ṣidqa aṣ-ṣidqa — honesty, honesty!",
      "الصَّلَاةَ\naṣ-ṣalāta — prayer!",
      "إِيَّاكُمْ وَالْغِيبَةَ\niyyākum wa-l-ghībata — beware of backbiting"
    ],
    "correctIndex": 3,
    "a": "الصَّلَاةَ: أسلوب إغراء؛ الاسم منصوب بفعل محذوف.\naṣ-ṣalāta — prayer!: An encouragement construction; the noun is accusative through an implied verb."
  },
  {
    "q": "أيُّ مثالٍ يستعمل الصَّلَاةَ؟\nWhich example uses aṣ-ṣalāta — prayer!?",
    "options": [
      "إِيَّاكَ وَالْكَذِبَ!\nBeware of lying!",
      "الطَّرِيقَ! لا تَلْعَبْ فيهِ.\nThe road! Do not play in it.",
      "الصِّدْقَ الصِّدْقَ يا بُنَيَّ.\nHonesty, honesty, my son.",
      "الصَّلَاةَ يا إخوةُ.\nPrayer, brothers.",
      "إِيَّاكُمْ وَالْغِيبَةَ!\nBeware of backbiting!"
    ],
    "correctIndex": 3,
    "a": "الصَّلَاةَ يا إخوةُ.\nPrayer, brothers."
  },
  {
    "q": "أكمل بالنمط المناسب: ____ يا إخوةُ..\nComplete with the appropriate form: Prayer, brothers.",
    "options": [
      "الصَّلَاةَ\naṣ-ṣalāta — prayer!",
      "إِيَّاكُمْ وَالْغِيبَةَ\niyyākum wa-l-ghībata — beware of backbiting",
      "إِيَّاكَ وَالْكَذِبَ\niyyāka wa-l-kadhiba — beware of lying",
      "الطَّرِيقَ\naṭ-ṭarīqa — the road!",
      "الصِّدْقَ الصِّدْقَ\naṣ-ṣidqa aṣ-ṣidqa — honesty, honesty!"
    ],
    "correctIndex": 0,
    "a": "الصَّلَاةَ هو اللفظ المناسب في هذا المثال.\naṣ-ṣalāta — prayer! is the appropriate form in this example."
  },
  {
    "q": "ما التحليل الأنسب لـ الصَّلَاةَ؟\nWhat is the best description of aṣ-ṣalāta — prayer!?",
    "options": [
      "أسلوب تحذير؛ الكذبَ منصوب\nA warning construction; الكذبَ is accusative",
      "أسلوب تحذير؛ الاسم منصوب بفعل محذوف\nA warning construction; the noun is accusative through an implied verb",
      "أسلوب إغراء؛ الاسم منصوب بفعل محذوف\nAn encouragement construction; the noun is accusative through an implied verb",
      "أسلوب إغراء؛ الاسم منصوب بفعل محذوف\nAn encouragement construction; the noun is accusative through an implied verb",
      "أسلوب تحذير للمخاطبين\nA warning construction addressed to a group"
    ],
    "correctIndex": 3,
    "a": "الصَّلَاةَ: أسلوب إغراء؛ الاسم منصوب بفعل محذوف.\naṣ-ṣalāta — prayer!: An encouragement construction; the noun is accusative through an implied verb."
  },
  {
    "q": "ما اللفظ الذي يطابق الوصف الآتي: أسلوب تحذير للمخاطبين؟\nWhich expression matches this description: A warning construction addressed to a group?",
    "options": [
      "إِيَّاكَ وَالْكَذِبَ\niyyāka wa-l-kadhiba — beware of lying",
      "الطَّرِيقَ\naṭ-ṭarīqa — the road!",
      "الصِّدْقَ الصِّدْقَ\naṣ-ṣidqa aṣ-ṣidqa — honesty, honesty!",
      "الصَّلَاةَ\naṣ-ṣalāta — prayer!",
      "إِيَّاكُمْ وَالْغِيبَةَ\niyyākum wa-l-ghībata — beware of backbiting"
    ],
    "correctIndex": 4,
    "a": "إِيَّاكُمْ وَالْغِيبَةَ: أسلوب تحذير للمخاطبين.\niyyākum wa-l-ghībata — beware of backbiting: A warning construction addressed to a group."
  },
  {
    "q": "أيُّ مثالٍ يستعمل إِيَّاكُمْ وَالْغِيبَةَ؟\nWhich example uses iyyākum wa-l-ghībata — beware of backbiting?",
    "options": [
      "إِيَّاكَ وَالْكَذِبَ!\nBeware of lying!",
      "الطَّرِيقَ! لا تَلْعَبْ فيهِ.\nThe road! Do not play in it.",
      "الصِّدْقَ الصِّدْقَ يا بُنَيَّ.\nHonesty, honesty, my son.",
      "الصَّلَاةَ يا إخوةُ.\nPrayer, brothers.",
      "إِيَّاكُمْ وَالْغِيبَةَ!\nBeware of backbiting!"
    ],
    "correctIndex": 4,
    "a": "إِيَّاكُمْ وَالْغِيبَةَ!\nBeware of backbiting!"
  },
  {
    "q": "أكمل بالنمط المناسب: ____!.\nComplete with the appropriate form: Beware of backbiting!",
    "options": [
      "إِيَّاكُمْ وَالْغِيبَةَ\niyyākum wa-l-ghībata — beware of backbiting",
      "إِيَّاكَ وَالْكَذِبَ\niyyāka wa-l-kadhiba — beware of lying",
      "الطَّرِيقَ\naṭ-ṭarīqa — the road!",
      "الصِّدْقَ الصِّدْقَ\naṣ-ṣidqa aṣ-ṣidqa — honesty, honesty!",
      "الصَّلَاةَ\naṣ-ṣalāta — prayer!"
    ],
    "correctIndex": 0,
    "a": "إِيَّاكُمْ وَالْغِيبَةَ هو اللفظ المناسب في هذا المثال.\niyyākum wa-l-ghībata — beware of backbiting is the appropriate form in this example."
  },
  {
    "q": "ما التحليل الأنسب لـ إِيَّاكُمْ وَالْغِيبَةَ؟\nWhat is the best description of iyyākum wa-l-ghībata — beware of backbiting?",
    "options": [
      "أسلوب تحذير؛ الكذبَ منصوب\nA warning construction; الكذبَ is accusative",
      "أسلوب تحذير؛ الاسم منصوب بفعل محذوف\nA warning construction; the noun is accusative through an implied verb",
      "أسلوب إغراء؛ الاسم منصوب بفعل محذوف\nAn encouragement construction; the noun is accusative through an implied verb",
      "أسلوب إغراء؛ الاسم منصوب بفعل محذوف\nAn encouragement construction; the noun is accusative through an implied verb",
      "أسلوب تحذير للمخاطبين\nA warning construction addressed to a group"
    ],
    "correctIndex": 4,
    "a": "إِيَّاكُمْ وَالْغِيبَةَ: أسلوب تحذير للمخاطبين.\niyyākum wa-l-ghībata — beware of backbiting: A warning construction addressed to a group."
  }
]

function TopicPage() {
  return <GrammarTopicPage arabic="التحذير والإغراء" title="Warning & Encouragement" description="Recognize the accusative constructions used to warn against something or urge someone toward it." items={quizItems} />
}


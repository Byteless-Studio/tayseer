import { createFileRoute } from '@tanstack/react-router'
import { GrammarTopicPage } from '#/routes/challenges/grammar/-topic-page'
import type { StrictQuizItem } from '#/routes/challenges/-quiz-types'

export const Route = createFileRoute('/challenges/grammar/dual-relative-pronouns/')({
  head: () => ({ meta: [{ title: 'Dual Relative Pronouns — Grammar — Tayseer' }] }),
  component: TopicPage,
})

const quizItems: StrictQuizItem[] = [
  {
    "q": "ما اللفظ الذي يطابق الوصف الآتي: للمثنى المذكر في حالة الرفع؟\nWhich expression matches this description: For masculine dual in the nominative?",
    "options": [
      "اللَّذَانِ\nalladhāni — the two who (masculine nominative)",
      "اللَّذَيْنِ\nalladhayni — the two whom or of whom (masculine accusative/genitive)",
      "اللَّتَانِ\nallatāni — the two who (feminine nominative)",
      "اللَّتَيْنِ\nallatayni — the two whom or of whom (feminine accusative/genitive)",
      "الَّذِينَ\nalladhīna — those who (masculine plural)"
    ],
    "correctIndex": 0,
    "a": "اللَّذَانِ: للمثنى المذكر في حالة الرفع.\nalladhāni — the two who (masculine nominative): For masculine dual in the nominative."
  },
  {
    "q": "أيُّ مثالٍ يستعمل اللَّذَانِ؟\nWhich example uses alladhāni — the two who (masculine nominative)?",
    "options": [
      "حضرَ الطالبانِ اللَّذَانِ نجحا.\nThe two students who passed attended.",
      "رأيتُ الطالبينِ اللَّذَيْنِ نجحا.\nI saw the two students who passed.",
      "حضرتِ البنتانِ اللَّتَانِ نجحتا.\nThe two girls who passed attended.",
      "رأيتُ البنتينِ اللَّتَيْنِ نجحتا.\nI saw the two girls who passed.",
      "جاء الطلابُ الَّذِينَ نجحوا.\nThe students who passed came."
    ],
    "correctIndex": 0,
    "a": "حضرَ الطالبانِ اللَّذَانِ نجحا.\nThe two students who passed attended."
  },
  {
    "q": "أكمل بالنمط المناسب: حضرَ الطالبانِ ____ نجحا..\nComplete with the appropriate form: The two students who passed attended.",
    "options": [
      "اللَّذَانِ\nalladhāni — the two who (masculine nominative)",
      "اللَّذَيْنِ\nalladhayni — the two whom or of whom (masculine accusative/genitive)",
      "اللَّتَانِ\nallatāni — the two who (feminine nominative)",
      "اللَّتَيْنِ\nallatayni — the two whom or of whom (feminine accusative/genitive)",
      "الَّذِينَ\nalladhīna — those who (masculine plural)"
    ],
    "correctIndex": 0,
    "a": "اللَّذَانِ هو اللفظ المناسب في هذا المثال.\nalladhāni — the two who (masculine nominative) is the appropriate form in this example."
  },
  {
    "q": "ما التحليل الأنسب لـ اللَّذَانِ؟\nWhat is the best description of alladhāni — the two who (masculine nominative)?",
    "options": [
      "للمثنى المذكر في حالة الرفع\nFor masculine dual in the nominative",
      "للمثنى المذكر في النصب والجر\nFor masculine dual in the accusative and genitive",
      "للمثنى المؤنث في حالة الرفع\nFor feminine dual in the nominative",
      "للمثنى المؤنث في النصب والجر\nFor feminine dual in the accusative and genitive",
      "لجمع المذكر\nFor masculine plural"
    ],
    "correctIndex": 0,
    "a": "اللَّذَانِ: للمثنى المذكر في حالة الرفع.\nalladhāni — the two who (masculine nominative): For masculine dual in the nominative."
  },
  {
    "q": "ما اللفظ الذي يطابق الوصف الآتي: للمثنى المذكر في النصب والجر؟\nWhich expression matches this description: For masculine dual in the accusative and genitive?",
    "options": [
      "اللَّذَانِ\nalladhāni — the two who (masculine nominative)",
      "اللَّذَيْنِ\nalladhayni — the two whom or of whom (masculine accusative/genitive)",
      "اللَّتَانِ\nallatāni — the two who (feminine nominative)",
      "اللَّتَيْنِ\nallatayni — the two whom or of whom (feminine accusative/genitive)",
      "الَّذِينَ\nalladhīna — those who (masculine plural)"
    ],
    "correctIndex": 1,
    "a": "اللَّذَيْنِ: للمثنى المذكر في النصب والجر.\nalladhayni — the two whom or of whom (masculine accusative/genitive): For masculine dual in the accusative and genitive."
  },
  {
    "q": "أيُّ مثالٍ يستعمل اللَّذَيْنِ؟\nWhich example uses alladhayni — the two whom or of whom (masculine accusative/genitive)?",
    "options": [
      "حضرَ الطالبانِ اللَّذَانِ نجحا.\nThe two students who passed attended.",
      "رأيتُ الطالبينِ اللَّذَيْنِ نجحا.\nI saw the two students who passed.",
      "حضرتِ البنتانِ اللَّتَانِ نجحتا.\nThe two girls who passed attended.",
      "رأيتُ البنتينِ اللَّتَيْنِ نجحتا.\nI saw the two girls who passed.",
      "جاء الطلابُ الَّذِينَ نجحوا.\nThe students who passed came."
    ],
    "correctIndex": 1,
    "a": "رأيتُ الطالبينِ اللَّذَيْنِ نجحا.\nI saw the two students who passed."
  },
  {
    "q": "أكمل بالنمط المناسب: رأيتُ الطالبينِ ____ نجحا..\nComplete with the appropriate form: I saw the two students who passed.",
    "options": [
      "اللَّذَيْنِ\nalladhayni — the two whom or of whom (masculine accusative/genitive)",
      "اللَّتَانِ\nallatāni — the two who (feminine nominative)",
      "اللَّتَيْنِ\nallatayni — the two whom or of whom (feminine accusative/genitive)",
      "الَّذِينَ\nalladhīna — those who (masculine plural)",
      "اللَّذَانِ\nalladhāni — the two who (masculine nominative)"
    ],
    "correctIndex": 0,
    "a": "اللَّذَيْنِ هو اللفظ المناسب في هذا المثال.\nalladhayni — the two whom or of whom (masculine accusative/genitive) is the appropriate form in this example."
  },
  {
    "q": "ما التحليل الأنسب لـ اللَّذَيْنِ؟\nWhat is the best description of alladhayni — the two whom or of whom (masculine accusative/genitive)?",
    "options": [
      "للمثنى المذكر في حالة الرفع\nFor masculine dual in the nominative",
      "للمثنى المذكر في النصب والجر\nFor masculine dual in the accusative and genitive",
      "للمثنى المؤنث في حالة الرفع\nFor feminine dual in the nominative",
      "للمثنى المؤنث في النصب والجر\nFor feminine dual in the accusative and genitive",
      "لجمع المذكر\nFor masculine plural"
    ],
    "correctIndex": 1,
    "a": "اللَّذَيْنِ: للمثنى المذكر في النصب والجر.\nalladhayni — the two whom or of whom (masculine accusative/genitive): For masculine dual in the accusative and genitive."
  },
  {
    "q": "ما اللفظ الذي يطابق الوصف الآتي: للمثنى المؤنث في حالة الرفع؟\nWhich expression matches this description: For feminine dual in the nominative?",
    "options": [
      "اللَّذَانِ\nalladhāni — the two who (masculine nominative)",
      "اللَّذَيْنِ\nalladhayni — the two whom or of whom (masculine accusative/genitive)",
      "اللَّتَانِ\nallatāni — the two who (feminine nominative)",
      "اللَّتَيْنِ\nallatayni — the two whom or of whom (feminine accusative/genitive)",
      "الَّذِينَ\nalladhīna — those who (masculine plural)"
    ],
    "correctIndex": 2,
    "a": "اللَّتَانِ: للمثنى المؤنث في حالة الرفع.\nallatāni — the two who (feminine nominative): For feminine dual in the nominative."
  },
  {
    "q": "أيُّ مثالٍ يستعمل اللَّتَانِ؟\nWhich example uses allatāni — the two who (feminine nominative)?",
    "options": [
      "حضرَ الطالبانِ اللَّذَانِ نجحا.\nThe two students who passed attended.",
      "رأيتُ الطالبينِ اللَّذَيْنِ نجحا.\nI saw the two students who passed.",
      "حضرتِ البنتانِ اللَّتَانِ نجحتا.\nThe two girls who passed attended.",
      "رأيتُ البنتينِ اللَّتَيْنِ نجحتا.\nI saw the two girls who passed.",
      "جاء الطلابُ الَّذِينَ نجحوا.\nThe students who passed came."
    ],
    "correctIndex": 2,
    "a": "حضرتِ البنتانِ اللَّتَانِ نجحتا.\nThe two girls who passed attended."
  },
  {
    "q": "أكمل بالنمط المناسب: حضرتِ البنتانِ ____ نجحتا..\nComplete with the appropriate form: The two girls who passed attended.",
    "options": [
      "اللَّتَانِ\nallatāni — the two who (feminine nominative)",
      "اللَّتَيْنِ\nallatayni — the two whom or of whom (feminine accusative/genitive)",
      "الَّذِينَ\nalladhīna — those who (masculine plural)",
      "اللَّذَانِ\nalladhāni — the two who (masculine nominative)",
      "اللَّذَيْنِ\nalladhayni — the two whom or of whom (masculine accusative/genitive)"
    ],
    "correctIndex": 0,
    "a": "اللَّتَانِ هو اللفظ المناسب في هذا المثال.\nallatāni — the two who (feminine nominative) is the appropriate form in this example."
  },
  {
    "q": "ما التحليل الأنسب لـ اللَّتَانِ؟\nWhat is the best description of allatāni — the two who (feminine nominative)?",
    "options": [
      "للمثنى المذكر في حالة الرفع\nFor masculine dual in the nominative",
      "للمثنى المذكر في النصب والجر\nFor masculine dual in the accusative and genitive",
      "للمثنى المؤنث في حالة الرفع\nFor feminine dual in the nominative",
      "للمثنى المؤنث في النصب والجر\nFor feminine dual in the accusative and genitive",
      "لجمع المذكر\nFor masculine plural"
    ],
    "correctIndex": 2,
    "a": "اللَّتَانِ: للمثنى المؤنث في حالة الرفع.\nallatāni — the two who (feminine nominative): For feminine dual in the nominative."
  },
  {
    "q": "ما اللفظ الذي يطابق الوصف الآتي: للمثنى المؤنث في النصب والجر؟\nWhich expression matches this description: For feminine dual in the accusative and genitive?",
    "options": [
      "اللَّذَانِ\nalladhāni — the two who (masculine nominative)",
      "اللَّذَيْنِ\nalladhayni — the two whom or of whom (masculine accusative/genitive)",
      "اللَّتَانِ\nallatāni — the two who (feminine nominative)",
      "اللَّتَيْنِ\nallatayni — the two whom or of whom (feminine accusative/genitive)",
      "الَّذِينَ\nalladhīna — those who (masculine plural)"
    ],
    "correctIndex": 3,
    "a": "اللَّتَيْنِ: للمثنى المؤنث في النصب والجر.\nallatayni — the two whom or of whom (feminine accusative/genitive): For feminine dual in the accusative and genitive."
  },
  {
    "q": "أيُّ مثالٍ يستعمل اللَّتَيْنِ؟\nWhich example uses allatayni — the two whom or of whom (feminine accusative/genitive)?",
    "options": [
      "حضرَ الطالبانِ اللَّذَانِ نجحا.\nThe two students who passed attended.",
      "رأيتُ الطالبينِ اللَّذَيْنِ نجحا.\nI saw the two students who passed.",
      "حضرتِ البنتانِ اللَّتَانِ نجحتا.\nThe two girls who passed attended.",
      "رأيتُ البنتينِ اللَّتَيْنِ نجحتا.\nI saw the two girls who passed.",
      "جاء الطلابُ الَّذِينَ نجحوا.\nThe students who passed came."
    ],
    "correctIndex": 3,
    "a": "رأيتُ البنتينِ اللَّتَيْنِ نجحتا.\nI saw the two girls who passed."
  },
  {
    "q": "أكمل بالنمط المناسب: رأيتُ البنتينِ ____ نجحتا..\nComplete with the appropriate form: I saw the two girls who passed.",
    "options": [
      "اللَّتَيْنِ\nallatayni — the two whom or of whom (feminine accusative/genitive)",
      "الَّذِينَ\nalladhīna — those who (masculine plural)",
      "اللَّذَانِ\nalladhāni — the two who (masculine nominative)",
      "اللَّذَيْنِ\nalladhayni — the two whom or of whom (masculine accusative/genitive)",
      "اللَّتَانِ\nallatāni — the two who (feminine nominative)"
    ],
    "correctIndex": 0,
    "a": "اللَّتَيْنِ هو اللفظ المناسب في هذا المثال.\nallatayni — the two whom or of whom (feminine accusative/genitive) is the appropriate form in this example."
  },
  {
    "q": "ما التحليل الأنسب لـ اللَّتَيْنِ؟\nWhat is the best description of allatayni — the two whom or of whom (feminine accusative/genitive)?",
    "options": [
      "للمثنى المذكر في حالة الرفع\nFor masculine dual in the nominative",
      "للمثنى المذكر في النصب والجر\nFor masculine dual in the accusative and genitive",
      "للمثنى المؤنث في حالة الرفع\nFor feminine dual in the nominative",
      "للمثنى المؤنث في النصب والجر\nFor feminine dual in the accusative and genitive",
      "لجمع المذكر\nFor masculine plural"
    ],
    "correctIndex": 3,
    "a": "اللَّتَيْنِ: للمثنى المؤنث في النصب والجر.\nallatayni — the two whom or of whom (feminine accusative/genitive): For feminine dual in the accusative and genitive."
  },
  {
    "q": "ما اللفظ الذي يطابق الوصف الآتي: لجمع المذكر؟\nWhich expression matches this description: For masculine plural?",
    "options": [
      "اللَّذَانِ\nalladhāni — the two who (masculine nominative)",
      "اللَّذَيْنِ\nalladhayni — the two whom or of whom (masculine accusative/genitive)",
      "اللَّتَانِ\nallatāni — the two who (feminine nominative)",
      "اللَّتَيْنِ\nallatayni — the two whom or of whom (feminine accusative/genitive)",
      "الَّذِينَ\nalladhīna — those who (masculine plural)"
    ],
    "correctIndex": 4,
    "a": "الَّذِينَ: لجمع المذكر.\nalladhīna — those who (masculine plural): For masculine plural."
  },
  {
    "q": "أيُّ مثالٍ يستعمل الَّذِينَ؟\nWhich example uses alladhīna — those who (masculine plural)?",
    "options": [
      "حضرَ الطالبانِ اللَّذَانِ نجحا.\nThe two students who passed attended.",
      "رأيتُ الطالبينِ اللَّذَيْنِ نجحا.\nI saw the two students who passed.",
      "حضرتِ البنتانِ اللَّتَانِ نجحتا.\nThe two girls who passed attended.",
      "رأيتُ البنتينِ اللَّتَيْنِ نجحتا.\nI saw the two girls who passed.",
      "جاء الطلابُ الَّذِينَ نجحوا.\nThe students who passed came."
    ],
    "correctIndex": 4,
    "a": "جاء الطلابُ الَّذِينَ نجحوا.\nThe students who passed came."
  },
  {
    "q": "أكمل بالنمط المناسب: جاء الطلابُ ____ نجحوا..\nComplete with the appropriate form: The students who passed came.",
    "options": [
      "الَّذِينَ\nalladhīna — those who (masculine plural)",
      "اللَّذَانِ\nalladhāni — the two who (masculine nominative)",
      "اللَّذَيْنِ\nalladhayni — the two whom or of whom (masculine accusative/genitive)",
      "اللَّتَانِ\nallatāni — the two who (feminine nominative)",
      "اللَّتَيْنِ\nallatayni — the two whom or of whom (feminine accusative/genitive)"
    ],
    "correctIndex": 0,
    "a": "الَّذِينَ هو اللفظ المناسب في هذا المثال.\nalladhīna — those who (masculine plural) is the appropriate form in this example."
  },
  {
    "q": "ما التحليل الأنسب لـ الَّذِينَ؟\nWhat is the best description of alladhīna — those who (masculine plural)?",
    "options": [
      "للمثنى المذكر في حالة الرفع\nFor masculine dual in the nominative",
      "للمثنى المذكر في النصب والجر\nFor masculine dual in the accusative and genitive",
      "للمثنى المؤنث في حالة الرفع\nFor feminine dual in the nominative",
      "للمثنى المؤنث في النصب والجر\nFor feminine dual in the accusative and genitive",
      "لجمع المذكر\nFor masculine plural"
    ],
    "correctIndex": 4,
    "a": "الَّذِينَ: لجمع المذكر.\nalladhīna — those who (masculine plural): For masculine plural."
  }
]

function TopicPage() {
  return <GrammarTopicPage arabic="الأسماء الموصولة للمثنى" title="Dual Relative Pronouns" description="Choose the dual relative pronoun that matches gender and case." items={quizItems} />
}


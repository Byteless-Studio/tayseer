// ─── quiz-types.ts ──────────────────────────────────────────────────────────
// Shared quiz item type for the /challenges section (vocabulary + grammar
// quizzes). Stricter than the existing `QuizItem` (from
// arabic-with-mufti-saim/-arabic-101.types.ts) — every field here is
// required, `options` is always exactly four choices, and `correctIndex` is
// always a valid index into it. `StrictQuizItem` is structurally assignable
// to `QuizItem`, so `<QuizCarousel items={quizItems} />` type-checks without
// any changes to QuizCarousel.

export interface StrictQuizItem {
  q: string
  a: string
  options: [string, string, string, string]
  correctIndex: 0 | 1 | 2 | 3
}

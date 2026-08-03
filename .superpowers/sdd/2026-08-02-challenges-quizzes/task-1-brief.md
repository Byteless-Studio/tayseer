### Task 1: Shared quiz types + Vocabulary quiz

**Files:**
- Create: `src/routes/challenges/-quiz-types.ts`
- Create: `src/routes/challenges/vocabulary/index.tsx`

**Interfaces:**
- Produces: `StrictQuizItem` type, consumed by every task in this plan.
  ```ts
  export interface StrictQuizItem {
    q: string
    a: string
    options: [string, string, string, string]
    correctIndex: 0 | 1 | 2 | 3
  }
  ```
  `StrictQuizItem` is structurally assignable to the existing `QuizItem` (from `-arabic-101.types.ts`), so `<QuizCarousel items={quizItems} />` type-checks without changes to `QuizCarousel`.

- [ ] **Step 1: Create the shared types file**

```ts
// src/routes/challenges/-quiz-types.ts
export interface StrictQuizItem {
  q: string
  a: string
  options: [string, string, string, string]
  correctIndex: 0 | 1 | 2 | 3
}
```

- [ ] **Step 2: Write the vocabulary quiz route**

Create `src/routes/challenges/vocabulary/index.tsx` using the same visual shell as the standard template above (header block with `bg-beige`, back link to `/challenges`, title "Vocabulary — Roots & Patterns", intro blurb explaining that Arabic words are built from a 3-letter root plus a pattern/wazn that shapes the meaning), followed by `<QuizCarousel items={quizItems} />`.

`quizItems: StrictQuizItem[]` must have **at least 40 entries** covering:
- **The 10 verb patterns (أوزان الفعل)** — at least 2 questions each (18 min):
  - فَعَلَ (basic form, e.g. كَتَبَ = to write)
  - فَاعَلَ (mutual/attempted action, e.g. كَاتَبَ = to correspond with)
  - أَفْعَلَ (causative, e.g. أَخْرَجَ = to take out)
  - فَعَّلَ (intensive/causative, e.g. كَسَّرَ = to smash to pieces)
  - تَفَعَّلَ (reflexive of فَعَّلَ, e.g. تَعَلَّمَ = to learn/teach oneself)
  - تَفَاعَلَ (reciprocal, e.g. تَعَاوَنَ = to cooperate)
  - اِنْفَعَلَ (passive/reflexive, e.g. اِنْكَسَرَ = to get broken)
  - اِفْتَعَلَ (reflexive, e.g. اِجْتَمَعَ = to gather/assemble)
  - اِسْتَفْعَلَ (to seek/consider X, e.g. اِسْتَخْرَجَ = to extract)
  Each question either gives root + pattern → asks for the resulting word or its meaning, or gives a derived word → asks which pattern it's on and what that pattern signals (causative, reciprocal, reflexive, etc.).
- **Noun patterns** — at least 2 questions each (12 min):
  - فَاعِل — active participle / doer (e.g. كَاتِب = writer)
  - مَفْعُول — passive participle / done-to (e.g. مَكْتُوب = written)
  - فَعَّال — intensive/professional (e.g. نَجَّار = carpenter)
  - مِفْعَال / مِفْعَل / مِفْعَلة — instrument noun (e.g. مِفْتَاح = key)
  - مَفْعَل / مَفْعِل — place/time noun (e.g. مَكْتَب = office, مَدْرَسَة-style)
  - مصدر common patterns: فِعَالة، فُعُول، تَفْعِيل (e.g. كِتَابَة = writing, دُخُول = entering, تَعْلِيم = teaching)
- **At least 10 additional mixed questions** giving a word built from one of these roots — ك-ت-ب، د-ر-س، ع-ل-م، خ-ر-ج، د-خ-ل، ف-ت-ح، ك-س-ر، ج-م-ع، ن-ص-ر، ق-ر-ب — and asking the learner to identify the root, the pattern name, or the meaning conveyed by the pattern.

Every `a` field must name the pattern and explain what that pattern grammatically/semantically conveys, not just restate the answer.

- [ ] **Step 3: Verify**

Run: `npm run build`
Expected: no TypeScript errors, build succeeds.

- [ ] **Step 4: Manual check**

Run `npm run dev`, visit `/challenges/vocabulary`, answer a few questions, confirm the quiz renders, hints show after answering, and the score screen works at the end.

- [ ] **Step 5: Commit**

```bash
git add src/routes/challenges/-quiz-types.ts src/routes/challenges/vocabulary/index.tsx
git commit -m "Add vocabulary roots & patterns quiz"
```

---


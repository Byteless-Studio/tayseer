# Task 5 Report: Grammar quizzes 37–47 (particles & advanced structures)

## Scope actually completed by this agent

This agent completed **topics 40–47 only** (the remaining 8 of the 11 topics in Task 5's
brief). Topics 37 (`conjunctions`), 38 (`inna-wa-akhawatuha`), and 39
(`kaana-wa-akhawatuha`) were already done and committed by a prior agent before this run
started, and were **not touched**.

Files created:
- `src/routes/challenges/grammar/other-particles/index.tsx` (Topic 40 of 47)
- `src/routes/challenges/grammar/irab-mudaari/index.tsx` (Topic 41 of 47)
- `src/routes/challenges/grammar/masdar-muawwal/index.tsx` (Topic 42 of 47)
- `src/routes/challenges/grammar/comparative-superlative/index.tsx` (Topic 43 of 47)
- `src/routes/challenges/grammar/numbers-11-100/index.tsx` (Topic 44 of 47)
- `src/routes/challenges/grammar/spelling-rules/index.tsx` (Topic 45 of 47)
- `src/routes/challenges/grammar/adverbs-of-time-tamyiz/index.tsx` (Topic 46 of 47)
- `src/routes/challenges/grammar/negative-questions/index.tsx` (Topic 47 of 47)

Each file follows the exact template pattern from
`src/routes/challenges/grammar/kaana-wa-akhawatuha/index.tsx`: same header block, same back
link `<Link to="/challenges/grammar">`, same "Topic N of 47" label, same RTL Arabic styling,
same `<QuizCarousel items={quizItems} />`, and imports `StrictQuizItem` from
`#/routes/challenges/-quiz-types` without modifying that file or `QuizCarousel.tsx`.

Each file has exactly 8 questions (verified via `grep -c 'correctIndex:'`), 4 options each,
with a substantive `a` field naming the specific i'rāb/ṣarf rule. Question styles were
deliberately mixed within each file — concept-check, fill-in-the-blank, and error-spotting —
targeting at least 2 of each style per topic (verified by manual count per file).

The grammar hub page (`src/routes/challenges/grammar/index.tsx`) was **not modified** — it
still lists only topics 1–39 in its `topics` array. Wiring in entries for 40–47 is Task 6's
job, per the brief. `<Link to="/challenges/grammar">` in all 8 new files produces the known,
expected, non-blocking `tsc --noEmit` route-type complaint called out in the task
instructions; this does not affect `npm run build` (Vite), which passes.

## Brief inaccuracies found and corrected

Per instructions, where the brief's content was grammatically imprecise, the grammatically
correct version was implemented instead of following the brief literally. Three cases found:

1. **Topic 42 (masdar-muawwal)** — the brief lists "قال إنّ..." as an example context that
   produces a مصدر مؤول from أن/أنّ. This is incorrect: إنّ (kasra) after القول never forms a
   مصدر مؤول — it opens an independent مقول القول clause. Only أنّ (fatha) forms a مصدر مؤول,
   typically after verbs of certainty/belief (علمتُ أنّ، أظنّ أنّ) or after a preposition
   (تفاجأتُ من أنّ). I used correct examples throughout and added a dedicated question (Q4)
   that explicitly teaches the أنّ-vs-إنّ distinction, since it's a genuinely common point of
   confusion and ties directly into the topic.

2. **Topic 43 (comparative-superlative)** — the brief describes the superlative إضافة
   construction as "أفعل + idāfah to an indefinite plural (أكبر الطلابِ)". But "الطلابِ" in
   that very example carries أل — it is definite, not indefinite. The correct rule: the
   superlative إضافة is either to a **definite** plural (بأل, e.g. أفضلُ الطلابِ, with optional
   gender/number agreement) or to an **indefinite singular** (e.g. أفضلُ رجلٍ) — never an
   indefinite plural. I implemented both correct forms (Q3 covers definite-plural إضافة, Q6/Q7
   cover indefinite-singular إضافة) and avoided the brief's mislabeled example.

3. **Topic 46 (adverbs-of-time-tamyiz)** — the brief cites "عندي كيلو تمرٍ" as an example of
   تمييز being "منصوب", but its own example spells "تمرٍ" with kasra tanwīn (مجرور), which
   contradicts the claim. The correct grammar: تمييز after مقادير الكيل والوزن والمساحة
   (كيلو، رطل، متر) is normally مجرور بالإضافة (as the brief's own example actually shows), with
   منصوب only valid as an alternative when the phrase is not construed as إضافة (e.g. "اشتريتُ
   كيلو تمراً"). This is a distinct construction from تمييز العدد or تمييز الجملة/النسبة
   (طاب زيدٌ نفساً), which are always منصوب. I implemented this correctly (Q5/Q6) and kept the
   brief's طاب-زيدٌ-نفساً example, which is correctly منصوب.

## Arabic-correctness checks performed

Checked every generated sentence for malformed diacritics (أل + tanwīn on the same word, أل on
a proper noun, impossible harakah combinations) per the task's explicit warning that prior
tasks had exactly this bug caught in review. Notable adjustments made during drafting:
- Dropped a proposed feminine-plural superlative form ("الفضليات"/"الكبريات") from Topic 43's
  answer explanation because that plural is not reliably/uniformly attested — kept only the
  well-established masculine singular (الأكبر), feminine singular (الكبرى), and masculine sound
  plural (الأكبرون) agreement forms.
- Simplified a جزم+نون-الوقاية example in Topic 47 to avoid an unnecessary tajwīd-level kasra
  insertion at a word boundary that isn't standard in written MSA diacritization.
- Verified proper nouns (e.g. "زيدٌ" in Topic 46) are not combined with أل, and that no
  indefinite noun carries both أل and tanwīn anywhere across the 8 files.

## Verification

- `npm run build` — **passed**, exit code 0, no TypeScript/build errors (`vite build`
  completed in ~600ms; `.output/server/_ssr/` contains a bundle for each of the 8 new routes:
  `other-particles`, `irab-mudaari`, `masdar-muawwal`, `comparative-superlative`,
  `numbers-11-100`, `spelling-rules`, `adverbs-of-time-tamyiz`, `negative-questions`).
- `src/routeTree.gen.ts` was regenerated by the build. Diff is purely additive (184
  insertions, 0 deletions) — it only adds route registrations for the 8 new topics; verified
  no deletions via `git diff src/routeTree.gen.ts | grep -c '^-[^-]'` → 0.
- Question count verified per file via `grep -c 'correctIndex:'` → 8/8/8/8/8/8/8/8.

## Concern: concurrent, unrelated file modifications observed during this run

While this agent was working, `git status` began showing **other, pre-existing grammar quiz
files being modified live** (not by this agent) — `conjunctions`, `inna-wa-akhawatuha`,
`adjectives-agreement`, `attached-pronouns`, `colors`, `definiteness-tanwin`,
`masculine-feminine`, `negation-of-past`, `past-tense-conjugation`, `prepositions`,
`present-tense-conjugation`, `weak-verbs`, `yes-no-questions` — with English translations
being appended line-by-line to the Arabic `q`/`options`/`a` text. This agent made none of
these changes and does not know their origin; the set of affected files grew across repeated
`git status` checks during this session, indicating an active concurrent process/agent writing
to the same working directory (this task's instructions explicitly said to work in the main
repo, not a worktree). Per the task's explicit git-add instructions, this agent's commit stages
**only** the 8 new topic folders plus `src/routeTree.gen.ts` — none of the files touched by
that other process are included. The orchestrator should be aware another agent may be
concurrently modifying files in this same working directory outside this task's scope.

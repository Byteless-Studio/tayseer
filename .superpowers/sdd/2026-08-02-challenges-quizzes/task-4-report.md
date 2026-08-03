# Task 4 Report — Grammar topics 29–36 (verbs: past & present)

**Status:** DONE

**Commit:** 57dd81204f4342c69f1c47f260cc4bf87a1708fc — "Add grammar quizzes 29-36: past & present tense verbs" (9 files: 8 new topic pages + `src/routeTree.gen.ts`)

**Test summary:** `npm run build`: pass (exit code 0, no errors). `npx tsc --noEmit` shows only the expected, known, non-blocking `TS2820` error on `<Link to="/challenges/grammar">` in all 8 new files — identical to the pre-existing error on all 28 prior grammar topic files, caused by the grammar hub route not existing yet (Task 6). Did not touch or create the hub page per instructions.

**Files created:**
- `src/routes/challenges/grammar/verb-basics-faail-mafool/index.tsx` (Topic 29)
- `src/routes/challenges/grammar/past-tense-conjugation/index.tsx` (Topic 30)
- `src/routes/challenges/grammar/negation-of-past/index.tsx` (Topic 31)
- `src/routes/challenges/grammar/present-tense-conjugation/index.tsx` (Topic 32)
- `src/routes/challenges/grammar/weak-verbs/index.tsx` (Topic 33)
- `src/routes/challenges/grammar/imperative/index.tsx` (Topic 34)
- `src/routes/challenges/grammar/prohibitive/index.tsx` (Topic 35)
- `src/routes/challenges/grammar/naaqisah-verbs/index.tsx` (Topic 36)
- `src/routeTree.gen.ts` regenerated and included in the commit

Each file follows the exact template from `src/routes/challenges/grammar/idafah/index.tsx` (header block, "← All grammar topics" back link to `/challenges/grammar`, "Topic N of 47" label, RTL Arabic `<h1>`/intro styling, `<QuizCarousel items={quizItems} />`). Verified every file has exactly 8 `StrictQuizItem` entries (counted `correctIndex:` occurrences per file — all 8/8). Questions mix concept-check, fill-in-the-blank, and error-spotting styles within each topic; none of the 8 topics is uniformly one shape.

**Content correctness spot-checks performed:**
- Verified full past-tense suffix paradigm for كتب (هو/هي/هما×2/هم/هنّ/أنتَ/أنتِ/أنتما/أنتم/أنتنّ/أنا/نحن) and full present-tense prefix/five-verb paradigm before writing questions.
- Verified hollow-verb vowel drop (قُلْتُ, not قَالْتُ), hamzated-verb imperative drop (خُذْ, كُلْ), doubled-root idghām (ظَنَّ from ظ-ن-ن), and imperative همزة الوصل vowel-matching rule (اُكْتُبْ vs اِجْلِسْ, matching the مضارع's عين vowel) against standard sarf rules.
- No أل + تنوين, no أل on a proper noun, and no impossible harakah combinations appear in any example word across the 8 files.

**Deviation flagged (per instructions, not "fixed silently"):** Task 4 brief's topic-36 description states "كاد ... expects a مضارع خبر with no أن" as part of the "كان وأخواتها" family. Traditionally, كاد belongs to a distinct grammatical family — كاد وأخواتها / أفعال المقاربة — not literally "كان وأخواتها" (النواسخ الناقصة). Both families are ناسخة and enter on nominal sentences, but كاد's خبر must be a مضارع clause, unlike كان's خبر which is a single noun/adjective. Rather than mislabeling كاد as one of "كان's sisters," I wrote Q7/Q8 of the naaqisah-verbs file to correctly present كاد as belonging to the related-but-separate "كاد وأخواتها / أفعال المقاربة" family, and updated the page's intro paragraph to reflect this. This preserves all the brief's factual content about كاد's meaning and no-أن behavior while avoiding a grammar mislabeling in a page students will study from.

**Manual route check:** Not run interactively (no browser available in this environment); relying on `npm run build`'s successful SSR bundle generation for all 8 new routes (`.output/server/_ssr/{topic}-*.mjs` present for each) plus the clean `tsc` diff limited to the known Link issue as sufficient verification that both `/challenges/grammar/present-tense-conjugation` and `/challenges/grammar/naaqisah-verbs` are correctly wired into the route tree.

**Concerns:** None blocking. The كاد/كان وأخواتها labeling nuance above is the only deviation from literal brief text; it is a correction, not an omission — all brief content is still covered accurately.

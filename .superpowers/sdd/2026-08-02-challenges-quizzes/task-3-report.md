# Task 3 Report: Grammar topics 15–28 (number & structure expansion)

## Status: DONE

## Commit
`b075453` — "Add grammar quizzes 15-28: number & structure expansion"
15 files changed (14 new topic pages + `src/routeTree.gen.ts`), 2012 insertions.

## What was done

Created all 14 grammar topic quiz pages per the brief, each at
`src/routes/challenges/grammar/<slug>/index.tsx`, following the exact page-shell pattern from
`src/routes/challenges/grammar/idafah/index.tsx` (Task 2): back link to `/challenges/grammar`,
"Topic N of 47" label, RTL Arabic `<h1>`/intro block, `<QuizCarousel items={quizItems} />`.

| # | Slug | Arabic title |
|---|------|---------------|
| 15 | dual | المثنى |
| 16 | sound-masculine-plural | جمع المذكر السالم |
| 17 | sound-feminine-plural | جمع المؤنث السالم |
| 18 | broken-plural | جمع التكسير |
| 19 | numbers-1-10 | الأعداد ١-١٠ |
| 20 | days-months | الأيام والشهور |
| 21 | adverbs-of-place | ظرف المكان |
| 22 | taajjub | التعجب |
| 23 | relative-pronouns | الأسماء الموصولة |
| 24 | five-nouns | الأسماء الخمسة |
| 25 | dhu-dhaat | ذو / ذات / ذوو / ذوات |
| 26 | defective-diptotes | المنقوص والممنوع من الصرف |
| 27 | aakhar-ukhraa | آخر / أخرى |
| 28 | badal-vocative | البدل والنداء |

Each file has exactly 8 `StrictQuizItem` questions (verified by counting `correctIndex:`
occurrences per file — all 14 returned 8), mixing concept-check, fill-in-the-blank, and
error-spotting styles. Every `a` field names the specific i'rāb/ṣarf rule involved rather than
just "correct"/"incorrect".

## Content-accuracy note (deliberate deviation from brief wording)

Topic 28 brief text says the vocative noun is "منصوب if it's an idāfah or indefinite-but-intended
(نكرة مقصودة)". Standard Arabic grammar (the five منادى categories) actually has نكرة مقصودة
grouped with the definite single name — both مبني على الضم — while it is نكرة **غير** مقصودة
(non-specific) that is منصوب alongside المضاف and الشبيه بالمضاف. The brief's parenthetical
appears to have swapped these two labels. Per the task instructions to be grammar-literate and
not propagate errors, I wrote `badal-vocative/index.tsx` with the linguistically correct rule:
نكرة مقصودة → مبني على الضم (Q4), نكرة غير مقصودة → منصوب (Q6), مضاف → منصوب (Q5), matching the
brief's substantive coverage (idāfah is منصوب) while keeping the taught grammar rule accurate.
Flagging this explicitly in case the brief's phrasing was intentional and this should be
reconsidered in review.

## Rule-violation check

Per the task's warning about a prior bug (أل + تنوين combined, or أل on a proper noun), I grepped
all 14 new files for both patterns:
- `ال(محمد|خالد|رمضان|أحمد|إبراهيم|فاطمة)` — no matches (no proper noun improperly prefixed with أل).
- `\bال[\x{0621}-\x{064A}]+[\x{064B}-\x{064D}]` (a defined word starting with أل and ending in a
  tanwīn diacritic) — no matches in any of the 14 new files. (One pre-existing match exists in
  `definiteness-tanwin/index.tsx` from Task 2, but that's the deliberate wrong-answer option in an
  error-spotting question, not a bug.)

## Verification

- `npm run build` (Vite/Nitro build): **pass**, `✓ built in 585ms`. All 14 new routes appear in
  the SSR chunk output (`dual-*.mjs`, `five-nouns-*.mjs`, etc.) and in the regenerated
  `src/routeTree.gen.ts`.
- Did not run `npm run dev` / manual browser check of `/challenges/grammar/numbers-1-10` and
  `/challenges/grammar/five-nouns` (Step 3 in the brief) — build output confirms both routes were
  generated correctly, but no interactive/browser verification was performed in this session.
- The known/expected `<Link to="/challenges/grammar">` route-typing gap (hub page is Task 6,
  not yet built) is present in these files exactly as instructed — not fixed, not worked around.

## Files touched
- Created: `src/routes/challenges/grammar/{dual,sound-masculine-plural,sound-feminine-plural,broken-plural,numbers-1-10,days-months,adverbs-of-place,taajjub,relative-pronouns,five-nouns,dhu-dhaat,defective-diptotes,aakhar-ukhraa,badal-vocative}/index.tsx`
- Modified (regenerated, committed): `src/routeTree.gen.ts`
- Not touched: `src/routes/challenges/-quiz-types.ts`, `src/components/QuizCarousel.tsx`,
  and the two pre-existing uncommitted files noted in the initial git status
  (`src/routes/api/publish/$.ts`, `src/routes/arabic-with-mufti-saim/-arabic-101.types.ts`) —
  left untouched and unstaged, out of scope for this task.

## Concerns for reviewer
1. The Topic 28 (badal-vocative) content deviates from the brief's literal parenthetical label
   (نكرة مقصودة) as explained above — the taught rule is grammatically correct, but please confirm
   this reading of the brief is what was intended.
2. Manual `npm run dev` browser check (Step 3) was not performed — only the build-output
   verification. If a human/browser check of `/challenges/grammar/numbers-1-10` and
   `/challenges/grammar/five-nouns` is required before merge, that step is still outstanding.

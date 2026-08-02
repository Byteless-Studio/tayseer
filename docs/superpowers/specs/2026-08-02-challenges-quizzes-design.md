# Challenges: Vocabulary & Grammar Quizzes

## Goal

Replace the "Coming Soon" placeholder at `/challenges` with two working quiz sections:

1. **Vocabulary** — root & pattern (wazn) recognition, one quiz.
2. **Grammar** — every structure taught across Madina Arabic Books 1 & 2, as 47 short topic quizzes navigated from a hub page, ordered as one continuous prerequisite progression (no "phases" or book split — topics are merged and sorted easy → hard, each assuming only what came before it).

All content is static, authored inline in TypeScript route files — no S3, no new backend, no new data layer.

## Content sourcing caveat

The two source PDFs (Madina Book 1 & 2 English keys, linked by the user) turned out to be scanned image pages with no extractable text layer — confirmed by downloading both and running `pdftotext`, which returned only a repeated permissions footer (122 lines for the entire Book 1 PDF). No OCR tool is available on this machine. The topic list and question content are therefore built from the user's own detailed grammar inventory (provided in conversation) plus general knowledge of the standard Madina Arabic curriculum, **not** verified page-by-page against the source PDFs. The user has accepted this and will spot-correct content during/after review.

## Reuse (no new components/types)

- `QuizItem` type — already defined in `src/routes/arabic-with-mufti-saim/-arabic-101.types.ts`: `{ q: string; a: string; options?: string[]; correctIndex?: number }`. `a` doubles as the post-answer explanation/hint.
- `QuizCarousel` component — already at `src/components/QuizCarousel.tsx`. Handles question navigation, answer selection, per-question hint reveal, scoring, and a review screen. Used as-is for every quiz on this page (vocab and each grammar topic).

Both are proven in production via the two existing lecture quizzes (`المفعول به`, `mawsoof/sifah` in `book-1-lectures/*.json`), which set the tone/style for question writing: Arabic-forward, concise 4-option MC, explanation grounded in the specific i'raab/sarf rule.

## Routes

```
src/routes/challenges/
  index.tsx                          — hub: 2 cards (Vocabulary, Grammar)
  vocabulary/index.tsx                — roots & patterns quiz (~36-40 questions)
  grammar/index.tsx                   — topic list/grid (47 topics, in order, numbered)
  grammar/<slug>/index.tsx            — one file per topic (47 files), 8 questions each
```

Each grammar topic file is self-contained: a short intro (2-4 sentences) explaining how the structure is formed and what i'raab/sarf effect it causes, followed by `<QuizCarousel items={...} />`. No separate `src/data/` layer — the `QuizItem[]` array lives directly in each route file, matching how the two reference lecture quizzes are structured and keeping each quiz a single file to author/edit.

### Grammar topic order (47, prerequisite-ordered, no phase labels)

1. `definiteness-tanwin` — Definiteness & Tanwīn (نكرة/معرفة، تنوين)
2. `masculine-feminine` — Masculine & Feminine Nouns
3. `ism-ishaara-near` — Ism Ishaara – Near (هذا/هذه)
4. `interrogatives-man-maa` — Interrogatives: من / ما
5. `mubtada-khabar` — The Nominal Sentence (مبتدأ وخبر)
6. `ism-ishaara-far` — Ism Ishaara – Far (ذلك/تلك)
7. `independent-pronouns` — Independent Pronouns (أنا، نحن، أنت، هو، هي...)
8. `yes-no-questions` — Yes/No Questions (أ / هل)
9. `attached-pronouns` — Attached Pronouns (ـه، ـها، ـهم...)
10. `idafah` — Idāfah (possession, mudaaf/mudaaf ilayh, case in idāfah)
11. `prepositions` — Prepositions & case after them
12. `adjectives-agreement` — Adjectives: نعت ومنعوت agreement
13. `colors` — Colors as adjectives
14. `case-system-overview` — Case System Overview (رفع/نصب/جر, hidden endings, indeclinables)
15. `dual` — Dual (المثنى)
16. `sound-masculine-plural` — Sound Masculine Plural
17. `sound-feminine-plural` — Sound Feminine Plural
18. `broken-plural` — Broken Plural
19. `numbers-1-10` — Numbers 1–10 & تمييز/معدود (gender polarity)
20. `days-months` — Days & Months (idāfah + numbers applied)
21. `adverbs-of-place` — Adverbs of Place (ظرف مكان)
22. `taajjub` — Ta'ajjub (ما أفعله!)
23. `relative-pronouns` — Relative Pronouns & Clauses (الذي، التي، الذين)
24. `five-nouns` — The Five Nouns (الأسماء الخمسة)
25. `dhu-dhaat` — ذو / ذات / ذوو / ذوات
26. `defective-diptotes` — Defective Nouns & Diptotes (المنقوص، الممنوع من الصرف)
27. `aakhar-ukhraa` — آخر / أخرى ("another")
28. `badal-vocative` — بدل (Apposition) & Vocative يا
29. `verb-basics-faail-mafool` — Verb Sentence Basics: فاعل/مفعول به, triliteral roots
30. `past-tense-conjugation` — Past Tense — Full Conjugation
31. `negation-of-past` — Negation of the Past (ما / لم)
32. `present-tense-conjugation` — Present Tense — Prefix System & Full Conjugation
33. `weak-verbs` — Weak Verbs in Practice (أكل، أخذ، أراد، قال، كاد، ظن)
34. `imperative` — Imperative (فعل الأمر)
35. `prohibitive` — Prohibitive (لا الناهية)
36. `naaqisah-verbs` — ناقص Verbs: ليس، كان (intro), كاد، أراد
37. `conjunctions` — Conjunctions (و، ف، ثم، أو، أم — incl. أو vs أم)
38. `inna-wa-akhawatuha` — إن وأخواتها
39. `kaana-wa-akhawatuha` — كان وأخواتها (continuation)
40. `other-particles` — Other Particles (لأن، فإن، إنما، لام التعليل)
41. `irab-mudaari` — I'rāb of the Present Tense (مرفوع/منصوب/مجزوم + triggering particles)
42. `masdar-muawwal` — المصدر المؤول (أريد أن.../أظن أن.../قال إن...)
43. `comparative-superlative` — Comparative & Superlative (أفعل التفضيل)
44. `numbers-11-100` — Numbers 11–100 & Ordinals
45. `spelling-rules` — Spelling Rules: Hamzat al-Waṣl, Tāʾ Marbūṭah, الشمسية والقمرية
46. `adverbs-of-time-tamyiz` — Adverbs of Time (ظرف زمان) & Deeper تمييز
47. `negative-questions` — Negative Questions & How to Answer Them

## Question format

All questions are 4-option multiple choice (`options: string[4]`, `correctIndex: 0-3`). Per topic (8 questions) and vocab (~36-40 questions), mix:
- **Concept-check** — "what does X mean / how is X formed"
- **Fill-in-the-blank** — pick the correctly-inflected word for a sentence
- **Error-spotting** — "what's wrong with this sentence" style

`a` (shown after answering, via `QuizCarousel`) always explains the specific i'raab/sarf rule at play, not just "correct/incorrect."

## Vocabulary quiz content

`src/routes/challenges/vocabulary/index.tsx`, one quiz, ~36-40 questions covering:
- The 10 verb patterns/awzān: فَعَلَ، فَاعَلَ، أَفْعَلَ، فَعَّلَ، تَفَعَّلَ، تَفَاعَلَ، اِنْفَعَلَ، اِفْتَعَلَ، اِسْتَفْعَلَ (+ implicitly فَعِلَ/فَعُلَ variants)
- Common noun patterns: فَاعِل (active participle), مَفْعُول (passive participle), فَعَّال (intensive/professional), مِفْعَال/مِفْعَل (instrument), مَفْعَل/مَفْعِل (place/time noun), common مصدر patterns
- Bidirectional: given root + pattern → identify word/meaning; given a word → identify root, pattern name, and what the pattern signals (e.g. مِفْتَاح = instrument noun from ف-ت-ح)

## Hub pages

- `/challenges` (rewrite of existing placeholder): two cards — "Vocabulary — Roots & Patterns" → `/challenges/vocabulary`, "Grammar — Arabic Structures" → `/challenges/grammar`. Follows existing site visual patterns (see `src/routes/cognates/index.tsx` for header/card conventions already in use).
- `/challenges/grammar`: numbered list/grid of all 47 topics in order, each a link card showing topic number, Arabic term, and English gloss.

## Testing / verification

No business logic is being added (`QuizCarousel` and `QuizItem` are unchanged, proven components). Verification is:
- `npm run build` (or the project's existing typecheck command) passes — catches malformed `QuizItem[]` data, bad imports, route-tree generation issues.
- Manually click through the hub → a few grammar topics → vocabulary quiz in the dev server to confirm routing, RTL Arabic rendering, and scoring work end-to-end (per the "test UI changes in a browser" requirement).
- Spot-check a sample of questions per topic for grammatical accuracy given the PDF-verification gap noted above.

## Out of scope

- No progress persistence / accounts / leaderboards.
- No audio.
- No S3 storage for quiz content — everything is static and bundled.
- No changes to `QuizItem`/`QuizCarousel`.

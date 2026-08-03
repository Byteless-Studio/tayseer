### Task 5: Grammar topics 37–47 (particles & advanced structures)

**Files:**
- Create: `src/routes/challenges/grammar/conjunctions/index.tsx`
- Create: `src/routes/challenges/grammar/inna-wa-akhawatuha/index.tsx`
- Create: `src/routes/challenges/grammar/kaana-wa-akhawatuha/index.tsx`
- Create: `src/routes/challenges/grammar/other-particles/index.tsx`
- Create: `src/routes/challenges/grammar/irab-mudaari/index.tsx`
- Create: `src/routes/challenges/grammar/masdar-muawwal/index.tsx`
- Create: `src/routes/challenges/grammar/comparative-superlative/index.tsx`
- Create: `src/routes/challenges/grammar/numbers-11-100/index.tsx`
- Create: `src/routes/challenges/grammar/spelling-rules/index.tsx`
- Create: `src/routes/challenges/grammar/adverbs-of-time-tamyiz/index.tsx`
- Create: `src/routes/challenges/grammar/negative-questions/index.tsx`

**Interfaces:**
- Consumes: `StrictQuizItem` from `#/routes/challenges/-quiz-types` (Task 1), the standard file template above.

Content brief per topic (8 questions each):

37. **conjunctions** — Topic 37, "حروف العطف — Conjunctions". Cover: و (and — no effect on i'rāb, joins words of the same case), ف (then/so — sequential), ثم (then — with a pause/gap), أو (or — general alternative), أم (or — specifically in أ...أم questions expecting a choice between two named options); the أو vs أم distinction is the key test point.
38. **inna-wa-akhawatuha** — Topic 38, "إن وأخواتها". Cover: إن أنّ لكنّ كأنّ لعلّ ليت enter on a nominal sentence and make اسمها منصوب while خبرها stays مرفوع (opposite of كان's family); core meanings: إنّ (emphasis, "indeed"), أنّ (subordinating "that"), لكنّ (but), كأنّ (as if), لعلّ (perhaps), ليت (I wish).
39. **kaana-wa-akhawatuha** — Topic 39, "كان وأخواتها (تابع) — كان and Her Sisters, Continued". Cover: full conjugation of كان across persons and how it negates (لم يكن); the other sisters أصبح/أضحى/ظلّ/بات/صار/ما زال/ما دام and their specific nuanced meanings (became, remained, continued throughout, as long as).
40. **other-particles** — Topic 40, "حروف أخرى — Other Particles". Cover: لأنّ ("because," causal, followed by اسم منصوب like إنّ), فإنّ ("so/then indeed"), إنما (restrictive, "only/just"), لام التعليل (لِ + مضارع منصوب, "in order to").
41. **irab-mudaari** — Topic 41, "إعراب الفعل المضارع — I'rāb of the Present Tense". Cover: مضارع مرفوع is the default (ends ـُ or keeps its نون for the five-verb forms); مضارع منصوب is triggered by النواصب (أن، لن، كي، لام التعليل، إذن — ends ـَ or drops the نون); مضارع مجزوم is triggered by الجوازم (لم، لمّا، لا الناهية، لام الأمر, and إن of the conditional — ends سكون, drops a weak letter, or drops the نون).
42. **masdar-muawwal** — Topic 42, "المصدر المؤول". Cover: أن/أنّ + a مضارع verb or full clause functions as a single مصدر (verbal noun) within the sentence; common after أريد أن..., أظنّ أنّ..., قال إنّ...; can serve as subject, object, or the object of a preposition.
43. **comparative-superlative** — Topic 43, "أفعل التفضيل — Comparative & Superlative". Cover: أفعل التفضيل pattern (أكبر، أجمل) built from most triliteral adjectives; comparative use: أفعل + من (أكبر من); superlative use: أفعل + idāfah to an indefinite plural (أكبر الطلابِ) or with أل (الأكبر); this pattern is diptote in its indefinite comparative form.
44. **numbers-11-100** — Topic 44, "الأعداد ١١-١٠٠ — Numbers 11–100". Cover: 11–19 are compound مبني numbers, counted noun is singular منصوب (تمييز); 20/30.../90 (tens, عشرون-family) decline like a sound masculine plural, counted noun is singular منصوب; مائة/ألف are مضاف to a singular counted noun.
45. **spelling-rules** — Topic 45, "قواعد الإملاء — Spelling Rules". Cover: همزة الوصل (dropped in connected speech, appears with أل، certain افعل-pattern imperatives، ابن، اسم) vs همزة القطع (always pronounced); تاء مربوطة (ة) pronounced ه in pause, ت when connected or suffixed; الشمسية والقمرية — sun letters assimilate the ل of أل (الشمس pronounced ash-shams), moon letters keep it clear (القمر, al-qamar).
46. **adverbs-of-time-tamyiz** — Topic 46, "ظرف الزمان والتمييز — Adverbs of Time & Deeper Tamyīz". Cover: ظرف زمان (اليوم، الآن، أمس، غدًا، صباحًا) functions as a منصوب time adverb; تمييز beyond numbers — an indefinite singular منصوب noun that resolves an otherwise-ambiguous preceding amount/noun (عندي كيلو تمرٍ، طاب زيدٌ نفسًا).
47. **negative-questions** — Topic 47, "الأسئلة المنفية — Negative Questions & How to Answer Them". Cover: أ + لا/ليس forms a negative question (أَلَسْتَ...؟); answering rules — بلى is used to CONTRADICT a negative question ("yes, contrary to what you implied"), نعم is used to CONFIRM the question exactly as stated (whether it was positive or negative); distinguishing بلى vs نعم is the core test point.

- [ ] **Step 1: Write all 11 files**

Follow the standard template exactly per the content brief above, 8 `StrictQuizItem` questions each, mixing concept-check, fill-in-the-blank, and error-spotting styles.

- [ ] **Step 2: Verify**

Run: `npm run build`
Expected: no TypeScript errors, build succeeds.

- [ ] **Step 3: Manual check**

Run `npm run dev`, visit `/challenges/grammar/irab-mudaari` and `/challenges/grammar/negative-questions` directly by URL, confirm both render and work end to end.

- [ ] **Step 4: Commit**

```bash
git add src/routes/challenges/grammar/conjunctions src/routes/challenges/grammar/inna-wa-akhawatuha src/routes/challenges/grammar/kaana-wa-akhawatuha src/routes/challenges/grammar/other-particles src/routes/challenges/grammar/irab-mudaari src/routes/challenges/grammar/masdar-muawwal src/routes/challenges/grammar/comparative-superlative src/routes/challenges/grammar/numbers-11-100 src/routes/challenges/grammar/spelling-rules src/routes/challenges/grammar/adverbs-of-time-tamyiz src/routes/challenges/grammar/negative-questions
git commit -m "Add grammar quizzes 37-47: particles & advanced structures"
```

---


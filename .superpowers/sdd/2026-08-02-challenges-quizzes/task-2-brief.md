### Task 2: Grammar topics 1–14 (noun & sentence basics)

**Files:**
- Create: `src/routes/challenges/grammar/definiteness-tanwin/index.tsx`
- Create: `src/routes/challenges/grammar/masculine-feminine/index.tsx`
- Create: `src/routes/challenges/grammar/ism-ishaara-near/index.tsx`
- Create: `src/routes/challenges/grammar/interrogatives-man-maa/index.tsx`
- Create: `src/routes/challenges/grammar/mubtada-khabar/index.tsx`
- Create: `src/routes/challenges/grammar/ism-ishaara-far/index.tsx`
- Create: `src/routes/challenges/grammar/independent-pronouns/index.tsx`
- Create: `src/routes/challenges/grammar/yes-no-questions/index.tsx`
- Create: `src/routes/challenges/grammar/attached-pronouns/index.tsx`
- Create: `src/routes/challenges/grammar/idafah/index.tsx`
- Create: `src/routes/challenges/grammar/prepositions/index.tsx`
- Create: `src/routes/challenges/grammar/adjectives-agreement/index.tsx`
- Create: `src/routes/challenges/grammar/colors/index.tsx`
- Create: `src/routes/challenges/grammar/case-system-overview/index.tsx`

**Interfaces:**
- Consumes: `StrictQuizItem` from `#/routes/challenges/-quiz-types` (Task 1), the standard file template above.

Each file follows the standard template. Content brief per topic (8 questions each, following the template's slug/title/N):

1. **definiteness-tanwin** — Topic 1 of 47, "تنوين — Definiteness & Tanwīn". Cover: نكرة vs معرفة; تنوين (ـٌ ـً ـٍ) marks an indefinite noun and is dropped once أل or an attached pronoun is added; things that are inherently definite (proper nouns, demonstratives, pronouns, the second term of an idāfah).
2. **masculine-feminine** — Topic 2, "التذكير والتأنيث — Masculine & Feminine Nouns". Cover: default masculine; تاء مربوطة (ة) as the typical feminine marker; "hidden feminine" nouns with no ة (أرض، شمس، ريح, body parts that come in pairs); that an adjective must match its noun's gender.
3. **ism-ishaara-near** — Topic 3, "هذا / هذه — Ism Ishaara (Near)". Cover: هذا (masc. sg. near) vs هذه (fem. sg. near); used as مبتدأ with a noun خبر (هذا كتابٌ) vs. as a demonstrative adjective directly before a definite noun (هذا الكتابُ); both are مبني (indeclinable, unaffected by case).
4. **interrogatives-man-maa** — Topic 4, "من / ما — Interrogatives". Cover: من asks about people, ما asks about things; مَن هذا؟ / ما هذا؟; both مبني.
5. **mubtada-khabar** — Topic 5, "مبتدأ وخبر — The Nominal Sentence". Cover: مبتدأ (topic, مرفوع) + خبر (predicate, مرفوع); typical pattern is definite مبتدأ + indefinite خبر; خبر agrees with مبتدأ in gender/number.
6. **ism-ishaara-far** — Topic 6, "ذلك / تلك — Ism Ishaara (Far)". Cover: ذلك (masc. sg. far) vs تلك (fem. sg. far), parallel to هذا/هذه but for distant objects; combining with idāfah (ذلك كتابُ زيدٍ).
7. **independent-pronouns** — Topic 7, "الضمائر المنفصلة — Independent Pronouns". Cover: أنا نحن أنتَ أنتِ أنتما أنتم أنتنّ هو هي هما هم هنّ; used as مبتدأ; agreement with خبر; مبني.
8. **yes-no-questions** — Topic 8, "أ / هل — Yes/No Questions". Cover: أ prefixed directly to the first word vs هل standing alone at the start of the sentence; answered with نعم/لا.
9. **attached-pronouns** — Topic 9, "الضمائر المتصلة — Attached Pronouns". Cover: ـي ـكَ ـكِ ـهُ ـها ـنا ـكم ـهم attached to a noun = possession (كتابي), to a preposition = its object; attaching a pronoun makes the noun definite, dropping تنوين/أل.
10. **idafah** — Topic 10, "الإضافة — Idāfah". Cover: مضاف (first term — no تنوين, no أل) + مضاف إليه (second term — always مجرور); meaning "of/belonging to"; chains of multiple idāfahs; the whole phrase's definiteness follows the مضاف إليه.
11. **prepositions** — Topic 11, "حروف الجر — Prepositions". Cover: من إلى في على بـ لـ عن مع; a noun following a preposition is always مجرور (جار ومجرور); case with pronoun-suffixed prepositions (منه، له، به) is hidden/implied.
12. **adjectives-agreement** — Topic 12, "النعت والمنعوت — Adjective Agreement". Cover: نعت (adjective) must agree with منعوت (the noun it describes) in gender, number, definiteness, AND case; word order is noun then adjective.
13. **colors** — Topic 13, "الألوان — Colors as Adjectives". Cover: basic colors follow the أَفْعَل (masc.) / فَعْلاء (fem.) pattern (أحمر/حمراء), distinct from regular فعيل-type adjectives; this pattern is diptote (ممنوع من الصرف) so it takes no تنوين even when indefinite.
14. **case-system-overview** — Topic 14, "الإعراب — Case System Overview". Cover: three cases رفع (ـُ), نصب (ـَ), جر (ـِ); typical triggers (subject/مبتدأ → رفع, object → نصب, after a preposition or as مضاف إليه → جر); hidden/estimated (مقدّرة) endings on words ending in ا or ى; مبني words (demonstratives, pronouns) that never change regardless of case.

- [ ] **Step 1: Write all 14 files**

Follow the standard template exactly, substituting each topic's slug, N, Arabic term, English title, intro blurb, and 8 `StrictQuizItem` questions per the content brief above. Mix concept-check, fill-in-the-blank, and error-spotting question styles across each topic's 8 questions.

- [ ] **Step 2: Verify**

Run: `npm run build`
Expected: no TypeScript errors, build succeeds.

- [ ] **Step 3: Manual check**

Run `npm run dev`, visit `/challenges/grammar/idafah` and `/challenges/grammar/case-system-overview` directly by URL, confirm both render and the quiz works end to end.

- [ ] **Step 4: Commit**

```bash
git add src/routes/challenges/grammar/definiteness-tanwin src/routes/challenges/grammar/masculine-feminine src/routes/challenges/grammar/ism-ishaara-near src/routes/challenges/grammar/interrogatives-man-maa src/routes/challenges/grammar/mubtada-khabar src/routes/challenges/grammar/ism-ishaara-far src/routes/challenges/grammar/independent-pronouns src/routes/challenges/grammar/yes-no-questions src/routes/challenges/grammar/attached-pronouns src/routes/challenges/grammar/idafah src/routes/challenges/grammar/prepositions src/routes/challenges/grammar/adjectives-agreement src/routes/challenges/grammar/colors src/routes/challenges/grammar/case-system-overview
git commit -m "Add grammar quizzes 1-14: noun & sentence basics"
```

---


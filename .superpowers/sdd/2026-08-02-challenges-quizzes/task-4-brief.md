### Task 4: Grammar topics 29–36 (verbs: past & present)

**Files:**
- Create: `src/routes/challenges/grammar/verb-basics-faail-mafool/index.tsx`
- Create: `src/routes/challenges/grammar/past-tense-conjugation/index.tsx`
- Create: `src/routes/challenges/grammar/negation-of-past/index.tsx`
- Create: `src/routes/challenges/grammar/present-tense-conjugation/index.tsx`
- Create: `src/routes/challenges/grammar/weak-verbs/index.tsx`
- Create: `src/routes/challenges/grammar/imperative/index.tsx`
- Create: `src/routes/challenges/grammar/prohibitive/index.tsx`
- Create: `src/routes/challenges/grammar/naaqisah-verbs/index.tsx`

**Interfaces:**
- Consumes: `StrictQuizItem` from `#/routes/challenges/-quiz-types` (Task 1), the standard file template above.

Content brief per topic (8 questions each):

29. **verb-basics-faail-mafool** — Topic 29, "الفاعل والمفعول به — Verb Sentence Basics". Cover: فعل (verb) + فاعل (subject, always مرفوع, comes after the verb) + مفعول به (object, منصوب); standard word order is VSO; a verb has only ONE فاعل; متعدٍ (transitive, takes مفعول به) vs لازم (intransitive); the triliteral root ف-ع-ل as the 3-consonant skeleton every derived pattern is built from.
30. **past-tense-conjugation** — Topic 30, "تصريف الفعل الماضي — Past Tense Full Conjugation". Cover: الفعل الماضي conjugates by SUFFIX across all persons; هو (3rd masc. sg.) is the unsuffixed base (كَتَبَ); the suffix set (ت, تِ, تما, تم, تنّ, ا, وا, تا, نَ, نا) across هو/هي/هما/هم/هنّ/أنتَ/أنتِ/أنتما/أنتم/أنتنّ/أنا/نحن.
31. **negation-of-past** — Topic 31, "نفي الماضي — Negation of the Past". Cover: ما + فعل ماضي (ما كتبَ = he did not write) is the simple form; لم + فعل مضارع مجزوم also negates the past (لم يكتبْ) — critically, لم requires the PRESENT-tense verb in the jussive (مجزوم) form, not the ماضي verb itself.
32. **present-tense-conjugation** — Topic 32, "تصريف الفعل المضارع — Present Tense Full Conjugation". Cover: الفعل المضارع is marked by a PREFIX (أ / ن / ي / ت) plus sometimes a suffix; default مرفوع ending is ـُ (or ثبوت النون for the five-verb forms); prefix pattern across persons (أ=أنا, ن=نحن, ي=هو/هم/هن group, ت=أنتَ/أنتِ/هي etc.).
33. **weak-verbs** — Topic 33, "الأفعال المعتلة — Weak Verbs in Practice". Cover: hollow verb (أجوف) like قَالَ/كَادَ — middle radical و/ي becomes ا in الماضي and drops in some conjugations; hamzated verb like أَخَذَ/أَكَلَ — first radical ء drops entirely in the imperative (خُذْ، كُلْ); أَرَادَ as a hollow أفعل-form verb; ظَنَّ as a doubled-root verb from the أخوات ظنّ family that enters on a nominal sentence and makes both مبتدأ and خبر منصوب.
34. **imperative** — Topic 34, "فعل الأمر — The Imperative". Cover: derived from المضارع المجزوم by dropping the person-prefix and adjusting the ending; exists ONLY for 2nd-person (أنتَ/أنتِ/أنتما/أنتم/أنتنّ) forms; ends in سكون, or drops the نون for the five-verb forms, or drops a weak letter; همزة الوصل is added if the resulting form would start with a bare consonant cluster (اُكْتُبْ).
35. **prohibitive** — Topic 35, "لا الناهية — The Prohibitive". Cover: لا + فعل مضارع مجزوم (لا تَكْتُبْ = don't write); distinct from لا النافية (simple negation of the present tense, does NOT cause jazm) — same particle, different grammatical effect depending on whether it's a command.
36. **naaqisah-verbs** — Topic 36, "كان وأخواتها (مقدمة) — Introducing كان and Her Sisters". Cover: كان وأخواتها (كان، أصبح، أمسى، ظلّ، بات، صار، ليس، ما زال...) enter on a nominal sentence and make the خبر منصوب while اسم كان stays مرفوع (the opposite pattern from a normal nominal sentence); ليس = "is not" (present-tense meaning despite the ماضي shape); كاد = "almost/nearly did," expects a مضارع خبر with no أن.

- [ ] **Step 1: Write all 8 files**

Follow the standard template exactly per the content brief above, 8 `StrictQuizItem` questions each, mixing concept-check, fill-in-the-blank, and error-spotting styles.

- [ ] **Step 2: Verify**

Run: `npm run build`
Expected: no TypeScript errors, build succeeds.

- [ ] **Step 3: Manual check**

Run `npm run dev`, visit `/challenges/grammar/present-tense-conjugation` and `/challenges/grammar/naaqisah-verbs` directly by URL, confirm both render and work end to end.

- [ ] **Step 4: Commit**

```bash
git add src/routes/challenges/grammar/verb-basics-faail-mafool src/routes/challenges/grammar/past-tense-conjugation src/routes/challenges/grammar/negation-of-past src/routes/challenges/grammar/present-tense-conjugation src/routes/challenges/grammar/weak-verbs src/routes/challenges/grammar/imperative src/routes/challenges/grammar/prohibitive src/routes/challenges/grammar/naaqisah-verbs
git commit -m "Add grammar quizzes 29-36: past & present tense verbs"
```

---


### Task 3: Grammar topics 15–28 (number & structure expansion)

**Files:**
- Create: `src/routes/challenges/grammar/dual/index.tsx`
- Create: `src/routes/challenges/grammar/sound-masculine-plural/index.tsx`
- Create: `src/routes/challenges/grammar/sound-feminine-plural/index.tsx`
- Create: `src/routes/challenges/grammar/broken-plural/index.tsx`
- Create: `src/routes/challenges/grammar/numbers-1-10/index.tsx`
- Create: `src/routes/challenges/grammar/days-months/index.tsx`
- Create: `src/routes/challenges/grammar/adverbs-of-place/index.tsx`
- Create: `src/routes/challenges/grammar/taajjub/index.tsx`
- Create: `src/routes/challenges/grammar/relative-pronouns/index.tsx`
- Create: `src/routes/challenges/grammar/five-nouns/index.tsx`
- Create: `src/routes/challenges/grammar/dhu-dhaat/index.tsx`
- Create: `src/routes/challenges/grammar/defective-diptotes/index.tsx`
- Create: `src/routes/challenges/grammar/aakhar-ukhraa/index.tsx`
- Create: `src/routes/challenges/grammar/badal-vocative/index.tsx`

**Interfaces:**
- Consumes: `StrictQuizItem` from `#/routes/challenges/-quiz-types` (Task 1), the standard file template above.

Content brief per topic (8 questions each):

15. **dual** — Topic 15, "المثنى — The Dual". Cover: add انِ (رفع) / يْنِ (نصب/جر) to the singular; applies to nouns, adjectives, AND pronouns (هما); a dualized noun drops its تنوين.
16. **sound-masculine-plural** — Topic 16, "جمع المذكر السالم — Sound Masculine Plural". Cover: add ونَ (رفع) / ينَ (نصب/جر), used for masculine human nouns/participles; the نون is dropped when the plural is a مضاف (idāfah).
17. **sound-feminine-plural** — Topic 17, "جمع المؤنث السالم — Sound Feminine Plural". Cover: تاء مربوطة becomes ت then add ات; case is marked with damma (رفع) / kasra (نصب و جر) — NOT fatha, unlike most nouns.
18. **broken-plural** — Topic 18, "جمع التكسير — Broken Plural". Cover: internal vowel-pattern change instead of a suffix (كتاب→كُتُب, رجل→رجال, بيت→بيوت); patterns are memorized per noun; a non-human broken plural is grammatically treated as feminine singular for agreement.
19. **numbers-1-10** — Topic 19, "الأعداد ١-١٠ — Numbers 1–10". Cover: gender polarity — numbers 3–10 take the OPPOSITE gender of the counted noun (ثلاثةُ رجالٍ vs ثلاثُ نساءٍ); numbers 1–2 agree in gender normally and usually follow the noun; the counted noun (معدود) after 3–10 is plural and مجرور as مضاف إليه.
20. **days-months** — Topic 20, "الأيام والشهور — Days & Months". Cover: names of the days (الأحد، الاثنين...) used with idāfah (يوم الأحد); applying idāfah/number knowledge to express simple dates.
21. **adverbs-of-place** — Topic 21, "ظرف المكان — Adverbs of Place". Cover: فوق تحت أمام وراء بين عند يمين يسار; function as ظرف (منصوب) when followed by a مضاف إليه (فوقَ الطاولةِ = فوق is منصوب, الطاولة is مجرور as مضاف إليه).
22. **taajjub** — Topic 22, "التعجب — Ta'ajjub". Cover: pattern ما أَفْعَلَه! ("how ...!", e.g. ما أجملَ السماءَ!) — ما is مبتدأ (مبني), أفعل is a fixed-shape verb, the following noun is مفعول به منصوب; secondary pattern أَفْعِلْ بِه!.
23. **relative-pronouns** — Topic 23, "الأسماء الموصولة — Relative Pronouns & Clauses". Cover: الذي (masc. sg.), التي (fem. sg.), اللذان/اللتان (dual), الذين (masc. pl.), اللاتي (fem. pl.); requires a referring pronoun (عائد) in the clause that follows; only used after a DEFINITE antecedent.
24. **five-nouns** — Topic 24, "الأسماء الخمسة — The Five Nouns". Cover: أب أخ حم فو ذو ("possessor of"); take و in رفع, ا in نصب, ي in جر — but ONLY when مضاف to something other than ياء المتكلم ("my").
25. **dhu-dhaat** — Topic 25, "ذو / ذات / ذوو / ذوات". Cover: ذو (masc. sg. "possessor of"), ذات (fem. sg.), ذوو (masc. pl.), ذوات (fem. pl.); always مضاف to a following noun, never stands alone, meaning "possessor/owner of [quality]".
26. **defective-diptotes** — Topic 26, "المنقوص والممنوع من الصرف — Defective Nouns & Diptotes". Cover: الاسم المنقوص ends in ي preceded by kasra (القاضي) — drops the ي in indefinite رفع/جر (قاضٍ) but keeps it in نصب (قاضياً) and always when definite; الممنوع من الصرف takes no تنوين and fatha instead of kasra in indefinite جر — categories: أفعل-pattern colors/elatives, certain proper names, plurals on مفاعل/مفاعيل.
27. **aakhar-ukhraa** — Topic 27, "آخر / أخرى — Another/Other". Cover: آخر (masc.), أخرى (fem.), آخرون/أخريات (plural); agrees like a normal adjective but is diptote in the indefinite masculine singular.
28. **badal-vocative** — Topic 28, "البدل والنداء — Apposition & Vocative". Cover: بدل renames/clarifies the preceding noun and takes the SAME case as it (not a fixed case); يا + vocative noun — the vocative noun is مبني على الضم if it's a definite single name (يا محمدُ) or منصوب if it's an idāfah or indefinite-but-intended (نكرة مقصودة).

- [ ] **Step 1: Write all 14 files**

Follow the standard template exactly per the content brief above, 8 `StrictQuizItem` questions each, mixing concept-check, fill-in-the-blank, and error-spotting styles.

- [ ] **Step 2: Verify**

Run: `npm run build`
Expected: no TypeScript errors, build succeeds.

- [ ] **Step 3: Manual check**

Run `npm run dev`, visit `/challenges/grammar/numbers-1-10` and `/challenges/grammar/five-nouns` directly by URL, confirm both render and work end to end.

- [ ] **Step 4: Commit**

```bash
git add src/routes/challenges/grammar/dual src/routes/challenges/grammar/sound-masculine-plural src/routes/challenges/grammar/sound-feminine-plural src/routes/challenges/grammar/broken-plural src/routes/challenges/grammar/numbers-1-10 src/routes/challenges/grammar/days-months src/routes/challenges/grammar/adverbs-of-place src/routes/challenges/grammar/taajjub src/routes/challenges/grammar/relative-pronouns src/routes/challenges/grammar/five-nouns src/routes/challenges/grammar/dhu-dhaat src/routes/challenges/grammar/defective-diptotes src/routes/challenges/grammar/aakhar-ukhraa src/routes/challenges/grammar/badal-vocative
git commit -m "Add grammar quizzes 15-28: number & structure expansion"
```

---


# Challenges: Vocabulary & Grammar Quizzes Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the "Coming Soon" placeholder at `/challenges` with a working Vocabulary (roots & patterns) quiz and a 47-topic Grammar quiz covering Madina Arabic Books 1 & 2, reusing the existing `QuizItem`/`QuizCarousel`.

**Architecture:** Every quiz is a single self-contained TanStack Router file route (`index.tsx` in its own folder) with the question data declared inline as a module-level array and rendered through the existing `QuizCarousel` component. No new components, no new backend, no S3 — pure static content + routing.

**Tech Stack:** TanStack Router (file-based routing, folder = route segment), React, Tailwind. No test framework is added — see "Verification approach" below for why.

## Global Constraints

- Reuse `QuizItem` (`src/routes/arabic-with-mufti-saim/-arabic-101.types.ts`) and `QuizCarousel` (`src/components/QuizCarousel.tsx`) as-is. Do not modify either.
- Every quiz question is 4-option multiple choice (`options` has exactly 4 entries, `correctIndex` is `0`, `1`, `2`, or `3`).
- Each grammar topic file has exactly 8 questions. The vocabulary quiz has at least 40 questions (see Task 1 breakdown).
- Follow the visual conventions already established in `src/routes/cognates/index.tsx`: `bg-beige` header block, `mx-auto w-[min(Npx,calc(100%-2rem))]` content container, `font-serif` headings, `text-muted-foreground` body copy, RTL Arabic spans use `dir="rtl" lang="ar"` with `style={{ fontFamily: "'Noto Naskh Arabic', serif" }}`.
- Route ids follow the existing pattern: `createFileRoute('/challenges/<segment>/')({...})`.
- No new dependencies.

## Verification approach

This codebase has no test framework wired up (`npm run test` exists in `package.json` but there are zero existing test files — introducing vitest config from scratch is out of scope and unrelated to this feature). Instead of runtime tests, **shape correctness is enforced by TypeScript itself**: every quiz array is typed against `StrictQuizItem` (Task 1), which uses a 4-tuple for `options` and a `0|1|2|3` union for `correctIndex`. A malformed array (wrong option count, out-of-range index, missing field) is a compile error caught by `npm run build`. Every task's verification step is: `npm run build` passes, then a manual browser check of the new route(s) in `npm run dev`.

## Content authoring approach

Each grammar topic task below specifies the exact grammatical facts, example words, and patterns the 8 questions must cover — this is the "how," not a placeholder. Writing the full English/Arabic question text for all ~376 grammar questions + ~40 vocab questions inline in this plan would just duplicate the implementation files themselves; the concept briefs are the right altitude for a plan. The subagent executing each task is expected to be Arabic-grammar-literate (this is Claude) and to turn each concept bullet into a correct, unambiguous 4-option MC question with an explanatory `a` field, in the tone already set by the two existing lecture quizzes in `book-1-lectures/*.json` (`المفعول به`, `mawsoof/sifah` — concise, cites the specific grammatical rule, not just "correct/incorrect").

---

## Standard file template (grammar topic)

Every file in `src/routes/challenges/grammar/<slug>/index.tsx` follows this shape:

```tsx
import { createFileRoute, Link } from '@tanstack/react-router'
import { QuizCarousel } from '#/components/QuizCarousel'
import type { StrictQuizItem } from '#/routes/challenges/-quiz-types'

export const Route = createFileRoute('/challenges/grammar/<slug>/')({
  head: () => ({ meta: [{ title: '<English Title> — Grammar — Tayseer' }] }),
  component: TopicPage,
})

const quizItems: StrictQuizItem[] = [
  // exactly 8 items, see content brief
]

function TopicPage() {
  return (
    <main className="flex-1">
      <div className="border-b border-border bg-beige">
        <div className="mx-auto w-[min(720px,calc(100%-2rem))] py-12">
          <Link
            to="/challenges/grammar"
            className="text-xs text-muted-foreground hover:text-brand mb-3 inline-block"
          >
            ← All grammar topics
          </Link>
          <p className="text-[0.7rem] font-bold tracking-[0.12em] uppercase text-muted-foreground mb-3">
            Topic <N> of 47
          </p>
          <h1 className="font-serif tracking-[-0.02em] text-3xl font-bold text-foreground leading-tight mb-3">
            <span
              dir="rtl"
              lang="ar"
              style={{ fontFamily: "'Noto Naskh Arabic', serif" }}
              className="mr-2"
            >
              <Arabic term>
            </span>
            — <English title>
          </h1>
          <p className="text-muted-foreground text-base max-w-xl">
            <2-4 sentence intro blurb — how the structure is formed and what i'raab/sarf effect it causes>
          </p>
        </div>
      </div>
      <div className="mx-auto w-[min(720px,calc(100%-2rem))] py-8">
        <QuizCarousel items={quizItems} />
      </div>
    </main>
  )
}
```

`<N>` is the topic's position in the 47-item order (see Task 6 for the full ordered list). `<slug>` is the folder name.

---

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

### Task 6: Grammar hub page

**Files:**
- Create: `src/routes/challenges/grammar/index.tsx`

**Interfaces:**
- Consumes: all 47 grammar topic routes created in Tasks 2–5 (needed so `<Link to="/challenges/grammar/<slug>">` type-checks against the generated route tree — this is why the hub is built last).

- [ ] **Step 1: Write the grammar hub page**

Create `src/routes/challenges/grammar/index.tsx`: header block (`bg-beige`, same conventions as `cognates/index.tsx`) with title "Grammar — Arabic Structures", intro blurb ("47 structures from Madina Arabic Books 1 & 2, in learning order — start from the beginning if you're new, or jump to any topic you want to review."), back link to `/challenges`.

Below the header, a numbered grid/list of all 47 topics in the exact order from Tasks 2–5 (topic number, Arabic term, English title), each a `<Link to="/challenges/grammar/<slug>">` card. Define the list as a local const array of `{ n: number; slug: string; arabic: string; title: string }` at the top of the file (not imported from elsewhere — this is the one place the full order needs to be enumerated):

```tsx
const topics = [
  { n: 1, slug: 'definiteness-tanwin', arabic: 'التنوين', title: 'Definiteness & Tanwīn' },
  { n: 2, slug: 'masculine-feminine', arabic: 'التذكير والتأنيث', title: 'Masculine & Feminine Nouns' },
  { n: 3, slug: 'ism-ishaara-near', arabic: 'هذا / هذه', title: 'Ism Ishaara – Near' },
  { n: 4, slug: 'interrogatives-man-maa', arabic: 'من / ما', title: 'Interrogatives' },
  { n: 5, slug: 'mubtada-khabar', arabic: 'مبتدأ وخبر', title: 'The Nominal Sentence' },
  { n: 6, slug: 'ism-ishaara-far', arabic: 'ذلك / تلك', title: 'Ism Ishaara – Far' },
  { n: 7, slug: 'independent-pronouns', arabic: 'الضمائر المنفصلة', title: 'Independent Pronouns' },
  { n: 8, slug: 'yes-no-questions', arabic: 'أ / هل', title: 'Yes/No Questions' },
  { n: 9, slug: 'attached-pronouns', arabic: 'الضمائر المتصلة', title: 'Attached Pronouns' },
  { n: 10, slug: 'idafah', arabic: 'الإضافة', title: 'Idāfah' },
  { n: 11, slug: 'prepositions', arabic: 'حروف الجر', title: 'Prepositions' },
  { n: 12, slug: 'adjectives-agreement', arabic: 'النعت والمنعوت', title: 'Adjective Agreement' },
  { n: 13, slug: 'colors', arabic: 'الألوان', title: 'Colors as Adjectives' },
  { n: 14, slug: 'case-system-overview', arabic: 'الإعراب', title: 'Case System Overview' },
  { n: 15, slug: 'dual', arabic: 'المثنى', title: 'The Dual' },
  { n: 16, slug: 'sound-masculine-plural', arabic: 'جمع المذكر السالم', title: 'Sound Masculine Plural' },
  { n: 17, slug: 'sound-feminine-plural', arabic: 'جمع المؤنث السالم', title: 'Sound Feminine Plural' },
  { n: 18, slug: 'broken-plural', arabic: 'جمع التكسير', title: 'Broken Plural' },
  { n: 19, slug: 'numbers-1-10', arabic: 'الأعداد ١-١٠', title: 'Numbers 1–10' },
  { n: 20, slug: 'days-months', arabic: 'الأيام والشهور', title: 'Days & Months' },
  { n: 21, slug: 'adverbs-of-place', arabic: 'ظرف المكان', title: 'Adverbs of Place' },
  { n: 22, slug: 'taajjub', arabic: 'التعجب', title: "Ta'ajjub" },
  { n: 23, slug: 'relative-pronouns', arabic: 'الأسماء الموصولة', title: 'Relative Pronouns & Clauses' },
  { n: 24, slug: 'five-nouns', arabic: 'الأسماء الخمسة', title: 'The Five Nouns' },
  { n: 25, slug: 'dhu-dhaat', arabic: 'ذو / ذات', title: 'ذو / ذات / ذوو / ذوات' },
  { n: 26, slug: 'defective-diptotes', arabic: 'المنقوص والممنوع من الصرف', title: 'Defective Nouns & Diptotes' },
  { n: 27, slug: 'aakhar-ukhraa', arabic: 'آخر / أخرى', title: 'Another/Other' },
  { n: 28, slug: 'badal-vocative', arabic: 'البدل والنداء', title: 'Apposition & Vocative' },
  { n: 29, slug: 'verb-basics-faail-mafool', arabic: 'الفاعل والمفعول به', title: 'Verb Sentence Basics' },
  { n: 30, slug: 'past-tense-conjugation', arabic: 'تصريف الفعل الماضي', title: 'Past Tense — Full Conjugation' },
  { n: 31, slug: 'negation-of-past', arabic: 'نفي الماضي', title: 'Negation of the Past' },
  { n: 32, slug: 'present-tense-conjugation', arabic: 'تصريف الفعل المضارع', title: 'Present Tense — Full Conjugation' },
  { n: 33, slug: 'weak-verbs', arabic: 'الأفعال المعتلة', title: 'Weak Verbs in Practice' },
  { n: 34, slug: 'imperative', arabic: 'فعل الأمر', title: 'The Imperative' },
  { n: 35, slug: 'prohibitive', arabic: 'لا الناهية', title: 'The Prohibitive' },
  { n: 36, slug: 'naaqisah-verbs', arabic: 'كان وأخواتها (مقدمة)', title: 'Introducing كان and Her Sisters' },
  { n: 37, slug: 'conjunctions', arabic: 'حروف العطف', title: 'Conjunctions' },
  { n: 38, slug: 'inna-wa-akhawatuha', arabic: 'إن وأخواتها', title: 'إن وأخواتها' },
  { n: 39, slug: 'kaana-wa-akhawatuha', arabic: 'كان وأخواتها (تابع)', title: 'كان and Her Sisters, Continued' },
  { n: 40, slug: 'other-particles', arabic: 'حروف أخرى', title: 'Other Particles' },
  { n: 41, slug: 'irab-mudaari', arabic: 'إعراب الفعل المضارع', title: "I'rāb of the Present Tense" },
  { n: 42, slug: 'masdar-muawwal', arabic: 'المصدر المؤول', title: 'المصدر المؤول' },
  { n: 43, slug: 'comparative-superlative', arabic: 'أفعل التفضيل', title: 'Comparative & Superlative' },
  { n: 44, slug: 'numbers-11-100', arabic: 'الأعداد ١١-١٠٠', title: 'Numbers 11–100' },
  { n: 45, slug: 'spelling-rules', arabic: 'قواعد الإملاء', title: 'Spelling Rules' },
  { n: 46, slug: 'adverbs-of-time-tamyiz', arabic: 'ظرف الزمان والتمييز', title: 'Adverbs of Time & Tamyīz' },
  { n: 47, slug: 'negative-questions', arabic: 'الأسئلة المنفية', title: 'Negative Questions' },
] as const
```

Render each as a `<Link to={`/challenges/grammar/${topic.slug}`}>` card in a responsive grid (`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3`), showing `topic.n`, the Arabic term (`dir="rtl" lang="ar"`), and the English title — matching the card style already used for links in this codebase (rounded border, hover state, `border-border hover:border-brand`).

- [ ] **Step 2: Verify**

Run: `npm run build`
Expected: no TypeScript errors (this is the step that confirms all 47 `Link to=` targets from Tasks 2–5 actually exist and route-tree-generate correctly).

- [ ] **Step 3: Manual check**

Run `npm run dev`, visit `/challenges/grammar`, confirm all 47 cards render in order and clicking a handful (first, middle, last) navigates correctly.

- [ ] **Step 4: Commit**

```bash
git add src/routes/challenges/grammar/index.tsx
git commit -m "Add grammar quiz hub page"
```

---

### Task 7: Update the challenges hub page

**Files:**
- Modify: `src/routes/challenges/index.tsx` (full rewrite — currently a "Coming Soon" placeholder, see below)

**Interfaces:**
- Consumes: `/challenges/vocabulary` (Task 1), `/challenges/grammar` (Task 6).

Current content of `src/routes/challenges/index.tsx`:

```tsx
import { createFileRoute, Link } from '@tanstack/react-router'
import { Button } from '#/components/ui/button'

export const Route = createFileRoute('/challenges/')({
  head: () => ({ meta: [{ title: 'Quizzes — Tayseer' }] }),
  component: QuizzesPage,
})

function QuizzesPage() {
  return (
    <main className="flex-1 flex flex-col items-center justify-center px-6 py-20 text-center">
      <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-amber-100 border border-amber-300 px-4 py-1.5 dark:bg-amber-950 dark:border-amber-700">
        <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
        <span className="text-sm font-semibold tracking-wide text-amber-700 uppercase dark:text-amber-400">
          Coming Soon
        </span>
      </div>
      <h1 className="font-serif tracking-[-0.02em] text-4xl font-bold text-foreground mb-4">
        Quizzes
      </h1>
      <p className="text-muted-foreground text-lg max-w-md mx-auto mb-10">
        Test your Arabic knowledge with vocabulary drills, grammar exercises, and
        comprehension challenges.
      </p>
      <Button variant="outline" asChild>
        <Link to="/">← Back to Home</Link>
      </Button>
    </main>
  )
}
```

- [ ] **Step 1: Rewrite the hub page**

Replace the "Coming Soon" badge/content with two link cards, keeping the same overall page shell (`flex-1`, centered header) but following the `cognates/index.tsx` header-block convention (`bg-beige` band with title + intro) instead of the old centered "coming soon" layout:

```tsx
import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/challenges/')({
  head: () => ({ meta: [{ title: 'Quizzes — Tayseer' }] }),
  component: QuizzesPage,
})

function QuizzesPage() {
  return (
    <main className="flex-1">
      <div className="border-b border-border bg-beige">
        <div className="mx-auto w-[min(1080px,calc(100%-2rem))] py-12">
          <p className="text-[0.7rem] font-bold tracking-[0.12em] uppercase text-muted-foreground mb-3">
            Practice
          </p>
          <h1 className="font-serif tracking-[-0.02em] text-4xl font-bold text-foreground leading-tight mb-3">
            Quizzes
          </h1>
          <p className="text-muted-foreground text-base max-w-xl">
            Test your Arabic knowledge with vocabulary drills and grammar exercises drawn
            from the Madina Arabic series.
          </p>
        </div>
      </div>

      <div className="mx-auto w-[min(1080px,calc(100%-2rem))] py-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Link
          to="/challenges/vocabulary"
          className="block rounded-xl border border-border p-6 hover:border-brand transition-colors"
        >
          <h2 className="font-serif text-xl font-bold text-foreground mb-2">
            Vocabulary — Roots & Patterns
          </h2>
          <p className="text-sm text-muted-foreground">
            Identify words, roots, and the ten verb patterns (awzān) that shape Arabic
            vocabulary.
          </p>
        </Link>
        <Link
          to="/challenges/grammar"
          className="block rounded-xl border border-border p-6 hover:border-brand transition-colors"
        >
          <h2 className="font-serif text-xl font-bold text-foreground mb-2">
            Grammar — Arabic Structures
          </h2>
          <p className="text-sm text-muted-foreground">
            47 structures from Madina Arabic Books 1 & 2, from demonstratives through kāna
            and her sisters, in learning order.
          </p>
        </Link>
      </div>
    </main>
  )
}
```

- [ ] **Step 2: Verify**

Run: `npm run build`
Expected: no TypeScript errors, build succeeds.

- [ ] **Step 3: Full manual click-through**

Run `npm run dev`. From `/challenges`: click into Vocabulary, answer all questions, confirm the score screen. Go back, click into Grammar, confirm the 47-topic grid, click into 3-4 topics spread across the list (first, one from the middle, last), answer questions in each, confirm hints show and scoring works. Confirm RTL Arabic text renders correctly throughout (right-aligned, correct font).

- [ ] **Step 4: Commit**

```bash
git add src/routes/challenges/index.tsx
git commit -m "Wire up challenges hub to vocabulary and grammar quizzes"
```

---

## Self-review notes

- **Spec coverage:** Vocabulary quiz (spec §"Vocabulary quiz content") → Task 1. All 47 grammar topics (spec §"Grammar topic order") → Tasks 2–5, one task per contiguous slice, in the exact order and slugs from the spec. Hub pages (spec §"Hub pages") → Tasks 6–7. `QuizItem`/`QuizCarousel` reuse (spec §"Reuse") → Global Constraints + every task's Interfaces section. Verification (spec §"Testing / verification") → "Verification approach" section + every task's Step 2/3.
- **Placeholder scan:** every grammar topic has a concrete content brief (facts + example words), not "add questions here"; every file path is exact; every task ends in a runnable verify command.
- **Type consistency:** `StrictQuizItem` (Task 1) is the only type introduced; every subsequent task's `quizItems: StrictQuizItem[]` and the `<QuizCarousel items={quizItems} />` call use the same name and shape throughout. The grammar hub's `topics` array field names (`n`, `slug`, `arabic`, `title`) are only consumed within Task 6 — no other task depends on them.

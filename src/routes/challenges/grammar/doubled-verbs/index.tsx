import { createFileRoute, Link } from '@tanstack/react-router'
import { QuizCarousel } from '#/components/QuizCarousel'
import type { StrictQuizItem } from '#/routes/challenges/-quiz-types'

export const Route = createFileRoute('/challenges/grammar/doubled-verbs/')({
  head: () => ({ meta: [{ title: 'Doubled Verbs — Grammar — Tayseer' }] }),
  component: TopicPage,
})

const quizItems: StrictQuizItem[] = [
  {
    q: 'ما هو الفعل المضاعف؟\nWhat is a الفعل المضاعف (doubled verb)?',
    options: [
      'فعل عينه ولامه من جنس واحد فيُدغمان في حرف واحد مشدد\nA verb whose 2nd and 3rd radicals are identical, merged into one geminated (shaddah) letter',
      'فعل حرفه الأول حرف علة\nA verb whose first root letter is a weak letter',
      'فعل حرفه الأخير حرف علة\nA verb whose final root letter is a weak letter',
      'فعل حرفه الأوسط حرف علة\nA verb whose middle root letter is a weak letter',
    ],
    correctIndex: 0,
    a: 'الفعل المضاعف عينه ولامه (الحرف الثاني والثالث) من جنس واحد، فيُدغمان في حرف واحد مشدد، مثل "رَدَّ" (أصلها ر-د-د) و"ظَنَّ" (أصلها ظ-ن-ن) و"مَرَّ" (أصلها م-ر-ر).\nA الفعل المضاعف has identical 2nd and 3rd root letters (عين الفعل and لام الفعل), which merge into a single geminated letter marked with a shaddah — like رَدَّ (root ر-د-د), ظَنَّ (root ظ-ن-ن), and مَرَّ (root م-ر-ر).',
  },
  {
    q: 'حوّل الفعل "رَدَّ" (ماضٍ) إلى المضارع.\nTransform the verb رَدَّ (past tense, "returned/replied") into the present tense.',
    options: [
      'يَرُدُّ\nyaruddu — he returns/replies',
      'يَرْدُدُ\nyardudu (as written, unmerged)',
      'يَرِدُّ\nyariddu (as written)',
      'رَادٌّ\nrāddun — returner (active participle)',
    ],
    correctIndex: 0,
    a: 'يبقى الإدغام في المضارع أيضاً ما لم يتبعه ساكن: رَدَّ ← يَرُدُّ، بضم الراء (عين الفعل).\nThe gemination stays in the present tense too, as long as nothing sukūn-initial follows: رَدَّ becomes يَرُدُّ, with ḍamma on the middle radical.',
  },
  {
    q: 'كوّن فعل الأمر من "رَدَّ".\nForm the imperative of رَدَّ.',
    options: [
      'رُدَّ\nrudda — return it!/reply!',
      'اُرْدُدْ\nurdud (as written, unmerged)',
      'رِدَّ\nridda (as written)',
      'رَدَّ\nradda — he returned (past tense, unchanged)',
    ],
    correctIndex: 0,
    a: 'فعل الأمر من المضاعف يبقى مدغماً إذا لم يتبعه ساكن: "رُدَّ" بضم الراء، وهو الأشيع في الاستعمال؛ الصيغة المفكوكة "اُرْدُدْ" جائزة لكنها أقل شيوعاً.\nThe imperative of a doubled verb stays geminated when nothing sukūn-initial follows it: رُدَّ, with ḍamma on the first radical, is the common form; the "unmerged" اُرْدُدْ is grammatically permitted but far less commonly used.',
  },
  {
    q: 'أكمل: أنا ___ الكتابَ إلى صاحبه. (ماضٍ من "رد" مع ضمير المتكلم)\nComplete: أنا ___ الكتابَ إلى صاحبه — "I returned the book to its owner" (past tense of رد with the 1st person pronoun)',
    options: [
      'رَدَدْتُ\nradadtu — I returned',
      'رَدَّتُ\nraddtu (as written, still merged)',
      'أَرُدُّ\naruddu — I return (present tense)',
      'رُدَّ\nrudda — return it! (imperative)',
    ],
    correctIndex: 0,
    a: 'عند اتصال الفعل المضاعف بضمير رفع متحرك يبدأ بساكن مثل "تُ"، ينفك الإدغام لتجنب التقاء ثلاثة أحرف ساكنة: "رَدَدْتُ" لا "رَدَّتُ".\nWhen a doubled verb takes a subject suffix beginning with a consonant, like تُ, the gemination separates to avoid three consonants clustering together: رَدَدْتُ, not رَدَّتُ.',
  },
  {
    q: 'أيّ جملة فيها خطأ في تصريف الفعل المضاعف؟\nWhich sentence contains an error in conjugating a doubled verb?',
    options: [
      'رَدَدْتُ الكتابَ\nradadtu l-kitāba — "I returned the book"',
      'رَدَّتُ الكتابَ\nraddtu l-kitāba (as written)',
      'الطالبُ يَرُدُّ السلامَ\naṭ-ṭālibu yaruddu s-salāma — "The student returns the greeting"',
      'رُدَّ السلامَ يا أخي!\nrudda s-salāma yā akhī — "Return the greeting, brother!"',
    ],
    correctIndex: 1,
    a: '"رَدَّتُ" خطأ؛ مع ضمير المتكلم "تُ" الساكن البدء يجب فك الإدغام: الصواب "رَدَدْتُ".\nرَدَّتُ is wrong; with the consonant-initial subject suffix تُ, the gemination must separate: the correct form is رَدَدْتُ.',
  },
  {
    q: 'ما تصريف "رد" في المضارع مع ضمير جماعة الإناث "هنّ"؟\nWhat is the present-tense conjugation of رد with the pronoun هنّ (they, feminine plural)?',
    options: [
      'يَرْدُدْنَ\nyardudna — they (f.) return',
      'يَرُدُّنَ\nyaruddunna (as written, still merged)',
      'رَدَدْنَ\nradadna — they (f.) returned (past tense)',
      'يَرُدُّونَ\nyaruddūna — they (m.) return',
    ],
    correctIndex: 0,
    a: 'لاحقة جماعة الإناث "نَ" تلحق مباشرة بجذع ساكن الآخر، فيلتقي ثلاثة أحرف ساكنة لو بقي الإدغام، فينفك: "يَرْدُدْنَ" لا "يَرُدُّنَ".\nThe feminine-plural suffix نَ attaches directly to a stem ending in sukūn; keeping the gemination would stack up sukūns, so the gemination separates: يَرْدُدْنَ, not يَرُدُّنَ.',
  },
  {
    q: 'حوّل الفعل "ظَنَّ" (ماضٍ) إلى المضارع.\nTransform the verb ظَنَّ (past tense, "thought/supposed") into the present tense.',
    options: [
      'يَظُنُّ\nyaẓunnu — he thinks',
      'يَظْنُنُ\nyaẓnunu (as written, unmerged)',
      'يَظِنُّ\nyaẓinnu (as written)',
      'ظَانٌّ\nẓānnun — one who thinks (active participle)',
    ],
    correctIndex: 0,
    a: 'مثل "رد"، يبقى الإدغام في مضارع "ظن" ما لم يتبعه ساكن: ظَنَّ ← يَظُنُّ.\nLike رد, the gemination in ظن\'s present tense stays intact as long as nothing sukūn-initial follows: ظَنَّ becomes يَظُنُّ.',
  },
  {
    q: 'كوّن فعل الأمر من "ظَنَّ".\nForm the imperative of ظَنَّ.',
    options: [
      'ظُنَّ\nẓunna — think!/suppose!',
      'اُظْنُنْ\nuẓnun (as written, unmerged)',
      'ظِنَّ\nẓinna (as written)',
      'ظَنَّ\nẓanna — he thought (past tense, unchanged)',
    ],
    correctIndex: 0,
    a: 'يبقى الإدغام في الأمر أيضاً حين لا يتبعه ساكن: "ظُنَّ" بضم الظاء، تماماً كما في "رُدَّ".\nThe gemination stays in the imperative too, when nothing sukūn-initial follows: ظُنَّ, with ḍamma on the first radical, exactly like رُدَّ.',
  },
  {
    q: 'أعرب "يَرُدُّ" في: الطالبُ يَرُدُّ السلامَ.\nParse يَرُدُّ in the sentence الطالبُ يَرُدُّ السلامَ ("The student returns the greeting").',
    options: [
      'فعل مضارع مرفوع وعلامة رفعه الضمة الظاهرة\nPresent-tense verb, مرفوع, marked by an overt ḍamma',
      'فعل ماضٍ مبني على الفتح\nPast-tense verb, مبني on fatḥa',
      'فعل أمر مبني على الفتح\nImperative verb, مبني on fatḥa',
      'فعل مضارع مجزوم بالسكون\nPresent-tense verb, مجزوم by sukūn',
    ],
    correctIndex: 0,
    a: 'يَرُدُّ فعل مضارع مرفوع لتجرده من الناصب والجازم، وعلامة رفعه الضمة الظاهرة على آخره؛ الإدغام في وسطه لا يغير كونه معرباً مرفوعاً هنا.\nيَرُدُّ is a present-tense verb; free of any accusative or jussive particle, it stays مرفوع, marked by an overt ḍamma on its final letter. The gemination in its middle does not change that it is a fully inflected, مرفوع مضارع here.',
  },
  {
    q: 'حوّل الفعل "مَرَّ" (ماضٍ) إلى المضارع.\nTransform the verb مَرَّ (past tense, "passed by") into the present tense.',
    options: [
      'يَمُرُّ\nyamurru — he passes by',
      'يَمْرُرُ\nyamruru (as written, unmerged)',
      'يَمِرُّ\nyamirru (as written)',
      'مَارٌّ\nmārrun — passer-by (active participle)',
    ],
    correctIndex: 0,
    a: 'مثل رد وظن، يبقى إدغام "مر" في المضارع ما لم يتبعه ساكن: مَرَّ ← يَمُرُّ.\nLike رد and ظن, مر keeps its gemination in the present tense as long as nothing sukūn-initial follows: مَرَّ becomes يَمُرُّ.',
  },
  {
    q: 'كوّن فعل الأمر من "مَرَّ".\nForm the imperative of مَرَّ.',
    options: [
      'مُرَّ\nmurra — pass by!',
      'اُمْرُرْ\numrur (as written, unmerged)',
      'مِرَّ\nmirra (as written)',
      'مَرَّ\nmarra — he passed by (past tense, unchanged)',
    ],
    correctIndex: 0,
    a: 'يبقى الإدغام في الأمر: "مُرَّ" بضم الميم، وهي الصيغة الشائعة، تماماً كرُدَّ وظُنَّ.\nThe gemination stays in the imperative: مُرَّ, with ḍamma on the first radical — the common form, just like رُدَّ and ظُنَّ.',
  },
  {
    q: 'أكمل الأمر: ___ بنا يا أخي! (فعل أمر من "مر")\nComplete the command: ___ بنا يا أخي — "Pass by us, brother!" (imperative of مر)',
    options: [
      'مُرَّ\nmurra — pass by!',
      'اُمْرُرْ\numrur (as written, unmerged form)',
      'يَمُرُّ\nyamurru — he passes by (present tense)',
      'مَرَّ\nmarra — he passed by (past tense)',
    ],
    correctIndex: 0,
    a: 'الصيغة الشائعة لأمر "مر" هي "مُرَّ" المدغمة بضم الميم؛ "اُمْرُرْ" صيغة مفكوكة جائزة نحوياً لكنها أقل استعمالاً.\nThe common imperative of مر is مُرَّ, geminated with a ḍamma on the first radical; the unmerged اُمْرُرْ is grammatically valid but far less commonly used.',
  },
  {
    q: 'أيّ فعل أمر مكتوب خطأً من الأفعال المضاعفة؟\nWhich imperative form of a doubled verb below is written incorrectly?',
    options: [
      'رُدَّ\nrudda — return it! (from رد)',
      'ظُنَّ\nẓunna — think! (from ظن)',
      'مِرَّ\nmirra (as written, from مر)',
      'مُرَّ\nmurra — pass by! (from مر)',
    ],
    correctIndex: 2,
    a: '"مِرَّ" خطأ؛ عين الفعل في أمر المضاعف من هذا الوزن تُضم لا تُكسر: الصواب "مُرَّ" بضم الميم.\nمِرَّ is wrong; the first radical in this pattern\'s imperative takes ḍamma, not kasra: the correct form is مُرَّ, with ḍamma.',
  },
  {
    q: 'ما تصريف "رد" في المضارع مع ضمير الجماعة المخاطبة "أنتم"؟\nWhat is the present-tense conjugation of رد with the pronoun أنتم (you, masculine plural)?',
    options: [
      'تَرُدُّونَ\ntaruddūna — you (pl.) return',
      'تَرْدُدُونَ\ntardudūna (as written, unmerged)',
      'رَدَدْتُمْ\nradadtum — you (pl.) returned (past tense)',
      'يَرُدُّونَ\nyaruddūna — they return',
    ],
    correctIndex: 0,
    a: 'لاحقة "ونَ" تبدأ بواو متحركة لا بساكن، فلا يلتقي ساكنان، ويبقى الإدغام: "تَرُدُّونَ" لا "تَرْدُدُونَ" — بخلاف لاحقة "نَ" الساكنة البدء التي توجب الفك.\nThe suffix ونَ begins with a vowel-bearing و, not a sukūn, so no sukūn-clash occurs and the gemination stays intact: تَرُدُّونَ, not تَرْدُدُونَ — unlike the sukūn-initial نَ suffix, which forces separation.',
  },
  {
    q: 'متى ينفك إدغام الفعل المضاعف (تنفصل عينه عن لامه)؟\nWhen does the gemination of a doubled verb separate (its 2nd and 3rd radicals split apart)?',
    options: [
      'عند اتصاله بلاحقة تبدأ بساكن، لتجنب التقاء ثلاثة أحرف ساكنة\nWhen it takes a suffix that begins with a sukūn — to avoid three consonants clustering together',
      'عند اتصاله بأي ضمير مطلقاً\nWhenever it takes any pronoun suffix at all',
      'في الفعل الماضي فقط ولا ينفك أبداً في المضارع\nOnly in the past tense; it never separates in the present tense',
      'لا ينفك الإدغام أبداً في أي حال\nThe gemination never separates under any circumstance',
    ],
    correctIndex: 0,
    a: 'ينفك إدغام المضاعف حين تلحقه لاحقة تبدأ بحرف ساكن، مثل تاء الفاعل في "رَدَدْتُ" أو نون النسوة في "يَرْدُدْنَ"، تجنباً لالتقاء ثلاثة سواكن؛ أما اللواحق المتحركة البدء مثل واو الجماعة "ونَ" فلا توجب الفك.\nThe gemination of a doubled verb separates when a sukūn-initial suffix attaches to it — like the تُ of رَدَدْتُ or the نَ of يَرْدُدْنَ — to avoid stacking three consonants. Vowel-initial suffixes like واو الجماعة\'s ونَ don\'t force separation.',
  },
  {
    q: 'حوّل "يَرُدُّ" إلى صيغة المضارع المجزوم بـ"لم".\nTransform يَرُدُّ into the جزم (jussive) form after لم.',
    options: [
      'لم يَرْدُدْ\nlam yardud — he did not return',
      'لم يَرُدَّ\nlam yarudda (as written, still merged)',
      'لم يَرُدُّ\nlam yaruddu (as written, ḍamma ending)',
      'لم يَرُدَّا\nlam yaruddā (as written)',
    ],
    correctIndex: 0,
    a: 'الجزم علامته السكون على آخر الفعل، فإذا وضعنا سكوناً على الدال الثانية اجتمع ثلاثة سواكن، فينفك الإدغام: "لم يَرْدُدْ" لا "لم يَرُدَّ".\nThe jussive mood marker is a sukūn on the verb\'s final letter. Putting a sukūn on the second د would stack three consonants together, so the gemination separates: لم يَرْدُدْ, not لم يَرُدَّ.',
  },
  {
    q: 'أكمل: نحن ___ التحيةَ. (ماضٍ من "رد" مع ضمير المتكلمين)\nComplete: نحن ___ التحيةَ — "We returned the greeting" (past tense of رد with the "we" pronoun)',
    options: [
      'رَدَدْنَا\nradadnā — we returned',
      'رَدَّنَا\nraddanā (as written, still merged)',
      'نَرُدُّ\nnaruddu — we return (present tense)',
      'رُدَّ\nrudda — return it! (imperative)',
    ],
    correctIndex: 0,
    a: 'ضمير المتكلمين "نا" ساكن البدء، فيلتقي بالإدغام ثلاثة سواكن، فينفك: "رَدَدْنَا" لا "رَدَّنَا" — على غرار "رَدَدْتُ".\nThe "we" suffix نَا begins with a sukūn-bearing ن, so keeping the gemination would clash three consonants; it separates: رَدَدْنَا, not رَدَّنَا — the same pattern as رَدَدْتُ.',
  },
  {
    q: 'أعرب "رُدَّ" في: رُدَّ السلامَ يا أخي!\nParse رُدَّ in the sentence رُدَّ السلامَ يا أخي ("Return the greeting, brother!").',
    options: [
      'فعل أمر مبني على الفتح\nImperative verb, مبني on fatḥa',
      'فعل مضارع مرفوع\nPresent-tense verb, مرفوع',
      'فعل ماضٍ مبني على السكون\nPast-tense verb, مبني on sukūn',
      'فعل مضارع مجزوم بحذف النون\nPresent-tense verb, مجزوم by the deletion of ن',
    ],
    correctIndex: 0,
    a: 'أفعال الأمر من المضاعف المدغم تُبنى على الفتح، لأن آخرها هو الحرف المشدد وحركته هنا فتحة؛ "رُدَّ" فعل أمر مبني على الفتح، وفاعله ضمير مستتر تقديره أنتَ.\nThe geminated imperative of a doubled verb is مبني on fatḥa — the fatḥa carried by the final, doubled letter itself. رُدَّ is an imperative verb, مبني على الفتح, with a hidden فاعل, أنتَ.',
  },
  {
    q: 'أكمل: أنتِ ___ الأمرَ صعباً. (ماضٍ من "ظن" مع ضمير المخاطبة)\nComplete: أنتِ ___ الأمرَ صعباً — "You (f.) thought the matter [was] difficult" (past tense of ظن with the أنتِ pronoun)',
    options: [
      'ظَنَنْتِ\nẓananti — you (f.) thought',
      'ظَنَّتِ\nẓannati (as written, still merged)',
      'تَظُنِّينَ\ntaẓunnīna — you (f.) think (present tense)',
      'ظُنَّ\nẓunna — think! (imperative)',
    ],
    correctIndex: 0,
    a: 'تاء المخاطبة "تِ" ساكنة البدء، فتوجب فك الإدغام تجنباً لالتقاء ثلاثة سواكن: "ظَنَنْتِ" لا "ظَنَّتِ".\nThe تِ suffix begins with a sukūn-bearing ت, forcing the gemination to separate to avoid a three-consonant clash: ظَنَنْتِ, not ظَنَّتِ.',
  },
  {
    q: 'أيّ فعل مما يلي ليس فعلاً مضاعفاً؟\nWhich of the following verbs is NOT a doubled verb (فعل مضاعف)?',
    options: [
      'رَدَّ\nradda — he returned',
      'ظَنَّ\nẓanna — he thought',
      'وَجَدَ\nwajada — he found',
      'مَرَّ\nmarra — he passed by',
    ],
    correctIndex: 2,
    a: '"وَجَدَ" فعل مثال حرفه الأول واو، لا مضاعف؛ أما رَدَّ وظَنَّ ومَرَّ فحرفها الثاني والثالث من جنس واحد مدغمان، فهي أفعال مضاعفة.\nوَجَدَ is an assimilated verb (its first root letter is و), not a doubled verb. رَدَّ, ظَنَّ, and مَرَّ, by contrast, each have identical, geminated 2nd and 3rd root letters, making them doubled verbs.',
  },
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
            Topic 50 of 62
          </p>
          <h1 className="font-serif tracking-[-0.02em] text-3xl font-bold text-foreground leading-tight mb-3">
            <span
              dir="rtl"
              lang="ar"
              style={{ fontFamily: "'Noto Naskh Arabic', serif" }}
              className="mr-2"
            >
              الفعل المضاعف
            </span>
            — Doubled Verbs
          </h1>
          <p className="text-muted-foreground text-base max-w-xl">
            A <bdi lang="ar">الفعل المضاعف</bdi> has identical 2nd and 3rd root letters, merged into one geminated
            letter — <bdi lang="ar">رَدَّ</bdi>، <bdi lang="ar">ظَنَّ</bdi>، <bdi lang="ar">مَرَّ</bdi>. That gemination stays intact through most
            conjugations (<bdi lang="ar">يَرُدُّ</bdi>، <bdi lang="ar">رُدَّ</bdi>), but{' '}
            <span className="font-medium text-foreground">separates</span> whenever a sukūn-initial suffix
            attaches, to avoid stacking three consonants — <bdi lang="ar">رَدَدْتُ</bdi> (not{' '}
            <bdi lang="ar">رَدَّتُ</bdi>), <bdi lang="ar">يَرْدُدْنَ</bdi> (not <bdi lang="ar">يَرُدُّنَ</bdi>).
          </p>
        </div>
      </div>
      <div className="mx-auto w-[min(720px,calc(100%-2rem))] py-8">
        <QuizCarousel items={quizItems} />
      </div>
    </main>
  )
}

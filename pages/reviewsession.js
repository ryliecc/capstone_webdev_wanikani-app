import ReviewSessionItem from "../components/ReviewSessionItem.js";
import ReviewCategoryBar from "../components/ReviewCategoryBar.js";
import AnswerInputField from "../components/AnswerInputField.js";
import AdditionalContent from "../components/ReviewSessionAdditionalContent.js";
import { useState } from "react";

export default function ReviewSessionPage() {
  const FirstWordCombinations = [
    { jap: "夕べのディナー", en: "last night's dinner" },
    { jap: "夕べのウォーキング", en: "an evening walk, last night's walk" },
    { jap: "夕べのミサ", en: "evening mass, last night's mass" },
  ];
  const SecondWordCombinations = [
    { jap: "オペラの夕べ", en: "a night at the opera" },
    { jap: "ギターの夕べ", en: "guitar night" },
    { jap: "ワインの夕べ", en: "wine night" },
  ];
  const ContextSentences = [
    {
      en: "I went to a party last night.",
      ja: "夕べ、パーティーにいきました。",
    },
    {
      en: "The prince in Denmark invited two French people to a musical evening.",
      ja: "デンマークの王子はフランス人二人をおんがくの夕べにしょうたいしました。",
    },
    {
      en: "Last night I wrote the kanji for meat on my forehead.",
      ja: "夕べ、ひたいに肉とかいてみた。",
    },
  ];

  const [isHiddenWrong, setIsHiddenWrong] = useState(true);
  return (
    <>
      <ReviewSessionItem itemText="夕べ" />
      <ReviewCategoryBar objectText="Vocabulary" categoryText="Reading" />
      <AnswerInputField
        placeholderText="答え"
        validAnswerText="ゆうべ"
        setIsHiddenWrong={setIsHiddenWrong}
      />
      <AdditionalContent
        primaryMeaning="Last Night"
        alternativeMeaning="Evening"
        wordType="noun"
        meaningMnemonic="I spent all evening in be(べ)d last night. It was a really chilled
        evening."
        primaryReading="ゆうべ"
        readingMnemonic="When hiragana is attached to a kanji, you can usually assume that that kanji is going to be read using the kun'yomi reading, which is exactly what's going on with this word as well. By learning this word's kanji you've also learned the reading for this word."
        firstPattern="夕べの〜"
        secondPattern="〜の夕べ"
        firstWordCombinations={FirstWordCombinations}
        secondWordCombinations={SecondWordCombinations}
        contextSentences={ContextSentences}
        compositionKanjiCharacter="夕"
        compositionKanjiReading="ゆう"
        compositionKanjiMeaning="Evening"
        isHiddenWrong={isHiddenWrong}
        setIsHiddenWrong={setIsHiddenWrong}
      />
    </>
  );
}

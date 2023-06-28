import styled from "styled-components";
import { useState } from "react";

const CardContainer = styled.div`
  border: 1px solid black;
  background-color: props.color;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.2em;
`;

const FirstTitle = styled.h3`
  color: props.color;
`;

const Pattern = styled.div`
  color: props.color;
`;

const SecondTitle = styled.h3`
  color: props.color;
`;

const CombinationElement = styled.p`
  color: props.color;
`;

const CombinationMeaning = styled.p`
  color: props.color;
  margin-bottom: 0.5em;
`;

const ThirdTitle = styled.h3`
  color: props.color;
`;

const SentenceElement = styled.p`
  color: props.color;
`;

const SentenceMeaning = styled.p`
  color: props.color;
  margin-bottom: 0.5em;
`;

export default function LessonContextCard({ backgroundColor, textColor }) {
  const FirstWordCombinations = [
    { jap: "おはようのメール", en: "a good morning email" },
    { jap: "おはようのあいさつ", en: "good morning greetings" },
    { jap: "おはようのキス", en: "a good morning kiss" },
  ];
  const SecondWordCombinations = [
    { jap: "おはようございます", en: "good morning" },
    { jap: "おはようメール", en: "a good morning email" },
  ];

  const [wordCombinations, setWordCombinations] = useState(
    FirstWordCombinations
  );

  const wordCombinationElements = wordCombinations.map((wordCombination) => {
    return (
      <>
        <CombinationElement key={wordCombination.jap} color={textColor}>
          {wordCombination.jap}
        </CombinationElement>
        <CombinationMeaning key={wordCombination.en} color={textColor}>
          {wordCombination.en}
        </CombinationMeaning>
      </>
    );
  });

  function handleClickFirstPattern() {
    setWordCombinations(FirstWordCombinations);
  }

  function handleClickSecondPattern() {
    setWordCombinations(SecondWordCombinations);
  }
  return (
    <CardContainer color={backgroundColor}>
      <FirstTitle color={textColor}>Patterns of Use</FirstTitle>
      <Pattern color={textColor} onClick={handleClickFirstPattern}>
        おはようの〜
      </Pattern>
      <Pattern color={textColor} onClick={handleClickSecondPattern}>
        おはよう〜
      </Pattern>
      <SecondTitle color={textColor}>Common Word Combinations</SecondTitle>
      {wordCombinationElements}
      <ThirdTitle color={textColor}>Context Sentences</ThirdTitle>
      <SentenceElement color={textColor}>
        ミホちゃん、おはよう！
      </SentenceElement>
      <SentenceMeaning color={textColor}>
        Good morning, Miho-chan!
      </SentenceMeaning>
      <SentenceElement color={textColor}>
        マイクに「おはよう」とメールをした。
      </SentenceElement>
      <SentenceMeaning color={textColor}>
        I texted &quot;good morning&quot; to Mike.
      </SentenceMeaning>
    </CardContainer>
  );
}

import styled from "styled-components";
import { useState } from "react";
import { uid } from "uid";

const CardContainer = styled.div`
  background-color: #fafafa;
  margin: 0.8em;
  padding: 0.6em;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 0.4em;
`;

const FirstTitle = styled.h3`
  color: #333;
`;

const Pattern = styled.button.attrs((props) => ({
  $backgroundcolor: props.$backgroundcolor,
}))`
  type: "button";
  border: none;
  text-align: start;
  color: #333;
  background-color: ${(props) => props.$backgroundcolor};
`;

const CombinationContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.1em;
  padding: 0.6em;
  border-radius: 10px;
  background-color: #e0e0e0;
`;

const SecondTitle = styled.h3`
  color: #333;
`;

const CombinationElement = styled.p`
  color: #333;
  margin-top: 0.4em;
`;

const CombinationMeaning = styled.p`
  color: #333;
  margin-bottom: 0.5em;
`;

const ThirdTitle = styled.h3`
  color: #333;
`;

const SentenceElement = styled.p`
  color: #333;
`;

const SentenceMeaning = styled.p`
  color: #333;
  margin-bottom: 0.5em;
`;

export default function LessonContextCard({ backgroundColor, textColor }) {
  const [firstPatternColor, setFirstPatternColor] = useState("#e0e0e0");
  const [secondPatternColor, setSecondPatternColor] = useState("transparent");

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
        <CombinationElement key={uid()}>
          {wordCombination.jap}
        </CombinationElement>
        <CombinationMeaning key={uid()}>
          {wordCombination.en}
        </CombinationMeaning>
      </>
    );
  });

  function handleClickFirstPattern() {
    setWordCombinations(FirstWordCombinations);
    setFirstPatternColor("#e0e0e0");
    setSecondPatternColor("transparent");
  }

  function handleClickSecondPattern() {
    setWordCombinations(SecondWordCombinations);
    setFirstPatternColor("transparent");
    setSecondPatternColor("#e0e0e0");
  }
  return (
    <CardContainer>
      <FirstTitle>Patterns of Use</FirstTitle>
      <Pattern
        onClick={handleClickFirstPattern}
        $backgroundcolor={firstPatternColor}
      >
        おはようの〜
      </Pattern>
      <Pattern
        onClick={handleClickSecondPattern}
        $backgroundcolor={secondPatternColor}
      >
        おはよう〜
      </Pattern>
      <CombinationContainer>
        <SecondTitle>Common Word Combinations</SecondTitle>
        {wordCombinationElements}
      </CombinationContainer>
      <ThirdTitle>Context Sentences</ThirdTitle>
      <SentenceElement>ミホちゃん、おはよう！</SentenceElement>
      <SentenceMeaning>Good morning, Miho-chan!</SentenceMeaning>
      <SentenceElement>マイクに「おはよう」とメールをした。</SentenceElement>
      <SentenceMeaning>
        I texted &quot;good morning&quot; to Mike.
      </SentenceMeaning>
    </CardContainer>
  );
}

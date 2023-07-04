import styled from "styled-components";
import ClockSVG from "../src/heroicons/clock.svg";
import CheckSVG from "../src/heroicons/check.svg";
import EyeSlashSVG from "../src/heroicons/eye-slash.svg";
import EyeSVG from "../src/heroicons/eye.svg";
import SpeakerWaveSVG from "../src/heroicons/speaker-wave.svg";
import { useState } from "react";
import InformationCard from "./InformationCard.js";
import WrongAnswerCard from "./WrongAnswerCard.js";

const AdditionalContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  gap: 0.5em;
`;

const ContentButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.5em;
  gap: 0.4em;
`;

const ButtonClockImage = styled(ClockSVG)`
  height: 2em;
  width: 100%;
  border: none;
`;

const ButtonCheckImage = styled(CheckSVG)`
  height: 2em;
  width: 100%;
  border: none;
`;

const ButtonEyeSlashImage = styled(EyeSlashSVG)`
  height: 2em;
  width: 100%;
  border: none;
`;

const ButtonEyeImage = styled(EyeSVG)`
  height: 2em;
  width: 100%;
  border: none;
`;

const ButtonSpeakerWaveImage = styled(SpeakerWaveSVG)`
  height: 2em;
  width: 100%;
  border: none;
`;

const ContentButton = styled.button`
  type: button;
  background-color: #f4f4f4;
  box-shadow: 3px 3px 0 #e1e1e1;
  width: 6.8em;
  height: 3em;
  border: none;
`;

export default function AdditionalContent({
  primaryMeaning,
  alternativeMeaning,
  wordType,
  meaningMnemonic,
  primaryReading,
  readingMnemonic,
  firstPattern,
  secondPattern,
  firstWordCombinations,
  secondWordCombinations,
  contextSentences,
  compositionKanjiCharacter,
  compositionKanjiReading,
  compositionKanjiMeaning,
  isHiddenWrong,
  setIsHiddenWrong,
}) {
  const [isHiddenInfo, setIsHiddenInfo] = useState(true);

  const eyeImage = isHiddenInfo ? <ButtonEyeSlashImage /> : <ButtonEyeImage />;

  function handleClickInfoButton() {
    setIsHiddenInfo(!isHiddenInfo);
    setIsHiddenWrong(true);
  }

  return (
    <AdditionalContentContainer>
      <ContentButtonContainer>
        <ContentButton>
          <ButtonClockImage />
        </ContentButton>
        <ContentButton>
          <ButtonCheckImage />
        </ContentButton>
        <ContentButton onClick={handleClickInfoButton}>
          {eyeImage}
        </ContentButton>
        <ContentButton>
          <ButtonSpeakerWaveImage />
        </ContentButton>
      </ContentButtonContainer>
      <WrongAnswerCard cardVisibility={!isHiddenWrong} />
      <InformationCard
        cardVisibility={!isHiddenInfo}
        primaryMeaning={primaryMeaning}
        alternativeMeaning={alternativeMeaning}
        wordType={wordType}
        meaningMnemonic={meaningMnemonic}
        primaryReading={primaryReading}
        readingMnemonic={readingMnemonic}
        firstPattern={firstPattern}
        secondPattern={secondPattern}
        firstWordCombinations={firstWordCombinations}
        secondWordCombinations={secondWordCombinations}
        contextSentences={contextSentences}
        compositionKanjiCharacter={compositionKanjiCharacter}
        compositionKanjiReading={compositionKanjiReading}
        compositionKanjiMeaning={compositionKanjiMeaning}
      />
    </AdditionalContentContainer>
  );
}

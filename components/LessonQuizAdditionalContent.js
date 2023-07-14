import styled from "styled-components";
import EyeSlashSVG from "../src/heroicons/eye-slash.svg";
import EyeSVG from "../src/heroicons/eye.svg";
import SpeakerWaveSVG from "../src/heroicons/speaker-wave.svg";
import LessonQuizInfoCard from "./LessonQuizInfoCard.js";
import WrongAnswerCard from "./WrongAnswerCard.js";
import { useState } from "react";

const AdditionalContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  gap: 0.5em;
`;

const ContentButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 0.5em;
  gap: 0.4em;
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
  width: 100%;
  height: 3em;
  border: none;
`;

export default function LessonQuizAdditionalContent({
  isHiddenWrong,
  setIsHiddenWrong,
  SubjectType,
  isHiddenInfo,
  setIsHiddenInfo,
}) {
  const eyeImage = isHiddenInfo ? <ButtonEyeSlashImage /> : <ButtonEyeImage />;

  function handleClickInfoButton() {
    setIsHiddenInfo(!isHiddenInfo);
    setIsHiddenWrong(true);
  }

  return (
    <AdditionalContentContainer>
      <ContentButtonContainer>
        <ContentButton onClick={handleClickInfoButton}>
          {eyeImage}
        </ContentButton>
        <ContentButton>
          <ButtonSpeakerWaveImage />
        </ContentButton>
      </ContentButtonContainer>
      <WrongAnswerCard
        cardVisibility={!isHiddenWrong}
        ArrowPositionRight="68%"
      />
      <LessonQuizInfoCard
        cardVisibility={!isHiddenInfo}
        subjectType={SubjectType}
      />
    </AdditionalContentContainer>
  );
}

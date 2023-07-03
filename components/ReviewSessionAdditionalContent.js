import styled from "styled-components";
import { useState } from "react";
import { ReactComponent as ClockSVG } from "../src/heroicons/clock.svg";
import { ReactComponent as CheckSVG } from "../src/heroicons/check.svg";
import { ReactComponent as EyeSlashSVG } from "../src/heroicons/eye-slash.svg";
import { ReactComponent as SpeakerWaveSVG } from "../src/heroicons/speaker-wave.svg";

const AdditionalContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

const ContentButtonContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const ButtonImage = styled.img.attrs((props) => ({
  $src: props.$src,
}))`
  src: ${(props) => props.$src};
`;

const ContentButton = styled.button`
  type: button;
  box-shadow: 3px 3px 0 #e1e1e1;
  border: none;
`;

export default function AdditionalContent() {
  return (
    <AdditionalContentContainer>
      <ContentButtonContainer>
        <ContentButton>
          <ButtonImage $src={ClockSVG} />
        </ContentButton>
        <ContentButton>
          <ButtonImage $src={CheckSVG} />
        </ContentButton>
        <ContentButton>
          <ButtonImage $src={EyeSlashSVG} />
        </ContentButton>
        <ContentButton>
          <ButtonImage $src={SpeakerWaveSVG} />
        </ContentButton>
      </ContentButtonContainer>
    </AdditionalContentContainer>
  );
}

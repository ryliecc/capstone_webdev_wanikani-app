import styled from "styled-components";
import StyledApiResponse from "./StyledApiResponse.js";

const CardContainer = styled.div`
  background-color: #f4f4f4;
  margin: 0.8em;
  margin-top: 1em;
  padding: 0.8em;
  border-radius: 10px;
  display: flex;
  gap: 0.4em;
  flex-direction: column;
  height: auto;
  padding-bottom: 1.2em;
  position: relative;
`;

const BorderArrow = styled.div`
  width: 0;
  height: 0;
  border-left: 1.6em solid transparent;
  border-right: 1.6em solid transparent;
  border-bottom: 1.6em solid #f4f4f4;
  position: absolute;
  top: -1.5em;
  right: 60%;
`;

const Heading = styled.h3`
  color: #333;
`;

const Mnemonic = styled.p`
  color: #333;
  line-height: 1.4em;
`;

export default function LessonRadicalMeaningCard({ MeaningMnemonic }) {
  return (
    <>
      <CardContainer>
        <BorderArrow />
        <Heading>Meaning Explanation</Heading>
        <Mnemonic>
          <StyledApiResponse text={MeaningMnemonic} />
        </Mnemonic>
      </CardContainer>
    </>
  );
}

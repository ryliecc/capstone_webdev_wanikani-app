import styled from "styled-components";

const CardContainer = styled.div`
  background-color: #f4f4f4;
  margin: 0.8em;
  margin-top: 1em;
  padding: 0.4em;
  border-radius: 10px;
  display: flex;
  gap: 0.4em;
  flex-direction: column;
  height: auto;
  padding-bottom: 2em;
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
  font-size: 1.4em;
`;

const Mnemonic = styled.p`
  color: #333;
`;

export default function LessonRadicalMeaningCard({ MeaningMnemonic }) {
  return (
    <>
      <CardContainer>
        <BorderArrow />
        <Heading>Meaning Explanation</Heading>
        <Mnemonic>{MeaningMnemonic}</Mnemonic>
      </CardContainer>
    </>
  );
}

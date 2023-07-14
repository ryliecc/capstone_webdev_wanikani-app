import styled from "styled-components";

const CardContainer = styled.div`
  background-color: #f4f4f4;
  margin: 0.8em;
  margin-top: 1em;
  padding: 0.6em;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 0.4em;
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
  right: 43%;
`;

const ReadingText = styled.p`
  font-size: 1.6em;
  padding: 0.2em;
`;

const Heading = styled.h3`
  color: #333;
  margin-left: 0.2em;
`;

const Text = styled.p`
  color: #333;
  margin-left: 0.2em;
`;

export default function LessonVocabReadingCard({ Readings, ReadingMnemonic }) {
  return (
    <>
      <CardContainer>
        <BorderArrow />
        <ReadingText>{Readings}</ReadingText>
        <Heading>Explanation</Heading>
        <Text>{ReadingMnemonic}</Text>
      </CardContainer>
    </>
  );
}

import styled from "styled-components";

const CardContainer = styled.div`
  background-color: #f4f4f4;
  margin: 0.8em;
  padding: 0.6em;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 0.4em;
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
  right: 25%;
`;

const Subheading = styled.h3`
  color: #333;
`;

const SentenceElement = styled.p`
  color: #333;
`;

const SentenceMeaning = styled.p`
  color: #333;
  margin-bottom: 0.5em;
`;

export default function LessonContextCard({ contextSentences }) {
  const SentenceElements = contextSentences?.map((sentence, index) => {
    return (
      <div key={index}>
        <SentenceElement>{sentence.ja}</SentenceElement>
        <SentenceMeaning>{sentence.en}</SentenceMeaning>
      </div>
    );
  });
  return (
    <CardContainer>
      <BorderArrow />
      <Subheading>Context Sentences</Subheading>
      {SentenceElements}
    </CardContainer>
  );
}

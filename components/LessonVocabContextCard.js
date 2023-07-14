import styled from "styled-components";
import KanjiList from "./KanjiList.js";

const CardContainer = styled.div`
  background-color: #f4f4f4;
  margin: 0.8em;
  padding: 0.8em;
  padding-left: 1em;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
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
  right: 17%;
`;

const Subheading = styled.h3`
  color: #333;
  margin-top: 0.4em;
`;

const SentenceContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-item: flex-start;
`;

const SentenceElement = styled.p`
  color: #333;
`;

const SentenceMeaning = styled.p`
  color: #333;
  margin-bottom: 0.5em;
`;

export default function LessonVocabContextCard({ currentLesson }) {
  const ContextSentences = currentLesson?.data.context_sentences;
  const SentenceElements = ContextSentences?.map((sentence, index) => {
    return (
      <SentenceContainer key={index}>
        <SentenceElement>{sentence.ja}</SentenceElement>
        <SentenceMeaning>{sentence.en}</SentenceMeaning>
      </SentenceContainer>
    );
  });

  const KanjiIds = currentLesson?.data.component_subject_ids;

  const endpointPath = KanjiIds && "?ids=" + KanjiIds.join(",");
  return (
    <CardContainer>
      <BorderArrow />
      <Subheading>Context Sentences</Subheading>
      {SentenceElements}
      <Subheading>Kanji Composition</Subheading>
      <KanjiList endpointPath={endpointPath && endpointPath} />
    </CardContainer>
  );
}

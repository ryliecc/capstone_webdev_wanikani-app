import styled from "styled-components";
import RadicalCombination from "./KanjiRadicalCombination";
import VocabularyListComponent from "./VocabularyList";

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
  right: 17%;
`;

const Subheading = styled.h3`
  color: #333;
`;

export default function LessonKanjiContextCard({ currentLesson }) {
  const KanjiId = currentLesson?.id;
  const VocabularyIds = currentLesson?.data.amalgamation_subject_ids;
  const endpointPath = VocabularyIds && "?ids=" + VocabularyIds.join(",");
  return (
    <CardContainer>
      <BorderArrow />
      <RadicalCombination id={KanjiId} />
      <Subheading>Found in Vocabulary</Subheading>
      <VocabularyListComponent endpointPath={endpointPath} />
    </CardContainer>
  );
}

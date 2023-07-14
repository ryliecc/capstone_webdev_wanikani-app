import styled from "styled-components";
import KanjiList from "./KanjiList";

const CardContainer = styled.div`
  background-color: #f4f4f4;
  margin: 0.8em;
  padding: 0.8em;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 0.2em;
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
  padding-left: 0.6em;
  width: 100%;
  font-size: 1.4em;
`;

export default function LessonRadicalContextCard({ KanjiIds }) {
  const endpointPath = KanjiIds && "?ids=" + KanjiIds;
  return (
    <CardContainer>
      <BorderArrow />
      <Subheading>Found in Kanji</Subheading>
      <KanjiList endpointPath={endpointPath} />
    </CardContainer>
  );
}

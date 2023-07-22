import styled from "styled-components";
import useSubjects from "../swr/useSubjects";
import KanjiList from "./KanjiList";

const Heading = styled.h3`
  font-size: 1.8em;
  margin: 0.4em;
  text-align: center;
  margin-top: 0.8em;
`;

export default function VocabularyKanjiComposition({ id }) {
  const { subjects, isLoading, isError } = useSubjects(id);
  if (isLoading) {
    return <div>Loading ...</div>;
  }
  if (isError) {
    return <div>Error fetching...</div>;
  }

  const KanjiIds = subjects && subjects.component_subject_ids;
  const endpointPath = KanjiIds && "?ids=" + KanjiIds.join(",");
  return (
    <>
      <Heading>Kanji Composition</Heading>
      <KanjiList endpointPath={endpointPath} />
    </>
  );
}

import styled from "styled-components";
import useSubjects from "../swr/useSubjects.js";
import KanjiList from "./KanjiList.js";

const Heading = styled.h3`
  font-size: 1.6em;
  margin: 0.4em;
`;

export default function RadicalFoundInKanji({ id }) {
  const { subjects, isLoading, isError } = useSubjects(id);
  if (isLoading) {
    return <>Loading...</>;
  }
  if (isError) {
    return <div>Error fetching...</div>;
  }
  const KanjiIds = subjects && subjects.amalgamation_subject_ids;
  const endpointPath = KanjiIds && "?ids=" + KanjiIds.join(",");

  return (
    <>
      <Heading>Found in Kanji</Heading>
      {KanjiIds && <KanjiList endpointPath={endpointPath} />}
    </>
  );
}

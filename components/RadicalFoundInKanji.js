import styled from "styled-components";
import useSubjects from "../swr/useSubjects.js";
import KanjiList from "./KanjiList.js";

const Heading = styled.h3`
  font-size: 1.8em;
  margin: 0.4em;
  text-align: center;
`;

export default function RadicalFoundInKanji({ id }) {
  const { subjects, isLoading, isError } = useSubjects(id);

  const KanjiIds = subjects && subjects.amalgamation_subject_ids;
  const endpointPath = KanjiIds && "?ids=" + KanjiIds.join(",");

  if (isLoading) {
    return <>Loading...</>;
  }
  if (isError) {
    return <div>Error fetching...</div>;
  }
  return (
    <>
      <Heading>Found in Kanji</Heading>
      {KanjiIds && <KanjiList endpointPath={endpointPath} />}
    </>
  );
}

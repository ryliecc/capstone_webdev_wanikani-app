import styled from "styled-components";
import VocabularyListComponent from "./VocabularyList.js";
import useSubjects from "../swr/useSubjects.js";

const Heading = styled.h3`
  font-size: 1.8em;
  margin: 0.4em;
  text-align: center;
  margin-top: 0.8em;
`;

export default function KanjiFoundInVocabulary({ id }) {
  const { subjects, isLoading, isError } = useSubjects(id);
  if (isLoading) {
    return <div>Loading ...</div>;
  }
  if (isError) {
    return <div>Error fetching...</div>;
  }

  const VocabularyIds = subjects?.amalgamation_subject_ids;
  const endpointPath = VocabularyIds && "?ids=" + VocabularyIds.join(",");
  return (
    <>
      <Heading>Found in Vocabulary</Heading>
      <VocabularyListComponent endpointPath={endpointPath} />
    </>
  );
}

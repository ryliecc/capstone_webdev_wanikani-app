import styled from "styled-components";
import VocabularyListComponent from "./VocabularyList.js";

const Heading = styled.h3``;

export default function KanjiFoundInVocabulary() {
  return (
    <>
      <Heading>Found in Vocabulary</Heading>
      <VocabularyListComponent />
    </>
  );
}

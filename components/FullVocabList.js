import styled from "styled-components";
import VocabularyListComponent from "./VocabularyList.js";

const VocabHeader = styled.h2`
  text-align: center;
  font-size: 2em;
`;

const LevelHeader = styled.h3`
  margin-left: 0.3em;
  margin: 0.5em;
  font-size: 1.2em;
`;

export default function FullVocabList() {
  return (
    <>
      <VocabHeader>単語 - Vocabulary</VocabHeader>
      <LevelHeader>Level 1</LevelHeader>
      <VocabularyListComponent LevelNumber="1" />
      <LevelHeader>Level 2</LevelHeader>
      <VocabularyListComponent LevelNumber="2" />
      <LevelHeader>Level 3</LevelHeader>
      <VocabularyListComponent LevelNumber="3" />
      <LevelHeader>Level 4</LevelHeader>
      <VocabularyListComponent LevelNumber="4" />
      <LevelHeader>Level 5</LevelHeader>
      <VocabularyListComponent LevelNumber="5" />
      <LevelHeader>Level 6</LevelHeader>
      <VocabularyListComponent LevelNumber="6" />
      <LevelHeader>Level 7</LevelHeader>
      <VocabularyListComponent LevelNumber="7" />
      <LevelHeader>Level 8</LevelHeader>
      <VocabularyListComponent LevelNumber="8" />
      <LevelHeader>Level 9</LevelHeader>
      <VocabularyListComponent LevelNumber="9" />
      <LevelHeader>Level 10</LevelHeader>
      <VocabularyListComponent LevelNumber="10" />
    </>
  );
}

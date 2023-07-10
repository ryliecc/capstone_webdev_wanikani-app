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
      <VocabularyListComponent endpointPath="?levels=1&types=vocabulary,kana_vocabulary" />
      <LevelHeader>Level 2</LevelHeader>
      <VocabularyListComponent endpointPath="?levels=2&types=vocabulary,kana_vocabulary" />
      <LevelHeader>Level 3</LevelHeader>
      <VocabularyListComponent endpointPath="?levels=3&types=vocabulary,kana_vocabulary" />
      <LevelHeader>Level 4</LevelHeader>
      <VocabularyListComponent endpointPath="?levels=4&types=vocabulary,kana_vocabulary" />
      <LevelHeader>Level 5</LevelHeader>
      <VocabularyListComponent endpointPath="?levels=5&types=vocabulary,kana_vocabulary" />
      <LevelHeader>Level 6</LevelHeader>
      <VocabularyListComponent endpointPath="?levels=6&types=vocabulary,kana_vocabulary" />
      <LevelHeader>Level 7</LevelHeader>
      <VocabularyListComponent endpointPath="?levels=7&types=vocabulary,kana_vocabulary" />
      <LevelHeader>Level 8</LevelHeader>
      <VocabularyListComponent endpointPath="?levels=8&types=vocabulary,kana_vocabulary" />
      <LevelHeader>Level 9</LevelHeader>
      <VocabularyListComponent endpointPath="?levels=9&types=vocabulary,kana_vocabulary" />
      <LevelHeader>Level 10</LevelHeader>
      <VocabularyListComponent endpointPath="?levels=10&types=vocabulary,kana_vocabulary" />
    </>
  );
}

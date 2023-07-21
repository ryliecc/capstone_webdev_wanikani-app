import styled from "styled-components";
import KanjiList from "./KanjiList.js";

const KanjiHeader = styled.h2`
  text-align: center;
  font-size: 2em;
`;

const LevelHeader = styled.h3`
  margin-left: 0.8em;
  font-size: 1.2em;
  text-align: center;
`;

export default function FullKanjiList() {
  return (
    <>
      <KanjiHeader>漢字 - Kanji</KanjiHeader>
      <LevelHeader>Level 1</LevelHeader>
      <KanjiList endpointPath="?levels=1&types=kanji" />
      <LevelHeader>Level 2</LevelHeader>
      <KanjiList endpointPath="?levels=2&types=kanji" />
      <LevelHeader>Level 3</LevelHeader>
      <KanjiList endpointPath="?levels=3&types=kanji" />
      <LevelHeader>Level 4</LevelHeader>
      <KanjiList endpointPath="?levels=4&types=kanji" />
      <LevelHeader>Level 5</LevelHeader>
      <KanjiList endpointPath="?levels=5&types=kanji" />
      <LevelHeader>Level 6</LevelHeader>
      <KanjiList endpointPath="?levels=6&types=kanji" />
      <LevelHeader>Level 7</LevelHeader>
      <KanjiList endpointPath="?levels=7&types=kanji" />
      <LevelHeader>Level 8</LevelHeader>
      <KanjiList endpointPath="?levels=8&types=kanji" />
      <LevelHeader>Level 9</LevelHeader>
      <KanjiList endpointPath="?levels=9&types=kanji" />
      <LevelHeader>Level 10</LevelHeader>
      <KanjiList endpointPath="?levels=10&types=kanji" />
    </>
  );
}

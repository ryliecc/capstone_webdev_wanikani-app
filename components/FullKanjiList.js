import styled from "styled-components";
import KanjiList from "./KanjiList.js";

const KanjiHeader = styled.h2`
  text-align: center;
  font-size: 2em;
`;

const LevelHeader = styled.h3`
  margin-left: 0.8em;
  font-size: 1.2em;
`;

export default function FullKanjiList() {
  return (
    <>
      <KanjiHeader>漢字 - Kanji</KanjiHeader>
      <LevelHeader>Level 1</LevelHeader>
      <KanjiList LevelNumber="1" />
      <LevelHeader>Level 2</LevelHeader>
      <KanjiList LevelNumber="2" />
      <LevelHeader>Level 3</LevelHeader>
      <KanjiList LevelNumber="3" />
      <LevelHeader>Level 4</LevelHeader>
      <KanjiList LevelNumber="4" />
      <LevelHeader>Level 5</LevelHeader>
      <KanjiList LevelNumber="5" />
      <LevelHeader>Level 6</LevelHeader>
      <KanjiList LevelNumber="6" />
      <LevelHeader>Level 7</LevelHeader>
      <KanjiList LevelNumber="7" />
      <LevelHeader>Level 8</LevelHeader>
      <KanjiList LevelNumber="8" />
      <LevelHeader>Level 9</LevelHeader>
      <KanjiList LevelNumber="9" />
      <LevelHeader>Level 10</LevelHeader>
      <KanjiList LevelNumber="10" />
    </>
  );
}

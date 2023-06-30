import styled from "styled-components";
import { exampleData } from "../src/data.js";

const KanjiData = exampleData.filter((item) => item.object === "kanji");

const LevelOneData = KanjiData.filter((item) => item.data.level === 1);

const LevelTwoData = KanjiData.filter((item) => item.data.level === 2);

const KanjiHeader = styled.h2`
  text-align: center;
  font-size: 2em;
`;

const LevelHeader = styled.h3`
  margin-left: 0.8em;
  font-size: 1.2em;
`;

const KanjiList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5em;
  margin: 0.5em;
`;

const KanjiListItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 7em;
  height: 7em;
  gap: 0.2em;
  border-radius: 10px;
  background-color: #ff00aa;
  border-bottom: 3px solid #cc0088;
`;

const KanjiListCharacterSpan = styled.span`
  color: #ffffff;
  font-size: 2.2em;
`;

const KanjiListReadingSpan = styled.span`
  color: #ffffff;
  font-size: 0.9em;
`;

const KanjiListMeaningSpan = styled.span`
  color: #ffffff;
  font-size: 0.9em;
`;

const FullKanjiList = () => {
  return (
    <>
      <KanjiHeader>漢字 - Kanji</KanjiHeader>
      <LevelHeader>Level 1</LevelHeader>
      <KanjiList>
        {LevelOneData.map((item) => (
          <KanjiListItem key={item.id}>
            <KanjiListCharacterSpan>
              {item.data.characters}
            </KanjiListCharacterSpan>
            <KanjiListReadingSpan>
              {item.data.readings[0].reading}
            </KanjiListReadingSpan>
            <KanjiListMeaningSpan>
              {item.data.meanings[0].meaning}
            </KanjiListMeaningSpan>
          </KanjiListItem>
        ))}
      </KanjiList>
      <LevelHeader>Level 2</LevelHeader>
      <KanjiList>
        {LevelTwoData.map((item) => (
          <KanjiListItem key={item.id}>
            <KanjiListCharacterSpan>
              {item.data.characters}
            </KanjiListCharacterSpan>
            <KanjiListReadingSpan>
              {item.data.readings[0].reading}
            </KanjiListReadingSpan>
            <KanjiListMeaningSpan>
              {item.data.meanings[0].meaning}
            </KanjiListMeaningSpan>
          </KanjiListItem>
        ))}
      </KanjiList>
    </>
  );
};

export default FullKanjiList;

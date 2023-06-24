import styled from "styled-components";
import { exampleData } from "../src/data.js";

const KanjiData = exampleData.filter((item) => item.object === "kanji");

const KanjiHeader = styled.h2`
  text-align: center;
`;

const KanjiList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.5em;
`;

const KanjiListItem = styled.li`
  display: flex;
  justify-content: space-between;
`;

const KanjiListItemSpan = styled.span`
  width: 33%;
  border: 1px solid black;
  text-align: center;
`;

const FullKanjiList = () => {
  return (
    <>
      <KanjiHeader>漢字 - Kanji</KanjiHeader>
      <KanjiList>
        {KanjiData.map((item) => (
          <KanjiListItem key={item.id}>
            <KanjiListItemSpan>{item.data.characters}</KanjiListItemSpan>
            <KanjiListItemSpan>
              {item.data.readings.map((reading) => reading.reading).join(", ")}
            </KanjiListItemSpan>
            <KanjiListItemSpan>
              {item.data.meanings.map((meaning) => meaning.meaning).join(", ")}
            </KanjiListItemSpan>
          </KanjiListItem>
        ))}
      </KanjiList>
    </>
  );
};

export default FullKanjiList;

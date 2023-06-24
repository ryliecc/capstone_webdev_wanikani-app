import styled from "styled-components";
import { exampleData } from "../src/data.js";

const VocabularyData = exampleData.filter(
  (item) => item.object === "vocabulary"
);

const VocabHeader = styled.h2`
  text-align: center;
`;

const VocabList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.5em;
`;

const VocabListItem = styled.li`
  display: flex;
  justify-content: space-between;
`;

const VocabListItemSpan = styled.span`
  width: 33%;
  border: 1px solid black;
  text-align: center;
`;

const VocabularyList = () => {
  return (
    <>
      <VocabHeader>Vocabulary</VocabHeader>
      <VocabList>
        {VocabularyData.map((item) => (
          <VocabListItem key={item.id}>
            <VocabListItemSpan>{item.data.characters}</VocabListItemSpan>
            <VocabListItemSpan>
              {item.data.readings.map((reading) => reading.reading).join(", ")}
            </VocabListItemSpan>
            <VocabListItemSpan>
              {item.data.meanings.map((meaning) => meaning.meaning).join(", ")}
            </VocabListItemSpan>
          </VocabListItem>
        ))}
      </VocabList>
    </>
  );
};

export default VocabularyList;

import styled from "styled-components";
import { exampleData } from "../src/data.js";

const VocabularyData = exampleData.filter(
  (item) => item.object === "vocabulary"
);

const LevelOneData = VocabularyData.filter((item) => item.data.level === 1);

const LevelTwoData = VocabularyData.filter((item) => item.data.level === 2);

const VocabHeader = styled.h2`
  text-align: center;
  font-size: 2em;
`;

const LevelHeader = styled.h3`
  margin-left: 0.3em;
  margin: 0.5em;
  font-size: 1.2em;
`;

const VocabList = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  flex-wrap: wrap;
  padding: 0.2em;
`;

const VocabListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 5em;
  background-color: #aa00ff;
  border-bottom: 3px solid #8800cc;
  border-radius: 10px;
  padding: 0.8em;
  margin-bottom: 0.5em;
`;

const VocabListCharacterSpan = styled.span`
  width: 70%;
  color: #ffffff;
  font-size: 2.2em;
`;

const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.5em;
  width: 30%;
`;

const VocabListReadingSpan = styled.span`
  color: #ffffff;
  font-size: 0.9em;
`;

const VocabListMeaningSpan = styled.span`
  color: #ffffff;
  font-size: 0.9em;
`;

const VocabularyList = () => {
  return (
    <>
      <VocabHeader>単語 - Vocabulary</VocabHeader>
      <LevelHeader>Level 1</LevelHeader>
      <VocabList>
        {LevelOneData.map((item) => (
          <VocabListItem key={item.id}>
            <VocabListCharacterSpan>
              {item.data.characters}
            </VocabListCharacterSpan>
            <SidebarContainer>
              <VocabListReadingSpan>
                {item.data.readings[0].reading}
              </VocabListReadingSpan>
              <VocabListMeaningSpan>
                {item.data.meanings[0].meaning}
              </VocabListMeaningSpan>
            </SidebarContainer>
          </VocabListItem>
        ))}
      </VocabList>
      <LevelHeader>Level 2</LevelHeader>
      <VocabList>
        {LevelTwoData.map((item) => (
          <VocabListItem key={item.id}>
            <VocabListCharacterSpan>
              {item.data.characters}
            </VocabListCharacterSpan>
            <SidebarContainer>
              <VocabListReadingSpan>
                {item.data.readings[0].reading}
              </VocabListReadingSpan>
              <VocabListMeaningSpan>
                {item.data.meanings[0].meaning}
              </VocabListMeaningSpan>
            </SidebarContainer>
          </VocabListItem>
        ))}
      </VocabList>
    </>
  );
};

export default VocabularyList;

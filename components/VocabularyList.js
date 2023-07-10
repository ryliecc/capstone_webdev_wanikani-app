import styled from "styled-components";
import useSubjects from "../swr/useSubjects.js";
import { useRouter } from "next/router.js";

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

export default function VocabularyListComponent({ endpointPath }) {
  const router = useRouter();
  const { subjects, isLoading, isError } = useSubjects(endpointPath);
  if (isLoading) {
    return <div>Loading ...</div>;
  }
  if (isError) {
    return <div>Error fetching...</div>;
  }

  const VocabularyListItems = subjects?.map((item) => (
    <VocabListItem
      key={item.id}
      onClick={() => router.push("/vocabulary/" + item.id)}
    >
      <VocabListCharacterSpan>{item.data.characters}</VocabListCharacterSpan>
      <SidebarContainer>
        <VocabListReadingSpan>
          {item.data.readings ? item.data.readings[0].reading : ""}
        </VocabListReadingSpan>
        <VocabListMeaningSpan>
          {item.data.meanings[0].meaning}
        </VocabListMeaningSpan>
      </SidebarContainer>
    </VocabListItem>
  ));
  return <VocabList>{VocabularyListItems}</VocabList>;
}

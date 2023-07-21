import styled from "styled-components";
import useSubjects from "../swr/useSubjects.js";
import { useRouter } from "next/router.js";

const KanjiListElement = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5em;
  margin: 0.5em;
  justify-content: center;
`;

const KanjiListItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 6em;
  height: 6em;
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

export default function KanjiList({ endpointPath }) {
  const router = useRouter();
  const { subjects, isLoading, isError } = useSubjects(
    endpointPath && endpointPath
  );
  if (isLoading) {
    return <div>Loading ...</div>;
  }
  if (isError) {
    return <div>Error fetching...</div>;
  }

  const KanjiListItems = subjects?.map((item) => (
    <KanjiListItem
      key={item.id}
      onClick={() => router.push("/kanji/" + item.id)}
    >
      <KanjiListCharacterSpan>{item.data.characters}</KanjiListCharacterSpan>
      <KanjiListReadingSpan>
        {item.data.readings[0].reading}
      </KanjiListReadingSpan>
      <KanjiListMeaningSpan>
        {item.data.meanings[0].meaning}
      </KanjiListMeaningSpan>
    </KanjiListItem>
  ));
  return <KanjiListElement>{KanjiListItems}</KanjiListElement>;
}

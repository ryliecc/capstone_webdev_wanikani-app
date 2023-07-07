import styled from "styled-components";
import useSubjects from "../swr/useSubjects.js";

const RadicalListElement = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5em;
  margin: 0.5em;
`;

const RadicalListItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 5em;
  height: 5em;
  gap: 0.2em;
  border-radius: 10px;
  background-color: #00aaff;
  border-bottom: 3px solid #0088cc;
`;

const RadicalListCharacterSpan = styled.span`
  color: #ffffff;
  font-size: 1.8em;
`;

const RadicalListMeaningSpan = styled.span`
  color: #ffffff;
  font-size: 0.7em;
`;

export default function RadicalList({ LevelNumber }) {
  const { subjects, isLoading, isError } = useSubjects(LevelNumber, "radical");
  if (isLoading) {
    return <div>Loading ...</div>;
  }
  if (isError) {
    return <div>Error fetching...</div>;
  }

  const RadicalListItems = subjects?.map((item) => (
    <RadicalListItem key={item.id}>
      <RadicalListCharacterSpan>
        {item.data.characters}
      </RadicalListCharacterSpan>
      <RadicalListMeaningSpan>
        {item.data.meanings.map((meaning) => meaning.meaning).join(", ")}
      </RadicalListMeaningSpan>
    </RadicalListItem>
  ));

  return <RadicalListElement>{RadicalListItems}</RadicalListElement>;
}

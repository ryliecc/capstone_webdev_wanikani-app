import styled from "styled-components";
import { exampleData } from "../src/data.js";

const RadicalData = exampleData.filter((item) => item.object === "radical");

const LevelOneData = RadicalData.filter((item) => item.data.level === 1);

const LevelTwoData = RadicalData.filter((item) => item.data.level === 2);

const RadicalHeader = styled.h2`
  text-align: center;
  font-size: 2em;
`;

const LevelHeader = styled.h3`
  margin-left: 0.8em;
  font-size: 1.2em;
`;

const RadicalList = styled.ul`
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

export default function FullRadicalList() {
  return (
    <>
      <RadicalHeader>部首 - Radicals</RadicalHeader>
      <LevelHeader>Level 1</LevelHeader>
      <RadicalList>
        {LevelOneData.map((item) => (
          <RadicalListItem key={item.id}>
            <RadicalListCharacterSpan>
              {item.data.characters}
            </RadicalListCharacterSpan>
            <RadicalListMeaningSpan>
              {item.data.meanings.map((meaning) => meaning.meaning).join(", ")}
            </RadicalListMeaningSpan>
          </RadicalListItem>
        ))}
      </RadicalList>
      <LevelHeader>Level 2</LevelHeader>
      <RadicalList>
        {LevelTwoData.map((item) => (
          <RadicalListItem key={item.id}>
            <RadicalListCharacterSpan>
              {item.data.characters}
            </RadicalListCharacterSpan>
            <RadicalListMeaningSpan>
              {item.data.meanings.map((meaning) => meaning.meaning).join(", ")}
            </RadicalListMeaningSpan>
          </RadicalListItem>
        ))}
      </RadicalList>
    </>
  );
}

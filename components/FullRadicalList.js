import styled from "styled-components";
import RadicalList from "./RadicalList.js";

const RadicalHeader = styled.h2`
  text-align: center;
  font-size: 2em;
`;

const LevelHeader = styled.h3`
  margin-left: 0.8em;
  font-size: 1.2em;
`;

export default function FullRadicalList() {
  return (
    <>
      <RadicalHeader>部首 - Radicals</RadicalHeader>
      <LevelHeader>Level 1</LevelHeader>
      <RadicalList LevelNumber="1" />
      <LevelHeader>Level 2</LevelHeader>
      <RadicalList LevelNumber="2" />
      <LevelHeader>Level 3</LevelHeader>
      <RadicalList LevelNumber="3" />
      <LevelHeader>Level 4</LevelHeader>
      <RadicalList LevelNumber="4" />
      <LevelHeader>Level 5</LevelHeader>
      <RadicalList LevelNumber="5" />
      <LevelHeader>Level 6</LevelHeader>
      <RadicalList LevelNumber="6" />
      <LevelHeader>Level 7</LevelHeader>
      <RadicalList LevelNumber="7" />
      <LevelHeader>Level 8</LevelHeader>
      <RadicalList LevelNumber="8" />
      <LevelHeader>Level 9</LevelHeader>
      <RadicalList LevelNumber="9" />
      <LevelHeader>Level 10</LevelHeader>
      <RadicalList LevelNumber="10" />
    </>
  );
}

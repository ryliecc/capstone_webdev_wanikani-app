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
      <RadicalList endpointPath="?levels=1&types=radical" />
      <LevelHeader>Level 2</LevelHeader>
      <RadicalList endpointPath="?levels=2&types=radical" />
      <LevelHeader>Level 3</LevelHeader>
      <RadicalList endpointPath="?levels=3&types=radical" />
      <LevelHeader>Level 4</LevelHeader>
      <RadicalList endpointPath="?levels=4&types=radical" />
      <LevelHeader>Level 5</LevelHeader>
      <RadicalList endpointPath="?levels=5&types=radical" />
      <LevelHeader>Level 6</LevelHeader>
      <RadicalList endpointPath="?levels=6&types=radical" />
      <LevelHeader>Level 7</LevelHeader>
      <RadicalList endpointPath="?levels=7&types=radical" />
      <LevelHeader>Level 8</LevelHeader>
      <RadicalList endpointPath="?levels=8&types=radical" />
      <LevelHeader>Level 9</LevelHeader>
      <RadicalList endpointPath="?levels=9&types=radical" />
      <LevelHeader>Level 10</LevelHeader>
      <RadicalList endpointPath="?levels=10&types=radical" />
    </>
  );
}

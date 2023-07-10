import styled from "styled-components";

const Heading = styled.h2`
  text-align: start;
  display: inline-block;
`;

const LevelSpan = styled.span`
  border-radius: 10px;
`;

const CharacterSpan = styled.span`
  border-radius: 10px;
`;

export default function DetailsPageHeader() {
  return (
    <>
      <Heading>
        <LevelSpan>1</LevelSpan>
        <CharacterSpan>亅</CharacterSpan>
        Barb
      </Heading>
    </>
  );
}

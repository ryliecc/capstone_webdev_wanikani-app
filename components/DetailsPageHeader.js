import styled from "styled-components";
import useSubjects from "../swr/useSubjects.js";

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

export default function DetailsPageHeader({ id }) {
  const { subject, isLoading, isError } = useSubjects(id);
  if (isLoading) {
    return <div>Loading ...</div>;
  }
  if (isError) {
    return <div>Error fetching...</div>;
  }

  const LevelNumber = subject.level;
  const Character = subject.characters;
  const Name = subject.meanings[0].meaning;
  return (
    <>
      <Heading>
        <LevelSpan>{LevelNumber}</LevelSpan>
        <CharacterSpan>{Character}</CharacterSpan>
        {Name}
      </Heading>
    </>
  );
}

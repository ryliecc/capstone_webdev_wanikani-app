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
  const { subjects, isLoading, isError } = useSubjects(id);
  if (isLoading) {
    return <div>Loading ...</div>;
  }
  if (isError) {
    return <div>Error fetching...</div>;
  }

  const LevelNumber = subjects && subjects.level;
  const Character = subjects && subjects.characters;
  const Name = subjects && subjects.meanings[0].meaning;
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

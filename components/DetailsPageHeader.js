import styled from "styled-components";
import useSubjects from "../swr/useSubjects.js";

const Heading = styled.h2`
  display: flex;
  align-items: center;
  gap: 0.2em;
  margin: 0.2em;
  font-size: 2.2em;
`;

const LevelSpan = styled.span`
  background-color: #a1a1a1;
  color: #d5d5d5;
  width: 1.5em;
  height: 1.5em;
  text-align: center;
  border-radius: 6px;
  box-shadow: 0 -3px 0 rgba(0, 0, 0, 0.2) inset,
    0 0 10px rgba(255, 255, 255, 0.5);
`;

const CharacterSpan = styled.span.attrs((props) => ({
  $backgroundcolor: props.$backgroundcolor,
}))`
  border-radius: 6px;
  background-color: ${(props) => props.$backgroundcolor};
  color: #fff;
  width: 1.5em;
  height: 1.5em;
  text-align: center;
  box-shadow: 0 -3px 0 rgba(0, 0, 0, 0.2) inset,
    0 0 10px rgba(255, 255, 255, 0.5);
`;

export default function DetailsPageHeader({ id, typeColor }) {
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
        <CharacterSpan $backgroundcolor={typeColor}>{Character}</CharacterSpan>
        {Name}
      </Heading>
    </>
  );
}

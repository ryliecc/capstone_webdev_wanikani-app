import styled from "styled-components";

const CardContainer = styled.div`
  border: 1px solid black;
  background-color: props.color;
  width: 100%;
  display: flex;
  flex-direction: row;
  visibility: props.visibility;
`;

const FirstTitle = styled.h3``;

const SecondTitle = styled.h3``;

const ThirdTitle = styled.h3``;

export default function LessonContextCard(visibility, backgroundColor) {
  return (
    <CardContainer color={backgroundColor} visibility={visibility}>
      <FirstTitle>Patterns of Use</FirstTitle>
      <SecondTitle>Common Word Combinations</SecondTitle>
      <ThirdTitle>Context Sentences</ThirdTitle>
    </CardContainer>
  );
}

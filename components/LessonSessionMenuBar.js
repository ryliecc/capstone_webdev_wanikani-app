import styled from "styled-components";
import LessonMeaningCard from "./LessonMeaningCard.js";

const Container = styled.div`
  width: 100%;
  background-color: props.color;
  height: 3em;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

const MenuItemSpan = styled.span`
  color: props.color;
  font-size: 1.5em;
`;

export default function LessonSessionMenuBar({ backgroundColor, textColor }) {
  return (
    <>
      <Container color={backgroundColor}>
        <MenuItemSpan color={textColor}>Meaning</MenuItemSpan>
        <MenuItemSpan color={textColor}>Context</MenuItemSpan>
      </Container>
      <LessonMeaningCard backgroundColor={backgroundColor} />
    </>
  );
}

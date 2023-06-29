import styled from "styled-components";
import { useState } from "react";
import LessonMeaningCard from "./LessonMeaningCard.js";
import LessonContextCard from "./LessonContextCard.js";

const Container = styled.div`
  width: 100%;
  background-color: #ececec;
  height: 3em;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

const MenuItem = styled.button`
  color: #333;
  font-size: 1.5em;
  type: button;
  border: none;
  onclick: props.onClick;
`;

export default function LessonSessionMenuBar({ backgroundColor, textColor }) {
  let [displayedCard, setDisplayedCard] = useState(<LessonMeaningCard />);

  function handleClickMeaning() {
    setDisplayedCard(<LessonMeaningCard />);
  }

  function handleClickContext() {
    setDisplayedCard(<LessonContextCard />);
  }

  return (
    <>
      <Container color={backgroundColor}>
        <MenuItem color={textColor} onClick={handleClickMeaning}>
          Meaning
        </MenuItem>
        <MenuItem color={textColor} onClick={handleClickContext}>
          Context
        </MenuItem>
      </Container>
      {displayedCard}
    </>
  );
}

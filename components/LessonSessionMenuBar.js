import styled from "styled-components";
import { useState } from "react";
import LessonMeaningCard from "./LessonMeaningCard.js";

const Container = styled.div`
  width: 100%;
  background-color: props.color;
  height: 3em;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

const MenuItem = styled.button`
  color: props.color;
  font-size: 1.5em;
  type: button;
  onclick: props.onClick;
`;

export default function LessonSessionMenuBar({ backgroundColor, textColor }) {
  let [meaningVisibility, setMeaningVisibility] = useState("visible");

  function handleClickMeaning() {
    console.log("clicked");
    setMeaningVisibility("visible");
  }

  function handleClickContext() {
    setMeaningVisibility("hidden");
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
      <LessonMeaningCard
        backgroundColor="gray"
        visibility={meaningVisibility}
      />
    </>
  );
}

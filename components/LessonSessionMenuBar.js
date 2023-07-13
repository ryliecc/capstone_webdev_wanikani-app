import styled from "styled-components";
import { useState } from "react";
import LessonMeaningCard from "./LessonMeaningCard.js";
import LessonContextCard from "./LessonContextCard.js";
import ChevronLeftSVG from "../src/heroicons/chevron-left.svg";
import ChevronRightSVG from "../src/heroicons/chevron-right.svg";
import { useRouter } from "next/router.js";

const Container = styled.div`
  width: 100%;
  background-color: #ececec;
  height: 3em;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-left: 0.3em;
  padding-right: 0.3em;
`;

const LeftButtonIcon = styled(ChevronLeftSVG)`
  width: 2.6em;
  height: 100%;
  box-shadow: 0 -3px 0 rgba(0, 0, 0, 0.2) inset,
    0 0 10px rgba(255, 255, 255, 0.5);
  border-radius: 5px;
  padding-right: 0.2em;
`;

const RightButtonIcon = styled(ChevronRightSVG)`
  width: 2.6em;
  height: 100%;
  box-shadow: 0 -3px 0 rgba(0, 0, 0, 0.2) inset,
    0 0 10px rgba(255, 255, 255, 0.5);
  border-radius: 5px;
  padding-left: 0.2em;
`;

const MenuItem = styled.button`
  color: #333;
  font-size: 1.5em;
  type: button;
  border: none;
  onclick: props.onClick;
`;

export default function LessonSessionMenuBar({ backgroundColor, textColor }) {
  const router = useRouter();
  const [displayedCard, setDisplayedCard] = useState("meaning");
  function handleClickMeaning() {
    setDisplayedCard("meaning");
  }

  function handleClickContext() {
    setDisplayedCard("context");
  }

  function handleClickLeftButton() {
    if (displayedCard === "meaning") {
      setDisplayedCard("context");
    } else {
      setDisplayedCard("meaning");
    }
  }

  function handleClickRightButton() {
    if (displayedCard === "meaning") {
      setDisplayedCard("context");
    } else {
      router.push("/dashboard");
    }
  }
  ("context");
  return (
    <>
      <Container color={backgroundColor}>
        <LeftButtonIcon onClick={handleClickLeftButton} />
        <MenuItem color={textColor} onClick={handleClickMeaning}>
          Meaning
        </MenuItem>
        <MenuItem color={textColor} onClick={handleClickContext}>
          Context
        </MenuItem>
        <RightButtonIcon onClick={handleClickRightButton} />
      </Container>
      {displayedCard === "meaning" ? (
        <LessonMeaningCard />
      ) : (
        <LessonContextCard />
      )}
    </>
  );
}

import styled from "styled-components";
import { useState } from "react";
import LessonKanjiMeaningCard from "./LessonKanjiMeaningCard.js";
import LessonKanjiReadingCard from "./LessonKanjiReadingCard.js";
import LessonKanjiContextCard from "./LessonKanjiContextCard.js";
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
  font-size: 1.2em;
  type: button;
  border: none;
  onclick: props.onClick;
`;

export default function LessonKanjiMenuBar({
  currentLesson,
  currentLessonIndex,
  setCurrentLessonIndex,
}) {
  const router = useRouter();
  const [displayedCard, setDisplayedCard] = useState("meaning");
  function handleClickMeaning() {
    setDisplayedCard("meaning");
  }

  function handleClickContext() {
    setDisplayedCard("context");
  }

  function handleClickReading() {
    setDisplayedCard("reading");
  }

  function handleClickLeftButton() {
    if (displayedCard === "meaning") {
      if (currentLessonIndex >= 1) {
        setCurrentLessonIndex(currentLessonIndex - 1);
        setDisplayedCard("context");
      } else {
        setDisplayedCard("context");
      }
    } else if (displayedCard === "reading") {
      setDisplayedCard("meaning");
    } else {
      setDisplayedCard("reading");
    }
  }

  function handleClickRightButton() {
    if (displayedCard === "meaning") {
      setDisplayedCard("reading");
    } else if (displayedCard === "reading") {
      setDisplayedCard("context");
    } else if (displayedCard === "context") {
      if (currentLessonIndex <= 3) {
        setDisplayedCard("meaning");
        setCurrentLessonIndex(currentLessonIndex + 1);
      } else {
        setDisplayedCard("meaning");
      }
    }
  }

  const MeaningMnemonic = currentLesson?.data.meaning_mnemonic;
  const Primary = currentLesson?.data.meanings.filter(
    (item) => item.primary === true
  );
  let PrimaryMeanings = Primary?.map((item) => item.meaning).join(",");
  const NonPrimaryMeanings = currentLesson?.data.meanings.filter(
    (item) => item.primary === false
  );
  let AlternativeMeanings = NonPrimaryMeanings?.map(
    (item) => item.meaning
  ).join(`, `);
  if (NonPrimaryMeanings?.length === 0) {
    AlternativeMeanings = "None";
  }
  const Hint = currentLesson?.data.meaning_hint;

  function displayedCardElement() {
    if (displayedCard === "meaning") {
      return (
        <>
          <LessonKanjiMeaningCard
            MeaningMnemonic={MeaningMnemonic}
            PrimaryMeanings={PrimaryMeanings}
            AlternativeMeanings={AlternativeMeanings}
            Hint={Hint}
          />
        </>
      );
    }
    if (displayedCard === "reading") {
      return (
        <>
          <LessonKanjiReadingCard currentLesson={currentLesson} />
        </>
      );
    } else {
      return (
        <>
          <LessonKanjiContextCard currentLesson={currentLesson} />
        </>
      );
    }
  }
  return (
    <>
      <Container>
        <LeftButtonIcon onClick={handleClickLeftButton} />
        <MenuItem onClick={handleClickMeaning}>Meaning</MenuItem>
        <MenuItem onClick={handleClickReading}>Reading</MenuItem>
        <MenuItem onClick={handleClickContext}>Context</MenuItem>
        <RightButtonIcon onClick={handleClickRightButton} />
      </Container>
      {displayedCardElement()}
    </>
  );
}

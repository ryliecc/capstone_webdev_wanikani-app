import styled from "styled-components";
import HomeButton from "./HomeButton.js";
import LessonItemsLeftCounter from "./LessonItemsLeftCounter.js";

const Container = styled.div.attrs((props) => ({
  $backgroundcolor: props.$backgroundcolor,
}))`
  width: 100%;
  height: 15.2em;
  background-color: ${(props) => props.$backgroundcolor};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TopBarContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-top: 0.4em;
`;

const Item = styled.p`
  color: #ffffff;
  font-size: 4em;
  margin-top: 0.4em;
`;

const ItemMeaning = styled.p.attrs((props) => ({
  $visibility: props.$visibility,
}))`
  color: #ffffff;
  font-size: 1.8em;
  visibility: ${(props) => (props.$visibility ? "visible" : "hidden")};
`;

export default function LessonSessionItem({
  currentLesson,
  LessonIds,
  currentLessonPart,
  currentQuizItem,
}) {
  const CurrentItem =
    currentLessonPart === "lesson"
      ? currentLesson && currentLesson
      : currentQuizItem && currentQuizItem;
  const ItemText =
    currentLessonPart === "lesson"
      ? CurrentItem?.data.characters
      : CurrentItem?.characters;
  const ItemMeaningText =
    currentLessonPart === "lesson"
      ? CurrentItem?.data.meanings?.[0]?.meaning
      : "Nice try.";

  function DynamicBackgroundColor() {
    if (CurrentItem && CurrentItem.object === "radical") {
      return "#00AAFF";
    }
    if (CurrentItem && CurrentItem.object === "kanji") {
      return "#FF00AA";
    }
    return "#AA00FF";
  }
  return (
    <Container $backgroundcolor={DynamicBackgroundColor}>
      <TopBarContainer>
        <HomeButton />
        <LessonItemsLeftCounter LessonIds={LessonIds} />
      </TopBarContainer>
      <Item>{ItemText}</Item>
      <ItemMeaning $visibility={currentLessonPart === "lesson" ? true : false}>
        {ItemMeaningText}
      </ItemMeaning>
    </Container>
  );
}

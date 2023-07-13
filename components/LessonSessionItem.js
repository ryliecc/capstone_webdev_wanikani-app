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

const ItemMeaning = styled.p`
  color: #ffffff;
  font-size: 1.8em;
`;

export default function LessonSessionItem({ currentLesson, LessonIds }) {
  const ItemText = currentLesson?.data.characters;
  const ItemMeaningText = currentLesson?.data.meanings?.[0]?.meaning;
  return (
    <Container $backgroundcolor="#AA00FF">
      <TopBarContainer>
        <HomeButton />
        <LessonItemsLeftCounter LessonIds={LessonIds} />
      </TopBarContainer>
      <Item>{ItemText}</Item>
      <ItemMeaning>{ItemMeaningText}</ItemMeaning>
    </Container>
  );
}

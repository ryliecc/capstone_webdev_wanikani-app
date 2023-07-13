import styled from "styled-components";
import HomeButton from "./HomeButton.js";
import LessonItemsLeftCounter from "./LessonItemsLeftCounter.js";
import useSummary from "../swr/useSummary.js";

const Container = styled.div.attrs((props) => ({
  $backgroundcolor: props.$backgroundcolor,
}))`
  width: 100%;
  height: 17em;
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
  font-size: 4.5em;
  margin-top: 0.4em;
`;

const ItemMeaning = styled.p`
  color: #ffffff;
  font-size: 1.8em;
`;

export default function LessonSessionItem({ itemText, itemMeaningText }) {
  const { summary, isLoading, isError } = useSummary();
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error fetching...</div>;
  }

  const LessonIds = summary?.lessons[0].subject_ids.join(",");
  return (
    <Container $backgroundcolor="#AA00FF">
      <TopBarContainer>
        <HomeButton />
        <LessonItemsLeftCounter LessonIds={LessonIds} />
      </TopBarContainer>
      <Item>{itemText}</Item>
      <ItemMeaning>{itemMeaningText}</ItemMeaning>
    </Container>
  );
}

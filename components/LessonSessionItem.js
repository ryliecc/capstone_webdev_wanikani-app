import styled from "styled-components";
import HomeButton from "./HomeButton";

const Container = styled.div`
  width: 100%;
  height: 15em;
  background-color: #aa00ff;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Item = styled.p`
  color: #ffffff;
  font-size: 4.5em;
  margin: 0;
`;

const ItemMeaning = styled.p`
  color: #ffffff;
  font-size: 1.8em;
`;

export default function LessonSessionItem({ itemText, itemMeaningText }) {
  return (
    <Container>
      <HomeButton />
      <Item>{itemText}</Item>
      <ItemMeaning>{itemMeaningText}</ItemMeaning>
    </Container>
  );
}

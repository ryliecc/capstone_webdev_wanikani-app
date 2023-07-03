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

export default function ReviewSessionItem({ itemText }) {
  return (
    <Container>
      <HomeButton />
      <Item>{itemText}</Item>
    </Container>
  );
}

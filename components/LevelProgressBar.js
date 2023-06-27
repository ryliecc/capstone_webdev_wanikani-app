import styled from "styled-components";

const Container = styled.section`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  border-radius: 10px;
`;

const Title = styled.h3`
  font-size: 1.5rem;
`;

const LevelNumber = styled.span`
  font-size: 1.5rem;
`;

const ActualLevelBar = styled.div`
  background-color: black;
  border: 1px solid black;
  border-radius: 10px;
`;

export default function LevelProgressBar() {
  return (
    <Container>
      <Title>
        Level <LevelNumber>5</LevelNumber> Progress:
      </Title>
      <ActualLevelBar />
    </Container>
  );
}

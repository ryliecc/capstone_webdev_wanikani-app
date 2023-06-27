import styled from "styled-components";

const Container = styled.section`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  border-radius: 10px;
  width: 100%;
  padding: 1em;
`;

const Title = styled.h3`
  font-size: 1.5rem;
  margin: 0;
`;

const LevelNumber = styled.span`
  font-size: 1.5rem;
`;

const ActualLevelBar = styled.div`
  background-color: transparent;
  border: 1px solid black;
  border-radius: 10px;
  width: 100%;
  height: 2em;
`;

const LevelBarProgress = styled.div`
  background-color: blue;
  border-radius: 10px;
  width: 70%;
  height: 100%;
`;

export default function LevelProgressBar() {
  return (
    <Container>
      <Title>
        Level <LevelNumber>5</LevelNumber> Progress:
      </Title>
      <ActualLevelBar>
        <LevelBarProgress />
      </ActualLevelBar>
    </Container>
  );
}

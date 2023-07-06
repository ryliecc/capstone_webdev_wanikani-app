import styled from "styled-components";

const Container = styled.section`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  width: 90%;
  padding: 1em;
  background-color: #f4f4f4;
`;

const Title = styled.h3`
  font-size: 1.5rem;
  color: #333;
`;

const LevelNumber = styled.span`
  font-size: 1.5rem;
  color: #333;
`;

const ActualLevelBar = styled.div`
  background-color: #e0e0e0;
  border: 1px solid #333;
  border-radius: 36px;
  width: 100%;
  height: 2em;
`;

const LevelBarProgress = styled.div`
  background-color: #aa00ff;
  border-radius: 36px;
  width: 70%;
  height: 100%;
`;

export default function LevelProgressBar({ level }) {
  return (
    <Container>
      <Title>
        Level <LevelNumber>{level}</LevelNumber> Progress:
      </Title>
      <ActualLevelBar>
        <LevelBarProgress />
      </ActualLevelBar>
    </Container>
  );
}

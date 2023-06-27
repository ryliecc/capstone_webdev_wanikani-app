import SessionButtons from "./SessionButtons";
import LevelProgressBar from "./LevelProgressBar";
import SubjectsNavBar from "./SubjectsNavBar";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: gray;
`;

const Greeting = styled.p`
  font-size: 4rem;
  margin-bottom: 0;
  margin-top: 0;
`;

const Heading = styled.h2`
  font-size: 1.5rem;
`;

export default function Dashboard() {
  return (
    <Container>
      <Greeting>頑張って!</Greeting>
      <SessionButtons />
      <LevelProgressBar />
      <Heading>Overview:</Heading>
      <SubjectsNavBar />
    </Container>
  );
}

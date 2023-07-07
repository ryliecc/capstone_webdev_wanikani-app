import SessionButton from "./SessionButton";
import LevelProgressBar from "./LevelProgressBar";
import SubjectsNavBar from "./SubjectsNavBar";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1em;
  background-color: #ececec;
  padding: 0.5em;
  padding-bottom: 20em;
`;

const Greeting = styled.p`
  font-size: 4rem;
  background-color: #f4f4f4;
  border-radius: 5px;
  padding: 1rem;
  margin-top: 0.5em;
  color: #333;
`;

const Heading = styled.h2`
  font-size: 1.5rem;
  color: #333;
  background-color: #f4f4f4;
  border-radius: 5px;
  width: 90%;
  text-align: center;
  padding-bottom: 0.5em;
`;

export default function Dashboard() {
  return (
    <Container>
      <Greeting>頑張って!</Greeting>
      <SessionButton
        ButtonColor="#ff00aa"
        ButtonBorderColor="#cc0088"
        onClick={() => (window.location.href = "/lessonsession")}
        ButtonText="Lessons:"
        ButtonTextColor="#ffffff"
        summaryType="lessons"
      ></SessionButton>
      <SessionButton
        ButtonColor="#00aaff"
        ButtonBorderColor="#0088cc"
        onClick={() => (window.location.href = "/reviewsession")}
        ButtonText="Reviews:"
        ButtonTextColor="#ffffff"
        summaryType="reviews"
      ></SessionButton>
      <LevelProgressBar />
      <Heading>
        Overview:
        <SubjectsNavBar />
      </Heading>
    </Container>
  );
}

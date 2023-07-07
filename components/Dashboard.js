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
        SvgPath="M15 1v1h2v1h1v1h1v1h1v2h1v8h-1v2h-1v1h-1v1h-1v1h-2v1H7v-1H5v-1H4v-1H3v-1H2v-2H1V7h1V5h1V4h1V3h1V2h2V1h8M8 6v10h6v-2h-4V6H8Z"
      />
      <SessionButton
        ButtonColor="#00aaff"
        ButtonBorderColor="#0088cc"
        onClick={() => (window.location.href = "/reviewsession")}
        ButtonText="Reviews:"
        ButtonTextColor="#ffffff"
        summaryType="reviews"
        SvgPath="M15 1v1h2v1h1v1h1v1h1v2h1v8h-1v2h-1v1h-1v1h-1v1h-2v1H7v-1H5v-1H4v-1H3v-1H2v-2H1V7h1V5h1V4h1V3h1V2h2V1h8m-1 2H8v1H6v1H5v1H4v2H3v6h1v2h1v1h1v1h2v1h6v-1h2v-1h1v-1h1v-2h1V8h-1V6h-1V5h-1V4h-2V3M8 6h5v1h1v4h-1v2h1v3h-2v-2h-1v-2h-1v4H8V6m2 2v2h2V8h-2Z"
      />
      <LevelProgressBar />
      <Heading>
        Overview:
        <SubjectsNavBar />
      </Heading>
    </Container>
  );
}

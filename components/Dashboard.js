import SessionButtons from "./SessionButtons";
import SubjectsNavBar from "./SubjectsNavBar";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: gray;
`;

export default function Dashboard() {
  return (
    <Container>
      <SessionButtons />
      <SubjectsNavBar />
    </Container>
  );
}

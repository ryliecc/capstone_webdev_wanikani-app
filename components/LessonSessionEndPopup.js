import styled from "styled-components";
import { useRouter } from "next/router";

const Container = styled.div.attrs((props) => ({
  $visibility: props.$visibility,
}))`
  display: ${(props) => (props.$visibility ? "flex" : "none")};
  flex-direction: column;
  position: absolute;
  background-color: #fff;
  opacity: 0.95;
  border-radius: 10px;
  width: 85%;
  top: 7em;
  right: 7.5%;
  padding: 1.2em;
  box-shadow: 5px 5px 0 #e1e1e1;
`;

const Text = styled.p`
  font-size: 1em;
  margin: 0.4em 0;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 4em;
  margin-top: 0.6em;
`;

const DashboardButton = styled.button`
  width: 45%;
  border-radius: 10px;
  background-color: #f4f4f4;
  font-size: 1em;
  height: 100%;
  align-self: flex-start;
`;

const MoreLessonsButton = styled.button.attrs((props) => ({
  $visibility: props.$visibility,
}))`
  width: 45%;
  border-radius: 10px;
  background-color: #f4f4f4;
  font-size: 1em;
  height: 100%;
  display: ${(props) => (props.$visibility ? "box" : "none")};
`;

export default function LessonSessionEndPopup({ LessonIds, isPopupVisible }) {
  const router = useRouter();
  const isMore = LessonIds.length >= 6 ? true : false;
  const text = isMore
    ? "Congratulations! You finished your lessons. There is still more to learn. Do you want to continue or go back to the Dashboard?"
    : "Congratulations! You finished your lessons. There is nothing more to learn (for now). Go back to the Dashboard and maybe do some reviews.";

  function handleClickDashboard() {
    router.push("/dashboard");
  }
  function handleClickLessons() {
    router.reload();
  }

  return (
    <Container $visibility={isPopupVisible}>
      <Text>{text}</Text>
      <ButtonContainer>
        <DashboardButton onClick={handleClickDashboard}>
          Back to Dashboard
        </DashboardButton>
        <MoreLessonsButton onClick={handleClickLessons} $visibility={isMore}>
          Do more lessons!
        </MoreLessonsButton>
      </ButtonContainer>
    </Container>
  );
}

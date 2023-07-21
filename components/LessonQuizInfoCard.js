import styled from "styled-components";

const Container = styled.div.attrs((props) => ({
  $visibility: props.$visibility,
}))`
  display: ${(props) => (props.$visibility ? "block" : "none")};
`;

export default function LessonQuizInfoCard({ cardVisibility, subjectType }) {
  return (
    <Container $visibility={cardVisibility}>
      For the {subjectType} subject type has no Info Card been created yet.
    </Container>
  );
}

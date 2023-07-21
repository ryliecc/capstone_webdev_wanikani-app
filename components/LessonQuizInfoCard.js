import styled from "styled-components";
import RadicalQuizInfoCard from "./RadicalQuizInfoCard.js";

const BorderArrow = styled.div`
  width: 0;
  height: 0;
  border-left: 1.6em solid transparent;
  border-right: 1.6em solid transparent;
  border-bottom: 1.6em solid #f4f4f4;
  position: absolute;
  top: -1.5em;
  right: 68%;
`;

const ContentCard = styled.section.attrs((props) => ({
  $visibility: props.$visibility,
}))`
  background-color: #f4f4f4;
  box-shadow: 3px 3px 0 #e1e1e1;
  display: ${(props) => (props.$visibility ? "block" : "none")};
  width: 95%;
  position: relative;
  margin: 0.6em;
  margin-bottom: 2em;
  padding: 0.4em;
`;

export default function LessonQuizInfoCard({
  cardVisibility,
  currentQuizItem,
}) {
  const subjectType = currentQuizItem?.subjectType;

  function Content() {
    if (subjectType && subjectType === "Radical") {
      return <RadicalQuizInfoCard currentQuizItem={currentQuizItem} />;
    } else {
      return (
        "For the " +
        subjectType +
        " subject type has no Info Card been created yet."
      );
    }
  }
  return (
    <ContentCard $visibility={cardVisibility}>
      <BorderArrow />
      <Content />
    </ContentCard>
  );
}

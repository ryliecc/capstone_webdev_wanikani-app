import styled from "styled-components";

const CardContainer = styled.div`
  border: 1px solid black;
  background-color: props.color;
  width: 100%;
  display: flex;
  flex-direction: row;
`;

const MainContainer = styled.section`
  width: 75%;
  display: flex;
  flex-direction: column;
  background-color: transparent;
`;

const MainTitle = styled.h3`
  color: props.color;
  background-color: transparent;
`;

const MainContent = styled.p`
  background-color: transparent;
  color: props.color;
`;

const SidebarContainer = styled.section`
  border: none;
  border-left: 1px solid black;
  display: flex;
  flex-direction: column;
  background-color: transparent;
`;

const SidebarFirstTitle = styled.h3`
  color: props.color;
  background-color: transparent;
`;

const SidebarFirstContent = styled.p`
  background-color: transparent;
  color: props.color;
`;

const SidebarSecondTitle = styled.h3`
  color: props.color;
  background-color: transparent;
`;

const SidebarSecondContent = styled.p`
  background-color: transparent;
  color: props.color;
`;

export default function LessonMeaningCard({ backgroundColor, textColor }) {
  return (
    <>
      <CardContainer color={backgroundColor}>
        <MainContainer>
          <MainTitle color={textColor}>Meaning Explanation</MainTitle>
          <MainContent color={textColor}>
            おはよう is a casual way to say &quot;good morning.&quot; It can
            also be written in kanji, but hiragana is much more common.
          </MainContent>
        </MainContainer>
        <SidebarContainer>
          <SidebarFirstTitle color={textColor}>
            Other Meanings
          </SidebarFirstTitle>
          <SidebarFirstContent color={textColor}>Morning</SidebarFirstContent>
          <SidebarSecondTitle color={textColor}>Word Type</SidebarSecondTitle>
          <SidebarSecondContent color={textColor}>
            expression
          </SidebarSecondContent>
        </SidebarContainer>
      </CardContainer>
    </>
  );
}

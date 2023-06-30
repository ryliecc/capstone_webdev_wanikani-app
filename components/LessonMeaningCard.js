import styled from "styled-components";

const CardContainer = styled.div`
  background-color: #fafafa;
  margin: 0.8em;
  padding: 0.4em;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  height: 30em;
`;

const MainContainer = styled.section`
  width: 75%;
  display: flex;
  flex-direction: column;
  gap: 0.4em;
`;

const MainTitle = styled.h3`
  color: #333;
`;

const MainContent = styled.p`
  color: #333;
`;

const SidebarContainer = styled.section`
  border: none;
  border-left: 2px solid #333;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 0.2em;
  padding: 0.4em;
`;

const SidebarFirstTitle = styled.h3`
  color: #333;
  font-size: 1.2em;
`;

const SidebarFirstContent = styled.p`
  color: #333;
  font-size: 1em;
  margin-bottom: 1em;
`;

const SidebarSecondTitle = styled.h3`
  color: #333;
  font-size: 1.2em;
`;

const SidebarSecondContent = styled.p`
  color: #333;
  font-size: 1em;
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

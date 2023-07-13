import styled from "styled-components";

const CardContainer = styled.div`
  background-color: #fafafa;
  margin: 0.8em;
  padding: 0.4em;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  height: auto;
  padding-bottom: 2em;
`;

const MainContainer = styled.section`
  width: 75%;
  display: flex;
  flex-direction: column;
  gap: 0.4em;
  margin: 0.2em;
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
  margin: 0.2em;
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

export default function LessonMeaningCard({
  MeaningMnemonic,
  AlternativeMeanings,
  WordType,
}) {
  return (
    <>
      <CardContainer>
        <MainContainer>
          <MainTitle>Meaning Explanation</MainTitle>
          <MainContent>{MeaningMnemonic}</MainContent>
        </MainContainer>
        <SidebarContainer>
          <SidebarFirstTitle>Other Meanings</SidebarFirstTitle>
          <SidebarFirstContent>{AlternativeMeanings}</SidebarFirstContent>
          <SidebarSecondTitle>Word Type</SidebarSecondTitle>
          <SidebarSecondContent>{WordType}</SidebarSecondContent>
        </SidebarContainer>
      </CardContainer>
    </>
  );
}

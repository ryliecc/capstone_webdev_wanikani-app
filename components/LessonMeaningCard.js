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
            One morning, when Gregor Samsa woke from troubled dreams, he found
            himself transformed in his bed into a horrible vermin. He lay on his
            armour-like back, and if he lifted his head a little he could see
            his brown belly, slightly domed and divided by arches into stiff
            sections. The bedding was hardly able to cover it and seemed ready
            to slide off any moment. His many legs, pitifully thin compared with
            the size of the rest of him, waved about helplessly as he looked.
            "What's happened to me?" he thought. It wasn't a dream. His room, a
            proper human{" "}
          </MainContent>
        </MainContainer>
        <SidebarContainer>
          <SidebarFirstTitle color={textColor}>
            Other Meanings
          </SidebarFirstTitle>
          <SidebarFirstContent color={textColor}>
            One morning, when Gregor{" "}
          </SidebarFirstContent>
          <SidebarSecondTitle color={textColor}>Word Type</SidebarSecondTitle>
          <SidebarSecondContent color={textColor}>One</SidebarSecondContent>
        </SidebarContainer>
      </CardContainer>
    </>
  );
}

import styled from "styled-components";

const CardContainer = styled.div`
  border: 1px solid black;
  background-color: props.color;
  width: 100%;
  display: flex;
  flex-direction: row;
  visibility: props.visibility;
`;

export default function LessonContextCard(visibility, backgroundColor) {
  return (
    <CardContainer
      color={backgroundColor}
      visibility={visibility}
    ></CardContainer>
  );
}

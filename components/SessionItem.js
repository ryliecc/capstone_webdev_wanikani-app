import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 50%;
  background-color: props.color;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Item = styled.p`
  color: props.color;
  background-color: transparent;
  font-size: 3em;
  margin: 0;
`;

const ItemMeaning = styled.p`
  color: props.color;
  background-color: transparent;
  font-size: 1em;
`;

export default function SessionItem({
  backgroundColor,
  textColor,
  itemText,
  itemMeaningText,
  children,
}) {
  return (
    <Container color={backgroundColor}>
      {children}
      <Item color={textColor}>{itemText}</Item>
      <ItemMeaning color={textColor}>{itemMeaningText}</ItemMeaning>
    </Container>
  );
}

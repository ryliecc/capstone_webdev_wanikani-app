import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  background-color: props.color;
  display: flex;
  flex-direction: column;
`;

const Item = styled.p`
  color: props.color;
  background-color: transparent;
  font-size: 1.5em;
`;

const ItemMeaning = styled.p`
  color: props.color;
  background-color: transparent;
  font-size: 1em;
`;

export default function SessionItem(
  backgroundColor,
  textColor,
  ItemText,
  ItemMeaningText
) {
  return (
    <Container color={backgroundColor}>
      <Item color={textColor}>{ItemText}</Item>
      <ItemMeaning color={textColor}>{ItemMeaningText}</ItemMeaning>
    </Container>
  );
}

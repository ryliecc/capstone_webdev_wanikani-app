import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  background-color: props.color;
  height: 3em;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

const MenuItemSpan = styled.span`
  color: props.color;
  font-size: 1.5em;
`;

export default function SessionMenuBar({
  backgroundColor,
  textColor,
  menuItems,
}) {
  const MenuItemSpans = menuItems.map((item) => {
    return (
      <MenuItemSpan key={item.index} color={textColor}>
        {item}
      </MenuItemSpan>
    );
  });
  return <Container color={backgroundColor}>{MenuItemSpans}</Container>;
}

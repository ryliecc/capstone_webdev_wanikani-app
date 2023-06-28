import styled from "styled-components";

const ButtonElement = styled.button`
  border-radius: 24px;
  width: 70%;
  height: 5rem;
  background-color: props.color;
  display: grid;
  grid-template-areas: "svg text" "svg number";
  grid-template-columns: 1fr 1fr;
`;

const ButtonIllustration = styled.svg`
  grid-area: svg;
  xmlns: "http://www.w3.org/2000/svg";
  viewbox: "0 0 22 22";
  margin: 0;
  padding: 0;
`;

const ButtonTextSpan = styled.span`
  grid-area: text;
  color: var(--secondary-text-color);
`;

const ButtonNumberSpan = styled.span`
  grid-area: number;
  color: var(--secondary-text-color);
`;

export default function SessionButton({
  ButtonColor,
  ButtonText,
  ButtonNumber,
  SvgPath,
  onClick,
}) {
  return (
    <ButtonElement color={ButtonColor} onClick={onClick}>
      <ButtonIllustration>
        <path d={SvgPath} />
      </ButtonIllustration>
      <ButtonTextSpan>{ButtonText}</ButtonTextSpan>
      <ButtonNumberSpan>{ButtonNumber}</ButtonNumberSpan>
    </ButtonElement>
  );
}

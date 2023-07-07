import styled from "styled-components";
import useSummary from "../swr/useSummary.js";

const ButtonElement = styled.button.attrs((props) => ({
  type: "button",
  $color: props.$color,
  $bordercolor: props.$bordercolor,
}))`
  border: none;
  border-bottom: 3px solid ${(props) => props.$bordercolor};
  border-radius: 7px;
  width: 80%;
  height: 5rem;
  background-color: ${(props) => props.$color};
  display: grid;
  grid-template-areas: "svg svg" "text number";
  justify-content: space-evenly;
  padding: 0.5rem;
`;

const ButtonIllustration = styled.svg`
  grid-area: svg;
  xmlns: "http://www.w3.org/2000/svg";
  viewbox: "0 0 24 24";
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ButtonIllustrationPath = styled.path``;

const ButtonTextSpan = styled.span`
  grid-area: text;
  color: #ffffff;
  align-self: center;
  font-size: 1.5rem;
`;

const ButtonNumberSpan = styled.span.attrs((props) => ({
  $color: props.$color,
  $backgroundcolor: props.$backgroundcolor,
}))`
  grid-area: number;
  border-radius: 25px;
  background-color: ${(props) => props.$backgroundcolor};
  color: ${(props) => props.$color};
  width: 4rem;
  padding: 0.3em;
  margin-right: 0;
  font-size: 1.2rem;
`;

export default function SessionButton({
  ButtonColor,
  ButtonBorderColor,
  ButtonText,
  ButtonTextColor,
  SvgPath,
  onClick,
  summaryType,
}) {
  const { summary, isLoading, isError } = useSummary();
  if (isLoading) {
    return <div>...</div>;
  }
  if (isError) {
    return <div>Error</div>;
  }

  const ButtonNumber = summary && summary[summaryType][0].subject_ids.length;
  return (
    <ButtonElement
      $color={ButtonColor}
      $bordercolor={ButtonBorderColor}
      onClick={onClick}
    >
      <ButtonIllustration>
        <ButtonIllustrationPath d={SvgPath} />
      </ButtonIllustration>

      <ButtonTextSpan>{ButtonText}</ButtonTextSpan>
      <ButtonNumberSpan $color={ButtonColor} $backgroundcolor={ButtonTextColor}>
        {ButtonNumber}
      </ButtonNumberSpan>
    </ButtonElement>
  );
}

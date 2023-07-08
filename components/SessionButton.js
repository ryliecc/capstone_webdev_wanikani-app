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
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 0.5rem;
`;

const ButtonTextSpan = styled.span`
  color: #ffffff;
  align-self: center;
  font-size: 1.5rem;
`;

const ButtonNumberSpan = styled.span.attrs((props) => ({
  $color: props.$color,
  $backgroundcolor: props.$backgroundcolor,
}))`
  border-radius: 25px;
  background-color: ${(props) => props.$backgroundcolor};
  color: ${(props) => props.$color};
  width: 4rem;
  height: 2em;
  padding: 0.3em;
  margin-right: 0;
  font-size: 1.2rem;
`;

export default function SessionButton({
  ButtonColor,
  ButtonBorderColor,
  ButtonText,
  ButtonTextColor,
  onClick,
  summaryType,
  children,
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
      {children}
      <ButtonTextSpan>{ButtonText}</ButtonTextSpan>
      <ButtonNumberSpan $color={ButtonColor} $backgroundcolor={ButtonTextColor}>
        {ButtonNumber}
      </ButtonNumberSpan>
    </ButtonElement>
  );
}

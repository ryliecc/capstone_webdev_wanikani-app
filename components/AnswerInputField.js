import styled from "styled-components";
import ChevronRightSVG from "../src/heroicons/chevron-right.svg";
import { useState } from "react";

const AnswerFormContainer = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 1em;
`;

const AnswerForm = styled.form.attrs((props) => ({
  $backgroundcolor: props.$backgroundcolor,
}))`
  background-color: ${(props) => props.$backgroundcolor};
  display: flex;
  justify-content: stretch;
  width: 95%;
  height: 5em;
  box-shadow: 3px 3px 0 #e1e1e1;
  margin-bottom: 0.5em;
`;

const AnswerField = styled.input.attrs((props) => ({
  $color: props.$color,
}))`
  height: 100%;
  border: none;
  text-align: center;
  font-size: 1.5em;
  outline: none;
  color: ${(props) => props.$color};
`;

const EnterButton = styled.button`
  border: none;
  width: 5em;
  height: 100%;
  position: relative;
  right: 0.8em;
  margin-left: 0.8em;
`;

const EnterButtonImage = styled(ChevronRightSVG)`
  height: 2em;
  width: 100%;
  border: none;
`;

export default function AnswerInputField({
  placeholderText,
  validAnswerText,
  setIsHiddenWrong,
}) {
  const [inputFieldBackgroundColor, setInputFieldBackgroundColor] =
    useState("#f4f4f4");
  const [textColor, setTextColor] = useState("#333");

  function handleSubmitAnswer(event) {
    event.preventDefault();
    const answer = event.target.elements.answer.value;
    if (validAnswerText == answer) {
      setInputFieldBackgroundColor("#88cc00");
      setTextColor("#ffffff");
    } else {
      setInputFieldBackgroundColor("#ff0033");
      setTextColor("#ffffff");
      setIsHiddenWrong(false);
    }
  }

  return (
    <AnswerFormContainer>
      <AnswerForm
        onSubmit={handleSubmitAnswer}
        $backgroundcolor={inputFieldBackgroundColor}
      >
        <AnswerField
          placeholder={placeholderText}
          type="text"
          name="answer"
          autoComplete="off"
          autocapitalize="none"
          autocorrect="off"
          spellcheck="false"
          $color={textColor}
          autoFocus
        />
        <EnterButton>
          <EnterButtonImage />
        </EnterButton>
      </AnswerForm>
    </AnswerFormContainer>
  );
}

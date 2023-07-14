import styled from "styled-components";
import ChevronRightSVG from "../src/heroicons/chevron-right.svg";
import { useState } from "react";
import RomajiConverter from "../RomajiConverter/useRomajiConverter.js";

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
  expectedAnswerType,
  expectedAnswerText,
  setIsHiddenWrong,
  setIsHiddenInfo,
  setQuizItems,
  currentQuizItem,
  changeQuizItemIndexRandomly,
}) {
  const [inputFieldBackgroundColor, setInputFieldBackgroundColor] =
    useState("#f4f4f4");
  const [textColor, setTextColor] = useState("#333");
  const [quizStatus, setQuizStatus] = useState("not answered");

  function handleSubmitAnswer(event) {
    event.preventDefault();
    const answer = event.target.elements.answer.value;
    if (quizStatus === "answered correct") {
      setQuizStatus("not answered");
      setIsHiddenInfo(true);
      setQuizItems((prevQuizItems) =>
        prevQuizItems.filter((item) => item.id !== currentQuizItem.id)
      );
      setTextColor("#333");
      setInputFieldBackgroundColor("f4f4f4");
      event.target.elements.answer.value = "";
    } else if (quizStatus === "answered wrong") {
      setQuizStatus("not answered");
      setIsHiddenInfo(true);
      setIsHiddenWrong(true);
      setTextColor("#333");
      setInputFieldBackgroundColor("f4f4f4");
      event.target.elements.answer.value = "";
      setQuizItems((prevQuizItems) => {
        const updatedQuizItems = prevQuizItems.filter(
          (item) => item.id !== currentQuizItem.id
        );
        updatedQuizItems.push(currentQuizItem);
        return updatedQuizItems;
      });
      changeQuizItemIndexRandomly();
    } else if (expectedAnswerText && expectedAnswerText.includes(answer)) {
      setInputFieldBackgroundColor("#88cc00");
      setTextColor("#ffffff");
      setQuizStatus("answered correct");
    } else {
      setInputFieldBackgroundColor("#ff0033");
      setTextColor("#ffffff");
      setIsHiddenWrong(false);
      setQuizStatus("answered wrong");
    }
  }

  function handleChangeAnswerField(event) {
    if (expectedAnswerType === "Reading") {
      const RomajiInput = event.target.value;

      if (RomajiInput.slice(-2) === "nn") {
        event.target.value = RomajiInput.slice(0, -2) + "ん";
      } else if (RomajiInput.slice(-1) === "n") {
        return null;
      } else {
        const HiraganaOutput = RomajiConverter(RomajiInput);
        event.target.value = HiraganaOutput;
      }
    } else {
      return null;
    }
  }

  const placeholderText = () => {
    if (expectedAnswerType === "Reading") {
      return "答え";
    } else {
      return "Your answer";
    }
  };

  return (
    <AnswerFormContainer>
      <AnswerForm
        onSubmit={handleSubmitAnswer}
        $backgroundcolor={inputFieldBackgroundColor}
      >
        <AnswerField
          placeholder={placeholderText()}
          type="text"
          name="answer"
          autoComplete="off"
          autocapitalize="none"
          autocorrect="off"
          spellcheck="false"
          $color={textColor}
          onChange={handleChangeAnswerField}
          autoFocus
        />
        <EnterButton>
          <EnterButtonImage />
        </EnterButton>
      </AnswerForm>
    </AnswerFormContainer>
  );
}

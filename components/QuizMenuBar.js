import styled from "styled-components";
import AnswerInputField from "./AnswerInputField.js";
import LessonQuizAdditionalContent from "./LessonQuizAdditionalContent.js";
import LessonSessionEndPopup from "./LessonSessionEndPopup.js";
import { useState } from "react";

const Container = styled.div`
  width: 100%;
  background-color: #ececec;
  height: 3em;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 0.6em;
  align-items: center;
  padding-left: 0.3em;
  padding-right: 0.3em;
`;

const ObjectSpan = styled.span`
  font-size: 1.8em;
  font-weight: thin;
  color: #333;
`;

const CategorySpan = styled.span`
  font-size: 1.8em;
  font-weight: bold;
  color: #333;
`;

export default function QuizMenuBar({
  LessonIds,
  currentQuizItem,
  quizItems,
  setQuizItems,
  changeQuizItemIndexRandomly,
}) {
  const [isHiddenWrong, setIsHiddenWrong] = useState(true);
  const [isHiddenInfo, setIsHiddenInfo] = useState(true);
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const SubjectType = currentQuizItem?.subjectType;
  const ExpectedAnswerType = currentQuizItem?.expectedAnswerType;
  const ExpectedAnswerText = currentQuizItem?.expectedAnswer;
  return (
    <>
      <Container>
        <ObjectSpan>{SubjectType}</ObjectSpan>
        <CategorySpan>{ExpectedAnswerType}</CategorySpan>
      </Container>
      <AnswerInputField
        expectedAnswerType={ExpectedAnswerType}
        expectedAnswerText={ExpectedAnswerText}
        setIsHiddenWrong={setIsHiddenWrong}
        setIsHiddenInfo={setIsHiddenInfo}
        quizItems={quizItems}
        setQuizItems={setQuizItems}
        currentQuizItem={currentQuizItem}
        changeQuizItemIndexRandomly={changeQuizItemIndexRandomly}
        setIsPopupVisible={setIsPopupVisible}
      />
      <LessonSessionEndPopup
        isPopupVisible={isPopupVisible}
        LessonIds={LessonIds}
      />
      <LessonQuizAdditionalContent
        isHiddenWrong={isHiddenWrong}
        setIsHiddenWrong={setIsHiddenWrong}
        SubjectType={SubjectType}
        isHiddenInfo={isHiddenInfo}
        setIsHiddenInfo={setIsHiddenInfo}
      />
    </>
  );
}

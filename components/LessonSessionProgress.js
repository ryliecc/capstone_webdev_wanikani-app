import styled from "styled-components";

const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.4em;
  height: 100%;
  align-content: flex-end;
  flex-wrap: wrap;
`;
const FirstDot = styled.div`
  height: 1.4em;
  width: 1.4em;
  border: 0.1em solid #333;
  border-radius: 50%;
  background-color: #333;
`;
const SecondDot = styled.div.attrs((props) => ({
  $backgroundcolor: props.$backgroundcolor,
}))`
  height: 1.4em;
  width: 1.4em;
  border: 0.1em solid #333;
  border-radius: 50%;
  background-color: ${(props) => props.$backgroundcolor};
`;
const ThirdDot = styled.div.attrs((props) => ({
  $backgroundcolor: props.$backgroundcolor,
}))`
  height: 1.4em;
  width: 1.4em;
  border: 0.1em solid #333;
  border-radius: 50%;
  background-color: ${(props) => props.$backgroundcolor};
`;
const FourthDot = styled.div.attrs((props) => ({
  $backgroundcolor: props.$backgroundcolor,
}))`
  height: 1.4em;
  width: 1.4em;
  border: 0.1em solid #333;
  border-radius: 50%;
  background-color: ${(props) => props.$backgroundcolor};
`;
const FifthDot = styled.div.attrs((props) => ({
  $backgroundcolor: props.$backgroundcolor,
}))`
  height: 1.4em;
  width: 1.4em;
  border: 0.1em solid #333;
  border-radius: 50%;
  background-color: ${(props) => props.$backgroundcolor};
`;
const QuizIcon = styled.div`
  border-radius: 5px;
  background-color: #34d399;
  color: #fff;
  font-size: 1.4em;
  padding: 0.2em 0.4em;
`;

export default function LessonSessionProgress({ currentLessonIndex }) {
  return (
    <Container>
      <FirstDot />
      <SecondDot
        $backgroundcolor={currentLessonIndex >= 1 ? "#333" : "transparent"}
      />
      <ThirdDot
        $backgroundcolor={currentLessonIndex >= 2 ? "#333" : "transparent"}
      />
      <FourthDot
        $backgroundcolor={currentLessonIndex >= 3 ? "#333" : "transparent"}
      />
      <FifthDot
        $backgroundcolor={currentLessonIndex >= 4 ? "#333" : "transparent"}
      />
      <QuizIcon>Quiz</QuizIcon>
    </Container>
  );
}

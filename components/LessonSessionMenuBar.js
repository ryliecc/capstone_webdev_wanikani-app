import LessonKanaVocabularyMenuBar from "./LessonKanaVocabMenuBar";
import LessonVocabularyMenuBar from "./LessonVocabMenuBar";
import LessonRadicalMenuBar from "./LessonRadicalMenuBar";
import LessonKanjiMenuBar from "./LessonKanjiMenuBar";
import QuizMenuBar from "./QuizMenuBar";

export default function LessonSessionMenuBar({
  LessonIds,
  currentLesson,
  currentLessonIndex,
  setCurrentLessonIndex,
  currentLessonPart,
  setCurrentLessonPart,
  startQuizSession,
  currentQuizItem,
  quizItems,
  setQuizItems,
  changeQuizItemIndexRandomly,
}) {
  if (currentLessonPart === "quiz") {
    return (
      <QuizMenuBar
        LessonIds={LessonIds}
        currentQuizItem={currentQuizItem}
        quizItems={quizItems}
        setQuizItems={setQuizItems}
        changeQuizItemIndexRandomly={changeQuizItemIndexRandomly}
      />
    );
  }
  if (currentLesson && currentLesson.object === "kana_vocabulary") {
    return (
      <LessonKanaVocabularyMenuBar
        currentLesson={currentLesson}
        currentLessonIndex={currentLessonIndex}
        setCurrentLessonIndex={setCurrentLessonIndex}
        setCurrentLessonPart={setCurrentLessonPart}
        startQuizSession={startQuizSession}
      />
    );
  } else if (currentLesson && currentLesson.object === "vocabulary") {
    return (
      <LessonVocabularyMenuBar
        currentLesson={currentLesson}
        currentLessonIndex={currentLessonIndex}
        setCurrentLessonIndex={setCurrentLessonIndex}
        setCurrentLessonPart={setCurrentLessonPart}
        startQuizSession={startQuizSession}
      />
    );
  } else if (currentLesson && currentLesson.object === "radical") {
    return (
      <LessonRadicalMenuBar
        currentLesson={currentLesson}
        currentLessonIndex={currentLessonIndex}
        setCurrentLessonIndex={setCurrentLessonIndex}
        setCurrentLessonPart={setCurrentLessonPart}
        startQuizSession={startQuizSession}
      />
    );
  }
  return (
    <>
      <LessonKanjiMenuBar
        currentLesson={currentLesson}
        currentLessonIndex={currentLessonIndex}
        setCurrentLessonIndex={setCurrentLessonIndex}
        setCurrentLessonPart={setCurrentLessonPart}
        startQuizSession={startQuizSession}
      />
    </>
  );
}

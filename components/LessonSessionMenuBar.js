import LessonKanaVocabularyMenuBar from "./LessonKanaVocabMenuBar";
import LessonVocabularyMenuBar from "./LessonVocabMenuBar";
import LessonRadicalMenuBar from "./LessonRadicalMenuBar";
import LessonKanjiMenuBar from "./LessonKanjiMenuBar";
import QuizMenuBar from "./QuizMenuBar";

export default function LessonSessionMenuBar({
  currentLesson,
  currentLessonIndex,
  setCurrentLessonIndex,
  currentLessonPart,
  setCurrentLessonPart,
  currentQuizItem,
}) {
  if (currentLessonPart === "quiz") {
    return <QuizMenuBar currentQuizItem={currentQuizItem} />;
  }
  if (currentLesson && currentLesson.object === "kana_vocabulary") {
    return (
      <LessonKanaVocabularyMenuBar
        currentLesson={currentLesson}
        currentLessonIndex={currentLessonIndex}
        setCurrentLessonIndex={setCurrentLessonIndex}
        setCurrentLessonPart={setCurrentLessonPart}
      />
    );
  } else if (currentLesson && currentLesson.object === "vocabulary") {
    return (
      <LessonVocabularyMenuBar
        currentLesson={currentLesson}
        currentLessonIndex={currentLessonIndex}
        setCurrentLessonIndex={setCurrentLessonIndex}
        setCurrentLessonPart={setCurrentLessonPart}
      />
    );
  } else if (currentLesson && currentLesson.object === "radical") {
    return (
      <LessonRadicalMenuBar
        currentLesson={currentLesson}
        currentLessonIndex={currentLessonIndex}
        setCurrentLessonIndex={setCurrentLessonIndex}
        setCurrentLessonPart={setCurrentLessonPart}
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
      />
    </>
  );
}

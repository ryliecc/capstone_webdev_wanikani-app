import LessonKanaVocabularyMenuBar from "./LessonKanaVocabMenuBar";
import LessonVocabularyMenuBar from "./LessonVocabMenuBar";

export default function LessonSessionMenuBar({
  currentLesson,
  currentLessonIndex,
  setCurrentLessonIndex,
}) {
  if (currentLesson && currentLesson.object === "kana_vocabulary") {
    return (
      <LessonKanaVocabularyMenuBar
        currentLesson={currentLesson}
        currentLessonIndex={currentLessonIndex}
        setCurrentLessonIndex={setCurrentLessonIndex}
      />
    );
  }
  if (currentLesson && currentLesson.object === "vocabulary") {
    return (
      <LessonVocabularyMenuBar
        currentLesson={currentLesson}
        currentLessonIndex={currentLessonIndex}
        setCurrentLessonIndex={setCurrentLessonIndex}
      />
    );
  }
  return <div>For this object type is no MenuBar available yet.</div>;
}

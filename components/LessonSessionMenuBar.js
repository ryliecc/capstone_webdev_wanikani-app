import LessonKanaVocabularyMenuBar from "./LessonKanaVocabMenuBar";
import LessonVocabularyMenuBar from "./LessonVocabMenuBar";
import LessonRadicalMenuBar from "./LessonRadicalMenuBar";
import LessonKanjiMenuBar from "./LessonKanjiMenuBar";

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
  } else if (currentLesson && currentLesson.object === "vocabulary") {
    return (
      <LessonVocabularyMenuBar
        currentLesson={currentLesson}
        currentLessonIndex={currentLessonIndex}
        setCurrentLessonIndex={setCurrentLessonIndex}
      />
    );
  } else if (currentLesson && currentLesson.object === "radical") {
    return (
      <LessonRadicalMenuBar
        currentLesson={currentLesson}
        currentLessonIndex={currentLessonIndex}
        setCurrentLessonIndex={setCurrentLessonIndex}
      />
    );
  }
  return (
    <>
      <LessonKanjiMenuBar
        currentLesson={currentLesson}
        currentLessonIndex={currentLessonIndex}
        setCurrentLessonIndex={setCurrentLessonIndex}
      />
    </>
  );
}

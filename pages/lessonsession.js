import LessonSessionItem from "../components/LessonSessionItem.js";
import LessonSessionMenuBar from "../components/LessonSessionMenuBar.js";
import LessonSessionProgress from "../components/LessonSessionProgress.js";
import useSummary from "../swr/useSummary.js";
import useSubjects from "../swr/useSubjects.js";
import { useState } from "react";

export default function LessonSessionPage() {
  const [currentLessonIndex, setCurrentLessonIndex] = useState(0);
  const { summary } = useSummary();
  const LessonIds = summary?.lessons[0]?.subject_ids;
  const { subjects, isLoading, isError } = useSubjects(
    LessonIds && "?ids=" + LessonIds.join(",")
  );
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error fetching...</div>;
  }

  const OrderedLessons =
    subjects?.sort((a, b) => {
      return a.data.level - b.data.level;
    }) || [];

  const CurrentLesson = OrderedLessons && OrderedLessons[currentLessonIndex];
  return (
    <>
      <LessonSessionItem currentLesson={CurrentLesson} LessonIds={LessonIds} />
      <LessonSessionMenuBar
        currentLesson={CurrentLesson}
        currentLessonIndex={currentLessonIndex}
        setCurrentLessonIndex={setCurrentLessonIndex}
      />
      <LessonSessionProgress currentLessonIndex={currentLessonIndex} />
    </>
  );
}

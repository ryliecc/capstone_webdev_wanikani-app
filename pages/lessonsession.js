import LessonSessionItem from "../components/LessonSessionItem.js";
import LessonSessionMenuBar from "../components/LessonSessionMenuBar.js";

export default function LessonSessionPage() {
  return (
    <>
      <LessonSessionItem itemText="おはよう" itemMeaningText="Good Morning" />
      <LessonSessionMenuBar />
    </>
  );
}

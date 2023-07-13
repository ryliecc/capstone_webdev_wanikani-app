import LessonSessionItem from "../components/LessonSessionItem.js";
import LessonSessionMenuBar from "../components/LessonSessionMenuBar.js";
import useSummary from "../swr/useSummary.js";

export default function LessonSessionPage() {
  const { summary, isLoading, isError } = useSummary();
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
  }
  const LessonIds = summary?.lessons[0].subject_ids;
  return (
    <>
      <LessonSessionItem itemText="おはよう" itemMeaningText="Good Morning" />
      <LessonSessionMenuBar />
    </>
  );
}

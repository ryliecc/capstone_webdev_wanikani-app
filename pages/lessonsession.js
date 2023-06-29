import HomeButton from "../components/HomeButton.js";
import SessionItem from "../components/SessionItem.js";
import LessonSessionMenuBar from "../components/LessonSessionMenuBar.js";

export default function LessonSessionPage() {
  return (
    <>
      <SessionItem itemText="おはよう" itemMeaningText="Good Morning">
        <HomeButton />
      </SessionItem>
      <LessonSessionMenuBar />
    </>
  );
}

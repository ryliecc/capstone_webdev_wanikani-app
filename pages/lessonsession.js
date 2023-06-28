import HomeButton from "../components/HomeButton.js";
import SessionItem from "../components/SessionItem.js";

export default function LessonSessionPage() {
  return (
    <>
      <SessionItem
        backgroundColor="black"
        textColor="white"
        itemText="おはよう"
        itemMeaningText="Good Morning"
      >
        <HomeButton />
      </SessionItem>

      <h1>Lesson Session</h1>
    </>
  );
}

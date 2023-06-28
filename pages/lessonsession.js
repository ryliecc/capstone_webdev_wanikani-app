import HomeButton from "../components/HomeButton.js";
import SessionItem from "../components/SessionItem.js";
import SessionMenuBar from "../components/SessionMenuBar.js";

export default function LessonSessionPage() {
  const menuItems = ["Meaning", "Context"];
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
      <SessionMenuBar
        backgroundColor="white"
        textColor="black"
        menuItems={menuItems}
      />
    </>
  );
}

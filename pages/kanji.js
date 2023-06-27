import FullKanjiList from "../components/FullKanjiList.js";
import AppHeader from "../components/AppHeader.js";
import SubjectsNavBar from "../components/SubjectsNavBar.js";

export default function KanjiPage() {
  return (
    <>
      <AppHeader />
      <SubjectsNavBar />
      <FullKanjiList />
    </>
  );
}

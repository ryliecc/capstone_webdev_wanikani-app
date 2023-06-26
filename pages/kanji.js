import FullKanjiList from "../components/FullKanjiList.js";
import AppHeader from "../components/AppHeader.js";
import CollectionNavBar from "../components/CollectionNavBar.js";

export default function KanjiPage() {
  return (
    <>
      <AppHeader />
      <CollectionNavBar />
      <FullKanjiList />
    </>
  );
}

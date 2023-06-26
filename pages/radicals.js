import FullRadicalList from "../components/FullRadicalList.js";
import AppHeader from "../components/AppHeader.js";
import CollectionNavBar from "../components/CollectionNavBar.js";

export default function RadicalsPage() {
  return (
    <>
      <AppHeader />
      <CollectionNavBar />
      <FullRadicalList />
    </>
  );
}

import VocabularyList from "../components/VocabList.js";
import AppHeader from "../components/AppHeader.js";
import CollectionNavBar from "../components/CollectionNavBar.js";

export default function VocabularyPage() {
  return (
    <>
      <AppHeader />
      <CollectionNavBar />
      <VocabularyList />
    </>
  );
}

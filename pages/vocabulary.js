import VocabularyList from "../components/VocabList.js";
import AppHeader from "../components/AppHeader.js";
import SubjectsNavBar from "../components/SubjectsNavBar.js";

export default function VocabularyPage() {
  return (
    <>
      <AppHeader />
      <SubjectsNavBar />
      <VocabularyList />
    </>
  );
}

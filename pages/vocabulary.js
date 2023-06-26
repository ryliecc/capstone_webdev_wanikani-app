import VocabularyList from "../components/VocabList.js";

export default function VocabularyPage() {
  return (
    <>
      <a href="/">Home</a>
      <a href="/radicals">Radicals</a>
      <a href="/kanji">Kanji</a>
      <VocabularyList />
    </>
  );
}

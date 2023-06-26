import VocabularyList from "@/components/VocabList.js";

export default function HomePage() {
  return (
    <>
      <VocabularyList />

      <a href="/radicals">Radicals</a>
      <a href="/kanji">Kanji</a>
    </>
  );
}

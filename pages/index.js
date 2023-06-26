import VocabularyList from "@/components/VocabList.js";
import FullKanjiList from "@/components/FullKanjiList";
import FullRadicalList from "@/components/FullRadicalList.js";

export default function HomePage() {
  return (
    <>
      <VocabularyList />

      <a href="/radicals">Radicals</a>
      <a href="/kanji">Kanji</a>
    </>
  );
}

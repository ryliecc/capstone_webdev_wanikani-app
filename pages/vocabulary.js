import VocabularyList from "../components/VocabList.js";
import Link from "next/link.js";

export default function VocabularyPage() {
  return (
    <>
      <Link href="/">Home</Link>
      <Link href="/radicals">Radicals</Link>
      <Link href="/kanji">Kanji</Link>
      <VocabularyList />
    </>
  );
}

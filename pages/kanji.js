import FullKanjiList from "../components/FullKanjiList.js";

export default function KanjiPage() {
  return (
    <>
      <a href="/">Home</a>
      <a href="/radicals">Radicals</a>
      <a href="/vocabulary">Vocabulary</a>
      <FullKanjiList />
    </>
  );
}

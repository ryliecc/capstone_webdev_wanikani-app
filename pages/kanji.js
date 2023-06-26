import FullKanjiList from "../components/FullKanjiList.js";
import Link from "next/link";

export default function KanjiPage() {
  return (
    <>
      <Link href="/">Home</Link>
      <Link href="/radicals">Radicals</Link>
      <Link href="/vocabulary">Vocabulary</Link>
      <FullKanjiList />
    </>
  );
}

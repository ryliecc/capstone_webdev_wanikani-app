import FullRadicalList from "../components/FullRadicalList.js";
import Link from "next/link";

export default function RadicalsPage() {
  return (
    <>
      <Link href="/">Home</Link>
      <Link href="/kanji">Kanji</Link>
      <Link href="/vocabulary">Vocabulary</Link>
      <FullRadicalList />
    </>
  );
}

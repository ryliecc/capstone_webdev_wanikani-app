import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <Link href="/radicals">Radicals</Link>
      <Link href="/kanji">Kanji</Link>
      <Link href="/vocabulary">Vocabulary</Link>
    </>
  );
}

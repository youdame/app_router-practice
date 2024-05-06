import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1 style={{ color: "white", textAlign: "center" }}>
        Time to get started!
      </h1>
      <Link href="meals/1">세부 페이지</Link>
      <Link href="meals/share">공유 페이지</Link>
      <Link href="meals">meals 페이지</Link>
    </main>
  );
}

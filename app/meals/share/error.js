"use client";
export default function error({ error }) {
  console.log(error);
  return (
    <main className="error">
      <h1>에러 발생~</h1>
      <p>음식 생성 실패</p>
    </main>
  );
}

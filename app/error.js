"use client";
export default function error({ error }) {
  console.log(error);
  return (
    <main className="error">
      <h1>에러 발생~</h1>
      {/* <p>{error}</p> */}
    </main>
  );
}

import Link from "next/link";

// 모든 페이지 컴포넌트는 prop으로 params라는 프로퍼티를 가지며, 이는 nextjs에서 설정해둔 값임
// 이 안에는 동적 라우터에 설정해둔 값이 들어가 있음
export default function BlogPostPage({ params }) {
  console.log(params);
  return (
    <main>
      <h1>Blog Post</h1>
      <p> {params.slug}</p>
    </main>
  );
}

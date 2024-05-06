// 이곳에 global css를 임포트해두면 모든 페이지에서 사용 가능함
import "./globals.css";

// 같은 app 폴더에 있는 icon.png 파일은 이 곳에서 파비콘 역할을 함 -> 이것도 정해져있는 파일 이름임
// <head></head> 들어갈 내용이 이곳에서 정의되며, metadata라는 이름도 nextjs에서 지정되어있음
export const metadata = {
  title: "NextJS Course App",
  description: "Your first NextJS app!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* 현재 활성화된 페이지의 내용 
      즉, layout.js가 page.js를 감싸는 형식 */}
      <body>{children}</body>
    </html>
  );
}

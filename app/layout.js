import MainHeader from "@/components/MainHeader/Header/Header";
import "./globals.css";
import HeaderBackground from "@/components/MainHeader/HeaderBackground/HeaderBackground";

export const metadata = {
  title: "NextLevel Food",
  description: "Delicious meals, shared by a food-loving community.",
};

// 루트 레이아웃은 항상 활성화 되어있으며 하위 폴더들에 layout.js가 존재한다면 중첩되어 동작함

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <MainHeader />
        {children}
      </body>
    </html>
  );
}

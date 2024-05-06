import Link from "next/link";
import LogoImg from "@/assets/logo.png";
import Image from "next/image";
import styles from "./Header.module.css";
import HeaderBackground from "../HeaderBackground/HeaderBackground";
export default function MainHeader() {
  return (
    <>
      <HeaderBackground />
      <header className={styles.header}>
        <Link className={styles.logo} href="/">
          {/* nextjs에서 import 해서 이미지를 사용할 경우 .src로 접근해야함 그 이유는 src 프로퍼티에 src 값이 저장되기 때문 */}
          {/* <img src={LogoImg.src} alt="음식 접시" /> */}
          <Image src={LogoImg} priority alt="음식 접시" />
          NextLevel Food
        </Link>
        <nav className={styles.nav}>
          <ul>
            <li>
              <Link href="/meals"> Browse Meals</Link>
            </li>
            <li>
              <Link href="/community"> Foodies Community</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

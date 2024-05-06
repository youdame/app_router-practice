import MealsGrid from "@/components/Meals/MealsGrid";
import styles from "./page.module.css";
import Link from "next/link";
export default function MealsPage() {
  return (
    <>
      <header className={styles.header}>
        <p className={styles.cta}>
          <Link href="/meals/share"> Share Your Favorite Recipe</Link>{" "}
        </p>
      </header>
      <main className={styles.main}>
        <MealsGrid meals={[]} />
      </main>
    </>
  );
}

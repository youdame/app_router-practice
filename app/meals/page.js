import MealsGrid from "@/components/Meals/MealsGrid";
import styles from "./page.module.css";
import Link from "next/link";
import { getMeals } from "@/lib/meal";
import { Suspense } from "react";

async function Meals() {
  const meals = await getMeals();
  return <MealsGrid meals={meals} />;
}

export default function MealsPage() {
  return (
    <>
      <header className={styles.header}>
        <p className={styles.cta}>
          <Link href="/meals/share"> Share Your Favorite Recipe</Link>
        </p>
      </header>
      <main className={styles.main}>
        <Suspense fallback={<p className={styles.loading}>Fetching meals</p>}>
          <Meals />
        </Suspense>
      </main>
    </>
  );
}

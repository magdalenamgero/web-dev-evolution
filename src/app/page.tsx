import Link from "next/link";
import Card from "@/components/card/Card";
import styles from "./page.module.scss";
import { MAIN_CARDS } from "@/data/content";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Welcome to Web Development</h1>

      <div className={styles.cardSpread}>
        {MAIN_CARDS.map((card) => (
          <Link href={card.href} key={card.title} className={styles.cardLink}>
            <Card title={card.title} description={card.description} />
          </Link>
        ))}
      </div>
    </main>
  );
}

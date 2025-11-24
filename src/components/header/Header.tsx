"use client";

import Link from "next/link";
import styles from "./Header.module.scss";
import { useState } from "react";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  function setMenuOpen(updater: (open: boolean) => boolean): void {
    setIsOpen(updater);
  }
  return (
    <header className={styles.header}>
      <Link href="/" className={styles.logo}>
        Web Dev Evolution
      </Link>
      <nav className={`${styles.nav} ${isOpen ? styles.open : ""}`}>
        <Link href="/" className={styles.navLink}>
          Home
        </Link>
        <Link href="/html" className={styles.navLink}>
          HTML
        </Link>
        <Link href="/css" className={styles.navLink}>
          CSS
        </Link>
        <Link href="/javascript" className={styles.navLink}>
          JavaScript
        </Link>
      </nav>
      <button
        className={styles.hamburger}
        onClick={() => setMenuOpen((open) => !open)}
        aria-label="Toggle menu"
      >
        <span />
        <span />
        <span />
      </button>
    </header>
  );
};

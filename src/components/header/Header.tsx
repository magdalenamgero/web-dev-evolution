"use client";

import Link from "next/link";
import styles from "./Header.module.scss";
import { usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const navRef = useRef<HTMLDivElement>(null);

  function setMenuOpen(updater: (open: boolean) => boolean): void {
    setIsOpen(updater);
  }

  const handleClickOutside = (event: Event) => {
    if (navRef.current && !navRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside); // For touch devices
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, []);

  return (
    <header className={styles.header}>
      <Link href="/" className={styles.logo}>
        Web Dev Evolution
      </Link>
      <nav
        ref={navRef}
        className={`${styles.nav} ${isOpen ? styles.open : ""}`}
      >
        <Link
          href="/"
          className={`${styles.navLink} ${pathname === "/" ? styles.active : ""}`}
        >
          Home
        </Link>
        <Link
          href="/html"
          className={`${styles.navLink} ${pathname === "/html" ? styles.active : ""}`}
        >
          HTML
        </Link>
        <Link
          href="/css"
          className={`${styles.navLink} ${pathname === "/css" ? styles.active : ""}`}
        >
          CSS
        </Link>
        <Link
          href="/javascript"
          className={`${styles.navLink} ${pathname === "/javascript" ? styles.active : ""}`}
        >
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

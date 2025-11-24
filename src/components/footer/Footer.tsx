"use client";

import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>
        © 2025 Web Dev Evolution —{" "}
        <a href="https://github.com/magdalenamgero" className={styles.link}>
          Magdalena Gero
        </a>
      </p>
    </footer>
  );
}

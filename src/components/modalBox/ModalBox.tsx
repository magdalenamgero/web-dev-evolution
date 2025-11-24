"use client";

import { motion } from "framer-motion";
import styles from "./ModalBox.module.scss";

export default function ModalBox({
  title,
  text,
  desc,
  image,
  code,
  onClose,
}: {
  title: string;
  text: string;
  desc?: string;
  image?: string;
  code?: string;
  onClose: () => void;
}) {
  return (
    <motion.div
      className={styles.modalOverlay}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className={styles.modalBox}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
      >
        <button className={styles.closeBtn} onClick={onClose}>
          ×
        </button>

        <h2>{title}</h2>
        <p>{text}</p>
        <div className={styles.modalContent}>
          {desc && (
            <div className={styles.desc}>
              <p>{desc}</p>
            </div>
          )}
        </div>
        <div className={styles.modalContent}>
          {image && (
            <div className={styles.imageWrapper}>
              <img src={image} alt={title} />
            </div>
          )}

          {code && (
            <pre className={styles.codeBlock}>
              <code>{code}</code>
            </pre>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

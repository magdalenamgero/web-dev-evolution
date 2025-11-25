"use client";

import { motion } from "framer-motion";
import styles from "./ModalBox.module.scss";
import { useState } from "react";
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
  const [imgLoaded, setImgLoaded] = useState(false);

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

        {desc && (
          <div className={styles.modalContent}>
            <div className={styles.desc}>
              <p>{desc}</p>
            </div>
          </div>
        )}

        <div className={styles.modalContent}>
          {image && (
            <div className={styles.imageWrapper}>
              {!imgLoaded && (
                <div className={styles.spinnerWrapper}>
                  <div className={styles.spinner}></div>
                </div>
              )}

              <img
                src={image}
                alt={title}
                style={{
                  display: imgLoaded ? "block" : "none",
                }}
                onLoad={() => setImgLoaded(true)}
              />
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

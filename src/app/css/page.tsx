"use client";

import TimelineItem from "@/components/timelineitem/TimelineItem";
import styles from "../page.module.scss";
import { TIMELINE_DATA } from "@/data/content";
import ModalBox from "@/components/modalBox/ModalBox";
import { useState } from "react";
import CssAbout from "./CssAbout";

export default function CssPage() {
  interface TimelineItemData {
    year: string;
    title: string;
    description?: string;
    image?: string;
    code?: string;
    desc?: string;
  }

  const [selectedItem, setSelectedItem] = useState<TimelineItemData | null>(
    null,
  );

  const handleItemClick = (item: TimelineItemData) => {
    setSelectedItem(item);
  };

  const handleCloseModal = () => {
    setSelectedItem(null);
  };

  return (
    <main className={styles.main}>
      <h1 className={styles.subtitle}>CSS – Styling the Web</h1>

      <div className={styles.timeline}>
        {TIMELINE_DATA.css.map((item) => (
          <div
            key={item.year}
            onClick={() => handleItemClick(item)}
            style={{ cursor: "pointer" }}
          >
            <TimelineItem key={item.year} year={item.year} title={item.title} />
          </div>
        ))}
      </div>

      {selectedItem && (
        <ModalBox
          title={selectedItem.title}
          text={selectedItem.description || ""}
          desc={selectedItem.desc || ""}
          image={selectedItem.image}
          code={selectedItem.code}
          onClose={handleCloseModal}
        />
      )}
      <CssAbout />
    </main>
  );
}

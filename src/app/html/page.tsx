"use client";

import TimelineItem from "@/components/timelineitem/TimelineItem";
import styles from "../page.module.scss";
import { TIMELINE_DATA } from "@/data/content";
import ModalBox from "@/components/modalBox/ModalBox";
import { useState } from "react";
import HtmlAbout from "./HtmlAbout";

export default function HtmlPage() {
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
      <h1 className={styles.subtitle}>HTML – The Structure of the Web</h1>
      <div className={styles.timeline}>
        {TIMELINE_DATA.html.map((item) => (
          <div
            key={item.year}
            onClick={() => handleItemClick(item)}
            style={{ cursor: "pointer" }}
          >
            <TimelineItem year={item.year} title={item.title} />
          </div>
        ))}
      </div>
      {selectedItem && (
        <>
          <ModalBox
            title={selectedItem.title}
            text={selectedItem.description || ""}
            desc={selectedItem.desc || ""}
            image={selectedItem.image}
            code={selectedItem.code}
            onClose={handleCloseModal}
          />
        </>
      )}
      <HtmlAbout />
    </main>
  );
}

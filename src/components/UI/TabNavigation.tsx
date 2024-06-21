"use client";


import styles from "./styles.module.scss";
import { useState } from "react";


interface TabNavigationProps {
  tabs: string[];
  onTabClick: (tabIndex: number) => void
}

export default function TabNavigation({ tabs, onTabClick }: TabNavigationProps) {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index: number) => {
    setActiveTab(index);

    // Send state up to change details page
    onTabClick(index)

  };

  return (
    <div>
      <ul className={styles.tabList}>
        {tabs.map((tab, index) => (
          <li
            key={tab}
            className={index === activeTab ? styles.activeTab : styles.tab}
          >
            <button onClick={() => handleTabClick(index)}>
              <a href={`#${tabs[activeTab]}`}>
                {tab}
              </a>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

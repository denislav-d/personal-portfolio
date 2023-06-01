import React, { useState } from "react";
import { motion } from "framer-motion";

const tabs = [
  {
    id: "home",
    label: "home",
  },
  {
    id: "projects",
    label: "projects",
  },
  {
    id: "about",
    label: "about",
  },
];

export default function NavMenu() {
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  return (
    <div className="flex space-x-1 bg-[rgba(250, 250, 250, 0.94)]  rounded-full backdrop-blur-1">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={`${
            activeTab === tab.id ? "" : "hover:text-[#d8d5d0]"
          } relative rounded-full px-3 py-1.5 text-lg lg:text-md font-medium text-[#aba8a4] outline-sky-400 transition focus-visible:outline-2`}
          style={{ WebkitTapHighlightColor: "transparent" }}
        >
          {activeTab === tab.id && (
            <motion.span
              layoutId="bubble"
              className="absolute inset-0 z-10 bg-black mix-blend-difference"
              style={{ borderRadius: 9999 }}
              transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
            />
          )}
          {tab.label}
        </button>
      ))}
    </div>
  );
}

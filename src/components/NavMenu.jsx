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
    id: "contact",
    label: "contact",
  },
];

export default function NavMenu() {
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  return (
    <div className="flex space-x-1 bg-[rgb(250, 250, 250)]  rounded-full backdrop-blur-1 shadow-lg p-1">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={`${
            activeTab === tab.id ? "" : "hover:text-[#676362]"
          } relative rounded-full px-3 py-1.5 text-lg lg:text-md font-medium text-[#CBC3E3] outline-sky-400 transition focus-visible:outline-2`}
          style={{ WebkitTapHighlightColor: "transparent" }}
        >
          {activeTab === tab.id && (
            <motion.span
              layoutId="bubble"
              className="absolute inset-0 z-10 bg-[#CBC3E3] mix-blend-difference"
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

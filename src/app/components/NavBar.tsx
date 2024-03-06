import { useState } from "react";
import { motion } from "framer-motion";
import { Slant as Hamburger } from "hamburger-react";
import Link from "next/link";

import { navLinks } from "@/app/data";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-none backdrop-blur-sm fixed w-full h-14 z-40 top-0">
      <button
        id="hamburger-menu"
        aria-label="Hamburger Menu"
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-1 right-2 z-50"
      >
        <Hamburger direction="right" color="#FAF9F6" duration={0.3} size={28} />
      </button>

      <motion.div
        className="fixed top-0 w-full h-[100dvh] bg-dark text-light z-40"
        initial={false}
        animate={isOpen ? "open" : "closed"}
        variants={{
          open: {
            opacity: 1,
            display: "block",
            transition: {
              duration: 0.1,
              staggerChildren: 0.05,
            },
          },
          closed: {
            opacity: 0,
            display: "none",
            transition: { duration: 0.2 },
          },
        }}
      >
        <div className="flex flex-col gap-2 md:gap-0 lg:gap-6 justify-center font-semibold text-[2.35rem] md:text-[3.5rem] lg:text-6xl px-6 md:px-24 xl:px-44 mt-40 z-50 list-none">
          {navLinks.map((item) => (
            <motion.li
              key={item.id}
              variants={{
                open: { opacity: 1, y: 0, transition: { duration: 0.25 } },
                closed: {
                  opacity: 0,
                  y: 50,
                },
              }}
            >
              <Link
                className="inline-block cursor-pointer hover:scale-[0.97] duration-300"
                href={item.link}
              >
                {item.title}
              </Link>
            </motion.li>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

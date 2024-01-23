import { useState } from "react";
import { motion } from "framer-motion";
import { Slant as Hamburger } from "hamburger-react";
import Link from "next/link";

const navLinks = [{ id: 1, title: "Home", link: "/home" }];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full flex justify-between items-center cursor-pointer">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-2 right-2 z-50"
      >
        <Hamburger direction="right" color="black" duration={0.3} size={26} />
      </button>

      <motion.div
        initial={false}
        animate={isOpen ? "open" : "closed"}
        className="relative flex flex-col w-full"
      >
        <motion.ul
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
          className="absolute w-screen h-full p-8 min-h-screen text-black bg-light"
        >
          <div className="flex flex-col gap-8 justify-center font-bold text-5xl lg:text-5xl mt-32 z-50">
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
                  href={item.link}
                  className="flex gap-5 lg:gap-10 items-center"
                >
                  {item.title}
                </Link>
              </motion.li>
            ))}
          </div>
        </motion.ul>
      </motion.div>
    </div>
  );
}

"use client";

import { motion } from "framer-motion";
import BackButton from "@/components/BackButton";
import { animationFrameVariants, animationItemVariants } from "@/data/data";

export default function About() {
  return (
    <section className="container z-10 mx-auto mb-20 mt-24 flex flex-col px-10 md:w-full md:min-w-[512px] md:max-w-xl lg:mt-36">
      <h1 className="text-title">about 👨🏻‍💻</h1>
      <p className="text-secondary mb-4">
        my personal portfolio website where I showcase my projects and
        cotributions by creatively displaying them in my own minimal
        environment.
      </p>

      <motion.section
        variants={animationFrameVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.p
          variants={animationItemVariants}
          className="text-secondary mb-4"
        >
          as a person, I have always been impressed by good design - in both the
          materialistic world and nature. The things which make you say{" "}
          <span className="font-sans text-base font-normal italic tracking-normal ">
            &apos;wow&apos;
          </span>{" "}
          and are beautiful to observe or simply just gaze into, without any
          thoughts.
        </motion.p>

        <motion.p
          variants={animationItemVariants}
          className="text-secondary mb-20"
        >
          focusing on design driven development, I pursue high quality and
          exellence in my work, while emphasizing on distinctive visualisation.
        </motion.p>

        <motion.div variants={animationItemVariants}>
          <BackButton />
        </motion.div>
      </motion.section>
    </section>
  );
}

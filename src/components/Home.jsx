import React, { useState } from "react";
import { motion } from "framer-motion";
import GradientBlob from "./GradientBlob";

export default function Home() {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center gap-5">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 230,
          damping: 20,
        }}
        className="mt-6 md:w-[44rem] lg:w-[54rem] py-12 px-6 md:py-16 md:px-8 lg:py-24 lg:px-20"
      >
        <h1 className="text-[2.5rem] sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-10 text-[#1A1313]">
          welcome{" "}
          <span className="inline-block animate-wave origin-[70%_70%]">👋🏻</span>
          ,
          <br /> my name is Denislav,
          <br />
          design driven developer
          <br /> & fashion enthusiast.
        </h1>
        <motion.p
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 230,
            damping: 20,
            delay: 0.4,
          }}
          className="mt-8 text-md lg:text-lg text-[#676362] lg:w-[42rem] leading-6"
        >
          I am a student, who is currently pursuing a university degree in the
          Netherlands. Having a long-time ambition for all types of design and
          my rapidly growing interest and knowledge in the web development
          sector are pushing me towards improving in my desired field of work.
        </motion.p>
      </motion.div>
      <GradientBlob />
    </div>
  );
}

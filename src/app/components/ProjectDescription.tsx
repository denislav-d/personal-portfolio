"use client";

import { motion } from "framer-motion";
import DescriptionBlock from "./DescriptionBlock";
import { Project as ProjectTypes } from "@/app/data";
import BackButton from "./BackButton";

interface ProjectProps {
  project: ProjectTypes;
}

export default function ProjectDescription({
  project: {
    title,
    subheading,
    context_description,
    myrole_description,
    link_before,
    link_client,
  },
}: ProjectProps) {
  const frameVariants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,

      transition: {
        staggerChildren: 0.15,
        duration: 0.3,
        type: "spring",
        damping: 14,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,

      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <motion.article
      variants={frameVariants}
      initial="hidden"
      animate="visible"
      className="container mx-auto mb-36 mt-24 grid grid-cols-1 gap-8 px-10 md:w-full md:min-w-[512px] md:max-w-xl lg:mt-36"
    >
      <motion.h1
        className="font-serif text-lg font-medium tracking-tight text-dark  before:mr-2 before:inline-block before:h-[0.6rem] before:w-[0.6rem] before:bg-dark before:content-['']"
        variants={itemVariants}
      >
        {title}
        <br />
        <span className="font-sans text-base font-normal italic tracking-normal text-gray">
          {subheading}
        </span>
      </motion.h1>
      {link_before ? (
        <motion.div variants={itemVariants}>
          <DescriptionBlock
            title="context"
            link={link_client}
            link_before={link_before}
            description={context_description}
          />
        </motion.div>
      ) : (
        <motion.div>
          <DescriptionBlock title="context" description={context_description} />
        </motion.div>
      )}

      <motion.div variants={itemVariants}>
        <DescriptionBlock title="my role" description={myrole_description} />
      </motion.div>

      <motion.div variants={itemVariants}>
        <BackButton />
      </motion.div>
    </motion.article>
  );
}

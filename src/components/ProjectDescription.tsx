"use client";

import { motion } from "framer-motion";

import DescriptionBlock from "@/components/DescriptionBlock";
import BackButton from "@/components/BackButton";

import {
  ProjectType,
  animationFrameVariants,
  animationItemVariants,
} from "@/data/data";

interface ProjectProps {
  project: ProjectType;
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
  return (
    <article className="container mx-auto mb-36 mt-24 grid grid-cols-1 gap-8 px-10 md:w-full md:min-w-[512px] md:max-w-xl lg:mt-36">
      <div className="flex flex-col gap-2">
        <h1 className="text-title">{title}</h1>
        <p className="font-sans text-base font-normal italic tracking-normal text-gray">
          {subheading}
        </p>
      </div>

      <motion.section
        variants={animationFrameVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col gap-8"
      >
        {link_before ? (
          <motion.div variants={animationItemVariants}>
            <DescriptionBlock
              title="context"
              link={link_client}
              link_before={link_before}
              description={context_description}
            />
          </motion.div>
        ) : (
          <motion.div>
            <DescriptionBlock
              title="context"
              description={context_description}
            />
          </motion.div>
        )}

        <motion.div variants={animationItemVariants}>
          <DescriptionBlock title="my role" description={myrole_description} />
        </motion.div>

        <motion.div variants={animationItemVariants}>
          <BackButton />
        </motion.div>
      </motion.section>
    </article>
  );
}

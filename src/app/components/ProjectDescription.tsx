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
  return (
    <motion.article
      viewport={{ once: true }}
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 50 }}
      // TODO figure out staggered children animation
      transition={{
        duration: 0.3,
        type: "spring",
        damping: 14,
      }}
      className="container mx-auto mb-36 mt-24 grid grid-cols-1 gap-8 px-12 md:w-full md:min-w-[512px] md:max-w-xl lg:mt-36"
    >
      <h1 className="font-serif text-lg font-medium tracking-tight text-dark before:mr-2 before:inline-block before:h-[0.6rem] before:w-[0.6rem] before:bg-dark before:content-['']">
        {title}
        <br />
        <span className="font-sans text-base font-normal italic tracking-normal text-gray">
          {subheading}
        </span>
      </h1>
      {link_before ? (
        <DescriptionBlock
          title="context"
          link={link_client}
          link_before={link_before}
          description={context_description}
        />
      ) : (
        <DescriptionBlock title="context" description={context_description} />
      )}

      <DescriptionBlock title="my role" description={myrole_description} />
      <BackButton />
    </motion.article>
  );
}

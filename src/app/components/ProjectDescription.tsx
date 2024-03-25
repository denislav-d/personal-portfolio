"use client";

import { motion } from "framer-motion";
import DescriptionBlock from "./DescriptionBlock";

type Project = {
  id: number;
  title: string;
  subheading: string;
  description: string;
  context_description: string;
  info_client?: string;
  myrole_description: string;
  client_link?: string;
  client_name?: string;
};

interface ProjectProps {
  project: Project;
}

export default function ProjectDescription({ project }: ProjectProps) {
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
      className="container mx-auto mt-12 grid grid-cols-1 gap-8 px-12 sm:mb-36 md:w-full md:min-w-[512px] md:max-w-xl lg:mt-24"
    >
      <h1 className="font-serif text-lg font-medium tracking-tight text-dark before:mr-2 before:inline-block before:h-[0.6rem] before:w-[0.6rem] before:bg-dark before:content-['']">
        {project.title}
        <br />
        <span className="font-sans text-base font-normal italic tracking-normal opacity-50">
          {project.subheading}
        </span>
      </h1>
      <DescriptionBlock
        title="context"
        description={project.context_description}
      />
      <DescriptionBlock
        title="my role"
        description={project.myrole_description}
      />
    </motion.article>
  );
}

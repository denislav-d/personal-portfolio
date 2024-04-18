"use client";

import { motion } from "framer-motion";

import DescriptionBlock from "@/components/DescriptionBlock";
import BackButton from "@/components/BackButton";

import { ProjectType } from "@/data/data";
import Image from "next/image";

interface ProjectProps {
  project: ProjectType;
}

export default function ProjectDescription({
  project: {
    title,
    subheading,
    image,
    context_description,
    myrole_description,
    link_before,
    link_client,
  },
}: ProjectProps) {
  const sections = [
    {
      id: 1,
      content: (
        <DescriptionBlock
          title="context"
          link={link_before ? link_client : undefined}
          link_before={link_before}
          description={context_description}
        />
      ),
    },
    {
      id: 2,
      content: (
        <Image src={image} priority={false} alt={`${image} on phone images`} />
      ),
    },
    {
      id: 3,
      content: (
        <DescriptionBlock title="my role" description={myrole_description} />
      ),
    },
    {
      id: 4,
      content: <BackButton />,
    },
  ];

  return (
    <article className="container mx-auto mb-36 mt-24 grid grid-cols-1 gap-8 px-10 md:w-full md:min-w-[512px] md:max-w-xl lg:mt-36">
      <div className="flex flex-col gap-2">
        <h1 className="text-title">{title}</h1>
        <p className="font-sans text-base font-normal italic tracking-normal text-gray">
          {subheading}
        </p>
      </div>
      <section className="flex flex-col gap-8">
        {sections.map((section) => (
          <motion.div
            key={section.id}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{
              duration: 0.3,
              delay: section.id * 0.15,
              type: "spring",
              damping: 14,
            }}
          >
            {section.content}
          </motion.div>
        ))}
      </section>
    </article>
  );
}

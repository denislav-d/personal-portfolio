import { motion } from "framer-motion";
import Link from "next/link";
import Project from "@/components/Project";

import { projects } from "@/data/data";

export default function ProjectList() {
  return (
    <section className="container mx-auto mb-36 mt-12 grid grid-cols-1 gap-8 px-10 md:w-full md:min-w-[512px] md:max-w-xl">
      {projects.map((project) => (
        <motion.article
          key={project.id}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          transition={{
            duration: 0.3,
            delay: project.id * 0.15,
            type: "spring",
            damping: 14,
          }}
        >
          <Link
            href={project.link}
            className="inline-block cursor-pointer duration-300 hover:scale-[0.98]"
          >
            <Project project={project} />
          </Link>
        </motion.article>
      ))}
    </section>
  );
}

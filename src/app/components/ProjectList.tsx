import { motion } from "framer-motion";
import Link from "next/link";
import Project from "@/app/components/Project";

import { projects } from "@/app/data";

export default function ProjectList() {
  return (
    <section className="container mx-auto mt-12 grid grid-cols-1 gap-8 px-12 sm:mb-36 md:w-full md:min-w-[512px] md:max-w-xl">
      {projects.map((article) => (
        <motion.article
          key={article.id}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          transition={{
            duration: 0.5,
            delay: article.id * 0.35,
          }}
        >
          <Link
            href="/"
            className="inline-block cursor-pointer duration-300 hover:scale-[0.98]"
          >
            <Project article={article} />
          </Link>
        </motion.article>
      ))}
    </section>
  );
}

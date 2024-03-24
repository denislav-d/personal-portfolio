import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Project from "@/app/components/Project";
import ProjectDescription from "./ProjectDescription";

import { projects } from "@/app/data";

export default function ProjectList({ isDrawerOpen, setIsDrawerOpen }: any) {
  const [activeProjectId, setActiveProjectId] = useState(null);

  const handleProjectClick = (projectId: any) => {
    setActiveProjectId(projectId);
    setIsDrawerOpen(true);
  };

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
          onClick={() => handleProjectClick(article.id)}
        >
          <Project article={article} />
          <AnimatePresence>
            {isDrawerOpen && activeProjectId === article.id && (
              <motion.section
                transition={{
                  duration: 0.2,
                }}
                initial={{
                  bottom: -250,
                }}
                animate={{
                  bottom: 0,
                }}
                exit={{
                  bottom: -800,
                  transition: { duration: 0.1 },
                }}
                drag="y"
                dragConstraints={{ top: 0, bottom: 0 }}
                onDragEnd={(_, info) => {
                  if (info.offset.y > 300) {
                    setActiveProjectId(null);
                    setIsDrawerOpen(false);
                  }
                }}
                className="fixed bottom-0 left-0 right-0 z-50 h-[92%] overflow-y-auto rounded-t-[10px] border-t border-light bg-dark px-6 py-4"
              >
                <div className="mx-auto mb-8 h-1.5 w-12 flex-shrink-0 rounded-full bg-zinc-300" />
                <ProjectDescription article={article} />
              </motion.section>
            )}
          </AnimatePresence>
        </motion.article>
      ))}
    </section>
  );
}

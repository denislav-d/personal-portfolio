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
    <section className="container mx-auto px-6 md:px-24 lg:px-16 mt-24 lg:mt-36 max-w-screen-xl">
      <div className="grid grid-cols-1 gap-16 lg:gap-20 sm:mb-36 sm:grid-cols-2 lg:grid-cols-3">
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
                    if (info.offset.y > 400) {
                      setActiveProjectId(null);
                      setIsDrawerOpen(false);
                    }
                  }}
                  className="rounded-t-[10px] fixed bottom-0 left-0 right-0 p-4 bg-dark z-50 h-[92%]"
                >
                  <ProjectDescription article={article} />
                </motion.section>
              )}
            </AnimatePresence>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

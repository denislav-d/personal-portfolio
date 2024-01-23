import { motion } from "framer-motion";
import Image from "next/image";

import { projects } from "@/app/data";

export default function ProjectList() {
  return (
    <section className="container mx-auto px-6 md:px-24 lg:px-16 mt-24 lg:mt-36 max-w-screen-xl">
      <div className="grid grid-cols-1 gap-16 lg:gap-20 sm:mb-36 sm:grid-cols-2">
        {projects.map((article) => (
          <motion.article
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{
              duration: 0.5,
              delay: article.id * 0.25,
            }}
            key={article.id}
          >
            <div className="rounded-2xl shadow-lg relative aspect-[15/8] flex-shrink-0 hover:scale-[0.99] shadow-stone-600/[0.03] hover:shadow-md hover:shadow-stone-600/5 bg-gray-200 duration-300">
              <a
                className="flex h-full w-full items-center justify-center outline-none select-none"
                href=""
              >
                <Image
                  className="h-full w-full overflow-hidden object-contain rounded-2xl"
                  src={article.image}
                  alt={`${article.title} image`}
                  width="1920"
                  height="1024"
                />
              </a>
            </div>
            <div className="px-1.5">
              <div className="mt-3 flex justify-between">
                <div className="font-medium text stone-500">{article.date}</div>
                <span>{article.type}</span>
              </div>
              <h3 className="mt-3 text-2xl font-semibold tracking-tight">
                <a className="outline-none">{article.title}</a>
              </h3>
              <div className="mt-2 text-stone-600">
                <a className="outline-none">
                  <div>{article.description}</div>
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

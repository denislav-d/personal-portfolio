import { motion } from "framer-motion";
import { Drawer } from "vaul";
import Image from "next/image";

import { projects } from "@/app/data";

interface Project {
  id: number;
  title: string;
  date: string;
  type: string;
  description: string;
  image?: any;
}

interface ProjectProps {
  article: Project;
}

export default function ProjectList() {
  return (
    <section className="container mx-auto px-6 md:px-24 lg:px-16 mt-24 lg:mt-36 max-w-screen-xl">
      <div className="grid grid-cols-1 gap-16 lg:gap-20 sm:mb-36 sm:grid-cols-2">
        {projects.map((article) => (
          <Drawer.Root shouldScaleBackground key={article.id}>
            <Drawer.Trigger asChild>
              <motion.article
                viewport={{ once: true }}
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 50 }}
                transition={{
                  duration: 0.5,
                  delay: article.id * 0.35,
                }}
              >
                <Project article={article} />
                <Drawer.Portal>
                  <Drawer.Overlay className="fixed inset-0 bg-black/40" />
                  <Drawer.Content className="bg-zinc-100 flex flex-col rounded-t-[10px] h-[92%] fixed bottom-0 left-0 right-0">
                    <section className="p-4 bg-white rounded-t-[10px] flex-1">
                      <div className="mx-auto w-12 h-1.5 flex-shrink-0 rounded-full bg-zinc-300 mb-8" />
                      <div className="max-w-6xl mx-auto">
                        <h1 className="font-bold mb-8 text-4xl text-dark">
                          {article.title}
                        </h1>
                        <h1 className="font-medium text-2xl mb-4 text-dark">
                          Context
                        </h1>
                        <p className="text-gray mb-8 leading-6">
                          Introduction to the project...
                        </p>
                        <h1 className="font-medium text-2xl mb-4 text-dark">
                          The Client
                        </h1>
                        <p className="text-gray mb-8 leading-6">
                          Introduction to the client...
                        </p>
                        <h1 className="font-medium text-2xl mb-4 text-dark">
                          My Role
                        </h1>
                        <p className="text-gray mb-8 leading-6">
                          Introduction to the role I had...
                        </p>
                      </div>
                    </section>
                  </Drawer.Content>
                </Drawer.Portal>
              </motion.article>
            </Drawer.Trigger>
          </Drawer.Root>
        ))}
      </div>
    </section>
  );
}

function Project({ article }: ProjectProps) {
  return (
    <>
      <div className="rounded-2xl shadow-lg relative aspect-[15/8] flex-shrink-0 hover:scale-[0.99] shadow-stone-600/[0.03] hover:shadow-md hover:shadow-stone-600/5 bg-gray-200 duration-300">
        <div className="flex h-full w-full items-center justify-center">
          <Image
            className="h-full w-full overflow-hidden object-contain rounded-2xl"
            src={article.image}
            alt={`${article.title} image`}
            width="1920"
            height="1024"
          />
        </div>
      </div>
      <div className="px-1.5">
        <div className="mt-3 flex justify-between">
          <div className="font-medium text stone-500">{article.date}</div>
          <span>{article.type}</span>
        </div>
        <h3 className="mt-3 text-2xl font-bold tracking-tight">
          <a className="outline-none">{article.title}</a>
        </h3>
        <div className="mt-2 text-stone-600">
          <a className="outline-none">
            <div>{article.description}</div>
          </a>
        </div>
      </div>
    </>
  );
}

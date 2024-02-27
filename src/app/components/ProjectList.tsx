import { motion } from "framer-motion";
import { Drawer } from "vaul";
import Project from "@/app/components/Project";

import { projects } from "@/app/data";

export default function ProjectList() {
  return (
    <section className="container mx-auto px-6 md:px-24 lg:px-16 mt-24 lg:mt-36 max-w-screen-xl">
      <div className="grid grid-cols-1 gap-16 lg:gap-20 sm:mb-36 sm:grid-cols-2 lg:grid-cols-3">
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
                  <Drawer.Overlay className="fixed inset-0 bg-dark" />
                  <Drawer.Content className="bg-zinc-100 flex flex-col rounded-t-[10px] h-[92%] fixed bottom-0 left-0 right-0">
                    <section className="p-4 bg-dark overflow-y-auto rounded-t-[10px] flex-1">
                      <div className="mx-auto w-12 h-1.5 flex-shrink-0 rounded-full bg-zinc-300 mb-8" />
                      <div className="max-w-6xl mx-auto">
                        <h1 className="font-semibold mb-8 text-4xl tracking-tighter text-light">
                          {article.title}
                        </h1>
                        <h1 className="font-medium text-2xl mb-4 text-light">
                          Context
                        </h1>
                        <p className="text-light mb-8 leading-6">
                          {article.info_context}
                        </p>
                        {article.info_client ? (
                          <>
                            <h1 className="font-medium text-2xl mb-4 text-light">
                              The Client
                            </h1>
                            <p className="text-light mb-8 leading-6">
                              <a
                                className="text-light font-semibold underline hover:text-light"
                                href={article.client_link}
                              >
                                {article.client_name}
                              </a>
                              {article.info_client}
                            </p>
                          </>
                        ) : (
                          ""
                        )}

                        <h1 className="font-medium text-2xl mb-4 text-light">
                          My Role
                        </h1>
                        <p className="text-light mb-8 leading-6">
                          {article.info_myrole}
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

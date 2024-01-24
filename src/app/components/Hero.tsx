import { motion } from "framer-motion";

export default function Home() {
  return (
    <section className="container mx-auto px-6 md:px-24 lg:px-16 grid lg:grid-cols-3 grid-cols-1 max-w-screen-xl">
      <motion.div
        initial={{ opacity: 0, y: -35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.85,
        }}
        className="col-span-2 mt-16 lg:mt-36"
      >
        <h1 className="text-[2.4rem] sm:text-5xl md:text-[3.5rem] lg:text-6xl font-bold tracking-tighter leading-10 text-dark">
          welcome
          <span className="ml-1 relative inline-block animate-wave origin-[70%_70%]">
            👋🏻
          </span>
          ,
          <br /> my name is Denislav,
          <br />
          design driven developer
          <br /> & fashion enthusiast.
        </h1>
        <motion.p
          initial={{ opacity: 0, y: -35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.85,
            delay: 0.25,
          }}
          className="mt-8 text-md lg:text-lg text-gray leading-6 max-w-screen-sm"
        >
          I am a student, who is currently pursuing a university degree in the
          Netherlands. Having a long-time ambition for all types of design and
          my rapidly growing interest and knowledge in the web development
          sector are pushing me towards improving in my desired field of work.
        </motion.p>
      </motion.div>
    </section>
  );
}

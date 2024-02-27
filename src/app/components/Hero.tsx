export default function Home() {
  return (
    <section className="container mx-auto px-6 md:px-24 lg:px-16 max-w-screen-xl">
      <div className="mt-16 lg:mt-36 z-10">
        <h1 className="text-[2.3rem] sm:text-5xl md:text-[3.5rem] lg:text-6xl font-semibold tracking-tighter leading-10 text-light test">
          <span className="before:inline-block before:w-5 before:h-5  lg:before:w-8 lg:before:h-8 before:bg-light before:mr-3 before:content-['']">
            welcome
            <span className="ml-1 relative inline-block animate-wave origin-[70%_70%]">
              👋🏻
            </span>
            ,
          </span>
          <br />
          <span className="lg:ml-11">my name is Denislav,</span>
          <br />
          <span className="lg:ml-[5.75rem]">a design driven developer.</span>
        </h1>
        <p className="mt-12 text-md lg:text-[1.1rem] text-light leading-6 before:inline-block before:w-[.85rem] before:h-[.85rem] before:bg-white before:mr-2 before:content-['']">
          I am a student, who is currently pursuing a university degree in the
          Netherlands. Having a long-time ambition for all types of design and
          my rapidly growing interest and knowledge in the web development
          sector are pushing me towards improving in my desired field of work.
        </p>
      </div>
    </section>
  );
}

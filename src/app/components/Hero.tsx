"use client";

export default function Home() {
  const isMobile = window.innerWidth <= 768;

  return (
    <section className="container z-10 mx-auto mb-20 mt-20 flex flex-col px-10 md:w-full md:min-w-[512px] md:max-w-xl lg:mt-36">
      <h1 className="text-base tracking-wide text-dark before:mr-2 before:inline-block before:h-[0.6rem] before:w-[0.6rem] before:bg-dark before:content-['']">
        <span className="font-serif text-lg font-medium tracking-tight">
          welcome
        </span>
        <span className="relative ml-1 inline-block origin-[70%_70%] animate-wave text-lg">
          👋🏻
        </span>
        ,<br /> my name is Denislav Dimitrov, <br /> a design driven developer,
        <br /> pursuing an university ICT degree {isMobile ? <br /> : ""} in the
        Netherlands.
      </h1>
    </section>
  );
}

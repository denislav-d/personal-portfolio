import Link from "next/link";

export default function Hero() {
  return (
    <section className="container z-10 mx-auto mb-20 flex flex-col px-10 md:w-full md:min-w-[512px] md:max-w-xl">
      <h1 className="text-title">
        welcome
        <span className="relative ml-1 inline-block origin-[70%_70%] animate-wave text-lg">
          👋🏻
        </span>
        ,
      </h1>
      <p className="text-secondary">
        my name is{" "}
        <Link className="underline" href="/about">
          Denislav Dimitrov
        </Link>
        , <br className="responsive" /> a design driven developer,
        <br /> currently pursuing a university degree
        <br className="responsive" /> in the Netherlands.
      </p>
    </section>
  );
}

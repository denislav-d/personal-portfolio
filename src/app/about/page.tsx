import BackButton from "@/components/BackButton";

export default function About() {
  return (
    <section className="container z-10 mx-auto mb-20 mt-24 flex flex-col px-10 md:w-full md:min-w-[512px] md:max-w-xl lg:mt-36">
      <h1 className="text-title">about</h1>
      <p className="text-secondary mb-4">
        my personal portfolio website where I showcase my projects and
        cotributions by creatively displaying them in my own minimal
        environment.
      </p>
      <p className="text-secondary mb-20">
        focusing on design driven development, I pursue high quality and
        exellence in my work, while emphasizing on distinctive visualisation.
      </p>

      <BackButton />
    </section>
  );
}

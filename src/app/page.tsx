"use client";

import Hero from "@/components/Hero";
import ProjectList from "@/components/ProjectList";

export default function LandingPage() {
  return (
    <main className="mt-24 lg:mt-36">
      <Hero />
      <section className="container z-10 mx-auto mb-20 flex flex-col px-10 md:w-full md:min-w-[512px] md:max-w-xl">
        <h2 className="text-title">New website design coming soon 🔧 ...</h2>
      </section>
      <ProjectList />
    </main>
  );
}

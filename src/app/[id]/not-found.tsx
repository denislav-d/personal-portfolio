"use client";

import DescriptionBlock from "@/components/DescriptionBlock";
import ProjectList from "@/components/ProjectList";

export default function ProjectNotFound() {
  return (
    <>
      <section className="container mx-auto mb-28 mt-24 grid grid-cols-1 gap-8 px-10 md:w-full md:min-w-[512px] md:max-w-xl lg:mt-36">
        <DescriptionBlock
          title="project not found 🚫"
          description="oops, maybe try one of these projects instead, or going back to the"
          link="/"
          link_after="home page"
        />
      </section>
      <ProjectList />
    </>
  );
}

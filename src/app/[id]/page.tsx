import { notFound } from "next/navigation";

import ProjectDescription from "@/components/ProjectDescription";
import { projects } from "@/data/data";

export default function Project({ params }: { params: { id: string } }) {
  const filteredProjects = projects.filter(
    (project) => project.link === params.id
  );

  if (filteredProjects.length <= 0) {
    return notFound();
  }

  return (
    <>
      {filteredProjects.map((project) => (
        <div key={project.id}>
          <ProjectDescription project={project} />
        </div>
      ))}
    </>
  );
}

import { notFound } from "next/navigation";

import ProjectDescription from "@/components/ProjectDescription";
import { projects } from "@/data/data";

interface ProjectProps {
  params: {
    id: string;
  };
}

export default function Project({ params }: ProjectProps) {
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

export function generateStaticParams() {
  return projects.map((project) => {
    return {
      id: project.id.toString(),
    };
  });
}

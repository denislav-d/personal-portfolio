import { Project as ProjectTypes } from "@/data/data";

interface ProjectProps {
  project: ProjectTypes;
}

export default function Project({ project }: ProjectProps) {
  return (
    <>
      <div className="mb-2 flex items-center justify-between text-dark">
        <h1 className="text-title">{project.title}</h1>
      </div>
      <div className="text-secondary">{project.description}</div>
    </>
  );
}

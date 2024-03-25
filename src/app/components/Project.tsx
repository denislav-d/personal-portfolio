import { Project as ProjectTypes } from "@/app/data";

interface ProjectProps {
  project: ProjectTypes;
}

export default function Project({ project }: ProjectProps) {
  return (
    <>
      <div className="mb-2 flex items-center justify-between text-dark">
        <h1 className="font-serif text-lg font-medium leading-6 tracking-tight outline-none before:mr-2 before:inline-block before:h-[0.6rem] before:w-[0.6rem] before:bg-dark before:content-['']">
          {project.title}
        </h1>
      </div>
      <div className="text-base leading-6 tracking-wide text-dark outline-none">
        {project.description}
      </div>
    </>
  );
}

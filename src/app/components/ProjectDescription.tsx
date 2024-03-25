import Link from "next/link";

type Project = {
  id: number;
  title: string;
  description: string;
  info_context: string;
  info_client?: string;
  info_myrole: string;
  client_link?: string;
  client_name?: string;
};

interface ProjectProps {
  project: Project;
}

export default function ProjectDescription({ project }: ProjectProps) {
  return (
    <article className="container mx-auto mt-12 grid grid-cols-1 gap-8 px-12 sm:mb-36 md:w-full md:min-w-[512px] md:max-w-xl lg:mt-24">
      <h1 className="font-serif text-lg font-medium tracking-tight text-dark before:mr-2 before:inline-block before:h-[0.6rem] before:w-[0.6rem] before:bg-dark before:content-['']">
        {project.title}
      </h1>
      <h1 className="text-base tracking-wide text-dark before:mr-2 before:inline-block before:h-[0.6rem] before:w-[0.6rem] before:bg-dark before:content-['']">
        <span className="font-serif text-lg font-medium tracking-tight">
          context
        </span>
        <br />
        {project.info_context}
      </h1>
      <h1 className="text-base tracking-wide text-dark before:mr-2 before:inline-block before:h-[0.6rem] before:w-[0.6rem] before:bg-dark before:content-['']">
        <span className="font-serif text-lg font-medium tracking-tight">
          the client
        </span>
        <br />
        {project.client_link ? (
          <Link className="underline" href={project.client_link}>
            {project.client_name}
          </Link>
        ) : (
          ""
        )}{" "}
        {project.info_client}
      </h1>
      <h1 className="text-base tracking-wide text-dark before:mr-2 before:inline-block before:h-[0.6rem] before:w-[0.6rem] before:bg-dark before:content-['']">
        <span className="font-serif text-lg font-medium tracking-tight">
          my role
        </span>
        <br />
        {project.info_myrole}
      </h1>
    </article>
  );
}

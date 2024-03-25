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
  article: Project;
}

export default function Project({ article }: ProjectProps) {
  return (
    <>
      <div className="mb-2 flex items-center justify-between text-dark">
        <h1 className="font-serif text-lg font-medium leading-6 tracking-tight outline-none before:mr-2 before:inline-block before:h-[0.6rem] before:w-[0.6rem] before:bg-dark before:content-['']">
          {article.title}
        </h1>
      </div>
      <div className="text-base leading-6 tracking-wide text-dark outline-none">
        {article.description}
      </div>
    </>
  );
}

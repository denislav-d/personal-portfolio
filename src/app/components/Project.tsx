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
    <div className="cursor-pointer duration-300 hover:scale-[0.97]">
      <div className="mb-2 flex items-center justify-between text-dark">
        <h1 className="font-serif text-lg font-medium leading-6 tracking-tight outline-none before:mr-2 before:inline-block before:h-[.6rem] before:w-[.6rem] before:bg-dark before:content-['']">
          {article.title}
        </h1>
      </div>
      <div className="tracking text-lg leading-6 text-dark outline-none">
        <div className="text-base tracking-wide">{article.description}</div>
      </div>
    </div>
  );
}

type Project = {
  id: number;
  title: string;
  description: string;
  type: string;
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
    <div className="cursor-pointer hover:scale-[0.97] duration-300">
      <div className="flex justify-between items-center text-light">
        <h1 className="text-2xl font-semibold tracking-tighter outline-none before:inline-block before:w-[.85rem] before:h-[.85rem] before:bg-white before:mr-2 before:content-['']">
          {article.title}
        </h1>
        <h2 className="font-medium">{article.type}</h2>
      </div>
      <div className="mt-2 text-light text-base lg:text-[1.1rem] outline-none">
        <div>{article.description}</div>
      </div>
    </div>
  );
}

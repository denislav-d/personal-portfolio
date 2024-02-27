interface Project {
  id: number;
  title: string;
  type: string;
  description: string;
  image?: any;
}

interface ProjectProps {
  article: Project;
}

export default function Project({ article }: ProjectProps) {
  return (
    <div className="cursor-pointer hover:scale-[0.99] duration-300">
      <div className="flex justify-between items-center text-light">
        <h3 className="text-2xl font-semibold tracking-tighter">
          <a className="outline-none before:inline-block before:w-[.85rem] before:h-[.85rem] before:bg-white before:mr-2 before:content-['']">
            {article.title}
          </a>
        </h3>
        <h5 className="font-medium">{article.type}</h5>
      </div>
      <div className="mt-2 text-light text-[1.1rem]">
        <a className="outline-none">
          <div>{article.description}</div>
        </a>
      </div>
    </div>
  );
}

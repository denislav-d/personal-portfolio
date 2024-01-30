import Image from "next/image";

interface Project {
  id: number;
  title: string;
  date: string;
  type: string;
  description: string;
  image?: any;
}

interface ProjectProps {
  article: Project;
}

export default function Project({ article }: ProjectProps) {
  return (
    <>
      <div className="rounded-2xl shadow-lg relative aspect-[15/8] flex-shrink-0 hover:scale-[0.99] shadow-stone-600/[0.03] hover:shadow-md hover:shadow-stone-600/5 bg-gray-200 duration-300 cursor-pointer">
        <div className="flex h-full w-full items-center justify-center">
          <Image
            className="h-full w-full overflow-hidden object-contain rounded-2xl"
            src={article.image}
            alt={`${article.title} image`}
            width="1920"
            height="1024"
          />
        </div>
      </div>
      <div className="px-1.5 cursor-pointer">
        <div className="mt-3 flex justify-between font-medium">
          <div>{article.date}</div>
          <span>{article.type}</span>
        </div>
        <h3 className="mt-3 text-2xl font-bold tracking-tighter">
          <a className="outline-none">{article.title}</a>
        </h3>
        <div className="mt-2 text-stone-600">
          <a className="outline-none">
            <div>{article.description}</div>
          </a>
        </div>
      </div>
    </>
  );
}

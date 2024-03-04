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

export default function ProjectDescription({ article }: ProjectProps) {
  return (
    <>
      <div className="mx-auto w-12 h-1.5 flex-shrink-0 rounded-full bg-zinc-300 mb-8 overflow-y-scroll" />
      <article className="max-w-6xl mx-auto">
        <h1 className="font-semibold mb-8 text-4xl tracking-tighter text-light">
          {article.title}
        </h1>
        <h1 className="font-medium text-2xl mb-4 text-light">Context</h1>
        <p className="text-light mb-8 leading-6">{article.info_context}</p>
        {article.info_client ? (
          <>
            <h1 className="font-medium text-2xl mb-4 text-light">The Client</h1>
            <p className="text-light mb-8 leading-6">
              <a
                className="text-light font-semibold underline hover:text-light"
                href={article.client_link}
              >
                {article.client_name}
              </a>
              {article.info_client}
            </p>
          </>
        ) : (
          ""
        )}
        <h1 className="font-medium text-2xl mb-4 text-light">My Role</h1>
        <p className="text-light mb-8 leading-6">{article.info_myrole}</p>
      </article>
    </>
  );
}

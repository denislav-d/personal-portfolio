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
      <article className="max-w-6xl mx-auto">
        <h1 className="font-semibold mb-4 text-3xl tracking-tighter text-light">
          {article.title}
        </h1>
        <section className="overflow-y-auto max-h-full">
          <h1 className="font-medium text-[1.35rem] mb-2 text-light">
            Context
          </h1>
          <p className="text-light mb-8 leading-6">{article.info_context}</p>
          {article.info_client ? (
            <>
              <h1 className="font-medium text-[1.35rem] mb-2 text-light">
                The Client
              </h1>
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
          <h1 className="font-medium text-[1.35rem] mb-2 text-light">
            My Role
          </h1>
          <p className="text-light mb-8 leading-6">{article.info_myrole}</p>
        </section>
      </article>
    </>
  );
}

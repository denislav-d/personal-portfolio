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
      <article className="mx-auto max-w-6xl">
        <h1 className="mb-4 text-3xl font-semibold tracking-tighter text-light">
          {article.title}
        </h1>
        <section className="max-h-full overflow-y-auto">
          <h1 className="mb-2 text-[1.35rem] font-medium text-light">
            Context
          </h1>
          <p className="mb-8 leading-6 text-light">{article.info_context}</p>
          {article.info_client ? (
            <>
              <h1 className="mb-2 text-[1.35rem] font-medium text-light">
                The Client
              </h1>
              <p className="mb-8 leading-6 text-light">
                <a
                  className="font-semibold text-light underline hover:text-light"
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
          <h1 className="mb-2 text-[1.35rem] font-medium text-light">
            My Role
          </h1>
          <p className="mb-8 leading-6 text-light">{article.info_myrole}</p>
        </section>
      </article>
    </>
  );
}

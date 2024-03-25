import { projects } from "@/app/data";
import ProjectDescription from "../components/ProjectDescription";

export default function Project({ params }: { params: { id: string } }) {
  const filteredProjects = projects.filter(
    (project) => project.link === params.id
  );

  return (
    <div>
      {filteredProjects.length > 0 ? (
        filteredProjects.map((project) => (
          <div key={project.id}>
            <ProjectDescription project={project} />
          </div>
        ))
      ) : (
        <h1>Project not found</h1>
      )}
    </div>
  );
}

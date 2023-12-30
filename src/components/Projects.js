import projects from "../data";
import { SingleProject } from "./SingleProject";

function Projects() {
  return (
    <section id="projects">
      <div className="container mx-auto px-12 py-40">
        <div className="py-4">
          <h2 className="text-3xl font-bold lg:text-5xl text-center pb-12">
            My Work
          </h2>
        </div>
        <div className="flex flex-col gap-8 xl:gap-20">
          {projects.map((project, index) => {
            return (
              <SingleProject
                key={project.id}
                project={project}
                direction={index % 2 === 0 ? "" : "reverse"}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Projects;

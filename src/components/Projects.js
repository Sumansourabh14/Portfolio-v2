import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import projects from "../data";
import LinkBtn from "./small-components/LinkBtn";

function Projects() {
  return (
    <section id="projects">
      <div className="container mx-auto px-12 py-40">
        <div className="py-4">
          <h2 className="text-3xl font-bold lg:text-5xl text-center lg:text-left">
            Personal Projects
          </h2>
        </div>
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-10 mt-8">
          {projects.map((project) => {
            return (
              <div
                key={project.id}
                className="flex flex-col shadow-2xl bg-gray-900 rounded md:hover:scale-105 md:hover:bg-stone-900 duration-200"
              >
                <img src={project.imgSrc} alt={project.alt} />
                <div className="px-8 py-10 flex flex-col gap-4">
                  <h3 className="text-2xl lg:text-3xl font-bold text-cyan-500">
                    {project.projectName}
                  </h3>
                  <h4>
                    <span className="font-bold">Technologies used:</span>{" "}
                    {project.technologies}
                  </h4>
                  <p className="text-slate-300">{project.description}</p>
                  <div className="flex gap-4">
                    <LinkBtn
                      classes={
                        "bg-slate-200 text-black font-bold px-6 py-2 rounded hover:bg-gray-400 duration:200"
                      }
                      linkText="Open"
                      link={project.projectLink}
                      icon={faArrowUpRightFromSquare}
                    />
                    <LinkBtn
                      classes={
                        "bg-gray-700 px-6 py-2 rounded hover:bg-cyan-800 duration:200"
                      }
                      linkText="Github"
                      link={project.githubLink}
                      icon={faGithub}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Projects;

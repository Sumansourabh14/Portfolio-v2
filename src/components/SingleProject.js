import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import LinkBtn from "./small-components/LinkBtn";
import TechnologiesSection from "./small-components/TechnologiesSection";

export const SingleProject = ({ project, direction }) => {
  return (
    <div
      key={project.id}
      className={
        "flex items-center hover:rounded hover:bg-black hover:bg-opacity-5 hover:shadow-[0_1px_inset_rgba(1,1,1,0.1)] duration-200 p-4 gap-8 " +
        (direction === "reverse" ? "flex-row-reverse" : "flex-row")
      }
    >
      <div className="flex-1">
        <img src={project.imgSrc} alt={project.alt} />
      </div>
      <div className="flex-1">
        <div className="px-8 py-10 flex flex-col gap-4">
          <h3 className="text-2xl font-semibold">{project.projectName}</h3>
          {!!project.technologies && (
            <TechnologiesSection technologies={project.technologies} />
          )}
          <p className="">{project.description}</p>
          <div className="flex gap-4">
            <LinkBtn
              classes={
                "bg-black hover:bg-zinc-600 text-white font-bold px-6 py-2 duration:200"
              }
              linkText="Open"
              link={project.projectLink}
              icon={faArrowUpRightFromSquare}
            />
            <LinkBtn
              classes={
                "border hover:bg-zinc-400 text-black px-6 py-2 duration:200"
              }
              linkText="Github"
              link={project.githubLink}
              icon={faGithub}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

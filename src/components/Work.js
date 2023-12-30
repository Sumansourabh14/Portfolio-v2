import React from "react";
import { workExperience } from "../utils/work-experience";
import TechnologiesSection from "./small-components/TechnologiesSection";

const Work = () => {
  return (
    <section id="work" className="bg-zinc-900 ">
      <div className="container mx-auto px-12 py-40">
        <h2 className="text-3xl lg:text-5xl font-bold text-center pb-12 text-white">
          Professional Experience
        </h2>
        <div className="flex flex-col lg:flex-row gap-8 mt-10 text-zinc-400">
          {workExperience.map((work) => (
            <div
              key={work.id}
              className="flex flex-col sm:flex-row gap-8 items-start p-4 flex-1 hover:bg-white hover:rounded-lg hover:bg-opacity-5 hover:shadow-[0_1px_inset_rgba(255,255,255,0.1)] duration-100"
            >
              <div className="flex flex-col gap-2 flex-shrink-0 pt-1">
                <div className="text-sm uppercase">{work.duration}</div>
                <div className="text-xs uppercase">{work.type}</div>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-xl text-white font-medium tracking-wide">
                  {work.position}
                </h3>
                <a
                  href={work.linkedIn}
                  target="_blank"
                  rel="noreferrer"
                  className="underline"
                >
                  {work.organization}
                </a>
                {!!work.technologies && (
                  <TechnologiesSection technologies={work.technologies} />
                )}
                <ul>
                  {work.description.map((item, index) => (
                    <li key={index} className="mt-2">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;

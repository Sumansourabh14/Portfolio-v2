import React from "react";
import { workExperience } from "../utils/work-experience";

const Work = () => {
  return (
    <section id="about" className="bg-gray-800">
      <div className="container mx-auto px-12 py-40">
        <h2 className="text-3xl lg:text-5xl font-bold text-center lg:text-left">
          Work Experience
        </h2>
        <div className="text-center lg:text-left flex flex-col lg:flex-row gap-16 mt-10">
          {workExperience.map((work) => (
            <div
              key={work.id}
              style={{ display: "flex", flexDirection: "column", gap: 10 }}
            >
              <h3 style={{ fontSize: "1.8rem" }}>{work.position}</h3>
              <h4>
                {work.organization} ({work.duration})
              </h4>
              <ul style={{ display: "flex", gap: 20 }}>
                {work.technologies.map((technology, index) => (
                  <li
                    key={index}
                    style={{
                      padding: "0.4rem 1rem",
                      backgroundColor: "grey",
                      borderRadius: "0.2rem",
                    }}
                  >
                    {technology}
                  </li>
                ))}
              </ul>
              <ul>
                {work.description.map((item, index) => (
                  <li key={index} style={{ marginTop: "0.5rem" }}>
                    - {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;

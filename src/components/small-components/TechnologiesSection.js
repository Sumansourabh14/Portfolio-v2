import React from "react";

const TechnologiesSection = ({ technologies }) => {
  return (
    <ul className="flex gap-1 flex-wrap pt-2 font-mono uppercase">
      {technologies.map((technology, index) => (
        <li key={index} className="px-4 border-[1px] ">
          {technology}
        </li>
      ))}
    </ul>
  );
};

export default TechnologiesSection;

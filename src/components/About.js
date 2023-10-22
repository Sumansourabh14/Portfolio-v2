import { education } from "../data";
import myImage from "../Images/Suman-Sourabh.png";

function About() {
  return (
    <section id="about" className="bg-gray-800">
      <div className="container mx-auto px-12 py-40">
        <h2 className="text-3xl lg:text-5xl font-bold text-center lg:text-left">
          About Me
        </h2>
        <div className="text-center lg:text-left flex flex-col lg:flex-row gap-16">
          <div className="flex flex-col gap-6">
            <p className="mt-8 text-center lg:text-left text-slate-300">
              My name is{" "}
              <strong className="text-cyan-400">Suman Sourabh</strong> and I
              like to <span className="text-cyan-400">design</span> and{" "}
              <span className="text-cyan-400">build</span> things for the web.
            </p>
            <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold">
              Education
            </h3>
            <div className="flex flex-col gap-6">
              {education.map((edu) => {
                return (
                  <div className="lg:border-l lg:pl-4 text-slate-300">
                    <strong className="text-white">{edu.schoolName}</strong>
                    <p>{edu.specialization}</p>
                    <p>{edu.total}</p>
                    <p>{edu.year}</p>
                  </div>
                );
              })}
            </div>
          </div>
          <div>
            <img
              className="bg-gray-900 p-4 mx-auto w-72 md:w-80 xl:w-96 rounded-md shadow-2xl hover:scale-105 duration-200"
              src={myImage}
              alt="Suman Sourabh"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

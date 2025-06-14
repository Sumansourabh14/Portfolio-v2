function Skills() {
  return (
    <section id="skills" className="bg-zinc-900 text-white">
      <div className="container mx-auto px-12 py-20">
        <h2 className="text-3xl lg:text-5xl font-bold text-center pb-12">
          Skills
        </h2>
        <ul className="grid gap-8 grid-cols-1 md:grid-cols-2">
          <li className="rounded bg-white flex flex-col items-center gap-8 py-4 px-8 bg-opacity-5 shadow-[0_1px_inset_rgba(255,255,255,0.1)] duration-200">
            <h3 className="text-xl font-semibold">Web Development</h3>
            <p className="font-light">
              Building highly performant websites with 2.9 years of experience.
              Skilled in Next.js, React, Node.js, HTML, CSS, Material UI,
              Tailwind CSS
            </p>
          </li>
          <li className="rounded bg-white flex flex-col items-center gap-8 py-4 px-8 bg-opacity-5 shadow-[0_1px_inset_rgba(255,255,255,0.1)] duration-200">
            <h3 className="text-xl font-semibold">Writing Blogs/Articles</h3>
            <p className="font-light">
              More than 1 year of experience in writing blogs/articles on
              technical as well as non-technical topics. Some of my work is on{" "}
              <a
                href="https://auth.geeksforgeeks.org/user/sumsourabh14/articles?utm_source=geeksforgeeks&utm_medium=article_author&utm_campaign=auth_user"
                className="underline"
              >
                GeeksforGeeks
              </a>
              ,{" "}
              <a
                href="https://community.theta360.guide/t/ricoh-theta-client-react-native-demo-for-android/9739"
                className="underline"
              >
                theta360
              </a>
              ,{" "}
              <a href="https://medium.com/@sumsourabh14" className="underline">
                Medium
              </a>{" "}
              and Hashnode.
            </p>
          </li>
        </ul>
        {/* <ul className="grid gap-3 grid-cols-2 md:grid-cols-5 lg:grid-cols-5 xl:grid-cols-7">
          {skills.map((skill) => {
            return (
              <li
                key={skill.id}
                className="shadow-lg rounded bg-gray-800 flex flex-col items-center gap-2 p-4 hover:scale-110 hover:bg-cyan-800 duration-200"
              >
                <strong className="text-lg lg:font-bold">{skill.name}</strong>
                <FontAwesomeIcon
                  icon={skill.icon}
                  className="text-6xl lg:text-7xl"
                />
              </li>
            );
          })}
        </ul> */}
      </div>
    </section>
  );
}

export default Skills;

function About() {
  return (
    <section id="about" className="bg-zinc-900 text-white">
      <div className="container mx-auto px-12 py-32">
        <h2 className="text-3xl lg:text-5xl font-bold text-center pb-12">
          About Me
        </h2>
        <div className="lg:text-left flex flex-col lg:flex-row gap-16">
          <div className="flex flex-col gap-6 text-slate-300 sm:w-1/2">
            <p className=" ">
              Hi, my name is Suman Sourabh and I am from India. In 2022, I
              joined ansrsource and hence, started my journey in the world of
              web development. Since then, I have worked on various websites and
              apps.
            </p>
            <p className="text-yellow-500">
              Looking for a Frontend/Full Stack Developer role.
            </p>
            <p className=" ">
              I have also written{" "}
              <a
                href="https://auth.geeksforgeeks.org/user/sumsourabh14/articles?utm_source=geeksforgeeks&utm_medium=article_author&utm_campaign=auth_user"
                target="_blank"
                rel="noreferrer"
                className="underline"
              >
                technical articles for GeeksforGeeks
              </a>{" "}
              and currently, share technical blogs on Medium (1,200+ followers),
              Dev.to, and Hashnode.
            </p>
            <p className=" ">
              In my free time, I love reading books (mainly fiction), writing my
              thoughts on Medium, listening to Lo-fi music and watching
              football.
            </p>
          </div>
          {/* <div>
            <img
              className="bg-gray-900 p-2 mx-auto w-72 md:w-80 xl:w-96 rounded-md shadow-2xl hover:scale-105 duration-200"
              src={myImage}
              alt="Suman Sourabh"
            />
          </div> */}
        </div>
      </div>
    </section>
  );
}

export default About;

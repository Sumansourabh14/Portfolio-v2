import LinkBtn from "./small-components/LinkBtn";
import SocialMediaIcons from "./small-components/SocialMediaIcons";

export default function Hero() {
  return (
    <section id="hero" className="flex justify-center items-center">
      <div className="container mx-auto px-12 py-40 xl:py-44">
        <div className="text-center flex flex-col lg:justify-center">
          <div className="flex flex-col gap-6 my-auto">
            <div>
              {/* <p className="lg:text-3xl mb-4">Hi, I am</p> */}
              <h1 className="text-5xl font-bold md:text-6xl lg:text-7xl xl:text-8xl tracking-wide">
                Suman Sourabh
              </h1>
              <h2 className="lg:text-xl mt-4 text-zinc-700">
                Frontend Web Developer | Freelance Technical Writer
              </h2>
            </div>
            <SocialMediaIcons />
            <LinkBtn
              link={`https://pdflink.to/564d4738/`}
              linkText="Check Out Resume"
              classes="mx-auto bg-black text-white tracking-wide font-medium shadow-xl px-12 py-4 hover:bg-zinc-700 duration-200"
            />
          </div>
        </div>
        {/* <a href="#skills">
          <FontAwesomeIcon
            icon={faAnglesDown}
            className="bg-gray-800 rounded-full p-2 text-2xl lg:text-4xl animate-bounce hover:bg-sky-700 duration-200"
          />
        </a> */}
      </div>
    </section>
  );
}

export default function Contact() {
  return (
    <section id="contact">
      <div className="container mx-auto px-12 py-40 gap-10">
        <div className="flex flex-col gap-10 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold lg:text-5xl">Contact Me</h2>
          <p className="text-zinc-700">
            If you like my work or want to hire me, please feel free to shoot me
            an email on{" "}
            <span className="underline">sumsourabh14@gmail.com</span> by
            pressing the button below.
          </p>
          <div>
            <a
              href="mailto:sumsourabh14@gmail.com"
              className="bg-black text-white font-bold px-10 py-4 hover:bg-zinc-800 duration-200"
            >
              Send me an email!
            </a>
          </div>
          <div className="flex flex-col gap-4">
            <p>
              or contact me through{" "}
              <a
                href="https://www.linkedin.com/in/sumansourabh14"
                className="underline"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>{" "}
              or{" "}
              <a
                href="https://x.com/sumansourabh48"
                className="underline"
                target="_blank"
                rel="noreferrer"
              >
                Twitter
              </a>
            </p>
          </div>
        </div>
        {/* <div className="text-right">
          <a href="#home" className="shadow-xl">
            <FontAwesomeIcon
              icon={faAnglesUp}
              className="animate-bounce text-2xl lg:text-4xl bg-gray-900 rounded-full p-2 hover:bg-sky-700 duration-200"
            />
          </a>
        </div> */}
      </div>
    </section>
  );
}

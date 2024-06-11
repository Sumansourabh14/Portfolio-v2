import React from "react";

const Testimonials = () => {
  return (
    <section id="contact" className="border-b-zinc-200 border-y-2">
      <div className="container mx-auto px-12 py-40 gap-10">
        <div className="flex flex-col gap-10 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold lg:text-5xl">
            What People Say About Me
          </h2>
          <blockquote className="text-zinc-700">
            <p>
              "I highly recommend Suman's work and work ethic. Suman created{" "}
              <a
                href="https://community.theta360.guide/t/ricoh-theta-client-react-native-demo-for-android/9739"
                target="_blank"
                className="underline"
              >
                a technical article for the RICOH THETA
              </a>{" "}
              developer community of which I am a co-organizer. He was quick to
              understand the topic, testing out the SDK, and asking about issues
              and ideas. He communicated back both questions and progress
              easily. The final result beat my expectations handily. I would
              recommend him highly for remote work with React Native topics. I
              myself intend to be doing more projects with Suman in the near
              future."
            </p>
          </blockquote>
          <footer>
            —Jesse Casman, <cite>Maker of Developer Communities</cite>
          </footer>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import SocialMediaIcons from "./small-components/SocialMediaIcons";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-zinc-900 text-white">
      <div className="container mx-auto px-12 py-20 text-center flex flex-col gap-4">
        <div className="flex flex-col gap-4 md:flex-row md:justify-between md:items-center md:gap-0">
          <p>Built by Suman Sourabh © {year}</p>
          <SocialMediaIcons />
        </div>
        <hr className="opacity-30" />
        <p className="text-sm text-gray-300">
          Made with{" "}
          <a href="https://reactjs.org/">
            <FontAwesomeIcon icon={faReact} /> (React)
          </a>
        </p>
      </div>
    </footer>
  );
}

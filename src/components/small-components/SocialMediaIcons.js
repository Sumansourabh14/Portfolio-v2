import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";

export default function SocialMediaIcons() {
    return (
        <div className="flex gap-4 lg:gap-6 justify-center lg:justify-start">
            <a href="https://github.com/Sumansourabh14">
                <FontAwesomeIcon icon={ faGithub } 
                className="text-2xl lg:text-3xl hover:text-stone-700 duration-300" />
            </a>
            <a href="https://www.linkedin.com/in/sumansourabh14/">
                <FontAwesomeIcon icon={ faLinkedin } 
                className="text-2xl lg:text-3xl hover:text-blue-400 duration-300" />
            </a>
            <a href="https://twitter.com/SumanSo77216044">
                <FontAwesomeIcon icon={ faTwitter } 
                className="text-2xl lg:text-3xl hover:text-sky-400 duration-300" />
            </a>
        </div>
    )
}
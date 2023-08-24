import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { socialMediaItems } from "../../utils/social-media-items";

export default function SocialMediaIcons() {
  return (
    <div className="flex gap-4 lg:gap-6 justify-center lg:justify-start">
      {socialMediaItems.map((item) => (
        <a key={item.id} href={item.link}>
          <FontAwesomeIcon
            icon={item.icon}
            className="text-2xl lg:text-3xl hover:text-stone-400 duration-300"
          />
        </a>
      ))}
    </div>
  );
}

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { socialMediaItems } from "../../utils/social-media-items";

export default function SocialMediaIcons() {
  return (
    <div className="flex gap-4 justify-center">
      {socialMediaItems.map((item) => (
        <a key={item.id} href={item.link}>
          <FontAwesomeIcon
            icon={item.icon}
            className="text-xl lg:text-2xl hover:text-stone-400 duration-200"
          />
        </a>
      ))}
    </div>
  );
}

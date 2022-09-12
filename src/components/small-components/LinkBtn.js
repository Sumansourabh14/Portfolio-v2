import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function LinkBtn(props) {
    return (
        <a 
            className={props.classes} 
            href={props.link} 
            target="blank"
        >
            {props.linkText} <FontAwesomeIcon icon={props.icon} />
        </a>
    )
}
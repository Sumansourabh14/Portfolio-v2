export default function LinkBtn(props) {
    return (
        <a className={props.classes} 
        href={props.link} target="blank">{props.linkText}</a>
    )
}
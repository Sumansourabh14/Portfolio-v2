import img1 from './Images/Movies-&-TV-website-ss1.png';
import img2 from './Images/music-app-random.png';
import img3 from './Images/Landing-Page-Project-1.png';
import { faCss3Alt, faFigma, faGitAlt, faHtml5, faJs, faMarkdown, faReact, faSass, faWordpress } from '@fortawesome/free-brands-svg-icons';

const aboutMe = [
    {
        id: 1,
        para: "My name is Suman Sourabh and I like to design and build things for the web."
    }
];

const education = [
    {
        id: 1,
        schoolName: "Lovely Professional University",
        specialization: "B.Tech (Mechanical Engineering)",
        total: "8.42 CGPA",
        year: 2021,
    },
    {
        id: 2,
        schoolName: "Kendriya Vidyalaya",
        specialization: "Class XII (CBSE)",
        total: "82%",
        year: 2017,
    },
];

const skills = [
    {
        id: 1,
        name: "JavaScript",
        icon: faJs,
    },
    {
        id: 2,
        name: "HTML",
        icon: faHtml5,
    },
    {
        id: 3,
        name: "CSS",
        icon: faCss3Alt,
    },
    {
        id: 4,
        name: "Git",
        icon: faGitAlt,
    },
    {
        id: 5,
        name: "Markdown",
        icon: faMarkdown,
    },
    {
        id: 6,
        name: "React",
        icon: faReact,
    },
    {
        id: 7,
        name: "WordPress",
        icon: faWordpress,
    },
    {
        id: 8,
        name: "Sass",
        icon: faSass,
    },
    {
        id: 9,
        name: "Figma",
        icon: faFigma,
    },
];

const projects = [
    {
        id: 1,
        imgSrc: img1,
        alt: "Movies and TV Show website home page",
        projectName: "Movies & TV Show Website with API",
        technologies: "JavaScript, HTML, CSS",
        description: "Used the concept of Fetch API in JavaScript to develop and design website listing movies and TV shows.",
        projectLink: "https://sumansourabh14.github.io/Movies-TV-Website/",
        githubLink: "https://github.com/Sumansourabh14/Movies-TV-Website"
    },
    {  
        id: 2, 
        imgSrc: img2,
        alt: "Random Music Player website home page",
        projectName: "Random Music Player",
        technologies: "JavaScript, HTML, CSS",
        description: "Developed a webpage using the Web Audio API in JavaScript.",
        projectLink: "https://sumansourabh14.github.io/Music-App/",
        githubLink: "https://github.com/Sumansourabh14/Music-App",
    },
    {
        id: 3,
        "imgSrc": img3,
        alt: "Product landing page home page",
        projectName: "Product Landing Page",
        technologies: "HTML, CSS, JavaScript",
        description: "A landing page with the help of HTML, CSS and a little bit of JavaScript.",
        projectLink: "https://sumansourabh14.github.io/New-Landing-Page-with-HTML-CSS-JavaScript/",
        githubLink: "https://github.com/Sumansourabh14/New-Landing-Page-with-HTML-CSS-JavaScript",
    },
]

export { aboutMe, education, skills };
export default projects;
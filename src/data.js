import {
  faCss3Alt,
  faFigma,
  faGitAlt,
  faHtml5,
  faJs,
  faMarkdown,
  faNode,
  faReact,
  faWordpress,
} from "@fortawesome/free-brands-svg-icons";
import img1 from "./Images/libertas-home-page.png";
import img6 from "./Images/MovieDB-large-screens.png";
import img3 from "./Images/apple-website-clone-hero-section.png";

const aboutMe = [
  {
    id: 1,
    para: "My name is Suman Sourabh and I like to design and build things for the web.",
  },
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
    id: "react",
    name: "React",
    icon: faReact,
  },
  {
    id: "javascript",
    name: "JavaScript",
    icon: faJs,
  },
  {
    id: "nodejs",
    name: "Node.js",
    icon: faNode,
  },
  {
    id: "html",
    name: "HTML",
    icon: faHtml5,
  },
  {
    id: "css",
    name: "CSS",
    icon: faCss3Alt,
  },
  {
    id: "git",
    name: "Git",
    icon: faGitAlt,
  },
  {
    id: "markdown",
    name: "Markdown",
    icon: faMarkdown,
  },
  {
    id: "wordpress",
    name: "WordPress",
    icon: faWordpress,
  },
  {
    id: "figma",
    name: "Figma",
    icon: faFigma,
  },
];

const projects = [
  {
    id: 1,
    imgSrc: img1,
    alt: "Libertas - Online Discussion Platform",
    projectName: "Libertas - Online Discussion Platform",
    technologies: [
      "Next.js 13",
      "Material UI",
      "Node.js",
      "Express",
      "MongoDB",
      "Firebase",
      "JWT",
    ],
    description:
      "Libertas is an online discussion platform where users can create posts, engage with them by upvoting or downvoting and by adding comments",
    projectLink: "https://libertas-vert.vercel.app/",
    githubLink: "https://github.com/Sumansourabh14/libertas-frontend",
  },
  {
    id: 2,
    imgSrc: img6,
    alt: "MovieDB - Database for Movies",
    projectName: "MovieDB - Database for Movies",
    technologies: ["React", "Tailwind CSS", "Firebase", "Axios", "TMDB API"],
    description:
      "With Firebase authentication, users can find the latest, top-rated and genre based movies plus their ratings, cast and reviews - all in a single website.",
    projectLink: "https://movies-tv-db-react.web.app/",
    githubLink: "https://github.com/Sumansourabh14/movie-database",
  },
  {
    id: 3,
    imgSrc: img3,
    alt: "Apple Website Clone",
    projectName: "Apple Website Clone",
    technologies: ["React", "Tailwind CSS", "daisyUI", "Netlify"],
    description:
      "Homepage of Apple's official website consisting of a responsive navbar, grid layout, carousel, dynamic footer with accordion, etc",
    projectLink: "https://apple-clone-suman-sourabh.netlify.app/",
    githubLink: "https://github.com/Sumansourabh14/apple-website-clone-v1",
  },
];

export { aboutMe, education, skills };
export default projects;

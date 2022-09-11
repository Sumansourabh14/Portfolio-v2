import img1 from './Images/Movies-&-TV-website-ss1.png';
import img2 from './Images/music-app-random.png';
// import img3 from './Images/Landing-Page-Project-1.png';
import img4 from './Images/random-advice-generator-v1.png';
import { faBootstrap, faCss3Alt, faFigma, faGitAlt, faHtml5, faJs, faMarkdown, faReact, faSass, faWordpress } from '@fortawesome/free-brands-svg-icons';

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
        name: "React",
        icon: faReact,
    },
    {
        id: 2,
        name: "JavaScript",
        icon: faJs,
    },
    {
        id: 3,
        name: "HTML",
        icon: faHtml5,
    },
    {
        id: 4,
        name: "CSS",
        icon: faCss3Alt,
    },
    {
        id: 5,
        name: "Bootstrap",
        icon: faBootstrap,
    },
    {
        id: 6,
        name: "Git",
        icon: faGitAlt,
    },
    {
        id: 7,
        name: "Markdown",
        icon: faMarkdown,
    },
    {
        id: 8,
        name: "WordPress",
        icon: faWordpress,
    },
    {
        id: 9,
        name: "Sass",
        icon: faSass,
    },
    {
        id: 10,
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
        description: "A website that uses the TMDB API to fetch all the movies and TV series on the basis of multiple categories. A search functionality to filter results on the basis of a movie's or show's name.",
        projectLink: "https://sumansourabh14.github.io/Movies-TV-Website/",
        githubLink: "https://github.com/Sumansourabh14/Movies-TV-Website"
    },
    {  
        id: 2, 
        imgSrc: img2,
        alt: "Random Music Player website home page",
        projectName: "Random Music Player",
        technologies: "JavaScript, HTML, CSS",
        description: "Webpage that plays a random audio track with the HTMLMediaElement API. Includes the ability to pause & play the track, jump to any given point in the track.",
        projectLink: "https://sumansourabh14.github.io/Music-App/",
        githubLink: "https://github.com/Sumansourabh14/Music-App",
    },
    // {
    //     id: 3,
    //     "imgSrc": img3,
    //     alt: "Product landing page home page",
    //     projectName: "Product Landing Page",
    //     technologies: "HTML, CSS, JavaScript",
    //     description: "A landing page with the help of HTML, CSS and a little bit of JavaScript.",
    //     projectLink: "https://sumansourabh14.github.io/New-Landing-Page-with-HTML-CSS-JavaScript/",
    //     githubLink: "https://github.com/Sumansourabh14/New-Landing-Page-with-HTML-CSS-JavaScript",
    // },
    {
        id: 3,
        "imgSrc": img4,
        alt: "Random Advice Generator home page",
        projectName: "Random Advice Generator",
        technologies: "React, Tailwind CSS, Axios",
        description: "A project that generates random advice with the click of a button using an advice API with the Axios library.",
        projectLink: "https://sumansourabh14.github.io/Random-Advice-Generator/",
        githubLink: "https://github.com/Sumansourabh14/Random-Advice-Generator",
    },
]

export { aboutMe, education, skills };
export default projects;
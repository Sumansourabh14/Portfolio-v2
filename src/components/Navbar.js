import { faBarsStaggered, faCode, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import resume from "../Assets/Suman-Sourabh-Resume.pdf"

export default function Navbar() {

    const [responsiveNavbar, setResponsiveNavbar] = useState(false);

    function handleNavbar() {
        return setResponsiveNavbar(!responsiveNavbar);
    }

    const navbar = [
        {
            id: 1, 
            liName: "About",
            link: "#about",
        },
        {
            id: 2,
            liName: "Skills",
            link: "#skills",
        },
        {
            id: 3,
            liName: "Projects",
            link: "#projects",
        },
        {
            id: 4,
            liName: "Contact",
            link: "#contact",
        },
    ];

    return (
        <header className="px-4 py-4 fixed left-0 right-0 mx-auto bg-gray-900 shadow-2xl z-50 md:backdrop-blur-xl md:bg-opacity-70">
            <nav className="container mx-auto 
            flex justify-between items-center">
                <h2 className="cursor-default text-3xl"><FontAwesomeIcon icon={faCode} /></h2>
                
                <ul className={(responsiveNavbar ? "left-0" : "-left-full") + " fixed bottom-0 top-20 bg-gray-900 bg-opacity-95 md:bg-transparent w-10/12 px-4 py-6 md:py-0 space-y-5 md:static md:flex md:space-y-0 md:gap-8 justify-center text-md font-bold xl:text-lg transition-left duration-200"}>
                    {navbar.map(navbarElement => {
                        return (
                            <li key={navbarElement.id} className="hover:md:translate-y-1 duration-100">
                                <a className="hover:text-cyan-500 duration-100" href={navbarElement.link}>{navbarElement.liName}</a>
                            </li>
                        )})
                    }
                </ul>

                <div className="flex gap-8 items-center">
                    <a href={resume}
                    alt="Suman Sourabh Resume"
                    target="blank"
                    className="px-6 py-3 border rounded hover:rounded-lg hover:bg-cyan-800 duration-200">Resume</a>
                    
                    {/* Hamburger Menu - icon change */}
                    {responsiveNavbar ? (
                        <button className="md:hidden" 
                            onClick={handleNavbar}>
                            <FontAwesomeIcon icon={faXmark} className="text-4xl cursor-pointer hover:text-red-600 duration-100" />
                        </button>
                        ) : (
                        <button className="md:hidden" 
                            onClick={handleNavbar}>
                            <FontAwesomeIcon icon={faBarsStaggered} className="text-4xl cursor-pointer hover:text-cyan-600 duration-100" />
                        </button>
                        )
                    }
                </div>
            </nav>
        </header>
    )
}
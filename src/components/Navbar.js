import { faBarsStaggered, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

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
    <header className="px-12 py-4 fixed left-0 right-0 mx-auto bg-black text-white shadow-2xl z-50 md:backdrop-blur-md md:bg-opacity-70">
      <nav className="container mx-auto flex justify-between items-center">
        <div className="text-xl w-44">
          <a href="https://sumansourabh.netlify.app/">SS</a>
        </div>

        <ul
          className={
            (responsiveNavbar ? "left-0" : "-left-full") +
            " fixed bottom-0 top-[70px] bg-zinc-900 bg-opacity-95 md:bg-transparent w-10/12 px-4 py-6 md:py-0 space-y-5 md:static md:flex md:space-y-0 md:gap-8 justify-center text-md xl:text-lg transition-left duration-200"
          }
        >
          {navbar.map((navbarElement) => {
            return (
              <li
                key={navbarElement.id}
                className="hover:md:translate-y-1 duration-100"
              >
                <a className="duration-100" href={navbarElement.link}>
                  {navbarElement.liName}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="flex gap-8 items-center">
          <a
            href={`https://drive.google.com/file/d/13TUwADbZiZFCvz1kVKFD2Jz-Sxkf0mCA/view?usp=sharing`}
            alt="Suman Sourabh Resume"
            target="blank"
            className="px-8 py-2 border hover:rounded-lg hover:bg-zinc-700 duration-200"
          >
            Resume
          </a>

          {/* Hamburger Menu - icon change */}
          <button className="md:hidden" onClick={handleNavbar}>
            <FontAwesomeIcon
              icon={responsiveNavbar ? faXmark : faBarsStaggered}
              className="text-4xl cursor-pointer hover:text-red-600 duration-100"
            />
          </button>
        </div>
      </nav>
    </header>
  );
}

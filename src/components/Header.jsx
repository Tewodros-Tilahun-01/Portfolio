import React, { useState, useEffect } from "react";
import NavItem from "./NavItem";
import githubIcon from "../assets/github-square.svg";
import linkedinIcon from "../assets/linkedin.svg";

import logo from "../assets/logo.png";
function Header() {
  const navList = ["Home", "About", "Projects", "Skills"];

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [navItem, setNavItem] = useState("Home");
  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header
      className={` fixed py-6 px-4  md:px-16 lg:px-20 w-full z-50 bg-custom ${
        scrollPosition > 5 && !isSidebarOpen
          ? "bg-custom/90 backdrop-blur-lg border-b-2 border-blue-500"
          : ""
      }  `}
    >
      <nav className="flex justify-between items-center">
        <div className="w-18 h-10 md:w-24 md:h-12">
          <a href="#">
            <img src={logo} alt="" className="w-full h-full" />
          </a>
        </div>

        <button
          className="block md:hidden text-white text-2xl "
          onClick={(e) => {
            e.stopPropagation();
            setIsSidebarOpen(!isSidebarOpen);
          }}
        >
          ☰
        </button>
        <ul className="hidden md:flex flex-row items-center">
          {navList.map((nav) => (
            <li key={nav}>
              <NavItem
                name={nav}
                setIsSidebarOpen={setIsSidebarOpen}
                navItem={navItem}
                setNavItem={setNavItem}
              />
            </li>
          ))}
          <a href="https://github.com/tewodros-tilahun-01" target="_blank">
            <img
              src={githubIcon}
              className="w-6 h-6 ml-6 bg-white hover:bg-blue-400 transition-all hover:scale-150"
              alt="GitHub"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/tewodros--tilahun/"
            target="_blank"
          >
            <img
              src={linkedinIcon}
              className="w-6 h-6 ml-4 bg-white hover:bg-blue-400 transition-all hover:scale-150"
              alt="LinkedIn"
            />
          </a>
        </ul>
      </nav>

      <div
        className={`fixed top-0 left-0 h-full pt-2 bg-black/80 backdrop-blur-lg transition-transform duration-500  ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:hidden w-1/2 z-500`}
      >
        <button
          className="text-red-800 font-bold text-4xl p-4 animate-pulse "
          onClick={() => setIsSidebarOpen(false)}
        >
          ✕
        </button>
        <ul className="flex flex-col p-6 items-center justify-center">
          {navList.map((nav) => (
            <li key={nav} className="mb-4 mt-2">
              <NavItem
                name={nav}
                setIsSidebarOpen={setIsSidebarOpen}
                navItem={navItem}
                setNavItem={setNavItem}
              />
            </li>
          ))}
          <li className="text-xl capitalize ">
            <a href="https://github.com/tewodros-tilahun-01" target="_blank">
              <img
                src={githubIcon}
                className="w-6 h-6 bg-white  transition-all inline-block mr-2"
                alt="GitHub"
              />
              <span>github</span>
            </a>
          </li>
          <li className="mt-4 text-xl capitalize  ">
            <a
              href="https://www.linkedin.com/in/tewodros--tilahun/"
              target="_blank"
            >
              <img
                src={linkedinIcon}
                className="w-6 h-6 bg-white  transition-all  inline-block mr-2"
                alt="LinkedIn"
              />
              <span>linkedin</span>
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;

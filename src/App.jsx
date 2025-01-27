import React, { useState, useEffect } from "react";
import NavItem from "./components/NavItem";
import githubIcon from "./assets/github-square.svg";
import linkedinIcon from "./assets/linkedin.svg";
import profile from "./assets/photo_2024.jpg";
import Card from "./components/Card";
import logo from "./assets/logo.png";
function App() {
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
  const navList = ["Home", "About", "Projects", "Contact Me"];

  return (
    <div className="bg-custom text-white ">
      <header
        className={` fixed py-6 px-4  md:px-16 lg:px-20 w-full z-50 bg-custom ${
          scrollPosition > 5 && !isSidebarOpen
            ? "bg-custom/90 backdrop-blur-lg border-b-2 border-blue-500"
            : ""
        }  `}
      >
        <nav className="flex justify-between items-center">
          <div className="font-poppins text-xl w-18 h-10 md:w-24 md:h-12">
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

      <main className="px-4 md:px-16 lg:px-20  pt-12">
        <section className="md:flex flex-row h-5/6 pt-20 items-center">
          <div className=" w-full md:w-[50%]">
            <p className="font-poppins text-xl capitalize">Hi I'm Teddy</p>
            <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-bold font-poppins uppercase">
              I'm a full-stack <span className="block">developer</span>
            </h1>
            <p className="capitalize leading-5 mt-8 text-gray-300">
              I am a passionate full-stack developer skilled in creating modern,
              user-friendly web applications. With experience in the MERN stack,
              I enjoy solving complex problems and building solutions that make
              people's lives easier. I'm constantly learning and exploring new
              technologies to enhance my craft.
            </p>
            <div className="flex items-center justify-start mt-8">
              <a
                href="./TewodrosTilahunResume_2.pdf"
                className="inline-block pl-14 pr-14 capitalize pt-4 pb-4 text-xl bg-blue-500 rounded-lg transition-all hover:bg-white hover:text-blue-500 hover:scale-105 active:scale-95 active:text-red-500"
              >
                Resume
              </a>
            </div>
          </div>
          <div className="w-full md:w-[48%] flex items-end justify-center">
            <img
              src="./design-3.png"
              className="bg-contain mt-8 md:mt-0 bg-center"
              alt="Design"
            />
          </div>
        </section>
        <section
          id="About"
          className="scroll-mt-36 flex h-3/5  items-start pb-10 gap-10 mt-16 md:gap-20 md:pb-20 md:flex-row  md:mt-36 flex-col-reverse"
        >
          <div className="w-full md:w-1/3 flex items-end justify-center ">
            <img src={profile} alt="" className="" />
          </div>
          <div className="w-full md:w-1/2">
            <h1 className="text-2xl uppercase font-poppins">About me</h1>
            <p className="font-poppins text-sm text-gray-300 ">
              My name is tewodros tilahun, a senior year student at Bahir Dar
              University. My passion for coding started when I joined
              university, and I have since developed into a full-stack developer
              specializing in front-end development. Leveraging the MERN stack,
              I build intuitive and dynamic applications with a focus on
              creating seamless user experiences. I have gained valuable
              expertise through The Odin Project, which has deepened my
              knowledge of front-end design and development.
              <br />
              <br />
              Problem-solving is one of my key interests, driving me to tackle
              challenges and craft efficient solutions. I am also exploring
              React Native to expand my skills in mobile app development, aiming
              to make a meaningful impact through technology
            </p>
          </div>
        </section>
        <section
          id="Projects"
          className="scroll-mt-32 flex items-center justify-center flex-col pb-8"
        >
          <h1 className="text-3xl md:text-4xl mb-12 uppercase">Projects</h1>
          <div className="flex flex-row flex-wrap md:flex-nowrap justify-around w-full gap-10 ">
            <Card />
            <Card />
            <Card />
          </div>
        </section>
      </main>

      <footer id="Contact Me"></footer>
    </div>
  );
}

export default App;

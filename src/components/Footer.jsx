import React from "react";
import logo from "../assets/logo.png";
import githubIcon from "../assets/github-square.svg";
import instagram from "../assets/instagram.svg";
import linkedinIcon from "../assets/linkedin.svg";
function Footer() {
  return (
    <footer
      id="Contact Me"
      className="flex justify-center items-start mt-14 md:mt-32 py-4 relative"
    >
      <div className="flex flex-col items-center">
        <div className="text-xl w-16 h-10  md:w-24 md:h-12 ">
          <img src={logo} alt="" />
        </div>
        <div className=" mt-2 w-1/3">
          <ul className="flex justify-between w-full ">
            <a href="https://github.com/tewodros-tilahun-01" target="_blank">
              <img
                src={githubIcon}
                className="w-6 h-6  bg-gray-400 hover:bg-blue-400 transition-all hover:scale-150"
                alt="GitHub"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/tewodros--tilahun/"
              target="_blank"
            >
              <img
                src={linkedinIcon}
                className="w-6 h-6 bg-gray-400 hover:bg-blue-400 transition-all hover:scale-150"
                alt="LinkedIn"
              />
            </a>
            <a
              href="https://www.instagram.com/tewodros_tilahun_01"
              target="_blank"
            >
              <img
                src={instagram}
                className="w-6 h-6  bg-gray-400 hover:bg-blue-400 transition-all hover:scale-150"
                alt="instagram"
              />
            </a>
          </ul>
        </div>
        <div className=" absolute bottom-12 w-full border b-2 mt-16"></div>
        <p className="mt-8">Copyright © 2025 tewodros tilahun </p>
      </div>
      <div></div>
    </footer>
  );
}

export default Footer;

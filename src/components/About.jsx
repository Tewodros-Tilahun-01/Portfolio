import React from "react";
import profile from "../assets/photo_2024.jpg";
function About() {
  return (
    <section
      id="About"
      className="scroll-mt-36 flex h-3/5  items-start pb-10 gap-10 mt-16 md:gap-20 md:pb-20 md:flex-row  md:mt-36 flex-col-reverse px-4 md:px-16 lg:px-20 "
    >
      <div className="w-full md:w-1/3 flex items-end justify-center ">
        <img src={profile} alt="" className="" />
      </div>
      <div className="w-full md:w-1/2">
        <h1 className="text-2xl uppercase font-poppins">About me</h1>
        <p className="font-poppins text-sm text-gray-300 ">
          My name is tewodros tilahun, a senior year student at Bahir Dar
          University. My passion for coding started when I joined university,
          and I have since developed into a full-stack developer specializing in
          front-end development. Leveraging the MERN stack, I build intuitive
          and dynamic applications with a focus on creating seamless user
          experiences. I have gained valuable expertise through The Odin
          Project, which has deepened my knowledge of front-end design and
          development.
          <br />
          <br />
          Problem-solving is one of my key interests, driving me to tackle
          challenges and craft efficient solutions. I am also exploring React
          Native to expand my skills in mobile app development, aiming to make a
          meaningful impact through technology
        </p>
      </div>
    </section>
  );
}

export default About;

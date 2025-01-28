import React from "react";

function Hero() {
  return (
    <section className="md:flex flex-row h-5/6 pt-20 items-center">
      <div className=" w-full md:w-[50%]">
        <p className="font-poppins text-xl capitalize">Hi I'm Teddy</p>
        <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-bold font-poppins uppercase">
          I'm a full-stack <span className="block">developer</span>
        </h1>
        <p className="capitalize leading-5 mt-8 text-gray-300">
          I am a passionate full-stack developer skilled in creating modern,
          user-friendly web applications. With experience in the MERN stack, I
          enjoy solving complex problems and building solutions that make
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
  );
}

export default Hero;

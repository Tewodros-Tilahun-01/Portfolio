import React from "react";

function Card({ image, live, github, title, description }) {
  return (
    <div className="flex flex-col w-full hover:shadow-lg hover:shadow-blue-500/50 hover:scale-105 px-6 py-6 bg-custom2 rounded-lg outline outline-1 outline-gray-500  transform transition-transform duration-300 ">
      <img
        src={image}
        alt=""
        className="w-full h-48 bg-gray-500 object-cover"
      />
      <div className="mt-5">
        <p className="text-2xl uppercase text-orange-700">{title}</p>
        <p className="mt-2 text-gray-300">{description}</p>
        <div className="mt-6 flex justify-end gap-4">
          <a
            href={live}
            className="px-4 py-2 border-blue-400 border-2 rounded-2xl font-poppins active:scale-95 relative group cursor-pointer "
          >
            <span className="group-hover:text-black relative z-30 uppercase animate-pulse">
              live demo
            </span>
            <span className=" absolute  top-0 left-1/2 border-transparent border-2  rounded-xl h-full bg-border-blue-400 w-0  group-hover:w-full group-hover:left-0 group-hover:bg-blue-400 z-10 transition-all duration-300 ease-out"></span>
          </a>
          <a
            href={github}
            className="px-4 py-2 border-blue-400 border-2 rounded-2xl font-poppins active:scale-95 relative group cursor-pointer"
          >
            <span className="group-hover:text-black relative z-30 uppercase">
              github
            </span>
            <span className=" absolute  top-0 left-1/2 border-transparent border-2  rounded-xl h-full bg-border-blue-400 w-0  group-hover:w-full group-hover:left-0 group-hover:bg-blue-400 z-10 transition-all duration-300 ease-out"></span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Card;

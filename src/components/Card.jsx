import React from "react";
import projectImage from "../assets/photo1.png";
function Card() {
  return (
    <div className="flex flex-col w-full hover:shadow-lg hover:shadow-blue-500/50 hover:scale-105 px-6 py-6 bg-custom2 rounded-lg outline outline-1 outline-gray-500  transform transition-transform duration-300 ">
      <img
        src={projectImage}
        alt=""
        className="w-full h-48 bg-gray-500 object-cover"
      />
      <div className="mt-5">
        <p>title</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. omnis
          exercitationem excepturi accusamus suscipit enim doloremque reiciendis
          mollitia quae?
        </p>
        <div className="mt-8 flex justify-end gap-4">
          <a
            href=""
            className="px-4 py-2 border-blue-400 border-2 rounded-2xl font-poppins active:scale-95 relative group cursor-pointer "
          >
            <span className="group-hover:text-black relative z-30 uppercase animate-pulse">
              live demo
            </span>
            <span className=" absolute  top-0 left-1/2 border-transparent border-2  rounded-xl h-full bg-border-blue-400 w-0  group-hover:w-full group-hover:left-0 group-hover:bg-blue-400 z-10 transition-all duration-300 ease-out"></span>
          </a>
          <a
            href=""
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

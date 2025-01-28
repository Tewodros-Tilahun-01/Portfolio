import React from "react";

function NavItem({ name, setIsSidebarOpen, navItem, setNavItem }) {
  return (
    <a
      href={name == "Home" ? "#" : `#${name}`}
      onClick={(e) => {
        e.stopPropagation();
        setIsSidebarOpen(false);
        setNavItem(`${name}`);
      }}
      className={`${
        name == navItem ? "text-blue-500" : ""
      } relative group inline-block transition-all ease-out duration-300 pl-1 pr-1 pb-2 pt-2 text-xl ml-4 font-poppins`}
    >
      {name}
      <span className="absolute left-0 bottom-1 w-0 h-[5px] bg-blue-400 rounded-[16px] transition-all z-0 ease-out duration-300 group-hover:w-full group-hover:z[1] "></span>
    </a>
  );
}

export default NavItem;

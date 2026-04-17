import React from "react";
import Navlinks from "./Navlinks";
import logoImg from '../../assets/logo.png'
import { CiHome } from "react-icons/ci";
import { ImStatsDots } from "react-icons/im";
import { IoMdTime } from "react-icons/io";
const Navbar = () => {
    const navItems = [
    {
      path: "/",
      text: "Home",
      icon:<CiHome />
    },
    {
      path: "/selectedFriends",
      text: "Timeline",
      icon: <IoMdTime />
    },
    {
      path: "/stats",
      text: "Stats",
      icon: <ImStatsDots />
    },
  ];
  return (
    <div className="navbar bg-base-100 shadow-sm px-20">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
             {navItems.map((item, index) => (
            <Navlinks className='flex' key={index} to={item.path}>
              {item.icon}
              {item.text}
            </Navlinks>
          ))}
          </ul>
        </div>
        <img src={logoImg} alt="" />
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navItems.map((item, index) => (
            <Navlinks  className='flex items-center gap-1 text-lg'  key={index} to={item.path}>
              {item.icon}
              {item.text}
            </Navlinks>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

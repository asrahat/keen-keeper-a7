import React from "react";
import logoImg from "../../assets/logo-xl.png";
import instaImg from "../../assets/instagram.png";
import facebookImg from "../../assets/facebook.png";
import XImg from "../../assets/twitter.png";
import { Link } from "react-router";
const Footer = () => {
  return (
    <footer className="bg-[#244d3f] flex flex-col justify-center items-center text-primary-content p-10 space-y-3">
     
        <img src={logoImg} alt="" />
        <p className="text-lg font-semibold">
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the relationships that matter most.
        </p>
      
      <nav className="flex flex-col items-center space-y-3">
        <h2 className="text-xl font-bold">Social Links</h2>
        <div className="grid grid-flow-col gap-4">
          <Link to='/'>
            <img src={instaImg} alt="" />
          </Link>
          <Link to='/'>
            <img src={facebookImg} alt="" />
          </Link>
          <Link to='/'>
            <img src={XImg} alt="" />
          </Link>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;

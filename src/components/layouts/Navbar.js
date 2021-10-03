import React, { useState } from "react";
import {Link} from 'react-scroll'
import { useRouter } from "next/router";
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

export default function Navbar() {
  const router = useRouter();
  const [toggleShowNav, setToggleShowNav] = useState(false);

  const activeLink = (path) => {
    // return router.pathname === path ? 'navbar__item active' : 'navbar__item';
    return router.pathname === path ? 'navbar__item' : 'navbar__item';
  };

  return (
    <div className="navbar">
      <div className="container">
        <div className="navbar__content">
          <a href="/">
            <img src="logo.png" alt="logo" className="navbar__logo" />
          </a>
          <ul
            className="navbar__group"
            style={{ transform: toggleShowNav ? "translateX(0px)" : "" }}
          >
              <Link smooth={true} duration={1000} offset={-100} to="home" className={activeLink("/")}>HOME</Link>
            
              <Link smooth={true} duration={1000} offset={-100} to="about" className={activeLink("/about")}>ABOUT</Link>
            
              <Link smooth={true} duration={1000} offset={-100} to="services" className={activeLink("/services")}>SERVICES</Link>
              
              <Link smooth={true} duration={1000} offset={-100} to="testimonials" className={activeLink("/testimonials")}>TESTIMONIALS</Link>
            
            {/* <NextLink href="/contact"> */}
              <Link smooth={true} duration={1000} to="contact" className={activeLink("/contact")}>CONTACT</Link>
            {/* </NextLink> */}
            <button className="btn btn__trial">FREE TRIAL</button>
          </ul>
          <div
            onClick={() => setToggleShowNav(false)}
            className={toggleShowNav ? "navbar__overlay" : ""}
          ></div>
          <span
            onClick={() => setToggleShowNav(!toggleShowNav)}
            className="navbar__hamburger"
            style={{ fontSize: "2.8rem" }}
          >
            {!toggleShowNav ? <FaBars /> : <IoClose />}
          </span>
        </div>
      </div>
    </div>
  );
}

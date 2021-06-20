import React, {useState} from "react";
import NextLink from "next/link";
import {useRouter} from 'next/router'
import {FaBars} from 'react-icons/fa'
import {IoClose} from 'react-icons/io5'



export default function Navbar() {
  const router = useRouter()
  const [toggleShowNav, setToggleShowNav] = useState(false)

  const activeLink = (path) =>{
    return router.pathname === path ? `navbar__item active` : `navbar__item`
  }

  return (
    <div className="navbar">
      <a href="/">
        <img src="logo.png" alt="logo" className="navbar__logo" />
      </a>
      <ul className="navbar__group" style={{transform: toggleShowNav ? 'translateX(0px)' : ''}}>
        <NextLink href="/">
          <a className={activeLink('/')}>HOME</a>
        </NextLink>
        <NextLink href="/about">
          <a className={activeLink('/about')}>ABOUT</a>
        </NextLink>
        <NextLink href="/services">
          <a className={activeLink('/services')}>SERVICES</a>
        </NextLink>
        <NextLink href="/contact">
          <a className={activeLink('/contact')}>CONTACT</a>
        </NextLink>
        
        {/* <NextLink href="/free-trial">
          <a className={activeLink('/free-trial')}>FREE TRIAL</a>
        </NextLink> */}
      </ul>
      <button className="btn btn__trial">
          FREE TRIAL
        </button>
      <span onClick={() => setToggleShowNav(!toggleShowNav)} className="navbar__hamburger">
        {
          !toggleShowNav ? (<FaBars />) : (<IoClose style={{fontSize: '2.2rem'}}/>)
        }
      </span>
    </div>
  );
}

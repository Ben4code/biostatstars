import React from "react";
import NextLink from "next/link";
import { useRouter } from "next/router";

export default function Footer() {
  const router = useRouter();
  const activeLink = (path) => {
    return router.pathname === path ? `navbar__item active` : `navbar__item`;
  };

  return (
    <footer className="footer">
      <div className="footer__secondary">
        <div className="container">
          <div className="footer__secondary-content">
            <div className="footer__secondary-first">
              <a href="/">
                <img
                  src="logo.png"
                  alt="logo"
                  className="footer__secondary--logo"
                />
              </a>
              <div className="footer__secondary--address">
                <p>10 Johnson's Road, New York.</p>
                <p>0432 233 5759</p>
              </div>
            </div>

            <div className="footer__secondary--links">
              <h4>WebSite Links</h4>
              <ul className="">
                <NextLink href="/">
                  <a className={activeLink("/")}>HOME</a>
                </NextLink>
                <NextLink href="/about">
                  <a className={activeLink("/about")}>ABOUT</a>
                </NextLink>
                <NextLink href="/services">
                  <a className={activeLink("/services")}>SERVICES</a>
                </NextLink>
                <NextLink href="/contact">
                  <a className={activeLink("/contact")}>CONTACT</a>
                </NextLink>
              </ul>
            </div>

            <div className="footer__secondary--social">
              <h4>Follow Us </h4>
              <a href="/">
                {" "}<i className="fa fa-twitter"></i>{" "}
                Twitter
              </a>
              <a href="/">
              {" "}<i className="fa fa-facebook"></i>{" "}
                Facebook
              </a>
              <a href="/">
              {" "}<i className="fa fa-youtube"></i>{" "}
                YouTube
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="footer__primary">
        <div className="container">
          <p>&copy; BioStatStars {new Date().getFullYear()}</p>
        </div>
      </div>
    </footer>
  );
}

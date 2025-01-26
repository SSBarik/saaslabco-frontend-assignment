import React from "react";
import "./Header.css";
import { FaGithub } from "react-icons/fa";

const Header = () => {
  return (
    <header>
      <div className="toolbar">
        <a href="/" className="branding" aria-label="Go to KickStats home">
          <img
            src="https://ik.imagekit.io/q4rna6net/logos/kickstarter_8FV7jGSn6P.png?updatedAt=1737801906550"
            alt="Kick Stats logo"
            className="logo"
          />
          <span>KickStats</span>
        </a>
        <span className="spacer"></span>
        <a
          href="https://github.com/SSBarik/saaslabco-frontend-assignment"
          target="_blank"
          className="icon-link"
          aria-label="View KickStats source code on GitHub"
        >
          <FaGithub size={26} />
        </a>
      </div>
    </header>
  );
};

export default Header;

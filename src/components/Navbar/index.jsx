import "./style.css";
import React, { useState, useEffect } from "react";
import Logo from "../../assets/logos/25LOGO.svg";

const links = [
  
  {
    id: "about",
    displayText: "ABOUT",
  },
  {
    id: "faq",
    displayText: "FAQ",
  },
  {
    id: "sponsors",
    displayText: "Sponsors",
  },
  {
    id: "footer",
    displayText: "Contact",
  },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 20) {
      setScrolled(true);
    }
    else {
      setScrolled(false);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
  })
  let navbarClasses = ['navbar-container'];
  if (scrolled) {
    navbarClasses.push('scrolled');
  }


  return (
    <div class={navbarClasses.join(" ")}>
      <a href="/" class="navbar-title">
        <img class="enlarge-text" src={Logo} alt="" />
      </a>
      <div class="navbar-links">
        <div className="nav-menu">
          {links.map((link, key) => (
            <a class="underline enlarge-text" href={`#${link.id}`} key={`nav${key}`}>
              {link.displayText}
            </a>
          ))}
          <a class="underline enlarge-text" href="https://forms.gle/MEH4gr5onEAw25QEA" target="_blank" rel="noopener noreferrer">Apply</a>


        </div>
      </div>

    </div>
  );
};

export default Navbar;
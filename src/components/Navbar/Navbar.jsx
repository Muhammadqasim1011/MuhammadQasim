import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

import menuIconDark from "../../assets/menu-dark.png";
import menuIconLight from "../../assets/menu-light.png";

const Navbar = () => {
    const [darkMode, setDarkMode] = useState(() => localStorage.getItem("theme") === "dark");
    const [menuOpen, setMenuOpen] = useState(false); 

    useEffect(() => {
        document.body.classList.toggle("dark-mode", darkMode);
        document.body.classList.toggle("light-mode", !darkMode);
        localStorage.setItem("theme", darkMode ? "dark" : "light");
    }, [darkMode]);

    useEffect(() => {
        const closeMenuOnClickOutside = (e) => {
            if (menuOpen && !e.target.closest(".header")) {
                setMenuOpen(false);
            }
        };
        document.addEventListener("click", closeMenuOnClickOutside);
        return () => document.removeEventListener("click", closeMenuOnClickOutside);
    }, [menuOpen]);

    return (
        <header className="header">
            <h2 className="logo">
                <span className="pink-clr">Q</span>ASIM
            </h2>
            <nav>
                <ul className={`nav-items ${menuOpen ? "open" : ""}`} id="menu-items">
                    <li><Link className="links" to="/about" onClick={() => setMenuOpen(false)}>ABOUT</Link></li>
                    <li><Link className="links" to="/service" onClick={() => setMenuOpen(false)}>SERVICE</Link></li>
                    <li><Link className="links" to="/resume" onClick={() => setMenuOpen(false)}>RESUME</Link></li>
                    <li><Link className="links" to="/portfolio" onClick={() => setMenuOpen(false)}>PORTFOLIO</Link></li>
                    <li><Link className="links" to="/contact" onClick={() => setMenuOpen(false)}>CONTACT</Link></li>
                    <li onClick={() => setDarkMode(!darkMode)}>
                        {darkMode ? "🌞" : "🌙"}
                    </li>
                </ul>
            </nav>
            <div className="mobile-view">
                <img
                    id="menu-icon"
                    src={darkMode ? menuIconLight : menuIconDark}
                    alt="Menu"
                    onClick={(e) => {
                        e.stopPropagation();
                        setMenuOpen(!menuOpen);
                    }}
                />
            </div>
        </header>
    );
};

export default Navbar;

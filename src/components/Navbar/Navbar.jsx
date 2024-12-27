import React from "react";
import { useState } from 'react';
import { getImageUrl } from "../../utils";
import styles from './Navbar.module.css';

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <nav className={styles.navbar}>
            <a href="/" className={styles.title}>Portfolio</a>
            <div className={styles.menu}>

                <img
                    className={styles.menuIcon}
                    src={menuOpen ? getImageUrl("nav/closeIcon.png") : getImageUrl("nav/menuIcon.png")}
                    alt="menu-button"
                    onClick={() => setMenuOpen(!menuOpen)}
                />
                <ul
                    className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
                    onClick={() => setMenuOpen(false)}
                >
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#cp">CP Ratings</a></li>
                    <li><a href="#contact">Contact Me</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;

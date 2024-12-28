import React from "react";
import { useState } from 'react';
import { getImageUrl } from "../../utils";
import styles from './Contact.module.css';

function Contact() {
    return (
        <footer id="contact" className={styles.container}>
            <div className={styles.text}>
                <h2>Contact</h2>
                <p>Feel free to reach out</p>
            </div>
            <ul className={styles.links}>
                <li className={styles.link}>
                    <img src={getImageUrl("contact/email.png")} alt="email icon" />
                    <a href="mailto:aritra@gmail.com">aritra@gmail.com</a>
                </li>
                <li className={styles.link}><img src={getImageUrl("contact/linkedin.png")} alt="linkedin icon" />
                    <a href="https://www.linkedin.com/in/aritra-hait-395788294">linkedin.com/in/aritra-hait-395788294
                    </a>
                </li>
                <li className={styles.link}>
                    <img src={getImageUrl("contact/github.png")} alt="github icon" />
                    <a href="https://www.github.com">github.com</a>
                </li>
            </ul>
        </footer>
    );
}
export default Contact;
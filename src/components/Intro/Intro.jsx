import React from "react";
import { useState } from 'react';
import { getImageUrl } from "../../utils";
import styles from './Intro.module.css';

function Intro() {
    return <section className={styles.intro}>
        <div className={styles.content}>
            <h1 className={styles.title} style={{ '--characters': 20 }}>Hi, I am Aritra Hait</h1>
            <p className={styles.description}>I’m a Frontend Developer skilled in HTML, CSS, JavaScript, and ReactJS, with working knowledge of backend tools like NodeJS, Express, and MongoDB in the MERN stack.
                <br />I also actively take part in competitive programming.</p>
            <a href="mailto:aritrahaitofficial@gmail.com" className={styles.contactBtn}>
                Contact Me
            </a>
        </div>

        <img className={styles.photo} src={getImageUrl("intro/me.jpg")} alt="Photo" />
        <div className={styles.topBlur} />
        <div className={styles.bottomBlur} />
    </section>
}

export default Intro;
import React from "react";
import { useState } from 'react';
import { getImageUrl } from "../../utils";
import styles from './Intro.module.css';

function Intro() {
    return <section className={styles.intro}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi, I am Aritra Hait</h1>
            <p className={styles.description}>I am a Frontend Developer with knowledge of HTML,CSS,Javascript and React JS.
                <br />I also actively take part in competitive programming.</p>
            <a href="mailto:myemail@email.com" className={styles.contactBtn}>
                Contact Me
            </a>
        </div>

        <img className={styles.photo} src={getImageUrl("intro/s7photo.jpg")} alt="Photo" />
        <div className={styles.topBlur} />
        <div className={styles.bottomBlur} />
    </section>
}

export default Intro;
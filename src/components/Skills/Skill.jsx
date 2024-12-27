import React from "react";
import { useState } from 'react';
import { getImageUrl } from "../../utils";
import styles from './Skill.module.css';
import skills from "../../data/skills.json";

function Skill() {
    return <section className={styles.container} id="skills">
        <h2 className={styles.title}>Skills</h2>
        <div className={styles.skills}>{
            skills.map((skill, id) => {
                return (
                    <div key={id} className={styles.skill}>
                        <div className={styles.skillImageContainer}>
                            <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                        </div>
                        <p>{skill.title}</p>
                    </div>
                );
            })
        }

        </div>
    </section >
}

export default Skill;

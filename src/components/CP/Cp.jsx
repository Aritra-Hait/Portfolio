import React from 'react'
import cp from "../../data/cp.json";
import styles from './CP.module.css'
function Cp() {
    return (
        <div className={styles.container} id="cp">
            <h2 className={styles.title}>Competitive Programming Ratings</h2>
            <div className={styles.ratings}>{
                cp.map((platform, id) => {
                    return (
                        <div key={id} className={styles.platformContainer}>

                            <h2 className={`${styles[platform.name]}`}>{platform.name}</h2>
                            <p>{platform.rating}</p>
                        </div>
                    );
                })
            }

            </div>
        </div >
    )
}

export default Cp
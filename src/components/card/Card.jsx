import React from "react";
import styles from './Card.module.css';
import arrowImage from './arrow.svg'

export default function Card({ number, title, content, imageSrc, classname, description, punchline }) {
    return (
        <div className={styles[classname]}>
            {imageSrc && <img src={imageSrc} alt={title} className={styles["card-image"]} />}
            {number && <span className={styles.number}>{number}</span>}
            <h3>{title}</h3>
            {content && <p>{content}</p>}
            {description && <p>{description}</p>}
            {punchline && (
                <div className={styles.punchline}>
                    <img src={arrowImage} alt="Arrow" className={styles["arrow-icon"]} />
                    <h3>{punchline}</h3>
                </div>
            )}

        </div>
    );
}

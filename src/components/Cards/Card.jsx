import React from "react";
import styles from './Card.module.css';

export default function Card({ title, content, imageSrc, classname }) {
    return (
        <div className={styles[classname]}>
            {imageSrc && <img src={imageSrc} alt={title} className={styles["card-image"]} />}
            <h3>{title}</h3>
            <p>{content}</p>
        </div>
    );
}

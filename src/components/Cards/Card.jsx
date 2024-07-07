import React from "react";
import './Card.css';
export default function Card({ title, content, imageSrc, classname }) {
    return (
        <div className={classname}>
            {imageSrc && <img src={imageSrc} alt={title} className="card-image" />}
            <h3>{title}</h3>
            <p>{content}</p>
        </div>
    );
}
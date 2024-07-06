import React from 'react';

function Card({ title, content, imageSrc }) {
    return (
        <div className="card">
            <img src={imageSrc} alt={title} className="card-image" />
            <h3>{title}</h3>
            <p>{content}</p>
        </div>
    );
}

export default function BackHomePage() {
    return (
        <>
            <div className="card-container">
                <Card
                    title="Card 1"
                    content="This is the content of card 1."
                    imageSrc="https://via.placeholder.com/150" 
                />
                <Card
                    title="Card 2"
                    content="This is the content of card 2."
                    imageSrc="https://via.placeholder.com/150" 
                />
                <Card
                    title="Card 3"
                    content="This is the content of card 3."
                    imageSrc="https://via.placeholder.com/150" 
                />
            </div>
            <div className="description-container">

            </div>
        </>
    );
}

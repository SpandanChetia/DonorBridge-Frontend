import React from 'react';
import './BackHomePage.css';

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
                    imageSrc="" 
                />
                <Card
                    title="Card 2"
                    content="This is the content of card 2."
                    imageSrc="" 
                />
                <Card
                    title="Card 3"
                    content="This is the content of card 3."
                    imageSrc="" 
                />
            </div>
            <div className="description-container">
                <span className="Heading">Fundraising on BrightFund is simple, impactful, and reliable.</span>
                <span className="Paragraph">Get the support you need to make your fundraiser a success on BrightFund, 
                whether you are raising money for yourself, friends, family, or a cause you care about. With no fee to start, 
                BrightFund stands as the premier crowdfunding platform—from commemorative events and funerals to urgent medical
                needs and charitable projects. Whenever you need assistance, this is the place to ask.</span>
            </div>
        </>
    );
}

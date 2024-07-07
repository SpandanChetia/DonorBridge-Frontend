import React from 'react';
import './BackHomePage.css';

function Card({ title, content, imageSrc, classname }) {
    return (
        <div className={classname}>
            {imageSrc && <img src={imageSrc} alt={title} className="card-image" />}
            <h3>{title}</h3>
            <p>{content}</p>
        </div>
    );
}

export default function BackHomePage() {
    return (
        <>
            <section className="backpage-container">
                <section className="card-container">
                    <Card
                        title="Card 1"
                        content="This is the content of card 1."
                        imageSrc="" 
                        classname="card1"
                    />
                    <Card
                        title="Card 2"
                        content="This is the content of card 2."
                        imageSrc="" 
                        classname="card1"
                    />
                    <Card
                        title="Card 3"
                        content="This is the content of card 3."
                        imageSrc="" 
                        classname="card1"
                    />
                </section>
                <section className="description-container">
                    <h1>Fundraising on BrightFund is simple, impactful, and reliable.</h1>
                    <p>Get the support you need to make your fundraiser a success on BrightFund, 
                    whether you are raising money for yourself, friends, family, or a cause you care about. With no fee to start, 
                    BrightFund stands as the premier crowdfunding platform—from commemorative events and funerals to urgent medical
                    needs and charitable projects. Whenever you need assistance, this is the place to ask.</p>
                </section>
                <section className="advantages-container">
                    <Card
                        title="Easy to Use"
                        classname="card2"
                    />
                    <Card
                        title="Non-Profit Website"
                        classname="card2"
                    />
                    <Card 
                        title="Safe and Secured Donations"
                        classname="card2"
                    />
                </section>
            </section>
        </>
    );
}

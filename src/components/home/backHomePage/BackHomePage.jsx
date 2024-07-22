import React from "react";
import Card from "../../card/Card";
import "./BackHomePage.css";

export default function BackHomePage() {
  return (
    <>
      <section className="backpage-container">
        <section className="card-container">
          <Card
            title="Raise a Fundraiser for Yourself"
            content="This is the content of card 1."
            imageSrc=""
            classname="card1"
          />
          <Card
            title="Raise a Fundraiser for your friends"
            content="This is the content of card 2."
            imageSrc=""
            classname="card1"
          />
          <Card
            title="Raise a Fundraiser for a charity"
            content="This is the content of card 3."
            imageSrc="./img/correct.jpg"
            classname="card1"
          />
        </section>
        <section className="description-container">
          <h1>
            Fundraising on DonorBridge is <br />{" "}
            <span className="subhead">simple, impactful, and reliable.</span>
          </h1>
          <p>
            Get the support you need to make your fundraiser a success on
            DonorBridge, whether you are raising money for yourself, friends,
            family, or a cause you care about. With no fee to start, BrightFund
            stands as the premier crowdfunding platform—from commemorative
            events and funerals to urgent medical needs and charitable projects.
            Whenever you need assistance, this is the place to ask.
          </p>
        </section>
        <section className="advantages-container">
          <Card
            number="01"
            title="Easy to Use"
            classname="card2"
            description="Our platform is designed with simplicity in mind, 
            making it easy for anyone to create and manage their fundraising campaigns effortlessly."
            punchline = "Seamless fundraising, from start to finish."
          />
          <Card number = "02"
          title="Non-Profit Website" 
          classname="card2"
          description="Explore our non-profit website tailored for compassionate fundraising. We provide a dedicated platform where every donation makes a difference." 
          punchline="Empowering causes, one click at a time."
          />
          <Card number = "03"
          title="Safe and Secured Donations" 
          classname="card2"
          description="Rest easy knowing your donations are secure with our robust payment system. Your support reaches those in need without worry."
          punchline="Giving with confidence, impacting lives securely and seamlessly."
          />
        </section>
      </section>
    </>
  );
}

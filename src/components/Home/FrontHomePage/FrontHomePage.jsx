import "./FrontHomePage.css";

export default function FrontHomePage() {
  return (
    <>
      <section className="main-cover-container">
        <div className="frontpage-desc">
          <span className="desc1">A Crowdfunding Platform</span>
          <span className="desc2">Built for Impact and Support</span>
          <p>
            Connect with causes that matter and help drive change where it's
            needed most. <br />
            Discover impactful fundraisers aimed at making a tangible difference
            in people's lives.
          </p>
        </div>
        <button className="fund-button">Start a Fundraiser</button>
        {/*<div class="wrapper">
          <p>
            <span></span>
          </p>
          <p>
            <span></span>
          </p>
        </div>*/}
      </section>
    </>
  );
}

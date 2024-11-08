import "./FrontHomePage.css";

export default function FrontHomePage() {
  return (
    <>
      <section className="main-cover-container">
        <div className="frontpage-desc">
          <span className="small-button">crowd fundraiser</span>
          <span className="desc">Built for Impact and Support</span>
          <p>
            Connect with causes that matter and help drive change where it's
            needed most. <br />
            Discover impactful fundraisers aimed at making a tangible difference
            in people's lives.
          </p>
        <button className="fund-button">Start a Fundraiser</button>
        </div>
      </section>
    </>
  );
}

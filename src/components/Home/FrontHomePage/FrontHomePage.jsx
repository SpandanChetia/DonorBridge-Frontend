import Coverpic from './cover-pic.png';
import './FrontHomePage.css';

export default function FrontHomePage() {
  return (
    <>
      <section className="main-cover-container">
        <div className="frontpage-desc">
          <span className="desc1">A Crowdfunding Platform</span>
          <span className="desc2">Help the People in Need</span>
        </div>
        <button className="fund-button">Start a Fundraiser</button>
      </section>
    </>
  );
}
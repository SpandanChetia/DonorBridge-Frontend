import Coverpic from '.../assets/cover-pic.png'

export default function FrontHomePage() {
    return (
        <>
            <span className="frontpage-photo"><img src={Coverpic} alt="cover-photo"/></span>
            <div className="frontpage-desc">
                <span className="desc1">A Crowdfunding Platform</span>
                <span className="desc2">Help the People in Need</span>
            </div>
            <button className="fund-button">Start a Fundraiser</button>
        </>
    )
}
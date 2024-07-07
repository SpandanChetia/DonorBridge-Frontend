import CategoryList from "./CategoryList.jsx"
import './Categories.css'
export default function Categories() {
    return (
        <>
            <section className="category-header">
                <h1>Browse fundraisers <br/>By catagory</h1>
                <span>People around the world are raising money for what they are passionate about</span>
                <button className="category-fund-button">Start a Fundraiser</button>
            </section>
            <section className="category-mid">
                <CategoryList/>
            </section>
        </>
    )
}
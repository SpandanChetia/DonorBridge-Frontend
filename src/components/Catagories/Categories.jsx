import CategoryList from "./CategoryList.jsx";
import "./Categories.css";
export default function Categories() {
  return (
    <>
      <div className="category-main-container">
        <section className="category-header">
          <h1>
            Browse fundraisers <br />
            by catagory.
          </h1>
          <p>
            People around the world are raising money for what they are
            <br />
            passionate about
          </p>
          <button className="category-fund-button">Start a Fundraiser</button>
        </section>
        <section className="category-mid">
          <CategoryList />
        </section>
      </div>
    </>
  );
}

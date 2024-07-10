import React from "react";
import { Link } from "react-router-dom";
import CATEGORIES from "./categorylist.js";
import "./Categories.css";

export default function Categories() {
  return (
    <div className="category-main-container">
      <section className="category-header">
        <h1>
          Browse fundraisers <br />
          by category.
        </h1>
        <p>
          People around the world are raising money for what they are
          <br />
          passionate about
        </p>
        <button className="category-fund-button">Start a Fundraiser</button>
      </section>
      <section className="category-mid">
        <ul>
          {CATEGORIES.map((category, index) => (
            <li key={index} className="category-item">
            <Link to={`/discover/${category.title}`} className="category-link">
              <img src={category.imageSrc} alt={category.title} />
              <span>{category.title}</span>
            </Link>
          </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

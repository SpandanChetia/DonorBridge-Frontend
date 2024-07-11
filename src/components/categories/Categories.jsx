import React from "react";
import { Link } from "react-router-dom";
import CATEGORIES from "./categorylist.js";
import styles from "./Categories.module.css";

export default function Categories() {
  return (
    <div className={styles.categoryMainContainer}>
      <section className={styles.categoryHeader}>
        <h1>
          Discover fundraisers <br />
          by category.
        </h1>
        <p>
          People around the world are raising money for what they are
          <br />
          passionate about
        </p>
        <button className={styles.categoryFundButton}>Start a Fundraiser</button>
      </section>
      <section className={styles.categoryMid}>
        <ul className={styles.categoryList}>
          {CATEGORIES.map((category, index) => (
            <li key={index} className={styles.categoryItem}>
              <Link to={`/discover/${category.id}`} className={styles.categoryLink}>
                <img src={category.imageSrc} alt={category.title} className={styles.categoryImage} />
                <span className={styles.categoryTitle}>{category.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

import React from "react";
import { useParams } from "react-router-dom";
import catstyles from './CategoryDetails.module.css';
import CATEGORIES from './categorylist.js';

export default function CategoryDetails() {
  const { categoryId } = useParams();
  const category = CATEGORIES.find(cat => cat.id === categoryId);
  const categoryImage = category ? category.imageSrc : '';

  return (
    <section className={catstyles.categorydetails}>
      <section className={catstyles.fundraiserListHeader}>
        <div className={catstyles.header1}>
          <h1>
            Discover {categoryId} <br /> fundraisers on BrightFund
          </h1>
          <p>
            Help others by donating to their fundraisers, or start one for
            someone you care about.
          </p>
          <button className={catstyles["fund-button"]}>Start a Fundraiser</button>
        </div>
        <div className={catstyles.header2}>
          <img src={categoryImage} alt={`${categoryId} Image`} />
        </div>
      </section>
      <section className={catstyles.fundraiserListContainer}>
        <h2>Browse {categoryId} fundraisers</h2>
      </section>
    </section>
  );
}

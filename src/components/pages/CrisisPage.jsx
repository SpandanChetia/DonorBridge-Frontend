import React from "react";
import styles from "./CrisisPage.module.css";

export default function CrisisRelief() {
  return (
    <div className={styles["crisis-main-container"]}>
      <section className={styles["crisis-header"]}>
        <h1>
          Trusted ways to help in <br />
          times of crisis.
        </h1>
        <p>
          All linked fundraisers on this page are reviewed and verified by BrightFund Team. 
          You can donate to and share these fundraising hubs with confidence knowing that you’re helping people get the help they need.
        </p>
        <button className={styles["crisis-fund-button"]}>Start a Fundraiser</button>
      </section>
    </div>
  );
}

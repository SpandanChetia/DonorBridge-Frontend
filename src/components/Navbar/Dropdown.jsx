import React, { useState } from "react";
import { DONATEMENULIST } from "./donatemenuList";
import { Link } from "react-router-dom";
import classes from "./Dropdown.module.css";

export default function Dropdown() {
  const [dropdownState, setdropdownState] = useState(false);
  return (
    <>
      <ul
        className={classes.dropmenu}
        onClick={() => setdropdownState(!dropdownState)}
      >
        {DONATEMENULIST.map((item) => {
          return (
            <li key={item.title}>
              <Link
                className={classes.dropmenuitems}
                to={item.path}
                onClick={() => setdropdownState(false)}
              >
                <h3>{item.title}</h3>
                <p>{item.subtitle}</p>
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

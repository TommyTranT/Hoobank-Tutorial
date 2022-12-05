import React from "react";
import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.section}>
      <h2 className={styles.heading2}>
        Find a better card deal <br className="sm:block hidden" />
        in few easy steps.
      </h2>
      <p></p>
    </div>
  </section>
);

export default CardDeal;

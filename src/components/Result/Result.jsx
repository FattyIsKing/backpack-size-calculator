import React from "react";
import styles from "./Result.module.scss";

const Result = ({ result }) => {
  return (
    <div className={styles.wrapper}>
      <p>Pojemność twojego plecaka wynosi</p>
      <div>{result.toFixed(2)} litry</div>
    </div>
  );
};

export default Result;

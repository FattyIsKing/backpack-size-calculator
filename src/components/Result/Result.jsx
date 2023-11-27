import React from "react";
import styles from "./Result.module.scss";

const Result = ({ result }) => {
  return <div className={styles.wrapper}>Pojemność twojego plecaka: {result} l</div>;
};

export default Result;

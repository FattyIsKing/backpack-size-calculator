import React, { useEffect, useState } from "react";
import styles from "./Result.module.scss";

const Result = ({ result }) => {
  const [resultFormat, setResultFormat] = useState("");
  useEffect(() => {
    if (result === 1) {
      setResultFormat(`${result} litr`);
    } else if (!Number.isInteger(result)) {
      setResultFormat(`${result.toFixed(2)} litra`);
    } else if (result >= 2 && result < 5) {
      setResultFormat(`${result.toFixed(2)} litry`);
    } else if (result >= 5) {
      setResultFormat(`${result.toFixed(2)} litrów`);
    } else {
      setResultFormat(`${result.toFixed(2)} litrów`);
    }
  }, [result, resultFormat, setResultFormat]);
  return (
    <div className={styles.wrapper}>
      <p>Pojemność twojego plecaka wynosi</p>
      <div>{resultFormat}</div>
    </div>
  );
};

export default Result;

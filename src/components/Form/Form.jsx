import React, { useState } from "react";
import styles from "./Form.module.scss";
import FormField from "../FormField/FormField";
import Button from "../Button/Button";
const Form = () => {
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");
  const [length, setLength] = useState("");

  const [result, setResult] = useState(0);

  const reset = () => {
    setWidth("");
    setHeight("");
    setLength("");
  };

  const calculate = () => {
    setResult((parseFloat(width) * parseFloat(height) * parseFloat(length)) / 1000);
  };

  return (
    <div className={styles.wrapper}>
      <h1>Kalkulator pojemności plecaka</h1>
      <FormField name="width" content="Szerokość plecaka (cm)" value={width} onChange={(e) => setWidth(e.target.value)} />
      <FormField name="height" content="Wysokość plecaka (cm)" value={height} onChange={(e) => setHeight(e.target.value)} />
      <FormField name="length" content="Długość plecaka (cm)" value={length} onChange={(e) => setLength(e.target.value)} />
      <div className={styles.holder}>
        <Button name="Oblicz" onClick={calculate} />
        <Button name="Resetuj" onClick={reset} />
      </div>
    </div>
  );
};

export default Form;

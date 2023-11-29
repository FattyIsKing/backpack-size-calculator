import React, { useState } from "react";
import styles from "./Form.module.scss";
import FormField from "../FormField/FormField";
import Button from "../Button/Button";
const Form = ({ setResult, setErrors, errors }) => {
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");
  const [length, setLength] = useState("");

  const reset = () => {
    setWidth("");
    setHeight("");
    setLength("");
    setResult(0);
  };

  const calculate = () => {
    setErrors({
      width: false,
      height: false,
      length: false,
    });

    if (width === "") {
      setErrors((errors) => ({ ...errors, width: true }));
    }
    if (height === "") {
      setErrors((errors) => ({ ...errors, height: true }));
    }
    if (length === "") {
      setErrors((errors) => ({ ...errors, length: true }));
    }
    if (width !== "" && height !== "" && length !== "") {
      setResult((parseFloat(width) * parseFloat(height) * parseFloat(length)) / 1000);
    }
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <h1>Kalkulator pojemności plecaka</h1>
      </div>
      <div className={styles.main}>
        <div className={styles.formFields}>
          <FormField
            name="width"
            content="Szerokość (cm)"
            placeholder="Szerokość plecaka"
            value={width}
            onChange={(e) => {
              setErrors({ ...errors, width: false });
              setWidth(e.target.value);
            }}
            error={errors.width}
          />
          <FormField
            name="height"
            content="Wysokość (cm)"
            placeholder="Wysokość plecaka"
            value={height}
            onChange={(e) => {
              setErrors({ ...errors, height: false });
              setHeight(e.target.value);
            }}
            error={errors.height}
          />

          <FormField
            name="length"
            content="Długość (cm)"
            placeholder="Długość plecaka"
            value={length}
            onChange={(e) => {
              setErrors({ ...errors, length: false });
              setLength(e.target.value);
            }}
            error={errors.length}
          />
        </div>
        <div className={styles.holder}>
          <Button name="Oblicz pojemność" onClick={calculate} />
          <Button name="Resetuj" onClick={reset} isGhost />
        </div>
      </div>
    </div>
  );
};

export default Form;

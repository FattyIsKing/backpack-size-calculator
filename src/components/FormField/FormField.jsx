import React from "react";
import styles from "./FormField.module.scss";
const FormField = ({ name, content, value, onChange }) => {
  return (
    <div className={styles.wrapper}>
      <label htmlFor={name}>{content}</label>
      <input type="number" name={name} value={value} onChange={onChange} />
    </div>
  );
};

export default FormField;

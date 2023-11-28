import React from "react";
import styles from "./FormField.module.scss";
const FormField = ({ name, content, placeholder, value, onChange, error }) => {
  return (
    <div className={styles.wrapper}>
      <label htmlFor={name}>{content}</label>
      <input
        type="number"
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        className={error ? styles.inputError : null}
      />
      {error && <span className={styles.error}>To pole jest wymagane!</span>}
    </div>
  );
};

export default FormField;

import React from "react";
import styles from "./Button.module.scss";
const Button = ({ name, onClick, isGhost }) => {
  return (
    <button onClick={onClick} className={`${styles.button} ${isGhost ? styles.ghost : null}`}>
      {name}
    </button>
  );
};

export default Button;

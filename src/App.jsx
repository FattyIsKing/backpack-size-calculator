import styles from "./App.module.scss";
import Form from "./components/Form/Form";
import Result from "./components/Result/Result";
import { useState } from "react";
function App() {
  const [result, setResult] = useState(0);
  const [errors, setErrors] = useState({
    width: false,
    height: false,
    length: false,
  });

  return (
    <div className={`${styles.wrapper} ${errors.width || errors.height || errors.length ? styles.wrapper_error : null}`}>
      <div className={styles.main}>
        <Form setResult={setResult} setErrors={setErrors} errors={errors} />
        {result !== 0 && <Result result={result} />}
      </div>
    </div>
  );
}

export default App;

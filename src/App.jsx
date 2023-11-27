import styles from "./App.module.scss";
import Form from "./components/Form/Form";
import Result from "./components/Result/Result";
import { useState } from "react";
function App() {
  const [result, setResult] = useState(0);

  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <Form setResult={setResult} />
        {result !== 0 && <Result result={result} />}
      </div>
    </div>
  );
}

export default App;

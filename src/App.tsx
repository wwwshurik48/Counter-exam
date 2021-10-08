import React, {useState} from 'react';
import './App.css';
import {Counter} from "./Counter";
import styles from "./Counter.module.css";

function App() {

  const [count, setCount] = useState(0);

  const increment = () => {
    if(count < 5) {
      setCount(count + 1)
    }
  }
  const reset = () => {
    setCount(0)
  }

  return (
      <div className={styles.rootBox}>
        <Counter
            count={count}
            increment={increment}
            reset={reset}
        />
    </div>
  );
}

export default App;

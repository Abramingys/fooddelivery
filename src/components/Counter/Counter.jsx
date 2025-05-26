import { useState } from 'react';
import styles from './Counter.module.scss';

const Counter = () => {
  const [count, setCount] = useState(0);

  const decrement = () => {
    setCount((prev) => {
      const newVal = Math.max(prev - 1, 0);

      return newVal;
    });
  };

  const increment = () => {
    setCount((prev) => {
      const newVal = Math.min(prev + 1, 5);
      
      return newVal;
    });
  };

  return (
    <div className={styles.counter}>
      <button onClick={decrement} disabled={count === 0} type='button'>
        -
      </button>
      <span>{count}</span>
      <button onClick={increment} disabled={count === 5} type='button'>
        +
      </button>
    </div>
  );
};

export default Counter;

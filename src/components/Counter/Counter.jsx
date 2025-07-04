import styles from './Counter.module.scss';

const Counter = ({ count, decrement, increment }) => {
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

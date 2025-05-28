import { useCounter } from '../../hooks/use-counter';
import styles from '../Counter/Counter.module.scss';

const DishCounter = () => {
  const { count, decrement, increment } = useCounter();

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

export default DishCounter;

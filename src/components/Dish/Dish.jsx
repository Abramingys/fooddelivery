import Counter from '../Counter/Counter';

import styles from './Dish.module.scss';

const Dish = ({ dish }) => {
  
  return (
    <div className={styles.dish}>
      <div className={styles.info}>
        <h3>{dish.name}</h3>
        <p>Price: ${dish.price}</p>
        <p>Ingredients: {dish.ingredients.join(', ')}</p>
      </div>
      <Counter />
    </div>
  );
};

export default Dish;

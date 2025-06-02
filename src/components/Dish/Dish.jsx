import DishCounter from '../DishCounter/DishCounter';

import styles from './Dish.module.scss';

const Dish = ({ dish }) => {
  return (
    <div className={styles.dish}>
      <div className={styles.info}>
        <h3>{dish.name}</h3>
        <p>Price: ${dish.price}</p>
        <p>Ingredients: {dish.ingredients.join(', ')}</p>
      </div>
      <DishCounter />
    </div>
  );
};

export default Dish;

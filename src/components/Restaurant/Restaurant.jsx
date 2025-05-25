import Dish from '../Dish/Dish';
import styles from './Restaurant.module.scss';

const Restaurant = ({ data }) => {
  if (!data) return null;

  return (
    <section className={styles.restaurant}>
      <h2 className={styles.title}>{data.name}</h2>
      <div className={styles.menu}>
        {data.menu.map((dish) => (
          <Dish key={dish.id} dish={dish} />
        ))}
      </div>
    </section>
  );
};

export default Restaurant;

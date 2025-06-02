import Dish from '../Dish/Dish';
import ReviewForm from '../ReviewForm/ReviewForm';
import Reviews from '../Reviews/Reviews';

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
      <h2 className={styles.title}>Customer Reviews</h2>
      <div className={styles.reviews}>
        {data.reviews.map((review) => (
          <Reviews key={review.id} review={review} />
        ))}
      </div>
      <ReviewForm />
    </section>
  );
};

export default Restaurant;

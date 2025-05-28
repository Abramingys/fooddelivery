import styles from './Reviews.module.scss';

const Reviews = ({ review }) => {
  return (
    <div className={styles.reviews}>
      <div className={styles.list}>
        <div className={styles.review}>
          <div className={styles.header}>
            <span className={styles.user}>{review.user}</span>
            <span className={styles.rating}>Rating: {review.rating}</span>
          </div>
          <p className={styles.text}>{review.text}</p>
        </div>
      </div>
    </div>
  );
};

export default Reviews;

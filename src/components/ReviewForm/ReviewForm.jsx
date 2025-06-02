import { useReviewForm } from '../../hooks/ReviewForm/useReviewForm';
import Counter from '../Counter/Counter';

import styles from './ReviewForm.module.scss';

const ReviewForm = () => {
  const { form, setName, setText, clearForm, incrementRating, decrementRating } = useReviewForm();
  const { name, text, rating } = form;

  return (
    <form
      className={styles.form}
      onSubmit={(e) => {
        e.preventDefault();
        console.log(form);
      }}
    >
      <div className={styles.field}>
        <label htmlFor='name'>Name</label>
        <input
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      </div>
      <div className={styles.field}>
        <label htmlFor='text'>Review</label>
        <textarea value={text} onChange={(e) => setText(e.target.value)} />
      </div>
      <div className={styles.field}>
        <label>Rating</label>
      </div>
      <Counter count={rating} decrement={decrementRating} increment={incrementRating} />
      <div className={styles.actions}>
        <button type='submit' className={styles.submit}>
          Submit
        </button>
        <button type='button' className={styles.reset} onClick={clearForm}>
          Reset
        </button>
      </div>
    </form>
  );
};

export default ReviewForm;

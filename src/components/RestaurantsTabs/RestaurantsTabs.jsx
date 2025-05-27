import styles from './RestaurantsTabs.module.scss';

const RestaurantsTabs = ({ restaurants, activeId, onChange }) => {
  return (
    <div className={styles.tabs}>
      {restaurants.map(({ id, name }) => {
        const isActive = id === activeId;
        return (
          <button
            key={id}
            className={`${styles.tabButton} ${isActive ? styles.active : ''}`}
            onClick={() => {
              if (!isActive) onChange(id);
            }}
            type='button'
          >
            {name}
          </button>
        );
      })}
    </div>
  );
};

export default RestaurantsTabs;

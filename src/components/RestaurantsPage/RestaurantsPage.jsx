import { useState } from 'react';
import { restaurants } from '../../../data/restaurants.js';
import Restaurant from '../Restaurant/Restaurant';
import RestaurantsTabs from '../RestaurantsTabs/RestaurantsTabs';

const RestaurantsPage = () => {
  const [activeRestaurantId, setActiveRestaurantId] = useState(restaurants[0].id);

  return (
    <>
      <RestaurantsTabs restaurants={restaurants} activeId={activeRestaurantId} onChange={setActiveRestaurantId} />
      <Restaurant data={restaurants.find(({ id }) => id === activeRestaurantId)} />
    </>
  );
};

export default RestaurantsPage;

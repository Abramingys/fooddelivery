import { useState } from 'react';
import Layout from './components/Layout/Layout';
import Restaurant from './components/Restaurant/Restaurant';
import Tabs from './components/RestaurantsTabs/RestaurantsTabs';
import { restaurants } from '/data/restaurants.js';

const App = () => {
  const [activeRestaurantId, setActiveRestaurantId] = useState(restaurants[0].id);

  return (
    <Layout>
      <Tabs restaurants={restaurants} activeId={activeRestaurantId} onChange={setActiveRestaurantId} />
      <Restaurant data={restaurants.find(({ id }) => id === activeRestaurantId)} />
    </Layout>
  );
};

export default App;

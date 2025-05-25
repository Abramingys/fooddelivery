import { useState } from 'react';
import Layout from './components/Layout/Layout';
import Restaurant from './components/Restaurant/Restaurant';
import Tabs from './components/Tabs/Tabs';
import { restaurants } from '/data/restaurants.js';

const App = () => {
  const [activeId, setActiveId] = useState(restaurants[0].id);

  return (
    <Layout>
      <Tabs restaurants={restaurants} activeId={activeId} onChange={setActiveId} />
      <Restaurant data={restaurants.find(r => r.id === activeId)} />
    </Layout>
  );
};

export default App;

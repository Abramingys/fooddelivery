import './App.css';
import { restaurants } from '/materials/mock.js';

function App() {
  return (
    <>
      {restaurants.map(({ id, name, menu, reviews }) => (
        <div key={id}>
          <h2>Название ресторана: {name}</h2>
          <h3>Меню: {name}</h3>
          <ul>
            {menu.map(({ id, name }) => (
              <li key={id}>{name}</li>
            ))}
          </ul>
          <h3>Отзывы об {name}</h3>
          <ul>
            {reviews.map(({ id, user, text }) => (
              <li key={id}>
                <p>Автор: {user}</p>
                <p>Отзыв: {text}</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
}

export default App;

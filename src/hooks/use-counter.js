import { useState } from 'react';

export const useCounter = () => {
  const [count, setCount] = useState(0);

  const decrement = () => {
    setCount((prev) => {
      const newVal = Math.max(prev - 1, 0);

      return newVal;
    });
  };

  const increment = () => {
    setCount((prev) => {
      const newVal = Math.min(prev + 1, 5);

      return newVal;
    });
  };
  return {
    count,
    decrement,
    increment,
  };
};

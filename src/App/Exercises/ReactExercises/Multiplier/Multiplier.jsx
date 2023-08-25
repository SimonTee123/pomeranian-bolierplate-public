import { useState } from 'react';
import './styles.css';

export const OnClick = () => {
  const [count, setCount] = useState(2);

  function handleClick() {
    setCount(count + 1);
  }
  return (
    <div>
      <h1>Cześć!</h1>

      <button onClick={handleClick}>{count}</button>
    </div>
  );
};

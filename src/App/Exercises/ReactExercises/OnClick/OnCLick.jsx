import { useState } from 'react';
import './styles.css';

export const OnClick = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [clickCount, setClickCount] = useState(5);

  const buttonText = isClicked
    ? 'Kliknięto we mnie ${clickCount}'
    : 'Kliknij we mnie';

  function handleClick() {
    setIsClicked(true);
    setClickCount(clickCount * clickCount);
  }

  const test = 'Tom';

  if (test === 'Sam') {
    console.log('Test nie jest rowny Sam');
  }
  if (test === 'Tom') {
    console.log('Test nie jest rowny Tom');
  }
  if (typeof test === 'string') {
    console.log('Test jest stringiem');
  }

  return (
    <div>
      <h1>Cześć!</h1>
      <button onClick={handleClick}>{buttonText}</button>

      <span>Odliczanie zakończone</span>
    </div>
  );
};

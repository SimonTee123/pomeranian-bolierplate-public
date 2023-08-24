import { useState } from 'react';
import './styles.css';

export const OnClick = () => {
  //const [isClicked, setIsClicked] = useState(false);
  //const text = isClicked ? 'Kliknięte' : 'Nie kliknięte';
  const [count, setCount] = useState(0);

  function handleClick() {
    /* if (isClicked === true) {
      setIsClicked(false);
    } else {
      setIsClicked(true);
       } */
    setCount(count + 1);
  }
  return (
    <div>
      <h1>Cześć!</h1>

      <button onClick={handleClick}>{count}</button>
    </div>
  );
};

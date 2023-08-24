import { useState } from 'react';
import './styles.css';

export const OnClick = () => {
  const [isClicked, setIsClicked] = useState(false);
  const text = isClicked ? 'Kliknięte' : 'Nie kliknięte';

  function handleClick() {
    if (isClicked === true) {
      setIsClicked(false);
    } else {
      setIsClicked(true);
    }
  }
  return (
    <div>
      <h1>Cześć!</h1>

      <button onClick={handleClick}>{text}</button>
    </div>
  );
};

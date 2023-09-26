import { useState } from 'react';
import './styles.css';

export const ReactOnClick = () => {
  const [value, setValue] = useState('');

  function handleClick() {
    setValue('');
  }

  function handleChange(event) {
    setValue(event.target.value);
  }

  //const [count, setCount] = useState(0);
  //const [isClicked, setIsClicked] = useState(false);

  //const text = isClicked ? 'Nie kliknięte' : 'Kliknięte';

  //  function handleClick() {
  //setCount(count + 1);}
  // setIsClicked(!isClicked);

  //isClicked === true ? setIsClicked(false) : setIsClicked(true); }  SKUTECZNA METODA

  return (
    <div>
      <h1>Hello!</h1>
      <button onClick={handleClick}> Resetuj </button>
      input type="text" value={value} onChange={handleChange} />
      <p>
        <strong>{value}</strong>
      </p>
    </div>
  );
};

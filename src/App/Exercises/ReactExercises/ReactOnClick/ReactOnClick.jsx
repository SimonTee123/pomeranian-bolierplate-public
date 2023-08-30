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

  // Przygotować komponent który będzie miał przycisk i który po odliczeniu 5 razy
  // Będzie zmieniał się tekst wcześniej ustawiony na "Odliczanie"
  // zmieniło się na "Odliczanie zakończone"

  return (
    <div>
      <h1>Cześć!</h1>
      <button />

      <span>Odliczanie zakończone</span>
    </div>
  );
};

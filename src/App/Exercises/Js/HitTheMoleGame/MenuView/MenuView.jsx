import { useState } from 'react';
import './styles.css';
import { Button } from '../Button/Button';

export const MenuView = ({ clickStartButton, setClickStartButton }) => {
  const [timeButton, setTimeButton] = useState(null);
  const [moleButton, setMoleButton] = useState(null);
  const handleClick = (event) => {
    console.log(event.target.id);
    setTimeButton(event.target.id);
  };

  const handleMoleButton = (event) => {
    console.log(event.target.id);
    setMoleButton(event.target.id);
  };

  const [startButton, setStartButton] = useState(null);
  const handleStartButton = (event) => {
    console.log(event.target.id);
    setStartButton(event.target.id);
  };

  const handleClickStartButton = (event) => {
    console.log(event.target.id);
    setClickStartButton(event.target.id);
  };

  function handleStartCLick() {
    setClickStartButton(!clickStartButton);
  }

  const handleMoleClick = (event) => {
    setMoleButton(event.target.id);
  };
  return (
    <div>
      <p>
        Gra polegająca na podążaniu za krecikiem i trafieniu na kwadrat, w
        którym się pojawił.
      </p>
      <div className="tabela">
        <div>
          <p>CZAS GRY</p>
          <p>LICZBA KRETÓW</p>
          <p>PRZYCISKI STERUJĄCE</p>
        </div>
        <div>
          <div className="rows">
            <button
              id={1}
              onClick={handleClick}
              className={timeButton == 1 ? 'redbutton' : 'blackbutton'}
            >
              {''}1 minuta {''}
            </button>

            <button
              id={2}
              onClick={handleClick}
              className={timeButton == 2 ? 'redbutton' : 'blackbutton'}
            >
              {''}2 minuty {''}
            </button>

            <button
              id={3}
              onClick={handleClick}
              className={timeButton == 3 ? 'redbutton' : 'blackbutton'}
            >
              {''}3 minuty {''}
            </button>
          </div>
          <div className="rows">
            <button
              id={4}
              onClick={handleMoleClick}
              className={moleButton == 4 ? 'redbutton' : 'blackbutton'}
            >
              {''}1 kret{''}
            </button>

            <button
              id={5}
              onClick={handleMoleClick}
              className={moleButton == 5 ? 'redbutton' : 'blackbutton'}
            >
              {''}2 krety{''}
            </button>

            <button
              id={6}
              onClick={handleMoleClick}
              className={moleButton == 6 ? 'redbutton' : 'blackbutton'}
            >
              {''}3 krety{''}
            </button>
          </div>

          <Button
            id={7}
            handleClick={handleStartCLick}
            timeButton={clickStartButton}
            label={'START'}
          />
        </div>
      </div>
    </div>
  );
};

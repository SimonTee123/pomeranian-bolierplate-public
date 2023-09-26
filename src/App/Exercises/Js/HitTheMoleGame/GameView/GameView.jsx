import { ListItemSecondaryAction } from '@mui/material';
import './styles.css';
import { useEffect, useState } from 'react';
import { MoleIcon } from './mole';

const InitialMap = [
  { id: 1, isMolePresent: false },
  { id: 2, isMolePresent: false },
  { id: 3, isMolePresent: false },
  { id: 4, isMolePresent: false },
  { id: 5, isMolePresent: false },
  { id: 6, isMolePresent: false },
  { id: 7, isMolePresent: false },
  { id: 8, isMolePresent: false },
  { id: 9, isMolePresent: false },
  { id: 10, isMolePresent: false },
];

export const GameView = () => {
  const [krecikMap, setKrecikMap] = useState(InitialMap);
  const [score, setScore] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const placeOfMole = Math.floor(Math.random() * (10 - 1 + 1) + 1);

      setKrecikMap(
        krecikMap.map((field, index) => {
          if (index === placeOfMole - 1) {
            return { ...field, isMolePresent: true };
          } else {
            return field;
          }
        })
      );
    }, 1000);
  }, []);

  const renderField = () => {
    return krecikMap.map((item, index) => {
      const isClickedWithMole =
        item.isClicked && item.isMolePresent ? 'zielony-guzik' : ' ';

      const isNotClickedWithMole =
        item.isClicked && !item.isMolePresent ? 'czerwony-guzik' : ' ';

      return (
        <div
          key={index}
          onClick={() => handleKrecikClick(item)}
          className={'square ' + isClickedWithMole + isNotClickedWithMole}
        >
          {item.isMolePresent && <MoleIcon />}
        </div>
      );
    });
  };

  function handleKrecikClick(item) {
    if (item.isMolePresent) {
      setScore((prev) => prev + 1);
    } else {
      setScore((prev) => prev - 1);
    }
    setKrecikMap(
      krecikMap.map((field) => {
        return { ...field, isClicked: field.id === item.id };
      })
    );
  }

  return (
    <>
      <h1>KRET</h1>
      <p>
        Gra polegająca na podążaniu za krecikiem i trafieniu na kwadrat, w
        którym się pojawił.
      </p>
      <div className="opisy">
        <div>
          <p>CZAS DO KOŃCA</p>
          <p>WYNIK</p>
          <p>PRZYCISKI STERUJĄCE</p>
        </div>
        <div className="rows1">
          <div className="szary-guzik">1:35</div>
          <div className="szary-guzik">{score}</div>
          <button className="stop-guzik">STOP</button>
        </div>

        <div className="rectangles">{renderField()}</div>
      </div>
    </>
  );
};

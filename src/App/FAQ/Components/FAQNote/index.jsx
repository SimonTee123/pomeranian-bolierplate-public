import { useState } from 'react';
import './styles.css';
import toggleArrow from '../../../Images/toggleArrow.svg';

export function FAQNote(props) {
  const [display, setDisplay] = useState(false);

  function handleButton() {
    setDisplay(!display);
  }

  // 1 sposób na dynamiczne nadawanie klasy - skrócony if
  //const arrowRotate = display ? '' : 'rotate';

  // 2 sposób na dynamiczne nadawanie klasy - if
  let arrowRotate;

  if (display) {
    arrowRotate = '';
  } else {
    arrowRotate = 'rotate';
  }

  return (
    <div className="box-for-description" onClick={handleButton}>
      <div>
        <h2>
          <img className={arrowRotate} src={toggleArrow} alt="toggle arrow" />
          {props.title}
        </h2>
      </div>

      <div>
        {display && (
          <div>
            <hr></hr>
            {props.desciption}
          </div>
        )}

        {/* 
        <button onClick={handleButton}>Kliknij</button> */}
      </div>
    </div>
  );
}

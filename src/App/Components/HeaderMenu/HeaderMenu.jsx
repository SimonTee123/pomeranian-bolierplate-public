import './styles.css';
import { useState } from 'react';
import toggleArrow from './../../Images/toggleArrow.svg';
import { SettingIcon } from '../Icons/SettingIcon';
import { ChevronIcon } from '../Icons/ChevronIcon';
import { NotificationIcon } from '../Icons/NotificationIcon';

export const HeaderMenu = () => {
  const [active, setActive] = useState(false);

  function handleClick() {
    setActive(!active);
  }
  const loginClassName = active ? 'loginPanel' : 'loginPanelHidden';

  return (
    <div className="profilepanel">
      <NotificationIcon />
      <SettingIcon />
      <div className="profilepic"></div>
      <div className="profiledata">
        <p>Szymon</p>
        <p>Kursant</p>
      </div>
      <div className="chevronIcon" onClick={handleClick}>
        <ChevronIcon />
      </div>
      <div className={loginClassName}>
        <div className="chevronIcon" onClick={handleClick}>
          <ChevronIcon />
        </div>
        <button className="login">Zaloguj się</button>
        <p>
          Nie masz konta?
          <a href="#">Zarejestruj się</a>
        </p>
      </div>
    </div>
  );
};

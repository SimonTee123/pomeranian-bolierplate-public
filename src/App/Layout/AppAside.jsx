import { NavLink } from 'react-router-dom';

import { HouseIcon } from '../Components/Icons/HouseIcon';
import { CalendarIcon } from '../Components/Icons/CalendarIcon';
import { EditIcon } from '../Components/Icons/EditIcon';
import { PersonalCardIcon } from '../Components/Icons/PersonalCardIcon';
import { MessageIcon } from '../Components/Icons/MessageIcon';
import './styles/aside.css';

export function AppAside() {
  return (
    <aside>
      <nav>
        <ul>
          <li className="aside-row">
            <HouseIcon />
            <NavLink to="dashboard">Dashboard</NavLink>
          </li>
          <li className="aside-row">
            <EditIcon />
            <NavLink to="blocks">Bloki</NavLink>
          </li>
          <li className="aside-row">
            <CalendarIcon />
            <NavLink to="exercises">Ćwiczenia</NavLink>
          </li>
          <li className="aside-row">
            <PersonalCardIcon />
            <NavLink to="CV">CV</NavLink>
          </li>
          <li className="aside-row">
            <MessageIcon />
            <NavLink to="FAQ">FAQ</NavLink>
          </li>
          <li className="aside-row">
            <CalendarIcon />
            <NavLink to="Calendar">Kalendarz</NavLink>
          </li>

          <li className="aside-row">
            <CalendarIcon />
            <NavLink to="CBlog">Blog</NavLink>
          </li>
        </ul>
      </nav>
      <p style={{ padding: '1rem 0' }}>Sidebar items, widgets, etc</p>
    </aside>
  );
}

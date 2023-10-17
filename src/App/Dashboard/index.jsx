import { Link } from 'react-router-dom';
import './styles.css';
import { PersonalCardIcon } from '../Components/Icons/PersonalCardIcon';
import { EditIcon } from '../Components/Icons/EditIcon';
import { DashboardCard } from './DashboardCard';
import { MessageIcon } from '../Components/Icons/MessageIcon';
import Charlie from './Charlie.jpg';
import { Icon1 } from '../Components/Icons/Icon1';
import { BookSaved } from '../Components/Icons/BookSaved';
const cards = [
  {
    title: 'Moje CV',
    icon: <PersonalCardIcon />,
    description: 'Podgląd CV wraz z doświadczeniem',
    link: '/cv',
  },

  {
    title: 'Cwiczenia',
    icon: <EditIcon />,
    description: 'Wszystkie wykonane ćwiczenia',
    link: '/exercises',
  },
  {
    title: 'Blog',
    icon: <BookSaved />,
    description: 'Wpisy blogowe o technologii front-end',
    link: '/cv',
  },
  {
    title: 'Tech stack',
    icon: <Icon1 />,
    description: 'Stack technologiczny realizowany na kursie',
    link: '/cv',
  },
  {
    title: 'FAQ',
    icon: <MessageIcon />,
    description: 'Odpowiedzi na najczęstsze pytania',
    link: '/cv',
  },
];

export const Dashboard = () => {
  return (
    <div className="dashboard">
      <h1 className="dashboard-greeting">Hej, tu Szymon 👋</h1>
      <p className="dashboard-description">
        <h4>
          Poniżej znajdziesz najważniejsze informacje na temat mojej
          działalności.
        </h4>
      </p>
      <div className="dashboard-cards">
        {cards.map(({ title, icon, description, link }) => (
          <DashboardCard
            title={title}
            icon={icon}
            description={description}
            link={link}
          />
        ))}
      </div>
      <aside className="dashboard-aside">
        {' '}
        <div className="Aside-Box">
          <div className="SideUserIcon">
            <img
              className="ImageAvatar"
              src={Charlie}
              width={110}
              height={110}
              alt="Foto"
            ></img>
          </div>
          <div className="SideUserTitle">Szymon Tumielewicz</div>
          <div className="SideUserCity">Gdynia</div>
          <div className="SideUserEmail">
            e-mail: <br></br>Szymon@email.com
          </div>
          <div className="SideUserPhone">
            telefon:<br></br> 123 456 789
          </div>
        </div>
      </aside>
    </div>
  );
};

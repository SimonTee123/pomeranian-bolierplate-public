import { Link } from 'react-router-dom';
import './styles.css';
import { TechStackCard } from './TechStackCard';
import { PersonalCardIcon } from '../Components/Icons/PersonalCardIcon';
import { EditIcon } from '../Components/Icons/EditIcon';
import { MessageIcon } from '../Components/Icons/MessageIcon';
import { Icon1 } from '../Components/Icons/Icon1';
import { BookSaved } from '../Components/Icons/BookSaved';

const cards = [
  {
    title: 'Moje CV',
    icon: <PersonalCardIcon />,
    description: 'Podgląd CV wraz z doświadczeniem',
  },

  {
    title: 'Cwiczenia',
    icon: <EditIcon />,
    description: 'Wszystkie wykonane ćwiczenia',
  },
  {
    title: 'Blog',
    icon: <BookSaved />,
    description: 'Wpisy blogowe o technologii front-end',
  },
  {
    title: 'Tech stack',
    icon: <Icon1 />,
    description: 'Stack technologiczny realizowany na kursie',
  },
  {
    title: 'FAQ',
    icon: <MessageIcon />,
    description: 'Odpowiedzi na najczęstsze pytania',
  },
];

export const TechStack = () => {
  return (
    <div className="techstack">
      <h1 className="techstack-greeting"> &larr; TECH STACK </h1>
      <p className="techstack-description">
        <h4>
          Poniżej znajdziesz tech stack oraz narzędzia,jakich nauczyłem się
          podczas kursu.
        </h4>
      </p>
      <div className="techstack-cards">
        {cards.map(({ icon, description }) => (
          <TechStackCard icon={icon} description={description} />
        ))}
      </div>
    </div>
  );
};

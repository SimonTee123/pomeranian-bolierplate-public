import './styles.css';
import { TechStackData } from './data';
import { TechStackCard } from './TechStackCard';
import redmine from '../Images/tech-stack/redmine.png';

export const TechStack = () => {
  return (
    <div className="techstack">
      <h2 className="techstack-greeting"> &larr; TECH STACK </h2>
      <p className="techstack-description">
        <h4>
          Poniżej znajdziesz tech stack oraz narzędzia,jakich nauczyłem się
          podczas kursu.
        </h4>
      </p>
      <div className="techstack-content">
        {TechStackData.map(({ title, icon }) => (
          <TechStackCard title={title} icon={icon} />
        ))}
      </div>
    </div>
  );
};

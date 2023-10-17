import { Link } from 'react-router-dom';

export const TechStackCard = ({ icon, description }) => {
  return (
    <div className="dashboard-card">
      {/* {icon} */}
      <img src={icon}></img>
      <p>
        <h3>{description}</h3>
      </p>
    </div>
  );
};

import './styles.css';
import star from '../../../Images/star.svg';

//import { star } from '../../Images/star.svg';
//<td><img src = {star} alt="star"</td>

export const TablesTennis = () => {
  return (
    <div className="pierwszatabela">
      <table>
        <tr>
          <th>Location</th>
          <th>PLAYER_ID</th>
          <th>Rating</th>
        </tr>
        <tr>
          <td>Cape Verde Islands</td>
          <td>#100120</td>
          <td>
            {Array.from({ length: 2 }).map(() => (
              <img src={star} alt="rating" />
            ))}
          </td>
        </tr>
        <tr>
          <td>Cape Verde Islands</td>
          <td>#100122</td>
          <td>
            <td className="gwiazdy">
              {Array.from({ length: 3 }).map(() => (
                <img src={star} alt="rating" />
              ))}
            </td>
          </td>
        </tr>
        <tr>
          <td>Cape Verde Islands</td>
          <td>#100124</td>
          <td className="gwiazdy">
            {Array.from({ length: 5 }).map(() => (
              <img src={star} alt="rating" />
            ))}
          </td>
        </tr>
        <tr>
          <td>UNITED STATES OF AMERICA</td>
          <td>#100126</td>
          <td className="gwiazdy">
            <img src={star} alt="gwiazda" />
          </td>
        </tr>
        <tr>
          <td>UNITED STATES OF AMERICA</td>
          <td>#100128</td>
          <td>
            <td className="gwiazdy">
              {Array.from({ length: 5 }).map(() => (
                <img src={star} alt="rating" />
              ))}
            </td>
          </td>
        </tr>
      </table>
    </div>
  );
};

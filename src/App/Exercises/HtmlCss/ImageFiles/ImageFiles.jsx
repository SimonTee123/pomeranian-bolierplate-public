import './styles.css';
import first from './jotpeg.jpg';
import second from './peengie.png';
import third from './1456764.svg';
export const ImageFiles = () => {
  return (
    <div className="images">
      <img src={first} alt="kot" />
      <img src={second} alt="kuń" />
      <img src={third} alt="wiewiórka" />
    </div>
  );
};

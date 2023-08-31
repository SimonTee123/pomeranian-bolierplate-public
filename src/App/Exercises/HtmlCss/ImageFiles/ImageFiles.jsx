import './styles.css';

/*import first from './jotpeg.jpg';
import second from './peengie.png';
import third from './1456764.svg';
export const ImageFiles = () => {
  return (
    <div className="images">
      <img src={first} alt="kot" />
      <img src={second} alt="kuń" />
      <img src={third} alt="wiewiórka" />*/
import logoPomeranian from './pomeranian-icon.jpg';
import zdjecie from './Zdjecie.jpg';
import { RoundImage } from '../RoundImage/RoundImage';

export function Imagefiles() {
  return (
    <div>
      <img src={logoPomeranian} alt="Pomeranian logo" />
      <img src={zdjecie} alt="Zdjęcie" />
      <RoundImage src={zdjecie}>width: `200px`, height: `200px`,</RoundImage>
    </div>
  );
}

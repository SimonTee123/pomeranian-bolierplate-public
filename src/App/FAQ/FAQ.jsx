import { SingleQuestion } from './SingleQuestion/SingleQuestion';
import './styles.css';

export const FAQ = () => {
  return (
    <>
      <div>
        <SingleQuestion question="Ile jest dni w tygodniu?" answer="Siedem!" />
        <SingleQuestion question="Pomi?" answer="Dory :)" />
        <SingleQuestion question="Ser..." answer="...watka." />
        <SingleQuestion question="Test1" answer="Answer1" />
        <SingleQuestion question="Test1" answer="Answer1" />
        <SingleQuestion question="Test1" answer="Answer1" />
      </div>
    </>
  );
};

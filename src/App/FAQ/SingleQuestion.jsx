import './styles.css';

export const SingleQuestion = ({ question, answer }) => {
  return (
    <>
      <div Classname="strona">
        <div Classname="nagłówek">
          <h1>
            <strong>{question}</strong>
          </h1>
          <hr />
          <p>{answer}</p>
        </div>
      </div>
    </>
  );
};

import './styles.css';

export const SingleQuestion = ({ question, answer }) => {
  return (
    <>
      <div Classname="pierwszy">
        <h1>
          <strong>{question}</strong>
        </h1>
        <hr />
        <p>{answer}</p>
      </div>
    </>
  );
};

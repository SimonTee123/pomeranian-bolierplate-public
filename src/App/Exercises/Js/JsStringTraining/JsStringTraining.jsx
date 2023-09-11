export const JsStringTraining = () => {
  function ucFirst(input) {
    const firstLetter = input.charAt(0);
    const rest = input.slice(1);

    return firstLetter.toUpperCase() + rest;
  }

  function truncate(input, endIndex) {
    return input.substring(0, endIndex);
  }

  function isPalindrom(input) {
    const lowerInput = input.toLowerCase();
    const reversed = lowerInput.split('').reverse().join('');

    return lowerInput === reversed;
  }
  // is Palindrom('Ala') -> true

  return (
    <div>
      <p>{ucFirst('dsbubv')}</p>
      <p>{truncate('Hello world, hello people, hello you', 20)}</p>
      <p>{isPalindrom('Ala').toString()}</p>
    </div>
  );
};

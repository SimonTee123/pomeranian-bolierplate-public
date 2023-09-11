export const JsStringTraining = () => {

function truncate(input, endIndex) {
  return input.substring(0,endIndex);
}


  function isPalindrom(input) {
    const lowerInput = input.toLowercase();
    const reversed = lowerInput.split("").reverse().join("");

    return lolwerInput ===  reversed;
  }


  return (
    <p>{ucFirst("lalalala")}</p>
    <p>{truncate("Hello world blalbbal", 3)}</p>
    <p>{isPalindrom("Ala").toString()}</p>
  ) </div>
  );
};

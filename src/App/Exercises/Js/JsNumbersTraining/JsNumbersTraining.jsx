export const JsNumbersTraining = () => {
  let age = 18;
  let hasDriverLicense = true;
  let hasCar = true;
  function canDrive(age, hasDriverLicense, hasCar) {
    if (age >= 18) {
      if (hasDriverLicense) {
        if (hasCar) {
          return 'You can drive your car!';
        } else {
          return 'You can drive a rental car.';
        }
      } else {
        return "You can't drive without a driver's license.";
      }
    } else {
      return 'You are too young to drive.';
    }
  }
  function hasEnough(hasEnough) {
    if (hasEnough) {
      return true;
    } else {
      return false;
    }
  }

  console.log(canDrive(18, true, true));
  console.log(hasEnough(true));

  return <div>{Math.random()}</div>;
};

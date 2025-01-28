const convertToCelsius = function(farenheitTemp) {
    let rawCelsius = (farenheitTemp - 32) * (5/9);
    let roundedCelcius = Number(rawCelsius.toFixed(1));
    return roundedCelcius;
};

const convertToFahrenheit = function(celciusTemp) {
  let rawFarenheit = (celciusTemp*(9/5)+32);
  let roundedFarenheit = Number(rawFarenheit.toFixed(1));
  return roundedFarenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

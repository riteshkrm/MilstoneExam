function celsiusToFahrenheit(celsius) {
  const fahrenheit = (celsius * 9) / 5 + 32;
  return fahrenheit;
}

const temperatureInCelsius = prompt('Enter celsius:-');
const temperatureInFahrenheit = celsiusToFahrenheit(temperatureInCelsius);
console.log(`Temperature in Fahrenheit: ${temperatureInFahrenheit}`);

const kelvin = 373;
//convert Kelvin to Celsius by subtracting 273 from the kelvin variable. Store the result in another variable, named celsius.
const celsius = kelvin - 273;
//Use this equation to calculate Fahrenheit Fahrenheit = Celsius * (9/5) + 32. Choose the variable type that allows you to change its value.
let fahrenheit = celsius * (9 / 5) + 32;
//Use the .floor() method from the built-in Math object to round down the Fahrenheit temperature.
fahrenheit = Math.floor(fahrenheit);
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`)
//Convert celsius to the Newton scale using the equation below
let newton = celsius * (33/100);
newton = Math.floor(newton);
console.log(`The temperature is ${newton} degrees newton.`)

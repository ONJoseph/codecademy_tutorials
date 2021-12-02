let myName = 'Joseph Ogbole';
//A variable named myAge, and set it equal to your age as a number
let myAge = 40;
//A variable named earlyYears, its value set to 2
let earlyYears = 2;
earlyYears *= 10.5;
//Since we already accounted for the first two years, take the myAge variable, and subtract 2 from it. Set the result equal to a variable called laterYears
let laterYears = myAge - 2;
laterYears *= 4;
console.log(earlyYears);
console.log(laterYears);
//Add earlyYears and laterYears together, and store that in a variable named myAgeInDogYears.
const myAgeInDogYears = earlyYears + laterYears;
//Write your name as a string, call its built-in method .toLowerCase(), and store the result in a variable called myName. The toLowerCase method returns a string with all lowercase letters.
'Joseph Ogbole'.toLowerCase();
//Write a console.log statement that displays your name and age in dog years. Use string interpolation to display the value
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`)
//Great work! You can convert any human age to dog years. Try changing myAge and see what happens. 

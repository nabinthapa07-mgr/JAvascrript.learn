//to calculate simple interest
let simple_interest = (principal, time, rate) => {
  return principal * time * rate;
};
console.log(simple_interest(1000, 2, 0.1));

//to calculate simple interest by user input using arrow function

let principal = parseFloat(prompt("Enter principal amount: "));
let rate = parseFloat(prompt("Enter rate: "));
rate = rate / 100;
let time = parseFloat(prompt("Enter time : "));

let calculate = (principal, time, rate) => {
  return principal * time * rate;
};
let simpleinterst = calculate(principal, time, rate);
alert("simpleinterst of given input:" + simpleinterst);

//to add 2 number from user input using arrow function
let num1 = parseFloat(prompt("Enter first number: "));
let num2 = parseFloat(prompt("Enter second number: "));

let add = (num1, num2) => {
  return num1 + num2;
};
let addition = add(num1, num2);
alert("sum of 2 number:" + addition);
console.log(addition);

to calculate factorial of given number

let number = parseFloat(prompt("Enter positive number: "));
let factorial = 1;
if (number < 0) {
  alert("error! negative value");
} else if (number === 0 || number === 1) {
  alert("The factorial of number=1");
} else {
  for (let i = 2; i <= number; i++) {
    factorial = factorial * i;
  }
  alert("factorail of given input:" + factorial);
}



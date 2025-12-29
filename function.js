// Functions are fundamental building blocks in all programming.

// Functions are reusable block of code designed to perform a particular task.

// Functions are executed when they are "called" or "invoked".

let num1 = parseFloat(prompt("Enter first number: "));
let num2 = parseFloat(prompt("Enter second number: "));
let operators = prompt("Enter operator (+, -, *, /): ");
let result=0;

function calculator(n1, n2, op) {
  switch (op) {
    case "+":
      result = n1 + n2;

      break;

    case "-":
      result = n1 - n2;

      break;

    case "*":
      result = n1 * n2;

      break;

    case "/":
      result = n1 / n2;

      break;

    default:
      console.log("Invalid operator");
      return;
  }
}

calculator(num1, num2, operators);
console.log("The result is: " + result);
alert("The result is: " + result);

// first class function
// means treaating functions as a value

function greet(value) {
  value();
  console.log("what!");
}
greet(function () {
  console.log("Namastey");
});

let greets = (val) => {
  val();
};
greets(function () {
  console.log("jhora!");
});

// closures
// function return function, returned fn use parent function variable
function hi() {
  let greet = "hi";
  return function () {
    greet = "hello";
    console.log(greet);
  };
}
const hello = hi();
hello();

//

const multiply = (num1, num2) => {
  return num1 * num2;
};
let results = multiply(23, 2);
console.log(result);
//

function score(...value) {
  let total_score = 0;

  value.forEach(function (value) {
    total_score = total_score + value;
    // console.log(total_score);
  });
  return total_score;
}
console.log(score(12, 23, 31, 42, 40));

console.log(score(12, 23, 31, 42, 40));

const Event = [];
const addEvent = ({ date, place, name }) => {
  Event.push({ date, place, name });
};
addEvent({
  date: "2072-07-23",
  place: "manigram",
  name: "workshop",
});
console.log(Event);

// closure for counting
function counter() {
  let count = 0;
  return function () {
    count++;
    return count;
  };
}
let counting = counter();
console.log(counting());
console.log(counting());

// closure for discount
function discountcal(discount) {
  return function (price) {
    return price - (price * discount) / 100;
  };
}
let discontprice = discountcal(10);
console.log(discontprice(1000));

// pure function

square = (value1) => {
  return value1 * value1;
};
console.log(square(3));

//annonymus

let div = function (a, b) {
  return a / b;
};
console.log(div(6, 3));




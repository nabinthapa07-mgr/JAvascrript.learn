// slice
let arr = [1, 2, 3, 4];
let newarr = arr.slice(0, 3);
console.log(arr);
console.log(newarr);
// output=1,2,3 in a new array i.e new arr[4] whereas arr=[1,2,3,4]

// splice
let arrs = [1, 2, 3, 4];
arrs.splice(0, 3);
console.log(arrs);
// output=4 in same array i.e arrs[4]

// foreach
// forEach does not return a new array.
// Changing the callback parameter does not change the original array.
let arri = [1, 2, 3, 4, 5];
arri.forEach(function (val) {
  val = val + 1;
  console.log(val);
});

console.log(arri);

// map
// map returns a new array.
// map does NOT change the original array.
// Each element in the new array is the return value of the callback.
// If you don't return anything, the new array will contain undefined.
// map is used to transform data, not for side effects.
let arris = [1, 2, 3, 4, 5];
let newarris = arris.map(function (val) {
  return val + 1;
});

console.log(arris);
console.log(newarris);

// filter
// filter returns a new array.
// filter does NOT change the original array.
// The callback must return true or false.
// Only elements that return true are kept.
// filter is used to select data, not transform it.

let ar = [1, 2, 3, 4, 5];
let newar = ar.filter(function (value) {
  if (value > 3) return true;
});
console.log(newar);
console.log(ar);

// reduce
// reduce returns a single value.
// reduce does NOT change the original array.
// The callback combines values into one result.
// The accumulator stores the running result.
// reduce is used to calculate, not to loop visually.

let ars = [1, 2, 3, 4, 5];
let nwears = ars.reduce(function (accumulator, value) {
  return accumulator + value;
}, 0);
console.log(nwears);
console.log(ars);

// find
// The find() method in JavaScript is used to search through an array
// and return the first element that satisfies a provided testing function MDN Web Docs.
//  If no matching element is found, it returns undefined.

// let aaray=[1,3,2,3,];
// let newaaray=aaray.find(function(value){
//   return value===3;
// });
// console.log(newaaray);
// console.log(aaray);

// some//
// let aaray = [1, 3, 2, 3];
// let newaaray = aaray.some(function (value) {
//   return value === 3;
// });
// console.log(newaaray);
// console.log(aaray);

let color = ["green", "red", "yellow", "brown", "blue"];
let hascolor = (input) => {
  // return the RESULT of some()
  return color.some(function (c) {
    // return true if input matches this color
    return input === c;
  });
};

console.log(hascolor("black")); // false
console.log(hascolor("blue")); // true

//every

let aaray = [3, 2, 3];
let newaaray = aaray.every(function (value) {
  return value > 1;
});
console.log(newaaray);
console.log(aaray);

//destructuring
let aer = [1, 2, 3, 4];
let [a, b, , d] = aer;
console.log(d);

//spread

let are = [1, 2, 3, 4];
let are2 = [...are];
console.log(are2);

//practice
//create an array with 3 fruit and print second one;

let fruit = ["apple", "mango", "banana"];
let second = fruit[1];
fruit.unshift("Guava");
fruit.push("pine-apple");
console.log(fruit);

//use .map to square each number
let num = [1, 2, 3, 4];
let square = num.map(function (value) {
  return value * value;
});
console.log(square);

//use .filter to keep number greater than 10
let number = [10, 6, 11, 9, 29];
let keepnum = number.filter((value) => {
  if (value > 10) return true;
});
console.log(keepnum);

//use .reduce() to sum this array

let nums = [2, 3, 5, 10, 20, 10];
let sum_nums = nums.reduce((accumulator, value) => {
  return accumulator + value;
}, 0);
console.log(sum_nums);

//use .find() to get the first number less than 10

let ab = [12, 29, 42, 9, 4];
let newab = ab.find((value) => {
  return value < 10;
});
console.log(newab);

//use .some()to check if any student has scored below 35
let marks = [40, 66, 39, 34, 90];
let checkmarks = marks.some((value) => {
  return value < 35;
});
console.log(checkmarks);

//use .every ()to check if all numbers are even
let numy = [10, 14, 8, 7];
let checkeven = numy.every((value) => {
  return value % 2 === 0;
});
console.log(checkeven);

//merge two array using spread opeartor
let abcd=[1,2,3,4];
let efgh=[5,6,7,8];

let abcdefgh=[...abcd, ...efgh];
console.log(abcdefgh);


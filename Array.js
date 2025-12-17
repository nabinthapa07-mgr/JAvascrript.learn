// slice
let arr=[1,2,3,4];
let newarr=arr.slice(0,3);
console.log(arr);
console.log(newarr);
// output=1,2,3 in a new array i.e new arr[4] whereas arr=[1,2,3,4]

// splice
let arrs = [1, 2, 3, 4];
arrs.splice(0,3);
console.log(arrs);
// output=4 in same array i.e arrs[4]

// foreach
// forEach does not return a new array.
// Changing the callback parameter does not change the original array.
let arri=[1,2,3,4,5];
arri.forEach (function(val){
    val=val+1;
console.log(val);
})

console.log(arri);

// map
// map returns a new array.
// map does NOT change the original array.
// Each element in the new array is the return value of the callback.
// If you don't return anything, the new array will contain undefined.
// map is used to transform data, not for side effects.
let arris= [1, 2, 3, 4, 5];
let newarris=arris.map(function (val) {
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

let ar=[1,2,3,4,5];
let newar=ar.filter(function(value){
 if(value>3) return true;
});
console.log(newar);
console.log(ar);


// reduce
// reduce returns a single value.
// reduce does NOT change the original array.
// The callback combines values into one result.
// The accumulator stores the running result.
// reduce is used to calculate, not to loop visually.

let ars=[1,2,3,4,5];
let nwears=ars.reduce(function(accumulator,value){
    return accumulator+value;

},0);
console.log(nwears);
console.log(ars);

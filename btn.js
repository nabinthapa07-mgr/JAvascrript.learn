function score(...value) {
  let total_score = 0;

  value.forEach(function (value) {
    total_score = total_score + value;
    // console.log(total_score);
  });
  return total_score;
}
console.log(score(12, 23, 31, 42, 40));

let animal=["dog","cat"];
animal.push("cow");//push at last index
console.log(animal);

animal.shift();//removes at first index
console.log(animal);

animal.unshift("dog");//add at first index

console.log(animal);

animal.pop();//remove at last index

console.log(animal);


let car=["toyota","bmw","suzuki","volvo"];
let newcar=car.slice(1,2,);
console.log(newcar);
console.log(car);

let bike=["honda","pulsar","apache"]
bike.splice(1,2,);
console.log(bike);


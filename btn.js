function score(...value) {
  let total_score = 0;

  value.forEach(function (value) {
    total_score = total_score + value;
    // console.log(total_score);
  });
  return total_score;
}
console.log(score(12, 23, 31, 42, 40));

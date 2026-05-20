// local storage
// only saves string
// to saves other datatypes we use json.stringify
// json.parse to convert into original state

//eg
localStorage.setItem("friends", JSON.stringify(["ram", "shyam", "hari"])); // to save array converting string

let friend = JSON.parse(localStorage.getItem("friends")); // to get original array

console.log(friend);

// we learn:
// 1. data store
// 2.data fetch
// data remove
// data update

//store
localStorage.setItem("name", "Luffy");

//fetch
let value = localStorage.getItem("name");

// update
localStorage.setItem("name", "Roronoazoro");

//remove
localStorage.removeItem("name");

// session storage
// same as local but it only save data until tab is open
//tab close = data close
// syntax differences in remove i.e clear

//cookies
//cookies ma jun data save huxa tyo page reload garda automatically server ma janxa
// stores samll/lightweight data (~4kb)

// create cookie
document.cookie = "name=hahaha";

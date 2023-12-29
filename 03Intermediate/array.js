// Different declaration type 

// 1st type
var countries = ["India", "USA", "Japan", "England", "Germany"];

// 2ns type
var states = new Array("West Bengal", "Karnataka", "Delhi", "Rajasthan", "Mumbai");

// accessing the element of the array
// console.log(states);
// console.log(countries);

// indexing
// console.log(states[2]);
// console.log(countries[1]);

// different methods on array
// console.log(states.length);

// replacing the element
states[4] = "Assam";
// console.log(states);

var user = ["abhimanyu", "ak48@gmail.com", 5, 23, false];
// console.log(user);

user.pop();  //removing element from the last
user.pop();

user.unshift("new value") //adding value at the front of the array
// console.log(user);
user.shift(); //removing value from the front of th array
// console.log(user);

console.log(user.indexOf(5));

console.log(Array.from("abcde"));
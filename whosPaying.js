var names = ["Andre","Devin","Angela","Brandy"];

function whosPaying(names) {
  var numberOfPeople = names.length;
  var randomPersonPosition = Math.floor(Math.random() * numberOfPeople);
  var randomPerson = names[randomPersonPosition];

  return randomPerson + " is going to buy today!";
}


// Find out who is paying for the bill using random picker.
// First we will need an array to hold all of the names
// var names = ["Andre","Devin","Angela","Brandy"];
// Now we need a function that will count the number of people,
// use one of those number to select a position in the names array.
// var numberOfPeople = names.length; This will count the names in the array.
// So no we need a number  that represents the number of names from random.
// var randomPersonPosition = Math.floor(Math.random() * numberOfPeople);
// Math.random gives a random number from 0 - 0.9 then multiply it by the var numberOfPeople.
// var randomPerson = names[randomPersonPosition];
// now you can return randomPerson.
//return randomPerson + " is going to buy today!"

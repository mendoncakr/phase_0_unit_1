// This is a Solo Challenge. 

// There is a section below where you will write your code.
// Do not alter this object here.
var terah = {
  name: "Terah",
  age: 32,
  height: 66,
  weight: 130,
  hairColor: "brown",
  eyeColor: "brown"
};


/* Pseudocode Section - write pseudocode for each challenge below.
1. Define a variable adam and use object literal notation to assign this variable 
   the value of a JavaScript Object object with no properties.

  create adam variable and set to empty object 

2. Give adam a name property with the value "Adam".

  declare property of name and set value to "Adam"

3. Add a spouse property to terah and assign it the value of adam.

set spouse to adam object

4. Change the value of the terah weight property to 125.

set terah's weight to 125

5. Remove the eyeColor property from terah.
 
 delete eyeColor

6. Add a spouse property to adam and assign it the value of terah.
 add a spouse property and assign to terah object

 create new property/value for adam, assign it name of spouse and set to terah

7. Add a children property to terah and and use object literal notation to assign 
   this variable the value of a JavaScript Object object with no properties

   add children property to terah and set to empty object

8. Add a carson property to the value of the terah children property and assign it 
  the value of an object with the property name with a value of "Carson".
 creat new child under children property and set name to Carson


9. Add a carter property to the value of the terah children property and assign it 
   the value of an object with the property name with a value of "Carter".

   creat new child under children property and set name to Carter

10. Add a colton property to the value of the terah children property and assign it 
    the value of an object with the property name with a value of "Colton".

    creat new child under children property and set name to Colton

11. Add a children property to adam and assign it the value of terah children.

set terah children object to equal adam children object
*/
// __________________________________________
// Write your code below.

var adam = {name: "Adam"};
terah.spouse = adam;
terah.weight = 125;
delete terah.eyeColor;
adam.spouse = terah;
terah.children = {};
terah.children.carson = {name: "Carson"}
terah.children.carter = {name: "Carter"}
terah.children.colton = {name: "Colton"}
adam.children = terah.children




// __________________________________________
// Reflection: Use the reflection guidelines
// The wording of this challenge made it quite difficult. Many times, I wasn't sure if I was
// supposed to add the properties/values directly to the variable adam as a nested list or
// if I was supposed to just write the line of code under the variable adam, as I did. Luckily,
// I found that using the console on Chrome to be of great help! Unlike node.js, I can easily copy
// and paste my code from my editor to the console without having mistakes in syntax. I found that copying code
// in node.js never came out correctly and I never could figure out how to exit from my function. Overall,
// I didn't feel too confident with this challenge, mostly because I wasn't sure if I was doing right. On the other,
// hand, I felt quite comfortable with the exercises and working through the problems helped me grasp object literal
// notation a little better.

// __________________________________________
// Driver Code:  Do not alter code below this line.
function assert(test, message, test_number) {
  if (!test) {
    console.log(test_number + "false");
    throw "ERROR: " + message;
  }
  console.log(test_number + "true");
  return true;
}

assert(
  (adam instanceof Object),
  "The value of adam should be an Object.",
  "1. "
)

assert(
  (adam.name === "Adam"),
  "The value of the adam name property should be 'Adam'.",
  "2. "
)

assert(
  terah.spouse === adam,
  "terah should have a spouse property with the value of the variable adam.",
  "3. "
)

assert(
  terah.weight === 125,
  "The terah weight property should be 125.",
  "4. "
)

assert(
  terah.eyeColor === undefined,
  "The terah eyeColor property should be removed.",
  "5. "
)

assert(
  terah.spouse.spouse === terah,
  "The terah spouse property's value spouse property should be terah.",
  "6. "
)

assert(
  (terah.children instanceof Object),
  "The value of the terah children property should be an Object.",
  "7. "
)

assert(
  terah.children.carson.name === "Carson",
  "The terah children property should have a carson property with its own property name with a value of 'Carson'.",
  "8. "
)

assert(
  terah.children.carter.name === "Carter",
  "The terah children property should have a carter property with its own property name with a value of 'Carter'.",
  "9. "
)

assert(
  terah.children.colton.name === "Colton",
  "The terah children property should have a colton property with its own property name with a value of 'Colton'.",
  "10. "
)

assert(
  adam.children === terah.children,
  "The value of the adam children property should be the value of the terah children property",
  "11. "
)

console.log("\nHere is your final terah object:")
console.log(terah)

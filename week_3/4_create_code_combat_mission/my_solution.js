// I worked with Stella Kim on this challenge

// Your mission description:
// The mission for Tharin is to ask the village people for clues to find the treasure hidden in the castle. 
// Each village person he encounters give him a clue to make him one step closer to the treasure. 
// 
// 

// Pseudocode
// Tharin walks right twice to the nearest villager
// Tharin asks for clue
// Villager1 says "answer a riddle first"
// Villager1 prompts a question
//  - if answer is right villager gives clue
//  - else villager asks question again
// Set variable asking back to true
// Tharin follows command which is walking four steps to the left
// Tharin meets second villager
// Tharin asks for clue
// Villager2 prompts a question
//  - if answer is right villager gives clue
//  - else villager asks question again
// Tharin follows command and walks two steps up 
// Tharin says "hooray!"


// Initial Code

var this = { Tharin };
var villager1 = { Smith };
var villager2 = { Steve };
var asking = true;

this.moveRight();
this.moveRight();
this.say("Hey there, do you know how I can get to the treasure?");
villager1.say("I will only tell you if you answer this riddle:")
while (asking) {
    var clue = villager1.prompt("Give me food and I will live. Give me water and I will die. What am I?");
    if (clue = "fire" || "Fire") {
        console.log("Correct! Go see Steve around the corner four steps to your left.");
        asking = false;
    } else {
        villager1.say("Wrong, try again.");
    }
}
asking = true;
this.moveLeft();
this.moveLeft();
this.moveLeft();
this.moveLeft();

this.say("Hey there, do you know how I can get to the treasure?");
villager2.say("I will only tell you if you answer this riddle:")

while (asking) {
    var clue = villager2.prompt("What bone has a sense of humor?");
    if (clue = "humerus") {
        console.log("Correct! The treasure is 2 steps north.");
        asking = false;
    } else {
        villager2.say("Wrong, try again.");
    }
}
this.moveUp();
this.moveUp();
this.say("Hooray!");

// Refactored Code
// I didn't find many ways to refactor our code even though the code seems to repeat itself
// However, I did find some syntax errors along the way, such as changing == to ===, spelling, etc.
//

// Reflection
// The directions were pretty unclear as to what eactly was expected from us, but we managed to go with the flow. Other than getting another pairing experience, I
// didn't feel like i learned or took away anything of importance from this challenge. Working with a pair is always a learning experience, and I seem to take away
// a lot in terms of learning how to deal with other programmers, learning to get your point across concisely and straightforawrdly, etc .
// Most of the problems we encountered dealt with syntax rather than the issues that arose from creating the mission. 
// 
// 
// 
// 
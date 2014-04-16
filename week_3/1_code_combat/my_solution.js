// I worked on this challenge [by myself, with:]
 
// For each mission, write the title as a comment. (Shown here). Also include pseudocode as a comment. 
// Note: to make commenting easier, you can highlight the section you want to comment and hold 
// command + / This will comment the line. 
 
 
 
//  Mission 1: Rescue mission

// move down x2
// move right x1
// move up x2
// move right x2
// move down x1
// attack

this.moveDown();
this.moveDown();
this.moveRight();
this.moveUp();
this.moveUp();
this.moveRight();
this.moveRight();
this.moveDown();   
this.attackNearbyEnemy();

// Mission 2: Grab the mushroom
// move up x1
// move right x1
// turn around/move left x1
// move up x1
// attack

this.moveUp();
this.moveRight();
this.moveLeft();
this.moveUp();
this.attackNearbyEnemy();

// Mission 3: Drink me
// Attack first enemy
// move right
// move down
// move up
// move right
// attack

this.attackNearbyEnemy();
this.moveRight();
this.moveDown();
this.moveUp();
this.moveRight();
this.attackNearbyEnemy();


// Mission 4: Taunt the guards
// move right
// bust down door
// move right
// say hey there!
// move left x2
// say attack
// move right 
// say follow me
// move right x2
// move up
// move right
// say blaaah
// move down
// move right
// move up
// move right


this.moveRight();
this.bustDownDoor();
this.moveRight();
this.say("Hey there!");
this.moveLeft();
this.moveLeft();
this.say("Attack!");
this.moveRight();
this.say("Follow me.");
this.moveRight();
this.moveRight();
this.moveUp();
this.moveRight();
this.say("BLAHHH");
this.moveDown();
this.moveRight();
this.moveUp();
this.moveRight();


// Mission 5: It's a trap!
// move down x2
// say something
// move up x2

this.moveDown();
this.moveDown();
this.say("hey!");
this.moveUp();
this.moveUp();
 

 // Mission 6: Taunt
 say something x4

this.say("Hey boy!");
this.say("You, I'm talking to you!");
this.say("Hey Buddy!");
this.say("Piss off!!");

// Mission 7: Cowardly Taunt

// go to safe spot at (70, 10)
// move to place where ogres can hear you
// say something to lure them
// move back to safe spot for protection


this.moveXY(50, 16);
this.moveXY(63, 20);
this.moveXY(70, 10); 
this.say("I can lure them in here.");
this.moveXY(55,35);
this.say("ahhh!!");
this.moveXY(74,9);

// Mission 8: Commanding Followers
// move to friends
// gather friends
// make friends follow you
// move near enemys
// say attack to engage 

this.moveXY(49, 66);
this.moveXY(60, 63);
this.moveXY(75, 63);
this.say("Hail, friends!");
this.say("Follow me!");
this.moveXY(66, 42);
this.say("ATTACK!!!");

// Mission 9: Mobile Artillery
// move into range
// shoot once at ogres
// move closer to other ogres
// 	- if still alive, shoot again
// relocate closer to ogre group #2
// shoot
// 	- if still alive, shoot again
// relocate closer to ogre group #3
// shoot
// 	- if sitll alive shoot once more	

this.moveXY(30, 26);  
this.attackXY(46, 5); 
this.moveXY(54, 31);
this.attackXY(68, 57);
this.attackXY(66, 47);
this.moveXY(50,42);
this.attackXY(48, 65);
this.attackXY(49, 52);



// Questions:
// What is this referring to? Think programming-wise rather than in the terms of the game.

// this in Code Combat is referring to the player Tharin in the game, but actually refers to the Javascript (JS) object for Tharin coded in the game source code. 
// In JS objects are one of the many data types in an object-oriented programming language that has its own properties and methods. 
// Other data types also include: strings, functions, integers, booleans, and arrays to name a few.


//What does the () do in JavaScript?

// The ()'s in JS serve various purposes. For example, they can be used to:
// - Group expressions in order to control order of execution e.g a = (4 + 3) * 2;
// - Contain expressions e.g.( a > 10)
// - Contain a list of parameters which can be passed to a function e.g. someFunction(a, b, c)


// What is the point of the semicolons?

// Semicolons in JS serve as statement terminators which separate elements of the program. 
// A statement is an instruction to the computer and the semicolon is used to separate these instructions.

 
// Reflection:

// To be completely honest, I didn't enjoy this challenge at all and thought it was a waste of time. It seemed really childish and I didn't get much out of it.
// It didn't do a good job of attempting to teach basic javascript principals in any sense, at least the beginner course and
// It felt extremlely tedious since I was merely pointing/clicking/typing random methods. If anything, it was more frustrating trying to f
// igure out which way Tharin would go depending on the method used. (e.g. if I wanted to go back but if I was facing down,  would I go left? down? up?)





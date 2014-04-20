// GPS 1.2 - JavaScript

// YOUR FULL NAMES:
//  1. Kenneth Mendonca	
//  2. Ian Shuff


// 1. "YOU SIGNED... WHO?!"
var client1 = {name: "Ian Shuff", age: 25, quote: "Hey what's up"};

// 2. "Here they Come!"
var client2 = {name: "Adam Sandler", age: 47, quote: "That's your home, are you too good for home?"};
var client3 = {name: "Kristen Bell", age: 33, quote: "Do you wanna build a snowman?"};
var client4 = {name: "Jim Carrey", age: 52, quote: "So you're telling me there's a chance? Yeah!"};

// 3. "TIME IS MONEY!"

var Client = function(name, age, quote) {
this.name = name;
this.age = age;
this.quote = quote;
}

var shooterMcGavin = new Client("Shooter McGavin", 48, "Just stay out of my way... or you'll pay. Listen to what I say.");
shooterMcGavin.constructor === Client;
shooterMcGavin.age === 48;
shooterMcGavin.quote === "Just stay out of my way... or you'll pay. Listen to what I say.";

//YOUR CODE HERE!

var clientlist = [client1, client2, client3, client4];

client5 = new Client("Ben Affleck",44,"Boston!");
client6 = new Client("Jennifer Lawrence", 25, "YEAH!");
client7 = new Client("Henry Cavill", 27, "Up, up, and away.");

array = [];
array.push(client5,client6, client7);

// 4. "SHOW 'EM OFF!"

for ( var i=0; i < array.length; i++ ) {console.log("My name is " + array[i].name + ". I'm " + array[i].age.toString() +" years old." +" My best quote is: " + array[i].quote)


// ** BONUS **


//  Your Reflection:

 



let guessNumber = 25;

let userGuess = prompt("Enter a guess number.");

while(userGuess != guessNumber) {
   userGuess = prompt("You enter wrong number. Try again!");
}

console.log("Congrats!! You entered the right number.");



let user = prompt("Enter your full name without space");
let user1 = `@${user}${user.length}`;
console.log(user1);


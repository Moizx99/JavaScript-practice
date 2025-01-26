let guessNumber = 25;

let userGuess = prompt("Enter a guess number.");

while(userGuess != guessNumber) {
   userGuess = prompt("You enter wrong number. Try again!");
}

console.log("Congrats!! You entered the right number.");



let user = prompt("Enter your full name without space");
let user1 = `@${user}${user.length}`;
console.log(user1);


let marks = [32, 32, 32, 43, 34, 53, 34];

sum = 0;

for (let val of marks) {
   sum += val;
}

console.log(`Total marks: ${sum}`);

let avg = sum / marks.length;

console.log(`Average marks: ${avg}`);

let items = [250, 645, 300, 900,50];


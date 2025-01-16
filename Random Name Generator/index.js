let rand = Math.random()
let first, second, third;

if (rand < 1 / 3) {
  first = "Crazy"
} else if (rand > 1 / 3 && rand <= 2 / 3) {
  first = "Amazing"
} else {
  first = "Fire"
}

rand = Math.random()
if (rand < 1 / 3) {
  second = "Engine"
} else if (rand > 1 / 3 && rand <= 2 / 3) {
  second = "Foods"
} else {
  second = "Garments"
}


rand = Math.random()
if (rand < 1 / 3) {
  third = "Bros"
} else if (rand > 1 / 3 && rand <= 2 / 3) {
  third = "Limited"
} else {
  third = "Hub"
}
console.log(`${first}  ${second}  ${third}`)
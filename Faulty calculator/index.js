// It performs wrong operation 10% of the times

let random = Math.random()

let a = prompt("Enter first number")
let b = prompt("Enter second number")
let c = prompt("Enter operation")

let obj = {
  "+": "-",
  "*": "+",
  "-": "/",
  "/": "**"
}


if (random > 0.1) {
  //correct calculation
  console.log(`The result is ${a} ${c} ${b}`)
  alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
}

else {
  //wrong calculation

  c = obj[c]

  alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
}
// discount 10% on each value of array and print the discounted value

let items  = [250, 645, 300, 900, 50];

// let i = 0;
// for(let val of items) {
//   let offer = val / 10;
//   items[i] -= offer;
//   console.log(items[i]);
//   i++;
// }

for(let i = 0; i < items.length; i++) {
  let offer = items[i] / 10;
  items[i] -= offer;
}

console.log(`dicounted items: ${items}`); 


let company = ["Bloomberg", "Google", "Facebook", "Amazon", "Microsoft"];

company.shift();
console.log(company);

company.splice(1, 1, "Ola");
console.log(company);

company.push("Amazon");
console.log(company);


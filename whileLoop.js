let rep = 1;
while (rep < 11) {
  //   console.log(`This is ${rep}`);
  rep++;
}

console.log("Let's Rolled a 6!!");

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
  console.log(`You rolled ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log(`Congratulations! it's 6`);
}

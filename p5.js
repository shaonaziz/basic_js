const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];
const arr = [];
let tip;
let total;
for (let i = 0; i < bills.length; i++) {
  if (bills[i] >= 50 && bills[i] <= 300) {
    tip = (15 / 100) * bills[i];
    total = tip + bills[i];
  } else {
    tip = (20 / 100) * bills[i];
    total = tip + bills[i];
  }

  tips.push(tip);
  totals.push(total);
}
console.log(bills, tips, totals);

const calcAvg = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
};

console.log(calcAvg(bills));
console.log(calcAvg(tips));
console.log(calcAvg(totals));

//Application of For loop (নামতা 😂)

console.log("----Multiplication Table----");

const multiplicationTable = (guess) => {
  let multi;
  console.log(`${guess} এর নামতা`);
  for (let rep = 1; rep < 11; rep++) {
    multi = rep * guess;
    console.log(`${rep} x ${guess} = ${multi}`);
  }
};

const inp=Number(prompt('কত এর নামতা পড়তে চান?'))

multiplicationTable(inp)
const bills = [100, 40, 50, 60, 12.5];

const calcTips = (bill) => {
  if (bill >= 50 && bill <= 300) {
    const tips = bill * (15 / 100);
    return tips;
  } else {
    const tips = bill * (20 / 100);
    return tips;
  }
};

const printTips = function (bakshish) {
  if (bakshish >= 50 && bakshish <= 300) {
    return 15;
  } else {
    return 20;
  }
};
const percent = printTips(bills[bills.length-5]);

const totalTips = calcTips(bills[bills.length-5]);

console.log(
`Your Bill is : ${bills[bills.length-5]} BDT.
${percent} % of ${bills[bills.length-5]} BDT generates ${totalTips} BDT payable tips
total Due is : ${bills[bills.length-5] + totalTips} BDT.
Pleasure to serve You 😊`);


//Array methods..

const friends=['rahim','karim','zabbar','yasin']

console.log(friends);
friends.push('shaon');
friends.unshift('Aziz');
friends.shift();
console.log(friends);

friends.splice(0,3);
console.log(friends);
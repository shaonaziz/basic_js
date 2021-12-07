const bill=Number(prompt('The Bill is : '))
let tips;
console.log(`The bill was ${bill},the tip was ${
    bill>=50 && bill<=300 ? tips = (15/100)*bill : tips = (20/100)*bill
} and the total value , ${ bill + tips}`);
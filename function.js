// function sum(num1,num2){
//     const add=num1+ num2;
//     return add;
// }

// console.log(sum(3,21));

// function teaProccessor(sugar,milk,peanuts){
//     const tea=`Ready a cup of Tea which is made with ${sugar} spoons of Sugar, ${milk} cup of Milk and ${peanuts} gram Pure Peanuts ☕ `
//     return tea;
// }

// console.log(teaProccessor(2,0.5,12));

//Function decleration,

// function CalcAg1(birthYear) {
//   const age1 = 2021 - birthYear;
//   return age1;
// }

// const boyosh = CalcAg1(1995);

// function expression,

// const calcage2 = function (birthYear) {
//   return 2021 - birthYear;
// };

// const boyosh1 = calcage2(1996);

// console.log(boyosh, boyosh1);

//Arrow Function

// const age = (birthYear) => 2021 - birthYear;

// console.log(age(1997));

// const yearUntilRetirement = (birthYear, firstName) => {
//   const age = 2021 - birthYear;
//   const retirement = 70 - age;
//   return `${firstName} Retire in ${retirement} years`;
// };

// console.log(yearUntilRetirement(1995, "Shaon"));
// console.log(yearUntilRetirement(1996, "forhad"));

//Nested Functions

const cutfruitePiece = (fruits) => {
  return fruits * 4;
};

const fruitProccessor = (apples, oranges) => {
  const applePieces = cutfruitePiece(apples);
  const orangePieces = cutfruitePiece(oranges);

  const juice = `The juice is made with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges`;
  return juice;
};

console.log(fruitProccessor(2, 3));






const calcAge = (birthYear) => {
  return 2021 - birthYear;
};

const yearUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(1990);
  const retirement = 70 - age;

  if (retirement > 0) {
    console.log(`${firstName} retire in ${retirement} years`);
    return retirement;
  } else {
    console.log(`${firstName} already Retired!`);
    return 0;
  }
};

console.log(yearUntilRetirement(1991, "shaon"));
console.log(yearUntilRetirement(1980, "Mike"));

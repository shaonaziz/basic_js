//Equal operators!!

//=== 3 equals are strict or strong;
//== 2 equals are loss or weak;

// const age=18;
// if(age===18) console.log('Yes Its executable!'); // 18 === 18 here.

// const money='500';
// if(money==500) console.log('EXECUTABLE!!') // '500' == 500 type coercion place here.

const value = Number(prompt("Whats Your Age Number?"));

if (value == 18) {
  console.log("Wow you are adult now !");
} else if (value === 21) {
  console.log("Oh come on Should be married now! ❤");
} else {
  console.log("You are not adult kids");
}


//Always Use === 3 EQUALS!!!
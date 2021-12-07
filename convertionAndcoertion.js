// Type Convertion

const inputYear = "1995";
console.log(inputYear);
console.log(typeof inputYear);
console.log(Number(inputYear) + 2);


                //  Type Coercion

//Type coertion , which can automatically convert the number into string or string to number when we see the output
//for example,
// '+' operator always makes all the type into String
console.log("I am " + 23 + " years old"); // in the console 23 was a number but its produced as a string in the output JavaScript screatly do that.

// '-' operator always makes all the type into Number
console.log("11" - 2);
// '*' operator always makes all the type into Number
console.log('7' * '8');
// '/' operator always makes all the type into Number
console.log('45'/ 5)
// '>' operator makes string into boolean
console.log('7'>'5');

let n='1'+1
n=n-1;
console.log(n);
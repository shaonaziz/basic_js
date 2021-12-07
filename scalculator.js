// let result;
// const num1=Number(prompt('Enter Your First Number:'));
// const num2=Number(prompt('Enter Your Second Number:'));
// const operator = prompt('Select Your Operators from +,-,*,/,%');

// switch(operator){
//     case '+':
//         result=num1+num2;
//         console.log(`The Result is ${num1} + ${num2} = ${result}`);
//         break;
//     case '-':
//         result=num1-num2;
//         console.log(`The Result is ${num1} - ${num2} = ${result}`);
//         break;
//     case '*':
//         result=num1*num2;
//         console.log(`The Result is ${num1} * ${num2} = ${result}`);
//         break;
//     case '/':
//         result=num1/num2;
//         console.log(`The Result is ${num1} / ${num2} = ${result}`);
//         break;
//     case '%':
//         result=num1%num2;
//         console.log(`The Result is ${num1} % ${num2} = ${result}`);
//         break;
//     default:
//         console.log('Invalid Operators');
//         break;
// }




// const num = Number(prompt("Enter a Number: "));

// switch (num) {
//   case 1:
//     console.log("Canda");
//     break;
//   case 2:
//     console.log("Australia");
//     break;
//   case 3:
//     console.log("America");
//     break;
//   case 4:
//   case 5:
//     console.log("Germany");
//     break;
//   default:
//     console.log("Better Luck Next Time");
//     break;
// }

const price1 = 0.46 
const price2 = 0.56 
const price3 = 0.90 
const price4 = 0.85 
const price5 = 0.34 

const fruits=String(prompt('Write down a Valide attribute'));
switch(fruits){
    case 'Apple':
        console.log(`This is a fruit named apple costs ${price1}$`);
        break;
    case 'Mango':
        console.log(`This is a fruit named mango costs ${price2}$`);
        break;
    case 'Banana':
        console.log(`This is a fruit named banana costs ${price3}$`);
        break;
    case 'Pineapple':
        console.log(`This is a fruit named pineapple costs ${price4}$`);
        break;
    case 'Strawberry':
        console.log(`This is a fruit named strawberry costs ${price5}$`);
        break;
    default:
        console.log('This is not a fruit');
        break;
}

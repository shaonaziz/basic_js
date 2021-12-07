//5 falsy values 0,null,'',undefine,NaN

const money = 0;
if (money) {        // here money variable is a falsy value thats why if condition does not execute
  console.log("Dont't wast that money");
} else {
  console.log("You need to earn money");
}

let dream;

if(dream){           // here dream variable is undefind thats why if condition doesn't execute
    console.log('Great Dream');
}else{
    console.log('You should have a dream!')
}
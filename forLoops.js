// Basic
for (let count = 1; count <= 33; count++) {
  console.log(`Say Alhamdulilah ${count}`);
}
//Loop with Array

const mySelf = [
  "Abdul Aziz",
  "Self learner",
  21,
  "Frontend Developer",
  ["Shaon", "Aziz", "Abdul"],
  56,
];
const testOne = [];

for (let i = 0; i < mySelf.length; i++) {
  console.log(mySelf[i], typeof mySelf[i]);
  testOne.push(mySelf[i]);
}

testOne.unshift("Assalamoalaikum");
console.log(testOne);
console.log(mySelf);

//Application of loops

const year = [1991, 1987, 1945, 1995, 1960];
const age = [];

for (let i = 0; i < year.length; i++) {
  age.push(2021 - year[i]);
}

console.log(age);

//continue and break
console.log("----Only Strings---");
for (let i = 0; i < mySelf.length; i++) {
  if (typeof mySelf[i] !== "string") continue; // whatever need and rest is skipped
  console.log(mySelf[i]);
}

console.log("---Breaks when its Number");
for (let i = 0; i < mySelf.length; i++) {
  if (typeof mySelf[i] === "number") break;
  console.log(mySelf[i]);
}

//Backward Array 4,3,...0

for (let i = mySelf.length; i >= 0; i--) {
  console.log(mySelf[i]);
}

//Loops in loops Nested loop
for (let chapter = 1; chapter < 5; chapter++) {
  console.log(`-----This is Chapter ${chapter}`);

  for (let lesson = 1; lesson < 7; lesson = lesson + 1) {
    console.log(`Chapter : ${chapter} Lesson ${lesson}`);
  }
}

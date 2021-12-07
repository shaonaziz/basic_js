const shaon = {
  firstName: "Abdul",
  lastName: "Aziz",
  birthyear: 1995,
  profession: "frontend developer",

  calcAge: function () {
    this.age = 2021 - this.birthyear;
    return this.age;
  },

  friends: ["siam", "tuhin", "arif"],
  driversLicense: true,

  verifyLicense: function () {
    if (this.driversLicense) {
      return "a";
    } else {
      return "no";
    }
  },
};


// console.log(`${shaon.firstName} has ${shaon.friends.length} friends and his best friend is ${shaon.friends[0]}`)
// console.log(shaon['profession']);
// console.log(`hello here is the info of shaon ${shaon['age']}`);
console.log(shaon.calcAge()); // as reference
console.log(shaon.age); // callback

console.log(`shaon is ${shaon.age}-year old developer and he has ${shaon.verifyLicense()} driver's license.
`);

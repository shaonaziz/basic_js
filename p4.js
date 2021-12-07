const mark = {
  fullname: "Mark Miller",
  mass: 99,
  height: 2.69,
  calcBmi: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

const john = {
  fullname: "John Smith",
  mass: 92,
  height: 1.95,
  calcBmi: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

mark.calcBmi();
john.calcBmi();

if(mark.bmi>john.bmi){
    console.log(`${mark.fullname}'s BMI ${mark.bmi} is higher than ${john.fullname}'s BMI ${john.bmi}`);
}
else
{
  console.log(`${john.fullname}'s BMI ${john.bmi} is higher than ${mark.fullname}'s BMI ${mark.bmi}`);
}
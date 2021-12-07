// const CalcAvg=(num1,num2,num3)=>{
//   return (num1 + num2 + num3)/3;
// }

// const CheckWinner=(avgDolphin,avgKoalas)=>{
//     avgDolphin = CalcAvg(85,54,41);
//     avgKoalas= CalcAvg(23,34,27);
//     if(avgDolphin >= avgKoalas*2){
//         console.log(`Dolphins win (${avgDolphin} vs ${avgKoalas})`);
//     }
//     else if(avgKoalas >= avgDolphin * 2){
//         console.log(`Koalas win (${avgKoalas} vs ${avgDolphin})`);
//     }
//     else{
//         console.log('No team win!');
//     }
// }

// // console.log(avgDolphins,avgKoalas);

// CheckWinner();

const CalcAvg = (scr1, scr2, scr3) => {
  return (scr1 + scr2 + scr3) / 3;
};

const scoreDolphins = CalcAvg(85, 54, 41);
const scoreKoalas = CalcAvg(23, 34, 27);

const checkWinner = (avgDolphin, avgKoalas) => {
  if (avgDolphin >= avgKoalas * 2) {
    console.log(`Dolphin win (${avgDolphin} vs. ${avgKoalas})`);
  } else if (avgKoalas >= avgDolphin * 2) {
    console.log(`Koalas win (${avgKoalas} vs. ${avgDolphin})`);
  }
  else{
      console.log('No team Win');
  }
};

checkWinner(1,1000);

const dolphins=111+108+89;
const koalas=111+108+89;
const avgDolphins=dolphins/3;
const avgKoalas=koalas/3;
console.log(`Dolphins score= ${avgDolphins} and Koalas score ${avgKoalas}`);

if(avgDolphins>avgKoalas && avgDolphins>=100){
    console.log('Dolphins Won the Trophy!!');
}
else if(avgKoalas > avgDolphins && avgKoalas >=100){
    console.log('Koalas Won the Trophy!!');
}
else if(avgDolphins===avgKoalas && avgDolphins>=100 && avgKoalas>=100){
    console.log('Its Draw and Both are winnes!!');
}
else{
    console.log('No team achieve the minimum Score :(');
}
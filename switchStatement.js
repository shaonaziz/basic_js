// Switch Statememt

const day = String(prompt('Write a day and see the Activity'));

switch(day){
    case 'monday':
        console.log('Read the Theory of Physics');
        break;
    case 'tuesday':
        console.log('Read the Theory of Chemistry');
        break;
    case 'wednesday':
        console.log('Making the notes of Developing');
        console.log('Practice the Web Technologies');
        break;
    case 'thursday':
        console.log('Bulid an Application');
        break;
    case 'friday':
        console.log('Praying For Jummah Salah');
        break;
    case 'saturday':
    case 'sunday':
        console.log('Enjoy the Weekend');
        break;
    default:
        console.log('Invalid day');
}
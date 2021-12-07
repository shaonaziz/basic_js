//Boolean Logic AND,OR,NOT

const clientIsRegistered = false;
const dataIsAssigned = true;
const requireAge = false;
const haveSkills=false;

// if (!clientIsRegistered && dataIsAssigned) {
//   console.log("Enable to go further");
// } else {
//   console.log("Clients to be procced back!");
// }

// if (requireAge) {
//     console.log("Accepted Age");
//   } else {
//     console.log("Client needs to have require Age clear");
//   }

if(requireAge || haveSkills ){
    console.log('He can go further!');
}else{
    console.log('Restricted');
}
  
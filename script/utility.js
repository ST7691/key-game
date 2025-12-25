function hideElementById(elementId){
  const  element = document.getElementById(elementId);
  element.classList.add('hidden');
}
function ShowElementById(elementId){
  const  element = document.getElementById(elementId);
  element.classList.remove('hidden');
}

// set background element
function setBackgroundElementById(elementId){
  const element = document.getElementById(elementId);
  element.classList.add('bg-orange-400');
}
// remove bg-color 
function removeBackgroundElementById(elementId){
  const element = document.getElementById(elementId);
  element.classList.remove('bg-orange-400');
}
// get alphabet set
// function getAlphabetsRandom(){
//     const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
//     const alphabets = alphabetString.split('');
//     console.log(alphabets);
//     // random
//     const randomNumber = Math.random()*25;
//     const index = Math.round( randomNumber);
//     const alphabet = alphabets[index];
//     console.log(index,alphabet);
//     return alphabet;
// }
// random function
function getAlphabetsRandom(){
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetString.split('');
    // console.log( 'alphabet name:',alphabets);

    const randomNumber = Math.random()*25;
    const index = Math.round(randomNumber);
    const alphabet = alphabets[index];
    // console.log(index,alphabet);
    return alphabet;
}
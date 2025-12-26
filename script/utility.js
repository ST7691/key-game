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

// text element set 
function getTextValueElementById(elementId){
 const element = document.getElementById(elementId);
 const elementValueText = element.innerText;
const value = parseInt(elementValueText);
return value;
}
// set value ,element
function setElementById(elementId,value){
  const element = document.getElementById(elementId);
  element.innerText = value;

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
function getElementTextById(elementId){
  const element = document.getElementById(elementId);
  const text = element.innerText;
  return text;
}


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
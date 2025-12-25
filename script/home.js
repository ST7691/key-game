// game start
// function Game(){
//     // home screen
//     const HomeSection = document.getElementById('home-screen');
//     // console.log('hello')
//     HomeSection.classList.add('hidden');
//     // play ground
//     const playGround = document.getElementById('play-ground');
//     playGround.classList.remove('hidden');
//     // continue game
    
// }
// key press captur
function handleKeyboardKeyUpEvent(event){
    const playerPressed = event.key;
  console.log('player press key : ',playerPressed);
//   show key expeted key press
const showAlphabetElement = document.getElementById('show-alphabet');
const showAlphabet = showAlphabetElement.innerText;
const CurrentAlphabet = showAlphabet.toLowerCase();
console.log(playerPressed,CurrentAlphabet)

if(playerPressed === CurrentAlphabet){
    console.log('you got a point ');
    // console.log('you have press ',CurrentAlphabet);

    // update score
    const CurrentScoreElement = document.getElementById('current-score');
    const CurrentScoreText = CurrentScoreElement.innerText;
    const CurrentScore = parseInt(CurrentScoreText);
    console.log(CurrentScore);
    // new score set
    const newScore = CurrentScore + 1;
    // score show
    CurrentScoreElement.innerText = newScore;
    // remove background
    removeBackgroundElementById(CurrentAlphabet);
    continueGame();
}
else{
    console.log('wrong you lost a point')
    // current life 
    const currentLifeElement = document.getElementById('current-life');
    const currentLifeText = currentLifeElement.innerText;
    const currentLife = parseInt(currentLifeText);
    console.log(currentLife);

    const newLife =currentLife - 1;
     currentLifeElement.innerText = newLife;

}
}


document.addEventListener('keyup',handleKeyboardKeyUpEvent);

// alphabet random function
function continueGame(){
const alphabet=  getAlphabetsRandom();
console.log(alphabet);
// set alphabet display show
const ShowAlphabet = document.getElementById('show-alphabet');
ShowAlphabet.innerText = alphabet;

// background color set 
 setBackgroundElementById(alphabet);
}


// home screen
function Game(){
      hideElementById('home-screen');
      ShowElementById('play-ground');
      continueGame();
}
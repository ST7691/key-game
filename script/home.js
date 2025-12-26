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

    const setScore = getTextValueElementById('set-score');
    // console.log(CurrentScore);
    const updateScore = setScore + 1;
    setElementById('set-score',updateScore);
   // remove background
     removeBackgroundElementById(CurrentAlphabet);
    continueGame();


// ------------------------------------------------
    // console.log('you have press ',CurrentAlphabet);
    // update score
    // const CurrentScoreElement = document.getElementById('current-score');
    // const CurrentScoreText = CurrentScoreElement.innerText;
    // const CurrentScore = parseInt(CurrentScoreText);
    // console.log(CurrentScore);
    // new score set
    
    // const newScore = CurrentScore + 1;
    // score show
    // CurrentScoreElement.innerText = newScore;
    // ---------------------------
 
 
}
else{
    console.log('wrong you lost a point')

   const currentLife =  getTextValueElementById('current-life');
   const updateLife = currentLife - 1;
   setElementById('current-life',updateLife);

//    man komle 0 hole gamee ses hobe
if(updateLife === 0){
    // console.log('game over');
    gameOver();
}

    // ----------------------------------
    // current life 
    // const currentLifeElement = document.getElementById('current-life');
    // const currentLifeText = currentLifeElement.innerText;
    // const currentLife = parseInt(currentLifeText);
    // console.log(currentLife);

    // const newLife =currentLife - 1;
    //  currentLifeElement.innerText = newLife;
    // -----------------------------------------------------

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
    // hide everything show play ground
      hideElementById('home-screen');
      hideElementById('final-score');
      ShowElementById('play-ground');
    //   reset score and life
     setElementById('current-life', 5);
     setElementById('set-score', 0);
      continueGame();
}

// game over function
function gameOver(){
     hideElementById('play-ground');
     ShowElementById('final-score');
    //  update final score
    const lastScore =  getTextValueElementById('set-score');
    console.log(lastScore);
    setElementById('last-score',lastScore);
    // clear alphabate background
    const showAlphabetElement =  getElementTextById('show-alphabet');
    // console.log(CurrentAlphabet);
    removeBackgroundElementById(showAlphabetElement);
}

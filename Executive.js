//this is what starts the game; it is defined in boardSetup.js
let BeginModal = document.getElementById("beginModal")
let BeginBtn = document.getElementById("beginBtn")
BeginModal.addEventListener('click', ()=>{
    BeginBtn.classList.add("hidden")
    renderFirstBoard();//The game boards will not start until the "Begin Game" buttin is pressed
})

// renderSecondBoard();

let playerNow = 1;


const getOrientation = (orientation) => {
    let radios = document.getElementsByName('orientation').value = orientation
    direction = radios;
}
const updateShipText = () => {
  let inner = document.getElementsByClassName('log-wrapper')[0] 
  if(numOfShips>0)
  {
    inner.innerHTML = `Player ${playerNow}, Please place your 1x${numOfShips} ship`
  }      
  
}
updateShipText();




//The calls to this function are made from placingShips.js.
//It is used for rendering the second board after the first board is done placing ships.
//If both boards are done, this is what shows up the "Start Game" button.
const RenderFirstOrSecondBoard = () => {
  //this function is called after all the ships in the first board is placed
  if (firstBoardDone == true && secondBoardDone == false) {
    //if ships are placed in first board but not the second board
    numOfShips = originalNum
    //Hide First Board
    gameBoardContainer1.classList.add("invisible");
    gameBoardContainer2.classList.remove("hidden");
    //Render second board
    renderSecondBoard();
    playerNow = 2;
    updateShipText();
  } else if (firstBoardDone == true && secondBoardDone == true) {
    //if both boards are done placing ships then render the "Start Game" button by removing the class of hidden
    startGameDiv.classList.remove("hidden");
    let inner = document.getElementsByClassName('log-wrapper')[0] 
    inner.innerHTML = "Press 'Start Game' Below to start the game !!!";
  }
};

/* The lines below aren't to be mistaken with Starting the Game, 
they come into play after both players have placed ships 
and they click on "Start game" */

// Grabbing The Start Game Box That pops up after both players place ships
let startGameDiv = document.querySelector("#prompter");
// Grabbing the button inside that box
let startGameButton = document.getElementById("clicker");

//After the user clicks on the "Start Game" button it fires a function called startGame();
startGameButton.addEventListener("click", () => {
  startGame();
});

//Before start game is clicked, the first board is hidden cause second player place ships at last
const startGame = () => {
  //After start game is clicked,the first board is now visible cause we remove the class called "hidden" i.e PlayerOne can see his board
  gameBoardContainer1.classList.remove("invisible");
  gameBoardContainer2.classList.add("hidden");

  //We now render the back of second board to hide the second board i.e Player One can't see opponents board
  renderBackOfSecondBoard();

  //we don't need the "Start Game" div anymore because we already now started the game so let's hide it.
  startGameDiv.classList.add("hidden");

  let inner = document.getElementsByClassName('log-wrapper')[0] 
  inner.innerHTML = "Player 1's turn, FIRE !!!"

  //now we should instead make the "Switch Team" visible by removing the "hidden class from it"
};

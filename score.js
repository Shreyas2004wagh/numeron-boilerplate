// Iteration 5: Store the player score and display it on the game over screen

const scoreBox=document.getElementById("score-board");
let passcode=localStorage.getItem("squad56");

scoreBox.innerHTML=passcode;

const playAgainButton=document.getElementById("play-again-button");
playAgainButton.onclick=()=>{
    location.href="./game.html"
}
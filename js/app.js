let scores = [0, 0];
let roundScore = 0;
let activePlayer = 0;
// Select i element of the div with class dice
let die = document.querySelector(".dice > i");
document.querySelector('#name-0').style.borderBottom = "thick solid red";
let dieRoll = 0;

//die.classList.add('fa-dice-one');
//console.log(die);

//Display game rules when rules button is clicked
document.querySelector(".btn-rules").addEventListener("click", () => {
  alert(
    "Rules\n\nChoose a player to go first. That player throws a die and scores as many points as the total shown on the die providing the die doesn’t roll a 1. The player may continue rolling and accumulating points (but risk rolling a 1) or end his turn.If the player rolls a 1 his turn is over, he loses all points he accumulated that turn, and he passes the die to the next player.Play passes from player to player until a winner is determined.\n\nHow do you win? The first player to accumulate 100 or more points wins the game."
  );
});

document.querySelector(".btn-roll").addEventListener("click", () => {
  dieRoll = Math.floor(Math.random() * 6 + 1);
  //Empty classlist
  die.classList.remove(...die.classList);
  // Add font awesome classes
  die.classList.add("fas");
  die.classList.add("fa-4x");
  // Show corresponding die
  switch (dieRoll) {
    case 1:
      die.classList.add("fa-dice-one");
      break;
    case 2:
      die.classList.add("fa-dice-two");
      break;
    case 3:
      die.classList.add("fa-dice-three");
      break;
    case 4:
      die.classList.add("fa-dice-four");
      break;
    case 5:
      die.classList.add("fa-dice-five");
      break;
    case 6:
      die.classList.add("fa-dice-six");
      break;
  }

  if (dieRoll > 1) {
    roundScore += dieRoll;
  } else {
    changePlayer();
  }
  document.querySelector("#current-" + activePlayer).innerHTML = roundScore;
});

document.querySelector(".btn-hold").addEventListener("click", () => {
  scores[activePlayer] += roundScore;
  document.querySelector("#score-" + activePlayer).innerHTML = scores[activePlayer];
  checkScore();
});

function changePlayer() {
  roundScore = 0;
  document.querySelector("#current-" + activePlayer).innerHTML = roundScore;
  (activePlayer == 0) ? activePlayer++ : activePlayer--;  
  if(activePlayer == 0){
    document.querySelector('#name-0').style.borderBottom = "thick solid red";
    document.querySelector('#name-1').style.borderBottom = "none";
  } else {
    document.querySelector('#name-1').style.borderBottom = "thick solid red";
    document.querySelector('#name-0').style.borderBottom = "none";
  }
}

function checkScore(){
  if(scores[activePlayer] >= 100){
    document.querySelector("#score-" + activePlayer).innerHTML = scores[activePlayer];
    alert(`Player ${activePlayer + 1 } wins!!!`);
    resetGame();
  }
  else{
    changePlayer();
  }
}

document.querySelector(".btn-new").addEventListener("click", resetGame);

function resetGame(){
  scores = [0, 0];
  roundScore = 0;
  activePlayer = 0;
  dieRoll = 0;
  document.querySelector("#current-0").innerHTML = roundScore;
  document.querySelector("#current-1").innerHTML = roundScore;
  document.querySelector("#score-0").innerHTML = roundScore;
  document.querySelector("#score-1").innerHTML = roundScore;
  die.classList.remove(...die.classList);
  document.querySelector('#name-0').style.borderBottom = "thick solid red";
  document.querySelector('#name-1').style.borderBottom = "none";
}
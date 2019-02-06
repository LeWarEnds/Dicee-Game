// // Random Image Left
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage = "images/dice" + randomNumber1 + ".png";
var randomDiceSource = document.querySelector(".img1").setAttribute("src", randomDiceImage);
var diceValue1 = randomNumber1;

// // Random Image Right
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage2 = "images/dice" + randomNumber2 + ".png";
var randomDiceSource2 = document.querySelector(".img2").setAttribute("src", randomDiceImage2);
var diceValue2 = randomNumber2;

document.quertSelector(".button").addEventListener("click", diceRoll);

// Logic
function diceRoll() {
  if (diceValue1 < diceValue2) {
    document.querySelector("h1").innerHTML = "Right User Won!";
  } else if (diceValue1 > diceValue2) {
    document.querySelector("h1").innerHTML = "Left User Won!";
  } else if (diceValue === diceValue2) {
    document.querySelector("h1").innerHTML = "Draw";
  }
}

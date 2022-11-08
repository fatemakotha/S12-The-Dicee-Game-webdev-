//CODE FOR DICE 1:
var randomNumber1 = Math.floor(Math.random() * 6) + 1; //prints a number between 1 - 6
var randomDiceImage = "dice" + randomNumber1 + ".png"
//Creating a variable for the source of image
var randomImageSource = "images/" + randomDiceImage; //gives something like "images/dice1.png" or "images/dice5.png"
//We select all elements with the image tag
var image1 = document.querySelectorAll("img")[0];
//setAttribute takes the attribute we want to change i.e. src, and what we want to change it to i.e. randomImageSource **
image1.setAttribute("src", randomImageSource);


//CODE FOR DICE 2:
var randomNumber2 = Math.floor(Math.random() * 6) + 1; //prints a number between 1 - 6
var randomDiceImage = "dice" + randomNumber2 + ".png"
//Creating a variable for the source of image
var randomImageSource = "images/" + randomDiceImage; //gives something like "images/dice1.png" or "images/dice5.png"
//We select all elements with the image tag
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImageSource);


//Change title depending on number of dice rolled:
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 1 wins!"
} else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Players 2 wins!!"
} else {
  document.querySelector("h1").innerHTML = "Its a DRAW !!!"
}

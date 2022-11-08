var randomNumber1 = Math.floor(Math.random() * 6) + 1; //prints a number between 1 - 6


var randomDiceImage = "dice" + randomNumber1 + ".png"

//Creating a variable for the source of image
var randomImageSource = "images/" + randomDiceImage; //gives something like "images/dice1.png" or "images/dice5.png"


//We select all elements with the image tag
document.querySelectorAll("img")

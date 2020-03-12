var leftDice = document.querySelector(".img1").setAttribute("src",grabNewSrcImg(randomNumber())); //replacing left src image with new src image.
console.log(leftDice);
var rightDice = document.querySelector(".img2").setAttribute("src",grabNewSrcImg(randomNumber())); //replacing right src image with new src image.
console.log(rightDice);

if(leftDice === rightDice){
    document.querySelector("h1").textContent = "Draw!";
} else if(leftDice > rightDice){
    document.querySelector("h1").textContent = "Player 1 Wins!";
} else if(leftDice < rightDice){
    document.querySelector("h1").textContent = "Player 2 Wins!"
}

function grabNewSrcImg(grab){
  var imageArray = ["images/dice1.png","images/dice2.png","images/dice3.png","images/dice4.png","images/dice5.png","images/dice6.png"]
  var thatSource = imageArray[grab];
  return thatSource; //returns the new src image.
}

function randomNumber(){
    var number = Math.random();
    number = Math.floor(number * 6);
    return number; //returns a random number between 0 and 5.
}

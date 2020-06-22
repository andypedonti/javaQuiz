/*GIVEN I am taking a code quiz
WHEN I click the start button
THEN a timer starts and I am presented with a question
WHEN I answer a question
THEN I am presented with another question
WHEN I answer a question incorrectly
THEN time is subtracted from the clock
WHEN all questions are answered or the timer reaches 0
THEN the game is over
WHEN the game is over
THEN I can save my initials and score*/

//start button ok

//need timer

/*$("#start").click(function () {
  console.log(cupcake);
});*/

// timer starts starts wh

//anaonymous functions
//higher order functions
//function call vs function declaration
let secondsLeft = 10;
let timeEl = document.getElementById("time");
let mainEl = document.getElementById("main");

$("#start").click(function setTime() {
  console.log(secondsLeft);

  let timerInterval = setInterval(function () {
    secondsLeft--;
    timeEl.textContent = secondsLeft;
  }, 1000);
});

//setTime();

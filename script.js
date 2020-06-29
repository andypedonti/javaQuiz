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

//anaonymous functions
//higher order functions
//function call vs function declaration

//need to make buttons clickable
//local storage

let body = document.body;
let secondsLeft = 10;
let timeEl = document.getElementById("time");
let mainEl = document.getElementById("main");
let h1El = document.getElementById("h1");

let liEl1 = document.createElement("li1");

let highScore = secondsLeft;

$("#start").click(function setTime() {
  let timerInterval = setInterval(function () {
    timeEl.textContent = "time left " + secondsLeft + " sec";

    secondsLeft--;

    if (secondsLeft === 0) {
      clearInterval(timerInterval);
      sendMessage();
    }
  }, 1000);
});

$("#start").click(function firstQuestions() {
  let listEl = document.createElement("h1");
  listEl.textContent =
    "What are the 3 main orders of insects of interest to trout anglers?";
  body.appendChild(listEl);
  let button1 = document.createElement("button");
  button1.id = "button1";
  button1.textContent = "Mayflies, Caddisflies, Craneflies";
  body.appendChild(button1);
  $("#button1").click(function () {
    secondsLeft = secondsLeft - 3;
  });
  let button2 = document.createElement("button");
  button2.id = "button2";
  button2.textContent = "Mayflies, Stoneflies, Wasps";
  body.appendChild(button2);
  $("#button2").click(function () {
    secondsLeft = secondsLeft - 3;
  });
  let button3 = document.createElement("button");
  button3.id = "button3";
  button3.textContent = "Mayflies, Caddisflies, Stoneflies";
  body.appendChild(button3);
  $("#button3").click(function () {
    secondsLeft = secondsLeft + 3;
    highScore = highScore + 3;
  });
  $("#button1, #button2, #button3").click(function secondQuestions() {
    let listEl = document.createElement("h1");
    listEl.textContent =
      "Which of the following trout species in native to the Eastern US";
    body.appendChild(listEl);
    let button4 = document.createElement("button");
    button4.id = "button4";
    button4.textContent = "Brown Trout";
    body.appendChild(button4);
    $("#button4").click(function () {
      secondsLeft = secondsLeft - 3;
    });
    let button5 = document.createElement("button");
    button5.id = "button5";
    button5.textContent = "Brook Trout";
    body.appendChild(button5);
    $("#button5").click(function () {
      secondsLeft = secondsLeft + 3;
      highScore = highScore + 3;
    });
    let button6 = document.createElement("button");
    button6.id = "button6";
    button6.textContent = "Rainbow Trout";
    body.appendChild(button6);
    $("#button6").click(function () {
      secondsLeft = secondsLeft - 3;
    });

    $("#button4, #button5, #button6").click(function thirdQuestions() {
      let listEl = document.createElement("h1");
      listEl.textContent = "How many hearts do trout have?";
      body.appendChild(listEl);
      let button7 = document.createElement("button");
      button7.id = "button7";
      button7.textContent = "1";
      body.appendChild(button7);
      $("#button7").click(function () {
        secondsLeft = secondsLeft - 3;
        console.log(highScore);
      });
      let button8 = document.createElement("button");
      button8.id = "button8";
      button8.textContent = "3";
      body.appendChild(button8);
      $("#button8").click(function () {
        secondsLeft = secondsLeft - 3;
        console.log(highScore);
      });
      let button9 = document.createElement("button");
      button9.id = "button9";
      button9.textContent = "2";
      body.appendChild(button9);
      $("#button9").click(function () {
        secondsLeft = secondsLeft + 3;
        highScore = highScore + 3;
        console.log(highScore);
      });
    });
  });
});

function sendMessage() {
  mainEl.textContent = "game over";
}

//sendMessage();

//setTime();

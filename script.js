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

//local storage

let body = document.body;
let secondsLeft = 10;
let time = secondsLeft;
let score = 0;
let timeEl = document.getElementById("time");
let mainEl = document.getElementById("main");
let h1El = document.getElementById("h1");
let h2El = document.getElementById("h2");
let nameEl = document.getElementById("name");
let yourScoreEl = document.getElementById("yourScore");

let initialsBox = document.createElement("input");

let liEl1 = document.createElement("li1");

let timerInterval = 0;
function setTime() {
  timerInterval = setInterval(function () {
    timeEl.textContent = "time left " + secondsLeft + " sec";

    secondsLeft--;

    if (secondsLeft === 0) {
      clearInterval(timerInterval);
      sendMessage();

      //logScore();
    }
  }, 1000);
}
//h2El.textContent = "Your Score is " + score;
const inputInitials = document.getElementById("initials");
const inputScore = document.getElementById("score");
const saveBtn = document.getElementById("saveBtn");
const lsOutput = document.getElementById("lsOutput");
init();
$("#start").click(function firstQuestions() {
  setTime();
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
    score = score + 3;
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
      score = score + 3;
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
        stopTimer();
      });
      let button8 = document.createElement("button");
      button8.id = "button8";
      button8.textContent = "3";
      body.appendChild(button8);
      $("#button8").click(function () {
        secondsLeft = secondsLeft - 3;
        console.log(highScore);
        stopTimer();
      });
      let button9 = document.createElement("button");
      button9.id = "button9";
      button9.textContent = "2";
      body.appendChild(button9);
      $("#button9").click(function () {
        score = score + 3;

        stopTimer();

        logScore();
        postScore();
      });
    });
  });
});

let scorE = score + secondsLeft;

function postScore() {
  let scorE = secondsLeft + score;
  console.log(scorE);
  console.log(secondsLeft);
}

function stopTimer() {
  clearInterval(timerInterval);
}
function sendMessage() {
  mainEl.textContent = "game over";
}
function init() {
  let storage = JSON.parse(getStor()) || [];
  for (let i = 0; i < storage.length; i++) {
    let postScore = document.getElementById("postScore");
    let div = document.createTextNode(
      storage[i].initials + " " + storage[i].numbers
    );
    postScore.appendChild(div);
  }
}

function logScore() {
  let para = document.createElement("p");
  let node = document.createTextNode("Enter Your intitials and  save score");
  para.appendChild(node);
  let element = document.getElementById("score");
  element.appendChild(node);

  let initials = document.createElement("p");
  let letters = document.createTextNode("Your score is: ");
  initials.appendChild(letters);
  let spot = document.getElementById("letters");
  spot.appendChild(letters);

  let nums = document.createElement("h2");
  let numbers = document.createTextNode(score + secondsLeft);
  nums.appendChild(numbers);
  let z = document.getElementById("numbers");
  z.appendChild(numbers);

  let saveBtn = document.createElement("BUTTON");
  let butt = document.createTextNode("save");
  saveBtn.appendChild(butt);
  let save = document.getElementById("log");
  save.appendChild(butt);

  let x = document.createElement("INPUT");
  x.setAttribute("type", "text");
  x.class = "textArea";
  x.setAttribute("value", "");
  let init = document.getElementById("writeScore");
  init.appendChild(x);
}

// $("#writeScore").each(function () {
//   let key = $(this).attr("id");

//   //let inputValue = localStorage.getItem(key);
//   $(this).val(key);
// });
$("#log").on(
  "click",
  function () {
    let storage = JSON.parse(getStor()) || [];
    let initials = $("#writeScore > input").val();
    let numbers = $("#numbers").text();
    let objectStorage = {
      initials,
      numbers,
    };

    storage.push(objectStorage);
    localStorage.setItem("codequiz", JSON.stringify(storage));
    let postScore = document.getElementById("postScore");
    let div = document.createTextNode(initials + " " + numbers);
    postScore.appendChild(div);
  }

  //   let inputValue = $(this).parent().parent().find("input").val();
  //   let key = $(this).parent().parent().find("input").attr("id");

  //   localStorage.setItem(key, inputValue);
  //   document.getElementById("postScore").innerHTML = localStorage.getItem(
  //     "inputValue"
);
function getStor() {
  return localStorage.getItem("codequiz");
}

let secondsLeft = 10;
let body = document.body;
let timeEl = document.getElementById("time");

function setTime() {
  let timerInterval = setInterval(function () {
    secondsLeft--;
    timeEl.textContent = secondsLeft + " seconds left till colorsplosion.";
  }, 1000);
}
function stopTime() {
  let timerInterval = clearInterval(function () {
    secondsLeft;
    timeEl.textContent = secondsLeft + " seconds left till colorsplosion.";
  }, 1000);
}

$("#start").click(function () {
  let button1 = document.createElement("button");
  button1.id = "button1";
  button1.textContent = "stop timer";
  body.appendChild(button1);
  setTime();
});
$("#button1").click(function () {
  stopTime();
});

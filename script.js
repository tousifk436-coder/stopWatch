let hours = 0;
let minute = 0;
let second = 0;
let displayClock = document.querySelector(".clock");

const dateElm = document.querySelector('.date')
let date = new Date()
dateElm.innerHTML = date.toDateString()

setInterval(()=>{
  let date = new Date()
  dateElm.innerHTML = date.toDateString()
},1000)

displayClock.innerHTML = `${hours.toString().padStart(2, "0")}:${minute
  .toString()
  .padStart(2, "0")}:${second.toString().padStart(2, "0")}`;

function stopWatch() {
  second++;

  if (second >= 60) {
    minute++;
    second = 0;
  }

  if (minute >= 60) {
    hours++;
    minute = 0;
  }

  displayClock.innerHTML = `${hours.toString().padStart(2, "0")}:${minute
    .toString()
    .padStart(2, "0")}:${second.toString().padStart(2, "0")}`;
}

let ref;

let startBtn = document.querySelector(".start");
let stopBtn = document.querySelector(".stop");
let resetBtn = document.querySelector(".reset");

stopBtn.disabled = true;
resetBtn.disabled = true;

startBtn.addEventListener("click", () => {
  ref = setInterval(stopWatch, 1000);

  startBtn.disabled = true;
  stopBtn.disabled = false;
  resetBtn.disabled = false;
});

stopBtn.addEventListener("click", () => {
  clearInterval(ref);
  startBtn.disabled = false;
  stopBtn.disabled = true;
  resetBtn.disabled = false;
});

resetBtn.addEventListener("click", () => {
  clearInterval(ref);
  second = 0;
  minute = 0;
  hours = 0;
  displayClock.innerHTML = `${hours.toString().padStart(2, "0")}:${minute
    .toString()
    .padStart(2, "0")}:${second.toString().padStart(2, "0")}`;
  startBtn.disabled = false;
  stopBtn.disabled = true;
  resetBtn.disabled = true;
});
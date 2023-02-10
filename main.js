
let [millSeconds, seconds, minutes, hours] = [0, 0, 0, 0];
let interval;

document.querySelector("#start").addEventListener("click", runWatch);
document.querySelector("#pause").addEventListener("click", pause);
document.querySelector("#reset").addEventListener("click", reset);

function startTiming() {
  millSeconds++;
  if (millSeconds == 1000) {
    millSeconds = 0;
    seconds++;
    if (seconds == 60) {
      seconds = 0;
      minutes++;
      if (minutes == 60) {
        minutes = 0;
        hours++;
      }
    }
  }
  h = hours < 10 ? `0${hours}` : hours;
  m = minutes < 10 ? `0${minutes}` : minutes;
  s = seconds < 10 ? `0${seconds}` : seconds;
  ms =
    millSeconds < 10
      ? `00${millSeconds}`
      : millSeconds < 100
      ? `0${millSeconds}`
      : millSeconds;

  document.querySelector(".stop_watch").innerHTML = `
              <span>${h}</span>:<span>${m}</span>:<span>${s}</span>:<span>${ms}</span>
              `;
}

function runWatch() {
  interval = setInterval(startTiming, 1);
}

function pause() {
  clearInterval(interval);
}

function reset() {
  clearInterval(interval);
  document.querySelector(".stop_watch").innerHTML = `
        <span>00</span>:<span>00</span>:<span>00</span>:<span>000</span>
        `;
}

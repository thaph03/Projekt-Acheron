//Audio controls

const timer = document.getElementById("timer");
const buttonA = document.getElementById("playButton");

const setUp = () => {
  buttonA.addEventListener("click", function () {
    const audio = document.getElementById("myAudio");
    audio.play();
    buttonA.style.display = "none";
    timer.style.display = "block";
    startTimer();
  });
};

//Timer controls

const startingRealMinutes = 3.6;
const iFrameContainer = document.getElementById("main-video");
let time = startingRealMinutes * 60;
const countdownTimer = document.getElementById("timer");
const countdownContainer = document.getElementById("timer-wraper");

const countDown = () => {
  const minutes = Math.floor(time / 60);
  let seconds = time % 60;
  countdownTimer.innerHTML = `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  time--;

  if (seconds <= 10) {
    if (seconds % 2 == 1) {
      countdownTimer.style.color = "#da4c50";
    } else if (seconds % 2 == 0) {
      countdownTimer.style.color = "#f1ddd9";
    }
  } else {
    countdownTimer.style.color = "#362aef";
  }

  if (minutes == 0 && seconds == 0) {
    iFrameContainer.style.opacity = "1";
    countdownContainer.style.display = "none";
  }
};
const startTimer = () => {
  setInterval(countDown, 1000);
};

setUp();
//click next
const clickNext = document.querySelector(".next-logo");
const meme = document.getElementById("meme");

const goToRitual = clickNext.addEventListener("click", (e) => {
  iFrameContainer.style.opacity = "0";
  meme.style.opacity = "1";
});

goToRitual();

function goToScreen(screenNumber) {
  const screens = document.querySelectorAll(".screen");

  screens.forEach((screen) => {
    screen.classList.remove("active");
  });

  const nextScreen = document.getElementById(`screen-${screenNumber}`);
  nextScreen.classList.add("active");

  if (screenNumber === 2) {
    resetLamarButton();
  }
}

function chooseFhaid() {
  const correctMessage = document.getElementById("correct-message");
  const continueButton = document.getElementById("continue-btn");

  correctMessage.style.display = "block";
  continueButton.style.display = "inline-block";
}

const lamarButton = document.getElementById("lamar-btn");

function resetLamarButton() {
  lamarButton.style.position = "relative";
  lamarButton.style.left = "auto";
  lamarButton.style.top = "auto";
  lamarButton.style.transform = "translate(0, 0)";
  lamarButton.style.zIndex = "1";

  const correctMessage = document.getElementById("correct-message");
  const continueButton = document.getElementById("continue-btn");

  correctMessage.style.display = "none";
  continueButton.style.display = "none";
}

function moveLamarButton() {
  const randomX = Math.floor(Math.random() * 121) - 60;
  const randomY = Math.floor(Math.random() * 81) - 40;

  lamarButton.style.position = "relative";
  lamarButton.style.left = "0";
  lamarButton.style.top = "0";
  lamarButton.style.transform = `translate(${randomX}px, ${randomY}px)`;
  lamarButton.style.zIndex = "10";
}

lamarButton.addEventListener("touchstart", function (event) {
  event.preventDefault();
  moveLamarButton();
});

lamarButton.addEventListener("click", function (event) {
  event.preventDefault();
  moveLamarButton();
});

const reasons = [
  "I miss hugging you.",
  "I miss holding your hand.",
  "I miss seeing you in real life.",
  "I miss being next to you.",
  "I miss looking at you without a screen between us.",
  "I miss sitting beside you.",
  "I miss hearing Hiiiiiii.",
  "I miss your hugs more than I can explain.",
  "I miss the idea of walking around my Apt.",
  "I miss being close to you physically.",
  "I miss having you here with me.",
  "I miss the little moments we would have in person.",
  "I miss being able to see you whenever I want.",
  "I miss the version of us that gets to be in the same place.",
  "I miss the the sound of you placing your keys on my desk.",
  "I miss the thought of you leaning on me.",
  "I miss seeing your smile in person.",
  "I miss being able to look at you properly.",
  "I miss sharing the same space as you.",
  "I miss the idea of stealing little moments with you.",
  "I miss the idea of sitting quietly with you.",
  "I miss being able to hug you whenever I want.",
  "I miss the idea of walking into a room and seeing you there.",
  "I miss having you close enough to touch.",
  "I miss the thought of holding you.",
  "I miss being able to kiss your forehead.",
  "I miss the idea of pulling you into a hug.",
  "I miss the thought of resting my hand in yours.",
  "I miss the kind of closeness FaceTime cannot give.",
  "I miss seeing you without pixels.",
  "I miss your real-life presence.",
  "I miss having you near me.",
  "I miss the thought of our shoulders touching.",
  "I miss sitting with you and doing absolutely nothing.",
  "I miss sharing quiet moments with you in person.",
  "I miss the thought of laughing with you side by side.",
  "I miss the kind of comfort that only being together gives.",
  "I miss the idea of going out with you and not wanting the day to end.",
  "I miss being able to hold your hand for no reason.",
  "I miss the thought of you being here instead of there.",
  "I miss the version of life where you are physically with me.",
  "I miss seeing how pretty you are in real life.",
  "I miss having you close enough for a proper hug.",
  "I miss the thought of waiting for you and then finally seeing you.",
  "I miss how nice it would feel to just be with you.",
  "I miss the idea of spending a normal day together.",
  "I miss the thought of you talking about your day infront of me.",
  "I miss the idea of being able to protect you with a hug.",
  "I miss the day I get to see you again.",
  "I miss you in all the ways a screen cannot fix."
];

let usedReasons = [];

function generateReason() {
  const reasonBox = document.getElementById("reason-box");

  if (usedReasons.length === reasons.length) {
    usedReasons = [];
  }

  let randomIndex;

  do {
    randomIndex = Math.floor(Math.random() * reasons.length);
  } while (usedReasons.includes(randomIndex));

  usedReasons.push(randomIndex);

  reasonBox.textContent = reasons[randomIndex];

  reasonBox.classList.remove("reason-pop");
  void reasonBox.offsetWidth;
  reasonBox.classList.add("reason-pop");
}

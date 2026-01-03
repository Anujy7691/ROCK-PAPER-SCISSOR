let userScore = 0;
let bootScore = 0;

const userChoices = document.querySelectorAll(".choice");
const msg = document.querySelector("#game-result");
const rstBtn = document.querySelector("#reset");
let updatedUserScore = document.querySelector("#user-score");
let updatedBootScore = document.querySelector("#boot-score");

//draw game logic
const drawGame = () => {
  msg.style.backgroundColor = "black";
  msg.style.color = "white";
  msg.innerText = "Game was draw, Play Again!";
};

//boot option/choice selection logic
const genbootGame = () => {
  let options = ["Rock", "Paper", "Scissors"];
  let optionsIdx = Math.floor(Math.random() * 3);
  let bootChoice = options[optionsIdx];
  return bootChoice;
};


//main game logic
const playGame = (userChoice) => {
  let bootChoice = genbootGame();
  let userWin;
  if (userChoice === bootChoice) {
    drawGame();
    return;
  } else {
    if (userChoice === "Rock") {
      userWin = bootChoice === "Scissors";
    } else if (userChoice === "Scissors") {
      userWin = bootChoice === "Paper";
    } else {
      userWin = bootChoice === "Rock";
    }
  }

  if (userWin) {
    userScore++;
    updatedUserScore.innerText = userScore;
    msg.style.backgroundColor = "green";
    msg.style.color = "white";
    msg.innerText = `You Win ☺️😊🎉,  ${userChoice} beats ${bootChoice}`;
  } else {
    bootScore++;
    updatedBootScore.innerText = bootScore;
    msg.style.backgroundColor = "red";
    msg.style.color = "white";
    msg.innerText = `You lose 😞😔,  ${userChoice} beats ${bootChoice}`;
  }
};

//users choice selection logic
userChoices.forEach((choice) => {
  choice.addEventListener("click", () => {
    let userChoice = choice.id;
    playGame(userChoice);
  });
});

rstBtn.addEventListener("click", () => {
  userScore = 0;
  bootScore = 0;

  updatedBootScore.innerText = 0;
  updatedUserScore.innerText = 0;

  msg.innerText = "Start Your Game";
  msg.style.backgroundColor = "color-mix(in srgb, red 50%, blue 50%)";
  msg.style.color = "white";
});

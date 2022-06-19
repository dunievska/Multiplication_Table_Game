let firstNumber = drawNumber1to10();
let secondNumber = drawNumber1to10();
let score = 20;
let row = 0;
let result = calcMultiplication(firstNumber, secondNumber);

function calcMultiplication(a, b) {
  return a * b;
}

function displayMultiplication(a, b) {
  document.querySelector(".numbers").textContent = `${a} x ${b}`;
}

function displayMessage(message) {
  document.querySelector(".message").textContent = message;
}

function drawNumber1to10() {
  const number = Math.trunc(Math.random() * 10) + 1;
  return number;
}

function displayScore(score) {
  document.querySelector(".score").textContent = score;
}

function startGame() {
  // first game
  if (document.querySelector(".play").textContent === "Start!") {
    displayMultiplication(firstNumber, secondNumber);
    document.querySelector(".play").textContent = "Nowe działanie";
    document.querySelector("main").style.display = "flex";
    displayScore(score);
  }
  // next game
  else if (document.querySelector(".play").textContent === "Nowe działanie") {
    firstNumber = drawNumber1to10();
    secondNumber = drawNumber1to10();
    result = calcMultiplication(firstNumber, secondNumber);
    displayMultiplication(firstNumber, secondNumber);
    document.querySelector(".answer").value = "";
  }
}

function checkAnswer() {
  const answer = document.querySelector(".answer").value;
  // no answer
  if (!answer) {
    displayMessage("Nie wpisałeś odpowiedzi");
  }
  // answer is wrong
  else if (Number(answer) !== result) {
    if (score > 1) {
      displayMessage(
        Number(answer) > result
          ? `${firstNumber} x ${secondNumber} to mniej niż ${answer}. Policz jeszcze raz!`
          : `${firstNumber} x ${secondNumber} to więcej niż ${answer}. Policz jeszcze raz!`
      );
      score--;
      displayScore(score);
      row = 0;
      document.querySelector(".row").textContent = row;
    } else {
      displayMessage(`Straciłeś wszystkie punkty! Zagraj jeszcze raz!`);
      score = 0;
      displayScore(score);
    }
  }
  // answer is right
  else if (Number(answer) === result) {
    displayMessage(`Doskonale! ${firstNumber} x ${secondNumber} to ${result}.`);
    score++;
    displayScore(score);
    row++;
    document.querySelector(".row").textContent = row;
  }
}

document.querySelector(".play").addEventListener("click", startGame);
document.querySelector(".check").addEventListener("click", checkAnswer);

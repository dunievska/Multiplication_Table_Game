let firstNumber = Math.trunc(Math.random() * 10) + 1;
let secondNumber = Math.trunc(Math.random() * 10) + 1;
let score = 20;
let row = 0;
let result = calcMultiplication(firstNumber, secondNumber);

function startGame() {
  // first game
  if (document.querySelector(".play").textContent === "Start!") {
    document.querySelector(
      ".numbers"
    ).textContent = `${firstNumber} x ${secondNumber}`;
    document.querySelector(".play").textContent = "Nowe działanie";
    document.querySelector("main").style.display = "flex";
    document.querySelector(".score").textContent = score;
  }
  // next game
  else if (document.querySelector(".play").textContent === "Nowe działanie") {
    firstNumber = Math.trunc(Math.random() * 10) + 1;
    secondNumber = Math.trunc(Math.random() * 10) + 1;
    result = calcMultiplication(firstNumber, secondNumber);
    document.querySelector(
      ".numbers"
    ).textContent = `${firstNumber} x ${secondNumber}`;
    document.querySelector(".answer").value = "";
  }
}

function calcMultiplication(a, b) {
  return a * b;
}

function checkAnswer() {
  const answer = document.querySelector(".answer").value;
  // no answer
  if (!answer) {
    document.querySelector(".message").textContent = "Nie wpisałeś odpowiedzi";
  }
  // answer is to high
  else if (Number(answer) > result) {
    if (score > 1) {
      document.querySelector(
        ".message"
      ).textContent = `${firstNumber} x ${secondNumber} to mniej niż ${answer}. Policz jeszcze raz!`;
      score--;
      document.querySelector(".score").textContent = score;
      row = 0;
      document.querySelector(".row").textContent = row;
    } else {
      document.querySelector(
        ".message"
      ).textContent = `Straciłeś wszystkie punkty! Zagraj jeszcze raz!`;
      document.querySelector(".score").textContent = 0;
    }
  }
  //answer is to low
  else if (Number(answer) < result) {
    if (score > 1) {
      document.querySelector(
        ".message"
      ).textContent = `${firstNumber} x ${secondNumber} to więcej niż ${answer}. Policz jeszcze raz!`;
      score--;
      document.querySelector(".score").textContent = score;
      row = 0;
      document.querySelector(".row").textContent = row;
    } else {
      document.querySelector(
        ".message"
      ).textContent = `Straciłeś wszystkie punkty! Zagraj jeszcze raz!`;
      document.querySelector(".score").textContent = 0;
    }
  }
  // player win
  else if (Number(answer) === result) {
    document.querySelector(
      ".message"
    ).textContent = `Doskonale! ${firstNumber} x ${secondNumber} to ${result}.`;
    score++;
    document.querySelector(".score").textContent = score;
    row++;
    document.querySelector(".row").textContent = row;
  }
}

document.querySelector(".play").addEventListener("click", startGame);
document.querySelector(".check").addEventListener("click", checkAnswer);

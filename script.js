let firstNumber = Math.trunc(Math.random() * 10) + 1;
let secondNumber = Math.trunc(Math.random() * 10) + 1;
let score = 20;
let highscore = 0;
let result = calcMultiplication(firstNumber, secondNumber);

function startGame() {
  document.querySelector(
    ".numbers"
  ).textContent = `${firstNumber} x ${secondNumber}`;
  document.querySelector(".play").textContent = "Jeszcze raz!";
  document.querySelector("main").style.display = "flex";
  document.querySelector(".score").textContent = score;
}

function calcMultiplication(a, b) {
  return a * b;
}

function checkAnswer() {
  const answer = document.querySelector(".answer").value;
  console.log(answer);
  console.log(!answer);
  // no answer
  if (!answer) {
    document.querySelector(".message").textContent = "Nie wpisałeś odpowiedzi";
  }
  // answer is to high
  else if (Number(answer) > result) {
    document.querySelector(
      ".message"
    ).textContent = `${firstNumber} x ${secondNumber} to mniej niż ${answer}. Policz jeszcze raz!`;
    score--;
    document.querySelector(".score").textContent = score;
  }
  //answer is to low
  else if (Number(answer) < result) {
    document.querySelector(
      ".message"
    ).textContent = `${firstNumber} x ${secondNumber} to więcej niż ${answer}. Policz jeszcze raz!`;
    score--;
    document.querySelector(".score").textContent = score;
  }
  // player win
  else if (Number(answer) === result) {
    document.querySelector(
      ".message"
    ).textContent = `Doskonale! ${firstNumber} x ${secondNumber} to ${result}.`;
    score++;
    document.querySelector(".score").textContent = score;
  }
}

document.querySelector(".play").addEventListener("click", startGame);
document.querySelector(".check")?.addEventListener("click", checkAnswer);

const answer = function (message) {
  document.querySelector(".answer").textContent = message;
};

let secretNumber;
const scrollButton = document.querySelector(".start");
document.querySelector(".start").addEventListener("click", function () {
  if (!Number(document.querySelector(".input_start").value)) {
    document.querySelector(".warn").textContent = "Not a number😡";
    document.querySelector(".warn").style.backgroundColor = "lightcoral";
    document.querySelector(".warn").style.border = "2px solid red";
  } else {
    let high = document.querySelector(".input_start").value;
    secretNumber = Math.trunc(Math.random() * high) + 1;

    const targetElement = document.querySelector(".container");
    targetElement.scrollIntoView({ behavior: "smooth" });
    document.querySelector(".warn").textContent = "";
    document.querySelector(".warn").style.backgroundColor = "";
    document.querySelector(".warn").style.border = "";
  }
});

// let high = document.querySelector('.input_start').textContent
// let secretNumber = Math.trunc(Math.random() * high) + 1;
let tries = 10;
let highscore = 0;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess_input").value);

  if (!guess) {
    answer("Not a number😡");
  } else if (guess === secretNumber) {
    answer("WOW! You win🏅");
    document.querySelector(".answer").style.fontSize = "40px";
    document.querySelector(".container").style.backgroundColor = "lightgreen";

    if (tries > highscore) {
      highscore = tries;
      document.querySelector(".highscore_number").textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (tries > 1) {
      answer(guess > secretNumber ? "Too high📈" : "Too low📉");
      tries--;
      document.querySelector(".try_number").textContent = tries;
    } else {
      answer("You lost😔");
      document.querySelector(".try_number").textContent = 0;
    }
  }
});

document.querySelector(".again_btn").addEventListener("click", function () {
  tries = 10;
  answer("Guessing...");
  document.querySelector(".try_number").textContent = tries;
  document.querySelector(".guess_input").value = "";
  const targetElement = document.querySelector(".again_btn");
  targetElement.scrollIntoView({ behavior: "smooth" });
  document.querySelector(".container").style.backgroundColor = "lightgray";
  document.querySelector(".answer").style.width = "30px";
  document.querySelector(".input_start").value = "";
  secretNumber = 0;
});

document.querySelector(".again_btn2").addEventListener("click", function () {
  tries = 10;

  answer("Guessing...");
  document.querySelector(".try_number").textContent = tries;
  document.querySelector(".guess_input").value = "";
  const targetElement = document.querySelector(".again_btn");
  targetElement.scrollIntoView({ behavior: "smooth" });
  document.querySelector(".container").style.backgroundColor = "lightgray";
  document.querySelector(".answer").style.width = "30px";
  document.querySelector(".input_start").value = "";
  secretNumber = 0;
});

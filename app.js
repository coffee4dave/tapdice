const title = document.querySelector("#title");
const body = document.querySelector("body");
const p1 = document.querySelector("#p1");
const p2 = document.querySelector("#p2");
const message = document.querySelector("#message");

window.onload = () => {
  console.log("loaded");
  p1.classList.add("dice", "dice1");
  p2.classList.add("dice", "dice1");
};

body.addEventListener("click", () => {
  let values = spin();

  p1.classList = "";
  p2.classList = "";

  p1.classList.add("dice", "dice" + values[0]);
  p2.classList.add("dice", "dice" + values[1]);

  if (values[0] > values[1]) {
    message.textContent = "Player 1 Wins!";
  } else if (values[0] === values[1]) {
    message.textContent = "Tie!";
  } else {
    message.textContent = "Player 2 Wins!";
  }
});

function spin() {
  let values = [];

  p1.classList = "";
  p2.classList = "";
  p1.classList.add("dice", "spin");
  p2.classList.add("dice", "spin");

  for (let i = 0; i < 10; i++) {
    values.push(randNum(1, 6));
    values.push(randNum(1, 6));

    p1.classList.add("dice" + values[0]);
    p2.classList.add("dice" + values[1]);
  }

  return values;
}

function randNum(base, limit) {
  return Math.floor(Math.random() * limit) + base;
}

function test() {
  console.log("test start");
  for (let i = 1; i < 100000; i++) {
    let result = randNum(1, 6);
    if (result < 1 || result > 6) {
      console.log("out of range");
    }
  }
  console.log("test complete");
}

// test();
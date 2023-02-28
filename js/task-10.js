function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const controls = document.querySelector(".controls");
const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");
const numberInput = document.querySelector("div#controls > input");
const boxes = document.querySelector("#boxes");

createBtn.addEventListener("click", processClick);
destroyBtn.addEventListener("click", () => (boxes.innerHTML = ""));

function processClick() {
  createBoxes(numberInput.value);
}

function createBoxes(amount) {
  let markup = "";
  let color;
  let dim = 30;
  for (let i = 1; i <= amount; i++) {
    color = getRandomHexColor();
    markup += `<div style="height : ${dim}px; width : ${dim}px; background-color : ${color}"></div>`;
    dim += 10;
  }
  boxes.innerHTML = markup;
}

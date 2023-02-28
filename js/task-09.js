function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const changeColorBtn = document.querySelector(".change-color");
function changeBackgroundColor() {
  const outputSpan = document.querySelector(".color");
  const newColor = getRandomHexColor();
  outputSpan.innerHTML = newColor;
  document.body.style.backgroundColor = newColor;
}
changeColorBtn.addEventListener("click", changeBackgroundColor);

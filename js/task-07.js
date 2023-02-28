const fontSizeControl = document.querySelector("#font-size-control");
const outputSpan = document.querySelector("#text");
fontSizeControl.addEventListener("input", (event) => {
  outputSpan.style.fontSize = `${event.currentTarget.value}px`;
});

const input = document.querySelector("#validation-input");
const dataLength = input.dataset.length;
input.addEventListener("blur", (event) => {
  input.classList.add("invalid");
  if (event.currentTarget.value.length == dataLength) {
    input.classList.replace("invalid", "valid");
  }
});

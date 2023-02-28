let counterValue = 0;
const decBtn = document.querySelector('button[data-action="decrement"]');
const incBtn = document.querySelector('button[data-action="increment"]');
const valueSpan = document.querySelector("#value");
const decrementCounterValue = () => {
  --counterValue;
  valueSpan.innerHTML = counterValue;
};
const incrementCounterValue = () => {
  ++counterValue;
  valueSpan.innerHTML = counterValue;
};
decBtn.addEventListener("click", decrementCounterValue);
incBtn.addEventListener("click", incrementCounterValue);

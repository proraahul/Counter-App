const display = document.querySelector(".counter_preview");
const Allbtns = document.querySelector("#allBtns");

Allbtns.addEventListener("click", counter);

let value = 0;
function counter(e) {
  const btn = e.target.id;
  if (btn === "decrement") {
    value -= 1;
  } else if (btn === "increment") {
    value += 1;
  } else {
    value = 0;
  }

  display.innerHTML = value;
}

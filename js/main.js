let blue = document.getElementById("blue");
let gray = document.getElementById("gray");
let green = document.getElementById("green");

let textboxes = document.querySelector(".center");

blue.addEventListener("click", () => {
  textboxes.innerHTML = `you have clicked   <span class="blue-text"> blue</span>`;
});
gray.addEventListener("click", () => {
  textboxes.innerHTML = `you have clicked  <span class="gray-text">gray</span>`;
});
green.addEventListener("click", () => {
  textboxes.innerHTML = `you have clicked  <span class="green-text">green</span>`;
});

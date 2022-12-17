const add = document.querySelector("#add");
const subtract = document.querySelector("#subtract");
const btn = document.querySelector("#btn");
const output = document.querySelector("#output");
const box = document.querySelector("#box");
var i = 0;

add.addEventListener("click", function () {
  i++;
  output.innerText = i;
  if (i > 0) {
    box.style.background = "green";
  }
});

subtract.addEventListener("click", function () {
  i--;
  output.innerText = i;
  if (i < 0) {
    box.style.background = "red";
  }
});

btn.addEventListener("click", function () {
  i = 0;
  output.innerHTML = i;
  if (i === 0) {
    box.style.background = "yellow";
  }
});

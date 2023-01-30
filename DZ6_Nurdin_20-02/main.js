const block_parent = document.querySelector(".parent");
const level_easy = document.querySelector(".level_easy");
const level_difficult = document.querySelector(".level_difficult");
const btn_level_easy = document.querySelector(".btn_level_easy");
const btn_level_difficult = document.querySelector(".btn_level_difficult");

btn_level_easy.addEventListener("click", () => {
  level_easy.style.display = "block";
  block_parent.style.display = "none";
});

btn_level_difficult.addEventListener("click", () => {
  level_difficult.style.display = "block";
  block_parent.style.display = "none";
});
//////////////////////////////////////////////////////////////////////
const block_1 = document.querySelector(".block_1");
const block_2 = document.querySelector(".block_2");
const block_3 = document.querySelector(".block_3");
const random_info = document.querySelector(".random_info");
const back = document.querySelector(".child_1");
const down_text = document.querySelector(".down_text");
//////
let colorFull = () => {
  let one = Math.floor(Math.random() * 255);
  let two = Math.floor(Math.random() * 255);
  let three = Math.floor(Math.random() * 255);
  return `rgb(${one}, ${two}, ${three})`;
};
let one = colorFull();
let two = colorFull();
let three = colorFull();

const arrColor = [one, two, three];

const randomInfoFC = () => {
  const count = Math.floor(Math.random() * 3);
  return arrColor[count];
};
const randomColor = randomInfoFC();

block_1.style.backgroundColor = one;
block_2.style.backgroundColor = two;
block_3.style.backgroundColor = three;

random_info.innerHTML = randomColor;
random_info.style.color = randomColor;

block_1.addEventListener("click", () => {
  console.log(block_1.style.backgroundColor);
  console.log(one);
  if (block_1.style.backgroundColor === randomColor) {
    back.style.backgroundColor = randomColor;

    // level_easy.style.backgroundColor = random_info;
    console.log("Вы проиграли!");
    down_text.innerHTML = "Вы выиграли!";
    setTimeout(() => {
      location.reload();
    }, 2000);
  } else {
    console.log("не тот цвет");
    down_text.innerHTML = "Вы проиграли!!!!";
    setTimeout(() => {
      location.reload();
    }, 2000);
  }
});

block_2.addEventListener("click", () => {
  console.log(block_2.style.backgroundColor);
  console.log(one);
  if (block_2.style.backgroundColor === randomColor) {
    back.style.backgroundColor = randomColor;

    console.log("Вы выиграли!");
    down_text.innerHTML = "Вы выиграли!";
    setTimeout(() => {
      location.reload();
    }, 2000);
  } else {
    console.log("не тот цвет");
    down_text.innerHTML = "Вы проиграли!!!!";
    setTimeout(() => {
      location.reload();
    }, 2000);
  }
});

block_3.addEventListener("click", () => {
  console.log(block_3.style.backgroundColor);
  console.log(one);
  if (block_3.style.backgroundColor === randomColor) {
    back.style.backgroundColor = randomColor;
    // level_easy.style.backgroundColor = random_info;
    console.log("Вы выиграли!");
    down_text.innerHTML = "Вы выиграли!";
    setTimeout(() => {
      location.reload();
    }, 2000);
  } else {
    console.log("не тот цвет");
    down_text.innerHTML = "Вы проиграли!!!!";
    setTimeout(() => {
      location.reload();
    }, 2000);
  }
});

console.log(block_1.style.backgroundColor);

//////////////////////////////////////////////////////////////////////

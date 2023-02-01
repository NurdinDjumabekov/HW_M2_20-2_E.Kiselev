const block_parent = document.querySelector(".parent");
const level_easy = document.querySelector(".level_easy");
const btn_level_easy = document.querySelector(".btn_level_easy");

btn_level_easy.addEventListener("click", () => {
  level_easy.style.display = "block";
  block_parent.style.display = "none";
});

//////////////////////////////////////////////////////////////////////

const block_1 = document.querySelector(".block_1");
const block_2 = document.querySelector(".block_2");
const block_3 = document.querySelector(".block_3");
/////////
const random_info = document.querySelector(".random_info");
const back = document.querySelector(".child_1");
const down_text = document.querySelector(".down_text");
//////
let colorFull = () => {
  let colorOne = Math.floor(Math.random() * 255);
  let colorTwo = Math.floor(Math.random() * 255);
  let colorThree = Math.floor(Math.random() * 255);
  return `rgb(${colorOne}, ${colorTwo}, ${colorThree})`;
};

let one = colorFull();
let two = colorFull();
let three = colorFull();

const arrColor = [one, two, three];
const randomInfoFC = () => {
  const count = Math.floor(Math.random() * 3); // выбирает одно раднодное число из 3х
  console.log(count);
  return arrColor[count];
};
const randomColor = randomInfoFC();

console.log(randomColor);

block_1.style.backgroundColor = one;
block_2.style.backgroundColor = two;
block_3.style.backgroundColor = three;

random_info.innerHTML = randomColor;
// random_info.style.color = randomColor;

block_1.addEventListener("click", () => {
  // console.log(block_1.style.backgroundColor);
  // console.log(one);
  if (block_1.style.backgroundColor === randomColor) {
    back.style.backgroundColor = randomColor;

    // level_easy.style.backgroundColor = random_info;
    down_text.innerHTML = "Вы выиграли! ";
    console.log("Вы выиграли");
    setTimeout(() => {
      location.reload();
    }, 2000);
  } else {
    console.log("это не тот цвет!");
    down_text.innerHTML = "Вы проиграли!!!!";
    setTimeout(() => {
      location.reload();
    }, 2000);
  }
});

block_2.addEventListener("click", () => {
  // console.log(block_2.style.backgroundColor);
  // console.log(one);
  if (block_2.style.backgroundColor === randomColor) {
    back.style.backgroundColor = randomColor;

    console.log("Вы выиграли!");
    down_text.innerHTML = "Вы выиграли!";
    setTimeout(() => {
      location.reload();
    }, 2000);
  } else {
    console.log("это не тот цвет");
    down_text.innerHTML = "Вы проиграли!!!!";
    setTimeout(() => {
      location.reload();
    }, 2000);
  }
});

block_3.addEventListener("click", () => {
  // console.log(block_3.style.backgroundColor);
  // console.log(one);
  if (block_3.style.backgroundColor === randomColor) {
    back.style.backgroundColor = randomColor;
    // level_easy.style.backgroundColor = random_info;
    console.log("Вы выиграли!");
    down_text.innerHTML = "Вы выиграли!";
    setTimeout(() => {
      location.reload();
    }, 2000);
  } else {
    console.log("это не тот цвет");
    down_text.innerHTML = "Вы проиграли!!!!";
    setTimeout(() => {
      location.reload();
    }, 2000);
  }
});

//////////////////////////////////////////////////////////////////////
const level_difficult = document.querySelector(".level_difficult");
const btn_level_difficult = document.querySelector(".btn_level_difficult");

btn_level_difficult.addEventListener("click", () => {
  level_difficult.style.display = "block";
  block_parent.style.display = "none";
});

////////

const difficult_block_1 = document.querySelector(".difficult_block_1");
const difficult_block_2 = document.querySelector(".difficult_block_2");
const difficult_block_3 = document.querySelector(".difficult_block_3");
const difficult_block_4 = document.querySelector(".difficult_block_4");
const difficult_block_5 = document.querySelector(".difficult_block_5");
const difficult_block_6 = document.querySelector(".difficult_block_6");
///////////
const difficult_random_info = document.querySelector(".difficult_random_info");
const difficult_back = document.querySelector(".difficul_inner");
const difficult_down_text = document.querySelector(".difficult_down_text");
//////
let difficult_colorFull = () => {
  let colorOne = Math.floor(Math.random() * 255);
  let colorTwo = Math.floor(Math.random() * 255);
  let colorThree = Math.floor(Math.random() * 255);
  return `rgb(${colorOne}, ${colorTwo}, ${colorThree})`;
};
let difficul_one = difficult_colorFull();
let difficul_two = difficult_colorFull();
let difficul_three = difficult_colorFull();
let difficul_four = difficult_colorFull();
let difficul_five = difficult_colorFull();
let difficul_six = difficult_colorFull();

const difficult_arrColor = [
  difficul_one,
  difficul_two,
  difficul_three,
  difficul_four,
  difficul_five,
  difficul_six,
];
const randomizer = () => {
  const count = Math.floor(Math.random() * 6); // выбирает одно раднодное число из 3х
  console.log(count);
  return difficult_arrColor[count];
};
const random_difficult_color = randomizer();
console.log(random_difficult_color);

difficult_block_1.style.backgroundColor = difficul_one;
difficult_block_2.style.backgroundColor = difficul_two;
difficult_block_3.style.backgroundColor = difficul_three;
difficult_block_4.style.backgroundColor = difficul_four;
difficult_block_5.style.backgroundColor = difficul_five;
difficult_block_6.style.backgroundColor = difficul_six;

difficult_random_info.innerHTML = random_difficult_color;

difficult_block_1.addEventListener("click", () => {
  // console.log(block_1.style.backgroundColor);
  // console.log(one);
  if (difficult_block_1.style.backgroundColor === random_difficult_color) {
    difficult_back.style.backgroundColor = random_difficult_color;

    // level_easy.style.backgroundColor = random_info;
    difficult_down_text.innerHTML = "Вы выиграли! ";
    console.log("Вы выиграли");
    setTimeout(() => {
      location.reload();
    }, 2000);
  } else {
    console.log("это не тот цвет!");
    difficult_down_text.innerHTML = "Вы проиграли!!!!";
    setTimeout(() => {
      location.reload();
    }, 2000);
  }
});
difficult_block_2.addEventListener("click", () => {
  // console.log(block_1.style.backgroundColor);
  // console.log(one);
  if (difficult_block_2.style.backgroundColor === random_difficult_color) {
    difficult_back.style.backgroundColor = random_difficult_color;

    // level_easy.style.backgroundColor = random_info;
    difficult_down_text.innerHTML = "Вы выиграли! ";
    console.log("Вы выиграли");
    setTimeout(() => {
      location.reload();
    }, 2000);
  } else {
    console.log("это не тот цвет!");
    difficult_down_text.innerHTML = "Вы проиграли!!!!";
    setTimeout(() => {
      location.reload();
    }, 2000);
  }
});
difficult_block_3.addEventListener("click", () => {
  // console.log(block_1.style.backgroundColor);
  // console.log(one);
  if (difficult_block_3.style.backgroundColor === random_difficult_color) {
    difficult_back.style.backgroundColor = random_difficult_color;

    // level_easy.style.backgroundColor = random_info;
    difficult_down_text.innerHTML = "Вы выиграли! ";
    console.log("Вы выиграли");
    setTimeout(() => {
      location.reload();
    }, 2000);
  } else {
    console.log("это не тот цвет!");
    difficult_down_text.innerHTML = "Вы проиграли!!!!";
    setTimeout(() => {
      location.reload();
    }, 2000);
  }
});
difficult_block_4.addEventListener("click", () => {
  // console.log(block_1.style.backgroundColor);
  // console.log(one);
  if (difficult_block_4.style.backgroundColor === random_difficult_color) {
    difficult_back.style.backgroundColor = random_difficult_color;

    // level_easy.style.backgroundColor = random_info;
    difficult_down_text.innerHTML = "Вы выиграли! ";
    console.log("Вы выиграли");
    setTimeout(() => {
      location.reload();
    }, 2000);
  } else {
    console.log("это не тот цвет!");
    difficult_down_text.innerHTML = "Вы проиграли!!!!";
    setTimeout(() => {
      location.reload();
    }, 2000);
  }
});
difficult_block_5.addEventListener("click", () => {
  // console.log(block_1.style.backgroundColor);
  // console.log(one);
  if (difficult_block_5.style.backgroundColor === random_difficult_color) {
    difficult_back.style.backgroundColor = random_difficult_color;

    // level_easy.style.backgroundColor = random_info;
    difficult_down_text.innerHTML = "Вы выиграли! ";
    console.log("Вы выиграли");
    setTimeout(() => {
      location.reload();
    }, 2000);
  } else {
    console.log("это не тот цвет!");
    difficult_down_text.innerHTML = "Вы проиграли!!!!";
    setTimeout(() => {
      location.reload();
    }, 2000);
  }
});
difficult_block_6.addEventListener("click", () => {
  // console.log(block_1.style.backgroundColor);
  // console.log(one);
  if (difficult_block_6.style.backgroundColor === random_difficult_color) {
    difficult_back.style.backgroundColor = random_difficult_color;

    // level_easy.style.backgroundColor = random_info;
    difficult_down_text.innerHTML = "Вы выиграли! ";
    console.log("Вы выиграли");
    setTimeout(() => {
      location.reload();
    }, 2000);
  } else {
    console.log("это не тот цвет!");
    difficult_down_text.innerHTML = "Вы проиграли!!!!";
    setTimeout(() => {
      location.reload();
    }, 2000);
  }
});

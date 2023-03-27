const textBlock = document.querySelector("#p_text");
const btn_lenght = document.querySelector(".btn_lenght");
const btn_worldG = document.querySelector(".btn_worldG");
const btn_worldS = document.querySelector(".btn_worldS");
const sort_block = document.querySelector(".sort_block");
let allText = textBlock.innerHTML;
////////////////////////////////
btn_lenght.addEventListener("click", () => {
  allText.split(" ").filter((word) => {
    if (word.length > 8) {
      const sort_text = document.createElement("p");
      sort_text.innerHTML = word;
      sort_block.append(sort_text);
    }
  });
});
////////////////////////////////
btn_worldG.addEventListener("click", () => {
  let arrWord = ["а", "е", "ё", "и", "й", "о", "у", "ы", "ь", "э", "ю", "я"];
  allText.split(" ").filter((word) => {
    for (const i of arrWord) {
      if (word[0] === i.toLocaleUpperCase() || word[0] === i) {
        const sort_text = document.createElement("div");
        sort_text.innerHTML = word;
        sort_block.append(sort_text);
      }
    }
  });
});
////////////////////////////////
btn_worldS.addEventListener("click", () => {
  let arrWord = [
    "Б",
    "В",
    "Г",
    "Д",
    "Ж",
    "З",
    "Й",
    "К",
    "Л",
    "М",
    "Н",
    "П",
    "Р",
    "С",
    "Т",
    "Ф",
    "Х",
    "Ц",
    "Ч",
    "Ш",
    "Щ",
  ];
  allText.split(" ").filter((word) => {
    for (const i of arrWord) {
      if (word[0] === i.toLocaleLowerCase() || word[0] === i) {
        const sort_text = document.createElement("li");
        sort_text.innerHTML = word;
        sort_block.append(sort_text);
      }
    }
  });
});

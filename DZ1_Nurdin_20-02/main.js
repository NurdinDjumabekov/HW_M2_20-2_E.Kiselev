let namee = prompt("Введите ваше имя :");
let fam = prompt("Введите ваше фамилию :");
let otch = prompt("Введите ваше отчество :");
let all = namee + " " + fam + " " + otch;
alert("Здравствуйте, " + fam + " " + namee + " " + otch);
alert("Здравствуйте " + all);

/////////////////////////////////
let num_1 = Number(prompt("Введите первое число :"));
let num_2 = Number(prompt("Введите второе число :"));
if (num_1 > num_2) {
  alert("Число : " + num_1 + " больше!");
} else if (num_1 < num_2) {
  alert("Число : " + num_2 + " больше!");
} else {
  alert("Число : " + num_2 + " и " + "число : " + num_1 + "  равны!");
}

/////////////////////////////////

let traffic = Number(
  prompt("Выберите цвет светофора : 1.Зелёный 2.Желтый 3.Красный ")
);
switch (traffic) {
  case 1:
    alert("Можете идти...");
    break;
  case 2:
    alert("Ожидайте!");
    break;
  case 3:
    alert("СТОЙТЕ!");
    break;

  default:
    alert("error");
    break;
}

///////////////////////////////////////////
let traffic_1 = Number(
  prompt("Выберите цвет светофора : 1.Зелёный 2.Желтый 3.Красный ")
);
if (traffic_1 === 1) {
  alert("Можете идти...");
} else if (traffic_1 === 2) {
  alert("Ожидайте!");
} else if (traffic_1 === 3) {
  alert("СТОЙТЕ!");
} else {
  alert("error");
}

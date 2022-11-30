let namee = prompt("Введите ваше имя :");
let fam = prompt("Введите ваше фамилию :");
let otch = prompt("Введите ваше отчество :");
alert("Здрайствуйте, " + fam + " " + namee + " " + otch);

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
let i = true;
while (i === true) {
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
}

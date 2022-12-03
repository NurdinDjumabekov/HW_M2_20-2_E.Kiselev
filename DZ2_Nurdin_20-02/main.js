const bank = {
  nurberCard: "99685223652254",
  dateEnd: "2025.27.02",
  nameUser: "Nurdin",
  typeOfCARD: "Банковская карта",
  CVC: 173,
};
console.log(bank);
console.log(bank.nameUser);

///////////////////////////////////////////////////

const bankInfo = {
  num: 54,
  nameBank: "Optima",
  schedule: "Monday-Friday",
  nowWorks: true,
  bankPlace: {
    city: "Bishek",
    street: "Manas",
    homeNum: "119",
  },
};
console.log(bankInfo);
console.log(bankInfo.bankPlace);

///////////////////////////////////////////////////

let CardType = prompt("Выберит следующее : Unistream,RIA,Contact,MonkeyGram");
switch (CardType) {
  case "Unistream":
    console.log("Get balance from 'Unistream'");
    break;
  case "RIA":
    console.log("Get balance from 'RIA'");
    break;
  case "Contact":
    console.log("Get balance from 'Contact'");
    break;
  case "MonkeyGram":
    console.log("Get balance from 'MonkeyGram'");
    break;

  default:
    console.warn("Invalid card 'processing'");
    break;
}

///////////////////////////////////////////////////////

let num = Number(prompt("Введите число от 1 до 10ти"));
switch (num) {
  case 1:
    alert("1 => " + "I");
    break;
  case 2:
    alert("2 => " + "II");
    break;
  case 3:
    alert("3 => " + "III");
    break;
  case 4:
    alert("4 => " + "IV");
    break;
  case 5:
    alert("5 => " + "V");
    break;
  case 6:
    alert("6 => " + "VI");
    break;
  case 7:
    alert("7 => " + "VII");
    break;
  case 8:
    alert("8 => " + "VIII");
    break;
  case 9:
    alert("9 => " + "IX");
    break;
  case 10:
    alert("10 => " + "X");
    break;

  default:
    alert("Error");
    break;
}

///////////////////////////////////////////////////////////

let customerType = Number(prompt("Введите 1 либо 2"));
customerType === 1
  ? alert("физическое лицо")
  : customerType === 2
  ? alert("юридическое лицо")
  : alert("error");

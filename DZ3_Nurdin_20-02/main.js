let num = 0;
for (num; num < 100; num++) {
  if (num % 3 === 0) {
    console.log("Fizz " + num);
  } else if (num % 5 == 0) {
    console.log("Buzz " + num);
  } else if (num % 5 === 0 && num % 3 === 0) {
    console.log("Fizz-Buzz");
  } else {
    console.log(num);
  }
}

const bank = {
  nurberCard: "99685223652254",
  dateEnd: "2025.27.02",
  nameUser: "Nurdin",
  typeOfCARD: "Банковская карта",
  CVC: 173,
};
console.log(bank);
console.log(bank.nameUser);
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

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

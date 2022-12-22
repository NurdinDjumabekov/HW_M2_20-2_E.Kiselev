// const btnTime = document.querySelector(".btn_child_time");
// const btnStart = document.querySelector(".btn_child_1");
// const btnRestart = document.querySelector(".btn_child_2");
// let i = 0;
// btnStart.addEventListener("click", function timer() {
//   let stop = setInterval(() => {
//     i++;
//     btnTime.innerHTML = i;
//     if (i === 60) {
//       clearInterval(stop);
//     }
//   }, 1000);
// });
// btnRestart.addEventListener("click", function r() {
//   i = 0;
//   setInterval(() => {
//     let stop = setInterval(() => {
//       btnTime.innerHTML = i;
//       if (i === 60) {
//         clearInterval(stop);
//       }
//     }, 1000);
//   }, 0);
// });

////////////////////////////////////2й вариант///////////////////////////////////

const btnTime = document.querySelector(".btn_child_time");
const btnStart = document.querySelector(".btn_child_1");
const btnRestart = document.querySelector(".btn_child_2");
let i = 0;
btnStart.addEventListener("click", () => {
  if (i < 60) {
    let stop = setInterval(() => {
      i++;
      btnTime.innerHTML = i;
      if (i >= 60) {
        clearInterval(stop);
      }
    }, 1000);
    btnRestart.addEventListener("click", () => {
      i = 0;
      btnTime.innerHTML = i;
      clearInterval(stop);
    });
  }
});

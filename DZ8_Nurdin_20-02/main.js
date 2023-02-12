let arr = ["nurbol", "din", "rus", "bek", "djon"];
arr.map((i) => {
  let len = i.length;
  let oneWord = i[0].toLocaleUpperCase();
  let otherWord = i.substring(1, len);
  console.log(oneWord + otherWord);
});
console.log();

//////////////////////////////////////////////////////


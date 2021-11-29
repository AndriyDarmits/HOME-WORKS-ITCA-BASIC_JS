
let trimSymbol = (str, size) => {
  let count = 0;
  let filteredArr = [];

  if (size === 0) {
    return "";
  }
  if (size === undefined) {
    return str;
  }

  for (let char of str) {
    if (filteredArr[filteredArr.length - 1] === char) {
      if (count < size) {
        filteredArr.push(char);
        count++;
      }

    } else {
      count = 1;
      filteredArr.push(char);
    }
  }
  console.log(trimSymbol('sssaaaasssas', 2));


}

/*Необхідно реалізувати функцію, яка на вхід приймає масив та число, яке задає розмір чанка, а повертає новий масив який буде складатись з чанків заданого розміру
Example:
chunk(['a', 'b', 'c', 'd'], 2); // [['a', 'b'], ['c', 'd']]

chunk(['a', 'b', 'c', 'd'], 3); // [['a', 'b', 'c'], ['d']]

*/


let chunk = (arr, size) => {
  let chunkArr = [];
  let i = 0;
  while (i < arr.length) {
    chunkArr.push(arr.slice(i, i += size));
  }
  return chunkArr;
}

console.log(chunk(['a', 'b', 'c', 'd'], 2)); // [['a', 'b'], ['c', 'd']]

/*Необхідно реалізувати функцію, яка на вхід приймає стрічку, a повертає нову стрічку в якій кожен символ дублюється відповідно до наступного прикладу:
Example:
const str = 'MjtkuBovqrU';

repeatString(str) // 'M-Jj-Ttt-Kkkk-Uuuuu-Bbbbbb-Ooooooo-Vvvvvvvv-Qqqqqqqqq-Rrrrrrrrrr-Uuuuuuuuuuu'*/

const str = 'MjtkuBovqrU';
console.log(str.repeat(1));

let dashedArr = "";


let count = 1;
for (let char of str) {
  dashedArr += char.repeat(count++);


  dashedArr += "-";

}
let dashedArrNew = dashedArr.split("").slice(0, dashedArr.length - 1).join("");



console.log(dashedArrNew);





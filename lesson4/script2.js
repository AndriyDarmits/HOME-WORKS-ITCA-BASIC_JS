// вивести парні числа віж 2 -20;

/*
let arr = [];


for (let i = 2; i<=20;i+=2){
    arr.push(i);

}

console.log(arr);

let hundred;

do{
    hundred = +prompt("Введіть щось більше за  100");

}while(hundred < 100 || hundred === 0 || hundred === "undefined");


*/
//==========TASK3============= --------------------------(треба пофіксити)
// Вивести числа фібоначчі до 100
let fib = [];
fib[0] = 1;
fib[1] = 2;
let i = 1;
let temp;
let max = +prompt("Введітть границю ряду Фібоначі", 0);

do {
    i++;
    temp = fib[i - 2] + fib[i - 1];
    if (temp <= max) {
        fib[i] = temp;

    }
} while (temp < max);

console.log(fib);

//for (let i = 2; i <= 10; i++) {

//fib[i] = fib[i - 2] + fib[i - 1];


//}


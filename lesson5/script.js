// ================FUNCTION============
/*
//Реалізуйте функцію знаходження факторіала. (рекурсією)

function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}


//Написати функцію , яка приймає секунди, і перетворює їх у години хвилини та секунди у форматі «гг:хх:сс».
// якщо кількість годин більша за 23.59.59 - вивести повідомлення "Більше одного дня". 

let timestamp = +prompt("Write timestamp amount", 0);
convertSec(timestamp);

function convertSec(timestamp) {
    const hours = Math.floor(timestamp / 3600);
    const minutes = Math.floor((timestamp / 60) - (hours * 60));
    const second = Math.floor(timestamp % 60);
    if (hours <= 59 && minutes <= 59 && second <= 59) {
        console.log(`${hours}:${minutes}:${second}`);
    } else {
        console.log("more than one day");
    }
}



//Write a JavaScript function that generates a string id (specified length) of random characters.
//Sample character list : "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
function getRandomString(length) {
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let randomStr = "";
    let char;
    for (let i = 0; i < length; i++) {
        char = str[Math.floor(Math.random() * str.length)];
        randomStr += char;
    }

    console.log(randomStr);
}


getRandomString(5);
*/
function bubbleSort() {
    let inputArr = [12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213];
    for (let i = 0; i < inputArr.length; i++) {
        for (let j = 0; j < inputArr.length - i - 1; j++) {
            if (inputArr[j] > inputArr[j + 1]) {
                const tmp = inputArr[j];
                inputArr[j] = inputArr[j + 1];
                inputArr[j + 1] = tmp;
            }
        }
    }
    console.log(inputArr);
}
bubbleSort();


// function which gets its name


function andriiDarmits() {
    return console.log(arguments.callee.name);
}

andriiDarmits();
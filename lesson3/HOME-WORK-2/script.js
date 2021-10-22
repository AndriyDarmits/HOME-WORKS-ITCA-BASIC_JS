/*Class work*/



let str = "Andrii";
let str2 = "Bohdan";

alert(str==str2);// false





let str= "Картопля, картопля, буряк";

let arr = str.split(",");

alert(arr);


//====================================================

let cube = confirm("Throw first cube");
let number;
if(cube === true){
    number = Math.floor(Math.random()*(6-1+1)+1);
    console.log(number);

}else{
    number = 0;
    alert("Ви ніфіга не кинули")
}
let cube2 = confirm("Throw first cube");
let number2;
if(cube2 === true){
    number2 = Math.floor(Math.random()*(6-1+1)+1);
    console.log(number2)
} else{
    number2 = 0;
    alert("Ви ніфіга не кинули")
}

if(number == number2){
    alert("Congratulations ! You won a prize !!!");

}else{
    alert("You will win the next time")
}




//==============================================


let num1 = +prompt("Enter first value");
let num2 = +prompt("Enter second value");

if(num1 >= num2){
    alert("Let`s enter again");

}else{ console.log(`Random value is ${Math.floor(Math.random()*(num2-num1+1))+num1}`);
     }



//==================================== ТРЕ ПОФІКСИТИ(ПОФІКСИВ)

let a=+prompt("Введіть перше значення");
let b=+prompt("Введіть друге значення");
let temp;

function abc(){
    if(a<b){

       alert(Math.floor(Math.random()*(b-a+1))+a);
} else if(a>b){
        temp = a;
        a = b;
        b = temp;
    // ібо так
    //[a,b] = [b,a];
        console.log(a);
        console.log(b);
    alert(Math.floor(Math.random()*(b-a+1))+a);
}else{
    alert("Значення рівні");

}

}


abc();



//====================

let arr = [
    {name:"Andrii", age:15, hobby:["swimming", "football", "go hiking"]},
    {name:"Bohdan", age:18, hobby:["volleyball", "basketball", "chess"]}
];



// HOME WORK


//=============TASK2===================




// конвертер



let currencyAmount = +prompt("Введіть суму");
console.log(currencyAmount);

console.log(typeof(0));



const DOLLAR_RATE = 27;
const EURO_RATE = 31;
const GOLD_RATE = 1070;

if(  currencyAmount == 0 || typeof currencyAmount === "undefined" || isFinite(currencyAmount)===false){
    alert("Ви нічого не ввели");
} else{
    alert(`Dollar: ${(Math.abs(currencyAmount/DOLLAR_RATE)).toFixed(2)}, Euro: ${(Math.abs(currencyAmount/EURO_RATE)).toFixed(2)}, Gold(g): ${(Math.abs(currencyAmount/GOLD_RATE)).toFixed(2)},`);

}





//=============TASK3===================


const DISCOUNT_UP_TO_500 = 0.99 ;
const DISCOUNT_FROM_500_TO_1000 = 0.95;
const DISCOUNT_GREATERTHAN_1000 = 0.9;
const ADD_BONUS = 200;


let getSum = +prompt("Введіть суму замовлення");

if( getSum> 0 && getSum< 500){
    alert("До оплати "+ getSum*DISCOUNT_UP_TO_500);

}else if(getSum>= 500 && getSum<1000){
    alert("До оплати "+ getSum*DISCOUNT_FROM_500_TO_1000);

}else if(getSum>=1000){
        alert("До оплати "+ getSum*DISCOUNT_GREATERTHAN_1000);

}else if(getSum ===0|| getSum === "undefined" || isFinite(getSum) === false){
    alert("Чорт забирай, введи щось людське");

}else{
    alert("Не зрозумів тебе");

}



//=============TASK4===================

let mark = 0;

if((prompt("Скільки тобі років")) === "21"){
    mark++;
}else{

    alert("Не вгадав");

}
if((prompt("Звідки ти ?").toLowerCase()) === "бурштин"){
    mark++;
}else{
    alert("Не вгадав");

}
if((prompt("Як звати сестру")).toLowerCase() === "аня"){
    mark++;
}else{
    alert("Не вгадав");

}
if((prompt("Як звати маму ?")).toLowerCase() === "світлана"){
    mark++;
}else{
    alert("Не вгадав");

}
if((prompt("Як звати тата ?")).toLowerCase() === "ігор"){
    mark++;
}else{
    alert("Не вгадав");

}

console.log("Ти відповів на "+ mark + " питань");


if(mark == 5){
    mark ++;
    alert("Вітаю, ти відповів на всі питання і отримуєш "+ mark);
}
console.log(mark);


//=============TASK6===================


let keyWord = prompt("Введіть значення на клавіатурі від 1 до = ");
        switch( keyWord){
            case ("1") :
                   alert("!");
                   break;
            case ("2") :
                   alert("@");
                   break;
            case ("3") :
                   alert("#");
                   break;
            case ("4") :
                   alert("$");
                   break;
            case ("5") :
                   alert("%");
                   break;
            case ("6") :
                   alert("^");
                   break;
            case ("7") :
                   alert("&");
                   break;
            case ("8") :
                   alert("*");
                   break;
            case ("9") :
                   alert("(");
                   break;
            case ("0") :
                   alert(")");
                   break;
            case ("-") :
                   alert("_");
                   break;
            case ("=") :
                   alert("+");
                   break;
            default:
                alert("Ви не ввели те, що потрібно");


           }

*/

//=============TASK5===================


let threeDigitNumber = prompt("Введіть тризначне число");
console.log(threeDigitNumber.length);

    if(threeDigitNumber.length == 3){
        if(threeDigitNumber[0]==threeDigitNumber[1] || threeDigitNumber[0] == threeDigitNumber[2] || threeDigitNumber[1] == threeDigitNumber[2]){
            alert("В числі є принаймі 2 однакові цифри")
        }else {
            alert("Немає повторень в числі");

        }
    } else{
        alert("Ви не ввели тризначне число");

    }





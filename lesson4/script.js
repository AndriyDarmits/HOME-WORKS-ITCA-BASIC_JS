/*
for (let i=0; i<=10;i++){
    console.log(i);

}



for(let i = 0; i<5; i++){
    if(i===3){
        break;
    }

    alert(i);

}

for(let i = 0; i<5; i++){
    if(i===3){
        continue;
    }

    alert(i);

}

//=============
let i= 0;
while( i <5){
    alert(i);
    i++;

}



do{
    console.log(i);
    i++;

}while(i<5);



//========================================================================================================================================================ГЛЯНУТИ forEach and Map



//Дано масив елементів типу number . Порівняйте перший і останній елемент і видаліть менший з них. Виведіть в консоль оновлений масив.


let arr = [2, 3, 5, 0];
// [2, 3, 5]

if(arr[0] < arr[arr.length -1]){
    arr.shift();
    alert(arr);


}else{
    arr.shift();
    alert(arr);

}







// ========================ДОРОБИТИ ТАСК -- доробив

let arr = ["super", "cool", "old", "javascript"];

let minLength = arr[0].length;
let index = 0;

for (let i = 0; i < arr.length; i++){

    if(arr[i].length < minLength){

        minLength = arr[i].length;

        index = i;


    }




}

arr.splice(index,1);


console.log(arr);







/*

//============================================



let arr = [[10, 5, 1],[2,7,4],[3,6,8]];

let min = arr[0][0];

   for(let i = 0; i < arr.length; i++){

       for(let j = 0; j < arr[i].length; j++){

           if(arr[i][j] < min){
               min = arr[i][j];

           }
       }
   }
console.log(min);

//================================================

let arr = [];

for(let i = 0; i<= 16; i++){
    if(i%2 ===0 && i !==0){

      arr.push(i);

    }
}

console.log(arr);




let arr =[43, "what", 9, true, "cannot", false, "be", 3, true]

let arr2 = arr.reverse();

console.log(arr2);




//==========================================




let arr1 = [4, 6, 7];
let arr2 = [8, 1, 9];
let arr3 = [];


for(let i = 0; i < arr1.length;  i++){
   arr3.push(arr1[i] + arr2[i]);

}


console.log(arr3);



//===========task 9 (треба пофіксити) ---- пофіксив

let str1 = "javascript";

let arr2 = str1.split("");



for (let i = 1; i < arr2.length; i+=2){
    arr2[i] = "Z";

}



console.log(arr2.join(""));



//Дано масив який складається з масивів чисел. Вирахуйте суми чисел у всіх підмасивах і виведіть на екран найбільшу суму.


let arr = [[2, 3, 5], [10, -1, 2], [6, 1, 0]];

let maxSum = 0;

let sum = 0
for(let i = 0; i < arr.length; i++){

     for(let j = 0; j < arr[i].length; j++){

           sum += arr[i][j];

       }


       if(sum > maxSum){
           maxSum = sum;

       }
       sum = 0;

   }

console.log(maxSum);





// --------------------------прості числа

let n = +prompt("Введіть діапазон ?");
nextPrime:
     for(let i = 2; i <= n; i++){
         for(let j = 2; j < i; j++){
             if(i%j == 0) continue nextPrime ;
         }
         alert(i);

     }



//вивід онлайн користувачів
let usersObj = {
    Alan: {
      online: false
    },
    Jeff: {
      online: true
    },
    Sarah: {
      online: false
    }
  }



function countOnline(usersObj) {

   let count = 0;
  for (let user in usersObj){
      console.log(usersObj[user].online);

    if(usersObj[user].online === true){
      count ++;

    }
    console.log(count);
  }


  }

  countOnline(usersObj);

*/
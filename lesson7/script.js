/*
/*  const arr = ['a', 'b', 'c'];

arr.forEach((element, index) => { // приймає 3 значення, два з них не є обов'язкові
  console.log('el =', element);
  console.log('index =', index);

});


const arr1 = arr.map(el => el + "!!!"); // повертає масив
console.log("arr1", arr1);


const arr2 = [1, 2, 2];


const result = arr2.reduce((sum, current) => {
  return sum + current;
}, 0);

console.log(result);




// має бути че чейн якийсь


//===========FILTER / FIND===============

const arr2 = [1, 2, 5, 'a', "b"];

let arrFil = arr2.filter(el => {
  return typeof el === 'string';
});

console.log(arrFil);


// поєднання методів
const chain = arr2
  .filter(el => typeof el === 'number')
  .reduce((sum, current) => {
    return sum + current;
  }, 0);

console.log(chain);


const arr = [
  {
    name: "John",
    age: 15
  },
  {
    name: "Andrii",
    age: 15
  }
];


const person = arr.find(el => el.name === 'John');

console.log(person);


const index = arr.findIndex(el => el.name === 'Andrii');

console.log(index);



//    =====================MAP============

let map = new Map;
map.set('1', 'Andrii');
map.set("2", 'Andrii');


console.log(map);
console.log(map.get("1"));


for (let key of map.keys()) {
  console.log("key", key);
}

for (let key of map.values()) {
  console.log("key", key);
}

map.forEach((val, key, map) => {
  console.log(val);
  console.log(key);
  console.log(map);
});


//альтернатива заопвнення МАР


let map1 = new Map([
  [111, "andrii"],
  [222, "darmits"]
]);

console.log(map1);




//=============SET====================


const arr = [1, 5, 6, 1, 4, 8, 7];

let set = new Set(arr);


console.log(set);



set.forEach(el => {
  console.log(el);
});

//в циклі  з мар і сет , такі методи як break і continue



// =============CLASSES==================


// constructor

function Person(name, age) {
  this.name = name;
  this.age = age;
}

const person1 = new Person("Andrii", 15);
const person2 = new Person("Bohdan", 25);
//--------------------------------------------------------------

class MyClass {

  engine = 'gas';
  constructor(name, model, year) {
    this.name = name;
    this.model = model;
    this.year = year;
  }

  fullCarName() {
    console.log(this.name + " " + this.model);
  }
}
const car1 = new MyClass("bmw", "x5", "2020");

car1.fullCarName();

console.log('car1', car1);






// defaul parameters

function defaulPar(name = "Andrii") {
  console.log("hello " + name);
}
defaulPar();


// деструктизація

let str = "hello";

let [a, b, c, d, f] = str; // крч, присвоїть кожній букві свою змінну




const obj = {
  fname: 'john',
  age: 33,
  height: 188
};

const { fname: a = 100, age: b, height: c } = obj; // якщо fname буде дорівнювати undefined, воно віщьме лефолтний параметр



console.log(fname, age, height);

console.log(a, b, c)



//spread opertor

let arr = ['a', 'b', 'c', 'd', 'e']


let [first, last, ...rest] = arr;



//простіший спосіб зробити копію об'єкта чи масива
let arr1 = ['a', 'b', 'c', 'd', 'e'];
let arr3 = [...arr1];

console.log(arr3);






function myFunc(x, y, z) {
  console.log(arguments.callee);
}

myFunc(1, 5, 6);

*/
//================HOMEWORK===========================


//! our task is to create a Circle constructor that creates a circle with a radius provided by an argument. 
//!The circles constructed must have two methods getArea() (PI*r^2) and getPerimeter() (2*PI*r) which
//!give both respective areas and perimeter (circumference). */
class Rectangle {
  constructor(sideA, sideB) {
    this.sideA = sideA
    this.sideB = sideB
  }
  getArea() { return this.sideA * this.sideB }
  getPerimeter() { return (this.sideA + this.sideB) * 2 }
}

/* let cicle = new Rectangle(5, 6);
console.log(cicle.getArea()); */

class Circle {
  // put your code here'
  constructor(radius) {
    this.radius = radius;
  }
  getArea() { return (Math.PI * Math.pow(this.radius, 2)).toFixed(2); }
  getPerimeter() { return (2 * Math.PI * this.radius).toFixed(2); }



}




// unquote and use run to test these cases:

let q = new Circle(4.44);
console.log(q.getArea());
console.log(q.getPerimeter());


//! Create a function that returns true if two arrays contain identical values, and false otherwise.
/*checkEquals([1, 2], [1, 3]) ➞ false

checkEquals([1, 2], [1, 2]) ➞ true

checkEquals([4, 5, 6], [4, 5, 6]) ➞ true
*/

let checkEquals = (arr1, arr2) => {
  if (arr1.length === arr2.length) {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
    return true;
  } else {
    return false;
  }
}
console.log(checkEquals([4, 5, 6], [4, 5, 6]));




//!Create a function that takes in a number as a string n and returns the number without trailing and leading zeros.
/*
Trailing Zeros are the zeros after a decimal point which don't affect the value (e.g. the last three zeros in 3.4000 and 3.04000).
Leading Zeros are the zeros before a whole number which don't affect the value (e.g. the first three zeros in 000234 and 000230).
Examples
removeLeadingTrailing("230.000") ➞ "230"
 
removeLeadingTrailing("00402") ➞ "402"
 
removeLeadingTrailing("03.1400") ➞ "3.14"
 
removeLeadingTrailing("30") ➞ "30" */


function removeLeadingTrailing(str) {
  return parseFloat(str);
}

console.log(removeLeadingTrailing("230.000"));





//! A salesman has a number of cities to visit. They want to calculate the total number of possible paths they could take, visiting each city once before returning home. Return the total number of possible paths a salesman can travel, given n cities.
/*
If we have cities A, B and C, possible paths would be:
 
A -> B -> C
A -> C -> B
B -> A -> C
B -> C -> A
C -> B -> A
C -> A -> B
... which gives us 6 as the possible number of paths.
/* 
Examples
paths(4) ➞ 24 */

let path = (num) => {
  if (num === 0 && num === 1) {
    return 1;
  } else {
    return num * path(n - 1);
  }
}

//!Create a function that takes in an array (slot machine outcome) and returns true if all elements in the array are identical, and false otherwise. The array will contain 4 elements.
/*
Examples
testJackpot(["@", "@", "@", "@"]) ➞ true
 
testJackpot(["abc", "abc", "abc", "abc"]) ➞ true
 
testJackpot(["SS", "SS", "SS", "SS"]) ➞ true
 
testJackpot(["&&", "&", "&&&", "&&&&"]) ➞ false */

let testJackpot = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1]) {
      return true;
    } else {
      return false;
    }

  }
}



//!Create a function that takes an array of numbers arr, a string str and return an array of numbers as per the following rules:
/*
"Asc" returns a sorted array in ascending order.
"Des" returns a sorted array in descending order.
"None" returns an array without any modification.
Examples
ascDesNone([4, 3, 2, 1], "Asc" ) ➞ [1, 2, 3, 4]
 
ascDesNone([7, 8, 11, 66], "Des") ➞ [66, 11, 8, 7]
 */

let ascDesNone = (arr, target) => {
  if (target.toLowerCase() === "asc") {
    return arr.sort((a, b) => a - b);
  } else if (target.toLowerCase() === "desc") {
    return arr.sort((a, b) => b - a);
  } else {
    return arr;
  }
}


//!create a function that takes a code of chess board square and return his color.
/*chessBoard("a1") ➞ "black"
 
chessBoard("e5") ➞ "black"
 
chessBoard("d1") ➞ "white"
 
even / even => "black"
odd / odd => "black"
even / odd => "white"
odd / even => "white"*/

function chessBoard(str) {
  let arr = str.split("");
  let horizontal = arr[0].charCodeAt();
  let vertical = arr[1];

  if ((horizontal <= 94 && horizontal >= 104) && (vertical <= 0 && vertical >= 8)) {
    if (horizontal % 2 === 0 && vertical % 2 === 0) {
      return "black";
    } else if (vertical % 2 !== 0 && horizontal % 2 !== 0) {
      return "black";
    } else if (vertical % 2 !== 0 && horizontal % 2 === 0) {
      return "white";
    } else if (vertical % 2 === 0 && horizontal % 2 !== 0) {
      return "white";
    }
  }


}

chessBoard("a2");



//!reate a function that takes an array of items, removes all duplicate items and returns a new array in the same sequential order as the old array (minus duplicates).

/*Examples
removeDups([1, 0, 1, 0]) ➞ [1, 0]

removeDups(["The", "big", "cat"]) ➞ ["The", "big", "cat"]

removeDups(["John", "Taylor", "John"]) ➞ ["John", "Taylor"]


let removeDups = (arr) => {
  let unique = [];
  for (let item of arr) {
    if (!unique.includes(item)) {
      unique.push(item);
    }
  }
  return unique;
}

 */




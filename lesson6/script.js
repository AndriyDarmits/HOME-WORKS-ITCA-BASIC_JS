// ================OBJECTS============

/*We have an array of objects representing different people in our contacts lists.

A lookUpProfile function that takes name and a property (prop) as arguments has been pre-written for you.

The function should check if name is an actual contact's firstName and the given property (prop) is a property of that contact.

If both are true, then return the "value" of that property.

If name does not correspond to any contacts then return the string No such contact.

If prop does not correspond to any valid properties of a contact found to match name then return the string No such property. */
/*const contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

function lookUpProfile(name, prop) {
  // Only change code below this line
for( let i = 0; i< contacts.length; i++){
  if(contacts[i].firstName === name){
    if(contacts[i].hasOwnProperty(prop)){
      return contacts[i][prop]
    }else{
      return "No such property"
    }

  }

}
return "No such contact"
  // Only change code above this line
}

lookUpProfile("Akira", "likes");
*/

/*. Створити обєкт який описує тварину (назву, вагу, вік, середню швидкість), і наступні функції для роботи з ним:
//  Функція яка виведе всю інформацію про тварину. 
//  Функція яка виведе за скільки тварина зможе подолати 1000 км. (врахуйте що тварина може рухатись не більше 12 годин у день). 
//  Функція яка зможе змінити назву тварини на більш детальну. 

    let animal = {
        name: "Tom",
        weight: 5,
        age: 8,
        averageSpeed: 48
    };


let animal = {
  name: "Tom",
  weight: 5,
  age: 8,
  averageSpeed: 48
};

let showInf = (animal) => {
  for (let prop in animal) {
    console.log(`${prop}: ${animal[prop]}`);
  }

};
showInf(animal);

let getDistanceTime = (animal) => {
  let time = 1000 / animal.averageSpeed;
  let day = 0;
  let hours = 0;

  if (time >= 12) {
    day = Math.floor(time / 12);
    hours = Math.floor(time - day * 12);
    console.log(` Days:${day} Hours ${hours}`);
  } else {
    console.log(`Hours ${hours}`);
  }
}



getDistanceTime(animal);

let changeName = (animal) => {
  let propName = prompt("Введіть назву проперті");
  animal['name'] = propName;
}



/*Створіть обєкт який має у собі 2 довжини сторін фігури. Додайте методи які будуть робити наступне - рахувати площу фігури, 
//  периметр фігури, зроблять фігуру 3-д, зададуть назву фігури, переведуть значення з сантиметрів у метри.

let sizeFigure = {
  x: 15,
  y: 10,
  canculateSquare: function () {
    return this.x * this.y;
  },
  canculatePer: function () {
    return (this.x + this.y) * 2;
  },
  become: function () {
    this.z = 15;
  },
  changeName: function (name) {
    this.name = name;
  },
  metersConvert: function () {
    this.x /= 100;
    this.y /= 100;
    this.z /= 100;
  }


};

console.log(sizeFigure.canculateSquare());
console.log(sizeFigure.canculatePer());
sizeFigure.become();
console.log(sizeFigure.z);
sizeFigure.changeName("square");
console.log(sizeFigure.name);
sizeFigure.metersConvert();
console.log('${sizeFigure.z}');

*/


/**Створимо аналог списка покупок (мінімум 5 покупок з всіма заданими пропертями. )
{
  tomato: {
    count: 5,
    price: 50,
    buy: false,
    outOfstore: true
  } , ...
}
Виводимо список покупок - спочатку ті які є в магазині потім яких немає. 
Виводимо список покупок які ми купили.
Додаємо функцію яка дозволить купити продукт.
Додаємо функцію яка просумує всі зроблені покупки і виведе результат.(не забуваємо що є значення кількості та ціни за одиницю товару)
Додаємо можливість збільшувати кількість товару.
Додаємо можливість зменшувати кількість товару(менше 0 бути не може). 

let list = {

  tomato: {
    count: 5,
    price: 50,
    buy: false,
    outOfstore: true
  },
  cucumber: {
    count: 1,
    price: 20,
    buy: true,
    outOfstore: true
  },
  potato: {
    count: 7,
    price: 30,
    buy: true,
    outOfstore: false
  },
  strawberry: {
    count: 3,
    price: 40,
    buy: false,
    outOfstore: true
  },
  banana: {
    count: 7,
    price: 25,
    buy: true,
    outOfstore: false
  }
};

let getList = (list) => {
  let inStock = [];
  let outStock = [];
  let bought = [];

  for (let item in list) {
    if (list[item].outOfstore === true) {
      inStock.push(item);
    } else {
      outStock.push(item);
    }

    if (list[item].buy === true) {
      bought.push(item);
    }
  }

  console.log(`В наявності ${inStock}`);
  console.log(`В наявності ${outStock}`);
  console.log(`В наявності ${bought}`);
}

getList(list);


let buyGoods = (list, nameGoods, amount) => {
  for (let prop in list) {
    if ((prop === nameGoods) && (list[prop].count !== 0) && (list[prop].count >= amount)) {
      list[prop].buy = true;
      list[prop].count -= amount;
      if (list[prop].count === 0) {
        list[prop].outOfstore = true;
      }
      break;
    }
  }
  return list[nameGoods];
}

console.log(buyGoods(list, "potato", 2));


//!Додаємо функцію яка просумує всі зроблені покупки і виведе результат.
//!(не забуваємо що є значення кількості та ціни за одиницю товару)

let sumPurchase = (list, nameGoods) => {
  let sum = 0;


  for (let el in nameGoods) {

    sum += nameGoods[el] * list[el].price;


  }
  return sum;

}




console.log(sumPurchase(list, { potato: 2, banana: 2 }));




let increaseList = (list, goodsName, quantity) => {

  list[goodsName].count += quantity;
  return list[goodsName];
}


console.log(increaseList(list, "potato", 10));



let decreaseList = (list, goodsName, quantity) => {
  if (list[goodsName].count >= quantity) {
    list[goodsName].count -= quantity;
  } else {
    list[goodsName].count = 0;
  }
  return list[goodsName];
}


console.log(decreaseList(list, "tomato", 4));

*/
/**Задана колекція [{name: "Yura", age: 55, hobby: ["films", "games", "hiking"], type: "Admin"}, {}, {},{}]. 
//  Вивести всіх адмінів. 
//  Вивести середній вік усіх працівників. 
//  Вивести тільки унікальні хоббі працівників.

    let employees = [
        {name: "Yura", age: 55, hobby: ["films", "games", "hiking"], type: "Admin"},
        {name: "Alex", age: 48, hobby: ["snorkerling", "reading"], type: "User"},
        {name: "Jack", age: 26, hobby: ["skating", "tennis playing", "games"], type: "User"},
        {name: "Roman", age: 31, hobby: ["painting", "music", "films"], type: "Admin"},
        {name: "Yan", age: 37, hobby: ["basketball", "fishing"], type: "User"}
    ]; */

let employees = [
  { name: "Yura", age: 55, hobby: ["films", "games", "hiking"], type: "Admin" },
  { name: "Alex", age: 48, hobby: ["snorkerling", "reading"], type: "User" },
  { name: "Jack", age: 26, hobby: ["skating", "tennis playing", "games"], type: "User" },
  { name: "Roman", age: 31, hobby: ["painting", "music", "films"], type: "Admin" },
  { name: "Yan", age: 37, hobby: ["basketball", "fishing"], type: "User" }
];



let getAdmins = (employees) => {

  let adminsList = [];
  for (let i = 0; i < employees.length; i++) {
    if (employees[i].type === "Admin") {
      adminsList.push(employees[i]);
    }
  }
  return adminsList;
}


console.log(getAdmins(employees));


let getAverAge = (employees) => {
  let sumAge = 0;
  for (let i = 0; i < employees.length; i++) {
    sumAge += employees[i].age;
  }
  return sumAge / employees.length;
}


console.log(getAverAge(employees));

let uniqueHobbies = (employees) => {

  let uniqueHobbiesArr = [];
  /*for (let i = 0; i < employees.length; i++) {
    for (let j = 0; j < employees[i].hobby.length; j++) {
      if (!uniqueHobbiesArr.includes(employees[i].hobby[j])) {
         uniqueHobbiesArr.push(employees[i].hobby[j]);
      } else {
        continue;
      }
    }
  }*/
  /* for (let itemArr of employees) {
    for (let itemHob of itemArr.hobby) {
      if (!uniqueHobbiesArr.includes(itemHob)) {
        uniqueHobbiesArr.push(itemHob);
      } else {
        continue;
      }
    }
  } 
  return uniqueHobbiesArr;*/
  for (let itemArr of employees) {

    uniqueHobbiesArr.push(itemArr.hobby.filter((itemHob) => !uniqueHobbiesArr.includes(itemHob)));
    /* f (!uniqueHobbiesArr.includes(itemHob)) {
      uniqueHobbiesArr.push(itemHob);
    } else {
      continue;
    } */

  }
  return uniqueHobbiesArr;

}



console.log(uniqueHobbies(employees));


/*  1. Створити список з допомогою роботи з домом, пронумерувати список та вивести всі його значення. 
    Населення відобразити в млн "40 млн". Київ та Україна підсвітити синьо-жовтим кольором. */

let CountryList = [
  {
    country: "Україна",
    capital: "Київ",
    count: 40000000
  },
  {
    country: "Грузія",
    capital: "Тбілісі",
    count: 10000000
  },
  {
    country: "Великобританія",
    capital: "Лондон",
    count: 100000000
  },
  {
    country: "США",
    capital: "Вашингтон",
    count: 300000000
  }];


document.body.style.background = "aqua";
let ol = document.createElement("ol");
document.body.append(ol);

for (let item of CountryList) {

  const li = document.createElement("li");
  const ulInner = document.createElement("ul");
  ulInner.style.listStyle = "none";
  ulInner.style.marginBottom = 10 + "px";
  li.append(ulInner);


  for (let liItem of Object.values(item)) {

    console.log(typeof liItem)
    const liInner = document.createElement("li");


    // if (typeof liItem === 'number' && liItem.toString().length >= 6) {
    //   liInner.textContent = liItem / 1000000 + " млн";
    //   ulInner.append(liInner);
    // } else {
    //   console.log(liItem);
    //   liInner.textContent = liItem;
    //   ulInner.append(liInner);

    // }

    liInner.textContent = `${typeof liItem === 'number' && liItem.toString().length >= 6 ? liItem / 1000000 + " млн" : liItem}`;
    if (liItem === "Україна") {
      liInner.style.color = "blue";
    } else if (liItem === "Київ") {
      liInner.style.color = "yellow";
    }
    ulInner.append(liInner);

  }




  ol.append(li);


}





/* //  2. Створити список в якому можна буде довільно змінювати колір для айтемів (палітра мінімум з 5 кольорів) */



let colourRanges = ["#00FFFF", "#00FF00", "#808000", "#800000", "#808080"];
const buttonList = document.createElement("div")
buttonList.style.display = "flex";
document.body.appendChild(buttonList);


for (let i = 0; i < colourRanges.length; i++) {
  const button = document.createElement("button");
  button.style.marginRight = 10 + "px";
  button.textContent = colourRanges[i];

  buttonList.append(button);

}


const unoderedList = document.createElement("ul");
const listItem = document.createElement("li");
listItem.textContent = "Anim do cillum anim minim cillum reprehenderit commodo. Deserunt cillum occaecat est commodo velit mollit proident commodo est occaecat commodo excepteur irure. Mollit eu consectetur ex amet pariatur Lorem est nulla culpa anim veniam laboris consectetur mollit. Occaecat cupidatat esse cupidatat incididunt dolor eu commodo. Cillum aliquip aute incididunt minim irure deserunt. Ullamco sit laboris consectetur minim laboris fugiat enim."

unoderedList.append(listItem);
buttonList.prepend(unoderedList);

buttonList.addEventListener("click", function (event) {
  console.log(event.target)

  for (let colour of colourRanges) {
    if (event.target.textContent === colour) {
      listItem.style.color = colour;
    }
  }

})






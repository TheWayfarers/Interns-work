const foodoutput = document.getElementById("foodoutput");
const foodbtn = document.getElementById("foodbtn");
const foodResetbtn = document.getElementById("foodResetbtn");

const beveragersoutput = document.getElementById("beveragersoutput");
const beveragersbtn = document.getElementById("beveragersbtn");
const beveragersResetbtn = document.getElementById("beveragersResetbtn");

const icecreamoutput = document.getElementById("icecreamoutput");
const icecreambtn = document.getElementById("icecreambtn");
const icecreamResetbtn = document.getElementById("icecreamResetbtn");

const food = ["Pizza", "Burger", "French Fries", "Salad"];
const beverags = ["Coke", "Pepsi", "Sprite", "Fanta"];
const icecream = ["Vanilla", "Chocolate", "Strawberry", "Mango"];


let foodindex = 0;
let beveragsindex = 0;
let icecreamindex = 0;

foodbtn.addEventListener("click", () => {
  foodoutput.textContent = food[foodindex];
  foodindex = (foodindex + 1) % food.length;
});

beveragersbtn.addEventListener("click", () => {
  beveragersoutput.textContent = beverags[beveragsindex];
  beveragsindex = (beveragsindex + 1) % beverags.length;
});

icecreambtn.addEventListener("click", () => {
  icecreamoutput.textContent = icecream[icecreamindex];
  icecreamindex = (icecreamindex + 1) % icecream.length;
});

foodResetbtn.addEventListener("click", () => {
  foodoutput.textContent = "Select your favorite food!";
  foodindex = 0;
});

beveragersResetbtn.addEventListener("click", () => {
  beveragersoutput.textContent = "Select your favorite beverages!";
  beveragsindex = 0;
});

icecreamResetbtn.addEventListener("click", () => {
  icecreamoutput.textContent = "Select your favorite ice cream!";
  icecreamindex = 0;
});
